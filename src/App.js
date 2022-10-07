import React from 'react';
import { useState } from 'react';
import Tesseract from 'tesseract.js';
import './App.css';

function App() {

  const [data, setData] = useState(null);

  const handleChange = async (e) => {
    const file = e.target.files[0];

    return Tesseract.recognize(
      file,
      'eng',
      // { logger: m => console.log(m) }
    ).then(({ data: { text } }) => {
      setData(text);
    });
  };

  return (
    <div className="App">
      <div className='file-upload'>
        <input onChange={handleChange} type='file'></input>
        <p>{data}</p>
      </div>
      
    </div>
  );
}

export default App;