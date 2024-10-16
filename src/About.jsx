import React from 'react';
import './App.css'; // Import CSS for styling

function About() {
  return (
    <div className="about-container">
      <h1>About AnimeVec</h1>
      <p>
        Welcome to AnimeVec, your ultimate destination for anime enthusiasts! 
        Here, you can explore a vast collection of anime titles and find recommendations based on your interests!
      </p>
      <h2>Features</h2>
      <ul>
        <li>Extensive Database of Anime Titles</li>
        <li>Content Based Recommendations</li>
        <li>User-friendly Interface</li>
        <li>Responsive Design</li>
      </ul>
      <h2>Thoughts on this Project</h2>
      <p>
        Honestly, this project is part of my journey in learning Machine Learning and Artificial Intelligence.
        This project specifically has been made for practicing and gaining decent skills in recommendation systems.
        Though content based system is not the modest or the strongest one, I shall intermittently integrate
        popularity-based, collaborative, and hybrid rec. systems in my free time. 
      </p>
      <p>
        You might be confused facing recommendations title in japanese or japanese pronounced in english.
        I encourage you to translate it first, so there is no need to worry.  
      </p>
      <h4>Sincerely,</h4>
      <h4>Khushbakht Shoymardonov</h4>
    </div>
  );
}

export default About;
