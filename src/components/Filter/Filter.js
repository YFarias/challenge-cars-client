import {useState} from 'react'
import Form from 'react-bootstrap/Form'


function Filter(props) {
    const [brand, setBrand] = useState("All");
    
    
    const handleSelect = (e) => {
        setBrand(e.target.value);
        
        props.filter(e.target.value)

    }
    
    
    return ( 
        <div className='FilterContainer'>
                      
            <Form.Select size='lg' value={brand} onChange={handleSelect} >
                <option value="">All Brands</option>
                <option value="AUDI">Audi</option>
                <option value="BMW">BMW</option>
                <option value="PEUGEOUT">Peugeout</option>
                <option value="SEAT">Seat</option>
                <option value="SKODA">Skoda</option>
                <option value="TESLA">Tesla</option>
                <option value="VW">VW</option>

            </Form.Select>
        </div>
     );
}

export default Filter;