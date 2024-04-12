import React, { useState } from "react";
import './App.scss'

const initialState = {
    developers: [],
    user: {
      id: 1,
      name: "Armen"
    },
    arr: [154, 42, 1, 87, 695, 36, 2, 10, 39, 9]
  };
  
  function App() {
    const [state, setState] = useState(initialState);
  
    const handleAddDeveloper = (e) => {
      const name = e.target.value;
      setState((prevState) => ({
        ...prevState,
        developers: [...prevState.developers, name]
      }));
      e.target.value.deveLoper = {
        deveLopers: ["Ero", "Vahe", "Vahag", "Spo", "Rafael", "Narek", "Arsen", "Armen", "Sergey"]
      }
    };

    const handleShuffleArray = () => {
      setState((prevState) => ({
        ...prevState,
        arr: [...prevState.arr].sort(() => Math.random() - 0.5)
      }));
    };
  
    const handleAddRandomNumber = () => {
      const randomNumber = Math.floor(Math.random() * 100) + 100;
      setState((prevState) => ({
        ...prevState,
        arr: [...prevState.arr, randomNumber]
      }));
    };
  
    const handleRemoveSmallItems = () => {
      setState((prevState) => ({
        ...prevState,
        arr: prevState.arr.filter((item) => item >= 10)
      }));
    };
  
    const handleChangeUserName = (e) => {
      const newName = e.target.value;
      setState((prevState) => ({
        ...prevState,
        user: {
          ...prevState.user,
          name: newName
        }
      }));
    };
  
    // const handleAddUserAge = () => {
    //   const age = Math.floor(Math.random() * 50) + 18;
    //   setState((prevState) => ({
    //     ...prevState,
    //     user: {
    //       ...prevState.user,
    //       age: age,
    //     }
    //   }));
    // };
  
    return (
      <div>
        <h1>Data management</h1>
        <div className="btn-form">
          <div className="buttons">
          <input type="text" placeholder="Enter the name of the developer" onChange={handleAddDeveloper} />
            <button onClick={handleShuffleArray}>Shuffle the array</button>
            <button onClick={handleAddRandomNumber}>Add a random number</button>
            <button onClick={handleRemoveSmallItems}>Delete items less than 10</button>
          </div>
          <h2>User Information</h2>
          <input type="text" value={state.user.name} onChange={handleChangeUserName} />
          {/* <button onClick={handleAddUserAge}>Add Age</button> */}
        </div>
        <div className="list">
          <div className="developer">
            <h3 className="developers">Developers:</h3>
            <ul>
              {state.developers.map((developer) => (
                <li key={developer}>{developer}</li>
              ))}
            </ul>
          </div>
          <div className="array">
            <ul>
            <h3 className="arr">Array:</h3>
              {state.arr.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
  
  export default App;