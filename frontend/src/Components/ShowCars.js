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
        if(this.state.cars === '')
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
            const position =[0,0];
            console.log(this.state.cars);
            const MyMapComponent = withScriptjs(withGoogleMap((props) =>
                <GoogleMap
                    defaultZoom={13}
                    defaultCenter={{ lat: 47.497913, lng: 19.040236 }}
                >
                    {props.isMarkerShown && this.state.cars.map(function (car) {
                        console.log(car.error_messages.length);
                        if(car.error_messages.length !==0)
                        {
                            return(<InfoWindow position={{lat: car.pos_x, lng:car.pos_y}}>
                                <div>
                                    {car.car_plate}
                                    <br/>
                                    {car.error_messages.map(function (error_msg) {
                                        return(<p style={{background: 'red'}}>{error_msg.error_msg}</p>)
                                    })}
                                </div>
                            </InfoWindow>)
                        }
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
                        googleMapURL="https://maps.googleapis.com/maps/api/js?key=APIkey&v=3.exp&libraries=geometry,drawing,places"
                        loadingElement={<div style={{ height: `100%` }} />}
                        containerElement={<div style={{ height: `400px` }} />}
                        mapElement={<div style={{ height: `100%` }} />}
                    />

                    <br/>
                    <Link to="/add-user">Register</Link>
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