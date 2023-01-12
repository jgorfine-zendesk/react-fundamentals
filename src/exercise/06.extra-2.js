// Basic Forms
// 💯 validate lower-case
// http://localhost:3000/isolated/exercise/06.extra-2.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const usernameInput = React.useRef(null)

  const [errorMessage, setErrorMessage] = React.useState(null)
  const [isValid, setIsValid] = React.useState(true)

  const handleChange = event => {
    if (event.target.value === event.target.value.toLowerCase()) {
      setIsValid(true)
      setErrorMessage(null)
    } else {
      setIsValid(false)
      setErrorMessage('Username must be lower case.')
    }
  }

  const handleSubmit = event => {
    event.preventDefault()
    if (isValid) {
      onSubmitUsername(usernameInput.current.value)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username" style={{display: 'block'}}>
          Username
        </label>
        <input
          ref={usernameInput}
          id="username"
          name="username"
          autoComplete="username"
          type="text"
          aria-describedby="username-error"
          onChange={handleChange}
        />
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
