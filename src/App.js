import logo from './logo.svg';
import './App.css';
import CallingUseFetch from './components/UseFetchCustomHook/CallingUseFetch';
import CallingOnClick from './components/UseOnClickOutside/CallingOnClick';
import UseWindowResize from './components/UseWindowResize/UseWindowResize';
import ScrollToTopAndBottom from './components/ScrollToTopAndBottom/ScrollToTopAndBottom';
import ScrollToParticularSection from './components/ScrollToParticularSection/ScrollToParticularSection';
import Accordion from './components/Accordion/Accordion';

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
      {/* <ScrollToTopAndBottom/> */}

      {/* Hook to scroll to a particular section */}
      {/* <ScrollToParticularSection/> */}

      {/* Accordion  */}
      <Accordion/>
      
    </div>
  );
}

export default App;
