import React from 'react'
import Styled from 'styled-components'

const Wrapper = Styled.div`
.blog-t{
text-align:center;
margin:30px;
}
.home-blog{
display:flex;
align-items:center;
justify-content:center;
flex-wrap:wrap;
width:100%;
padding:30px;
gap:30px;
}
.blog-post{
display:flex;
align-items:center;
justify-content:center;
max-width:300px;
width:100%;
flex-direction:column;
}
.blog-post-image{
width:100%;
display:flex;
justify-content:center;
align-items:center;
}
.blog-post-image img{
     border-radius: 50%;
    height: 150px;
    object-fit: cover;
    width: 150px;
}
.blog-post-content{
width:100%;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
gap:10px;
}
.blog-post-content h2{
text-align:center;
}
.blog-post-content p{
text-align:center;
}
.blog-post-content button{
    background-color: #118B50;
    color: #FBF6E9;
    padding: 10px;
    border-radius: 10px;
    width: auto;
    border: none;
    text-align: center;
    font-size: 14px;
    outline: none;
    cursor:pointer;
}
`;
const Blogdata =  [
  {
    id: 1,
    imgsrc: "../blog1.jfif",
    title: "Blog Post Title",
    content: "Blog post content goes here.",
    link: "Read More",
  },
  {
    id: 2,
    imgsrc: "../blog2.jfif",
    title: "Blog Post Title", 
    content: "Blog post content goes here.",
    link: "Read More",
  },
  {
    id: 3,
    imgsrc: "../blog3.jfif",
    title: "Blog Post Title",
    content: "Blog post content goes here.",
    link: "Read More",
    },
]
function HomeBlog() {
  return (
    <Wrapper>
      <h2 className='blog-t'>Our Blog</h2>
   <div className="home-blog">
   {Blogdata.map((item) => (
  <div key={item.id} className="blog-post">
    <div className="blog-post-image">
      <img src={item.imgsrc} alt="Blog Post Image"/>
    </div>
    <div className="blog-post-content">
      <h2>{item.title}</h2>
      <p>{item.content}</p>
      <a href={item.link}><button>Read More</button></a>
    </div>
  </div>
))}
   </div>
    </Wrapper>
  )
}

export default HomeBlog