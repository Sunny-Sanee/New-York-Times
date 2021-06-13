import './App.css';
import AppHeader from './components/AppHeader';
import Articles from './Articles';
import article from './data/art';
import ArticlePost from './ArticlePost';
import { useState } from 'react';
import AppSearch from './components/AppSearch';

function App() {
    const [selectedArticle, setSelectedArticle] = useState(null);
    const [seachText, setSearchText] = useState('');

    function onArticleOpenClick(theArticle) {
        setSelectedArticle(theArticle);
    }

    function onArticleCloseClick() {
        setSelectedArticle(null);
    }

    const articleElements = article.filter((article) => {
        return article.title.includes(seachText);
    }).map((article, index) => {
        return <Articles key={index} article={article}  onArticleClick={onArticleOpenClick} />;
    });

    let articlePost = null;
    if (!!selectedArticle) {
        articlePost = <ArticlePost article={selectedArticle} onBgClick={onArticleCloseClick}/>
    }

  return (
    <div className="App">
     <AppHeader/>
    <section className="app-section">
        <div className="app-container">
        <AppSearch value={seachText} onValueChange={setSearchText}/>
      <div className="app-grid">
      {articleElements}
      </div>
        </div>
    </section>
      {articlePost}
    </div>
  );
}

export default App;
