// 作业 1
// 实现函数
// 多看提示多讨论
var join = function(delimiter, array) {
    /*
    delimiter 是 string
    array 是包含 string 的 array

    把 array 中的元素用 delimiter 连接成一个字符串并返回
    具体请看测试
    */
    //1.第一个数
    var result = array[0]
    var n = array.length
    //2.for循环累加到result
    for (var i = 1; i < n; i++) {
        var arr = delimiter + array[i]
        result += arr
    }
    //3.返回result
    return result
}

var test_join = function() {
    ensure(join('#', ['hello', 'gua']) == 'hello#gua', 'join 测试 1')
    ensure(join(' ', ['hello', 'gua']) == 'hello gua', 'join 测试 2')
    ensure(join('\n', ['multi', 'line', 'string']) == 'multi\nline\nstring', 'join 测试 3')
    log('***join 测试完成')
}

// 作业 2
// 实现函数
var split = function(s, delimiter=' ') {
    /*
    s 是 string
    delimiter 是 string, 默认为空格 ' '

    以 delimiter 为分隔符号, 返回一个 array
    例如
    split('1 2 3') 返回 ['1', '2', '3']
    split('a=b&c=d', '&') 返回 ['a=b', 'c=d']
    注意, 测试 array 是否相等得自己写一个函数用循环来跑
    */
    //0123456
    //a=b&c=d
    var result = []
    var space = delimiter.length
    var start = 0
    for (var i = 0; i < s.length; i++) {
        var s1 = s.slice(i, i + space)
        // log('for in split', `(${s1})`)
        if(s1 == delimiter) {
            s2 = s.slice(start, i)
            result.push(s2)
            //start 变成后来的数
            start = i + space
        }
    }
    //循环结束后，把最后一个元素push到数组中去
    result.push(s.slice(start))
    return result
}

var equalArray = function(arr1, arr2) {
    var n1 = arr1.length
    var n2 = arr2.length
    if(n1 != n1) {
        return false
    }
    for (var i = 0; i < n1; i++) {
        if (arr1[i] !== arr2[i]) {
            return false
        }
    }
    return true
}

var test_split = function() {
    var r1 = equalArray(split('1 2 3'), ['1', '2', '3'])
    var r2 = equalArray(split('a=b&c=d', '&'), ['a=b', 'c=d'])
    var r3 = equalArray(split('a==b&c==d', '=='), ['a', 'b&c', 'd'])
    ensure(r1, 'split 测试 1')
    ensure(r2, 'split 测试 2')
    ensure(r3, 'split 测试 3')
    log('***split 测试完成')
}

// 作业 3
// 实现函数
var replaceAll = function(s, old, newString) {
    /*
    s old newString 都是 string
    返回一个「将 s 中出现的所有 old 字符串替换为 new 字符串」的字符串
    */
    var s1 = split(s, old)
    var s2 = join(newString, s1)
    // log('s1 和 s2', s1, s2)
    return s2
}
