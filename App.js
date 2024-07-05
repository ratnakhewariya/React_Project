
import './App.css';
import Header from './components/Header';
import Blogs from './components/Blogs';
import Pagination from './components/Pagination';
import { AppContext } from './context/AppContext';
import { useContext } from 'react';
import { useEffect } from 'react';



function App() {
  const {fetchBlogPost}= useContext(AppContext);
  useEffect(()=>{
    fetchBlogPost();
  },[]);

  return (
    <div className="App">
        <Header/>
        <Blogs/>
        <Pagination/>
     </div>
  );
}

export default App;
