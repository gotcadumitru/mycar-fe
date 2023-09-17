import path from 'path'
import webpack, { RuleSetRule, DefinePlugin } from 'webpack'
import { buildCSSLoader } from '../build/loaders/buildCSSLoader'
import { BuildPaths } from '../build/types/config'

export default ({ config }: { config: webpack.Configuration }) => {
  const paths: BuildPaths = {
    src: path.resolve(__dirname, '..', '..', 'src'),
    build: '',
    html: '',
    entry: '',
    favicon: '',
    swSrc: '',
  }
  if (!config?.resolve?.modules || !config?.resolve?.extensions || !config?.module?.rules)
    return config
  config.resolve.modules.push(paths.src)
  config.resolve.extensions.push('.ts,tsx')
  // @ts-ignore
  config.module.rules = config.module.rules.filter((f) => f.test?.toString() !== '/\\.css$/')
  const styleLoader = buildCSSLoader(true)

  config.module.rules.push(styleLoader)
  console.log(JSON.stringify(config.module.rules, null, 2))
  config.module.rules = config.module.rules.map((rule) => {
    const ruleLocal = rule as RuleSetRule
    if (/svg/.test(ruleLocal.test as string)) {
      return {
        ...ruleLocal,
        exclude: /\.svg$/i,
      }
    }
    return ruleLocal
  })

  const svgLoader = {
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  }
  config.module.rules.push(svgLoader)

  config!.plugins!.push(
    new DefinePlugin({
      __IS_DEV__: JSON.stringify(true),
    }),
  )

  return config
}
