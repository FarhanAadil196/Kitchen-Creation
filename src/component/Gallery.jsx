import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
width: 100%;
columns:250px;
padding:10px;
img{
width:100%;}
`;
const gallerydata = [
    {
        "id": 1,
        "image": "./chana-chaat.jpg"
        },
        {   
            "id": 2,
            "image": "./blog1.jfif"
            },
            {
                "id": 3,
                "image": "./blog2.jfif"
                },
                {
                    "id": 4,
                    "image": "./aboutimg1.jpg"
                    },
                    {
                        "id": 5,
                        "image": "./aboutimg2.jpg"
                        },
                        {
                            "id": 6,
                            "image": "./veg sandwich.jpg"
                            }
                            
]
function Gallery() {
  return (
    <Wrapper>

        {gallerydata.map((item) => (
            <div key={item.id} className="gallery-item">
                <img src={item.image} alt="Gallery Image" />
            </div>
        ))}
        <div className="gallery-item">
        </div>
    </Wrapper>
  )
}

export default Gallery