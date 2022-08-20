module.exports = {
  reactStrictMode: true,
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  exportPathMap: function () {
    return {
      "/": { page: "/" },
    };
  },
  env: {
    SITE_URL: "http://localhost:3000/",
    API_URL: "https://api.airtable.com/v0/apppEuXVVoYReUqej",
  },
};
