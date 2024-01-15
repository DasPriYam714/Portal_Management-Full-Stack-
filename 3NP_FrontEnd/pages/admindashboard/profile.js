import Link from "next/link";
import dynamic from 'next/dynamic'
import NavBar from "../Layout/navbar";






const Layout = dynamic(() => import('../Layout/layout'), {
  ssr: false,
})
const Title = dynamic(() => import('../Layout/title'), {
  ssr: false,
})


export default function Profile( ) {

 
  return (
    <>
    <img src="/u.jpg" alt="img" className="w-auto h-auto" style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, margin: 'auto', zIndex: -1 }} />
    <Layout>

    <Title page="Profile"> </Title>
 
    <NavBar/>
<div className=" text-center text-black text-3xl mt-8">

{/* <Link  className="" href="/admindashboard/alladmin">ALL Admin</Link>
<br/> */}
 <br/>
<Link  className="" href="/admindashboard/allstudents">ALL Student</Link>
<br/>
 <br/>
 <Link  className="" href="/admindashboard/updatestudent">Update Student</Link>
 <br/>
 <br/>
 <Link  className="" href="/admindashboard/addstudent">Add Student</Link>
 <br/>
 <br/>
 <Link  className="" href="/admindashboard/deletestudent">Delete Student</Link>
 <br/>
 <br/>
 <Link  className="" href="/admindashboard/studentadd"> Student Add</Link>

 </div>
 





</Layout>

  
    </>
  )
}





