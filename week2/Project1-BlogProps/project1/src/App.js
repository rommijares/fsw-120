import logo from './logo.svg';
import './App.css';

import NavBar from './NavBar'
import blogItems from './blogItems'
import BlogPost from './BlogPost'
import Footer from './Footer'

function App() {
  const blogComponents = blogItems.map(function(blog) {
    return (
      <BlogPost title={blog.title} subTitle={blog.subTitle} author={blog.author} date={blog.date}/>
    )
  })
  return (
    <div className="App">
      <NavBar />
      {blogComponents}
      <Footer />
    </div>
  );
}

export default App;
