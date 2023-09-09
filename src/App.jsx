import './App.css'
import Counter from './Counter'
import Friends from './Friends'
import Team from './Team'
import User from './Users'
function App() {
  const handleClick = () => {
    alert("Click")
  }
  const addToFive = (number) => {
    alert(number + 5)
  }
  const mouseHover = () => {
    console.log("In")
  }

  return (
    <>
      <h1>React core concept 2</h1>
      <Friends></Friends>
      <User></User>
      <Team></Team>
      <Counter></Counter>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={() => { alert("Third Click") }}>Third Click</button>
      <button onClick={() => { addToFive(5) }}>Add to 5</button>
      <button onMouseEnter={mouseHover}>MouseEnter</button>

    </>
  )
}

export default App
