import './App.css';
import axios from 'axios';
import { useState } from 'react';

function App() {
  const [text,setText] = useState('');
  const onChange = (e) => {
    setText(e.target.value);
  };

  const submit = () => {
    const client = axios.create();
    const information = text;
    client.post('/api',{information});
    setText('');
  };


  return(
    <div className='main'>
      <div className='header'>
          <p>Auto Bit Coin Dev : ABCD</p>
      </div>
      <div className='form'>
        <textarea onChange= {onChange} value={text} className='form-text' id='form-text'/>
        <button onClick={()=> {submit();}} type="button" className='form-btn' id='text-button'>send button</button>
      </div>
    </div>
    
);
}

export default App;