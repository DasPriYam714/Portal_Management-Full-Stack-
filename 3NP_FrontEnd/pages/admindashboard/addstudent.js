
import { useState } from 'react';
import Layout from "../Layout/layout"
import Title from "../Layout/title";
import axios from 'axios';

export default function RegisterPage () {
  const [firstName, setfirstName] = useState('');
  const [lastName, setlastName] = useState('');
  const [email, setEmail] = useState('');
  const [department, setDepartment] = useState('');
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

  const handleDepartment = (e) => {
    setDepartment(e.target.value);
  };

  


  const handleChangeFile = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form validation
    if (!firstName || !lastName || !email || !department || !file) {
      console.log(firstName, lastName, email, department, file);
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
      setDepartment('');
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
formData.append('department', department);
formData.append('image', document.querySelector('#myfile').files[0]);

    console.log(formData);
     const response = await axios.post(process.env.NEXT_PUBLIC_API_ENDPOINT + '/management/addstudent/', formData, {
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
     <Title page="ADD New Student"> </Title>
<Layout >
      <h1 class="text-cyan-500">ADD New Student</h1>
      <form onSubmit={handleSubmit}>
        <div class="px-8 ...">
          <label>First Name</label>
          <input className="input input-bordered input-primary w-full max-w-xs" type="text" name="firstName" value={firstName} onChange={handleChangefirstName} />
        </div>
        <div class="px-8 ...">
          <label>Last Name</label>
          <input className="input input-bordered input-primary w-full max-w-xs" type="text" name="lastName" value={lastName} onChange={handleChangelastName} />
        </div>
        <div class="px-8 ...">
          <label>Email</label>
          <input className="input input-bordered input-primary w-full max-w-xs" type="email" name="email" value={email} onChange={handleChangeEmail} />
        </div>
        <div class="px-8 ...">
          <label>Department</label>
          <input className="input input-bordered input-primary w-full max-w-xs" type="text" name="department" value={department} onChange={handleDepartment} />
        </div>
        
        
        <div class="px-8 ...">
          <label>Upload File</label>
          <input className="file-input file-input-bordered file-input-primary w-full max-w-xs" type="file" name="myfile" id="myfile" onChange={handleChangeFile} />
        </div>
        {error && <p>{error}</p>}
        <button className="btn btn-outline btn-accent" type="submit">Add</button>
      </form>
      </Layout>
    </>
  );
};

