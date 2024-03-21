import "./style.css";
import React from "react";
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';


function Signup() {
  return (
    <div className="logo-box">
        <div className="logo-container"> 
      <img src="./twitter.png" alt="apple" className="logo" />
      </div>
      <h2>Create an account</h2>
    
      <form>
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Phone number" />
        <p className="email" style={{ color: '#1592e5' }}>Use email</p>
        <h4>Date of birth</h4>
        <p>Facilisi sem pulvinar velit nunc, gravida scelerisque amet nibh sit. Quis bibendum ante phasellus metus, magna lacinia sed augue. Odio enim nascetur leo mauris vel eget. Pretium id ullamcorper blandit viverra dignissim eget tellus. Nibh mi massa in molestie a sit. Elit congue.</p>

        <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker', 'DatePicker']}>
        <DatePicker
          label={'"year", "month" and "day"'}
          views={['year', 'month', 'day']}
        />
        <DatePicker label={'"day"'} views={['day']} />
        <DatePicker label={'"month" and "year"'} views={['month', 'year']} />
      </DemoContainer>
    </LocalizationProvider>

        <button className="next">Next</button>
      </form>
    </div>
  );
}
 
export default Signup;