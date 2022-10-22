import React from "react";
import ReactSwitch from "react-switch";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const loginSchema = yup.object().shape({
  email: yup.string().email("Enter a valid email").required(),
  password: yup.string().min(8, "Too short").max(18, "Too long").required(),
});

const Login = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const submitForm = (data) => {
    console.log(data);
  };

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">DA Chat</span>
        <span className="title">Login</span>

        <form onSubmit={handleSubmit(submitForm)}>
          <input type="email" placeholder="Email" {...register("email")} />
          <p className="formErrors">{errors.email?.message}</p>

          <input
            type="password"
            placeholder="Password"
            {...register("password")}
          />
          <p className="formErrors">{errors.password?.message}</p>

          <button type="submit">Sign in</button>
        </form>
        <p>Don't have an account? Register</p>
      </div>
      <div className="switch">
        <ReactSwitch
          onChange={props.toggleTheme}
          checked={props.theme === "dark"}
        />
      </div>
    </div>
  );
};

export default Login;
