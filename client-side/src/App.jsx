import { useLoaderData } from 'react-router'
import './App.css'
import CoffeeCard from './components/CoffeeCard'
import { useState } from 'react'

function App() {

  const loadedCoffees = useLoaderData()
  const [coffees, setCoffees] = useState(loadedCoffees)
  console.log('storage:', loadedCoffees)

  return (
    <>
      <h1 className='text-5xl text-purple-500'>Total coffees : {coffees.length}</h1>
      <div className='grid md:grid-cols-2 gap-4 mt-4'>
        {
          coffees.map(coffee =>
            <CoffeeCard
              key={coffee._id}
              coffee={coffee}
              coffees={coffees}
              setCoffees={setCoffees}
            >
            </CoffeeCard>
          )
        }
      </div>
    </>
  )
}

export default App
