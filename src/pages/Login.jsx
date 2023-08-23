import React, { useState } from 'react';
import './login.css';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/login/loginSlice';
import { register } from '../redux/register/registerSlice';
import logo from '../assets/BookEase Logos/next to Logo white Text-01-01.png';

const Login = () => {
  // HOOK
  const dispatch = useDispatch();
  const { data, loading } = useSelector((state) => state.login);
  const regData = useSelector((state) => state.register.data);
  const regLoading = useSelector((state) => state.register.loading);
  if (data && data.message === 'User login successfully') {
    localStorage.setItem('logged_user', JSON.stringify(true));
    localStorage.setItem('user_data', JSON.stringify(data));
    window.location.reload();
  }

  // STATE
  const [loginDiv, setLoginDiv] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [verifyPassword, setVerifyPassword] = useState('');

  // LOGIN
  const handleLogin = async (e) => {
    e.preventDefault();
    const cred = { username, password };
    dispatch(login(cred));
  };

  // REGISTER
  const handleRegister = (e) => {
    e.preventDefault();
    if (password === verifyPassword) {
      const cred = { user: { username, password, password_confirmation: verifyPassword } };
      dispatch(register(cred));
    }
  };

  // SWITCH LOGIN/REGISTER
  const switchDiv = () => {
    setUsername('');
    setPassword('');
    setVerifyPassword('');
    setLoginDiv(!loginDiv);
  };

  return (
    <>
      {loginDiv
        ? (
          <section className="login">
            <div className="overlay">
              <img width="200" style={{ marginLeft: '5vh' }} src={logo} alt="logo" />
              <div className="content-container">
                <div className="content">
                  <form onSubmit={handleLogin} className="login-inside">
                    <input key="user0" onChange={(e) => setUsername(e.target.value)} type="text" placeholder="Username" required />
                    <input key="pass0" onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" required />
                    {(!loading && !data) && <input key="sub0" type="submit" value="LOGIN" />}
                    {(loading && !data) || (!loading && data) ? <p>Loading...</p> : ''}
                  </form>
                  <p>
                    New here? Click to
                    {'  '}
                    <button onClick={switchDiv} type="button">Register.</button>
                  </p>
                </div>
              </div>
            </div>
          </section>
        )
        : (
          <section className="login">
            <div className="overlay">
              <img width="200" style={{ marginLeft: '5vh' }} src={logo} alt="logo" />
              <div className="content-container">
                <div className="content">
                  <form onSubmit={handleRegister} className="login-inside">
                    <input key="user1" onChange={(e) => setUsername(e.target.value)} type="text" placeholder="Username" required />
                    <input key="pass1" onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" required />
                    <input key="pass2" onChange={(e) => setVerifyPassword(e.target.value)} type="password" placeholder="Confirm Password" required />
                    {!regLoading && !regData && <input key="sub1" type="submit" value="REGISTER" />}
                    {regLoading && !regData ? <p>Registering Please  Wait...</p> : ''}
                    {regData && regData.id ? (
                      <p>
                        Registered Successfully!
                        <br />
                        {' '}
                        Now click login button below
                      </p>
                    ) : ''}
                  </form>
                  <p>
                    Already Registered ? Click to
                    {' '}
                    <button onClick={switchDiv} type="button">Login</button>
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}
    </>
  );
};

export default Login;
