import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Navbar from '../../components/navbar/Navbar'
import './write.css'

const Write = () => {
    const [value, setValue] = useState('');

    return (
        <>
            <Navbar />
            <div className="wrapper">
                <section className="wrapper--singlePost">
                    <div className="wrapper--blog">
                        <input type="text" placeholder='Title' className="write--title" />
                        <div className="write--editor">
                            <ReactQuill className="editor" theme="snow" value={value} onChange={setValue} />
                        </div>
                    </div>
                    <div className="wrapper--similiar-posts">
                        <div className="write--options">
                            <h2>Publish</h2>
                            <span> <b>Status:</b> Draft</span>
                            <span> <b>Visibility:</b> Public</span>
                            <div className="">
                                <label className='file--label' htmlFor="file">Upload image</label>
                                <input style={{ display: "none" }} type="file" name="file" id="file" />
                            </div>
                            <div className="write--options-cta">
                                <button className="cta">Save as draft</button>
                                <button className="cta cta-primary">Publish</button>
                            </div>
                        </div>
                        <div className="write--options">
                            <h2>Category</h2>
                            <div className="categories">
                                <input type="radio" name="category" id="science" />
                                <label htmlFor="science">Science</label>
                            </div>
                            <div className="categories">
                                <input type="radio" name="category" id="tech" />
                                <label htmlFor="tech">Tech</label>
                            </div>
                            <div className="categories">
                                <input type="radio" name="category" id="art" />
                                <label htmlFor="art">Art</label>
                            </div>
                            <div className="categories">
                                <input type="radio" name="category" id="food" />
                                <label htmlFor="food">Food</label>
                            </div>
                            <div className="categories">
                                <input type="radio" name="category" id="sport" />
                                <label htmlFor="sport">Sports</label>
                            </div>
                            <div className="categories">
                                <input type="radio" name="category" id="cinema" />
                                <label htmlFor="cinema">Cinema</label>
                            </div>
                            <div className="categories">
                                <input type="radio" name="category" id="design" />
                                <label htmlFor="design">Design</label>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Write
