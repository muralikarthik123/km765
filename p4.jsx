import React, { useState } from 'react';

import Img1 from '../images/forgot.jpeg';
import Ic1 from '@mui/icons-material/RemoveRedEye';
import '../css/back2.css';

const P1 = () => {
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const handletogglepassword = () => {
    setShowPassword(!showPassword);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setErrors({ ...errors, password: '' });
  };

  const handleRepeatPasswordChange = (e) => {
    setRepeatPassword(e.target.value);
    setErrors({ ...errors, repeatPassword: '' });
  };

  const validatePassword = () => {
    const errors = {};
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!passwordRegex.test(password)) {
      errors.password = 'Password must be at least 8 characters,least 1 uppercase letter, 1 lowercase letter, 1 number,1 special character.';
    }

    if (password !== repeatPassword) {
      errors.repeatPassword = "Passwords don't match.";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = () => {
    if (validatePassword()) {
      // Add your sign-in logic here
      console.log('Password is valid and matched');
    }
  };

  return (
    <div style={{ display: 'flex', cursor: 'pointer' }}>
      {/* body 1 side */}
      <div className='body1'>
        {/* margin for signin */}
        <div style={{ marginTop: 80, marginLeft: 90, borderRadius: 20, width: 400, height: 450, backgroundColor: 'white' }}>
          <h2 style={{ paddingTop: 30, paddingLeft: 80 }}>Setup New Password</h2>
          <p style={{ paddingLeft: 40 }}>
            Have you already reset the password?<span style={{ color: 'blue' }}>Sign in</span>
          </p>
          <br />

          {/* input 1 */}
          <div style={{ position: 'relative' }}>
            <input
              style={{ width: 300, height: 35, borderRadius: 5, marginLeft: 50 }}
              type={showPassword ? 'text' : 'password'}
              placeholder='Password'
              value={password}
              onChange={handlePasswordChange}
            />
            <Ic1 onClick={handletogglepassword} style={{ position: 'absolute', right: 50, top: 5, cursor: 'pointer' }} />
            {errors.password && <p style={{ color: 'red', marginLeft: 50,width:300}}>{errors.password}</p>}
          </div>

          <br />

          {/* repeat password input */}
          <div style={{ position: 'relative' }}>
            <input
              style={{ width: 300, height: 35, borderRadius: 5, marginLeft: 50 }}
              type='password'
              placeholder='Repeat Password'
              value={repeatPassword}
              onChange={handleRepeatPasswordChange}
            />
            {errors.repeatPassword && <p style={{ color: 'red', marginLeft: 50 }}>{errors.repeatPassword}</p>}
          </div>

          <br />

          {/* submit */}
          <button
            style={{ width: 300, height: 30, borderRadius: 10, border: 'none', fontSize: 18, fontWeight: 1000, marginLeft: 50 }}
            onClick={handleSubmit}
          >
            Submit
          </button>
          <br />
          <br />
        </div>
      </div>
      {/* body2 image on right side */}
      <div className='body2'>
        <img style={{ width: 350, height: 500, marginTop: 80, marginLeft: 120, borderRadius: 80 }} src={Img1} alt='Img1' />
      </div>
    </div>
  );
}

export default P1;
