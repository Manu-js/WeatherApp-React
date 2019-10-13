import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';

const WeatherData = () => (
    <div>
        <WeatherTemperature></WeatherTemperature>
        <WeatherExtraInfo/>
    </div>
);

export default WeatherData;