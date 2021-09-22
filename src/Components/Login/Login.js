import React from "react";
import { Navigate, Route, Routes } from "react-router";
import LoginForm from "./LoginForm";
import LoginCreate from "./LoginCreate";
import LoginPassworLost from "./LoginPassworLost";
import LoginPassworReset from "./LoginPassworReset";
import { UserContext } from "../../UserContext";
import styles from "../css/Login.module.css";

const Login = () => {
  const { login } = React.useContext(UserContext);

  if (login === true) return <Navigate to="/conta" />;
  return (
    <section className={styles.login}>
      <div className={styles.forms}>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="criar" element={<LoginCreate />} />
          <Route path="perdeu" element={<LoginPassworLost />} />
          <Route path="resetar" element={<LoginPassworReset />} />
        </Routes>
      </div>
    </section>
  );
};

export default Login;
