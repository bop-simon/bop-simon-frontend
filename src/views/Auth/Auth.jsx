import { useState } from "react";
import AuthQuestion from "../../components/Auth/AuthQuestion/AuthQuestion.jsx";
import UserForm from "../../components/Auth/UserForm/UserForm.jsx";

//we need to pass the username and password in the userform through the signup or login functions
//maybe need a function called signupOrLogin that checks isSigningUp, and calls the correct backend util with the user form state

export default function Auth() {

  const [answered, setAnswered] = useState(false)
  const [formData, setFormData] = useState({
    isSigningUp: false,
    username: '',
    password: ''
  })

  const handleSubmit = async () => {
    console.log("Form Data - handleSubmit", formData)
  }

  const handleStateChange = (e) => {
    const { value, name } = e.target
    setFormData({...formData, [name]: value})
  }

  const handleAuthQuestion = (e) => {
    setAnswered(true)
    const { value, name } = e.target
    setFormData({...formData, [name]: value})
  }

  return (
    <div>
      {
        answered ?
        <UserForm
          handleChange={handleStateChange}
          handleSubmit={handleSubmit}
          formState={formData}
        /> :
        <AuthQuestion
          onSubmit={handleAuthQuestion}
        />
      }
    </div>
  )
}
