import logo from './logo.svg';
import './App.css';
import CallingUseFetch from './components/UseFetchCustomHook/CallingUseFetch';
import CallingOnClick from './components/UseOnClickOutside/CallingOnClick';
import UseWindowResize from './components/UseWindowResize/UseWindowResize';

function App() {
  return (
    <div className="App">

      {/* Custom hook to fetch documents */}
      {/* <CallingUseFetch url={'https://dummyjson.com/products'} /> */}

      {/* Custom hook create onClick Outside */}
      {/* <CallingOnClick/> */}

      {/* Custom hook to automatically change dimensions when changin window size */}
      <UseWindowResize/>
      
    </div>
  );
}

export default App;
