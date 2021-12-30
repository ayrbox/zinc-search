const { ZINC_USER, ZINC_PASSWORD, ZINC_HOST } = process.env;

const credential = Buffer.from(`${ZINC_USER}:${ZINC_PASSWORD}`).toString(
  "base64"
);

module.exports = {
  zinc: {
    host: ZINC_HOST,
    user: ZINC_USER,
    password: ZINC_PASSWORD,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Basic ${credential}`,
    },
  },
};
