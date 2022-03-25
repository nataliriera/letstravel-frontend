import axios from "axios";

function internalServerError(err) {
  if (err.response && err.response.data && err.response.data.errorMessage) {
    return {
      status: false,
      errorMessage: err.response.data.errorMessage,
    };
  }
  return {
    status: false,
    errorMessage: "Internal server error. Please check your server",
  };
}

function successStatus(res) {
  return {
    status: true,
    data: res.data,
  };
}

const pinService = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URL}/pins`,
});

export function getpin() {
  return pinService
    .get("/getpin")
    .then(successStatus)
    .catch(internalServerError);
}
