import React from "react";

export default class DestaqueImageItem extends React.Component{
  render(){
    let {location, image, className, tag, title} = this.props;
    let dataImage;
    let imageTag;
    let link = '#/noticias/'+tag+'/'+title.replace(/\s+/g, '-');

    // const todosClass = location.pathname.match(/^\/todos/) ? "btn active" : "btn";
    // <Link to="/todos" name="todos" class={todosClass} activeClassName="btn btn-warning">todos</Link>
    // console.log(this.props.key)
    // React.Children.forEach(this.props.children, function(child){
    //     console.log(child)
    // });

    if(image){
      dataImage = true;
      imageTag = <img class="destaque-item-image" src={image} alt={this.props.title} />
    }

    className += ' destaque-item-image-box';


    return (
        <div class="col-lg-12" class={className} data-image={dataImage}>
          <a href={link}><h3 class="destaque-item-image-title">{title}</h3></a>
          {imageTag}
          {this.props.children}
        </div>
    );
  }
}
