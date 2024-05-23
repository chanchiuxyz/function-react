import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import './index.css'

export default class Card extends Component {
    state = {dataInput:{name: '',
                        title: '',
                        mobile: ''
    }}

    showNumber = (e) => {
        e.target.innerHTML = this.state.dataInput.mobile
        // console.log(e)
        // this.setState()
    }

    componentDidMount() { 
        PubSub.subscribe('dataInput',(msg,dataInput) => {
            // console.log(data)
            this.setState({dataInput})
        })
     }
  render() { 
    return (
        <div className="card">
            <img src="https://i.pravatar.cc/100" alt="pic" />
            <div className="content">
                <h2 id="cardName">{this.state.dataInput.name || 'name'}</h2>
                <h4 className="title" id="cardTitle">{this.state.dataInput.title || 'title'}</h4>
                {/* <h4 id="cardMobile"></h4> */}
            </div>
            <button id="contact" onClick={this.showNumber} >CONTACT</button>
        </div>
    )
  }
}
