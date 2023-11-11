import { useState, useEffect } from 'react';

const INITIAL_STATE = {
  category: ""
}

interface AddCategoryProps {
  onNewCategory: (inputValues: InputValues) => void
}

interface AddCategoryState {
  inputValues: InputValues;
}

interface InputValues {
  category: string;
}

export const AddCategory = ({ onNewCategory }: AddCategoryProps) => {

  const [inputValues, setInputValues] = useState<AddCategoryState["inputValues"]>(INITIAL_STATE)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    onNewCategory(inputValues)
    handleClear()
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    setInputValues(values => ({ ...values, [name]: value }))
  }


  const handleClear = () => {
    setInputValues(INITIAL_STATE)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="category" value={inputValues.category} onChange={handleChange} />
    </form>
  )
}
