import { useState } from 'react';
import { MusicNotation } from '../components/MusicNotation';

export const ExamPage = () => {
  const [musicNotation, setMusicNotation] = useState('X:1\nT:Example\nM:4/4\nL:1/4\nK:C\nCDEF|');
  const [essayAnswer, setEssayAnswer] = useState('');

  const handleSubmit = () => {
    // In a real app, you would submit to an API
    console.log({ musicNotation, essayAnswer });
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-bold mb-4">Music Notation</h2>
        <MusicNotation
          value={musicNotation}
          onChange={setMusicNotation}
        />
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-bold mb-4">Essay Question</h2>
        <p className="mb-4">Explain the significance of counterpoint in Bach's compositions.</p>
        <textarea
          value={essayAnswer}
          onChange={(e) => setEssayAnswer(e.target.value)}
          className="w-full h-48 p-2 border rounded"
          placeholder="Type your answer here..."
        />
      </div>

      <button
        onClick={handleSubmit}
        className="w-full py-2 px-4 bg-indigo-600 text-white rounded hover:bg-indigo-700"
      >
        Submit Exam
      </button>
    </div>
  );
};