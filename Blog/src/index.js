import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import logoImageTest from "./image/logo.png";
import blogImageTest from "./image/logo.png";

const root = ReactDOM.createRoot(document.getElementById("root"));








function Blog() {
  // State variables
  const [logoImage] = useState(logoImageTest);
  const [blogPosts, setBlogPosts] = useState([]);
  const [blogTitle, setBlogTitle] = useState("");
  const [blogNote, setBlogNote] = useState("");
  const [addBlog, setAddBlog] = useState(false);
  const [bannerVisible, setBannerVisible] = useState(true);
  const [blogCategory, setBlogCategory] = useState("Add your blog category");
  const [blogTag, setBlogTag] = useState("Add a short and clear message to your audience");
  const [isContentEditable, setIsContentEditable] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [deleteBlog, setDeleteBlog] = useState(false);
  const [blogNumber, setBlogNumber] = useState('');

  // Event handlers
  function handleTitleChange(event) {
    setBlogTitle(event.target.value);
  }

  function handleNoteChange(event) {
    setBlogNote(event.target.value);
  }

  function handleEditCategory(event) {
    setBlogCategory(event.target.innerText);
  }

  function handleEditTag(event) {
    setBlogTag(event.target.innerText);
  }

  function handleAddBlog() {
    setBannerVisible(false);
    setAddBlog(true);
  }

  function handlePublish() {
    if (!blogTitle || !blogNote || !blogNumber ) {
      alert("Please enter both a title and content!");
      return;
    }

    setBlogPosts([...blogPosts, { title: blogTitle, note: blogNote, id:blogNumber }]);
    setBlogTitle(""); // Clear input
    setBlogNote("");  // Clear input
    setBlogNumber('');
    setBannerVisible(true);
    setAddBlog(false);
  }
  function handleDelete(action){
    return setBlogPosts((prevPosts) => prevPosts.filter((post) => post.id !== action.id));
    

  }
  function handleEdit(action){
    

  }
function handleClicked(){
  return(
    <>
   {blogPosts.map((post, index) => (
            <div key={index} className="blog-card">
              <div className="blog-image">
                <img className="blog-im" src={blogImageTest} alt="blog" />
              </div>
              <div className="blog-note">
                <h2>{post.id} {post.title}</h2>
                <p>{post.note}</p>
              </div>
            </div>
          ))}
       <button
       onClick={()=>handleDelete({id:blogNumber})}
       >Delete</button>
       <button
       onClick={()=>handleEdit({id:blogNumber})}
       >Edit</button>
    </>
 

  );
}
  

  return (
    <div className="container">
      {/* Navigation Bar */}
      <div className="nav-bar">
        <div className="logo">
          <img src={logoImage} alt="logo" />
        </div>
        <div className="navigation-section">
          <div className="nav-list">
            <ul>
              <a href="#"><li>Home</li></a>
              <a href="#"><li>Blog</li></a>
              <a href="#"><li>About Us</li></a>
              <a href="#"><li>Contact</li></a>
            </ul>
          </div>
          <div className="sign">
            <a href="#">Sign Up</a>
          </div>
        </div>
      </div>

      {/* Blog Banner */}
      {bannerVisible && (
        <div className="blog-banner">
          <h1
            contentEditable={isContentEditable}
            onBlur={handleEditCategory}
            onClick={() => setIsContentEditable(true)}
          >
            {blogCategory}
          </h1>
          <p
            contentEditable={isContentEditable}
            onBlur={handleEditTag}
            onClick={() => setIsContentEditable(true)}
          >
            {blogTag}
          </p>
        </div>
      )}

      {/* Blog Post List */}
      {blogPosts.length > 0 && (
        <div className="published-blogs"
        onClick={handleClicked}
        >
          {blogPosts.map((post, index) => (
            <div key={index} className="blog-card">
              <div className="blog-image">
                <img className="blog-im" src={blogImageTest} alt="blog" />
              </div>
              <div className="blog-note">
                <h2>{post.id} {post.title}</h2>
                <p>{post.note}</p>
              </div>
              <button onClick={() => handleDelete({ id: post.id })}>Delete</button>
              <button onClick={() => handleEdit({ id: post.id })}>Edit</button>
            </div>
          ))}
        </div>
      )}

      {/* Manage Blog Section */}
      {!addBlog && (
        <div
          className="blog-content"
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
          onClick={handleAddBlog}
        >
          {hovering && (
            <div className="overlay-text">
              <h2>Add New Post</h2>
            </div>
          )}
           <div className="blog-cardAdd">
          <div className="blog-image">
            <img className="blog-im" src={blogImageTest} alt="blog" />
          </div>
            <p className="blog-note">
            Contrary to popular belief, Lorem Ipsum is not simply random text. 
            It has roots in a piece of classical Latin literature from 45 BC, 
            making it over 2000 years old. Richard McClintock, a Latin professor 
            at Hampden-Sydney College in Virginia, looked up one of the more obscure 
            Latin words, consectetur, from a Lorem Ipsum passage, and going through the 
            cites of the word in classical literature, discovered the undoubtable source. 
            Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et 
            Malorum" The Extremes of Good and Evil by Cicero, written in 45 BC. This book
             is a treatise on the theory of ethics, very popular during the Renaissance. 
             The first line of Lorem Ipsum, 
            "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

            </p>
            </div>
        </div>
      )}

      {/* Add Blog Section */}
      {addBlog && (
        <div className="blog-add">
          <input
            className="blog-titles"
            type="text"
            value={blogTitle}
            placeholder="Add your blog title"
            onChange={handleTitleChange}
          />
          <input
            className="blog-Numbeer"
            type="text"
            value={blogNumber}
            placeholder="add blog number"
            onChange={(event)=>setBlogNumber(event.target.value)}
          />
          <textarea
            className="text-area"
            placeholder="Add your blog content"
            value={blogNote}
            onChange={handleNoteChange}
          ></textarea>
          <div className="add-btn">
            <button className="addBlog-btn">
              <i className="fa-solid fa-photo-film"></i>
            </button>
            <button className="publish-btn" onClick={handlePublish}>
              Publish
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer>
        <ul><i className="fa-brands fa-facebook"></i></ul>
        <ul><i className="fa-brands fa-square-twitter"></i></ul>
        <ul><i className="fa-brands fa-tiktok"></i></ul>
        <ul><i className="fa-brands fa-instagram"></i></ul>
      </footer>
    </div>
  );
}

root.render(<Blog />);


