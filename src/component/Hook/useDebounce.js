import { useState, useEffect } from 'react';

function useDebounce(val, delay) {
  const [text, setText] = useState(val);

  useEffect(() => {
    const changeText = setTimeout(() => {
      setText(val);
    }, delay);

    return () => {
      clearTimeout(changeText);
    };
  }, [val, delay]);

  return text.trim();
}

export default useDebounce;
