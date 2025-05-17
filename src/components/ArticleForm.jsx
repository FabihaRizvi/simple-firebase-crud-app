import { useState } from 'react';

function ArticleForm({ onSubmit }) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, body });
    setTitle('');
    setBody('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create Article</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
        required
      ></textarea>
      <button type="submit">Add Article</button>
    </form>
  );
}

export default ArticleForm;
