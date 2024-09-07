import './App.css';
import Navbar from './components/navBar';
import GoalsTracker from './components/goalsTracker/goalsTracker';

function App() {
  return (
    <div className="App">
      <Navbar />
      <GoalsTracker />
    </div>
  );
}

export default App;
