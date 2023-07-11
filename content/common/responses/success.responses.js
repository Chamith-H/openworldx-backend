function created(msg) {
  return { statusCode: 201, message: msg };
}

function read(data, msg) {
  return { statusCode: 200, value: data, message: msg };
}

function updated(msg) {
  return { statusCode: 204, message: msg };
}

function deleted(msg) {
  return { statusCode: 202, message: msg };
}

function successed(msg) {
  return { statusCode: 200, message: msg };
}

const successResponses = {
  created,
  read,
  updated,
  deleted,
  successed,
};

module.exports = successResponses;
