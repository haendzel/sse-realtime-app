import React, { useState, useEffect } from 'react';
import Table from './Table/Table';
import './App.scss';

function App() {
  const [ texts, settexts ] = useState([]);
  const [ listening, setListening ] = useState(false);

  let firstTime = true;

  if(firstTime) {

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ info: 'Some title lorem ipsum dolor mit amet isnaiea maeque', source: 'handzel', image: 'https://cdn.pixabay.com/photo/2018/07/20/15/25/sculpture-3550890_1280.jpg' })
    };
    fetch('http://localhost:3000/fact', requestOptions)
        .then(response => response.json())

    firstTime = false;
  }

  useEffect( () => {

    if (!listening) {
      const events = new EventSource('http://localhost:3000/events');

      events.onmessage = (event) => {
        const parsedData = JSON.parse(event.data);

        settexts((texts) => texts.concat(parsedData));
      };

      setListening(true);
    }
  }, [listening, texts]);

  return (
    <>
    <h1 className='text-center'>Server-Sent Events (SSE) in use with React App.</h1>
    <Table texts={texts} />
    </>
  );
}

export default App;