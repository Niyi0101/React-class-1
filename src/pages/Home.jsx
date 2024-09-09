import Navbar from "../components/nav/Navbar";
import { useState, useEffect } from "react";
import { CarouselData } from "../data/CarouselData.js"

const Home = () => {

    const [show, setShow] = useState(false)

    const [object, setObject] = useState({
      names: '',
      hobby: ''
    })
    
    const handleObject = () => {
      setObject({
        ... object,
        names: 'Adenugba Adeniyi',
        hobby: 'Football'
        
      })
      setShow(!show)
    }

    const [carou, setCarou] = useState(0)
    useEffect(() => {
        const interval = setInterval(()=>{
            setCarou(prev=> (prev + 1) % CarouselData.length)
        }, 2000 )
    return ()=> clearInterval (interval)
}, [])

     return (
           
            <>
                <Navbar />
  {show && 
      <div>

        <p>Names: {object.names}</p>
        <p>Hobby: {object.hobby} </p>
      </div>
  }
    

    <button onClick={handleObject}>Click</button>



<div>
    <img src={CarouselData[carou].img} style={{width: '250px'}} />
</div>

                
            </>
        )
}
       
export default Home;