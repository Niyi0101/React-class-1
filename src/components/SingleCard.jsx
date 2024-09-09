import { useState, useEffect } from 'react'
import { NavData1 } from '../data/NavData'
import { useParams } from 'react-router-dom'



const SingleCard = () => {
    const {id} = useParams()
    const [card, setCard] = useState({})

    useEffect(()=>{
        const render = NavData1.find((data)=> data.id === parseInt(id))
        if(render) {
            setCard(render)
        }
    }, [id])
  return (
    <>
<div>
<img src={card.img} style={{width: '200px', height: "250px"}} />
<p className='font-bold text-green-500'>{card.description}</p>
</div>
    </>
  )
}

export default SingleCard