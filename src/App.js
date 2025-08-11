import './App.css';
import ProfileImg from './components/ProfileImg';
import Title from './components/Title';
import Role from './components/Role';
import Description from './components/Description';
import SocialLinks from './components/SocialLinks';

function App() {
  return (
    <div className="card">
      <ProfileImg />
      <Title />
      <Role />
      <Description />
      <SocialLinks />
    </div>
  );
}

export default App;