import {useState, useEffect} from 'react';


function App() {

  const [backendData, setBackendData] = useState([{}])

  useEffect( () => { 
    fetch('https://imdb-api.com/en/API/Search/k_6l3v0p2m/inception%202010')
      .then(response => response.json())
      .then(
        data => {
          setBackendData(data)
        }
      )
  })

  return(
    <div>

    </div>
  )

}

export default App;
