export const CityOptions = ({ label, cities, CityChoice }) => {
  return (
    <label>
      <div className="journey-picker__label">{label}:</div>
      <select
        onChange={(e) => {
          CityChoice(e.target.value);
        }}
      >
        <option value="">Vyberte</option>
        {cities.map((city) => {
          return (
            <option key={city.code} value={city.code}>
              {city.name}
            </option>
          );
        })}
      </select>
    </label>
  );
};
