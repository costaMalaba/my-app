import React, { useState } from "react";

const BookingForm = () => {
  const [data, setData] = useState({
    res_date: "",
    res_time: "",
    guests: "",
    occasion: "",
  });

  const handleChange = (e) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <form className="px-3 my-4" style={{display: "grid", maxWidth: "200px", gap: "20px"}}>
      <label htmlFor="res-date" className="form-label">Choose date</label>
      <input type="date" className="form-control" value={data.res_date} id="res_date" name="res_date" onChange={handleChange} />
      <label htmlFor="res-time" className="form-label">Choose time</label>
      <select className="form-select" value={data.res_time} id="res_time" name="res_time" onChange={handleChange}>
        <option>17:00</option>
        <option>18:00</option>
        <option>19:00</option>
        <option>20:00</option>
        <option>21:00</option>
        <option>22:00</option>
      </select>
      <label htmlFor="guests" className="form-label">Number of guests</label>
      <input
        type="number"
        className="form-control"
        value={data.guests}
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        name="guests"
        onChange={handleChange}
      />
      <label htmlFor="occasion" className="form-label">Occasion</label>
      <select className="form-select" value={data.occasion} id="occasion" name="occasion" onChange={handleChange}>
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>
      <input type="submit" className="btn btn-outline-primary" value="Book Now" />
    </form>
  );
};

export default BookingForm;
