import React from "react";

export default class DestaqueItem extends React.Component{
  render(){
    const {title, tag, text, id} = this.props;
    const tagLink = '#/noticias/'+tag+'/'+title.replace(/\s+/g, '-')+'?i='+id;
    // const todosClass = location.pathname.match(/^\/todos/) ? "btn active" : "btn";
    // <Link to="/todos" name="todos" class={todosClass} activeClassName="btn btn-warning">todos</Link>
    // console.log(this.props.key)
    // React.Children.forEach(this.props.children, function(child){
    //     console.log(child)
    // });

    return (
        <div class="link-item">
            <a href={tagLink} class="category">{tag}</a>
            <h2 class="title-article">{title}</h2>
            <ul>
              <li>
                  <a href="#/">{text}</a>
              </li>
            </ul>
            {this.props.children}
        </div>
    );
  }
}
