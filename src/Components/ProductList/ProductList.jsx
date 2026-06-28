import style from "./ProductList.module.css"
export default function ProductList({children}) {
  return (
    <ul className={style.productList} >
      {children}
    </ul>
  )
}
