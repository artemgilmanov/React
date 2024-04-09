import { useState } from 'react';

function Login() {
  const [data, setData] = useState({
    username: '',
    password: '',
    focused: 'false',
  });

  function onFormSubmit(event) {
    event.preventDefault();
    console.log(data);
  }

  return (
    <>
      <h1>Login Form:</h1>
      <form onSubmit={onFormSubmit}>
        <label>
          Username:
          <input
            required={true}
            pattern="^[A-Za-z0-9]{3,16}$"
            onBlur={(e) => setData({ ...data, focused: 'true' })}
            focused={data.focused}
            type="text"
            value={data.username}
            onChange={(e) => setData({ ...data, username: e.target.value })}
          />
          <span>
            "Username should be 3-16 characters and schould't include any
            special character."
          </span>
        </label>
        <label>
          Password:
          <input
            required={true}
            pattern="^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$"
            onBlur={(e) => setData({ ...data, focused: 'true' })}
            focused={data.focused}
            type="text"
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />
          <span>
            "Password should be 8-20 characters and enclude at least 1 letter, 1
            number and 1 special character."
          </span>
        </label>
        <button type="submit">Login</button>
      </form>
    </>
  );
}

export default Login;
