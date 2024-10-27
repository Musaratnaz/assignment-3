import Image from 'next/image';
import Header from '../app/component/Header';
import Footer from '../app/component/Footer';
import Hero from '../app/component/Hero';



import Link from "next/link";


  function HomePage  () {
  return (
    
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ...">
         
          <h1 className="container bg-red-300">HomePage</h1>
      <h2 className="header bg-lime-400">This is HomePage</h2>

       <ul>
          <li>
           <Link href="/ ">Home</Link>
           </li>
          <li><Link href="/about" target="_blank">About</Link></li>
           <li><Link href="/contact" target= "-blank">Contact</Link></li>
           <li><Link href="/service" target= "-blank">Service</Link></li>

          

  
    <div className="flex flex-col min-h-screen">
      <Header />
      <Hero />
      <Footer />
    </div>



        </ul>
     </div>
      
   
   )
 }
    
  

export default HomePage;             
        