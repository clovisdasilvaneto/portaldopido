import React from "react";
import DestaqueItem from "../UI/DestaqueItem";
import DestaqueImageItem from "../UI/DestaqueImageItem";
import NoticiaStore from "../../store/NoticiaStore";

export default class Header extends React.Component{
  constructor(){
    super();

    this.state = {
      news: NoticiaStore.getAll()
    }
  }

  render(){
    const news = this.state.news;
    const articles = news.map((article, i) => {
      let link = "#/news/"+article.id,
          className;

      if(i == 2){
        className = 'right-title';
      }

      if(!i){
        return <DestaqueItem key={i} index={i} {...article} />
      }else{
        return <DestaqueImageItem className={className} key={i} index={i} {...article} />
      }
    });

    return (
      <div>
        <div class="col-md-6 panel panel-default pd-box-fluid">
          {articles[0]}
        </div>

        <div class="col-md-6">
            {articles[1]}
            {articles[2]}
        </div>
      </div>
    )
  }
}
