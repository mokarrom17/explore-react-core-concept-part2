export default function Friend({friend}){
    const {name , phone} = friend; 
    return(
        <div className="box">
            <h3>Name:{name}</h3>
            <p>Phone:{phone}</p>
        </div>
    )
}