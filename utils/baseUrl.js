const baseUrl =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:3000"
    : "https://mini-social-media.onrender.com/";

module.exports = baseUrl;
