import { Link, useParams } from "react-router-dom"


export function Product() {

  // Estrarre il parametro 'id' dall'oggetto restituito dall'hook 'useParams()'
  const { id } = useParams()

  return (
    <div>
      <h3>Product {id}</h3>
      <Link to="/products">Back</Link>
    </div>
  )
}