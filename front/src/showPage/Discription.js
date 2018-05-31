import styled from 'styled-components';
import React from 'react';
import FlexContainer from '../UI/FlexContainer';
import PropTypes from 'prop-types';

function MakeSympStr(sympMass){
  let str = '';
  for (let i = 0; i < sympMass.length; i++){
    str+=sympMass[i];
    if (i === sympMass.length -1){
      str+='.';
    }
    else{
      str+=', ';
    }
  }
  return str;
}
function MakeCounter(){
  let count =1;
  return function(){
    return count++;
  };
}
const Counter = MakeCounter();
const Container =  FlexContainer.extend`
flex-direction:column;
margin-left:50px;
`;
const Symptoms = styled.div`
  font-size:17px;
  margin-bottom:25px;
`;
const RedTitle = styled.div`
font-size:20px;
color:#e60c0c;
margin-bottom:10px;
font-weight:700;
`;

const Contr = (props)=>(
  <div style={{fontSize:'15px'}}><span style={{color:'#e60c0c'}}>– </span><span> {props.children}</span></div>
);


const Description = (props) =>(
  <Container>
    <Symptoms><span >При симптомах: </span>{MakeSympStr(props.symptoms)}</Symptoms>
    <RedTitle>Противопоказания: </RedTitle>
    {props.contraindications.map((cont) =><Contr key={Counter()}>{cont}</Contr>)}
  </Container>
);
Description.propTypes = {
  symptoms: PropTypes.arrayOf(PropTypes.string),
  contraindications: PropTypes.arrayOf(PropTypes.string)
};
Contr.propTypes = {
  children: PropTypes.string
};
export default Description;