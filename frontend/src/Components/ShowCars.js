import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios';
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps";
const { MarkerWithLabel } = require("react-google-maps/lib/components/addons/MarkerWithLabel");
class IndexCars extends Component {

    constructor(prop) {
        super(prop);
        this.state = {
            cars:'',
            loaded:0
        };
    }

    componentDidMount()
    {
        if(this.state.cars == '')
        {
            axios.get('http://localhost:4200/car_status')
                .then(response =>{
                    this.setState({cars: response.data,loaded: 1});
                })
                .catch(function (error) {
                    alert(error);
                })
        }
    }

    render()
    {
        if (this.state.loaded == 1 )
        {
            const position =[ 0,0];
            console.log(this.state.cars);
            const MyMapComponent = withScriptjs(withGoogleMap((props) =>
                <GoogleMap
                    defaultZoom={13}
                    defaultCenter={{ lat: 47.497913, lng: 19.040236 }}
                >
                    {props.isMarkerShown && this.state.cars.map(function (car) {
                        return(<InfoWindow position={{lat: car.pos_x, lng:car.pos_y}}>
                                <div>{car.car_plate}</div>
                            </InfoWindow>
                            )
                    }) }
                </GoogleMap>
            ));

            return(
                <div className="container">
                    <MyMapComponent
                        isMarkerShown
                        googleMapURL="https://maps.googleapis.com/maps/api/js?key=TODO:ADD API key&v=3.exp&libraries=geometry,drawing,places"
                        loadingElement={<div style={{ height: `100%` }} />}
                        containerElement={<div style={{ height: `400px` }} />}
                        mapElement={<div style={{ height: `100%` }} />}
                    />
                </div>
            )
        }
        else
        {
            return (
                <div>
                    Loading...
                </div>
            )
        }
    }
}

export default IndexCars;