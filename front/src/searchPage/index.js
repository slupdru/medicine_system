import React from 'react';
import Title from '../UI/Title';
import { Slider, Switch, Checkbox  } from 'antd';
class SearchPage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            checkboxes:{
                nasmork:false,
                kashel:false,
                zud:false,
                temperatura:false,
                beremennost:false,
                do12let:false,
                allergia:false,
                bolezniserdca:false,
                bolezniGKT:false,
                drugoe:false
            }

        }
    }
    render(){

        return( 
        <div>
            <Title>Выбор лекарства по параметрам</Title>
        </div>)
    }
}
export default SearchPage;