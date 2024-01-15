import { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from "../Layout/navbar";
import dynamic from 'next/dynamic'

const Layout = dynamic(() => import('../Layout/layout'), {
  ssr: false,
})

const Title = dynamic(()=>import('../Layout/title'), {
  ssr: false,
})

export default function AllCourse() {

    const [students, setStudents] = useState([]);

 

    useEffect(() => {

        fetchCourses();

    }, []);

 

    async function fetchCourses() {

        try {

            const response = await axios.get(process.env.NEXT_PUBLIC_API_ENDPOINT + "/management/students");

            const coursesData = response.data;

            setStudents(coursesData);

        } catch (error) {

            console.error(error);

        }

    }

 

    const handleUpdateCourse = async (id, updatedCourseData) => {

        try {

            await axios.put(process.env.NEXT_PUBLIC_API_ENDPOINT + `/management/updatestudent/${id}`, updatedCourseData);

            fetchCourses(); // Refresh the course list after updating

        } catch (error) {

            console.error(error);

        }

    };

 

    const renderCourses = () => {

        return (

            <div>

                {students.map((student) => (

                    <div key={student.id}>

                        <h2>Student ID: {student.id}</h2>

                        <h2>Student Name: {student.fname}</h2>
                        

                        <h2>Student Email: {student.email}</h2>

                        <div>

                            <input

                                type="text"

                                placeholder="Enter new  name"

                                onChange={(e) => setNewCourseName(e.target.value)}
                                className="input input-bordered w-full max-w-xs"

                            />
                            

                            <input

                                type="text"

                                placeholder="Enter new Email"

                                onChange={(e) => setNewCourseTime(e.target.value)}
                                className="input input-bordered w-full max-w-xs"

                            />

                            <button className="btn btn-outline btn-primary" onClick={() => handleUpdateCourse(student.id, { fname: newCourseName, email: newCourseTime })}>Update Student</button>

                        </div>

                        <hr />

                    </div>

                ))}

            </div>

        );

    }

 

    const [newCourseName, setNewCourseName] = useState('');

    const [newCourseTime, setNewCourseTime] = useState('');

 

    return (

        <>
        <Layout>

            <Title page="Update Students" />

            <NavBar />

            <div>

                {renderCourses()}

            </div>
            </Layout>

        </>

    );

}

 

