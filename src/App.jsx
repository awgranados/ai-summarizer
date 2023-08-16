import { useState } from 'react'

import './App.css'
import TextBox from './TextBox';
import CombinedSummarizer from './Summarizer'
import handleSummarize from './Summarizer'

function App() {
  const [inputText, setInputText] = useState('');

  return (
    <div>
      <h1>ToS Summarizer</h1>
      <div>
        <TextBox setInputText={setInputText} />
        <CombinedSummarizer inputText={inputText} />
      </div>
    </div>
  );
}

export default App;
