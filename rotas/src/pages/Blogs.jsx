import React from 'react';

const blogs = [
  { id: 1, title: "Acerte o filme", url: "https://likewisetv.com/arcade/mooveedle" },
  { id: 2, title: "Clique e se surpreenda", url: "https://theuselessweb.com/" },
  { id: 3, title: "Brigue com os seus amigos e adivinhe a música", url: "https://songtrivia2.io/pt" },
];

const Blogs = () => {
  return (
    <div>
      <h1>Blogs</h1>
      <ul>
        {blogs.map(blog => (
          <li key={blog.id}>
            <a href={blog.url} target="_blank" rel="noopener noreferrer">
              {blog.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blogs;

