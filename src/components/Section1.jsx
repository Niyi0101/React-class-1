import { NavData } from '../data/NavData'

const Section1 = () => {
  return (
    <>

<div style={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "10px"}}>
    {NavData.map((item, index)=>(
         <div key={index}>
            <img src={item.img} style={{width: '200px', height: "250px"}} />
            <p style={{font: "bold"}}>{item.description}</p>

    </div>
    ))}
   
           
    </div>

    </>
  )
}

export default Section1 