import React from "react";

export default class ComentsItem extends React.Component{
  render(){
		const {
			text,
			user,
			id
		} = this.props;

		return (
			<div>
				<ul class="qo">
					<li class="qf">
						<a class="qj" href="#">
							<img class="qh cu" src={user.image} />
						</a>
						<div class="qg">
							<strong>{user.name}: </strong>
							{text}
						</div>
					</li>
				</ul>
			</div>
		)
  }
}
