import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../utils/firebase";
import { GoogleAuthProvider, getRedirectResult } from "firebase/auth/cordova";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_URL } from "../utils/constant";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null); // we are creating ref to input field instead we can also create state variable for email, password
  const password = useRef(null);
  const userName = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // Form Validation
  const handleButtonClick = () => {
    // console.log(email.current.value);
    // console.log(password.current.value);

    const message = checkValidData(
      email.current.value,
      password.current.value
      // userName.current.value
    );
    setErrorMessage(message);
    if (message) return;
    dispatch(
      addUser({
        email: email.current.value,
        password: password.current.value,
        // userName: userName.current.value,
      })
    );
    navigate("/browse");
    //signIn or signUp
    // if (!isSignInForm) {
    //   // Sign Up Logic
    //   signInWithPopup(auth, provider)
    //     .then((result) => {
    //       // This gives you a Google Access Token. You can use it to access the Google API.
    //       const credential = GoogleAuthProvider.credentialFromResult(result);
    //       const token = credential.accessToken;
    //       // The signed-in user info.
    //       const user = result.user;
    //       // IdP data available using getAdditionalUserInfo(result)
    //       // ...
    //     })
    //     .catch((error) => {
    //       // Handle Errors here.
    //       const errorCode = error.code;
    //       const errorMessage = error.message;
    //       // The email of the user's account used.
    //       const email = error.customData.email;
    //       // The AuthCredential type that was used.
    //       const credential = GoogleAuthProvider.credentialFromError(error);
    //       // ...
    //     });
    // } else {
    //   // Sign In Logic
    //   getRedirectResult(auth)
    //     .then((result) => {
    //       // This gives you a Google Access Token. You can use it to access Google APIs.
    //       const credential = GoogleAuthProvider.credentialFromResult(result);
    //       const token = credential.accessToken;

    //       // The signed-in user info.
    //       const user = result.user;
    //       // IdP data available using getAdditionalUserInfo(result)
    //       // ...
    //     })
    //     .catch((error) => {
    //       // Handle Errors here.
    //       const errorCode = error.code;
    //       const errorMessage = error.message;
    //       // The email of the user's account used.
    //       const email = error.customData.email;
    //       // The AuthCredential type that was used.
    //       const credential = GoogleAuthProvider.credentialFromError(error);
    //       // ...
    //     });
    // }
  };

  // Toggle SignIn and SignUp
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div className="h-screen">
      <Header />
      <div className="absolute w-full">
        <img className="h-screen w-full" src={BG_URL} alt="background" />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute w-3/12 bg-black mx-auto right-0 left-0 my-36 p-12 text-white rounded-xl bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={userName}
            type="text"
            placeholder="Full Name"
            className="p-2 m-2 w-full bg-gray-800"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-2 m-2 w-full bg-gray-800"
        />

        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-2 m-2 w-full bg-gray-800"
        />
        <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>
        <button
          className="p-2 mt-4 m-2 bg-red-700 w-full rounded-lg"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-8 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? " New to Cinema? Sign Up Now"
            : "Already registered? Sign In Now."}
        </p>
      </form>
    </div>
  );
};
export default Login;
