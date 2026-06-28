import { useEffect, useState } from "react"
import style from "./CategoriesSection.module.css"
import {Link} from "react-router"
import {FaMale, FaFemale, FaCouch, FaLaptop, FaAccusoft, FaShoePrints} from "react-icons/fa"
export default function CategoriesSection({categoriesList}) {
  const categories = [
    {
      title:"Home & Living",
      slug:"shoes",
      icon:FaCouch,
    },
    {
      title:"Men",
      slug:"men",
      icon:FaMale,
    },
    {
      title:"Women",
      slug:"women",
      icon:FaFemale,
    },
    {
      title:"Accessories",
      slug:"accessories",
      icon:FaAccusoft,
    },
    {
      title:"Electronics",
      slug:"electronics",
      icon:FaLaptop,
    },
    {
      title:"Shoes",
      slug:"shoes",
      icon:FaShoePrints
    }
  ]
  return (
    <section className={`container ${style.categoriesSection}`} >
       <h2>Shop by Category</h2>
       <nav>
          <ul>
            {
              categories.map(category =>
                <li key={category.title}>
                    <Link className={style.categoryLink} to={`/categories/${category.slug}`}>
                        <category.icon className={style.linkIcon} size={50}/>
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
