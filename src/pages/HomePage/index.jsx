import { useState, useEffect } from 'react';
import { JourneyPicker } from '../../components/JourneyPicker';
import { JourneyDetail } from '../../components/JourneyDetail';
import { SelectedSeat } from '../../components/SelectedSeat';
import { useNavigate } from 'react-router-dom';

export const HomePage = () => {
  const [journeyPlan, setJourneyPlan] = useState(null);
  const [reservationId, setReservationId] = useState(null);

  const handleJourneyChange = (journeyEntry) => {
    console.log(journeyPlan);
    setJourneyPlan(journeyEntry);
  };
  console.log(journeyPlan);
  const navigate = useNavigate();

  useEffect(() => {
    const onTicketBuy = async () => {
      if (journeyPlan && journeyPlan.autoSeat && journeyPlan.journeyId) {
        const response = await fetch(
          'https://apps.kodim.cz/daweb/leviexpress/api/reservation',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              action: 'create',
              seat: journeyPlan.autoSeat,
              journeyId: journeyPlan.journeyId,
            }),
          },
        );

        const data = await response.json();

        setReservationId(data.results.reservationId);
      }
    };
    onTicketBuy();
  }, [journeyPlan]);

  const handleBuy = () => {
    console.log('reservation', reservationId);
  };
  useEffect(() => {
    if (reservationId) {
      navigate(`/reservation/${reservationId}`);
    }
  }, [reservationId]);
  return (
    <main>
      <JourneyPicker onJourneyChange={handleJourneyChange} />
      {journeyPlan === null ? null : (
        <>
          <JourneyDetail journey={journeyPlan} />
          <SelectedSeat number={journeyPlan.autoSeat} />

          <div className="controls container">
            <button onClick={handleBuy} className="btn btn--big" type="button">
              Rezervovat
            </button>
          </div>
        </>
      )}
    </main>
  );
};
