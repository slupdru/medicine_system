import React from 'react';
import { List} from 'antd';
import CardPhoto from './CardPhoto';
import styled from 'styled-components';
import Discription from './Discription';
import reducerMedicine from './reducerMedicine';
import PropTypes from 'prop-types';
const Title = styled.div`
font-size:30px;
margin-left:50px;
font-weight:700;
`;

class ShowPage extends React.Component{
  componentDidMount() {
    this.props.handleChangeCurrentPage();
  }
  render(){
    const listData = reducerMedicine(this.props.medicines);
    return  (<List
      style={{
        fontFamily: '"Montserrat", sans-serif',
        backgroundColor:'white'
      }}
      bordered={true}
      itemLayout="vertical"
      size="large"
      pagination={{
        onChange: (page) => {
          console.log(page);
        },
        pageSize: 3,
      }}
      dataSource={listData}
      renderItem={item => (
        <List.Item
          key={item.title}
          extra={<CardPhoto photo={item.photo} price={item.price}/>}
        >
          <List.Item.Meta
            style={{
              paddingTop:'40px',
            }}
            title={<Title>{item.title}</Title>}
          />
          <Discription symptoms={item.symptoms} contraindications={item.contraindications}/>
        </List.Item>
      )}
    />);
  }
}
ShowPage.propTypes = {
  medicines: PropTypes.array,
  handleChangeCurrentPage:PropTypes.func,
};


export default ShowPage;