function standardError(msg) {
  return { statusCode: 500, message: msg };
}

const errorResponses = {
  standardError,
};

module.exports = errorResponses;
