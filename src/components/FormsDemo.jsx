import React, { useState } from "react";

function FormsDemo() {
  const [language, chooseLanguage] = useState("");
  const [cars, setCars] = useState([]);
  console.log(cars);

  const handleClick = (event) => {
    chooseLanguage(event.target.value);
  };

  const handleSelectCar = (event) => {
    if (!cars.includes(event.target.value)) {
      setCars([...cars, event.target.value]);
    }
  };

  return (
    <div>
      <h1 className="display-3">Welcome to Forms</h1>
      <hr />
      <form>
        {/* Text input */}
        <input
          type="text"
          placeholder="Username"
          onChange={(e) => console.log(e.target.value)}
        />

        {/* Radio buttons */}
        <h6 className="display-6">Choose a language:</h6>
        <label>
          <input
            type="radio"
            name="language"
            value="HTML"
            checked={language === "HTML"}
            onChange={handleClick}
          />{" "}
          HTML
        </label>

        <label>
          <input
            type="radio"
            name="language"
            value="CSS"
            checked={language === "CSS"}
            onChange={handleClick}
          />{" "}
          CSS
        </label>

        <label>
          <input
            type="radio"
            name="language"
            value="JavaScript"
            checked={language === "JavaScript"}
            onChange={handleClick}
          />{" "}
          JavaScript
        </label>

        {/* Multiple select */}
        <h6 className="display-6">Choose cars:</h6>
        <select
          id="cars"
          name="cars"
          size="3"
          multiple
          onChange={handleSelectCar}
          className="container"
        >
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="fiat">Fiat</option>
          <option value="audi">Audi</option>
        </select>
      </form>
    </div>
  );
}

export default FormsDemo;
