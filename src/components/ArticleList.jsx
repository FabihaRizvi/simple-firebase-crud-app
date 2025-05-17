function ArticleList({ articles , onDelete}) {
  return (
    <div >
      <h2>Articles</h2>
      {articles.length === 0 ? (
        <p>No articles yet.</p>
      ) : (
        articles.map((article) => (
          <div key={article.id} className="article">
            <h3>{article.title}</h3>
            <p>{article.body}</p>
            <button onClick={() => onDelete(article.id)}>🗑 Delete</button>
          </div>
        ))
      )}
    </div>
  );
}

export default ArticleList;
