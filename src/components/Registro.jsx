import React, { facebook, github, instagram } from "react";
import { RedesSociales } from "./RedesSociales";
import { Formulario } from "./Formulario";
import { Alerta } from "./Alerta";
export const Registro = () => {
    return (
        < >
            <div className="card1">
                <h1 className="titulo">Crea tu Cuenta</h1>
                <RedesSociales facebook={facebook} github={github} instagram={instagram} />
                <h1 className="subtitulo">O usa tu email para registrarte</h1>
                <Formulario />
                {/* <Alerta /> */}
            </div>
        </>
    );
}