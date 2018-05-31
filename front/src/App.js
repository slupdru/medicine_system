import React, { Component } from 'react';
import SearchPage from './searchPage';
import { Route, Link } from 'react-router-dom';
import ShowPage from './showPage';
import {Layout, Menu} from 'antd';
import styled from 'styled-components';
import getMedicine from './getMedicine';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import SendPage from './sendPage';
import CheckAuth from './CheckAuth';
const Header = Layout;
const MainLayout = styled(Layout)`
min-height:100vh;
`;

async function changeCurrentPage(self){
  async function SetPath(key){
    if(key==='/'||key==='/addnew'||key==='/show'){
      await self.setState({
        currentPage:key
      });
    }
    else{
      await self.setState({
        currentPage:'/'
      }, ()=>{
        self.props.history.push(`/`);
      });
    }
  }

  const path = window.location.pathname;
  const pos1 = path.indexOf('/', 1);
  let key;
  if (pos1===-1){
    key = path;
  }
  else{
    key = path.substring(0, pos1);
  }
  await SetPath(key);
}

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      auth:false,
      currentPage:null,
      medicines:[],
    };
  }
  handleChangeCurrentPage = async ()=>{
    const self = this;
    await changeCurrentPage(self);
  };
  componentDidMount() {
    this.handleChangeCurrentPage();
    CheckAuth()
      .then(auth=>{
        console.log(auth);
        if (auth){
          this.setState({
            auth:true
          }, ()=>{
            console.log(this.state, 'auth state');
          });
        }
      });

   
  }

  handleChangePage = (e)=>{
    this.setState({
      currentPage:e.key,
    });
  };
  handleSendData = async (sliderValue, selectedSymptoms, selectedСontraindications)=>{
    const result = await getMedicine(sliderValue, selectedSymptoms, selectedСontraindications);
    if (result){
      this.setState({
        medicines:result
      }, ()=>{
        this.props.history.push(`/show`);
        console.log(this.state, 'Стейт в APP');
      });
    }
  }
  render() {
    return (
      <MainLayout>
        <Header style={{
          padding: '0 50px',
          background:'#001529',
          flex:0,
        }}>
          <Menu onClick={this.handleChangePage}  selectedKeys={[this.state.currentPage]} mode="horizontal" theme="dark">
            <Menu.Item key="/">
              <Link to="/">Выбор по параметрам</Link>
            </Menu.Item>
            {this.state.auth&&<Menu.Item key="/addnew">
              <Link to="/addnew">Добавить Лекарство</Link>
            </Menu.Item>}
            {this.state.auth?<a style={{marginLeft:'20px'}}href="/logout">Выйти!</a>:<a style={{marginLeft:'20px'}}href="/login">Войти как администратор!</a>}
          </Menu>
        </Header>
        <Route exact path="/" render={()=><SearchPage handleChangeCurrentPage={this.handleChangeCurrentPage} handleSendData={this.handleSendData}/>} />
        <Route exact path="/show" render={()=><ShowPage handleChangeCurrentPage={this.handleChangeCurrentPage} medicines={this.state.medicines}/>} />
        <Route exact path="/addnew" render={()=><SendPage handleChangeCurrentPage={this.handleChangeCurrentPage}/>} />
      </MainLayout>
    );
  }
}
App.propTypes = {
  history: PropTypes.shape()
};
export default  withRouter(App);
