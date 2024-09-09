import { PrimaryButton, SecondaryButton } from "../components/Button";
import { useState } from "react";
import { connect } from "react-redux";

const Contact = ({counts}) => {
    const HandleClick = (e)=> {
            e.preventDefault()
            console.log("I am clicked")
    }
    const [boy, setBoy] = useState('Niyi')
    const handleBoy = () => [
        setBoy('Joy')
    ]

    const [count, setCount] = useState(0)
    const handleCount = () => [
        setCount(count+1)
    ]

const handleSubtraction =() => [
    setCount(count-1)
]

const [objects, setObjects] = useState({
    name: '',
    age: '',
    complexion: ''
})
const handleObject = () => {setObjects({
    ...objects,
    name: name,
    age: age,
    complexion: 'dark'
})}

const [name, setName] = useState('')
const [age, setAge] = useState('')

 return (
           <>
  <div>Contact Page</div>
            <PrimaryButton clicks={HandleClick}>Explore &rarr;</PrimaryButton>
        <p>Hello {boy}</p>
            <SecondaryButton clicks={handleBoy} >Click</SecondaryButton>
              <p>{count} </p>
           <PrimaryButton clicks={handleCount}>Counts</PrimaryButton>

           <PrimaryButton clicks={handleSubtraction}> Counts</PrimaryButton>


<form>
<label htmlFor="name" >Name:</label>
    <input type="text" name="name" value={name} onChange={(e)=>setName(e.target.value)}  />
        <br>
        </br>
    <label htmlFor="age" >Age:</label>
    <input type="text" name="name" value={age} onChange={(e)=>setAge(e.target.value)} />

   
</form>
<button >
    Clicks
</button>

            <div>
                <p>Name: {objects.name} </p>
                <p>Age: {objects.age} </p>    
                <p>Complexion: {objects.complexion} </p>   
            </div>

           <PrimaryButton clicks={handleObject}> Click here</PrimaryButton>



           <p>You have {counts} items in your cart</p>
           </>

         
            
        )

}

const mapStateToProps=(state)=>(
    {
        counts: state.count
    }
)
       
export default connect (mapStateToProps)(Contact)


