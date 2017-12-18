// 2. 一个长度为 10000 左右的字符串数组 `var arr = ['asdf', 'ccc', 'eee', 'asdf'...]`,
// 请写一个函数计算出现次数最多的字符串
// 辅助函数，得到数组每个元素的数量
var array_to_dic = function(arr) {
	var dic = {}
    arr.forEach(el => {
        if (dic[el] === undefined) {
            dic[el] = 1
        } else {
            dic[el]++
        }
    })
    return dic
}


var count_string = function(arr) {
    var dic = array_to_dic(arr)
	var max = 0
	var result = []
    for (var k in dic) {
        if (dic.hasOwnProperty(k)) {
            var v = dic[k]
    		if (v > max) {
    			max = v
    			result = []
    			result.push(k)
    		} else if (v === max) {
    			result.push(k)
    		}
        }
    }
	return result
}

// 3. 给定排序数组求交集

var intersection = function(a, b) {
    var o = {}
    a.forEach(e => {
        if (o[e] === undefined) {
            o[e] = e
        }
    })

    var l = []
    b.forEach(e => {
        if (o[e] !== undefined) {
            l.push(o[e])
        }
    })
    return l
}
