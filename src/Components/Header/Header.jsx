import styles from "./Header.module.css"
import { Link , useLocation} from "react-router-dom"
import {Heart, Search, ShoppingCart, Store} from "lucide-react"
export default function Header() {

  const navLinks = [
    {
      path:"/cart",
      icon:ShoppingCart
    },
    {
      path:"/wishlist",
      icon:Heart
    }
  ]
  const { pathname } = useLocation()
  return (
    <header className="container">
      <nav>
        <Link to="/" className={styles.logo}>
          <Store size={26} 
          className={styles.storeIcon} />
          Store
        </Link>
        <div className={styles.searchBar}>
            <input 
            className={styles.searchInput}
            type="search" 
            placeholder="search products..."
            />
            <button className={styles.searchBtn} >
              <Search className={styles.searchIcon} />
            </button>
        </div>
        <ul className={styles.actions}>
           {
            navLinks.map(({ path, icon:Icon }) =>
              <li
              key={path}
              className={pathname === path ? styles.activeLink : ""}
              >
                  <Link to={path} className={styles.linkIcon} >
                    <Icon />
                  </Link>
              </li>
            )
           }
        </ul>
      </nav>
    </header>
  )
}
