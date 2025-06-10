function pack(pack,agregarALCarrito){
    const {title, price, photos } = pack;
    return(
    
        <>
     <li class="paquetes__titulo">
                    <h4 class="no-margin">Paquete premium de fotografia</h4>
                    <p class="paquetes__titulo__etiqueta">Precio: <span class="paquetes__titulo__etiqueta__info">$100,000,000.00</span></p>
                    <p class="paquetes__titulo__etiqueta">Fotos: <span class="paquetes__titulo__etiqueta__info">100 pz.</span></p>
                    <a class="boton boton__secundario"onClick={() => agregarALCarrito(pack)}>agregar al carrito</a>
                </li>
        </>
    );
    
    }
    export default pack;