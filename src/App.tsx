import { GridGifs } from './components/GridGifs';
import { AddCategory } from './components/AddCategory';
import { useState } from 'react';
import { InputValues } from './types';

export const App = () => {

  const [categories, setCategories] = useState<Array<string>>([])

  const handleNewCategory = (e: InputValues) => {
    const { category } = e

    if (categories.includes(category.trim().toUpperCase())) return

    setCategories(values => ([category.toUpperCase(), ...values]))
  }


  return (
    <div className="app">
      <div className="header">
        <h1>Gif App with React and Typescript</h1>

        <AddCategory onNewCategory={handleNewCategory} />
      </div>

      {categories.map(category => (
        <>
          <GridGifs key={category} category={category} />
          <hr />
        </>
      ))}

    </div >
  )
}