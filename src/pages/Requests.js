import { useEffect, useState } from "react";
import {Link} from 'react-router-dom'
const Requests = () => {
    const [datas,setDatas] = useState()
    useEffect(()=>{
        fetch('http://localhost:8000/users')
        .then((res)=>{
            return res.json()
            .then((data)=>{
                setDatas(data)
            })
            })
    },[]);
    return ( 
        <div className="request-container">
            <h2>All Requests</h2>
            {datas ? (
                    datas.map((data)=>(
                    <Link to={`/details/${data.id}`}><div className="request" key={data.id}>
                            <p>Name : {data.user}</p>
                            <p>Phone No : {data.phone}</p>
                            <p>Selected Car : {data.car}</p>
                            <p>Pick-up Date : {data.pick}</p>
                            <p>Drop-off Date : {data.drop}</p>
                            <div>
                                {data.status === 0 ?  <p>Status : Pending</p>:null}
                                {data.status === 1 ?  <p>Status : Accepted</p>:null}
                                {data.status === 2 ? <p>Status : Rejected</p>:null}
                            </div>
                        </div>
                        </Link>
                    ))
                ):(
                    <p>Loading Data</p>
                )}
           
        </div>
     );
}
 
export default Requests;