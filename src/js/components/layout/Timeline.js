import React from "react";
import PostStore from "../../store/postStore";
import PostItem from "../UI/PostItem";
import * as PostActions from "../../actions/PostActions";
import ComentsItem from "../UI/ComentsItem";

export default class Timeline extends React.Component {
  constructor(){
		super();

		this.state = {
			posts: {
				docs: [],
				page: 0
			},
			timelinePosts: []
		}

		this.addInfiniteScroll(200);
		this.getPosts(1);
  }

	addInfiniteScroll(){
		let instance = this;
		let calc;

		$(window).scroll(function(){
				calc = ($(document).height() - $(window).height());
				if  ($(window).scrollTop() == calc ||  calc <= 0){
					instance.getPosts(parseInt(instance.state.posts.page)+1);
				}
		});
	}

	getPosts(page){
		let instance = this;

		PostActions.findAll({
				page: page
			}, function(resp){
			instance.setState({
				posts: resp
			})
		});
	}

	formatPosts(posts, timelinePosts){
		let data;
		let comments;
		let key;
		let timelineLength = timelinePosts.length-1;

		posts.map((post, i) => {
				data = {
						id: post.id,
						image: post.images.standard_resolution.url,
						text: post.caption.text || "",
						videos: post.videos,
						user: {
							name: post.user.full_name,
							image: post.user.profile_picture
						}
				}
				// coments = post.comments.map((coment, i) => {
				// 	return <ComentsItem key={i} {...coment} />
				// })

				key = i + timelineLength;

        timelinePosts.push(<PostItem key={key} {...data}></PostItem>);
    });

		return timelinePosts;
	}

  render(){
    let posts = this.state.posts.docs;
		let timelinePosts = this.state.timelinePosts;

		if(posts.length){
			timelinePosts = this.formatPosts(posts, timelinePosts);
		}else {
			timelinePosts = "Carregando timeline";
		}

    return (
      <div>
				<div class="gz">
					<div class="ca qo anx">

						<div class="qf b aml">
							<div class="input-group">
								<input type="text" class="form-control" placeholder="Message" />
								<div class="fj">
									<button type="button" class="cg fm">
										<span class="h xi"></span>
									</button>
								</div>
							</div>
						</div>

						{timelinePosts}

					</div>
				</div>
      </div>
    )
  }
}
