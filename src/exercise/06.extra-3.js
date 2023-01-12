// Basic Forms
// 💯 control the input value
// http://localhost:3000/isolated/exercise/06.extra-3.js

import * as React from 'react'

// 👩🏻‍🦱 Extracted the input into its own component,
// so I could inspect the input value using the React DevTools
const UsernameInput = ({value, onChange}) => (
  <input
    value={value}
    id="username"
    name="username"
    autoComplete="username"
    type="text"
    required={true}
    aria-describedby="username-error"
    onChange={onChange}
  />
)

function UsernameForm({onSubmitUsername}) {
  const [usernameValue, setUsernameValue] = React.useState('')
  const [errorMessage, setErrorMessage] = React.useState(null)
  const [isValid, setIsValid] = React.useState(true)

  // 👩🏻‍🦱 Only reference the event.target.value here,
  // to make sure you're getting the actual current value.
  // See: https://stackoverflow.com/questions/28773839/react-form-onchange-setstate-one-step-behind
  const handleChange = event => {
    if (event.target.value !== event.target.value.toLowerCase()) {
      setIsValid(false)
      setErrorMessage('Username must be lower case.')
    } else if (event.target.value === '') {
      setIsValid(false)
      setErrorMessage('Username is required.')
    } else {
      setIsValid(true)
      setErrorMessage(null)
    }
    setUsernameValue(event.target.value)
  }

  const handleSubmit = event => {
    event.preventDefault()
    if (isValid) {
      onSubmitUsername(usernameValue)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username" style={{display: 'block'}}>
          Username<span aria-hidden="true">*</span>
        </label>
        <UsernameInput value={usernameValue} onChange={handleChange} />
        <div id="username-error" role="status">
          {errorMessage}
        </div>
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
