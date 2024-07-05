import React, { useState } from 'react';

import Img1 from '../images/sign.jpeg';
import Ic1 from '@mui/icons-material/RemoveRedEye';
import Ic2 from '@mui/icons-material/Google';
import '../css/back1.css';

const P1 = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [errors, setErrors] = useState({});



  const handletogglepassword = () => {
    setShowPassword(!showPassword);
  };

  const validatePassword = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
  };

  const handleSignIn = () => {
    const newErrors = {};
    if (!name) {
      newErrors.name = 'Name is required';
    }
    if (!password) {
      newErrors.password = 'Password is required';
    } else if (!validatePassword(password)) {
      newErrors.password = 'Password must be at least 8 characters long, contain at least one special character, one uppercase letter, and one lowercase letter'
    }
    if (password !== repeatPassword) {
      newErrors.repeatPassword = 'Passwords do not match';
    }
    setErrors(newErrors);
  };
 
  return (
    <div style={{ display: 'flex', cursor: 'pointer' }}>
      {/* body 1 side */}
      <div className='body1'>
        {/* margin for signin */}
        <div style={{ paddingTop: 70, paddingLeft: 230 }}>
          <h2 style={{ paddingLeft: 20 }}>SIGN UP</h2>
          
          <button style={{ width: 250, marginLeft: -50, height: 40, borderRadius: 10, border: 'none' }}>
            Sign in with Google
          </button>
          <div style={{marginLeft:-20,marginTop:-33}}>
            <Ic2 />
          </div>
          <br />
          {/* line */}
          <hr style={{ width: 120, marginTop: 30, marginLeft: -120 }} />
          <p style={{ paddingLeft: 30, marginTop: -20 }}>or with Email</p>
          <hr style={{ width: 120, marginLeft: 140, marginTop: -25 }} />
          <br />
          <br />
          {/* input 1 */}
          <div>
            <input
              style={{ width: 400, height: 45, border: 'none', borderRadius: 5, marginLeft: -130 }}
              type='text'
              placeholder='Email'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          {errors.name && <p style={{ color: 'red', marginLeft: -130 }}>{errors.name}</p>}
          {/* input 2 */}
          <div style={{ position: 'relative', display: 'flex', alignItems: 'center', width: 400, marginLeft: -130, marginTop: 20 }}>
            <input
              style={{ flex: 1, height: 45, border: 'none', borderRadius: 5, paddingRight: 40 }}
              type={showPassword ? 'text' : 'password'}
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Ic1 onClick={handletogglepassword} style={{ position: 'absolute', right: 10, cursor: 'pointer' }} />
            {errors.password && <p style={{ color: 'red', position: 'absolute', top: 40 }}>{errors.password}</p>}
          </div>
          <br />
          <br />
          {/* input 3 */}
          <div>
            <input
              style={{ width: 400, height: 45, border: 'none', borderRadius: 5, marginLeft: -130, marginTop: 50 }}
              type='password'
              placeholder='Repeat Password'
              value={repeatPassword}
              onChange={(e) => setRepeatPassword(e.target.value)}
            />
            {errors.repeatPassword && <p style={{ color: 'red', marginLeft: -130 }}>{errors.repeatPassword}</p>}
          </div>
          <br></br>
          <input type='checkbox' style={{marginLeft:-125}}/>
          <p style={{marginLeft:-105,marginTop:-20}}>I Accept the <span style={{color:'red'}}>Terms</span></p>
          <br />
          {/* sign in button */}
          <button
            style={{ width: 400, marginLeft: -130, height: 40, backgroundColor: '#0ff7b2', borderRadius: 10, border: 'none', fontSize: 20, fontWeight: 1000 }}
            onClick={handleSignIn}
          >
            Sign up
          </button>
          <p style={{ marginLeft: -20 }}>Already have an Account? <span style={{ color: 'red', cursor: 'pointer' }} >Sign In</span></p>
        </div>
      </div>
      {/* body2 image on right side */}
      <div className='body2'>
        <img style={{ width: 350, height: 500, marginTop: 80, marginLeft: 120 }} src={Img1} alt='Img1' />
      </div>
    </div>
  );
}

export default P1;
