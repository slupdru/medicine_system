import styled from 'styled-components';
import React from 'react';
import FlexContainer from '../UI/FlexContainer';
import PropTypes from 'prop-types';
const Container =  FlexContainer.extend`
flex-direction:column;
padding-right:25px;
margin-top:40px;
`;
const Image = styled.img`
width:272px;
`;
const Price = styled.div`
font-size:40px;
text-align:center;
font-weight:700;
`;
const CardPhoto = (props) =>(
  <Container>
    <Image src={props.photo} alt="photo"/>
    <Price>{props.price} ₽</Price>
  </Container>
);
CardPhoto.propTypes = {
  photo: PropTypes.string,
  price: PropTypes.number
};
export default CardPhoto;