import style from "./CategoriesSection.module.css"
import { Link } from "react-router"
import { FaMale, FaFemale, FaCouch, FaLaptop, FaAccusoft, FaShoePrints } from "react-icons/fa"
export default function CategoriesSection(){
  const generalCategories = [
    {
      title: "Home & Living",
      slug: "home-living",
      subCategories: ["home-decoration", "kitchen-accessories"],
      icon: FaCouch,
    },
    {
      title: "Men",
      slug: "men",
      subCategories: ["mens-shirts", "mens-shoes", "mens-watches"],
      icon: FaMale,
    },
    {
      title: "Women",
      slug: "women",
      subCategories: ["womens-bags", "womens-shoes", "womens-watches"],
      icon: FaFemale,
    },
    {
      title: "Accessories",
      slug: "accessories",
      subCategories:["sunglasses", "watches", "jewellery"],
      icon: FaAccusoft,
    },
    {
      title: "Electronics",
      slug: "electronics",
      subCategories:["laptops", "smartphones", "tablets"],
      icon: FaLaptop,
    },
    {
      title: "Shoes",
      slug: "shoes",
      subCategories:["mens-shoes","womens-shoes"],
      icon: FaShoePrints
    }
  ]
  return (
    <section className={`container ${style.categoriesSection}`} >
      <h2>Shop by Category</h2>
      <nav>
        <ul>
          {
            generalCategories.map(category =>
              <li key={category.title}>
                <Link className={style.categoryLink} to={`/categories/${category.slug}`}>
                  <category.icon className={style.linkIcon} size={50} />
                  <h4>
                    {category.title}
                  </h4>
                </Link>
              </li>
            )
          }
        </ul>
      </nav>
    </section>
  )
}
