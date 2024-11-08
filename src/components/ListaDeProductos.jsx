import { CiCirclePlus } from "react-icons/ci";
import groceries from "./data/groceries";

function ListaDeProductos({ productos, agregarAlCarrito }) {
  return (
    <div className="col-md-6">
      <h2>Productos disponibles</h2>
      <ul className="list-group">
        {productos.map((producto) => (
          <li
            className="list-group-item"
            key={producto.id}
            onClick={() => agregarAlCarrito(producto)}
            style={{
              textAlign: "center",
              backgroundImage: `url(${producto.img})`,
              objectFit: "cover",
              objectPosition: "center",
              /*  backgroundRepeat: "no-repeat", */
            }}
          >
            <CiCirclePlus />{" "}
            <strong>
              {producto.name} (${producto.unitPrice} c/u)
            </strong>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaDeProductos;
