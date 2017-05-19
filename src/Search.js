import React, { Component } from 'react';
import { DatePicker }from 'antd';

const { MonthPicker, RangePicker } = DatePicker;
const onChange = (date, dateString) => {
    console.log(date, dateString);
};

export default class SearchComponent extends Component {

    //noinspection JSMethodCanBeStatic
    render() {
        return (
            <div>
                <DatePicker onChange={onChange}/>
                <br />
                <MonthPicker onChange={onChange} placeholder="Select month"/>
                <br />
                <RangePicker onChange={onChange}/>
            </div>
        );
    };
}
