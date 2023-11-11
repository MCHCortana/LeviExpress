import { useState } from 'react';
import { JourneyPicker } from '../../components/JourneyPicker';
import { JourneyDetail } from '../../components/JourneyDetail';

export const HomePage = () => {
  const [journeyPlan, setJourneyPlan] = useState(null);
  const handleJourneyChange = (journeyEntry) => {
    console.log(journeyPlan);
    setJourneyPlan(journeyEntry);
  };
  console.log(journeyPlan);
  return (
    <main>
      <JourneyPicker onJourneyChange={handleJourneyChange} />
      <h2>
        {journeyPlan === null
          ? 'Zadejte spoj k vyhledání'
          : `Naleznen spoj ID: ${journeyPlan.journeyId}`}
      </h2>
      {journeyPlan === null ? (
        'Zadejte spoj k vyhledání'
      ) : (
        <JourneyDetail journey={journeyPlan} />
      )}
    </main>
  );
};
