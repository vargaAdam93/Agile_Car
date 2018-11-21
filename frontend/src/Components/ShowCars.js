import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios';
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps";
import Select from 'react-select';
const { MarkerWithLabel } = require("react-google-maps/lib/components/addons/MarkerWithLabel");
class IndexCars extends Component {

    constructor(prop) {
        super(prop);
        this.state = {
            cars:'',
            loaded:0,
            selectedOption: ''
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

    handleChange = (selectedOption) => {
        this.setState({ selectedOption });
        console.log(`Option selected:`, selectedOption);
    };

    show_only_bad_cars = (event) =>{
        console.log(this.state.cars.length);
    };
    render()
    {
        if (this.state.loaded === 1 )
        {
            const position =[0,0];
            console.log(this.state.cars);
            let cars = this.state.cars;
            if(this.state.selectedOption.value === '')
            {
                console.log("ASDasd");
            }
            else
            {
                cars = [];
                for (var i in this.state.cars) {
                    if (this.state.selectedOption.value === this.state.cars[i].car_plate)
                        cars.push(this.state.cars[i]);
                }
            }
            const MyMapComponent = withScriptjs(withGoogleMap((props) =>
                <GoogleMap
                    defaultZoom={13}
                    defaultCenter={{ lat: 47.497913, lng: 19.040236 }}
                >
                    {props.isMarkerShown && cars.map(function (car) {
                        console.log(car.car_plate);
                            return(
                                <Marker position={{lat: car.pos_x, lng:car.pos_y}}>
                                    <InfoWindow position={{lat: car.pos_x, lng:car.pos_y}}>
                                        <div>
                                            {car.car_plate}
                                            <br/>
                                            {car.error_messages.map(function (error_msg) {
                                                return(<p style={{background: 'red'}}>{error_msg.error_msg}</p>)
                                            })}
                                        </div>
                                    </InfoWindow>
                                </Marker>)

                    }) }
                </GoogleMap>
            ));
            let plates = new Set();
            let plate_option = [];
            for(let  k =0; k<this.state.cars.length; k++)
            {
                plates.add(this.state.cars[k].car_plate)
            }
            for(let plate of plates)
            {
               plate_option.push({
                   value: plate, label: plate
               })
            }

            return(
                <div className="Loaded">
                    <MyMapComponent
                        isMarkerShown
                        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAZS3pV4ShbFmDzYK3SowlOi--wPKq1Now&v=3.exp&libraries=geometry,drawing,places"
                        loadingElement={<div style={{ height: `100%` }} />}
                        containerElement={<div style={{ height: `400px` }} />}
                        mapElement={<div style={{ height: `100%` }} />}
                    />

                    <br/>
                    Show car : <Select
                                value = {this.state.selectedOption}
                                onChange={this.handleChange}
                                options={plate_option}
                                />
                    <br/>
                    <button onClick={this.show_only_bad_cars} >Show cars with error</button>
                    <br/>
                    <Link to="/add-user">Register</Link>
                </div>
            )
        }
        else
        {
            return (
                <div data-testid="car-text" className="notLoaded">
                    Loading...
                </div>
            )
        }
    }
}

export default IndexCars;