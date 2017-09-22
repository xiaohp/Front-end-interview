// 2. 一个长度为 10000 左右的字符串数组 `var arr = ['asdf', 'ccc', 'eee', 'asdf'...]`,
// 请写一个函数计算出现次数最多的字符串

var array_to_dic = function(arr) {
    var a = arr
	var dic = {}
	for (var i = 0; i < a.length; i++) {
		var s = a[i]
		if (dic[s] === undefined) {
			dic[s] = 1
		} else {
			dic[s]++
		}
	}
    return dic
}

var count_string = function(arr) {
    var dic = array_to_dic(arr)
	var keys = Object.keys(dic)
	var max = 0
	var result = []
	for (var i = 0; i < keys.length; i++) {
		var k = keys[i]
		var v = dic[k]
		if (v > max) {
			max = v
			result = []
			result.push(k)
		} else if (v === max) {
			result.push(k)
		}
	}
	return result
}

// 2. 给定排序数组求交集

var intersection = function(a, b) {
    var o = {}
    for (var i = 0; i < a.length; i++) {
        var e = a[i]
        if (o[e] === undefined) {
            o[e] = e
        }
    }

    var l = []
    for (var j = 0; j < b.length; j++) {
        var n = b[j]
        if (o[n] !== undefined) {
            l.push(o[n])
        }
    }
    return l
}

var test_intersection = function() {
    var a1 = [1, 2, 2, 3, 4]
    var a2 = [2, 3, 3, 4, 6, 7]
    console.log('r', intersection(a1, a2));
}
test_intersection()
