import React from 'react'
import Cities from './Cities/Cities';
import './App.scss'
import Child from './Child/Child';


export default function App() {
  const [cities, setCities] = React.useState(['Los Angelos', 'London', 'New-York', 'Tokio', 'Sydney']);
  const [obj, setObj] = React.useState({
    id: 1,
    name: 'React'
  })
  const [isShow, setIsShow] = React.useState(false)

  const changeName = () => {
    setObj({...obj, name: 'Node'})
    console.log(obj);
  }

  const handleClick = (e) => {
    // method 1
    // setCities([...cities, 'Erevan'])
    // e.target.disabled = true
    // method 2
    const copy = cities.slice()
    copy.push('Erevan')
    setCities(copy)
    e.target.disabled = true
  }

  const deleteByIndex = (index) => {
    setCities(cities.toSpliced(index, 1))
  }

  const handleSort = () => {
    setCities(cities.toSorted())
  }

  const handleShow = () => {
    setIsShow(!isShow)
  }

  return (
    <div className='App'>
      <h1>Cities</h1>
      <p>{obj.name}</p>
      <Cities data={cities} deleteByIndex={deleteByIndex} quantity={4}/>
      <div className="App__btn">
        <button onClick={handleClick}>Click</button>
        <button onClick={handleSort}>Sort</button>
        <button onClick={changeName}>Change Name</button>
      </div>
      <h2>What is React.js</h2>
      <div>
        {
          isShow ? <Child /> : null
        }
      </div>
      <button 
      onClick={handleShow}>
        {isShow ? 'hide' : 'show'}
      </button>
    </div>
  )
}
