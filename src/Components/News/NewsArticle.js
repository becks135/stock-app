const NewsArticle = ({source, dateTime, dateType, headline, summary, imgSrc, url}) => {

    //if date is in milliseconds, convert to readable format
    if (dateType=="ms"){
        const newDate = new Date(dateTime);
        dateTime=newDate.toDateString();
    }

    return(
        <>
            <div className="news-image">
                <img src={imgSrc} alt={headline}/>
            </div>
            <div className="news-headline">
                <p>{source}</p>
                <p>{dateTime}</p>
                <p><a href={url} target="_blank" rel="noopener noreferrer">{headline}</a></p>
                <p>{summary}</p>
            </div>
        </>
    )
}

export default NewsArticle;