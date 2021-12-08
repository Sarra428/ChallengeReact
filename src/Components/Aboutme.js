import image1 from "../Image/John-Doe.jpg"
function Aboutme(){
    return(
        <section id="about-me">
        <h1>
          Hello, my name is
          <span className="rotate text-important">John doe</span>,<br />
          and i make horrible websites.
        </h1>
        <img className="avatar" src={image1} alt="jhon-doe" />
      </section>
    )
    ;
    
    }
    
    export default Aboutme;