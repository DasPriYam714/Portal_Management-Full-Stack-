import { useState, useEffect } from 'react';

import axios from 'axios';

import NavBar from "../Layout/navbar";

import dynamic from 'next/dynamic'

const Layout = dynamic(() => import('../Layout/layout'), {

  ssr: false,

})

const Title = dynamic(() => import('../Layout/title'), {

  ssr: false,

})

 

export default function AllStudents() { // Rename the component to AllCourse

    const [students, setStudents] = useState([]); // Initialize state as an array

   

    useEffect(() => {

        fetchStudents(); // Update the function name

    }, []);

 

    async function fetchStudents() { // Update the function name

        try {

            const response = await axios.get(process.env.NEXT_PUBLIC_API_ENDPOINT + "/management/students"); // Use the correct endpoint

            const studentsData = response.data;

            console.log(studentsData);

            setStudents(studentsData); // Update the state

        } catch (error) {

            console.error(error);

        }

    }

 

    const renderStudents = () => {

        return (

            <div >

                {students.map((student) => (

                    <div className="collapse bg-base-200" key={student.cid}>

                        <h2>Student ID: {student.id}</h2>

                        <h2>Student Name: {student.fname}</h2>

                        <h2>Student Email: {student.email}</h2>

                        <h2>Student Department: {student.department}</h2>

                        {/* Other course details */}

                        <hr />

                    </div>

                ))}

            </div>

        );

    }

   

 

 

 

 

    return (

        <>

            <Title page="ALL Students" />

           <Layout>

                <NavBar />

                <div className="card w-96 bg-base-100 shadow-xl">

                    {renderStudents()} {/* Call the rendering function */}

                </div>

 

 

                </Layout>

               

   

        </>

    );

}