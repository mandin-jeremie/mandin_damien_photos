import React from 'react';
import { Link } from "react-router-dom";
import SwiperFade from '../../components/SwiperFade';
import linkBaby from '../../assets/images/bebe_image.png';
import linkpregnante from '../../assets/images/grossesse_image.png';
import linkMariage from '../../assets/images/mariage_image.png';
import linkPortrait from '../../assets/images/portrait_image.png';
import imgHover from '../../assets/images/Group23.png';
import './home.scss'

const Home = ({
  Desktop,
  Tablet,
  Mobile
}) => {
  return (
    <div>
      <SwiperFade />
      <Desktop>
        <div className='containerHome'>
          <h1 className='titlePage'>Capturez vos moments les plus précieux</h1>
          <div className='border'></div>
          <div className='blocLinkHeader'>
            <Link className='imgBlock' to="/portefolio/baby">
              <img className='imgLink' src={linkBaby} />
              <div className='blockHover'>
                <img className='imgHover' src={imgHover} />
                <p className='subTitleCard'>Bébé</p>
              </div>
            </Link>
            <Link className='imgBlock' to="/portefolio/pregnante">
              <img className='imgLink' src={linkpregnante} />
              <div className='blockHover'>
                <img className='imgHover' src={imgHover} />
                <p className='subTitleCard'>Grossesses</p>
              </div>
            </Link>
            <Link className='imgBlock' to="/portefolio/marriage">
              <img className='imgLink' src={linkMariage} />
              <div className='blockHover'>
                <img className='imgHover' src={imgHover} />
                <p className='subTitleCard'>Mariages</p>
              </div>
            </Link>
            <Link className='imgBlock' to="/portefolio/portraits">
              <img className='imgLink' src={linkPortrait} />
              <div className='blockHover'>
                <img className='imgHover' src={imgHover} />
                <p className='subTitleCard'>Portraits</p>
              </div>
            </Link>
          </div>
        </div>
      </Desktop>
      <Tablet>
        <div className='containerHome'>
          <h1 className='titlePage'>Capturez vos moments les plus précieux</h1>
          <div className='border'></div>
          <div className='blocLinkHeader'>
            <Link className='imgBlock' to="/portefolio/baby">
              <img className='imgLink' src={linkBaby} />
              <div className='blockHover'>
                <img className='imgHover' src={imgHover} />
                <p className='subTitleCard'>Bébé</p>
              </div>
            </Link>
            <Link className='imgBlock' to="/portefolio/pregnante">
              <img className='imgLink' src={linkpregnante} />
              <div className='blockHover'>
                <img className='imgHover' src={imgHover} />
                <p className='subTitleCard'>Grossesses</p>
              </div>
            </Link>
            <Link className='imgBlock' to="/portefolio/marriage">
              <img className='imgLink' src={linkMariage} />
              <div className='blockHover'>
                <img className='imgHover' src={imgHover} />
                <p className='subTitleCard'>Mariages</p>
              </div>
            </Link>
            <Link className='imgBlock' to="/portefolio/portraits">
              <img className='imgLink' src={linkPortrait} />
              <div className='blockHover'>
                <img className='imgHover' src={imgHover} />
                <p className='subTitleCard'>Portraits</p>
              </div>
            </Link>
          </div>
        </div>
      </Tablet>
      <Mobile>
        <div className='containerHomeMobile'>
          <h1 className='titlePageMobile'>Capturez vos moments les plus précieux</h1>
          <div className='borderMobile'></div>
          <div className='blocLinkHeaderMobile'>
            <Link className='imgBlockMobile' to="/portefolio/baby">
              <img className='imgLinkMobile' src={linkBaby} />
              <div className='blockHoverMobile'>
                <img className="imgHoverMobile" src={imgHover} />
                <p className='subTitleCardMobile'>Bébé</p>
              </div>
            </Link>
            <Link className='imgBlockMobile' to="/portefolio/pregnante">
              <img className='imgLinkMobile' src={linkpregnante} />
              <div className='blockHoverMobile'>
                <img className="imgHoverMobile" src={imgHover} />
                <p className='subTitleCardMobile'>Grossesses</p>
              </div>
            </Link>
            <Link className='imgBlockMobile' to="/portefolio/marriage">
              <img className='imgLinkMobile' src={linkMariage} />
              <div className='blockHoverMobile'>
                <img className="imgHoverMobile" src={imgHover} />
                <p className='subTitleCardMobile'>Mariages</p>
              </div>
            </Link>
            <Link className='imgBlockMobile' to="/portefolio/portraits">
              <img className='imgLinkMobile' src={linkPortrait} />
              <div className='blockHoverMobile'>
                <img className="imgHoverMobile" src={imgHover} />
                <p className='subTitleCardMobile'>Portraits</p>
              </div>
            </Link>
          </div>
        </div>
      </Mobile>
    </div>
  );
}

export default Home;