import React from 'react';
import { connect } from 'react-redux';

import './style.scss';

class Header extends React.Component {
    handleToCityPage () {
        this.props.history.push('/citylist');
    }
    handleToUserPage () {
        window.localStorage.getItem('userId') ? this.props.history.push('/user') : this.props.history.push('/login');
        
    }
    
    render () {
        let localCity = window.localStorage.getItem('currentCity');
        return (
            <div className="header-wrap">
                <div className="header-address" onClick={() => {this.handleToCityPage()}}>{this.props.city || localCity || '武汉'}<i className="iconfont icon-down"></i></div>
                <div className="header-search-bar">
                    <input type="text" placeholder="输入商户名,地点"/>
                    <i className="iconfont icon-search"></i>
                </div>
                <div className="header-avatar">
                    <i className="iconfont icon-wode" onClick={() => {this.handleToUserPage()}}></i>
                </div>
            </div>
        )
    }
};
const mapStateToProps = (state) => {
    return {
        city: state.City.cityCurrent
    }
}

export default connect(mapStateToProps, null)(Header);