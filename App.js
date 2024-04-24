import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  //const [people, setPeople] = useState(data)
  const [hotels, setHotels] = useState(data);
  const [hotelType, setHotelType] = useState('small');

  const handleRadioChange = (event) => {
    console.log(event.target.value);
    setHotelType(event.target.value);
  };

  return (
    <main>
      <section className='container'>
      <h3>{hotels.length} Hotels in Bulgaria</h3>
      <input type="radio" name="type_hotels" value="all" checked={hotelType === 'all'} onChange={handleRadioChange}/>All Hotels<br/>
      <input type="radio" name="type_hotels" value="small" checked={hotelType === 'small'} onChange={handleRadioChange}/>Small Family Hotels<br/>
      <input type="radio" name="type_hotels" value="big" checked={hotelType === 'big'} onChange={handleRadioChange}/>Big Hotels<br/>
      <List hotels={hotels}/>
      <button onClick={() => setHotels([])}>Clear All</button>
      </section>
    </main>
  )
}

export default App;
