import React, { useState } from 'react';

import Img1 from '../images/forgot.jpeg';

import '../css/back2.css';

const P1 = () => {
  
 
  const [name, setName] = useState('');

  const [errors, setErrors] = useState({});



  

  const handleSignIn = () => {
    const newErrors = {};
    if (!name) {
      newErrors.name = 'Email id is required';
    }
   
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Proceed with sign-in logic
      console.log('Sign in successful');
      // Redirect to another page
    }
  };

  

  return (
    <div  style={{ display: 'flex', cursor: 'pointer' }}>
      {/* body 1 side */}
      <div className='body1'>
        {/* margin for signin */}
        <div style={{ marginTop: 130, marginLeft: 90,borderRadius:20,width:400,height:400,backgroundColor:'white'}}>
          <h2 style={{ paddingTop:100,paddingLeft:100}}>Forgot Password?</h2>
          <p style={{ paddingLeft:60}}>Enter your email to reset your password</p>
          <br />
          
          {/* input 1 */}
          <div>
            <input
              style={{ width: 300, height: 35, borderRadius: 5,marginLeft:50}}
              type='text'
              placeholder='Please enter your email address'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
             {errors.name && <p style={{ color: 'red',marginLeft:50}}>{errors.name}</p>}
          </div>
         
   
        
          
          <br></br>
      
          {/* subit */}
          <button
            style={{ width: 300, height: 30, borderRadius: 10, border: 'none', fontSize: 18, fontWeight: 1000,marginLeft:50 }}
            onClick={handleSignIn}
          >
            Submit
          </button>
          <br></br>
          <br></br>
          {/*back button*/}
          <button  style={{ width: 300, height: 30, borderRadius: 10, border: 'none', fontSize: 18, fontWeight: 1000,marginLeft:50}}>Back</button>
         
          
        </div>
      </div>
      {/* body2 image on right side */}
      <div className='body2'>
        <img style={{ width: 350, height: 500, marginTop: 80, marginLeft: 120,borderRadius:80}} src={Img1} alt='Img1' />
      </div>
    </div>
  );
}

export default P1;
