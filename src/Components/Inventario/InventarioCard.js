import React from "react";
import { Link} from 'react-router-dom'

export const InventarioCard = (props) => {

const{inventario} = props;

  return (
    <div className="col" key={inventario._id}>
      <div className="card text-bg-primary">
        <img src={inventario.foto} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Especificaciones</h5>
          <hr />
          <p className="card-title">Serial: {inventario.serial}</p>
          <p className="card-title">Marca: {inventario.marca.nombre}</p>
          <p
           className="card-title">Nombre: {inventario.usuario.nombre}</p>
          <button className="btn btn-light">
          <Link to ={`inventario/edit/${inventario._id}`}>Ver más</Link>
          </button>
        </div>
      </div>
    </div>
  );
};
