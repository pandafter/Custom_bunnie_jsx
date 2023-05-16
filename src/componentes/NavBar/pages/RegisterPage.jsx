import React from "react";

function CustomizaPage() {
    
    return (
        <main>
            <h2 className="titulos" id="titulo_registro">REGISTRATE</h2>
            <form id="form_container">
                <label className="input" htmlFor="username">Username: </label>
                <input className="label" type="text" id="username" name="username" required />

                <label className="input" htmlFor="email">Email: </label>
                <input className="label" type="email" id="email" name="email" required />

                <label className="input" htmlFor="password">Password: </label>
                <input className="label" type="password" id="password" name="password" />

                <label className="input" htmlFor="confirm-password">Confirm Password: </label>
                <input className="label" type="password" id="confirm-password" name="confirm-password" required />

                <button type="submit">Register</button>
            </form>

            
        </main>
    );
}

export default CustomizaPage;
