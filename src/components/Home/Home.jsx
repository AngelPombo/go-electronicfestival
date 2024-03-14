import { Slider } from "../Carrousel/js/Slider";
import "./Home.css"
import { useState } from "react"
import videohome from "../../assets/videohome.mp4"
import ReactPlayer from "react-player";


function Home(){

    const [diasRestantes, setDiasRestantes] = useState();
    const [horasRestantes, setHorasRestantes] = useState();
    const [minutosRestantes, setMinutosRestantes] = useState();
    const [segundosRestantes, setSegundosRestantes] = useState();

    function actualizaContador(){
        const fechaHoy = new Date();
        const fechaFestival = new Date("Fri Sep 13 2024 17:00:00 UTC+01:00");
        const duracion = fechaFestival - fechaHoy;
        const milisegundosDeSegundo = 1000;
        const milisegundosDeMinuto = milisegundosDeSegundo * 60;
        const milisegundosDeHora = milisegundosDeMinuto * 60;
        const milisegundosDeDia = milisegundosDeHora * 24;
    
        fechaFestival.setHours(17, 0, 0);
        
        setDiasRestantes(Math.floor(duracion/milisegundosDeDia) < 10 ? "0"+Math.floor(duracion/milisegundosDeDia) : Math.floor(duracion/milisegundosDeDia));
        setHorasRestantes(Math.floor((duracion % milisegundosDeDia)/milisegundosDeHora) < 10 ? "0"+Math.floor((duracion % milisegundosDeDia)/milisegundosDeHora) : Math.floor((duracion % milisegundosDeDia)/milisegundosDeHora));
        setMinutosRestantes(Math.floor((duracion % milisegundosDeHora)/milisegundosDeMinuto) < 10 ? "0"+Math.floor((duracion % milisegundosDeHora)/milisegundosDeMinuto) : Math.floor((duracion % milisegundosDeHora)/milisegundosDeMinuto));
        setSegundosRestantes(Math.floor((duracion % milisegundosDeMinuto)/milisegundosDeSegundo) < 10 ? "0"+Math.floor((duracion % milisegundosDeMinuto)/milisegundosDeSegundo) : Math.floor((duracion % milisegundosDeMinuto)/milisegundosDeSegundo));
    }

    setInterval(actualizaContador, 1000);

    return(
        <>
            <section className="section-home">
                <div className={`contador-container ${diasRestantes === 0 && horasRestantes === 0 && minutosRestantes === 0 && segundosRestantes === 0 ? 'clear' : ""}`}>
                    <div className="contador-div">
                        <p className="contador-p"><span className="contador-span">{diasRestantes}</span>DÍAS</p>
                        <p className="contador-p"><span className="contador-span">{horasRestantes}</span>HORAS</p>
                        <p className="contador-p"><span className="contador-span">{minutosRestantes}</span>MINUTOS</p>
                        <p className="contador-p"><span className="contador-span">{segundosRestantes}</span>SEGUNDOS</p>
                    </div>
                </div>
                <div className="home-video-div">
                <ReactPlayer
                    url={videohome}
                    playing={true} 
                    loop
                    muted
                    playsinline
                    width="100%"
                    height="100%"
                    className='video-home'
                    />
                </div>
                <Slider/>
            </section>
            
        </>
        
    );

}

export {Home};