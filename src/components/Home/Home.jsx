import "./Home.css"
import { useState } from "react"


function Home(){

    const [diasRestantes, setDiasRestantes] = useState();
    const [horasRestantes, setHorasRestantes] = useState();
    const [minutosRestantes, setMinutosRestantes] = useState();
    const [segundosRestantes, setSegundosRestantes] = useState();

    function actualizaContador(){
        const fechaHoy = new Date();
        const fechaFestival = new Date("2024-09-13");
        const duracion = fechaFestival - fechaHoy;
        const milisegundosDeSegundo = 1000;
        const milisegundosDeMinuto = milisegundosDeSegundo * 60;
        const milisegundosDeHora = milisegundosDeMinuto * 60;
        const milisegundosDeDia = milisegundosDeHora * 24;
    
        fechaFestival.setHours(17, 0, 0);
        
        setDiasRestantes(Math.floor(duracion/milisegundosDeDia));
        setHorasRestantes(Math.floor((duracion % milisegundosDeDia)/milisegundosDeHora));
        setMinutosRestantes(Math.floor((duracion % milisegundosDeHora)/milisegundosDeMinuto));
        setSegundosRestantes(Math.floor((duracion % milisegundosDeMinuto)/milisegundosDeSegundo));
    }

    setInterval(actualizaContador, 1000);

    return(
        <section className="section-home">
            <div className="contador-div">
                <p className="contador-p"><span className="contador-span">{diasRestantes}</span>D</p>
                <p className="contador-p"><span className="contador-span">{horasRestantes}</span>H</p>
                <p className="contador-p"><span className="contador-span">{minutosRestantes}</span>m</p>
                <p className="contador-p"><span className="contador-span">{segundosRestantes}</span>s</p>
            </div>
        </section>
    );

}

export {Home};