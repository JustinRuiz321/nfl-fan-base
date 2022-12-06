import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


export default function BlogComponent() {
  const [blog, setBlog] = useState('')


  return (
    <div className='C card'>
      <section className='card-header'>
      <form>
        <div className='blog-m gfont'>
        <label><h2>What's on your mind?</h2></label>
        <textarea
        type="text"
        required
        value={blog}
        onChange={(e) => setBlog(e.target.value)}
        >
        </textarea>
        </div>
        <button className='gfont'>Send</button>
        <section className='card'>
          <h3 className='gfont'>Feed</h3>
        <p className='Bpost-m'>{ blog }</p>
        </section>
      </form>
      </section>
  </div>
  )
}
