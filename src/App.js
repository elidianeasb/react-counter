import './App.css';
import Counter from './components/Counter';
import { useState } from 'react'

function App() {
  const [theme, setTheme] = useState('light')

  const toggleTheme = event => {
    setTheme(event.target.value);
  };

  return (
    <div className={'App ' + theme}>
      <div className='theme'>
        <select onChange={ toggleTheme }>
          <option value="light"> Light </option>
          <option value="dark"> Dark </option>
        </select>
      </div>
      <Counter/>
    </div>
  );
}

export default App;
