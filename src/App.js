import logo from './logo.svg';
import './App.css';
import CallingUseFetch from './components/UseFetchCustomHook/CallingUseFetch';
import CallingOnClick from './components/UseOnClickOutside/CallingOnClick';
import UseWindowResize from './components/UseWindowResize/UseWindowResize';
import ScrollToTopAndBottom from './components/ScrollToTopAndBottom/ScrollToTopAndBottom';

function App() {
  return (
    <div className="App">

      {/* Custom hook to fetch documents */}
      {/* <CallingUseFetch /> */}

      {/* Custom hook create onClick Outside */}
      {/* <CallingOnClick/> */}

      {/* Custom hook to automatically change dimensions when changin window size */}
      {/* <UseWindowResize/> */}

      {/* Hook to scroll to top and bottom of the page */}
      <ScrollToTopAndBottom/>
      
    </div>
  );
}

export default App;
