import React from 'react';
import Title from '../UI/Title';
import { Slider} from 'antd';
import styled from "styled-components";
import FlexContainer from '../UI/FlexContainer';
import CheckBoxGroupColumn from '../UI/CheckBoxGroupColumn';
import MainContainer from '../UI/MainContainer';
const optionsSymptoms = [
    { label: 'Насморк', value: 'runny_nose' },
    { label: 'Кашель', value: 'cough' },
    { label: 'Зуд', value: 'pruritus' },
    { label: 'Температура', value: 'temperature' },
    { label: 'Другое', value: 'other_symptoms' },

  ];
const optionsСontraindications =[
    { label: 'Беременность', value: ' pregnancy' },
    { label: 'Возраст до 12 лет', value: 'under_12_years_old' },
    { label: 'Аллергия', value: 'allergy' },
    { label: 'Болезни сердца', value: 'heart_diseases' },
    { label: 'Болезни ЖКТ', value: 'heart_gkt'},
    { label: 'Другое', value: 'otherContraindications' },
]
const SliderWrapper = styled.div`
position:relative;
width:80%;
padding:0px 40px;
`
const SliderValueIcon = styled.div`
position:absolute;
top:-5px;
`
const LeftSliderValue = SliderValueIcon.extend`
left:0;
`
const RightSliderValue = SliderValueIcon.extend`
right:0;
`


class SearchPage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            sliderValue:{
                min:100,
                max:1000
            },
            selectedSymptoms:[],
            selectedСontraindications:[]
        }
    }
    onChangeSlider = (value)=> {
       this.setState({
        sliderValue:{
            min:value[0],
            max:value[1]
        }
       })
      }
    
    onChangeSymptoms = (selected) => {
        this.setState({
            selectedSymptoms:selected
        }, ()=>console.log(this.state))
      };

    onChangeСontraindications = (selected) => {
    this.setState({
        selectedСontraindications:selected
    }, ()=>console.log(this.state))
    };

    render(){
        return( 
        <MainContainer>
            <Title>Выбор лекарства по параметрам</Title>
            <CheckBoxGroupColumn  options={optionsSymptoms}  onChange={this.onChangeSymptoms} />
            <SliderWrapper >
            <LeftSliderValue>{this.state.sliderValue.min}</LeftSliderValue>
            <Slider min={20} max={5000} range defaultValue={[100, 1000]} onChange={this.onChangeSlider} />
            <RightSliderValue>{this.state.sliderValue.max}</RightSliderValue>
            </SliderWrapper>
            <CheckBoxGroupColumn  options={optionsСontraindications}  onChange={this.onChangeСontraindications} />
        </MainContainer>)
    }
}
export default SearchPage;