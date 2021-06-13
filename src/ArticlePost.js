import './ArticlesPost';

function ArticlePost(props) {
    const { article, onBgClick } = props;
    return (
        <div className="article-post">
            <div className="article-post-bg" onClick={onBgClick}/>
            <div className="article-post-content">
                <img src={article.thumbnailUrl} alt=""/>
                <h4>{article.title}</h4>
            </div>

        </div>
    );
}

export default ArticlePost;