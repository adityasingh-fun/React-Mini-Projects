import logo from './logo.svg';
import './App.css';
import CallingUseFetch from './components/UseFetchCustomHook/CallingUseFetch';
import CallingOnClick from './components/UseOnClickOutside/CallingOnClick';

function App() {
  return (
    <div className="App">
      {/* <CallingUseFetch url={'https://dummyjson.com/products'} /> */}
      <CallingOnClick/>
      
    </div>
  );
}

export default App;
