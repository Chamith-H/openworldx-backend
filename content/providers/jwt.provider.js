const jwt = require("jsonwebtoken");

function generateJWT(email, role) {
  const payload = {
    email: email,
    role: role,
  };

  return jwt.sign(payload, "Qu1ck$1lv3r");
}

function validateJWT(token) {
  try {
    const payload = jwt.verify(token, "Qu1ck$1lv3r");
    return payload;
  } catch (error) {
    throw new Error(error);
  }
}

const jwtProvider = {
  generateJWT,
  validateJWT,
};

module.exports = jwtProvider;
