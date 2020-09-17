import React, { useState } from "react";
import { app, rdb } from "./base";
import Loader from "./common/Loader";
export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  const [pending, setPending] = useState(true);

  React.useEffect(() => {
    app.auth().onAuthStateChanged((user) => {
      setCurrentUser(user);
      setPending(false);
      // firebase
      var ref = rdb.ref(`users/${user.uid}`);
      ref.on(
        "value",
        function (snapshot) {
          if (!snapshot.val()) ref.set({ email: user.email });
        },
        function (errorObject) {
          console.log("The read failed: " + errorObject.code);
        }
      );
    });
  }, []);

  if (pending) {
    return <Loader />;
  }

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};
