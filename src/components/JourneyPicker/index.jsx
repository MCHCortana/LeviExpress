import React, { useEffect, useState } from 'react';
import './style.css';
import { CityOptions } from '../CityOptions';
import { DateOptions } from '../DateOptions';

export const JourneyPicker = ({ onJourneyChange }) => {
  const [fromCity, setFromCity] = useState('');
  const [toCity, setToCity] = useState('');
  const [chosenDate, setChosenDate] = useState('');
  const [cities, setCities] = useState([]);
  const [dates, setDates] = useState([]);

  //-----------------------------------------------------
  useEffect(() => {
    const fetchDataCities = async () => {
      const response = await fetch(
        'https://apps.kodim.cz/daweb/leviexpress/api/cities',
      );
      const data = await response.json();
      setCities(data.results);
    };
    fetchDataCities();
  }, []);
  useEffect(() => {
    const fetchDataDates = async () => {
      const response = await fetch(
        'https://apps.kodim.cz/daweb/leviexpress/api/dates',
      );
      const data = await response.json();
      setDates(data.results);
    };
    fetchDataDates();
  }, []);

  //--------------------------------------------------
  const handleSubmit = (e) => {
    e.preventDefault();

    const fetchDataForConnection = async () => {
      const response = await fetch(
        `https://apps.kodim.cz/daweb/leviexpress/api/journey?fromCity=${fromCity}&toCity=${toCity}&date=${chosenDate}`,
      );
      const data = await response.json();
      console.log(data.results);
      onJourneyChange(data.results);
    };
    fetchDataForConnection();

    console.log('Odesílám formulář stěmito daty:');
    console.log('Odkud:', fromCity);
    console.log('Kam:', toCity);
    console.log('kdy:', chosenDate);
  };

  //----------------------------------------------------
  return (
    <div className="journey-picker container">
      <h2 className="journey-picker__head">Kam chcete jet?</h2>
      <div className="journey-picker__body">
        <form onSubmit={handleSubmit} className="journey-picker__form">
          <CityOptions label="Odkud" cities={cities} CityChoice={setFromCity} />
          <CityOptions label="Kam" cities={cities} CityChoice={setToCity} />
          <DateOptions dates={dates} dateChoice={setChosenDate} />
          <div className="journey-picker__controls">
            <button
              className="btn"
              type="submit"
              disabled={
                chosenDate === '' || fromCity === '' || toCity === ''
                  ? true
                  : false
              }
            >
              Vyhledat spoj
            </button>
          </div>
        </form>
        <img className="journey-picker__map" src="/map.svg" />
      </div>
    </div>
  );
};
