import './styles.css'

export function Card(props){
    return(
        <div className='card'>
            <strong>{props.title}</strong>
            <small>{props.description}</small>
        </div>
    )
}