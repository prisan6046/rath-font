import React from 'react'
import Moment from 'moment';

export const YearThai = (year) => {

    let data = '';
    if (year == '2019')
    {
        let d = new Date();
        let years = d.getFullYear();
        // console.log(data)
        data = (parseInt(years, 10) + 543);
    }
    else if(year == '2018'){
        data = "2561"
    }
    else if(year == '2017'){
        data = "2560"
    
    }
    else if(year == '2016'){
        data = "2559"
    }     
    else if (year == '2562'){
        data = "2562"
    }
    else if(year == '2561'){
        data = "2561"
    }
    else if(year == '2560'){
        data = "2560"
    }
    else if(year == '2559'){
        data = "2559"
    }else{
        let d = new Date();
        let years = d.getFullYear();
        // console.log(data)
        data = (parseInt(years, 10) + 543);
    
    }

    // let d = new Date();
    // let years = d.getFullYear();
    // // console.log(data)
    // let data = (parseInt(years, 10) + 543);

    return data;
}
const MonthThai = (month) => {

    const full_month = ["มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"];
    let data = full_month[parseInt(month-1)];

    return data;
}

export const Str_date = (date) => {
   
    if(date != undefined ){
    let str_data = date.split("-");
    return "วันที่ "+str_data[2] + " "+MonthThai(str_data[1])+" "+str_data[0];
    }else{
        return ""
    }
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