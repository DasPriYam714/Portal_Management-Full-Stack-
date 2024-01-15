import Link from "next/link";
import dynamic from "next/dynamic";
const Layout = dynamic(() => import('./Layout/layout'), {
  ssr: false,
})
const Title = dynamic(() => import('./Layout/title'), {
  ssr: false,
})



export default function Home( ) {
  return (
    <>
    
    <Title page="Home"> </Title>
<Layout>

    <br></br>
    <br></br>


<div className="bg-cyan-800 text-white p-10">
 Welcome to EDU Portal!!
 </div>
 
 <br></br>
    <br></br>
    <img src="/li.jpg" className=" w-full "></img>

    </Layout>
    </>
  )
}





