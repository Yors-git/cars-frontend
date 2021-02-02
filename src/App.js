import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';


import ShowCars from './components/ShowCars'

const httpAddress = 'http://carsback-env.eba-faqp7dvt.us-east-2.elasticbeanstalk.com/'

function App() {
  const [ isLoading, setIsLoading ] = useState(true)
  const [ carsData, setCarsData ] = useState()

  useEffect(() => {
    getCars() 
  }, [])

  const getCars = async () => {
    const response = await axios.get(httpAddress);
    setCarsData(response.data.cars);
    setIsLoading(false);
  }
  
  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    
    <div className='container'>
      <ShowCars carsPropsList={carsData} />
    </div>
  
  )  
}

export default App;
