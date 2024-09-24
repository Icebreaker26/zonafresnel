import './App.css';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import InputGroup from 'react-bootstrap/InputGroup';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { GrSatellite } from "react-icons/gr";







function App() {

  const [frecuencia,setFrecuencia] = useState();
  const [x,setX] = useState();
  const [y,setY] = useState();
  const [n,setN] = useState();
  const[radio, setRadio] = useState(0);
  const [unidadFrecuencia, setUnidadFrecuencia] = useState('Hz');
  const [unidadLongitud, setUnidadLongitud] = useState('M');

  const zonaFresnel = (frecuencia,x,y,n,unidadFrecuencia,unidadLongitud) => {

    x = Number(x);
    y = Number(y);
    frecuencia = Number(frecuencia);
    n = Number(n);
  
      switch(unidadFrecuencia){

        case 'GHz':
        frecuencia *=1000000000;
        console.log("ESTÁ EN GHz");
        break;

        case 'MHz':
        frecuencia *=1000000;
        console.log("ESTÁ EN MHZ");
        break;

        case 'KHz':
        frecuencia *=1000;
        console.log("ESTÁ EN KHZ");
        break;
          
        default:
          console.log("ESTÁ EN Hz");


      }

      switch(unidadLongitud){

        case 'KM':
        x *= 1000;
        y *= 1000;
        console.log("ESTÁ EN KM");
        break;

        case 'MILLAS':
        x*= 1609;
        y*= 1609;
        console.log("ESTÁ EN MILLAS");
        break;

        default:
        console.log("ESTÁ EN METROS");


      }
    

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
      setRadio(zonaFresnel(frecuencia,x,y,n,unidadFrecuencia,unidadLongitud));
    }

  return (
    <div className="App bg-primary">
     
      <h1 className='text-warning'>ZONA DE FRESNEL</h1>

    <div id='inputs'>
    {/*<InputGroup>*/}
      <Form.Control className='bg bg-danger text-light'
        name='frecuencia'
        placeholder={"Frecuencia"}
        value={frecuencia}
        onChange={e =>{ 
          setFrecuencia(e.target.value)
          ejecutar()
        }} 
        onKeyUp={ejecutar}
      />

      <Form.Select aria-label="Default select example"
                  className='bg bg-secondary' 

       onChange={e => {
        setUnidadFrecuencia(e.target.value)
        ejecutar()
        onclick={ejecutar}
      }}>
      <option value="Hz">Hz</option>
      <option value="MHz">MHz</option>
      <option value="GHz">GHz</option>
      </Form.Select>

      <Form.Control
        className='bg bg-warning' 
        name='distanciaX'
        placeholder={"Distancia x"}
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
        placeholder={"Distancia y"}
        value={y}
        onChange={e =>{
          setY(e.target.value)
          ejecutar()
        }}
        onKeyUp={ejecutar}
      />
        <Form.Select 
            aria-label="Default select example"
            className='bg bg-secondary' 

            
       onChange={e => {
        setUnidadLongitud(e.target.value)
        ejecutar()
        onclick={ejecutar}
      }}>
      <option value="M">M</option>
      <option value="KM">KM</option>
      <option value="MILLAS">MILLAS</option>
      </Form.Select>

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
      <a href="https://icebreaker26.github.io/TheLinkinTool/" target='_blank'>
        <GrSatellite className='redes'/>

      </a>


      </div>




    </div>
  );
}

export default App;
