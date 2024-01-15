
import { useState } from 'react';
import Layout from "./Layout/layout";
import Title from "./Layout/title";
import axios from 'axios';

export default function RegisterPage () {
  const [firstName, setfirstName] = useState('');
  const [lastName, setlastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [file, setFile] = useState(null);
  const [error, setError] = useState('');

  const handleChangefirstName = (e) => {
    setfirstName(e.target.value);
  };
  const handleChangelastName = (e) => {
    setlastName(e.target.value);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  


  const handleChangeFile = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form validation
    if (!firstName || !lastName || !email || !password || !file) {
      console.log(firstName, lastName, email, password, file);
      setError('All fields are required');
    }  else {
     
    try {
      postData()
      setError("user created successfully");
    } catch (e) {
      setError(e);
    }
      setfirstName('');
      setlastName('');
      setEmail('');
      setPassword('');
      setFile(null);
      setError('');
    }
  };

  async function postData() {
   try {
     const formData = new FormData();
     formData.append('firstName', firstName);
     formData.append('lastName', lastName);
     formData.append('email', email);
     formData.append('password', password);
     formData.append('image', document.querySelector('#myfile').files[0]);
    console.log(formData);
     const response = await axios.post(process.env.NEXT_PUBLIC_API_ENDPOINT + '/management/signup/', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
    }
     });
    
     const data = response.data;
     console.log(data);
     } catch (error) {
     console.error(error);
     }
    }

  return (
    <>
     <Title page="Registration"> </Title>
<Layout>
      <h1>Registration Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name</label>
          <input className="input input-bordered input-primary w-full max-w-xs" type="text" name="firstName" value={firstName} onChange={handleChangefirstName} />
        </div>
        <br></br>
        <div>
          <label>Last Name</label>
          <input className="input input-bordered input-primary w-full max-w-xs" type="text" name="LastName" value={lastName} onChange={handleChangelastName} />
        </div>
        <br></br>
        <div>
          <label>Email</label>
          <input className="input input-bordered input-primary w-full max-w-xs" type="email" name="email" value={email} onChange={handleChangeEmail} />
        </div>
        <br></br>
        <div>
          <label>Password</label>
          <input className="input input-bordered input-primary w-full max-w-xs" type="password" name="password" value={password} onChange={handleChangePassword} />
        </div>
        <br></br>
        
        <div>
          <label>Upload File</label>
          <input className="file-input file-input-bordered w-full max-w-xs"  type="file" name="myfile" id="myfile" onChange={handleChangeFile} />
        </div>
        <br></br>
        {error && <p>{error}</p>}
        <button className="btn btn-outline btn-accent" type="submit">Register</button>
      </form>
      </Layout>
    </>
  );
};

