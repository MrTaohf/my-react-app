import React from 'react';
import { DatePicker }from 'antd';

const { MonthPicker, RangePicker } = DatePicker;
const onChange = (date, dateString) => {
    console.log(date, dateString);
};

const SearchComponent = () => {
    return (
        <div>
            <DatePicker onChange={onChange}/>
            <br />
            <MonthPicker onChange={onChange} placeholder="Select month"/>
            <br />
            <RangePicker onChange={onChange}/>
        </div>
    );
}

export default SearchComponent;
