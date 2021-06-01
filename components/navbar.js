import Link from 'next/link';
import styles from '../styles/Navbar.module.css'
import Head from 'next/head'



const Navbar = () =>{
 return(
     <>
     <div className={styles.navbar} >
         <ul className={styles.navbar_list}>
             <li className={styles.navbar_home}><Link  href="/"><a className={styles.link1}>Home</a></Link></li>
             <li className={styles.navbar_about}><Link  href="/about"><a className={styles.link2}>About</a></Link></li>
         </ul>
     </div>
     </>
 )
}

export default Navbar;