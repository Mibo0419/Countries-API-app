import {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [country, setCountry] = useState([]);

  const fetchCountry = () => { fetch("https://restcountries.com/v3.1/all").then((response) => response.json()).then((data) => {
    setCountry(data);
  });
  }

  useEffect(() => {
    fetchCountry()
  }, [])

  console.log(country[0])

  return (
    <div id="main-div">
      <h1 id='title' >Countries API</h1>
      <p>Random project by Millie B</p>

      <div>
        <ul>{country && country.map((index, country) => (
          <li key={country}> 
          <h2>Name: {index.name.common}</h2>
          <h2>Population: {index.population}</h2>
          </li>
        ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
