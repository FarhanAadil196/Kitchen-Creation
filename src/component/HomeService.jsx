import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
.services{
    width: 100%;
    display: flex;
    justify-content: center;
    background-color:hsl(90deg 42% 52% / 16%);
    align-items: center;
    flex-direction: column;
    padding: 30px 0;
    gap: 10px;
    h2{
        // color: #5db996;
    }
        .service-c{
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            padding:10px;
            gap: 10px;
        }
    .service-items{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 10px;
        width: 290px;    
        img{
            height: 100px;
            object-fit: contain;
        }
            a{
            color: #5db996;
            text-decoration: none;
            font-size: 1.2rem;
            font-weight: bold;
        }
            p{
            font-size: .8rem;
            }
}
}
`;
const Servicedata = [
    {
        id: 1,
        image: './service4.png',
        service: "Quality Food",
        content: "Our food is made with love and care",
        link: "Learn More"
    },
    {
        id: 2,
        image: '../service3.png',
        service: "Fast Delivery",
        content: "fast and reliable delivery at your door",
        link: "Learn More"
    },
    {
        id: 3,
        image: '../service2.png',
        service: "Cash On Delivery",
        content: "cash on delivery available at your doorstep",
        link: "Learn More"
    },
    {
        id: 4,
        image: '../service1.png',
        service: "CheckOut",
        content: "Checkout with ease and convenience",
        link: "Learn More"
    }
]
function HomeService() {
  return (
    <Wrapper>
        <div className="services">
            <h2>Services</h2>
            <div className="service-c">
                {Servicedata.map((item) => (
                    <div className="service-items" key={item.id}>
                        <img src={item.image} alt={item.service} />
                        <h3>{item.service}</h3>
                        <p>{item.content}</p>
                        <a href="#">{item.link}</a>
                    </div>
                ))}
            </div>
        </div>
    </Wrapper>
  )
}

export default HomeService