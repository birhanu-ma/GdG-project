import React, { useState } from 'react';
import ReactDom from 'react-dom/client';
import './App.css'


const root = ReactDom.createRoot(document.getElementById('root'));



function App(){
    const [fullName, setullFName] = useState('');
    const [email, setEmail] = useState('');
    const [PhoneNum, setPhoneNum] = useState();
    const [isChecked1, setIsChecked1] = useState('');
    const [isChecked2, setIsChecked2] = useState('');
    const [isChecked3, setIsChecked3] = useState('');
    const [terms, setTerms] = useState('');
    const [selectedValue, setSelectedValue] = useState(false);
    


    return( 
 
        <div>
        <form  className='form'>
            <label>Full name:
            </label>
            <input className='gab-name' placeholder='set full name' value={fullName} type='text'
            onChange={(event)=>setullFName(event.target.value)} />
           
            <label>Email:
            </label>
            <input className='gab-email' placeholder='hsdkfahjs@gmail.com' value={email} type='text'
            onChange={(event)=>setEmail(event.target.value)}/>

         
            <label> Phone number:
            </label>
            <input className='gab-phone' placeholder='+251' value={PhoneNum}  type='tel'
            onChange={(event)=>setPhoneNum(event.target.value)}/>

         
        



      

        {/* radio button */}

        <ul>
            <h4>Gender:</h4>
            <li>
            <label>
        <input
          type="radio"
          name="male"
          value='male'
          checked={selectedValue === 'male'}
          onChange={(event)=>setSelectedValue(event.target.value)}
        />
       Male
      </label>

            </li>
            <li>
            <label>
        <input
          type="radio"
          name="radioButton"
          value='female'
          checked={selectedValue === 'female'}
          onChange={(event)=>setSelectedValue(event.target.value)}
        />
       Female
      </label>

            </li>
            <li>
            <label>
        <input
          type="radio"
          name="radioButton"
          value='other'
          checked={selectedValue === 'other'}
          onChange={(event)=>setSelectedValue(event.target.value)}
        />
       Other
      </label>

            </li>
        </ul>
        <ul>
            <h4>Interest:</h4>
            <li>
            <label>
            <input checked = {isChecked1}
            onChange={(event)=>setIsChecked1(event.target.checked)}
             name='radio' type='checkbox'/>
             Music
           
        </label>

            </li>
            <li>
            <label>
            <input checked = {isChecked2}
            onChange={(event)=>setIsChecked2(event.target.checked)}
             name='checkBox' type='checkbox'/>
             Travel
           
        </label>

            </li>
            <li>
            <label>
            <input checked = {isChecked3}
            onChange={(event)=>setIsChecked3(event.target.checked)}
             name='checkBox' type='checkbox'/>
             Sport
           
        </label>

            </li>

        </ul>
       
         <h4>Country:</h4>
        <select>
            <option value='Ethiopia'>Ethiopia</option>
            <option value='Nigeria'>Nigeria</option>
            <option value='Kenya'>Kenya</option>
            <option value='Sudan'>Sudan</option>
            <option value='Eritrea'>Eritrea</option>

        </select>

   
   
 
        <label>
            <input checked = {terms}
            onChange={(event)=>setTerms(event.target.checked)}
             name='checkBox' type='checkbox'/>
             Are you sure you want to submit this registration data
        </label>

        </form>

        <button>Submit</button>
        </div>
      
    );
}
root.render(
    <>
    <App/>
    </>
);