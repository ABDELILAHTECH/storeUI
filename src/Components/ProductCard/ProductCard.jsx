import style from "./ProductCard.module.css"
export default function ProductCard({product}) {
  return (
    <li className={style.productCard} >
       <img src={product.thumbnail} alt={product.title} />
       <h5>{product.title}</h5>
       <span className={style.productPrice} >{product.price}$</span>
       <button
       className=""
       >
        Add To Cart
       </button>
    </li>

  )
}
