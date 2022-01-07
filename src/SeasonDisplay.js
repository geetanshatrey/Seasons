import './SeasonDisplay.css';
import React from "react";

const seasonObject = {
    summer: {
        text: "Let's hit the beach!",
        iconName: "sun"
    },
    winter: {
        text: "Burr, it's cold!",
        iconName: "snowflake"
    }
};

const getMonth = (lat, month) => {
    if(month > 2 && month < 9) {
        return lat > 0 ? 'summer':'winter';
    }
    else {
        return lat > 0 ? 'winter':'summer';
    }
}

const SeasonDisplay = (props) => {
    const season = getMonth(props.lat, new Date().getMonth());
    const { text, iconName } = seasonObject[season];

    return (
        <div className={`season-display ${season}`}>
            <i className={`icon-left massive ${iconName} icon`}/>
            <p>{text}</p>
            <i className={`icon-right massive ${iconName} icon`}/>
        </div>
    );
}

export default SeasonDisplay;