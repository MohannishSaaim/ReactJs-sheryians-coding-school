import Card from "./components/Card"

const App = () => {
  return (
    <div>
      {
       Array.from({ length: 5 }).map((_,i) => <Card key={i}/>)
      }
    </div>
  )
}

export default App