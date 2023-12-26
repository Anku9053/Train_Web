// RightScrollable.js
import React from 'react';
import styled, { keyframes } from 'styled-components';

const slideInRight = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;

const Container = styled.div`
border: 2px solid red;
  width: 10%; /* Set the width to 50% of the screen */
  animation: ${slideInRight} 1s ease-out;
`;

const Image = styled.img`
width: 20%;
`

const RightScrollable = () => {
  return (
    <Container>
      <div>
      <div>
        <Image><img src="https://png.pngtree.com/background/20230527/original/pngtree-white-subway-train-on-white-background-picture-image_2753861.jpg" alt="" /></Image>
        <p>The first  electronic train was used to build in the context of 1968</p>
        <p>Here You can find more</p>
      </div>
      <div>
      <img src="https://previews.123rf.com/images/saz1977/saz19771606/saz1977160600043/72519935-train-with-steam-locomotive-series-ov-isolated-on-white-background.jpg" alt="" />
      <p>The first  electronic train was used to build in the context of 1968</p>
       
        <p>Here You can find more</p>
      </div>
      </div>
      <div>Right Scrollable Content</div>
    </Container>
  );
};

export default RightScrollable;
