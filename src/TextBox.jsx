import React, { useState } from 'react';
import './TextBox.css';

const TextBox = ({ setInputText }) => {
  const [text, setText] = useState('');

  const handleTextChange = (event) => {
    setText(event.target.value);
    setInputText(event.target.value); // Pass the input text to the parent component
  };

  return (
    <div>
      <h2>Your Terms and Conditions</h2>
      <textarea
        className="textBox-input"
        value={text}
        onChange={handleTextChange}
        placeholder="Paste text here..."
      />
      <p>Characters: {text.length} / 4096</p>
    </div>
  );
};

export default TextBox;
