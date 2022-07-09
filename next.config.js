module.exports = {
  i18n: {
    locales: ['en-US'],
    defaultLocale: 'en-US',
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  compiler: {
    styledComponents: true,
  },
  env:{
    NEXT_API_BASE_URL : process.env.NEXT_API_BASE_URL
  }
}