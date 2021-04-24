import React, { useEffect } from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  useEffect(() => {
    topFunction();
  }, []);

  return (
    <div className="home">
      <div className="home_container">
        <div className="dance">
          <img className="danceImg" src="/happy.png" alt="" />
        </div>

        <img
          className="home_img"
          src="https://img.wallpapersafari.com/desktop/1920/1080/25/82/1x7cEQ.jpg"
          alt=""
        ></img>
        <div className="home_row_parent">
          <div className="home_row">
            <Product
              id={1}
              title="High-end speakers"
              img="http://pngimg.com/uploads/audio_speakers/audio_speakers_PNG11113.png"
              price={249.99}
              rating={5}
            />
            <Product
              id={2}
              title="Marshall "
              img="https://www.marshallheadphones.com/dw/image/v2/BCQL_PRD/on/demandware.static/-/Sites-zs-master-catalog/default/dw194793cd/images/marshall/speakers/emberton/large/POS_Desktop_Emberton_large-1.png?sw=1120&sh=1120&sm=fit"
              price={349.99}
              rating={5}
            />
            <Product
              id={3}
              title="Bose Ultra X"
              img="http://pngimg.com/uploads/headphones/headphones_PNG101982.png"
              price={349.99}
              rating={5}
            />
          </div>
          <div className="home_row">
            <Product
              id={1}
              title="Multi-Speed mixer"
              img="https://freepngimg.com/thumb/technology/52239-9-mixer-grinder-image-free-download-png-hq.png"
              price={149.99}
              rating={5}
            />
            <Product
              id={2}
              title="BENYAR Premium watch "
              img="https://freepngimg.com/thumb/watch/10-2-watch-png-picture.png"
              price={349.99}
              rating={4}
            />
            <Product
              id={3}
              title="Men X Royal Watch"
              img="https://freepngimg.com/thumb/watch/8-2-watch-free-download-png.png"
              price={129.99}
              rating={5}
            />
          </div>
          <div className="home_row">
            <Product
              id={4}
              title="Brain"
              img="https://api.time.com/wp-content/uploads/2014/05/brain.jpg?w=800&quality=85"
              price={99.99}
              rating={5}
            />
            <Product
              id={5}
              title="Nikon D310 70mm"
              img="https://freepngimg.com/thumb/photo%20camera/30-photo-camera-png-image.png"
              price={1049.99}
              rating={4}
            />
          </div>
          <div className="home_row">
            <Product
              id={6}
              title="Kindess"
              img="https://thumbs.dreamstime.com/z/vector-hand-holds-heart-care-kindness-charity-donation-flat-color-line-icon-vector-hand-holds-heart-care-kindness-charity-donation-159309130.jpg"
              price={0.0}
              rating={4}
            />
            <Product
              id={7}
              title="Honesty"
              img="https://www.wardfamilylawgroup.com/wp-content/uploads/2018/08/Post_83118_Featured-900x400.jpg"
              price={0.0}
              rating={5}
            />
            <Product
              id={8}
              title="Dumbells"
              img="https://www.amazon.ca/images/I/61eRzgL1PlL._AC_SL1200_.jpg"
              price={29.99}
              rating={4}
            />
          </div>
          <div className="home_row">
            <Product
              id={9}
              title="Airbus Z1720"
              img="https://wallpapercave.com/wp/wp4128843.jpg"
              price={199999.99}
              rating={5}
            />
            <Product
              id={10}
              title="Helicopter X820"
              img="https://www.helicopter-industry.com/wp-content/uploads/2021/01/H160-ANH-1280x640.jpg"
              price={540000}
              rating={5}
            />
          </div>
          <div className="home_row">
            <Product
              id={6}
              title="Poseidon Gaming Mouse"
              img="https://freepngimg.com/thumb/computer%20mouse/7-pc-mouse-png-image.png"
              price={95}
              rating={4}
            />
            <Product
              id={7}
              title="Basketball NBA cup 2015"
              img="https://freepngimg.com/thumb/basketball/7-2-basketball-free-download-png.png"
              price={300}
              rating={5}
            />
            <Product
              id={8}
              title="Samsung Xpro D210"
              img="https://freepngimg.com/thumb/computer%20pc/15-computer-desktop-pc-png-image.png"
              price={1229.99}
              rating={4}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
