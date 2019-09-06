import React, { Component } from 'react'
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import './style.scss';
import { clickToChangeCity } from './action.js';

class City extends Component {
     clickToCityTop(item) {
        let cityList = document.getElementsByClassName('city-detail');
        for (let i = 0; i < cityList.length; i ++) {
            let target = cityList[i].children[0];
            if (target.innerText == item) {
                window.scrollTo(0, target.offsetTop);
            }
        }
    }
    handleToUpPage () {
        this.props.history.go(-1);
    }
    
    render() {
        let initials = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'W', 'X', 'Y', 'Z'];
        let cityHotList = ['北京', '成都', '重庆', '广州', '杭州', '南京', '上海', '深圳', '苏州', '天津', '武汉', '西安'];
        return (
            <div className="city-wrap">
                <div className="city-header">
                    <i className="iconfont icon-left" onClick={() => {this.handleToUpPage()}}></i>
                    <div className="city-changed">
                        <NavLink to='/citylist'>国内</NavLink>
                        <NavLink to='/hongkong'>国际/港澳台</NavLink>
                    </div>
                </div>
                <div className="city-search">
                    <input type="text" placeholder="输入城市名或者拼音查询"/>
                    <i className="iconfont icon-search"></i>
                </div>
                <div className="city-current">无法获取你的定位</div>
                { this.props.location.pathname == '/citylist' ? (
                        <div className="city-hot">
                            <h3>热门城市</h3>
                            <div className="city-hot-item">
                                {cityHotList.map((item, index) => {
                                    return <span onTouchStart={(el)=>{this.props.clickToHandleCity(el, this)}} key={index}>{item}</span>
                                })}
                            </div>
                        </div>
                    ) : null }
                <div className="city-initial">
                    <h3>更多城市</h3>
                    <div className="city-initial-item">
                        {initials.map((item, index) => {
                            return <span key={index} onClick={(el)=> {this.clickToCityTop(item, el)}}>{item}</span>
                        })}
                    </div>
                </div>
                <div className="city-detail">
                    <h3>A</h3>
                    <div className="city-detail-item">
                        <a href="#">阿巴嘎旗</a>
                        <a href="#">阿坝</a>
                        <a href="#">阿坝县</a>
                        <a href="#">阿城区</a>
                        <a href="#">阿城区</a>
                        <a href="#">阿城区</a>
                        <a href="#">阿城区</a>
                        <a href="#">阿城区</a>
                        <a href="#">阿城区</a>
                        <a href="#">阿城区</a>
                        <a href="#">阿巴嘎旗</a>
                        <a href="#">阿坝</a>
                        <a href="#">阿坝县</a>
                        <a href="#">阿巴嘎旗</a>
                        <a href="#">阿坝</a>
                        <a href="#">阿坝县</a>
                    </div>
                </div>
                <div className="city-detail">
                    <h3>B</h3>
                    <div className="city-detail-item">
                        <a href="#">阿巴嘎旗</a>
                        <a href="#">阿坝</a>
                        <a href="#">阿坝县</a>
                        <a href="#">阿城区</a>
                        <a href="#">阿城区</a>
                        <a href="#">阿城区</a>
                        <a href="#">阿城区</a>
                        <a href="#">阿城区</a>
                        <a href="#">阿城区</a>
                        <a href="#">阿城区</a>
                        <a href="#">阿巴嘎旗</a>
                        <a href="#">阿坝</a>
                        <a href="#">阿坝县</a>
                        <a href="#">阿巴嘎旗</a>
                        <a href="#">阿坝</a>
                        <a href="#">阿坝县</a>
                    </div>
                </div>
                <div className="city-detail"> 
                    <h3>C</h3>
                    <div className="city-detail-item">
                        <a href="#">阿巴嘎旗</a>
                        <a href="#">阿坝</a>
                        <a href="#">阿坝县</a>
                        <a href="#">阿城区</a>
                        <a href="#">阿城区</a>
                        <a href="#">阿城区</a>
                        <a href="#">阿城区</a>
                        <a href="#">阿城区</a>
                        <a href="#">阿城区</a>
                        <a href="#">阿城区</a>
                        <a href="#">阿巴嘎旗</a>
                        <a href="#">阿坝</a>
                        <a href="#">阿坝县</a>
                        <a href="#">阿巴嘎旗</a>
                        <a href="#">阿坝</a>
                        <a href="#">阿坝县</a>
                    </div>
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
        clickToHandleCity (el, that) {
            let targetText = el.currentTarget.innerText;
            window.localStorage.setItem('currentCity', targetText);
            let data = {
                type: 'changeCity',
                value: targetText
            }
            dispatch(clickToChangeCity(data));
            that.props.history.push('/');
            // console.log(that)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(City);