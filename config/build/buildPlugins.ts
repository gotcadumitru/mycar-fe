import ReactRefreshPlugin from '@pmmmwh/react-refresh-webpack-plugin'
import CopyPlugin from 'copy-webpack-plugin'
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import * as process from 'process'
import webpack from 'webpack'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'
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
  } else {
    // plugins.push(
    //   new WorkboxWebpackPlugin.InjectManifest({
    //     swSrc: config.paths.swSrc,
    //     dontCacheBustURLsMatching: /\.[0-9a-f]{8}\./,
    //     exclude: [/\.map$/, /asset-manifest\.json$/, /LICENSE/],
    //     // Bump up the default maximum size (2mb) that's precached,
    //     // to make lazy-loading failure scenarios less likely.
    //     // See https://github.com/cra-template/pwa/issues/13#issuecomment-722667270
    //     maximumFileSizeToCacheInBytes: 5 * 1024 * 1024,
    //   }),
    // )
  }
  if (config.isAnalyzerEnabled) {
    plugins.push(new BundleAnalyzerPlugin() as any)
  }

  return plugins
}
export default buildPlugins
