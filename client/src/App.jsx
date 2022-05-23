import React, { useState, useEffect, useRef } from 'react';
import FormText from './FormText/FormText';
import Table from './Table/Table';
import './App.scss';

function App() {

  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }  

  const initialArray = [
    { info: 'Some title is here. Lorem ipsum dolor mit amet.', image: 'https://cdn.pixabay.com/photo/2018/07/20/15/25/sculpture-3550890_1280.jpg', author: 'haendzel'}
  ]
  const [ texts, setTexts ] = useState(initialArray);
  const [ listening, setListening ] = useState(false);

  useEffect( () => {

    if (!listening) {
      const events = new EventSource('http://localhost:3000/events');

      events.onmessage = (event) => {
        const parsedData = JSON.parse(event.data);
        setTexts((texts) => texts.concat(parsedData));
      };

      setListening(true);
    }

    scrollToBottom()

  }, [listening, texts]);

  return (
    <>
    <h1 className='text-center'>Server-Sent Events (SSE) in use with React App.</h1>
    <FormText array={texts}/>
    <Table texts={texts} />
    <div ref={messagesEndRef}></div>
    </>
  );
}

export default App;