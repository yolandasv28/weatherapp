import React, {component} from 'react';
import Location from './Location';
import WeatherData from './WeatherData';

const WeatherLocation=({city})=>{
    return <div>
        
        <Location city={'Arequipa'}/>
        <WeatherData/>

    </div>
};
export default WeatherLocation;