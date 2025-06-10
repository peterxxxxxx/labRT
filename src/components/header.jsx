function header({carrito}){
return (
<>
<header class="header">
        <div class="sombra">
            <div class="contenedor">
                <div class="barra">
                    <a class="logo" href="index.html">
                        <h1 class="logo__nombre no-margin centrar-texto">My <span class="logo__negrita">PhotoBlog</span></h1>
                    </a>
                    <nav class="navegacion">
                        <a href="eventos.html" class="navegacion__enlace">Eventos</a>
                        <a href="paquetes.html" class="navegacion__enlace">Paquetes</a>
                        <a href="trabajos.html" class="navegacion__enlace">Trabajos</a>
                        <div className="carrito">
                                    <img src="carrito.png" alt="imagen carrito" />
                                    <div id="carrito">
                                        {carrito.length === 0 ? ( //basicamente esta parrte es un if
                                        <p className="centrar-texto">No hay contenido en tu carrito</p>
                                        ) : ( 
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th className="fuenteLigera centrar-texto ">Imagen</th>
                                                    <th className="fuenteLigera centrar-texto ">Nombre</th>
                                                    <th className="fuenteLigera centrar-texto ">Precio</th>
                                                    <th className="fuenteLigera centrar-texto ">Cantidad</th>
                                                    <th></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {carrito.map(photoPack => (
                                                    <tr key={photoPack.id}>
                                                        <td>
                                                            <img src="pkg01.png" alt="Paquete fotografico" />
                                                        </td>
                                                        <td>{photoPack.title}</td>
                                                        <td className="negrita">${photoPack.price}</td>
                                                        <td className="centrar-texto">
                                                            <button type="button" className="restarBoton">-</button>
                                                            {photoPack.cantidad}
                                                            <button type="button" className="sumarBoton">+</button>
                                                        </td>
                                                        <td>
                                                            <button type="button" className="eliminarBoton">X</button>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                        )}
                                        <p className="centrar-texto">Total pagar: <span>$0</span></p>
                                        <button className="boton__pequeno boton--secundario">Vaciar Carrito</button>
                                    </div>
                                </div>
                    </nav>
                </div>
            </div>
            <div class="header__texto">
                <h2 class="no-margin">Blog fotografia</h2>
                <p class="no-margin"> Informacion relevante del mundo de la fotografia digital</p>
            </div>
        </div>
    </header>
</>

);

}
export default header;