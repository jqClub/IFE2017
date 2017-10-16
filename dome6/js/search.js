// 插入的函数
var bindInsert = function() {
    // 获取函数
    var btn = e('.insert')
    var textarea = e('#id-textarea-value')
    var btnList = e('#id-div-btnList')
    log('textarea', textarea)
    btn.addEventListener('click', function(event) {
        // 清空数据
        btnList.innerHTML = ''
        // 获取value，并将不符合条件的转换后，返回结果
        var words = textarea.value
        words = words.replace(/[^0-9a-zA-Z]/g, ' ')
        var arr = words.split(' ')
        arr = arr.notempty()
        log(arr)
        // 添加进入
        for (var i = 0; i < arr.length; i++) {
            var value = arr[i]
            bindRightIn(btnList, value)
        }
    })
}
// 查询函数
var matchValue = function() {
    var bthSearch = e('.search')
    var inputSearch = e('.inputSearch')
    var textarea = e('#id-textarea-value')

    var btnList = e('#id-div-btnList')
    bthSearch.addEventListener('click', function(event) {
        // 清空数据
        btnList.innerHTML = ''
        var searchValue = inputSearch.value
        // 获取value，并将不符合条件的转换后，返回结果
        var words = textarea.value
        words = words.replace(/[^0-9a-zA-Z]/g, ' ')
        var arr = words.split(' ')
        arr = arr.notempty()
        arr.map(function(d) {
            d = replaceAll(d, searchValue, `<span class='highLight'>${searchValue}</span>`)
            bindRightIn(btnList, d)
        })

    })
}
var __main = function() {
    bindInsert()
    matchValue()
}
__main()
