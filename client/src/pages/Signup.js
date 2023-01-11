import { useState, useEffect, useRef } from "react"
import axios from "../api/axios"
import FormRow from "../components/FormRow.js"



//Password must contain lower case, upper case, digit, special charater
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{6,15}$/

const REGISTER_URL = '/auth/signup'
const LOGIN_URL = '/auth/login'

const Signup = () => {
  const [first_name, setFirstName] = useState('')
  const [last_name, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [matchEmail, setMatchEmail] = useState('')
  const [password, setPassword] = useState('')
  const [matchPassword, setMatchPassword] = useState('')
  const [isMember, setIsMember] = useState(false)

  const toggleMember = () => {
    {isMember ? setIsMember(false) : setIsMember(true)}
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    //Registration
    if(!isMember) {
      //All values are entered
      if(!first_name || 
         !last_name || 
         !email || 
         !matchEmail || 
         !password || 
         !matchPassword) {
          alert('Please provide all values')
          return
        }

      //Emails match
      if(email !== matchEmail) {
        alert('Emails do not match')
        return
      }

      //Passwords match
      if(password !== matchPassword) {
        alert('Passwords do not match')
        return
      }

      try {
        const response = await axios.post(
          REGISTER_URL, 
          JSON.stringify({
            first_name, 
            last_name, 
            email, 
            password}),
          {
            headers: {'Content-Type': 'application/json'},
            withCredentials: true
          }
        )
        console.log(response.data)
        console.log(response.token)
        console.log(JSON.stringify(response))
      }catch(error) {
          console.log(error)
      };

    //Login
    } else {
      try {
        const response = await axios.post(LOGIN_URL, 
          JSON.stringify({email, password}),
          {
            headers: {'Content-Type': 'application/json'},
            withCredentials: true
          }
        )
          console.log(response.data)
      } catch (error) {
        console.log(error)
      }
    }
  }

  return (
    <div className="container w-25 text-bg-secondary p-3 rounded border shadow-5-strong">
      <div className="col text-center">
        <h3>{isMember? 'Login' : 'Register'}</h3>
        <form className="form-inline justify-content-center" onSubmit={handleSubmit}>
            {!isMember && (
            <FormRow 
              type="text" 
              name="first_name"
              handleChange={(e) => setFirstName(e.target.value)}
              labelText="First Name"
              />
            )}
            {!isMember && (
            <FormRow 
              type="text"  
              name="last_name"
              handleChange={(e) => setLastName(e.target.value)}
              labelText="Last Name"
              />
              )}
            <FormRow 
              type="email" 
              name="email"
              handleChange={(e) => setEmail(e.target.value)}
              labelText="Email"
              />
            {!isMember && (
            <FormRow 
              type="email" 
              name="matchEmail"
              handleChange={(e) => setMatchEmail(e.target.value)}
              labelText="Confirm Email"
              />
            )}
            <FormRow 
              type="password" 
              name="password"
              handleChange={(e) => setPassword(e.target.value)}
              labelText="Password"
            />
            {!isMember && (
            <FormRow 
              type="password" 
              name="matchPassword"
              handleChange={(e) => setMatchPassword(e.target.value)}
              labelText="Confirm Password"
              />
            )}
          <br/>
          <div className="col text-center">
            <button type="submit" className="btn btn-primary hover-shadow border">Submit</button>
          </div>
          <p>
            {isMember ? 'Not a Member Yet?' : 'Already a Member?'}
            <button type="button" onClick={toggleMember} className='btn btn-link'>{isMember ? 'Register' : 'Login'}</button>
          </p>
        </form>
      </div>
    </div>
  )
  
}

export default Signup