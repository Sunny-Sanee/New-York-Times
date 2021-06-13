import './Articles.css'

function Articles(props) {
    const { article, onArticleClick } = props;
    return (
        <div className="articles">
            <img src={article.thumbnailUrl} alt="" onClick={() => {onArticleClick(article)}}/>
            <h4>{article.title}</h4>
            </div>
    )
}

export default Articles