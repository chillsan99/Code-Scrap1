import React, {useState, useEffect } from 'react';
import Posts from './components/Posts'
import axios from 'axios';
import './App.css';

const App = () => {
    const [post, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    //how many posts per page
    const [postPerPage, setPostsPerPage] = useState(10);

    useEffect(() => {
        const fetchPosts = async() => {
            setLoading(true);
            const res = await.axios.get('');
            setPosts(res.data)
            setLoading(false);
        }

     fetchPosts();
    }, []);

    //Get current posts
    const indexofLast Post = currentPage * postsPerPage;
    const indexofFirstPost = indexOfLastPost - postsPerPage;
    const  currentPosts = post.slice(indexofFirstPost,indexOfLastPost);
    return(
        <div className = 'container mb-5'>
            <h1 className="text-primary mb-3"> My Blog </h1>
            <Posts posts={currentPosts} loading={loading}/>
        </div>
    );
}