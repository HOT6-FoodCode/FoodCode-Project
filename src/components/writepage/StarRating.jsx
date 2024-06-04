// src/components/StarRating.js
import React, { useState } from 'react';
import styled from 'styled-components';
// import { supabase } from '../supabaseClient';

const StarRating = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  //   const handleClick = async (ratingValue) => {
  //     setRating(ratingValue);
  //     // Supabase에 별점 저장
  //     const { data, error } = await supabase
  //       .from('star')
  //       .insert([{ rating: ratingValue }]);

  //     if (error) {
  //       console.error('error=> ', error);
  //     } else {
  //       console.log('data=> ', data);
  //     }
  //   };
  // onClick={() => handleClick(ratingValue)}

  return (
    <StStarRating>
      {[...Array(5)].map((star, index) => {
        const ratingValue = index + 1;
        return (
          <label key={index}>
            <StInputRadio type="radio" name="rating" value={ratingValue} />
            <StStar
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(0)}
              fill={ratingValue <= (hover || rating) ? '#ffc107' : '#e4e5e9'}
              width="30"
              height="30"
              viewBox="0 0 20 20"
            >
              <polygon points="12 17.27 18.18 21 15.64 13.47 21 9.24 14.36 8.63 12 1.5 9.64 8.63 3 9.24 8.36 13.47 5.82 21" />
            </StStar>
          </label>
        );
      })}
    </StStarRating>
  );
};

export default StarRating;

const StStarRating = styled.div`
  display: flex;
  direction: row;
`;
const StInputRadio = styled.input`
  display: none;
`;
const StStar = styled.svg`
  cursor: pointer;
  transition: fill 200ms;
`;
