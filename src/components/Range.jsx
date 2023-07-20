import React, { useState } from 'react';

const StarsRating = () => {
  const [rating, setRating] = useState(4);
 

 

  return (
    <div>
      <div style={{ fontSize: '24px' }}>
          <span
            style={{ cursor: 'pointer' }}
          >
            {rating ? '★' : '☆'}
          </span>
      </div>
    </div>
  );
};

export default StarsRating;