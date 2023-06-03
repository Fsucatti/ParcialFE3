import { useState } from 'react'
import './App.css'
import Form from './Components/Form'
import Card from './Components/Card'

let uniqueId = 0;

const App = () => {
  const [canciones, setCanciones] = useState([])

  const handleSubmit = (values) => {
    setCanciones([...canciones, { id: uniqueId++, data: values }])
    console.log(canciones)
  };

  return (
    <div className="App">
        <h1 className='title'>Formulario</h1>
        <Form onSubmit={handleSubmit} />
        <h1 className='title'>Canciones</h1>
    <div></div>
      <div className='card'>
        {canciones.map((cancion) => {
          return (
            <Card 
                key={cancion.id} 
                id={cancion.id} 
                nombre={cancion.data.nombre}
                autor={cancion.data.autor}
                año={cancion.data.año} 
                onDelete={(id) => {
                  console.log(id)
                  console.log('Cancion eliminada')
              }} 
            />

            // {/<div className='card' key={cancion.id}>
            //   <p>Nombre: {cancion.data.name}</p>
            //   <p>Año: {cancion.data.age}</p>
            // </div> }
          );
})}
</div>
    </div>
  );
}

export default App
