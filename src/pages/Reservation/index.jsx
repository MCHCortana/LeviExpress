import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
export const Reservation = () => {
  const [reservation, setReservation] = useState(null);
  let { id } = useParams();
  console.log('id:', id);

  useEffect(() => {
    const fetchReservationData = async () => {
      const response = await fetch(
        `https://apps.kodim.cz/daweb/leviexpress/api/reservation?id=${id}`,
      );
      const data = await response.json();
      setReservation(data.results);
    };
    fetchReservationData();
    console.log('reservation data', reservation);
  }, []);
  console.log('rezervace', reservation);

  return (
    <main>
      <div className="reservation container">
        <h2>Vaše e-jízdenka č. {id}</h2>
        <div className="reservation__body">
          <div className="reservation__headings">
            <p>Datum cesty:</p>
            <p>Odjezd:</p>
            <p>Příjezd:</p>
            <p>Sedadlo:</p>
          </div>
          <div className="reservation__info">
            <p>{reservation !== null ? reservation.date : null}</p>
            <p>
              {reservation !== null ? reservation.fromCity.name : null}{' '}
              {reservation !== null ? reservation.fromCity.time : null}
            </p>
            <p>
              {reservation !== null ? reservation.toCity.name : null}{' '}
              {reservation !== null ? reservation.toCity.time : null}
            </p>
            <p>{reservation !== null ? reservation.seatNumber : null}</p>
          </div>
        </div>
      </div>
    </main>
  );
};
