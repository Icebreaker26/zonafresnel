import './App.css';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import InputGroup from 'react-bootstrap/InputGroup';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";







function App() {

  const [frecuencia,setFrecuencia] = useState();
  const [x,setX] = useState();
  const [y,setY] = useState();
  const [n,setN] = useState();
  const [radio, setRadio] = useState(0);

  const zonaFresnel = (frecuencia,x,y,n) => {

    x = Number(x);
    y = Number(y);
    frecuencia = Number(frecuencia);
    n = Number(n);
    

    const velocidadLuz = 300000000;
    let longitudOnda;
    let paso2;
    let radio = 0;

    if(frecuencia&&x&&y&&n){

        longitudOnda = velocidadLuz/frecuencia;  
        const distancia = x + y;
        const paso1 = n*longitudOnda*x*y;
        paso2 = paso1/distancia;
        radio = Math.sqrt(paso2);

            console.log(longitudOnda);
            console.log(distancia);
            console.log(paso1);
            console.log(paso2);
            console.log(`El radio es igual a: ${radio.toFixed(2)} metros`)
     }

  return radio;

}




//console.log(`Los valores son: x:${x},y:${y},frecuencia:${frecuencia},n:${n}`);

//zonaFresnel(7000000,10000,10000,1);

// const mostrar = () => console.log(`Los valores son: x:${x},y:${y},frecuencia:${frecuencia},n:${n}`);
    const ejecutar = () =>{
      setRadio(zonaFresnel(frecuencia,x,y,n));
    }

  return (
    <div className="App bg-primary">
     
      <h1 className='text-warning'>ZONA DE FRESNEL</h1>

    <div id='inputs'>
    {/*<InputGroup>*/}
      <Form.Control className='bg bg-danger text-light'
        name='frecuencia'
        placeholder={"Frecuencia en Hz"}
        value={frecuencia}
        onChange={e =>{ 
          setFrecuencia(e.target.value)
          ejecutar()
        }} 
        onKeyUp={ejecutar}
      />
      <Form.Control
        className='bg bg-warning' 
        name='distanciaX'
        placeholder={"Distancia x Metros"}
        value={x}
        onChange={e => {
          setX(e.target.value)
          ejecutar()
        }}
        onKeyUp={ejecutar}

      />
      <Form.Control
        className='bg bg-warning' 
        name='distanciaY'
        placeholder={"Distancia y Metros"}
        value={y}
        onChange={e =>{
          setY(e.target.value)
          ejecutar()
        }}
        onKeyUp={ejecutar}
      />
      <Form.Control 
        className='bg bg-info' 
        name='zona'
        placeholder={"# Zona: 1,2,3"}
        value={n}
        onChange={e=> {
          setN(e.target.value)
          ejecutar()
        }}
        onKeyUp={ejecutar}
      />
        {/* </InputGroup> */}

      </div>
    
      <h1 id='resultado'>
        Radio = {radio.toFixed(2)} Metros
      </h1>

        {/*<img id='antenas' src={zonaFresnelImage}/>*/}

      <div>

        
      <a href="https://github.com/Icebreaker26" target='_blank'>
      <FaGithub className='redes'/>
      </a>
      <a href="https://www.linkedin.com/in/alejandrotorres26" target='_blank'>
      <FaLinkedin className='redes'/>
      </a>
      <a href="https://www.instagram.com/alejoelavion/" target='_blank'>
        <FaInstagram className='redes'/>
      </a>


      </div>




    </div>
  );
}

export default App;
