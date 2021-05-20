/**
 * 找出字符串中出现字符次数最多的一个
 */

const maxChartNum = function(str){
    let obj = {};
    let arr = str.split('');
    //把key当作统计次数
    for (const key of Object.keys(arr)) {
        if(obj[arr[key]]){
            obj[arr[key]]++;
        }else{
            obj[arr[key]] = 1;
        }
    }

    let chart = '';//字符
    let maxNum = 0;//出现次数
    for (const key in obj) {
        if (object.hasOwnProperty(key)) {
            if(obj[key] > maxNum){
                chart = key;
                maxNum = obj[key];
            }
        }
    }
    return {
        chart: chart,
        maxNum: maxNum
    }
}