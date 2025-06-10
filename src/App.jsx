
import header from "./components/header"
import footer from "./components/footer"
import article from"./components/article"
import pack from "./components/pack"
import { useState } from "react";
import{db} from "./data/db";
import{db2} from "./data/db2";
function App() {
    const [data, setData] = useState(db)
    const [data2, setData2] = useState(db2)
    const [carrito, setCarrito] = useState ([])
    
    
    function agregarALCarrito (pack){
      const existeElemento = carrito.findIndex((packPhoto) => packPhoto.id === pack.id)

if(existeElemento >= 0){
const carritoActualizado =[...carrito]
carritoActualizado[existeElemento].cantidad++
setCarrito(carritoActualizado)
}
else{
  pack.cantidad=1
  setCarrito([...carrito,pack])
}


    }
  return (
    <>
  <header/>
 carrito={carrito}

 
   
    <div class="contenedor contenido-principal">
        <main class="blog">
            <h3 class="centrar-texto">Blog</h3>
            {data.map((article)=>(
                <Article
                  key={article.id}
                  article={article}
                />
              )
              )}
        </main>
        <aside class="sidebar">
            <h3>Paquetes fotograficos</h3>
            <ul class="paquetes no-pading">
            {data2.map(pack=>(
               <pack
               key={pack.id}
               pack={pack}
               />
                )
               )}
               
          
            </ul>
        </aside>
    </div>
    <footer/>
    </>
)
}


export default App
