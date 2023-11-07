import { useParams } from "react-router-dom"
import {useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
const RequestDetails = () => {
    const navigate=useNavigate()
    const { id }=useParams();
    const [details,setDetails]=useState([])
    const handleAccept = () =>{

        fetch(`http://localhost:8000/users/${id}`,{
            method: 'PATCH',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify({status:1})
        })
        .then((res)=>{
            return res.json()
            .then((data)=>{
                setDetails(data)
            })
        })
        navigate('/requests');
    }

    const handleReject = () => {
        fetch(`http://localhost:8000/users/${id}`,{
            method: 'PATCH',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify({status:2})
        })
        .then((res)=>{
            return res.json()
            .then((data)=>{
                setDetails(data)
                navigate('/requests')
            })
        })
    }
     useEffect(()=>{
        fetch(`http://localhost:8000/users/${id}`)
        .then((res)=>{
             return res.json()
            .then((data)=>{
                setDetails(data)
            })
        })
    },[id])
    return ( 
        <div className="details-container">
            <h1>Request Details</h1>
            <div className="details">
                <div className="classone">
                <p>Name : {details.user}</p>
                <p>Phone No : {details.phone}</p>
                <p>Selected Car : {details.car}</p>
                </div>
                <div className="classtwo">
                    <img src={details.file} alt="driver_license"/>
                    <button className="primary" onClick={handleAccept}>Accept</button>
                    <button className="warning" onClick={handleReject}>Reject</button>
                </div>
            </div>
        </div>
     );
}
 
export default RequestDetails;