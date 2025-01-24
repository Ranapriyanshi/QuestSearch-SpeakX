import React from "react";

const FilterDropdown = ({ questionTypes, type, setType, setCurrentPage, id }) => {
  const handleChange = (e) => {
    setType(e.target.value);
    setCurrentPage(1);
  };

  return (
    <select value={type} onChange={handleChange} id={id}>
      {questionTypes.map((questionType) => (
        <option key={questionType} value={questionType}>
          {questionType}
        </option>
      ))}
    </select>
  );
};

export default FilterDropdown;
