import { Component } from "react"
import axios from 'axios';

export default class Logout extends Component {
  constructor(props) {
        super(props)
       
      
        sessionStorage.clear();
        axios.get("http://localhost:5000/endDoctor",this.state.config)
        .then((response)=>{
          window.location.href = "/"
        })
        .catch((err)=>{
          console.log(err);
        })
        


    }
}