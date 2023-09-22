import React, { useState } from 'react';
import LandingPage from './Landing_Page';

      const RegistrationPage = () => {
        const [formData, setFormData] = useState({
          username: '',
          email: '',
          password: '',
          confirmPassword: ''
        });
      
        const [passwordError, setPasswordError] = useState('');
        
        const handleChange = (e) => {
          setFormData({
            ...formData,
            [e.target.name]: e.target.value
          });
        };
      
        const handleSubmit = (e) => {
          e.preventDefault();
          if (formData.password !== formData.confirmPassword) {
            setPasswordError('Password Not Correct, Try Again....');
          } else {
            setPasswordError('');
            console.log(formData);
          }
        };
      
        return (
          <form onSubmit={handleSubmit} style={{margin:"50px", border:"solid",scale:"revert-layer"}}>
            <label style={{margin:"30px",marginLeft:"50px"}}>
              Username
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                style={{marginLeft:"90px"}}
              />
            </label>
            <br />
      
            <label style={{margin:"30px",marginLeft:"50px"}}>
              Email
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                style={{marginLeft:"120px"}}
              />
            </label>
            <br />
      
            <label style={{margin:"20px",marginLeft:"40px"}}>
              Password
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                style={{marginLeft:"100px"}}
              />
            </label>
            <br />

            <label style={{margin:"20px",marginLeft:"40px"}}>
              Confirm Password
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                style={{marginLeft:"40px"}}
              />
            </label>
            <br />
      
            {passwordError && <p>{passwordError}</p>}

            <button onClick={LandingPage} type="submit" style={{marginLeft:"150px",marginBottom:"50px",marginTop:"50px"}}>Register</button>
          </form>
        );
      };
      
      export default RegistrationPage;
