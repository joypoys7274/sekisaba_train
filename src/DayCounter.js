import React from 'react';
import moment from "moment";

export class DayCounter extends React.Component {
    constructor(props) {
        super(props);
        const dataFrom = moment("2023-08-01 00:00:00");
        const today = moment();
        this.state = {
            days: dataFrom.diff(today, "days"),
        };
    }

    render() {
        return (
            <h2>日数カウンタ：{this.state.days}日目</h2>
        )
    }
}