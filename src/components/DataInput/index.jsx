import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import './index.css'

export default class DataInput extends Component {

    nameRef = React.createRef()
    titleRef = React.createRef()
    mobileRef = React.createRef()

    publishMsg = () => {
        // const dataInputs = document.getElementsByTagName('input')
        // console.log(this.nameRef)
        const dataObject = {name: this.nameRef.current.value,
                           title: this.titleRef.current.value,
                           mobile: this.mobileRef.current.value.replace(/(\d{3})(\d{3})(\d+)/g, "($1) $2-$3")
                           }
            
        PubSub.publish('dataInput',dataObject)

         
    } 
  render() {
    return (
        <div className="dataInput">
             
                 
            <input type="text" ref={this.nameRef} id="name" placeholder="Enter your name" />

            <input type="text" ref={this.titleRef} className="title" id="title" placeholder="Enter your title" />

            <input type="text" ref={this.mobileRef} className="mobile" id="mobile" placeholder="Enter your phone number" />
                
            <button id="dataSubmit" onClick={this.publishMsg}>Submit</button>

        </div>
    )
  }
}

