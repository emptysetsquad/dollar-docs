// theme.config.js
export default {
  github: 'https://github.com/emptysetsquad/dollar', // link of the project repo
  siteGithub: 'https://github.com/emptysetsquad/dollar-docs', // link of the docs repo path
  titleSuffix: ' – Empty Set Dollar',
  nextLinks: true,
  prevLinks: true,
  search: true,
  customSearch: null, // <- customizable, you can use algolia for example
  darkMode: true,
  footer: true,
  footerText: 'MIT 2020 ©',
  footerEditOnGitHubLink: true, // will link to the docs repo
  logo: (
    <React.Fragment>
      <span className="mr-2 font-extrabold hidden md:inline">
        Empty Set Dollar
      </span>
      <span className="text-gray-600 font-normal hidden md:inline">
        DeFi compatible algorithmic stablecoin
      </span>
    </React.Fragment>
  ),
  head: (
    <React.Fragment>
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta
        name="description"
        content="Docs for Empty Set Dollar, an algorithmic stablecoin compatible with DeFi applications"
      />
      <meta
        name="og:description"
        content="Docs for Empty Set Dollar, an algorithmic stablecoin compatible with DeFi applications"
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@shuding_" />
      <meta name="og:title" content="Empty Set Dollar - Documentation" />
      <meta
        name="apple-mobile-web-app-title"
        content="Empty Set Dollar - Documentation"
      />
    </React.Fragment>
  ),
  // i18n: [
  //   { locale: 'en', text: 'English' },
  //   { locale: 'zh', text: '简体中文' },
  // ],
}
