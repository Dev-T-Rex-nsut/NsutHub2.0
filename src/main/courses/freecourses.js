import React from "react"
import "./courses.css"
import web from "../img/webDev.png"
import app from "../img/appdev.png"
import linux from "../img/bash.png"
import mldl from "../img/mldlai.jpg"
import lang from "../img/languages.png"
import other from "../img/softskills.png"
import coursesheader from "../img/coursesheader.png"
import Footer from "../initials/footer"

 class FreeCourse extends React.Component {

  render(){ 
    return (
          <div className="moveRt">
          <div className="courseHero">
              <img src={coursesheader} />
          </div>
          <div className="empty"></div>
           <div className="sup"> Choose your courses</div>
           <div className="section group">
         	     <div className="span_1_of_3">
                  <a href="#web">
         	          <img src={web} className="courim"></img>
                  </a>     
         	     </div>
         	     <div className="span_1_of_3">
                   <a href="#app">
                     <img src={app} className="courim"></img>
                   </a>
         	     </div>
         	     <div className="span_1_of_3">
                   <a href="#mlaidl">
                     <img src={mldl} className="courim"></img>
                   </a>  
         	     </div>
           </div>
           <div className="section group">
	          <div className="span_1_of_3">
                 <a href="#algo"> 
          	       <img src={lang} className="courim"></img>
                 </a>
          	  </div>
          	  <div className="span_1_of_3">
                 <a href="#bash">
                  <img src={linux} className="courim"></img>
                 </a>  
          	  </div>
          	  <div className="span_1_of_3"> 
                <a href="#other">
                  <img src={other} className="courim"></img>
                </a>
          	     </div>
              </div>
            <div id="web">
              <h1 className="super">Web Development</h1>
              <div>
                <h2 className="subH">Learn by courses</h2>
                <a className="ik" href="https://www.youtube.com/watch?v=EceJQ05KTf4&list=PLwoh6bBAszPrES-EOajos_E9gvRbL27wz">MERN stack Web Development</a>
                <br></br>
                <a className="ik" href="https://www.coursera.org/specializations/full-stack-react?action=enroll">MERN stack Web Development -coursera</a>
                <br></br>
                <a className="ik" href="https://www.coursera.org/learn/server-side-nodejs">MEN stack Web Development</a>
                <br></br>
                <a className="ik" href="https://www.youtube.com/watch?v=vLvNr3Wa5YI&list=PLC3y8-rFHvwj200LLotCYum_9wmGeTJx9">MEAN stack Web Development</a>
                <br></br>
                <a className="ik" href="https://www.youtube.com/playlist?list=PLzUER7qusru_Wxe5QDVOQPEcuqeKK1MNu">Web Development -freecodecamp</a>
             </div>
             <div>
                <h2 className="subH">Learn by Project Building</h2>
                <a className="ik" href="https://www.youtube.com/watch?v=Fy9SdZLBTOo&t=20s">MERN stack Ecommerce website</a>
                <br></br>
                <a className="ik" href="https://www.youtube.com/watch?v=njqdreTzAI0&list=PLZed_adPqIJrl9pwlERGhU-RCNOtKqvyD">MEAN stack Ecommerce website</a>
                <br></br>
                <a className="ik" href="https://www.youtube.com/watch?v=Jdez-Nl2RHY">PERN stack Blogging website</a>
                <br></br>
                <a className="ik" href="https://www.education-ecosystem.com/mazel/l9Deo-ngtime/">PEAN stack Time tracker</a>
                <br></br>
                <a className="ik" href="https://www.youtube.com/watch?v=FdC4Mjljd3k">MEVN stack Library Web App</a>
                <br></br>
                <a className="ik" href="https://www.youtube.com/watch?v=CyTWPr_WwdI">MEN stack TODO List</a>
             </div>
             <div>
               <h2 className="subH U">Useful Resourses</h2>
               <a className="ik" href="https://www.freecodecamp.org/">FreeCodeCamp</a>
               <br></br>
               <a className="ik" href="https://www.w3schools.com/">w3schools</a>
               <br></br>
               <a className="ik" href="https://developer.mozilla.org/en-US/">Mozilla Web Docs(MDN)</a>
               <br></br>
               <a className="ik" href="https://getbootstrap.com/">Bootstrap</a>
             </div>
            </div>
            <div id="app">
               <h1 className="super">App Development</h1>
               <div>
                 <h2 className="subH">Learn by courses</h2>
                 <h3>Using Android Studio</h3>
                 <a className="ik" href="https://www.udemy.com/course/become-an-android-developer-from-scratch/">Android Development -Udemy</a>
                 <br></br>
                 <a className="ik" href="https://www.youtube.com/watch?v=fis26HvvDII">Android Development -freeCodeCamp</a>
                 <br></br>
                 <h3>Using Flutter Framework</h3>
                 <a className="ik" href="https://flutter.dev/freecourse">Flutter App Development -appBrewery</a>
                 <br></br>
                 <a className="ik" href="https://www.youtube.com/playlist?list=PLR2qQy0Zxs_UdqAcaipPR3CG1Ly57UlhV">Flutter App Development -mTechViral</a>
                 <h3>iOS App Development</h3>
                 <a className="ik" href="https://www.youtube.com/playlist?list=PLpZBns8dFbgx0gr68lf-un9EjdmywTu4_">iOS App Development -devSlopes</a>
                 <br></br>
                 <a className="ik" href="https://www.udemy.com/course/the-complete-ios-10-developer-course/">iOS App Development -Udemy</a>
              </div>
              <div>
                 <h2 className="subH">Learn by Project Building</h2>
                 <a className="ik" href="https://www.youtube.com/playlist?list=PLaoF-xhnnrRW4lXuIhNLhgVuYkIlF852V">Android Studio -Food Order App</a>
                 <br></br>
                 <a className="ik" href="https://www.youtube.com/watch?v=988UZFB0heA&t=2174s">Android Studio -Whatsapp clone</a>
                 <br></br>
                 <a className="ik" href="https://www.youtube.com/playlist?list=PLmnT6naTGy2SC82FMSCrvZNogg5T1H7iF">Flutter Framework -Ecommerce App</a>
                 <br></br>
                 <a className="ik" href="https://www.youtube.com/playlist?list=PL4cUxeGkcC9j--TKIdkb3ISfRbJeJYQwC">Flutter Framework -Brew Crew App</a>
                 <br></br>
                 <a className="ik" href="https://www.youtube.com/watch?v=09TeUXjzpKs">iOS App Development -Cards game</a>
                 <br></br>
                 <a className="ik" href="https://www.youtube.com/watch?v=CyTWPr_WwdI">iOS App Development -Dicee</a>
              </div>
              <div>
                <h2 className="subH U">Useful Resourses</h2>
                <a className="ik" href="https://www.freecodecamp.org/">FreeCodeCamp</a>
                <br></br>
                <a className="ik" href="https://developer.android.com/">Android Developers</a>
                <br></br>
                <a className="ik" href="https://flutter.dev/docs">Flutter Docs</a>
                <br></br>
                <a className="ik" href="https://dart.dev/">Dart Packages</a>
                <br></br>
                <a className="ik" href="https://developer.apple.com/documentation/">iOS App Developers</a>
                <br></br>
                <a className="ik" href="https://swift.org/documentation/">Swift Documentation</a>
              </div>
             </div>
             <div id="mlaidl">
               <h1 className="super">Artificial Intelligence and its sub categories</h1>
               <div>
                 <h2 className="subH">Artificial Intelligence</h2>
                 <a className="ik" href="https://www.edx.org/course/artificial-intelligence-ai">Artificial Intelligence -edx</a>
                 <br></br>
                 <a className="ik" href="https://www.youtube.com/playlist?list=PL9ooVrP1hQOGHNaCT7_fwe9AabjZI1RjI">Artificial Intelligence -edureka</a>
                 <h2 className="subH">Machine Learning</h2>
                 <a className="ik" href="https://www.coursera.org/learn/machine-learning-with-python">Machine learning using python -IBM</a>
                 <br></br>
                 <a className="ik" href="https://www.youtube.com/playlist?list=PL9ooVrP1hQOHUfd-g8GUpKI3hHOwM_9Dn">Machine learning using python -edureka</a>
                 <br></br>
                 <a className="ik" href="https://www.coursera.org/learn/machine-learning">Machine Learning using Octave/Matlab</a>
                 <h2 className="subH">Deep Learning</h2>
                 <a className="ik" href="https://www.coursera.org/specializations/deep-learning">Deep Learning using TenserFlow -deeplearning.ai</a>
                 <br></br>
                 <a className="ik" href="https://www.youtube.com/playlist?list=PLWKjhJtqVAblStefaz_YOVpDWqcRScc2s">Deep Learning using TenserFlow -freeCodeCamp</a>
                 <br></br>
                 <a className="ik" href="https://www.youtube.com/playlist?list=PLWKjhJtqVAbm3T2Eq1_KgloC7ogdXxdRa">Deep learning using pyTorch</a>
                 <h2 className="subH">Data Science and Neural Networks</h2>
                 <a className="ik" href="https://www.youtube.com/playlist?list=PLlgLmuG_KgbaXMKcISC-fdz7HUn1oKr9i">Data Science -greatlearning</a>
                 <br></br>
                 <a className="ik" href="https://www.youtube.com/playlist?list=PL9ooVrP1hQOGR57Y4g1LFhn1JXVgn1lkX">Data Science -edureka</a>
                 <br></br>
                 <a className="ik" href="https://www.coursera.org/learn/neural-networks-deep-learning">Neural networks -deeplearning.ai</a>
                 <br></br>
                 <a className="ik" href="https://www.youtube.com/watch?v=ob1yS9g-Zcs">Neural networks -simplilearn</a>
              </div>
              <div>
                <h2 className="subH U">Useful Resourses</h2>
                <a className="ik" href="https://aws.amazon.com/blogs/ai/">Amazon Web Services</a>
                <br></br>
                <a className="ik" href="https://research.googleblog.com/">Google research</a>
                <br></br>
                <a className="ik" href="https://www.tutorialspoint.com/artificial_intelligence/artificial_intelligence_useful_resources.htm">Useful Books</a>
                <br></br>
                <a className="ik" href="https://www.freecodecamp.org/news/the-best-resources-i-used-to-teach-myself-machine-learning-part-1-292232d167/">freeCodeCamp blog</a>
                <br></br>
                <a className="ik" href="https://www.kaggle.com/">kaggle</a>
              </div>
            </div> 
              <div id="algo">
                 <h1 className="super">Algorithmic Languages</h1>
                 <div>
                   <h2 className="subH">C/C++</h2>
                   <a className="ik" href="https://www.udemy.com/course/free-learn-c-tutorial-beginners/">C++ -udemy</a>
                   <br></br>
                   <a className="ik" href="https://www.udacity.com/course/c-for-programmers--ud210">C++ -udacity</a>
                   <br></br>
                   <a className="ik" href="https://www.youtube.com/watch?v=iT_553vTyzI">C -intellipat</a>
                   <h2 className="subH">Java</h2>
                   <a className="ik" href="https://www.udemy.com/course/java-tutorial/">Java -udemy</a>
                   <br></br>
                   <a className="ik" href="https://youtu.be/ZXsFEie9GMc">Java -intellipat</a>
                   <br></br>
                   <a className="ik" href="https://www.udemy.com/course/practice-java-by-building-projects/">Learn java by building projects</a>
                   <h2 className="subH">Python</h2>
                   <a className="ik" href="https://www.educative.io/courses/learn-python-3-from-scratch">Python from scratch</a>
                   <br></br>
                   <a className="ik" href="https://www.youtube.com/watch?v=8DvywoWv6fI">Python -freeCodeCamp</a>
                   <br></br>
                   <a className="ik" href="https://www.coursera.org/specializations/python">Python specializations</a>
                   <h2 className="subH">Other Languages</h2>
                   <a className="ik" href="https://www.coursera.org/specializations/google-golang">Golang -courseera</a>
                   <br></br>
                   <a className="ik" href="https://www.datacamp.com/courses/free-introduction-to-r">R -codecamp</a>
                   <br></br>
                   <a className="ik" href="https://www.youtube.com/watch?v=comQ1-x2a1Q">Swift -freecodecamp</a>
                   <br></br>
                   <a className="ik" href="https://cognitiveclass.ai/courses/introduction-to-scala">Scala -cognitiveclass.ai</a>
                   <h2 className="subH">Data Structures And Algorithms</h2>
                   <a className="ik" href="https://www.coursera.org/specializations/data-structures-algorithms">Ds and Algo specializations -coursera</a>
                   <br></br>
                   <a className="ik" href="https://www.youtube.com/playlist?list=PLWPirh4EWFpG49yASGCmvOwXwVvgnm6Jt">Ds and Algo -Tutorials point</a>
                   <br></br>
                   <a className="ik" href="https://www.youtube.com/watch?v=RBSGKlAvoiM&t=25498s">Ds and Algo -freeCodeCamp</a>
                   <br></br>
                   <a className="ik" href="https://www.youtube.com/watch?v=09_LlHjoEiY">Graph theory Algos -freeCodeCamp</a>
                </div>
                <div>
                  <h2 className="subH U">Useful Resourses</h2>
                  <a className="ik" href="https://www.tutorialspoint.com/">Tutorials point</a>
                  <br></br>
                  <a className="ik" href="https://www.freecodecamp.org/">freeCodeCamp</a>
                  <br></br>
                  <a className="ik" href="https://devdocs.io/cpp/">C++ docs</a>
                  <br></br>
                  <a className="ik" href="https://www.geeksforgeeks.org/">Geeks for Geeks</a>
                  <br></br>
                  <a className="ik" href="https://www.programiz.com/dsa#:~:text=A%20data%20structure%20is%20a,efficient%20and%20optimized%20computer%20programs.">Programiz</a>
                </div>
              </div>  
              <div id="bash">
              <h1 className="super">Terminal, Git and Linux</h1>
              <div>
                <h2 className="subH">Terminal</h2>
                <a className="ik" href="https://www.youtube.com/watch?v=2PGnYjbYuUo">Terminal -Geek's lesson</a>
                <br></br>
                <a className="ik" href="https://www.rithmschool.com/courses/terminal">Terminal -Rithm school</a>
                <h2 className="subH">Git/Github</h2>
                <a className="ik" href="https://www.udemy.com/course/git-expert-4-hours/">Git become an Expert -udemy</a>
                <br></br>
                <a className="ik" href="https://www.youtube.com/watch?v=RGOj5yH7evk&t=21s">Github -freeCodeCamp</a>
                <h2 className="subH">Linux</h2>
                <a className="ik" href="https://www.youtube.com/watch?v=wBp0Rb-ZJak">Linux become a Power User</a>
                <br></br>
                <a className="ik" href="https://www.youtube.com/watch?v=3Kq1MIfTWCE">Ethical hacking -freeCodeCamp</a>
                <br></br>
                <a className="ik" href="https://www.youtube.com/watch?v=wsh64rjnRas">Linux Administration</a>
             </div>
             <div>
               <h2 className="subH U">Useful Resourses</h2>
               <a className="ik" href="http://linuxdocs.org/">Linux docs</a>
               <br></br>
               <a className="ik" href="https://help.github.com/en/github">Github Docs</a>
               <br></br>
               <a className="ik" href="https://git-scm.com/doc">Git docs</a>
             </div>
           </div>  
           <div id="other">
              <h1 className="super">Other Important Courses</h1>
              <div>
                <h2 className="subH">Game Development</h2>
                <a className="ik" href="https://www.coursera.org/specializations/game-development">Using C# and Unity -coursera</a>
                <br></br>
                <a className="ik" href="https://www.youtube.com/watch?v=FfWpgLFMI7w">Using pygame -freeCodeCamp</a>
                <br></br>
                <a className="ik" href="https://www.youtube.com/watch?v=LsNW4FPHuZE">Using Unreal and C++</a>
                <br></br>
                <a className="ik" href="https://www.skillshare.com/browse/game-development">Skillshare courses</a>
                <h2 className="subH">Soft Skills</h2>
                <a className="ik" href="https://www.edx.org/course/rise-to-leadership-become-a-ceo-0">Leadership</a>
                <br></br>
                <a className="ik" href="https://www.edx.org/course/leading-with-effective-communication-inclusive-lea">Public speaking</a>
                <br></br>
                <a className="ik" href="https://www.coursera.org/learn/international-taxation">Tax planing</a>
                <br></br>
                <a className="ik" href="https://alison.com/course/financial-literacy">Financial Literacy</a>
                <br></br>
                <a className="ik" href="https://www.edx.org/course/disciplined-approach-to-social-entrepreneurship">Digital Entrepreneurship</a>
             </div>
             <div>
               <h2 className="subH U">Useful Resourses</h2>
               <a className="ik" href="https://alison.com/courses/personal-development">Alison Personal Development</a>
               <br></br>
               <a className="ik" href="hhttps://www.skillshare.com/">Skillshare</a>
               <br></br>
               <a className="ik" href="https://www.developgoodhabits.com/personal-development-books/">Personal development books</a>
               <br></br>
               <a className="ik" href="https://docs.unity3d.com/Manual/index.html">Unity docs</a>
               <br></br>
               <a className="ik" href="https://docs.unrealengine.com/en-US/index.html">Unreal docs</a>
               <br></br>
               <a className="ik" href="https://www.pygame.org/docs/">Pygame docs</a>
             </div>
          </div>
          <div className="foottag">Learning never stops; so always be curious -<a className="ik" href="https://www.facebook.com/dev.trex.90">Dev-T-rex</a></div>
          <Footer/>
      </div>
     );
  }    
 }

 export default FreeCourse