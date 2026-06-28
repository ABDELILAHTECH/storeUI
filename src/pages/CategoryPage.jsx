import { useEffect, useState } from "react";
import { useParams } from "react-router"
import ProductCard from "../Components/ProductCard/ProductCard";
import ProductList from "../Components/ProductList/ProductList";
export default function CategoryPage() {
  const { categoryName } = useParams();
  const [categoryProducts, setCategoryProducts] = useState([])
  const categoryMap = [
      {
        slug: "home-living",
        subCategories: ["home-decoration", "kitchen-accessories"],
      },
      {
        slug: "men",
        subCategories: ["mens-shirts", "mens-shoes", "mens-watches"],
      },
      {
        slug: "women",
        subCategories: ["womens-bags", "womens-shoes", "womens-watches"],
      },
      {
        slug: "accessories",
        subCategories:["sunglasses", "watches", "jewellery"],
      },
      {
        slug: "electronics",
        subCategories:["laptops", "smartphones", "tablets"],
      },
      {
        slug: "shoes",
        subCategories:["mens-shoes","womens-shoes"],
      }
    ]
useEffect(() => {
  const category = categoryMap.find(
    c => c.slug === categoryName
  );

  if (!category) return;

  async function fetchProducts() {
    const responses = await Promise.all(
      category.subCategories.map(subCategory =>
        fetch(
          `https://dummyjson.com/products/category/${subCategory}`
        ).then(res => res.json())
      )
    );

    const products = responses.flatMap(
      response => response.products
    );

    setCategoryProducts(products);
  }

  fetchProducts();
}, [categoryName]);
    return (
    <section 
    className={`container ${categoryProducts}`} 
    style={{padding:"100px 0"}}
    >
      <h2>
        {categoryName}
      </h2>
      <ProductList>
        {categoryProducts.map(
            product => <ProductCard product={product} />
        )}
      </ProductList>
    </section>
  )
}
