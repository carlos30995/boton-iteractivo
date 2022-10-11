import { Formik, useFormik, Field, ErrorMessage } from 'formik'
import { useState } from 'react'

import './App.css'

function App() {
  const [formulario,setformulario] = useState(false);
  let classboton =document.getElementById('subbuton');
  return (
    <>
      <Formik
        initialValues={{
          nombre:'',
          contraseña:''
        }}
        validate={(valores)=>{
          let errores ={};

          if (!valores.nombre) {
            errores.nombre="Por favor ingrese el nombre *";
          }else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)) {
            errores.nombre = 'El nombre solo puede tener letras y espacios'

          }
          if (!valores.contraseña) {
            errores.contraseña="Por favor ingrese la contraseña *";
            
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.contraseña)) {
            errores.contraseña = 'El nombre solo puede tener letras y espacios'

          }
          return errores;
        }}

        onSubmit={(valores,{resetForm})=>{
          console.log(valores);         
          console.log('enviado '+ formulario);
          setformulario(true);
          if(!formulario){document.getElementById("subbuton").classList.remove("rojo")}
          resetForm("");
          setTimeout(()=>setformulario(false),6000);
        }}
      >
       {({values ,errors, handleSubmit,handleChange ,touched, handleBlur})=>(
        <form className='Contenedor' onSubmit={handleSubmit}>
          <div>
            <label htmlFor="nombre">Nombre: </label>
            <br />
            <input type="text" id='nombre' name='nombre' value={values.nombre} onChange={handleChange} onBlur={handleBlur}/>
            {touched.nombre && errors.nombre && <div className='error'>{errors.nombre}</div>}
          </div>

          <div>
            <label htmlFor="contraseña">Contraseña: </label>
            <br />
            <input type="password" id='contraseña' name='contraseña' value={values.contraseña} onChange={handleChange} onBlur={handleBlur}/>
            {touched.contraseña && errors.contraseña && <div className='error'>{errors.contraseña}</div>}
          </div>
          
          <button id='subbuton' type='submit' className='subbuton rojo'onClick={()=>{if(formulario){
            ocument.getElementById("subbuton").classList.remove("rojo")
          }}}>Igresar</button>          
          
          {formulario && <div className='exito'>Ingrezando</div>}
          {!formulario && document.getElementById("subbuton").classList.add("rojo")}
        </form>
        )}
      </Formik>

    </>
  )
}

export default App
