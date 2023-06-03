import { useState } from "react";
import styles from "./Form.module.css";


const Form = (props) => {
    const [nombre, setNombre] = useState("");
    const [autor, setAutor] = useState("");
    const [año, setAño] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (nombre.length < 3 ) {
            console.log("nombre", nombre.length)
            setError("Por favor chequea que la información sea correcta");
        }else if (autor.length < 6) {
            console.log("autor", autor.length)
            setError("Por favor chequea que la información sea correcta");
        }else if (año.length < 4) {
            console.log("año", año.length)
            setError("Por favor chequea que la información sea correcta");
        }else{
        props.onSubmit({nombre, autor, año});
        setNombre("");
        setAño("");
        setAutor("");
        setError("");
    }
    }

    return (
        
        <div className={styles.form}>
            <h2>Agregar cancion</h2>
            <form onSubmit={handleSubmit}>
                <label>Nombre:</label>
                <input
                    type="text"
                    id="nombre"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                />
                <br />
                <label>Autor:</label>
                <input
                    type="text"
                    id="autor"
                    value={autor}
                    onChange={(e) => setAutor(e.target.value)}
                />
            
                <br />
                <label>Año:</label>
                <input
                    type="number"   
                    id="año"    
                    value={año}
                    onChange={(e) => setAño(e.target.value)}
                />
                <br />
                <button type="submit">Submit</button>
            </form>
            {error && <p className={styles.error}>{error}</p>}
        </div>
    )

}

export default Form;