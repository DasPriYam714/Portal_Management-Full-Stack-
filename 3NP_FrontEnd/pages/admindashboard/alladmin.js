import { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';
import NavBar from "../Layout/navbar";
import dynamic from 'next/dynamic'
const Layout = dynamic(() => import('../Layout/layout'), {
  ssr: false,
})
const Title = dynamic(() => import('../Layout/title'), {
  ssr: false,
})

export default function AllAdmin() {

    const [jsonData, setJsonData] = useState(null);

   

    useEffect(() => {

        fetchData();

    }, []);

 

    async function fetchData() {

        try {

             const response = await axios.get(process.env.NEXT_PUBLIC_API_ENDPOINT + "/management/students",

             {

                withCredentials: true

              }

             );

            const jsonData = response.data;

            console.log(jsonData)

            setJsonData(jsonData);

        } catch (error) {

            console.error(error);

        }

    }

 

    const printArray = (jsonData) => {

        return (

            jsonData.map((item, index) => {

                return (

 

                    <div key={index}>

                        Manager Info:

                        <h2>id: {item.id}</h2>

                        <h2>First name: {item.fname}</h2>

                        <h2>Last name: {item.lname}</h2>

                        <h2>email: {item.email}</h2>

                        <h2>phone: {item.department}</h2>

                        Management Info:

                        <h4>id: {item.management.id}</h4>

                        <h4>Admin Name: {item.management.name}</h4>

 

                        <hr />

                    </div>

                );

 

            })

        );

    }

 

 

    const printObject = (jsonData) => {

        return (

            <div>

                print Object

                {/* <img src={process.env.NEXT_PUBLIC_API_ENDPOINT + '/admin/getimage/' + jsonData.filenames} /> */}

                <h2>id: {jsonData.id}</h2>

                <h2>name: {jsonData.name}</h2>

                <h2>email: {jsonData.email}</h2>
                <h2>email: {jsonData.department}</h2>

 

            </div>

        );

    }

 

 

   

    return (

 

        <>

 <Title page="ALL Manager"/>

  <Layout>

    <NavBar/>

            {jsonData != null &&

                <div>

                    {Array.isArray(jsonData) ? printArray(jsonData) : printObject(jsonData)}

                </div>

 

            }

</Layout>

        </>

    );

}

 

 

