import { useState } from "react";
import "./App.scss";


function App() {
    const [data, setData] = useState([
        {
            id: 1,
            date: "18 March 2024",
            title: "Aliquam Hendrerit Mi Metus",
            body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dignissimos aspernatur, natus eveniet dolores facere inventore enim voluptatem nostrum. Asperiores!",
            body2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dignissimos aspernatur",
        },
        {
            id: 2,
            date: "05 March 2024",
            title: "Aliquam Hendrerit Mi Metus",
            body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dignissimos aspernatur, natus eveniet dolores facere inventore enim voluptatem nostrum. Asperiores!",
            body2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dignissimos aspernatur",
        },
        {
            id: 3,
            date: "27 March 2024",
            title: "Aliquam Hendrerit Mi Metus",
            body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dignissimos aspernatur, natus eveniet dolores facere inventore enim voluptatem nostrum. Asperiores!",
            body2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dignissimos aspernatur",
        },
    ]);
  return (
      <div className='App'>
          <h1 className='App__title'>Our Blog</h1>
          <div className='App__content'>
              {data.map(elem => {
                  return (
                      <div key={elem.id}>
                          <span>AXONVIP | {elem.date}</span>
                          <h2>{elem.title}</h2>
                          <p>{elem.body}</p>
                      </div>
                  )
              })}
          </div>
      </div>
  )
}

export default App