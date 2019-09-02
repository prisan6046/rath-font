import React from 'react'
import Moment from 'moment';


const MonthThai = (month) => {
    const full_month = ["มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"];
    let data = full_month[parseInt(month, 10) + 1];
    return data;
}


export const DateThai = (date) => {
    let str_data = date.split("-");
    console.log(str_data)
    return data;
}