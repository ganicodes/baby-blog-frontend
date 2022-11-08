import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './write.css'
import axios from 'axios'
import { useNavigate, useLocation } from 'react-router-dom';


const Write = () => {
    const navigate = useNavigate();
    const state = useLocation().state;
    // console.log(state)
    const [description, setDescription] = useState(state?.desc || "");

    const [file, setFile] = useState(null);

    const [newBlog, setNewBlog] = useState({
        title: state?.title || "",
        category: state?.categories || "",
        author: JSON.parse(localStorage.getItem("user")).userdetails.name || "unknown"
    })

    // console.log(JSON.parse(localStorage.getItem("user")).userdetails.name)

    // const getText = (html) => {
    //     const doc = new DOMParser().parseFromString(html, "text/html")
    //     return doc.body.textContent
    // }

    const onChange = (e) => {
        setNewBlog({ ...newBlog, [e.target.name]: e.target.value });
    }

    const upload = async () => {

        try {
            const formData = new FormData();
            formData.append("file", file);
            const { data } = await axios.post("/upload", formData);
            // console.log(data)
            return data.filePath;
        } catch (error) {
            console.log(error)
        }

    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        const imageURL = await upload();
        // const newDesc = getText(description);

        try {
            const { data } = state ? await axios.put(`/posts/${state._id}`, {
                title: newBlog.title,
                desc: description,
                categories: newBlog.category,
                photo: file ? imageURL : "",
                author: newBlog.author
            }) : await axios.post("/posts", {
                title: newBlog.title,
                desc: description,
                categories: newBlog.category,
                photo: file ? imageURL : "",
                author: newBlog.author
            })

            console.log(data);
            navigate("/");
        } catch (error) {
            console.log(error.message)
        }
    }

    return (

        <div className="wrapper">
            <section>
                <form onSubmit={handleSubmit} className="wrapper--singlePost">
                    <div className="wrapper--blog">
                        <input type="text" value={newBlog.title} name="title" placeholder="Title" className="write--title" onChange={onChange} />
                        <div className="write--editor">
                            <ReactQuill className="editor" theme="snow" value={description} onChange={setDescription} />
                        </div>
                    </div>
                    <div className="wrapper--similiar-posts">
                        <div className="write--options">
                            <h2>Publish</h2>
                            <span> <b>Status:</b> Draft</span>
                            <span> <b>Visibility:</b> Public</span>
                            <div className="">
                                <label className='file--label' htmlFor="file">Upload image</label>
                                <input style={{ display: "none" }} type="file" name="file" onChange={e => setFile(e.target.files[0])} id="file" />
                            </div>
                            <div className="write--options-cta">
                                <button className="cta">Save as draft</button>
                                <button className="cta cta-primary">Publish</button>
                            </div>
                        </div>
                        <div className="write--options">
                            <h2>Category</h2>
                            <div className="categories">
                                <input type="radio" name="category" value="science" id="science" onChange={onChange} checked={newBlog.category === "science"} />
                                <label htmlFor="science">Science</label>
                            </div>
                            <div className="categories">
                                <input type="radio" name="category" value="tech" id="tech" onChange={onChange} checked={newBlog.category === "tech"} />
                                <label htmlFor="tech">Tech</label>
                            </div>
                            <div className="categories">
                                <input type="radio" name="category" value="art" id="art" onChange={onChange} checked={newBlog.category === "art"} />
                                <label htmlFor="art">Art</label>
                            </div>
                            <div className="categories">
                                <input type="radio" name="category" value="food" id="food" onChange={onChange} checked={newBlog.category === "food"} />
                                <label htmlFor="food">Food</label>
                            </div>
                            <div className="categories">
                                <input type="radio" name="category" value="travel" id="travel" onChange={onChange} checked={newBlog.category === "travel"} />
                                <label htmlFor="travel">Travel</label>
                            </div>
                            <div className="categories">
                                <input type="radio" name="category" value="sport" id="sport" onChange={onChange} checked={newBlog.category === "sport"} />
                                <label htmlFor="sport">Sports</label>
                            </div>
                            <div className="categories">
                                <input type="radio" name="category" value="cinema" id="cinema" onChange={onChange} checked={newBlog.category === "cinema"} />
                                <label htmlFor="cinema">Cinema</label>
                            </div>
                            <div className="categories">
                                <input type="radio" name="category" value="design" id="design" onChange={onChange} checked={newBlog.category === "design"} />
                                <label htmlFor="design">Design</label>
                            </div>
                        </div>
                    </div>
                </form>
            </section>
        </div>

    )
}

export default Write
