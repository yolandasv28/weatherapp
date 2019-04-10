import React, {component} from 'react';
import WeatherIcons from 'react-weathericons';

const WeatherTemperature=({temperature})=>{
    return (<div>
        <WeatherIcons name={"day-sunny"} size={"2x"}/>
        {temperature}
    </div>);
};
export default WeatherTemperature;