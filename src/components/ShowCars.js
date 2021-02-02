import React, { useState } from 'react';
import axios from 'axios';
import '../App.css';
import Card from 'react-bootstrap/Card';

export default function ShowCars({carsPropsList}) {
  const [ carsList, setCarsList ] = useState(carsPropsList)

  const changeBg = async (element) => {
    var data = {"inService":!element.inService,"personInCharge":"Jorge","estimateDate":"03/03/2021"};
    var config = {
      method: 'patch',
      url: `http://carsback-env.eba-faqp7dvt.us-east-2.elasticbeanstalk.com/${element.id}`,
      headers: { 
        'Content-Type': 'application/json'
      },
      data: data
    };
    
    await axios(config)
    .then(function (response) {
      let newCarsList = [...carsList]
      let elementToChange = newCarsList.find(el=>el===element)
      elementToChange.inService = response.data.car.inService
      setCarsList(newCarsList)
    })
  }

  const showCars = cars => {
      return cars.map(el=>(
        <Card className={`car ${el.inService ? 'changeBack' : ''}`} onClick={()=>changeBg(el)} key={el.id}>
          <Card.Img variant="top" src={el.image} />
          <Card.Body>
            <Card.Title><strong>ID:</strong> {el.id}</Card.Title>
              <Card.Text><strong>Description:</strong> {el.description}</Card.Text>
              <Card.Text><strong>Make:</strong> {el.make}</Card.Text>
              <Card.Text><strong>Model:</strong> {el.model}</Card.Text>
              <Card.Text><strong>Scheduled Date:</strong> {el.scheduledDate}</Card.Text>
              <Card.Text><strong>Kilometers:</strong> {el.kilometers}</Card.Text>
          </Card.Body>
        </Card>
      ))
  }

  return (
    showCars(carsList)
  )
}
