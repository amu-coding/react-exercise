function Card (props) {
    return (
        <div>
            <h1>{props.name}</h1>
            <p>{props.role}</p>
            <p>{props.desc}</p>
        </div>
    )
}
 export default Card;