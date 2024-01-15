



import Link from "next/link"

 

export default function Header(){

 

return (

    <>

 

 

<div className="bg-indigo-300 navbar text-white">

  <div className="navbar-start">

  <img src="/portal.png" alt="Logo" class="h-18 w-52 mr-2"></img>

    <Link href="/" className=" normal-case text-4xl text-black ">EduPortal</Link>

  </div>

  <div className="navbar-center hidden lg:flex">

 

 

 

 

   

  </div>

  <div class="navbar-center hidden lg:flex">

    <ul class="menu menu-horizontal px-1 text-2xl">

     
    <li className="hover:bg-blue-300 rounded-lg ml-2"><Link href="aboutus">About Us</Link></li>

      <li className="hover:bg-blue-300 rounded-lg ml-2"><Link href="contact">Contact Us</Link></li>

    </ul>

 

 

 

 

 

 

    <ul className="menu menu-horizontal px-1 text-2xl">

      {/* <li> <Link href="/"> Home </Link></li> */}

      <li> <Link href=""> </Link></li>

    </ul>

  </div>

  <div className="navbar-end">

  <ul className="menu menu-horizontal px-1 text-2xl">

 

      <li> <Link className="" href="loginform" > Sign In </Link> </li>

      <li> <Link className="" href="registrationform" > Sign Up </Link></li>

   

    </ul>

 

  </div>

</div>

 

 

       </>

)

 

}

