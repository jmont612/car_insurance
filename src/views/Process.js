import React from "react";

import HeaderAlt from "./common/HeaderAlt";
import icon_car from "../assets/img/icon_car.png";

export default function Process() {
  return (
    <div className="container">
      <HeaderAlt />
      <div className="stepper">
        <div className="stepper__header">
          <div className="stepper__back">
            <div className="stepper__arrow"></div>
          </div>
          <div className="stepper__header__text">PASO 1 DE 2</div>
          <div className="stepper__progress"></div>
        </div>
      </div>
      <div className="main">
        <div className="form">
          <h1 className="form__h1">
            ¡Hola, <span className="form__h1--rimac">Juan!</span>
          </h1>
          <p className="form__p">Completa los datos de tu auto</p>
          <div className="form__select__alt">
            <select className="" name="" id="">
              <option defaultValue value="2021">
                2021
              </option>
              <option value="2020">2020</option>
              <option value="2019">2019</option>
              <option value="2018">2018</option>
              <option value="2017">2017</option>
              <option value="2016">2016</option>
              <option value="2016">2016</option>
            </select>
            <div className="form__select__arrow"></div>
            <span className="form__select__hint">Año</span>
          </div>
          <div className="form__select__alt">
            <select className="" name="" id="">
              <option defaultValue value="BMW">
                BMW
              </option>
              <option value="Audi">Audi</option>
              <option value="Lexus">Lexus</option>
              <option value="Ford">Ford</option>
              <option value="Opel">Opel</option>
              <option value="Seat">Seat</option>
            </select>
            <div className="form__select__arrow"></div>
            <span className="form__select__hint">Marca</span>
          </div>
          <div className="form__help__link">
            <img src={icon_car} alt="imagen de un auto rojo" />
            <div>
              <div className="form__help__text">¿No encuentras el modelo?</div>
              <a href="/">clic aquí</a>
            </div>
          </div>
          <label className="form__label">¿Tu auto es a gas?</label>
          <div className="form__inline__radio">
            <input type="radio" id="si" name="gas" />
            <label htmlFor="yes">Sí</label>
            <input type="radio" id="no" name="gas" />
            <label htmlFor="no">No</label>
          </div>

          <div className="form__calculator">
            <p className="form__calculator__text">Indica la suma asegurada</p>
            <div className="d--f">
              <label className="form__calculator__label">MIN $12.500</label>
              <div className="form__calculator__label__separator"></div>
              <label className="form__calculator__label">MIN $16.500 </label>
            </div>
            <div className="form__calculator__input">
              <input defaultValue="14,300" />
              <div className="form__calculator__minus"></div>
              <div className="form__calculator__plus"></div>
            </div>
            <button className="form__calculator__btn">
              Continuar <span className="form__calculator__btn__arrow"></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
