import { Link } from "wouter"
import styles from "./NavBar.module.css"
import { botInvite, serverInvite } from "../modules/links"

const NavBar = () => {
  return (
    <div className={styles.navbar}>
      

        <Link className={styles.name} href="/">P2 Assistant</Link>
      
      
        <nav>
          <ul className={styles.navLinks}>
            {/* <li><a href="/#features">Features</a></li> */}
            {/* <li><Link href="/#commands">Commands</Link></li> */}
            <li><a href={serverInvite}>Support</a></li>
            <li><Link href="/tos">TOS</Link></li>
            <li><Link href="/privacy">Privacy Policy</Link></li>
          </ul>
        </nav>

        <a href={botInvite} className="button primary">Add P2 Assistant</a>


    </div>
    
  )
}

export default NavBar