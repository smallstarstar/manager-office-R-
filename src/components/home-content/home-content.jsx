import React from 'react';
import HeaderComponent from '../header-component/header-component'
import Router from '../../routers/routers';

export default class HomeContent extends React.Component {
    render() {
        return (
            <div className="content_body">
                <div className="content_header">
                    <HeaderComponent />
                </div>
                <div className="content_container">
                    <Router/>
                </div>
            </div>
        )
    }
}