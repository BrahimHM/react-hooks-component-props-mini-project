import Article from "./Article";

function ArticleList (props){
    return (
      <main>
       {props.posts.map((post)=>{
        return <Article title={post.title} 
        date={post.date}
        preview={post.preview} key={post.id} />
       })}
      </main>
    )
}

export default ArticleList;