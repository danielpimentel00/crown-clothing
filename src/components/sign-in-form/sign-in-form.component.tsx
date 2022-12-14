import { useState, FormEvent, ChangeEvent } from "react";
import { useDispatch } from "react-redux";

import Button, { BUTTON_TYPES_CLASSES } from "../button/button.component";
import FormInput from "../form-input/form-input.component";

import {
  googleSignInStart,
  emailSignInStart,
} from "../../store/user/user.action";

import { ButtonsContainer, SignInContainer } from "./sign-in-form.styles";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const dispatch = useDispatch();
  const [inputFields, setInputFields] = useState(defaultFormFields);
  const { email, password } = inputFields;

  const resetFormFields = () => {
    setInputFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    dispatch(googleSignInStart());
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setInputFields({ ...inputFields, [name]: value });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      dispatch(emailSignInStart(email, password));
      resetFormFields();
    } catch (error) {
      console.error("User login encountered an error", error);
    }
  };

  return (
    <SignInContainer>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type={"text"}
          onChange={handleChange}
          name="email"
          value={email}
          required
        />
        <FormInput
          label="Password"
          type={"password"}
          onChange={handleChange}
          name="password"
          value={password}
          required
        />
        <ButtonsContainer>
          <Button type="submit">Sign In</Button>
          <Button
            type="button"
            buttonType={BUTTON_TYPES_CLASSES.google}
            onClick={signInWithGoogle}
          >
            Sign in with Google
          </Button>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};

export default SignInForm;
