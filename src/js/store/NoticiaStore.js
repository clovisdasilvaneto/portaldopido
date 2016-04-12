import { EventEmitter } from "events";
import _ from 'lodash';

import dispatcher from "./dispatcher";

class NoticiaStore extends EventEmitter {
  constructor(){
    super();

    this._news = [{
			id: Date.now(),
			tag: "teste de categoria mais uma vez",
			title: "Cardozo diz que impeachment foi aberto por 'retaliação' e que não houve crime",
			text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit"
		},{
			id: Date.now(),
			tag: "outro",
			title: "Cardozo diz que impeachment foi aberto por 'retaliação' e que não houve crime",
			text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
			image: "http://s2.glbimg.com/N3WsBs_Pv4uuCGVUbhZMtmpKy2w=/360x171/middle/http://s2.glbimg.com/LRwgt-9QXZFZ9hWKYh8JEpcbXcs=/620x465/s.glbimg.com/jo/g1/f/original/2016/04/04/tereza_1lOgW65.jpg"
		},{
			id: Date.now(),
			tag: "novo",
			title: "Mulher chora ao ver marido ferido baleado na rua",
			text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
			image: "http://s2.glbimg.com/N3WsBs_Pv4uuCGVUbhZMtmpKy2w=/360x171/middle/http://s2.glbimg.com/LRwgt-9QXZFZ9hWKYh8JEpcbXcs=/620x465/s.glbimg.com/jo/g1/f/original/2016/04/04/tereza_1lOgW65.jpg"
		}];
  }

  getAll(){
    return this._news;
  }

	findById(id){
		console.log(_.findIndex(this._news, ['id', id]))
		return _.findIndex(this._news, ['id', id]);
	}

	handleActions(resp){
		switch (resp.type) {

			case "CREATE": {
			}

			case "FIND": {
				if(resp.id){
					//isSingle
					return this.findById(resp.id)
				}else {
					return this.getAll();
				}
			}

			case "UPDATE": {
			}

			case "DELETE": {
			}
		}
	}
}

const noticiaStore = new NoticiaStore;

dispatcher.register(noticiaStore.handleActions.bind(noticiaStore));
window.dispatcher = dispatcher;

export default noticiaStore;
