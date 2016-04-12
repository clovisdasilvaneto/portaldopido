import React from "react";
import MenuIco from "../UI/MenuIco";

export default class Header extends React.Component{
  render(){
    return (
      <div>
      <nav class="ck pc os app-navbar pd-fluid">
        <div class="by">
          <div class="or">
            <button type="button" class="ou collapsed" data-toggle="collapse" data-target="#navbar-collapse-main">
              <span class="cv">Toggle navigation</span>
              <span class="ov"></span>
              <span class="ov"></span>
              <span class="ov"></span>
            </button>
            <a class="e" href="../index.html">
              <img src="assets/img/brand-white.png" alt="brand" />
            </a>
          </div>
          <div class="f collapse" id="navbar-collapse-main">

              <ul class="nav navbar-nav ss">
                <li>
                  <a href="#/home">Home</a>
                </li>
              </ul>

              <ul class="nav navbar-nav og ale ss">
                <li>
                  <a class="g" href="../notifications/index.html">
                    <span class="h ws"></span>
                  </a>
                </li>
                <li>
                  <button class="cg fm ox anl" data-toggle="popover" data-original-title="" title="">
                    <img class="cu" src="assets/img/avatar-dhg.png" />
                  </button>
                </li>
              </ul>

              <form class="ow og i" role="search">
                <div class="et">
                  <input type="text" class="form-control" data-action="grow" placeholder="Search" />
                </div>
              </form>
            </div>
        </div>
      </nav>
      </div>
    )
  }
}
