import React, { Component } from 'react'
import './Footer.css'
export class Footer extends Component {
    render() {
        return (
           
<footer className="text-center page-footer">
    <div className="pb-4 pt-4">
      <a href="https://facebook.com/techtrix.rcciit" target="_blank">
        <i className="fab fa-facebook-f mr-3 social-icon"></i>
      </a>

      <a href="https://twitter.com/techtrix_rcciit" target="_blank">
        <i className="fab fa-twitter mr-3 social-icon"></i>
      </a>

      <a href="https://instagram.com/techtrix.rcciit" target="_blank">
        <i className="fab fa-instagram mr-3 social-icon"></i>
      </a>
      <a href="https://github.com/swc-rcciit" target="_blank">
        <i className="fab fa-github mr-3 social-icon"></i>
      </a>

    </div>
  </footer>
        )
    }
}

export default Footer


