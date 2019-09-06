import React, { Component } from 'react'

import './style.scss';

export default class Orders extends Component {
    render() {
        return (
            <div>
                <div className="user-classification">
                    <div className="user-all-orders active">全部订单</div>
                    <div className="user-pay-orders">待付款</div>
                    <div className="user-able-orders">可使用</div>
                    <div className="user-refund-orders">退款/售后</div>
                </div>
                <div className="user-none-orders">
                    <div className="user-none-orders-img"></div>
                    <p>你还没有相关订单</p>
                    <p>去逛逛看有哪些想买的</p>
                </div>
            </div>
        )
    }
}
