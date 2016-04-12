import { EventEmitter } from "events";
import _ from 'lodash';
import dispatcher from "./dispatcher";

import Manifest from "../config/Manifest";

class PostStore extends EventEmitter {
  constructor(){
    super();

    this._posts = [{
			id: Date.now(),
			user: {
				id: Date.now(),
				name: "Mark Otto",
				image: "assets/img/avatar-mdo.png"
			},
			text: "Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.",
			comments: [{
				user: {
					id: Date.now(),
					name: "Mark Otto",
					image: "assets/img/avatar-mdo.png"
				},
				text: "Donec id elit non mi porta gravida at eget metus. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec ullamcorper nulla non metus auctor fringilla. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Sed posuere consectetur est at lobortis."
			}],
			image: "assets/img/instagram_3.jpg"
		}];
  }

  getAll(){
    return this._posts;
  }

	findById(id){
		console.log(_.findIndex(this._posts, ['id', id]))
		return _.findIndex(this._posts, ['id', id]);
	}

	handleActions(data){
		const Posts = Manifest.getData().Posts;
		switch (data.type) {

			case "CREATE": {
			}

			case "FIND": {
				if(data.id){
					//isSingle
					return this.findById(data.id)
				}else {
					return Posts.all({page: data.page},function(response) {
					  return data.callback(response.data.data)
					}).then(function(response) {
					  console.log(response);
					});
				}
			}

			case "UPDATE": {
			}

			case "DELETE": {
			}
		}
	}
}

const postStore = new PostStore;

dispatcher.register(postStore.handleActions.bind(postStore));
window.dispatcher = dispatcher;

export default postStore;
