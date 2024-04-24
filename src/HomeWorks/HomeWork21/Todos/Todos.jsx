import React, { useContext } from 'react'
import { MyContaxt } from '../App'
import classNames from "classnames"
import "./Todos.scss"

export default function Todos() {
  const data = useContext(MyContaxt) 
  return (
    <div className='App'>
      <div className='App__container'>
      {
        data.data.map((elem, index) => {
          return (
            <div className="App__content" key={elem.id}>
              <div className={classNames("App__item", {
                second: index % 2 === 0,
                third: index % 3 === 0,
                fifth: index % 5 === 1
              })}>
                <div className="App__layer">
                  <h3> Title {elem.id}</h3>
                  <p>
                    {elem.title} Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga placeat repellendus ducimus? Numquam ut aliquam perferendis provident aut, tenetur praesentium? Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui eum exercitationem explicabo magnam expedita laudantium ut hic, at distinctio deserunt totam debitis quibusdam quisquam sit reprehenderit cum voluptas beatae sequi.
                  </p>
                  <span><i className="bi bi-mastodon"></i></span>
                </div>
                <h4>User {elem.id}</h4>
                <button onClick={() => data.deleteTodo(elem.id)} className="App__delete" ><i className="bi bi-trash3-fill"></i></button>
              </div>
            </div>
          )
        })
      }
      </div>
      <button onClick={data.seeMore} className="App__seeMore" >See More</button>

    </div>
  )
}
