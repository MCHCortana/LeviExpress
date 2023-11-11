export const CityOptions = ({ label, cities }) => {
  return (
    <label>
      <div className="journey-picker__label">{label}:</div>
      <select
      // onChange={(e) => {
      //   setFromCity(e.target.value);
      // }}
      >
        <option value="">Vyberte</option>
        {cities.map((city) => {
          return (
            <option key={city.code} value={city.code}>
              {city.name}
            </option>
          );
        })}
        {/* <option value="">Vyberte</option>
        <option value="mesto01">Město 01</option>
        <option value="mesto02">Město 02</option>
        <option value="mesto03">Město 03</option>
        <option value="mesto04">Město 04</option>
        <option value="mesto05">Město 05</option> */}
      </select>
    </label>
  );
};
