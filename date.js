/**
 * 时间格式化
 * @param {Object|Number} date
 * @param {String} fmt
 * @returns {String}
 */
function format (date, fmt) {
    let dateObj = new Date(date)
    let o = {
        'Y+': dateObj.getFullYear(), // 年
        'M+': dateObj.getMonth() + 1, // 月份
        'D+': dateObj.getDate(), // 日
        
        'h+': dateObj.getHours(), // 小时
        'm+': dateObj.getMinutes(), // 分
        's+': dateObj.getSeconds(), // 秒
    }
    if (/(Y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (dateObj.getFullYear() + '').substr(4 - RegExp.$1.length))
    for (let k in o) {
        if (new RegExp('(' + k + ')').test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
    }
    return fmt
}

