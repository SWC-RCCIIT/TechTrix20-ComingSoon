import React from 'react'
import './App.css';
import Screen from './components/Screen/Screen'
import Loader from './components/Loader/Loader'
export class App extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
       loaded : false
    }
 }
 componentDidMount(){
  setTimeout(() => {
    this.setState({ loaded:true });
   // console.log("a");
  }, 3000);
 }
  render() {
    return (
      <div>
              { this.state.loaded ? <Screen/> : <Loader/>}

      </div>

      
    )
  }
}

export default App;
