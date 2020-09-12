import { app } from "../base.js";

const writeUserData = (userId, name, email, displayName) => {
  app
    .database()
    .ref("users/" + userId)
    .set({
      username: name,
      email: email,
      displayName: displayName,
    });
};
