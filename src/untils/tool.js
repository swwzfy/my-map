//--------------------------封装一些常用的函数-----------------------
import moment from 'moment';

// 短时间
export const shortTime = function (value) {
    return moment(value).format('YYYY-MM-DD');
}

// 长时间
export const time = function (value) {
    return moment(value).format('YYYY-MM-DD HH:mm:ss');
}

//过滤秒
export const leaveTime = function (value) {
    return moment(value).format('YYYY-MM-DD HH:mm');
}

// 年月
export const monthTime = function (value) {
    return moment(value).format('YYYY-MM');
}

// 时分秒
export const secondsTime = function (value) {
    return moment(value).format('HH:mm:ss');
}

// 中国标准时间的转化
export const filterTime = (time, type = 'short') => {
    if (type == 'short') {
        return moment(time).format('YYYY-MM-DD')
    } else {
        return moment(time).format('YYYY-MM-DD HH:mm:ss')
    }
}

export const startOfDate = function (d, dateType = 'day') {
    return moment(d).startOf(dateType)
}

export const endOfDate = function (d, dateType = 'day') {
    return moment(d).endOf(dateType)
}

// 当月第一天和最后一天   传入一个日期，返回数组['2019-12-01','2019-12-31']
export const lastDateofMonth = function (d) {
    let firstDate = moment(d).startOf('month').format('YYYY-MM-DD');
    let endDate = moment(d).endOf('month').format('YYYY-MM-DD');
    let Datearr = [];
    Datearr.push(firstDate);
    Datearr.push(endDate);
    return Datearr;
}
