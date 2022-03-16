import React from 'react'
import axios from "axios";
const Hotels = () => {
   


    const options = {
      method: 'GET',
      url: 'https://priceline-com-provider.p.rapidapi.com/v1/hotels/search',
      params: {
        date_checkin: '2022-06-17',
        location_id: '3000090052',
        date_checkout: '2022-06-18',
        sort_order: 'HDR',
        amenities_ids: 'FINTRNT,FBRKFST',
        rooms_number: '1',
        star_rating_ids: '3.0,3.5,4.0,4.5,5.0'
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
    <div>Hotels TESTETSTES</div>
  )
}

export default Hotels