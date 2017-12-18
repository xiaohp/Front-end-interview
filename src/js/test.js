// 测试方法
var ensure = function(a, b, message) {
    var condition = JSON.stringify(a) === JSON.stringify(b)
    if (!condition) {
        console.log(message, `${a} 不等于 ${b}`)
    }
}

var test_count_string = function() {
    var a = ['a', 'b', 'c', 'd', 'a', 'a', 'b', 'b', 'c', 'a', 'b']
    var b = ['a', 'b', 'c', 'd', 'a', 'a', 'b', 'b', 'c', 'a']
    var res_a = ['a', 'b']
    var res_b = ['a']
    ensure(count_string(a), res_a, 'count_string test 1 error')
    ensure(count_string(b), res_b, 'count_string test 2 error')
}


var test_intersection = function() {
    var a1 = [1, 2, 3, 4]
    var a2 = [2, 3, 4, 6, 7]
    var res = [2, 3, 4]
    ensure(intersection(a1, a2), res, 'intersection test 1 error')
}



var __main = function() {
    test_count_string()
    test_intersection()
}
__main()
