import { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from "../Layout/navbar";
import { useRouter } from "next/router";
import dynamic from 'next/dynamic'

const Layout = dynamic(() => import('../Layout/layout'), {
  ssr: false,
})

const Title = dynamic(()=>import('../Layout/title'), {
  ssr: false,
})


export default function Register() {

    const router = useRouter();
  
   
  
    const [register, setRegister] = useState({
  
      fname: "",
  
      lname:"",
  
      email: "",
  
      password: "",
  
      phone: "",
  
      management: "" ,  
  
      //image: null,
  
    });
  
    const [errors, setErrors] = useState({
  
      fname: "",
  
      lname: "",
  
      email: "",
  
      password: "",
  
      phone: "",
  
      management: "" ,
  
      //image: "",
  
    });
  
   
  
    const handleChange = (e) => {
  
      if (e.target.name === "myfile") {
  
        setRegister({
  
          ...register,
  
          [e.target.name]: e.target.files[0],
  
        });
  
      } else {
  
        setRegister({
  
          ...register,
  
          [e.target.name]: e.target.value,
  
        });
  
      }
  
    };
  
   
  
    const handleSubmit = async (e) => {
  
      e.preventDefault();
  
      const newErrors = {};
  
   
  
      if (!register.fname) {
  
        newErrors.fname = "Name is required";
  
      }
  
      if (!register.lname) {
  
          newErrors.lname = "Name is required";
  
        }
  
      if (!register.email) {
  
        newErrors.email = "Email is required";
  
      }
  
      if (!register.department) {
  
        newErrors.department = "Department is required";
  
      }
  
      
  
        if (!register.management) {
  
          newErrors.management = "Management Id is required";
  
        }
  
      // if (!register.image) {
  
      //   newErrors.myfile = "Image is required";
  
      // }
  
   
  
      if (Object.keys(newErrors).length > 0) {
  
        setErrors(newErrors);
  
        return;
  
      }
  
      try {
  
        const response = await axios.post(
  
          "http://localhost:3000/management/addstudent",
  
          {
  
            fname: register.fname,
  
            lname: register.lname,
  
            email: register.email,
  
            password: register.department,
  
            management: register.management,
  
            //image: register.image,
  
          },
  
          // {
  
          //   headers: {
  
          //     "Content-Type": "multipart/form-data",
  
          //   },
  
          // }
  
        );
  
        if (response.data) {
  
          setRegister({
  
              fname: "",
  
              lname: "",
  
              email: "",
  
              department: "",

  
              management:"",  
  
   
  
          });
  
          console.log("Form submitted successfully");
  
          //router.push("/Hr/login");
  
        }
  
      } catch (error) {
  
        console.log(error);
  
      }
  
    };
  
   
  
    return (
  
     
  
      <div>
  
        <h1 className="w-full max-w-lg container mx-auto mt-10">Add Student</h1>
  
        <form
  
          method="post"
  
          onSubmit={handleSubmit}
  
          className="w-full max-w-lg container mx-auto my-5"
  
        >
  
          <div className="flex flex-wrap -mx-3 mb-4">
  
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold">
  
              First Name
  
            </label>
  
            <input
  
              className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
  
              type="text"
  
              name="fname"
  
              value={register.fname}
  
              onChange={handleChange}
  
            />
  
            {errors.fname && <p className="text-red-500">{errors.fname}</p>}
  
            <br />
  
          </div>
  
          <div className="flex flex-wrap -mx-3 mb-4">
  
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold">
  
              Last Name
  
            </label>
  
            <input
  
              className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
  
              type="text"
  
              name="lname"
  
              value={register.lname}
  
              onChange={handleChange}
  
            />
  
            {errors.lname && <p className="text-red-500">{errors.lname}</p>}
  
            <br />
  
          </div>
  
   
  
   
  
          <div className="mb-4 flex flex-wrap -mx-3">
  
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold ">
  
              Email
  
            </label>
  
            <input
  
              className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
  
              type="email"
  
              name="email"
  
              value={register.email}
  
              onChange={handleChange}
  
            />
  
            {errors.email && <p className="text-red-500">{errors.email}</p>}
  
            <br />
  
          </div>
  
   
  
          <div className="mb-4 flex flex-wrap -mx-3">
  
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold ">
  
             Department
  
            </label>
  
            <input
  
              className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
  
              type="department"
  
              name="department"
  
              value={register.department}
  
              onChange={handleChange}
  
            />
  
            
  
            <br />
  
          </div>
  
   
  
         
   
  
          <div className="flex flex-wrap -mx-3 mb-4">
  
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold">
  
              Management id
  
            </label>
  
            <input
  
              className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
  
              type="text"
  
              name="management"
  
              value={register.mamanagement}
  
              onChange={handleChange}
  
            />
  
             {errors.management && <p className="text-red-500">{errors.management}</p>}
  
            <br />
  
            </div>
  
   
  
          <button className="btn btn-outline btn-accent" type="submit">
  
            ADD
  
          </button>
  
        </form>
  
      </div>
  
    );
  
  }
  
 