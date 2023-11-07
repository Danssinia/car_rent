import { useEffect, useState } from "react"
import {AiFillLike} from 'react-icons/ai'
import { AiFillDislike } from "react-icons/ai"
const Cars = () => {
    const [cars, setCars] = useState()
    useEffect(() => {
        fetch('http://localhost:8000/cars')
            .then((res) => {
                return res.json()
            .then((data) => {
             setCars(data)
            })
            })
    }, [])

    return (
        <div className="cars-pricing">
            <h1>List Of Cars</h1>
            {cars ? (
                cars.map((car) => (
                    <div className="cars" key={car.id}>
                        <p>Name Of The Car : {car.name}</p>
                        <img src={car.image_url} alt={car.name} className="image-to-sale"/>
                        <p>Model : {car.model} - Year : {car.year}</p>
                        <div className="price-likes">
                         <div className="model-price">
                            <p>Price Per Day : {car.price_per_day}</p>
                         </div>
                         <div className="likes"></div>
                            <AiFillLike className="like"/> 
                            <AiFillDislike className="like"/>
                        </div>
                    </div>
                ))
            ) : (
                <p>Loading data...</p>
            )}
        </div>
    );
}

export default Cars;