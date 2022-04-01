import React from "react";
import "./home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img src="amazon.jpg" alt="" className="home__image" />
        <div className="home__row">
          <Product 
            id="1"
            title="Baby Wipes, Pampers Sensitive Water Based Baby Diaper Wipes, Hypoallergenic "
            price={24.99}
            image="prod12.jpg"
            rating={5}
          />
          <Product
            id="2"
            title="Lenovo Flex 5 Laptop, 14.0' FHD Touch Display, AMD Ryzen 5 5500U, 16GB RAM, 256GB Storage, AMD Radeon"
            price={599.99}
            image="prod7.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="3"
            title="Kanu Surf Boys' Echo Quick Dry UPF 50+ Beach Swim Trunk"
            price={24.99}
            image="amaprod4.jpg"
            rating={5}
          />
          <Product
            id="4"
            title="Sceptre Curved 30' 21:9 Gaming LED Monitor 2560x1080p UltraWide Ultra Slim HDMI "
            price={13.99}
            image="prod10.jpg"
            rating={5}
          />
          <Product
            id="5"
            title="The Children's Place Boys' Basic Jogger"
            price={29.97}
            image="amaprod5.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="6"
            title="Lenovo Flex 5 Laptop, 14.0' FHD Touch Display, AMD Ryzen 5 5500U, 16GB RAM, 256GB Storage, AMD Radeon Graphics, Windows 11...
            Lenovo Flex 5 Laptop, 14.0' FHD Touch Display, AMD Ryzen 5 5500U, 16GB RAM, 256GB Storage, AMD Radeon"
            price={230.99}
            image="prod8.jpg"
            rating={5}
          />
          <Product
            id="7"
            title="VIZIO 70-Inch V-Series 4K UHD LED HDR Smart TV with Voice Remote, Apple AirPlay and Chromecast Built-in, Dolby Vision, HDR10+, HDMI 2.1, IQ Active Processor"
            price={700.99}
            image="prod11.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
