import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import NavBarDesktop from "../components/NavBarDesktop";
import RectangleComponent1 from "../components/RectangleComponent1";
import LogoTicker1 from "../components/LogoTicker1";
import FrameComponent6 from "../components/FrameComponent6";
import FrameComponent5 from "../components/FrameComponent5";
import Product from "../components/Product";
import FAQs1 from "../components/FAQs1";
import FrameComponent4 from "../components/FrameComponent4";
import FooterS from "../components/FooterS";
import "./Desktop2.css";

const Desktop2 = () => {
  return (
    <div className="desktop4">
      <div className="desktop-inner" />
      <div className="stack2">
        <div className="bar">
          <div className="this-page-is-included-in-a-fre-parent">
            <div className="this-page-is">
              This page is included in a free SaaS Website Kit.
            </div>
            <div className="view-the-complete-kit-parent">
              <div className="view-the-complete">View the complete Kit</div>
              <img className="icons" alt="" src="/icons.svg" />
            </div>
          </div>
        </div>
        <NavBarDesktop />
        <div className="hero2">
          <div className="rectangle-container">
            <RectangleComponent1 />
            <div className="ellipse-div" />
            <div className="hero-content2">
              <div className="tag">
                <div className="version-20-is-here-parent">
                  <div className="version-20-is">Version 2.0 is here</div>
                  <div className="read-more-parent">
                    <div className="read-more">Read more</div>
                    <img className="icons" alt="" src="/icons1.svg" />
                  </div>
                </div>
              </div>
              <b className="h12">
                <p className="one-task2">One Task</p>
                <p className="one-task2">at a Time</p>
              </b>
              <div className="body5">
                Celebrate the joy of accomplishment with an app designed to
                track your progress, motivate your efforts, and celebrate your
                successes.
              </div>
             
              <Button variant="light" >Get for free</Button>
          
            </div>
            <img className="cursor-1-icon2" alt="" src="/cursor-1@2x.png" />
            <img className="cursor-2-icon2" alt="" src="/cursor-2@2x.png" />
            <img className="message-2-icon2" alt="" src="/message-2@2x.png" />
            <img className="message-1-icon2" alt="" src="/message-1@2x.png" />
          </div>
        </div>
        <LogoTicker1 />
        <div className="grid2">
          <div className="frame-parent3">
            <div className="frame-wrapper3">
              <FrameComponent6 />
            </div>
            <FrameComponent5 />
          </div>
        </div>
        <Product />
        <div className="faq2">
          <b className="h25">Frequently asked questions</b>
          <FAQs1 />
        </div>
        <div className="sign-up2">
          <div className="sign-up-inner1">
            <FrameComponent4 />
          </div>
          <img className="emojistar-1-icon2" alt="" src="/emojistar-1@2x.png" />
          <img className="helix2-1-icon2" alt="" src="/helix2-1@2x.png" />
        </div>
        <FooterS />
      </div>
    </div>
  );
};

export default Desktop2;
