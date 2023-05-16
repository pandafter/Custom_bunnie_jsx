import React from "react";
function ContactoPage() {
    return (
        <main>
            <h1 className='visible' id="titulo_contacto">Contacto</h1>
            <div>
                <form id="form_contacto">
                    <label>Nombre: </label>
                    <input type="name" id="name" name="name"></input>

                    <label>telefono: </label>
                    <input type="tel" id="tel" name="tel"></input>

                    <label>Email: </label>
                    <input type="email" id="email" name="email"></input>
                    
                    <label for="message">TU PEDIDO PERSONALIZADO AQUI ↓</label>
                    <textarea id="texto_cotizacion" required></textarea>


                    <button type="submit">ENVIAR</button>
                </form>
            </div>
        </main>
    )
}
export default ContactoPage;
