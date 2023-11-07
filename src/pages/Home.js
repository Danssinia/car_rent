import car1 from '../images/car1.jpg';
import car2 from '../images/car2.jpg';
import car3 from '../images/car3.jpg';
import car4 from '../images/car4.jpg';
import car5 from '../images/car5.jpg';
import {GoSearch} from 'react-icons/go';
const Home = () => {

    const handleClick = () => {
        alert("We Feel Sorry! All Cars Has Been Rented");
    }

    return ( 
        <div className="home">
            <div className="search-bar-container">
                <div className="search-bar">
                    <p>Where</p>
                    <input type="text" placeholder='City,Airport or Hotel'/>
                </div>
                <div className="search-bar">
                    <p>From</p>
                    <input type="date" />
                </div>
                <div className="search-bar">
                    <p>Until</p>
                    <input type="date"/>
                    <GoSearch className="search-icon" onClick={handleClick}/>
                </div>
            </div>
            <div className="slider">
                <div className="slide-track">
                    <div className="slide">
                        <img src={car5} alt="car-five" className='car-image'/>
                    </div>
                    <div className="slide">
                        <img src={car4} alt="car-four" className='car-image' />
                    </div>
                    <div className="slide">
                        <img src={car2} alt="car-two" className='car-image'/>
                    </div>
                    <div className="slide">
                        <img src={car3} alt="car-three" className='car-image'/>
                    </div>
                    <div className="slide">
                        <img src={car1} alt="car-one" className='car-image'/>
                    </div>
                    <div className="slide">
                        <img src={car5} alt="car-five" className='car-image'/>
                    </div>
                    <div className="slide">
                        <img src={car4} alt="car-four" className='car-image'/>
                    </div>
                    <div className="slide">
                        <img src={car2} alt="car-two" className='car-image'/>
                    </div>
                    <div className="slide">
                        <img src={car3} alt="car-three" className='car-image'/>
                    </div>
                    <div className="slide">
                        <img src={car1} alt="car-one" className='car-image'/>
                    </div>
                    <div className="slide">
                        <img src={car5} alt="car-five" className='car-image'/>
                    </div>
                    <div className="slide">
                        <img src={car4} alt="car-four" className='car-image'/>
                    </div>
                    <div className="slide">
                        <img src={car2} alt="car-two" className='car-image'/>
                    </div>
                    <div className="slide">
                        <img src={car3} alt="car-three" className='car-image'/>
                    </div>
                    <div className="slide">
                        <img src={car1} alt="car-one" className='car-image'/>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Home;