import React from "react";
function CustomizaPage() {
    return (
        <main>
            <h2 id="titulo_login" className="titulos">LOGIN</h2>
            <form id="form_container_2">

                <label for="email">Email: </label>
                <input type="email" id="email" name="email" required></input>

                <label for="password">Password: </label>
                <input type="password" id="password" name="password"></input>

                <button type="submit">Log In</button>
                

                
            </form>

           
            
        </main>
    )
}
export default CustomizaPage;
