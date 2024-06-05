import { useState } from 'react';
import styled from 'styled-components';

const StarRating = ({ rating, setRating, disabled }) => {
  const [hover, setHover] = useState(0);

  return (
    <StStarRating>
      {[...Array(5)].map((star, index) => {
        const ratingValue = index + 1;
        return (
          <label key={index}>
            <StInputRadio type="radio" name="rating" value={ratingValue} disabled={disabled} onChange={(e) => setRating(e.target.value) } />
            <StStar
              onMouseEnter={!disabled ? () => setHover(ratingValue) : undefined}
              onMouseLeave={!disabled ? () => setHover(0) : undefined}
              fill={ratingValue <= (hover || rating) ? '#ffc107' : '#e4e5e9'}
              width="30"
              height="30"
              viewBox="0 0 20 20"
              disabled={disabled}
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
  ${(props) => props.disabled && `
    pointer-events: none;
    cursor: default;
  `}
`;