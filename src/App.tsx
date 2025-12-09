// NOTE: The file is `Dashboard.tsx`, so we import with matching case to avoid
// issues on case-sensitive filesystems or CI.
import { Dashboard } from './pages/Dashboard';
import './App.css';

function App() {
  return (
    <div className="App">
      <Dashboard />
    </div>
  );
}

export default App;