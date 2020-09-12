require("dotenv").config();

export default yelpApiKey({
  apiKey: process.env.REACT_APP_API_KEY_YELP,
})(MapContainer);

// export const apiKey = "";
