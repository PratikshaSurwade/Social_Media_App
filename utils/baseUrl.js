const baseUrl =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:3000"
    : "https://mini-social-media-mern.herokuapp.com/";

module.exports = baseUrl;
