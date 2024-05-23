import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import './index.css'

export default class DataInput extends Component {
    publishMsg = () => {
        const dataInputs = document.getElementsByTagName('input')
        const dataObject = {name: dataInputs[0].value,
                           title: dataInputs[1].value,
                           mobile: dataInputs[2].value.replace(/(\d{3})(\d{3})(\d+)/g, "($1) $2-$3")
                           }
            
        PubSub.publish('dataInput',dataObject)

         
    } 
  render() {
    return (
        <div className="dataInput">
             
                 
            <input type="text" id="name" placeholder="Enter your name" />

            <input type="text" className="title" id="title" placeholder="Enter your title" />

            <input type="text" className="mobile" id="mobile" placeholder="Enter your phone number" />
                
            <button id="dataSubmit" onClick={this.publishMsg}>Submit</button>

        </div>
    )
  }
}

