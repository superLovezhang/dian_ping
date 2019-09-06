import React, { Component } from 'react'

import './style.scss';

export default class Voucher extends Component {
    render() {
        return (
            <div>
                <div className="voucher-none-orders">
                    <div className="voucher-none-orders-img"></div>
                    <p>你还没有可使用的抵用券</p>
                </div>
            </div>
        )
    }
}
