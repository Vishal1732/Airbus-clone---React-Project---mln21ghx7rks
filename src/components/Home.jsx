import React, { useEffect, useState } from 'react'
import './Home.css'
const Home = () => {
  const [flights, setFlights] = useState([])
  const [from, setFrom] = useState('')
  const [to, setTo] = useState('')
  const [filterdFlights, setFilteredFlights] = useState([])
  const handleSearch = () => {
    setFilteredFlights(
      flights.filter(
        (flight) => flight.from.toLowerCase() === from.toLowerCase() && flight.to.toLowerCase() === to.toLowerCase()
      )
    )
    console.log(filterdFlights)
  }
  useEffect(() => {
    fetch('https://content.newtonschool.co/v1/pr/63b86a1d735f93791e09cb11/flights')
      .then(res => res.json())
      .then(result => setFlights(result))
      .catch(error => console.log(error))
  }, [])
  return (
       <div className='home'> 
       <div className='search' >
        <div className='search-item'>
          <label htmlFor="from">From</label>
          <input type="text" id='from' onChange={(e) => setFrom(e.target.value)} value={from} />
        </div>
        <div className='search-item'>
          <label htmlFor="to">To</label>
          <input type="text" id='to' onChange={(e) => setTo(e.target.value)} value={to} />
        </div>
        <div className='search-item'>
          <label htmlFor="depart">Depart</label>
          <input type="date" id='depart' />
        </div>
        <div className='search-item'>
          <label htmlFor="return">Return</label>
          <input type="date" id='return' />
        </div>
        <button onClick={handleSearch} type='button'>SEARCH FLIGHTS</button>
      </div>
    <div className='filterd-flights'>
        {filterdFlights &&
          filterdFlights.map((flight, index) => (
            <div key={index}>
              <div>{flight.from} - {flight.to}</div>
              <div>{flight.departure.departureTime} | {flight.departure.departureDate}</div>
              <div>{flight.airlineName}</div>
              <div>{flight.via}</div>
              <div>${flight.price}</div>
              <button>Book</button>
            </div>
          ))
        }
      </div>
       </div>
   
  )
}
export default Home
