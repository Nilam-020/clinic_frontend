import { Component } from "react"

export default class Logout extends Component {
    constructor(props) {
        super(props)
        sessionStorage.clear();
        window.location.href = "/"


    }
}