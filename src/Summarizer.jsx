import React, { useState } from 'react';
import { Configuration, OpenAIApi } from 'openai';
import './Summarizer.css'

const CombinedSummarizer = ({ inputText }) => {
  const [summary, setSummary] = useState('');

  const handleSummarize = async () => {
    try {
       
      const configuration = new Configuration({
        apiKey: import.meta.env.VITE_OPEN_AI_KEY, // Replace with your OpenAI API key
      });
      const openai = new OpenAIApi(configuration);

      const chatCompletion = await openai.createChatCompletion({
        model: 'gpt-3.5-turbo',
        messages: [
          { role: 'system', content: 'You are a lawyer AI. your job is to take the terms, services, and conditions and summarize them within bullet points. you will try to be as concise as possible, but still get be specific enough to express the law. You will not answer questions about anything, you will only summarize terms and conditions.'},
          { role: 'user', content: inputText },
        ],
        //max_tokens: 50,
      });
      
      setSummary(chatCompletion.data.choices[0].message.content);
      
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <button onClick={handleSummarize}>Summarize</button>
      <h2>Summary:</h2>
      <div className="output-box">
      {summary && <div>{summary}</div>}
      </div>
    </div>
  );
};

export default CombinedSummarizer;
