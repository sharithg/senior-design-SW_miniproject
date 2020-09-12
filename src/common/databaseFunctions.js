import { app } from "../base.js";

const addAdmin = (userId, name, email) => {
  app
    .database()
    .ref("admins/" + userId)
    .set({
      username: name,
      email: email,
    });
};
