import './App.css';
import Card from './components/Card';

function App() {
  return (
    <div>
      <Card 
        name="khalid"
        role="IT admin"
        desc="at the kabul university"
      />
      <Card 
        name="ali"
        role="staff"
        desc="at the herat university"
      />
    </div>
    
  );
}

export default App;