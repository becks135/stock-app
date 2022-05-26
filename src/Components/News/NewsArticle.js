const NewsArticle = ({source, dateTime, dateType, headline, summary, imgSrc, url}) => {

    //if date is in milliseconds, convert to readable format
    if (dateType=="ms"){
        const newDate = new Date(dateTime);
        dateTime=newDate.toDateString();
    }

    return(
        <a href={url} className="news-blurb" target="_blank" rel="noopener noreferrer">
            <div className="news-image">
                <img src={imgSrc} alt={headline}/>
            </div>
            <div>
                <h4 className="news-headline">{headline}</h4>
                <p className="news-source">Source: {source}</p>
                <p className="news-date">{dateTime}</p>
                <p className="news-summary">{summary}</p>
            </div>
        </a>
    )
}

export default NewsArticle;