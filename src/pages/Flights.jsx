import React from 'react'
import axios from "axios";

const Flights = () => {
    

    const options = {
      method: 'GET',
      url: 'https://priceline-com-provider.p.rapidapi.com/v1/flights/search',
      params: {
        date_departure: '2022-06-17',
        class_type: 'ECO',
        itinerary_type: 'ONE_WAY',
        location_arrival: 'NYC',
        location_departure: 'MIA',
        sort_order: 'PRICE',
        date_departure_return: '2022-06-18',
        duration_max: '2051',
        price_min: '100',
        number_of_passengers: '1',
        price_max: '20000',
        number_of_stops: '1'
      },
      headers: {
        'x-rapidapi-host': 'priceline-com-provider.p.rapidapi.com',
        'x-rapidapi-key': '0e2c4a5555mshe2205739327b53fp1a1a8djsn94bdfb2e7ef1'
      }
    };
    
    axios.request(options).then(function (response) {
        console.log(response.data);
    }).catch(function (error) {
        console.error(error);
    });
  return (
      <>
    <div>Vrooom</div>
    <p></p>
    </>
  )
}

export default Flights