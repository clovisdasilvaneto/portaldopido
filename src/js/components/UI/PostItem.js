import React from "react";

export default class PostItem extends React.Component{
  render(){
		const {
			image,
			text,
			user,
			id,
			videos,
		} = this.props;

		let imageTag;
		let key = Date.now();

		if(videos.low_bandwidth.url){
				imageTag = <video poster={image} controls='true'><source src={videos.low_bandwidth.url} type="video/mp4" key={key} /></video>
		}else {
				imageTag = <img data-action="zoom" src={image} />
		}

		return (
			<div class="qf b aml overflow">
				<a class="qj" href="#">
					<img class="qh cu" src={user.image} />
				</a>
				<div class="qg">
					<div class="qn">
						<small class="eg dp">34 min</small>
						<h5>{user.name}</h5>
					</div>

					<p>
						{text}
					</p>

					<div class="any" data-grid="images">
						{imageTag}
					</div>
						{this.props.children}
					</div>
				</div>
		)
  }
}
