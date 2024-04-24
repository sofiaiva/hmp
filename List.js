import React from 'react';

const List = ({ hotels, hotelType }) => {
let filteredHotels = hotels;
console.log(hotels);
console.log(hotelType);
if(hotelType == 'small'){
  filteredHotels = hotels.filter(hotel => hotel.rooms <30);
} else if (hotelType == 'big'){
  filteredHotels = hotels.filter(hotel => hotel.rooms >= 30);
}
console.log(filteredHotels);

let count = 0;  

  return (
    <>
      {filteredHotels.map((hotel) => {
        const {id, name, rooms, apart, image} = hotel;
        
          count++;
        return (
          <>
            <h3>{count} {hotelType == 'small' ? 'Small Family Hotel' : 'Big Hotel'}</h3>
            <article key={id} className='hotel'>
              <img src={image} alt={name} />
              <div>
                <h4>Name: {name}</h4>
                <p>Rooms: {rooms} </p>
                <p>Apartments: {apart} </p>
              </div>
            </article>
          </>
        );
        
      })
      

      }
    </>
  );
};

export default List;
