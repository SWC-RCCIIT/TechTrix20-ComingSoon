import React from 'react'
import ReactRotatingText from 'react-rotating-text'
import './Button.css'
export  class Button extends React.Component {
    state={
        show : false
    };
    openText=()=>{
        this.setState({
            show : true
        })
    }
    render() {
        return (
<div>

<div className="row mt-3 text-center">
      <div className="col-12">
        <form className="form-inline" id="notifs-form">

          {this.state.show ? '' : <button onClick={this.openText} type="button" className="btn mt-2 mt-md-0" id="reach-us">More</button> }  
          
         {this.state.show ? <ReactRotatingText color="#cc0033" items={['We are coming', '6th - 7th - 8th March', 'Stay tuned']} /> : ''}

        </form>
      </div>
    </div>
    </div>

          
        )
    }
}

export default Button;
