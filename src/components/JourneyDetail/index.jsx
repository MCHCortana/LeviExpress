import './style.css';
import { BusStop } from '../BusStop';
export const JourneyDetail = ({ journey }) => {
  const stops = journey.stops;
  return (
    <div className="journey-detail container">
      <h2>Podrobnosti cesty</h2>
      <div className="stops">
        {stops.map((stop) => {
          return (
            <BusStop
              key={stop.name}
              name={stop.name}
              station={stop.station}
              time={stop.time}
            />
          );
        })}
      </div>
    </div>
  );
};
