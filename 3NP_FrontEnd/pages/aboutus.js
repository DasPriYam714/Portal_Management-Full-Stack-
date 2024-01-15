import Link from "next/link";
import Layout from "./Layout/layout";
import Title from "./Layout/title";
export default function About() {
    return (
      <>
          <Title page="About"> </Title>
      <Layout>
     
      <p>A university portal management system is a digital platform designed to centralize and streamline information, communication, and services within university environment. Students, faculties, and staff may easily access academic resources, course materials, announcements, schedules, and administrative duties through a hub. The portal facilitates academic activity increases administrative effectiveness, and boosts communication. It ensures data security, connects with current university systems. 

</p>
        <p>An adequate university portal management system's adoption will have a significant influence on both the academic environment and contemporary society. Access to education is increased, cooperation and communication are improved, administrative procedures are streamlined, and tailored learning experiences are encouraged. Additionally, it promotes multidisciplinary cooperation and research possibilities, boosts effectiveness and productivity, and aids in environmental sustainability. The initiative helps people by offering a convenient, interesting, and effective academic experience and has a beneficial impact on the current educational scene.  </p>
   <br></br>
   {/* <Link href="/">Home</Link>


   <br></br>
    <br></br>
    <a href="/">Home</a> */}
    </Layout>
      </>
    )
  }
  