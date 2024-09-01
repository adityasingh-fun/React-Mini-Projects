import logo from './logo.svg';
import './App.css';
import CallingUseFetch from './components/UseFetchCustomHook/CallingUseFetch';

function App() {
  return (
    <div className="App">
      <CallingUseFetch url={'https://dummyjson.com/products'} />
      
    </div>
  );
}

export default App;
