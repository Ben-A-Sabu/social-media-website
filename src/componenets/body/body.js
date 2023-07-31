import "./body.css"
export default function Body(props) {
    return (
        <div className="bodycontainer" id={props.id}>
            {props.children}
            
        </div>
    )
}