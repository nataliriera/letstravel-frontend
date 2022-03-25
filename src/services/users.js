import { api } from "./api";
import * as USER_HELPERS from "../utils/userToken";

export const getMembers = () => {
  return api.get("/users");
};

export const editUser = (data) => {
  return api.post("/users/edit", data, {
    headers: {
      Authorization: USER_HELPERS.getUserToken(),
    },
  });
};

export const uploadImage = (data) => {
  return api.post("/upload", data);
};
