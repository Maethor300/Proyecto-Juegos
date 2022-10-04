import './nav.css'

import React, {Component} from 'react';
import {link} from 'react-router-dom';


export default class nav extends Component{
    render(){
        return (
            <div className='nav'>
               <link to= "/">Home</link>
            </div>
        )
    }
}