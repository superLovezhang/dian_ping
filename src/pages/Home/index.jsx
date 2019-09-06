import React, { Component } from 'react'
import { Route } from 'react-router-dom';
import ReactSwipe from 'react-swipe';
import axios from 'axios';

import './style.scss';
import Header from '../../components/header/index.jsx';

export default class Home extends Component {
    constructor (props) {
        super(props);
        this.state = {
            carsouselData: []
        };
    };
    
    render() {
        let dots;
        let reactSwipeEl;
        let opts = {
            continuous: true,
            // auto: 3000,
            callback (index) {
                for (let i = 0; i < dots.children.length; i ++) {
                    dots.children[i].className = '';
                }
                dots.children[index].className = 'active';
            }
        }
        
        return (
            <div className="home-wrap">
                <Route  path='/' component={Header}></Route>
                <ReactSwipe
                    className="home-carousel"
                    swipeOptions={opts}
                    ref={el => (reactSwipeEl = el)}
                >
                    <ul className="home-menu">
                        { this.state.carsouselData.map((item, index) => {
                            return (
                                <li key={index}>
                                    <img src={item.img} alt=""/>
                                    <p>{item.content}</p>
                                </li>
                            )
                        }) }
                    </ul>
                    <ul className="home-menu">
                        { this.state.carsouselData.map((item, index) => {
                            return (
                                <li key={index}>
                                    <img src={item.img} alt=""/>
                                    <p>{item.content}</p>
                                </li>
                            )
                        }) }
                    </ul>
                    <ul className="home-menu">
                        { this.state.carsouselData.map((item, index) => {
                            return (
                                <li key={index}>
                                    <img src={item.img} alt=""/>
                                    <p>{item.content}</p>
                                </li>
                            )
                        }) }
                    </ul>
                </ReactSwipe>
                <ul className="dots clearfix" ref={el=>dots=el}>
                    <li className="active"></li>
                    <li></li>
                    <li></li>
                </ul>
                <div className="home-promotions">
                    <div className="home-promotions-header">
                        <p>
                            <i>超值优惠</i>
                            <i>更多优惠 <i className="iconfont icon-right"></i></i>
                        </p>
                    </div>
                    <div className="home-promotions-content">
                        <img src="https://p0.meituan.net/deal/8bc0dbe048567a79fe1b7b2a578986b0571558.jpg.webp@120w_90h_1e_1c_1l|watermark=1&&r=1&p=9&x=20&y=20" alt=""/>
                        <h3>永和大王</h3>
                        <p>￥1 <i>￥4</i></p>
                    </div>
                    <div className="home-promotions-content">
                        <img src="https://p0.meituan.net/deal/927ad19124cd1efd4996a63e14b7172379649.jpg.webp@120w_90h_1e_1c_1l|watermark=1&&r=1&p=9&x=20&y=20" alt=""/>
                        <h3>牛莽莽老火锅</h3>
                        <p>￥1 <i>￥10</i></p>
                    </div>
                    <div className="home-promotions-content">
                        <img src="https://p0.meituan.net/deal/bb9e562ff981b0ee2bee23d6bccacebc627394.jpg.webp@120w_90h_1e_1c_1l|watermark=1&&r=1&p=9&x=20&y=20" alt=""/>
                        <h3>奈九日本料理</h3>
                        <p>￥1 <i>￥8</i></p>
                    </div>
                </div>
                <div className="goods-list">
                    <div className="goods-header">猜你喜欢</div>
                    {[1,2,3,4].map((item, index) => {
                        return (
                            <div className="goods-item" key={index}>
                                <img src="https://p1.meituan.net/deal/0f9c31d29ece74b2b6829ccc1b24dbde80211.jpg.webp@180w_180h_1e_1c_1l_80q|watermark=0" alt=""/>
                                <div className="goods-detail">
                                    <h3>湖北三五醇一楼</h3>
                                    <p>[西北湖]低至6.0折仅售12元价值20圆晚..</p>
                                    <div className="goods-price">
                                        <p>￥ 12 <i>￥ 20</i></p>
                                        <p>已售11364</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                    <div className="goods-more">查看更多</div>
                </div>
                <div className="home-footer">
                    <div className="home-nav-list">
                        <p>
                            <a href="">我的</a>
                            <a href="">论坛社区</a>
                            <a href="">添加商户</a>
                            <a href="">意见反馈</a>
                        </p>
                        <p>
                            <a href="">美团网</a>
                            <a href="">美团下载</a>
                            <a href="">结婚</a>
                            <a href="">亲子</a>
                            <a href="">家装</a>
                            <a href="">宴会</a>
                            <a href="">教育</a>
                        </p>
                        <p>
                            <a href="">电脑版</a>
                            <a href="">客户端</a>
                        </p>
                    </div>
                    <p className="copyright">copyright ©2018 dianping.com</p>
                </div>
            </div>
        );
    }

    componentDidMount () {
        axios.get('/apia/carousel.json')
             .then((res) => {
                 const { data } = res.data;
                 console.log(data)
                 this.setState({
                     carsouselData: data
                 })
             })
    }
}
