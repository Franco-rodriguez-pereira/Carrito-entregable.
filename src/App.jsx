import { useState } from "react";
import groceries from "./components/data/groceries";
import ListaDeProductos from "./components/ListaDeProductos";
import Carrito from "./components/Carrito";

function App() {
  const [carrito, setCarrito] = useState([]);
  const [total, setTotal] = useState(0);

  const agregarAlCarrito = (producto) => {
    setCarrito((prevCarrito) => {
      const productoExistente = prevCarrito.find(
        (productoCarrito) => productoCarrito.id === producto.id
      );

      if (productoExistente) {
        setTotal((prevTotal) => prevTotal + producto.unitPrice);
        return prevCarrito.map((productoCarrito) =>
          productoCarrito.id === producto.id
            ? { ...productoCarrito, cantidad: productoCarrito.cantidad + 1 }
            : productoCarrito
        );
      } else {
        setTotal((prevTotal) => prevTotal + producto.unitPrice);
        return [...prevCarrito, { ...producto, cantidad: 1 }];
      }
    });
  };

  const borrarDelCarrito = (productoId) => {
    setCarrito((prevCarrito) => {
      const productoExistente = prevCarrito.find(
        (productoCarrito) => productoCarrito.id === productoId
      );

      if (productoExistente) {
        if (productoExistente.cantidad > 1) {
          setTotal((prevTotal) => prevTotal - productoExistente.unitPrice);
          return prevCarrito.map((productoCarrito) =>
            productoCarrito.id === productoId
              ? { ...productoCarrito, cantidad: productoCarrito.cantidad - 1 }
              : productoCarrito
          );
        } else {
          setTotal((prevTotal) => prevTotal - productoExistente.unitPrice);
          return prevCarrito.filter(
            (productoCarrito) => productoCarrito.id !== productoId
          );
        }
      }
      return prevCarrito;
    });
  };

  return (
    <div
      style={{
        backgroundImage:
          "url('https://img.freepik.com/fotos-premium/tienda-exhibicion-frutas-verduras-estante-que-dice-fruta_902846-5876.jpg')",
      }}
    >
      <div className="container" style={{ backgroundColor: "white" }}>
        <div className="row">
          <ListaDeProductos
            productos={groceries}
            agregarAlCarrito={agregarAlCarrito}
          />
          <Carrito
            productos={carrito}
            borrarDelCarrito={borrarDelCarrito}
            total={total}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
