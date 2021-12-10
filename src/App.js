import './Css/style.css';
import {Header} from './Components/Header';
import Aboutme from './Components/Aboutme';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Projects from './Components/Projects';



function App() {
 
 const name="John doe"
 const title="GOMYCODE 2020"
  return (
    <div className="App">
   
        <Header name={name} />
        <Aboutme name={name}   />
       
      
        <Projects/>
        <Contact/>
        <Footer title={title}/>



    </div>
  );
}

export default App;




/* import './App.css';
import Child from './Child';

function App() {

  const number =15
  const title ="Workshop Props"

  const array=["Introduction to React Props",
  "Types of Props", "Children Props", "Destructuring", "PropTypes", "Default Props", "Conditional Rendering", "Handling Events" ]

  const user ={name:"fedi", age:22}

  const Handlealert =(name)=> { alert( `hello ${name}`  )  }
  return (
    <div className="App">

 <Child    title={title}   numberofstudents={number}   array={array}    user={user}   Handlealert={Handlealert}   >


<h1>i am a child props </h1>
<p>i am a child props also</p>

 </Child>
    </div>
  );
}

export default App; */