
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
test_count_string()
