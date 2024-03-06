import { Link, Outlet } from "react-router-dom";

export function Catalogue() {
  return (
    <div>
      <h2>All Products</h2>
      <ul>
        <li><Link to="/products/1">Product 1</Link></li>
        <li><Link to="/products/2">Product 2</Link></li>
        <li><Link to="/products/3">Product 3</Link></li>
        <li><Link to="/products/4">Product 4</Link></li>
        <li><Link to="/products/5">Product 5</Link></li>
      </ul>

      <hr />

      {/* Ogni volta che vado al Catalogo nella parte dei prodotti, 
      posso vedere l'intero elenco dei prodotti.
      
      Quando cliccherò sul singolo prodotto, 
      passerò ad un percorso secondario di prodotti.
      
      'Outlet' consente di renderizzare componenti nidificati, 
      all'interno dell'elemento principale in cui si trovano tali componenti.*/}
      <Outlet />
    </div>
  );
}
