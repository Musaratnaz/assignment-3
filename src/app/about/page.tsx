import Link from "next/link";
import styles from "../about/about.module.css";




function AboutPage  () {
   return (
    <div className={styles.container}>
   <h2 className={styles.header}>this is About Page</h2>
   <h3 className="bg-pink-500">About</h3>


    
     <ul className= {styles.list}>
        <li><a href="/about/about-us">This is About Us Page</a></li>
         <li><Link href="/">Go to Home Page</Link>
             </li>
           <li><Link href="/contact" >Go to Contact Page</Link></li>
           <li><Link href="/service" >go to Service Page</Link></li>
         </ul>
       </div>
    );
};

export default AboutPage;