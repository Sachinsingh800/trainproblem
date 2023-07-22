import logo from './logo.svg';
import style from "./App.module.css";
import React  ,{useState ,useEffect} from "react"

function App() {
  const [data, setData] = useState([]);
  const [number, setNumber] = useState("");
console.log(data)

    function handleClick(number) {
      if(!number){
        alert("Please search by number")
      }else{
  
     
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": "43e138d2a8mshdd5783f8629f9afp105103jsnfac1b0bd9c7a",
          "X-RapidAPI-Host": "indian-railway-irctc.p.rapidapi.com",
        },
      };
  
      fetch(
        `https://indian-railway-irctc.p.rapidapi.com/getTrainId?trainno=${number}`,
        options
      )
        .then((response) => response.json())
        .then((response) =>   setData(response))
        .catch((err) => console.error(err));
      }
    }
  
  return (
    <div className="App">
   <div className={style.main}>
            <h3>SEARCH BY TRAIN</h3>
            <input
              type="text"
              value={number}
              className={style.inputContainer}
              placeholder="Train Number"
              onChange={(e) => setNumber(e.target.value)}
              required
            />
            <button
              className={style.btnContainer}
              onClick={() => handleClick(number)}
            >
              Check Status
            </button>{" "}
          </div>
    </div>
  );
}

export default App;
