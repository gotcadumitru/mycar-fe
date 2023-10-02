import ReactRefreshPlugin from '@pmmmwh/react-refresh-webpack-plugin'
import CopyPlugin from 'copy-webpack-plugin'
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import * as process from 'process'
import webpack from 'webpack'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'
import WorkboxWebpackPlugin from 'workbox-webpack-plugin'
import { BuildOptions } from './types/config'

const buildPlugins = (config: BuildOptions): webpack.WebpackPluginInstance[] => {
  const raw = Object.keys(process.env).reduce((env, key) => {
    // @ts-ignore
    env[key] = process.env[key]
    return env
  }, {})

  const env = Object.keys(raw).reduce((envs, key) => {
    // @ts-ignore
    envs[key] = JSON.stringify(raw[key])
    return envs
  }, {})

  const workboxPlugin = new WorkboxWebpackPlugin.InjectManifest({
    swSrc: config.paths.swSrc,
    swDest: 'sw.js',
    // Bump up the default maximum size (2mb) that's precached,
    // to make lazy-loading failure scenarios less likely.
    // See https://github.com/cra-template/pwa/issues/13#issuecomment-722667270
    maximumFileSizeToCacheInBytes: 20 * 1024 * 1024,
    exclude: [() => true],
    ...(config.isDev ? { exclude: [/./] } : undefined),
  })

  const plugins: webpack.WebpackPluginInstance[] = [
    new HtmlWebpackPlugin({
      template: config.paths.html,
      favicon: config.paths.favicon,
    }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/main.[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
    }),
    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(config.isDev),
      'process.env': env,
    }),
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        diagnosticOptions: {
          semantic: true,
          syntactic: true,
        },
        mode: 'write-references',
      },
      // disable ts errors
      issue: {
        include: [],
      },
    }),
    // new CompressionPlugin(), // gzip
  ]

  if (config.isWebpackBuild) {
    plugins.push(
      new CopyPlugin({
        patterns: [
          {
            from: 'public',
            globOptions: {
              ignore: ['**/index.html', '**/favicon.ico'],
            },
          },
        ],
      }),
    )
  }

  if (config.isDev) {
    plugins.push(new webpack.HotModuleReplacementPlugin(), new ReactRefreshPlugin())
    Object.defineProperty(workboxPlugin, 'alreadyCalled', {
      get() {
        return false
      },
      set() {
        // do nothing; the internals try to set it to true, which then results in a warning
        // on the next run of webpack.
      },
    })
  }
  if (config.isAnalyzerEnabled) {
    plugins.push(new BundleAnalyzerPlugin() as any)
  }
  plugins.push(workboxPlugin)

  return plugins
}
export default buildPlugins
