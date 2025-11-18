

import React from "react";
import Home from "./pages/Home.jsx"

import { BrowserRouter,Routes,Route } from "react-router-dom";
import Navbar from './component/Navbar.jsx'
import Layout from "./pages/AILayout.jsx";
import Dashboard from "./pages/dashboard.jsx";
import GenerateArticle from "./pages/generateArticle.jsx";
import ReviewResume from "./pages/reviewResume.jsx";
import GenerateImage from "./pages/generateImage.jsx";
import Quiz from "./component/QuizSample2.tsx";
import Banner from "./component/Banner.jsx";

function App() {

  
 return(

  <div>
    
   
      <BrowserRouter>
 <Navbar />
    <Routes >
        <Route path="/" element={<Home />}/>
         {/*<Route path="/services" element={<Services />}/>
        <Route path="/MovieResults" element={<MovieResults />
        <Route path="/UserList" element={<UserList />}/> */}

         <Route path='/ai' element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path='generate-article' element={<GenerateArticle />} />
            <Route path='review-resume' element={<ReviewResume />} />
            <Route path='generate-image' element={<GenerateImage />} />
            <Route path='sample-quiz' element={<Quiz />} />
          </Route>

        <Route path="/quiz-app" element={<Quiz />}/>

       
       
    </Routes>
    
    </BrowserRouter>
    </div> 


);

}


export default App;
