export const DateOptions = ({ label, dates, dateChoice }) => {
  // const { dateBasic, dateCs } = dates;
  return (
    <label>
      <div className="journey-picker__label">Kdy:</div>
      <select
        onChange={(e) => {
          dateChoice(e.target.value);
        }}
      >
        <option value="">Vyberte</option>
        {dates.map((dateOption) => (
          <option key={dateOption.dateBasic} value={dateOption.dateBasic}>
            {dateOption.dateCs}
          </option>
        ))}
      </select>
    </label>
  );
};
