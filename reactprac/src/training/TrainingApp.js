import React from 'react';
import Gallery from './Gallery';

const exercises = [
  {
    name: 'Push-ups',
    thumbnail: 'https://example.com/images/pushups-thumbnail.jpg',
    description: 'Do 10 push-ups'
  },
  {
    name: 'Squats',
    thumbnail: 'https://example.com/squats-thumbnail.jpg',
    description: 'Do 20 squats'
  },
  {
    name: 'Sit-ups',
    thumbnail: 'https://example.com/situps-thumbnail.jpg',
    description: 'Do 30 sit-ups'
  },
  {
    name: 'Bench Press',
    thumbnail: 'https://cdn.pixabay.com/photo/2017/09/03/19/16/sport-2710369_1280.jpg',
    description: 'Do 3 sets of 10 reps of bench press'
  }  
];

const App = () => {
  return (
    <div>
      <h1>My Sport-Training Exercises</h1>
      <Gallery exercises={exercises} />
    </div>
  );
};

export default App;