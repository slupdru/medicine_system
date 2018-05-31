import React from 'react';
import MainContainer from '../UI/MainContainer';
import Title from '../UI/Title';
import SubTitle from '../UI/SubTitle';
import styled from 'styled-components';
import { Input, Modal } from 'antd';
import SpaceContainer from '../UI/SpaceContainer';
import {optionsSymptoms, optionsСontraindications} from '../UI/options';
import CheckBoxGroupColumn from '../UI/CheckBoxGroupColumn';
import MarginCard from '../UI/MarginCard';
import SuperButton from '../UI/SuperButton';
import CenterContainer from '../UI/CenterContainer';
import sendMedicine from '../sendMedicine';
import PropTypes from 'prop-types';
const MyInput = styled(Input)`
display:block;
margin-bottom:15px;
width:400px
`;
class SendPage extends React.Component{
  constructor(props){
    super(props);
    this.state={
      inputPhoto:'',
      inputName:'',
      inputPrice:'',
      selectedSymptoms:[],
      selectedСontraindications:[]
    };
  }
  componentDidMount() {
    this.props.handleChangeCurrentPage();
  }
  onChangeSymptoms = (selected) => {
    this.setState({
      selectedSymptoms:selected
    }, ()=>console.log(this.state));
  };

  onChangeСontraindications = (selected) => {
    this.setState({
      selectedСontraindications:selected
    }, ()=>console.log(this.state));
  };
  onChangeInput = (e) => {
    const type = e.target.getAttribute('type');
    if (type === 'inputPrice'){
      if (!isNaN(Number(e.target.value[e.target.value.length-1]))||e.target.value===''){
        this.setState({
          [type]:e.target.value
        });
      }
    }
    else{        
      this.setState({
        [type]:e.target.value
      });
    }
  }
  handleClickSuperButton = async ()=>{
    const res = await sendMedicine(this.state.inputPhoto, this.state.inputName, this.state.inputPrice, this.state.selectedSymptoms, this.state.selectedСontraindications);
    if (res){
      Modal.success({
        title: 'Данные успешно сохранены',
        onOk() {},
      });
    }
  }
  render(){
    return(
      <MainContainer>
        <CenterContainer>
          <Title>Новое лекарство</Title>
          <MarginCard>
            <MyInput onChange={this.onChangeInput} value={this.state.inputName} type='inputName' placeholder="Название" />
            <MyInput onChange={this.onChangeInput} value={this.state.inputPrice} type='inputPrice' placeholder="Цена в рублях" />
            <MyInput onChange={this.onChangeInput} value={this.state.inputPhoto} type='inputPhoto' placeholder=" Ссылка на фото" />
          </MarginCard>
          <MarginCard>
            <SpaceContainer>
              <div>
                <SubTitle>Симптомы</SubTitle>
                < CheckBoxGroupColumn  options={optionsSymptoms}  onChange={this.onChangeSymptoms} />
              </div>
              <div>
                <SubTitle>Противопоказания</SubTitle>
                <CheckBoxGroupColumn  options={optionsСontraindications}  onChange={this.onChangeСontraindications} />
              </div>
            </SpaceContainer>
          </MarginCard>
          <SuperButton onClick={this.handleClickSuperButton} type="primary">Добавить</SuperButton>
        </CenterContainer>
      </MainContainer>);
  }

}
SendPage.propTypes = {
  handleChangeCurrentPage:PropTypes.func,
};

export default SendPage;
