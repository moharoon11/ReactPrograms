import { useState } from 'react';
import BlogList from './BlogList';


const Home = () => {
    
     const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome Party', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
     ]);

     let index = 0;
     let index1 = 0;

   

    return ( 
        <div className="home">
           <BlogList blogs={ blogs } title="All Blogs!" />
        </div> 
     );
}
 
export default Home;