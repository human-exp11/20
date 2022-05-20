
import React, {useState} from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Container from "./components/Container";
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import AboutMe from "./components/AboutMe";




function App() {

  const [currentPage, setCurrentPage] = useState('About');

// This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
const renderPage = () => {
  if (currentPage === 'AboutMe') {
    return <AboutMe />;
  }
  if (currentPage === 'Portfolio') {
    return <Portfolio />;
  }
  if (currentPage === 'Contact') {
    return <Contact />;
  }
  return <Resume />;
};

const handlePageChange = (page) => setCurrentPage(page);


  return (
  <div className="App">
  <header className="App-header">
  <Header handlePageChange={handlePageChange} currentPage={currentPage}/>
  <Container renderPage={renderPage} />
  <Footer />
</header>
  </div>
  );
}
export default App;






// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;