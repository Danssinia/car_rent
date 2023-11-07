import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './pages/Navbar'
import Home from './pages/Home'
import Cars from './pages/Cars'
import About from './pages/About'
import Contact from './pages/Contact'
import Rent from './pages/Rent'
import Requests from './pages/Requests'
import RequestDetails from './pages/Requestdetails'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar/>
      <div className="content">
        <Routes>
          <Route path="/car_rent" element={<Home/>}></Route>
          <Route path="/car_rent/cars" element={<Cars/>}></Route>
          <Route path="/car_rent/about" element={<About/>}></Route>
          <Route path="/car_rent/contact" element={<Contact/>}></Route>
          <Route path="/car_rent/rent" element={<Rent/>}></Route>
          <Route path="/car_rent/requests" element={<Requests/>}></Route>
          <Route path="/car_rent/details/:id" element={<RequestDetails/>}></Route>
        </Routes>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
