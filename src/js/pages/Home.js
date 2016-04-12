import React from "react";
import Timeline from "../components/layout/Timeline";

export default class Home extends React.Component {
  render(){
    return (
      <div class="container-fluid pd-fluid">
        <div class="col-lg-12">

					<div class="gn">
			      <div class="qv rc aog alu">
			        <div class="qx iceland-bg"></div>
			        <div class="qw dj">
			          <a href="profile/index.html">
			            <img class="aoh" src="assets/img/avatar-dhg.png" />
			          </a>

			          <h5 class="qy">
			            <a class="aku" href="profile/index.html">Dave Gamache</a>
			          </h5>

			          <p class="alu">I wish i was a little bit taller, wish i was a baller, wish i had a girl…&nbsp;also.</p>

			          <ul class="aoi">
			            <li class="aoj">
			              <a href="#userModal" class="aku" data-toggle="modal">
			                Friends
			                <h5 class="ali">12M</h5>
			              </a>
			            </li>

			            <li class="aoj">
			              <a href="#userModal" class="aku" data-toggle="modal">
			                Enemies
			                <h5 class="ali">1</h5>
			              </a>
			            </li>
			          </ul>
			        </div>
			      </div>
					</div>

					<Timeline />
        </div>
      </div>
    )
  }
}
