import React from 'react';

function About({about, image="https://via.placeholder.com/215"}) {
  return (
    <aside>
        <img src={image} alt="given as a prop" />
        <p>{about}</p>
    </aside>
  );
}

export default About;
