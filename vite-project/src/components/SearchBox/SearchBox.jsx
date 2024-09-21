import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"
import { useState } from 'react';

const SearchBox = () => {
  let [city, setCity] = useState("");
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "255964a7f41d1e25959ea5e9ca6f2102"; 
  let getWeatherInfo = async() => {

      let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`)
      let jsonResponse = await response.json();
      
      let result = {
        city:city,
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feelsLike: jsonResponse.main.feelsLike,
        weather: jsonResponse.weather[0].description
      }
      console.log(result);
  }
  let handleChange = (event) => {
    setCity(event.target.value);
  };
  let handleSubmit = (event) => {
     event.preventDefault();
     console.log(city);
     setCity("");
     getWeatherInfo();
  };
  return (
    <div className='search'>
        <h1>Search for the Weather</h1>
        <form onSubmit={handleSubmit} className='form' action="">
          <div>
            <TextField 
              id="outlined-basic" 
              label="City name" 
              variant="outlined" 
              required 
              value={city} 
              onChange={handleChange}
            />
          </div>
            
            <div className='btn'>
              <Button variant="contained" type='submit'>
                Search
              </Button>
            </div>
            
        </form>
    </div>
  )
}
export default SearchBox
