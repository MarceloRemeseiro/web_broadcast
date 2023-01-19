import React from "react";
import styles from "../../styles/Home.module.css";
import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

const FormularioLogin = () => {
  const submitForm = (e) => {
    console.log("adentro");
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={submitForm}>
        <h1 className={styles.title}>LOGIN</h1>
        <div className={styles.inputs}>
          <div>
            <label htmlFor="fecha">MAIL</label>
            <input
              type="email"
              name="email"
              placeholder="correo electronico"
              required
            />
          </div>
          <div>
            <label htmlFor="jornada">PASSWORD</label>
            <input
              type="password"
              name="password"
              placeholder="password"
              required
            />
          </div>
        </div>
        <button className={styles.btn} type="submit">
          Entrar
        </button>
      </form>
    </div>
  );
};

export default FormularioLogin;
