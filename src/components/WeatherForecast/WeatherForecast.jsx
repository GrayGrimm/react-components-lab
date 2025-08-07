const WeatherData = (props) => {
    const { day, img, imgAlt, conditions, time } = props
    return (
        <>
            <h2>Day of the Week: {day}</h2>
            <img src={img} alt={imgAlt} />
            <p><span>conditions: </span>{conditions}</p>
            <p><span>time: </span>{time}</p>
        </>
    );
};

export default WeatherData;