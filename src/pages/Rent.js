import {useState} from 'react'
const Rent = () => {
    const [user,setUser]= useState("")
    const [phone,setPhone]= useState("")
    const [car,setCar]= useState("Luxury")
    const [pick,setPick]= useState("")
    const [file,setFile]= useState("")
    const [drop,setDrop]= useState("")
    const handleSubmit =(e)=>{
       e.preventDefault()
       const users={user,phone,car,pick,file,drop}
       fetch('http://localhost:8000/users',{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(users)
       })
       .then(()=>{
        console.log("Form Submitted Successfully")
       })
    }
    return ( 
        <div className="rent">
            <h1>Rent A Car</h1>
            <div className="forms">
                <form onSubmit={handleSubmit}>
                    <label>Full Name:</label>
                    <input type="text" 
                    required
                    value={user}
                    onChange={(e)=>setUser(e.target.value)}
                    />
                    <label>Phone No:</label>
                    <input type="tel" 
                    required
                    value={phone}
                    onChange={(e)=>setPhone(e.target.value)}
                    />
                    <label>Driver's License:</label>
                    <input type="file" 
                    required
                    value={file}
                    onChange={(e)=>setFile(e.target.value)}
                    />
                    <label>Car Type:</label>
                    <select required 
                    value={car}
                    onChange={(e)=>setCar(e.target.value)}
                    >
                        <option value="Economy">Economy</option>
                        <option value="Business">Business</option>
                        <option value="Compact">Compact</option>
                        <option value="Luxury">Luxury</option>
                    </select>
                    <label>Pick-Up Date:</label>
                    <input type="date" required
                    value={pick}
                    onChange={(e)=>setPick(e.target.value)}
                    />
                    <label>Drop-Off Date:</label>
                    <input type="date" required
                    value={drop}
                    onChange={(e)=>setDrop(e.target.value)}
                    />
                    <button>Submit</button>
                </form>
            </div>
        </div>
     );
}
 
export default Rent;