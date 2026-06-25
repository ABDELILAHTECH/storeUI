import { useEffect, useState } from "react";
import FeaturedProducts from "../Components/FeaturedProducts/FeaturedProducts";
import HeroSection from "../Components/HeroSection/HeroSection";


export default function Home() {
  const [products, setProducts] = useState([])
  const featuredProducts = products.filter(product => product.rating >= 4.95 )
  useEffect(() => {
    fetch('https://dummyjson.com/products?limit=194')
    .then(response => response.json())
    .then(data => setProducts(data.products))
  }, [])
  return (
    <div>
      <HeroSection />
      <FeaturedProducts products={featuredProducts} />
    </div>
  )
}
