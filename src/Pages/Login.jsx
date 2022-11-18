import React, { useState } from "react";
import ReactSwitch from "react-switch";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const loginSchema = yup.object().shape({
  email: yup.string().email("Enter a valid email").required(),
  password: yup.string().min(8, "Too short").max(18, "Too long").required(),
});

const Login = (props) => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const submitForm = async (data) => {
    // e.preventDefault();

    const email = data.email;
    const password = data.password;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (err) {
      setErr(true);
    }
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
          {err && <span>Something went wrong</span>}
        </form>
        <p>
          Don't have an account? <Link to="/register">Register</Link>{" "}
        </p>
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
