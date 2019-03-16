import React from 'react'
import Moment from 'moment';

export const YearThai = (year) => {
    let data = (parseInt(year, 10) + 543);
    return data;
}
const MonthThai = (month) => {
    const full_month = ["มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"];
    let data = full_month[parseInt(month, 10) + 1];

    return data;
}

export const DateThai = (date) => {
    const day = Moment(date).format('D');
    const month = Moment(date).format('MM');
    const year = Moment(date).format('YYYY');

    let fullday = day;
    let fullmonth = MonthThai(month);
    let fullyear = YearThai(year);
    
    const data = `${fullday} ${fullmonth} พ.ศ.${fullyear}`;
    console.log("data", data);
    return data;
}