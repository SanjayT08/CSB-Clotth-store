import React, { useState } from "react";

const Searchbar = () => {
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      alert("Search for products");
    } else {
      alert(text);
      setText("");
    }
  };

  const onChange = (e) => setText(e.target.value);

  return (
    <div>
      <form onSubmit={onSubmit} className="bg-gray-200 p-5">
        <input
          type="text"
          name="text"
          placeholder="Search"
          value={text}
          onChange={onChange}
        />
      </form>
    </div>
  );
};

export default Searchbar;
