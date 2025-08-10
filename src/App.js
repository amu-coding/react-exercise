import './App.css';
import profilepic from './uploads/profilepic.jpg';
import github from './uploads/github.png';
import twitter from './uploads/twitter.png';
import tiktok from './uploads/tiktok.png';
import whatsapp from './uploads/whatsapp.png';

function App() {
  return (
    <div className="card">
      <img src={profilepic} alt="profile"></img>
      <h1>Hi, I'm <span>Shiba</span></h1>
      <p className="role">Front-End Web Developer</p>
      <p className="desc">Specializes in creating responsive, user-friendly interfaces using HTML, CSS, and JavaScript. Focused on delivering seamless user experiences through modern web technologies.</p>
      <div className="social">
        <div className="iconcard">
          <img src={github} alt="github icon"></img>
        </div>
        <div className="iconcard">
          <img src={twitter} alt="twitter icon"></img>
        </div>
        <div className="iconcard">
          <img src={tiktok} alt="tiktok icon"></img>
        </div>
        <div className="iconcard">
          <img src={whatsapp} alt="whatsapp icon"></img>
        </div>
      </div>
    </div>
  );
}

export default App;
