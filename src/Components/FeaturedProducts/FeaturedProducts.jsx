import styles from "./FeaturedProducts.module.css"
import ProductCard from "../ProductCard/ProductCard"
export default function FeaturedProducts({products}) {
  return (
    <section className={`container ${styles.featuredProducts}`} >
      <h3>Featured Products</h3>
      <ul>
      {
        products.map(product => 
          <ProductCard key={product.id} product={product} />
        )
      }
      </ul>
    </section>
  )
}
