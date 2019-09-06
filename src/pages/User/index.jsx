import React, { Component } from 'react'
import axios from 'axios';
import { Redirect, NavLink, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import './style.scss';
import Orders from '../../components/orders/index';
import Voucher from '../../components/voucher/index';

class User extends Component {
    handleToHomePage () {
        this.props.history.push('/');
    }
    handleToLogout () {
        window.localStorage.removeItem('userId');
        this.props.history.push('/');
    }
    
    render() {
        if (!window.localStorage.getItem('userId')) {
            return <Redirect to="/login"/>
        }
        return (
            <div className="user-wrap">
                <div className="user-header">
                    <p  onClick={()=>{this.handleToHomePage()}}><i className="iconfont icon-left"></i> 首页</p>
                    <div className="user-orders">
                        <NavLink to="/user" exact>订单</NavLink>
                        <NavLink to="/user/voucher" exact>抵用券</NavLink>
                    </div>
                    <span onClick={()=>{this.handleToLogout()}}>注销</span>
                </div>
                <Switch>
                    <Route path="/user/voucher" component={Voucher}></Route>
                    <Route path="/user" component={Orders}></Route>
                </Switch>
            </div>
        );
    }

    componentDidMount () {
    }
}
const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(User);