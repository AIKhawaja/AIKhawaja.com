import React, {Component} from 'react';
import { Img } from "react-image";

class Home extends Component {
  render() {
    return (
      <div className = "All">
        <div>
          <Img src = 'p_photo.jpg' />
        </div> 
        <h1>Ahmed I. Khawaja</h1>
      </div>
    )
  }
}

export default Home; 