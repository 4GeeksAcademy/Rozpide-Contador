import React from 'react';
import PropTypes from 'prop-types';
import './ContadorSegundos.css'; // importo el archivo css para las clssName
// funcion Contador de Segundos que recibe la propiedad segundos
const ContadorSegundos = ({ segundos }) => {
    // funcion para formatear segundos, que convierte a string el numero de segundos
  const formatearSegundos = (segundos) => {
    //padStart hace que el string siempre tenga 6 digitos rellenando con 0 a la izda
    const str = segundos.toString().padStart(6, '0');
    //split divide el string en un array de caracteres
    return str.split('');
  };
// obtenemos los digitos llamando la funcion formatearSegundos, a traves de la prop segundos
  const digitos = formatearSegundos(segundos);

  return (
    <div className="contador">
      <div className="icono-reloj">
        <i className="fa fa-clock-o"></i>
      </div>
      {digitos.map((digito, indice) => (
        <div key={indice} className="digito">
          {digito}
        </div>
      ))}
    </div>
  );
};

ContadorSegundos.propTypes = {
  segundos: PropTypes.number
};

export default ContadorSegundos;
