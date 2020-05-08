import React from "react";
import "./landMain.scss";
import { ClimbingBoxLoader } from "react-spinners";
import { RiEmotionHappyLine } from "react-icons/ri";
import { GrNext } from "react-icons/gr";

import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

function LandMain(props) {
  return (
    <div className="" id="mainGrid">
      {" "}
      <div id="imglanding" className="f">
        <img
          id="mainImg"
          srcset="https://cdn.vox-cdn.com/thumbor/CFZlCiCcR38-_5a4JnS647xxJ78=/0x0:640x427/320x213/filters:focal(0x0:640x427)/cdn.vox-cdn.com/uploads/chorus_image/image/49494383/code.0.jpg 320w, https://cdn.vox-cdn.com/thumbor/2z0tiiJz-SO5IxD51t4GZyGNsB4=/0x0:640x427/620x413/filters:focal(0x0:640x427)/cdn.vox-cdn.com/uploads/chorus_image/image/49494383/code.0.jpg 620w, https://cdn.vox-cdn.com/thumbor/bmdHNgVaiJsgXgwSF3g-yVLudrk=/0x0:640x427/920x613/filters:focal(0x0:640x427)/cdn.vox-cdn.com/uploads/chorus_image/image/49494383/code.0.jpg 920w, https://cdn.vox-cdn.com/thumbor/jQzpUfqO-dngvSXISeaTA8_OnR8=/0x0:640x427/1220x813/filters:focal(0x0:640x427)/cdn.vox-cdn.com/uploads/chorus_image/image/49494383/code.0.jpg 1220w, https://cdn.vox-cdn.com/thumbor/M6MeG6JMn7KSasPIiNTNB86ii4o=/0x0:640x427/1520x1013/filters:focal(0x0:640x427)/cdn.vox-cdn.com/uploads/chorus_image/image/49494383/code.0.jpg 1520w, https://cdn.vox-cdn.com/thumbor/O6i73FO2uoToTeoMBTNwnbx4Hf8=/0x0:640x427/1820x1213/filters:focal(0x0:640x427)/cdn.vox-cdn.com/uploads/chorus_image/image/49494383/code.0.jpg 1820w, https://cdn.vox-cdn.com/thumbor/UweBNtE-C8-SinPssHFqL_lejQM=/0x0:640x427/2120x1413/filters:focal(0x0:640x427)/cdn.vox-cdn.com/uploads/chorus_image/image/49494383/code.0.jpg 2120w, https://cdn.vox-cdn.com/thumbor/sJNDiGTHaS4sdFaFUpXoo1evbq0=/0x0:640x427/2420x1613/filters:focal(0x0:640x427)/cdn.vox-cdn.com/uploads/chorus_image/image/49494383/code.0.jpg 2420w"
          sizes="(min-width: 800px) 556px, (min-width: 880px) calc(100vw - 334px), 100vw"
          alt=""
          data-upload-width="640"
          src="https://cdn.vox-cdn.com/thumbor/3nC_cQ3WgHtyG3vEgnDw9FFr_FU=/0x0:640x427/1200x800/filters:focal(0x0:640x427)/cdn.vox-cdn.com/uploads/chorus_image/image/49494383/code.0.jpg"
        />
      </div>
      <div className="mainTextContainer ">
        <h1 className="hamid  mt-5 ml-3 mb-5 ">
          {" "}
          Sharpen your coding Skills!{" "}
        </h1>

        <a
          href="/auth"
          className="ml-5 px-3 "
          style={{ textDecoration: "none" }}
        >
          <button
            type="butto"
            className="ml-2 col-4 position-relative btn btn-primary rounded-pill"
          >
            <strong className=""> Get Started!</strong>
          </button>{" "}
        </a>
        <span className=" text-white "> or </span>
        <a
          href="/user"
          className="text-white"
          style={{ textDecoration: "none" }}
        >
          <button type="button" className="btn btn-outline-light ml-3">
            Demo
          </button>{" "}
          >
        </a>
      </div>
    </div>
  );
}
export default LandMain;
