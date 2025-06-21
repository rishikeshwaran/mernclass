import './style/Login.css';
import rvLogo from '../assets/rv.jpg';

function Login({ onLoginSuccess }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate login success (add real validation if needed)
    onLoginSuccess();
  };

  return (
    <div className="Login">
      <div className="center-box">
        <img src={rvLogo} alt="RV Logo" className="logo" />
        <h1>Rishi Vlog's & Education</h1>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" required />

          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
