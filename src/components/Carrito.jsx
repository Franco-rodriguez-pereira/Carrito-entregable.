function Carrito({ productos, borrarDelCarrito, total }) {
  return (
    <div className="col-md-6">
      <h2>Carrito de compras</h2>
      <ul className="list-group">
        {productos.length > 0 ? (
          productos.map((producto) => (
            <li
              className="list-group-item"
              key={producto.id}
              onClick={() => borrarDelCarrito(producto.id)}
              style={{
                textAlign: "center",
                backgroundImage: `url(${producto.img})`,
                objectFit: "cover",
                objectPosition: "center",
                /*  backgroundRepeat: "no-repeat", */
              }}
            >
              <strong>
                {producto.name} - ${producto.unitPrice} x{producto.cantidad}
              </strong>
            </li>
          ))
        ) : (
          <p>
            Por favor, seleccione uno o mas productos para agregar al carrito.
          </p>
        )}
      </ul>
      {productos.length > 0 ? (
        <h3>Total: ${total.toFixed(2)}</h3>
      ) : (
        <h3>Total: $0.00</h3>
      )}
    </div>
  );
}

export default Carrito;
