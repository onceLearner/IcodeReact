import React from "react";
import "./footer.scss";
import { GrTwitter } from "react-icons/gr";
export default function Footer(props) {
  return (
    <div id="footerMainCont">
      <footer>
        <h3 className="h5">
          We Redefine Problem Solving & Comptetive programming
        </h3>

        <ul class="list-inline">
          <a href="https://twitter.com/redaamir972">
            <GrTwitter></GrTwitter>
          </a>
        </ul>
        <p class="copyright">Copyright © 2020 Icode . All Rights Reserved.</p>
      </footer>
    </div>
  );
}
