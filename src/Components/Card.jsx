import styles from './Card.module.css'

function Card(props) {

        function handleCLick() {
        console.log('Click en Eliminar')
        props.onDelete(props.id)
    }


    return (
        console.log(props),
        <div className={styles.card}>
            <h3>Nombre: {props.nombre}</h3>
            <h3>Autor: {props.autor}</h3>
            <h3>Año: {props.año}</h3>
            <button onClick={handleCLick}>Eliminar</button>
        </div>
    )
}

export default Card