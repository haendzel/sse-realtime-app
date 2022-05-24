import React, { useState, useEffect, useRef } from 'react';
import FormText from './FormText/FormText';
import Table from './Table/Table';
import { ToastContainer, toast } from 'react-toastify';
import { useSSE, SSEProvider } from 'react-hooks-sse';
import 'react-toastify/dist/ReactToastify.css';
import './App.scss';

const Comments = () => {
  const state = useSSE('comments', {
    count: null
  });
 
  return state.count ? state.count : '...';
};

function App() {

  const messagesEndRef = useRef(null)

  let count = 0;

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }  

  const [ texts, setTexts ] = useState([]);
  const [ listening, setListening ] = useState(false);

  useEffect( () => {

    if (!listening) {
      const events = new EventSource('http://localhost:3000/events');
      count++;


      if(count === 1) {
        events.onmessage = (event) => {
            const parsedData = JSON.parse(event.data)
            setTexts((texts) => texts.concat(parsedData))
            toast("New text was added now!");
            console.log(count)
        };
        setListening(true);
      }

    }

    scrollToBottom()

  }, [listening, texts]);

  return (
    <>
    <ToastContainer />
    <h1 className='text-center'>Server-Sent Events (SSE) in use with React App.</h1>
    <h5 className="text-center mt-3">Open two browser windows and check how SSE works after submitted.</h5>
    <FormText array={texts}/>
    <SSEProvider>
      <Comments />
      <Table texts={texts} />
    </SSEProvider>
   
    <div ref={messagesEndRef}></div>
    </>
  );
}

export default App;