import {useState, useEffect} from 'react'
import carService from '../../services/car.service'
import "./HomePage.css"
import Filter from '../../components/Filter/Filter'

function HomePage() {
  const [car, setCar] = useState([])
  const [brandFilter, setBrandFilter] = useState([])

  const getAllCars = async() => {

    try {
      
      const fetchData = await carService.getAll()
      setCar(fetchData.data)
      setBrandFilter(fetchData.data)

    } catch (error) {
      console.log(error)
    }

  }

  useEffect(()=>{

    getAllCars();

  },[])


  const filter = (text) => {
    setCar(
      brandFilter.filter((car) => {
        
        return car.BRAND.toLowerCase().includes(text.toLowerCase());
      })
      
    );
    
  }



  return (
    <div className='HomeContainer'>
      <div className=''>
        <Filter filter={filter} />
  
      </div> 
      <div className='CardContainer'>
        {car.map((element)=>{
          return(
            <div className='Card' key={element._id}>
              
              <h4> Brand: {element.BRAND} </h4>
              <h5> Model: {element.MODEL} </h5>
              <p> Dealer: {element.DEALER} </p>
              <p> Min. mileage: {element.MIN_MILEAGE} </p>
              <p> Max. mileage: {element.MAX_MILEAGE} </p>
              
            </div>
          )
        })}
      </div> 
    </div>
  );
}

export default HomePage;