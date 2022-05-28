import { useState } from 'react';

const useForm = (initialValues) => {
  const [values, setValues] = useState(initialValues);

  return [
    values,
    e => setValues({
      [e.target.name]: e.target.value
    })
  ]
}


const App = () => {
  const [values, handleChange] = useForm({ email: '', password: '' })
  const [values2, handleChange2] = useForm({ email: '', password: '' }) // another useForm declared

  return (
    <div>
      <input name="email" value={values.email} onChange={handleChange} />
      <input name="password" type="password" value={values.password} onChange={handleChange} />
    </div>
  )
}