import React from 'react';
import "./VehicleCard.css";
import { Button } from "react-bootstrap";



function VehicleCard(props){
  
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

        <div className="text-center">
          <Button
                  variant="primary"
                  name="VehicleSelect"
                  type="submit"
                  value="submit"
                  >
                  SELECT
          </Button>
          </div>
        </div>

      </div>
    )
  }

  // onClick= "test"




// import React from "react";
// import "./style.css";

// function FriendCard(props) {
//   return (
//     <div className="card">
//       <div className="img-container">
//         <img alt={props.name} src={props.image} />
//       </div>
//       <div className="content">
//         <ul>
//           <li>
//             <strong>Name:</strong> {props.name}
//           </li>
//           <li>
//             <strong>Occupation:</strong> {props.occupation}
//           </li>
//           <li>
//             <strong>Location:</strong> {props.location}
//           </li>
//         </ul>
//       </div>
//       <span onClick={() => props.removeFriend(props.id)} className="remove">
//         𝘅
//       </span>
//     </div>
//   );
// }

export default VehicleCard;