import { NavData1 } from "../data/NavData"; 
import { Link } from "react-router-dom";
const Services = () => {

     return (
           
           <>
            <div style={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "10px"}}>
    {NavData1.map((item, index)=>(
        <Link key={item.id} to={`/services/${item.id}`}>
                 <div key={index}>
            <img src={item.img} style={{width: '200px', height: "250px"}} />
            <p style={{font: "bold"}}>{item.description}</p>

    </div>    
        </Link>
    
    ))}
   
           
    </div>



    
           </>
        )
}
       
export default Services;