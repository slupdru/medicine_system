import React from 'react';
import Title from '../UI/Title';
import { Slider} from 'antd';
import CheckBoxGroupColumn from '../UI/CheckBoxGroupColumn';
import MainContainer from '../UI/MainContainer';
import SubTitle from '../UI/SubTitle';
import SpaceContainer from '../UI/SpaceContainer';
import {optionsSymptoms, optionsСontraindications} from '../UI/options';
import MarginCard from '../UI/MarginCard';
import CenterContainer from '../UI/CenterContainer';
import SuperButton from '../UI/SuperButton';
import PropTypes from 'prop-types';
const marks = {
  20: '20₽',
  1000: '1000₽',
  2000: '2000₽',
  3000:'3000₽',
  4000:'4000₽',
  5000:'5000₽',
};

class SearchPage extends React.Component{
  constructor(props){
    super(props);
    this.state={
      sliderValue:{
        min:20,
        max:5000
      },
      selectedSymptoms:[],
      selectedСontraindications:[]
    };
  }
    onChangeSlider = (value)=> {
      this.setState({
        sliderValue:{
          min:value[0],
          max:value[1]
        }
      });
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

    render(){
      return( 
        <MainContainer>
          <CenterContainer>
            <Title>Выбор лекарства по параметрам</Title>
            <MarginCard>
              <SpaceContainer>
                <div>
                  <SubTitle>Симптомы</SubTitle>
                  <CheckBoxGroupColumn  options={optionsSymptoms}  onChange={this.onChangeSymptoms} />
                </div>
                <div>
                  <SubTitle>Противопоказания</SubTitle>
                  <CheckBoxGroupColumn  options={optionsСontraindications}  onChange={this.onChangeСontraindications} />
                </div>
              </SpaceContainer>
            </MarginCard>
            <MarginCard>
              <SubTitle>Стоймость</SubTitle>
              <Slider marks={marks} min={20} max={5000} range defaultValue={[20, 1000]} onChange={this.onChangeSlider} />
            </MarginCard>
            <SuperButton onClick={()=>this.props.handleSendData(this.state.sliderValue, this.state.selectedSymptoms, this.state.selectedСontraindications)} type="primary">Искать</SuperButton>
          </CenterContainer>

        </MainContainer>);
    }
}
SearchPage.propTypes = {
  handleSendData: PropTypes.func,
  handleChangeCurrentPage:PropTypes.func,
};

export default SearchPage;