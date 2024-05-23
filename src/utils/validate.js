export const checkValidData = (email, password, userName) => {
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const isPassWordValid =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/.test(
      password
    );
  const isUserNameValid = /^[a-z0-9_-]{3,15}$/.test(userName);

  if (!isEmailValid) return "Email ID is not valid";
  if (!isPassWordValid) return "Password is not valid";
  if (!isUserNameValid) return "Enter valid User Name";

  return null;
};
