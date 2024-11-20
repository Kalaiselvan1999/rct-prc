import React, { useState } from "react";

function FormsDemo() {
  const [language, chooseLanguage] = useState("");
  console.log(language);

  const handleClick = (event) => {
    chooseLanguage(event.target.value);
  };

  return (
    <div>
      <h1 className="display-3">Welcome to Forms</h1>
      <hr />
      <form>
        <h6 className="display-6">Text and Password</h6>
        <div>
          <label htmlFor="userName">Username</label>
          <input type="text" placeholder="johndoe" autoFocus />
        </div>
        <div>
          <label htmlFor="passWord">Password</label>
          <input type="password" />
        </div>
      </form>
      <hr />
      {/* radio button */}
      <h6 className="display-6">Radio</h6>
      {/* HTML */}
      <input
        type="radio"
        id="html"
        name="fav_language"
        value="HTML"
        onChange={handleClick}
      />
      <label htmlFor="html">HTML</label>
      <br />
      {/* CSS */}
      <input
        type="radio"
        id="css"
        name="fav_language"
        value="CSS"
        onChange={handleClick}
      />
      <label htmlFor="css">CSS</label>
      <br />
      {/* JAVASCRIPT */}
      <input
        type="radio"
        id="javascript"
        name="fav_language"
        value="JavaScript"
        onChange={handleClick}
      />
      <label htmlFor="javascript">JavaScript</label>
      <br />
    </div>
  );
}

export default FormsDemo;
