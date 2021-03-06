import './App.css';
import MathOperaration from './components/operation';
import NavBar from './components/shared/NavBar';
import { OperationProvider } from './context/OperationContext';

function App() {
  return (
    <>
      <NavBar />
      <OperationProvider>
        <div className="container mt-4">
          <MathOperaration />
        </div>
      </OperationProvider>
    </>

  );
}

export default App;
