const authModel = require("../../models/auth.model");
const successResponse = require("../../../common/responses/success.responses");
const errorResponses = require("../../../common/responses/error.responses");
const jwtService = require("../../../providers/jwt.provider");
const passwordService = require("../../../providers/password.provider");

// ---> Register a new user <--- | ------------------------------------
async function register(registerData) {
  try {
    const user = await authModel.findOne({ email: registerData.email });

    if (user !== null) {
      throw new Error("User already exist");
    }

    const newUser = new authModel({
      name: registerData.name,
      email: registerData.email,
      password: passwordService.encryptPassword(registerData.password),
      role: 1,
      //--> Add the OTP number to the database
    });

    const savedUser = await newUser.save();

    if (savedUser !== null) {
      return {
        token: jwtService.generateJWT(savedUser.email, savedUser.role),
        data: successResponse.created("Account created successfully"),
      };
    }
  } catch (error) {
    return {
      token: null,
      data: errorResponses.standardError(error.message),
    };
  }
}

// ---> Login with registered user <--- | ------------------------------------
async function login(loginData) {
  try {
    const user = await authModel.findOne({ email: loginData.email });
    if (user === null) {
      throw new Error("User not found");
    }

    const passwordVerification = await passwordService.comparePassword(
      loginData.password,
      user.password
    );

    if (!passwordVerification) {
      throw new Error("Password not matched");
    }

    return {
      token: jwtService.generateJWT(user.email, user.role),
      data: successResponse.successed("Logged is successfully"),
    };
  } catch (error) {
    return {
      token: null,
      data: errorResponses.standardError(error.message),
    };
  }
}

// ---> Login with registered user <--- | ------------------------------------
async function verify(verifyData) {
  try {
    // verification logic
  } catch (error) {
    return {
      token: null,
      data: errorResponses.standardError(error.message),
    };
  }
}

const authServices = {
  register,
  login,
  verify,
};

module.exports = authServices;
