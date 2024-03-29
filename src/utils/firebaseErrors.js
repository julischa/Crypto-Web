//this function recieves an error from UserContext
export const firebaseErrors = (msg) => {
  //console.log(msg);
  switch (msg) {
    case "Firebase: Error (auth/email-already-in-use).": {
      return "🚨 Email already in use";
    }

    case "Firebase: Password should be at least 6 characters (auth/weak-password).": {
      return "🚨 Password must be at least 6 characters";
    }

    case "Firebase: Error (auth/invalid-email).": {
      return "🚨 Invalid email";
    }

    default: {
      return "Uncatched error";
    }
  }
};

//known errors
//Firebase: Error (auth/invalid-value-(email),-starting-an-object-on-a-scalar-field).
//Firebase: Password should be at least 6 characters (auth/weak-password).
