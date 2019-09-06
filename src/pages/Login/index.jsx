import React, { Component } from 'react'
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import './style.scss';

class Login extends Component {
    constructor (props) {
        super(props);
        this.state = {
            tel: null,
            verification: null
        }
    };

    handleLoginBtnToUserPage() {
        let userId = this.state.tel;
        window.localStorage.setItem('userId', userId);
        this.props.history.push('/user');
    }

    render() {
        if (window.localStorage.getItem('userId')) {
            return <Redirect to="/user"/>
        }
        return (
            <div className="login-wrap">
                <div className="login-header">
                    <i className="iconfont icon-left" onClick={()=>{this.props.history.go(-1)}}></i>
                    <p>手机号快捷登录</p>
                </div>
                <div className="login-input-box">
                    <div className="tel-wrap">
                        <div className="tel-prefix">86 <i className="iconfont icon-down"></i></div>
                        <input className="tel-input" placeholder="请输入手机号" type="text" onChange={(el)=>{this.setState({tel: el.currentTarget.value})}}/>
                        <button>发送验证码</button>
                    </div>
                    <div className="verification-wrap">
                        <div className="verification-msg">验证码</div>
                        <input className="verification-inut" placeholder="请输入验证码" type="text" onChange={(el)=>{this.setState({verification: el.currentTarget.value})}}/>
                    </div>
                </div>
                <div className="login-bottom">
                    <p className="login-toast">未注册的手机号码验证后自动创建点评账户</p>
                    <button className="login-btn" onClick={()=>{this.handleLoginBtnToUserPage()}}>登录</button>
                    <a href="javascript:;">账号密码登录</a>
                </div>
                <div className="login-account">
                    <div className="login-account-header">
                        <div className="login-throw-line"></div>
                        <span>第三方账户登录</span>
                    </div>
                    <div className="login-account-way">
                        <a href="#" className="login-qq"></a>
                        <a href="#" className="login-weibo"></a>
                    </div>
                </div>
                <div className="login-copyright">  
                登录即表示你同意大众点评
                <a href="https://www.dianping.com/aboutus/useragreement"> 用户使用协议</a>
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Login);