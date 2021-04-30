import React, { Component } from "react";
import banner_mobile from "../assets/img/banner_mobile.png";

import Header from "./common/Header";

const validate = (values) => {
  const errors = {};
  if (!values.num_doc) {
    errors.num_doc = "Este campo es obligatorio";
  }
  return errors;
};

export default class Home extends Component {
  state = {
    errors: {},
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    console.log("holi");
    e.preventDefault();
    const { errors, ...noErrors } = this.state;
    const result = validate(noErrors);

    this.setState({ errors: result });
    if (!Object.keys(result).length) {
      console.log("formulario valido");
    }
  };
  render() {
    const { errors } = this.state;
    return (
      <div className="container">
        <Header />
        <div className="banner">
          <div className="banner__caption">
            <img
              className="banner__img"
              src={banner_mobile}
              alt="mujer llamando a Rimac"
            />
            <span className="banner__new">¡NUEVO!</span>
            <h1 className="banner__h1">Seguro Vehicular</h1>
            <h1 className="banner__h1 banner__h1--rimac">Tracking</h1>
            <p className="banner__p">
              Cuentanos donde le haras seguimiento a tu seguro
            </p>
          </div>
        </div>
        <div className="main">
          <div className="form" onSubmit={this.handleSubmit}>
            <div className="form__title">Déjanos tus datos</div>
            <div className="form__group">
              <select
                className="form__select"
                name="doc"
                onChange={this.handleChange}
              >
                <option defaultValue value="dni">
                  DNI
                </option>
                <option value="ce">CE</option>
              </select>
              <div className="form__select__arrow"></div>
              <input
                className="form__input"
                name="num_doc"
                placeholder="Nro. de doc"
                onChange={this.handleChange}
              />
            </div>
            {errors.num_doc && <div>{errors.num_doc};</div>}
            <div className="form__input">
              <input
                name="mobile"
                placeholder="Celular"
                onChange={this.handleChange}
              />
            </div>
            {errors.mobile && <div>{errors.mobile};</div>}

            <div className="form__input">
              <input
                name="license_plate"
                placeholder="Placa"
                onChange={this.handleChange}
              />
            </div>
            {errors.license_plate && <div>{errors.license_plate};</div>}
            <div className="form__group form__group--no-border">
              <input className="form__checkbox" type="checkbox" id="check" />
              <label
                className="form__checkbox__text form__checkbox__text--link"
                htmlFor="check"
              >
                Acepto la{" "}
                <a className="form__checkbox__text" href="/">
                  Política de Protecciòn de Datos Personales
                </a>{" "}
                y los{" "}
                <a className="form__checkbox__text" href="/">
                  Términos y Condiciones
                </a>
                .
              </label>
            </div>
            <button type="submit" className="form__button">
              COTÍZALO
            </button>
          </div>
        </div>
      </div>
    );
  }
}
