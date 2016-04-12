import Mappersmith from "mappersmith";

export default class Manifest {
	constructor(){
	}

	static getData(resp){
		const data = {
			host: 'https://caopido-api.herokuapp.com',
			resources: {
				Posts: {
					all:  {method: 'GET', path: '/api/post?page={page}'}
				}
			}
		};

		Mappersmith.Env.USE_PROMISES = true;

		return Mappersmith.forge(data);
	}
}
