import React from "react";
import { BrowserRouter, Route, Routes} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';
import { Loginsignup } from "./project/login/loginsignup";
//import { Clientpage } from "./components/dashboard/clientpage";
// import { Clientpagee } from "./project/dash/clientpagee";
import { Serverpagee } from "./project/dash/serverpagee";
import { Register } from "./project/register/register";
import Home from "./project/educationfront/pages/Home";
import 'remixicon/fonts/remixicon.css'; 
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Homeserver from "./project/educationserver/educationfront/pages/Homeserver";
import { Viewmore } from "./project/viewmore/viewmore";
import { Cou } from "./project/view1/cou";
import { Cou2 } from "./project/view2/cou2";
import { Cou3 } from "./project/view3/cou3";
import { Enroll } from "./project/enroll/enroll";
import Update1 from "./project/update/Update1";
import { Update2 } from "./project/update/Update2";
import { Update3 } from "./project/update/Update3";
import { Newget } from "./components/Newget/Newget";
import { Update } from "./components/Updatedetail/Update";
import { Ui } from "./components/uiuxdesign/ui";
import { Web } from "./components/webb/web";
import { Cyber } from "./components/cyber/cyber";
import { Cloud } from "./components/CLOUD/cloud";
import { Datascience } from "./components/datascience/datascience";
import { Blockchain } from "./components/blockchain/blockchain";
import Dashboard from "./construction/dashboard/dashboard";
import Insertionimage from "./construction/insertionimage3d/insertion";
import Construction from "./construction/header/headconstruction";
import Threedimage from "./construction/3dimages/threedimage";
import { Newgetbuild } from "./construction/getall/Newgetbuild";
import { Updatebuildd } from "./construction/updation/updatebuild";
import { Build } from "./construction/viewmorebuild/3dbuild1";
import Layout from "./construction/layout/layout";
import { Getone } from "./construction/getone/getone";
import { Building } from "./construction/viewmorebuild/3dbuild2";
import { Buildings } from "./construction/viewmorebuild/3dbuild3";
// import { Page } from "./eductionfront/page/page";



// import Home from "./components/pages/Home";



// import Insert from "./components/insert/insert";
// import { Newget } from "./components/Newget/Newget";
// import { Update } from "./components/Updatedetail/Update";
// import { Clientpage } from "./components/dashboard/clientpage";
// import { Serverpage } from "./components/dashboard/serverpage";
// import { Userlogin } from "./components/userlogin/userlogin";





// export default function App(){
//   return(
// <>
// <div id = "d">
//   <h1>React Component</h1>
// </div>
// <Sample/>
// <Text/>
// </>
//   );
// }
// function Sample(){
//   return(
// <>
// <div>
//   <h2>Sample </h2>
// </div>

// </>
//   );
// }

// function Text(){
//   return(
// <>
// <div>
//   <h2>Text </h2>
// </div>
// </>
//   );
// }
// export {Sample, Text}

export default function App() {
  return (
   <>
   <BrowserRouter>
  
   <Routes>
   {/* <Route path="/" element={<Insert/>}/> 
  
   
    <Route path="/update/:id" element={<Update/>}/>  */}
   {/* <Route path="/" element={<Userlogin/>}/>
   <Route path="/client" element={<Clientpage/>}/>
   <Route path="/server" element={<Serverpage/>}/> */}
   {/* main login */}
   {/* <Route path="/" element={<Loginsignup/>}/> 

  <Route path="/login" element={<Loginsignup/>}/>  */}


  {/* <Route path="/client" element={<Clientpagee/>}/> */}
  {/* <Route path="/server" element={<Serverpagee/>}/> */}
{/* <Route path="/client" element={<Hom/>}/> */}
  {/* <Route path="/signup" element={<Register/>}/>
  <Route path="/update/:id" element={<Update/>}/>  */}
  {/* <Route path="/client" element={<Home/>}/> */}
  {/* <Route exact path='/' component={Home} /> */}
{/* <Route path="/client" element={<Home/>}/>
<Route path="/server" element={<Homeserver/>}/>

<Route path="/viewall" element={<Newget/>}/> 
<Route path="/viewmore/1" element={<Ui/>}/>
<Route path="/viewmore/2" element={<Web/>}/>
<Route path="/viewmore/3" element={<Cyber/>}/>
<Route path="/viewmore/4" element={<Cloud/>}/>
<Route path="/viewmore/5" element={<Datascience/>}/>
<Route path="/viewmore/6" element={<Blockchain/>}/>
<Route path="/viewmore/7" element={<Cou2/>}/>
<Route path="/viewmore/8" element={<Cou3/>}/>
<Route path="/enroll/1" element={<Enroll/>}/> */}

{/* <Route path="/viewmore" element={<Viewmore/>}/>
<Route path="/updatee" element={<Update1/>}/>
<Route path="/update/02" element={<Update2/>}/>
<Route path="/update/03" element={<Update3/>}/> */}
          {/* <Route exact path='/about' component={About} />
          <Route exact path='/courses' component={CourseHome} />
          <Route exact path='/team' component={Team} />
          <Route exact path='/pricing' component={Pricing} />
          <Route exact path='/journal' component={Blog} />
          <Route exact path='/contact' component={Contact} /> */}

      
          <Route path="/" element={<Dashboard/>}/>
         
          <Route path="/insertimage" element={<Insertionimage/>}/>
          <Route path="/threedimage" element={<Threedimage/>}/>
          <Route path="/viewall3d" element={<Newgetbuild/>}/>
          <Route path="/update/:id" element={<Updatebuildd/>}/> 
          <Route path="/viewmore/1" element={<Build/>}/>
          <Route path="/viewmore/2" element={<Building/>}/>
          <Route path="/viewmore/3" element={<Buildings/>}/>
          
          <Route path="/getbyid/:id" element={<Getone/>}/>
          <Route path="/layout" element={<Layout/>}/>
   </Routes>
   </BrowserRouter>
   

   </>
  )}