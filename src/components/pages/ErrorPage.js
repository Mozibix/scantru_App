import React from "react";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import img from "../../images/errorpic.png";
import "../../styles/errorpage.scss";

const style = {
  color: "white",
  backgroundColor: "black",
};
const styles = {
  color: "black",
  backgroundColor: "#c6d3e7",
};

const ErrorPage = () => {
  return (
    <>
      <div className="errorpage">
        <div className="errorpage_inner">
          <div className="top_sec">
            <div className="pic_sec">
              <img src={img} alt="img" />
            </div>
          </div>
          <div className="bottom_sec">
            <div className="bottom_sec_inner">
              <div className="header_text">
                <p>This Page Could not be found</p>
              </div>

              <div className="contents">
                <p>
                  We are sorry . But the page you are looking for is not
                  available.
                  <br /> Perharps you can try a new search
                </p>
              </div>

              <div className="down_contents">
                <input
                  type="text"
                  name="type-here"
                  placeholder="Type Here..."
                  className="input"
                />

                <div className="button_sec">
                  <button className="search-btn">
                    Search{" "}
                    <span>
                      <AiOutlineArrowRight style={style} />
                    </span>{" "}
                  </button>
                  <button className="back-btn">
                    Back to Home{" "}
                    <span>
                      <AiOutlineArrowLeft style={styles} />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
