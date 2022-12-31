import React from "react";
import styles from "../../styles/Home.module.css";
import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

const FormularioFechas = ({ datos }) => {
  const [data, setData] = useState({
    jornada: "",
    programas: "",
    control: "",
    fecha: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setData((oldData) => ({ ...oldData, [name]: value }));
  };

  const submitForm = (e) => {
    e.preventDefault();
    axios
      .post("/api/getCalendario", data)
      .then(() => {
        toast.success("Fecha Agregada! " + data.programas + " "+ (new Date(data.fecha)).toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric' }))
        
        
      })
      .catch((e) => {
        toast.error("Algo ha salido mal")
        console.log("Algo ha ido mal", e.message);
      });
  };

  const etiquetasUnicas = [];
  datos.forEach((etiqueta) => {
    etiqueta.properties.PROGRAMA.multi_select.map((etiquetaMultiSelect) => {
      if (!etiquetasUnicas.includes(etiquetaMultiSelect.name)) {
        etiquetasUnicas.push(etiquetaMultiSelect.name);
      }
    });
  });
  etiquetasUnicas.sort();

  const controlUnico = [];
  datos.forEach((control) => {
    control.properties.PARSECROLL.rollup.array.map((controlRelation) => {
      if (!controlUnico.includes(controlRelation.title[0].plain_text)) {
        controlUnico.push(controlRelation.title[0].plain_text);
      }
    });
  });
  controlUnico.sort();

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={submitForm}>
        <h1 className={styles.title}>FORMULARIO PARA ENTRAR FECHAS</h1>
        <div className={styles.inputs}>
          <div>
            <label htmlFor="fecha">Fecha</label>
            <input
              type="date"
              name="fecha"
              placeholder="xx/xx/20xx"
              value={data.fecha}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="jornada">Jornada</label>
            <select
              name="jornada"
              id="jornada"
              value={data.jornada}
              onChange={handleChange}
            >
              <option value="">Elije una opción</option>
              <option value="Jornada Regular">Jornada Regular</option>
              <option value="No Liga">No Liga</option>
              <option value="Playoff">Playoff</option>
              <option value="Final">Final</option>
            </select>
          </div>
        <div>
          <label htmlFor="control">Control</label>
          <select
            name="control"
            id="control"
            value={data.control}
            onChange={handleChange}
          >
            <option value="">Elije una opción</option>
            {controlUnico.map((ctrl) => (
              <option key={ctrl} value={ctrl}>
                {ctrl}
              </option>
            ))}
          </select>
        </div>
        </div>
          <div>
            <label htmlFor="programas">Programas</label>
            <select
              name="programas"
              id="programas"
              value={data.programas}
              onChange={handleChange}
            >
              <option value="">Elije una opción</option>
              {etiquetasUnicas.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
        <button className={styles.btn} type="submit">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default FormularioFechas;
