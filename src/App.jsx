import { Button } from "./components/Button"

function App() {

  return (
    <div className="bg-dark-background">
      <h1 className='bg-primary text-text'>Hello World</h1>
      <Button >Primary Background</Button>
      <Button variant='secondary'>Secondary Background</Button>
      <Button isBold={true}>Bold Text with Primary Background</Button>
      <Button variant='secondary' isBold={true}>Bold Text with Secondary Background</Button>
    </div>
  )
}

export default App
