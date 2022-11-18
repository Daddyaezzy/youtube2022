import React, { useState, useRef } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage, db } from "../firebase";

import ReactSwitch from "react-switch";
import Add from "../img/addAvatar.png";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";
// import { Formik, ErrorMessage, Form, Field } from "formik";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/png"];
const schema = yup.object().shape({
  displayName: yup.string().required("Display Name is required"),
  email: yup.string().email().required(),

  password: yup.string().min(8).max(18).required(),
});

const Register = (props) => {
  const [err, setErr] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();

  const submitForm = async (data) => {
    // e.preventDefault();
    // console.log(e.target[2].value);
    const displayName = data.displayName;
    const email = data.email;
    const password = data.password;
    const file = data.file;

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);

      console.log(res);

      const storageRef = ref(storage, displayName);

      const uploadTask = uploadBytesResumable(storageRef, file[0]);

      uploadTask.on(
        (error) => {
          setErr(true);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });

            await setDoc(doc(db, "userChats", res.user.uid), {});
            navigate("/");
          });
        }
      );
    } catch (err) {
      setErr(true);
      console.log(err.response.data);
    }
  };

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">DA Chat</span>
        <span className="title">Register</span>

        <form onSubmit={handleSubmit(submitForm)}>
          <input
            type="text"
            placeholder="Display Name"
            {...register("displayName")}
          />
          <p className="formErrors">{errors.displayName?.message}</p>

          <input type="email" placeholder="Email" {...register("email")} />
          <p className="formErrors">{errors.email?.message}</p>

          <input
            type="password"
            placeholder="Password"
            {...register("password")}
          />
          <p className="formErrors">{errors.password?.message}</p>

          <input
            style={{ display: "none" }}
            type="file"
            id="file"
            accept="image/*"
            {...register("file")}
          />
          <label htmlFor="file">
            <img src={Add} alt="" />
            <span>Add an avatar</span>
          </label>
          <p className="formErrors">{errors.file?.message}</p>

          <button type="submit">Sign Up</button>
          {err && <span>Something went wrong</span>}
        </form>
        <p>
          Already have an account? <Link to="/login">Login</Link>
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

export default Register;
