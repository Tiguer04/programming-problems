/*
Ejercicio: Editor de un carrito de compras anidado

Tienes un estado que representa un carrito de compras, con productos que
a su vez tienen un objeto `details` anidado.

Estado inicial:

const initialCart = [
  { id: 1, name: 'Café', quantity: 2, details: { onSale: false, stock: 10 } },
  { id: 2, name: 'Té', quantity: 1, details: { onSale: true, stock: 5 } },
  { id: 3, name: 'Azúcar', quantity: 3, details: { onSale: false, stock: 20 } },
];

Usando useImmer (el hook de Immer para React), implementa un componente
Cart que:

1. Muestre la lista de productos con su cantidad y si están en oferta
   (details.onSale).
2. Tenga un botón +1 y un botón -1 por producto que modifique quantity
   (sin bajar de 0).
3. Tenga un botón "Alternar oferta" por producto que invierta el valor
   de details.onSale.
4. Tenga un botón global "Vaciar carrito" que ponga items en un array
   vacío.

Requisito: todo el manejo de estado debe hacerse con useImmer, mutando
directamente el draft dentro de updateProducts(draft => { ... }) —
nada de spread manual (...).
*/

import { useImmer } from "use-immer";
import { useState } from "react";

const initialCart = [
  { id: 1, name: "Café", quantity: 2, details: { onSale: false, stock: 10 } },
  { id: 2, name: "Té", quantity: 1, details: { onSale: true, stock: 5 } },
  { id: 3, name: "Azúcar", quantity: 3, details: { onSale: false, stock: 20 } },
];

function ListItem({ products, updateProducts }) {
  function handleAdd(productId) {
    updateProducts((draft) => {
      const product = draft.find((x) => x.id === productId);
      product.quantity < product.details.stock
        ? (product.quantity += 1)
        : (product.quantity = product.details.stock);
    });
  }
  function handleSubstraction(productId) {
    updateProducts((draft) => {
      const product = draft.find((x) => x.id === productId);
      product.quantity > 0 ? (product.quantity -= 1) : (product.quantity = 0);
    });
  }

  function handleSale(productId) {
    updateProducts((draft) => {
      const product = draft.find((x) => x.id === productId);
      product.details.onSale = !product.details.onSale;
    });
  }

  return (
    <>
      {products.map((product) => {
        return (
          <li key={product.id}>
            <h3>{product.name}</h3>
            <div>
              <p>Cantidad: {product.quantity}</p>
              <button onClick={() => handleSubstraction(product.id)}>-1</button>
              <button onClick={() => handleAdd(product.id)}>+1</button>
            </div>
            {product.details.onSale && <p>🏷️ Oferta</p>}
            <p>Stock: {product.details.stock}</p>
            <button onClick={() => handleSale(product.id)}>
              Alternar oferta
            </button>
          </li>
        );
      })}
    </>
  );
}

export default function Cart() {
  const [products, updateProducts] = useImmer(initialCart);
  const cartQuantity = products.length;

  function handleEmptyCart() {
    updateProducts((draft) => (draft = []));
  }

  return (
    <>
      <h1>Carrito de compras</h1>
      <h2>Items: {cartQuantity} </h2>
      <ul>
        <ListItem products={products} updateProducts={updateProducts} />
      </ul>
      <button onClick={() => handleEmptyCart()}>VACIAR CARRITO</button>
    </>
  );
}
