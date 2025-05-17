import { useEffect, useState } from 'react';
import './app.css';
import ArticleForm from './components/ArticleForm';
import ArticleList from './components/ArticleList';
import { createArticle, fetchArticles,deleteArticle  } from './services/articleService';

function App() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const loadArticles = async () => {
      const data = await fetchArticles();
      setArticles(data);
      setLoading(false);
    };
    loadArticles();
  }, []);

  const handleAddArticle = async (article) => {
    const newArticle = await createArticle(article);
    setArticles(prev => [newArticle, ...prev]);
  };
  const handleDeleteArticle = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this article?");
    if (!confirmDelete) return;

    await deleteArticle(id);
    setArticles(prev => prev.filter(article => article.id !== id));
  };

  return (
     <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
      <ArticleForm onSubmit={handleAddArticle} />
      {loading ? (
        <p>Loading articles...</p>
      ) : (
        <ArticleList articles={articles} onDelete={handleDeleteArticle} />
      )}
    </div>
  );
}

export default App;
