const NewsArticle = ({source, dateTime, dateType, headline, summary, imgSrc}) => {

    //if date is in milliseconds, convert to readable format
    if (dateType=="ms"){
        const newDate = new Date(dateTime);
        dateTime=newDate.toDateString();
    }

    return(
        <>
            <div>
                <img src={imgSrc} alt={headline}/>
            </div>
            <div>
                <p>{source}</p>
                <p>{dateTime}</p>
                <p>{headline}</p>
                <p>{summary}</p>
            </div>
        </>
    )
}

export default NewsArticle;