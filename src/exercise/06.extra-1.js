// Basic Forms
// 💯 using refs
// http://localhost:3000/isolated/exercise/06.extra-1.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const usernameInput = React.useRef(null)

  const handleSubmit = event => {
    event.preventDefault()
    const value = usernameInput.current.value
    onSubmitUsername(value)
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
        />
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
