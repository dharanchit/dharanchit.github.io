import React from 'react';
import Layout from '../components/Layout';

const Blog = () => {
    return(
        <Layout>
            <div>
                <h1>Post #1 <span style={{ fontSize: '14px',color:'rgba(0,0,0,0.5)' }}>19th July 2022</span> </h1>
            </div>
            
            <p>Built this awesome site with Gatsby</p>
        </Layout>
    );
};

export default Blog;