import Link from 'next/link';

const Navegacion = () =>(
 
   <nav className="navbar navbar-expand navbar-dark bg-warning">
     <div className="container">
       <Link href="/"><a href="" className="nevbar-brand">Todo Bitcoint</a></Link>
       <div className="collapse navbar-collapse">
         <ul className="navbar-nav ml-auto">
           <li>
             <Link href="/"><a className="nav-link">Inicio</a></Link>
           </li>
           <li>
             <Link href="/nosotros"><a className="nav-link">Nosotros</a></Link>
           </li>
         </ul>
       </div>
     </div>

   </nav>

  
)

export default Navegacion