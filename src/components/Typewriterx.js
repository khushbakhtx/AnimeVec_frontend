import React, { useState, useEffect } from 'react';

const Typewriter = ({ text, delay }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, delay);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text]);

  return <span>{currentText}</span>;
};

// Example usage of Typewriter component
// const App = () => {
//   return (
//     <div>
//       <h1>
//         <Typewriter text="Hello, welcome to my React app!" delay={100} />
//       </h1>
//     </div>
//   );
// };

export default Typewriter;