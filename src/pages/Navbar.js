import { Link } from "react-router-dom";
const Navbar = () => {
    return ( 
        <div className="navbar">
            <h1>አብርሆት Car Rent</h1>
            <div className="lists">
                <Link to="/car_rent">Home</Link>
                <Link to="/car_rent/cars">Cars And Pricing</Link>
                <Link to="#">About</Link>
                <Link to="/car_rent/contact">Contact</Link>
            </div>
            <div className="requests">
                <Link to="/car_rent/requests">Requests</Link>
            </div>
            <Link to="/car_rent/rent"><button>Rent A Car</button></Link>
        </div>
     );
}
 
export default Navbar;