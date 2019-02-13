import React from 'react';
import "./VehicleCard.css";
import { Button } from "react-bootstrap";



export default class VehicleCard extends Component {

    constructor (props) {
      super(props);
      this.state = {
         name: "",
         value: ""
      }
      this.onClick = this.onClick.bind(this);
      
  }

      onClick = () => {
        this.setState({
          name: this.state.value
        });


  render() {
       return (
 
            <div className="card">
            <div className="img-container">
            <img alt={props.name} src={props.image} />
            </div>
            <div className="content">
              <ul>
                <li>
                  <strong>Name:</strong> {props.name}
                </li>
                <li>
                  <strong>Description:</strong> {props.description}
                </li>
              </ul>

              <div class="text-center">
                <Button
                        variant="primary"
                        name="VehicleSelect"
                        type="submit"
                        value="submit"
                        onClick={this.onClick} >
                        {this.setState({ name: this.state.value }) }
                        
                        SELECT
                </Button>
                </div>
              </div>

            </div>
    );
  }
 }
}

