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

 

export default function DeleteCourse() {

    const [students, setStudents] = useState([]);

    const [selectedStudentId, setSelectedStudentId] = useState(null);

 

    useEffect(() => {

        fetchCourses();

    }, []);

 

    async function fetchCourses() {

        try {

            const response = await axios.get(process.env.NEXT_PUBLIC_API_ENDPOINT + "/management/students");

            const studentsData = response.data;

            setStudents(studentsData);

        } catch (error) {

            console.error(error);

        }

    }

 

    const handleDeleteCourse = async () => {

        try {

            await axios.delete(process.env.NEXT_PUBLIC_API_ENDPOINT + `/management/student/${selectedStudentId}`);

            fetchCourses(); // Refresh the course list after deletion

            setSelectedStudentId(null); // Reset the selected course

        } catch (error) {

            console.error(error);

        }

    };

 

    return (

        <>

            <Title page="Delete Course" />
            <Layout>

            <NavBar />

            <div>

                <h2>Select Student to delete:</h2>

                <select className="select select-bordered w-full max-w-xs" value={selectedStudentId} onChange={(e) => setSelectedStudentId(e.target.value)}>

                    <option value={null}>Select a student</option>

                    {students.map((course) => (

                        <option key={course.cid} value={course.id}>{course.fname}</option>

                    ))}

                </select>

                <button className="btn btn-outline btn-error" onClick={handleDeleteCourse}>Delete Student</button>

            </div>
            </Layout>

        </>

    );

}

 
