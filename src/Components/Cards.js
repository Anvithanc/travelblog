import React from 'react';

export default function Cards(props) {
  const { items } = props;

  return (
    <div className='card'>
      {items.map((item) => (
        <div key={item.id} className='card1'>
          <section className='column-left'>
            {/* Rendering images dynamically from item.image */}
            <img className="card-img" src={item.image} alt="images" />
          </section>
          <section className='column-right'>
            <span className='material-symbols-outlined'>location_on</span>
            <span className="card-country">{item.country}</span>
            <a href={item.googleMapLink}>View on Google Maps</a>
            <h3 className="card-country-title">{item.title}</h3>
            <h4 className="card-date">{item.date}</h4>
            <p>{item.description}</p>
            <span>Read more..</span>
          </section>
        </div>
      ))}
    </div>
  );
}

