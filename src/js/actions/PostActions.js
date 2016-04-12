import dispatcher from "../store/dispatcher";

export function create(name){
  dispatcher.dispatch({
    type: "CREATE",
    name,
		callback,
  })
}

export function findAll({id, page}, callback){
  dispatcher.dispatch({
    type: "FIND",
		id,
		page,
		callback,
  });
}
