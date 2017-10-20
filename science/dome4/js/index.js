var log = console.log.bind(console)
var buttonGoClick = () => {
    var input = $('#id-input-vily')
    var btn = $('#id-button-go')
    var fhky = $('.fhky')
    // log('input, btn', input, btn)
    btn.click(function(ev) {
        var vi = fhxd.ckxd % 4
        var value = input.val()
        // log(fhky.css('left'))
        if(value == 'g') {
            // 前进一步改变相应的位置
            pjdr(1)
            // 设置相应的值
            var y = (fhxd.juliY * -0.42)
            var x = (((fhxd.juliX) * 0.42) + 0.02)
            fhky.css({'top': `${y}rem`, 'left': `${x}rem`})
        } else if(value == 'l') {
            // 1 -90deg; 0 -180deg; -1 -270deg; -2 -360deg
            var r = 90 * (vi - 2)
            fhky.css({'transform': `rotate(${r}deg)`})
            fhxd.ckxd -= 1
            // log('fhxd.ckxd LEF', fhxd.ckxd)
        }  else if(value == 'r') {
            // 1 90deg; 2 180deg; 3 270deg; 4 360deg
            var r = 90 * vi
            fhky.css({'transform': `rotate(${r}deg)`})
            fhxd.ckxd += 1
            // log('fhxd.ckxd RIG', fhxd.ckxd)
        } else if(value == 'b') {
            // 1 180deg; 3 360deg
            var r = 90 * (vi + 1)
            fhky.css({'transform': `rotate(${r}deg)`})
            fhxd.ckxd += 2
            // log('fhxd.ckxd BAC', fhxd.ckxd)
        }
    })
}
// 前进轨迹,参数为步数
var pjdr = function(buuu) {
    var arr = ['left', 'top', 'right', 'bottom']
    var ck = arr[fhxd.ckxd % 4]
    log('ck', ck)
    var x = fhxd.juliX
    var y = fhxd.juliY
    // 注意：需要判断是否超过了范围
    if(ck == 'top') {
        if(y < (10 - buuu + 1)) {
            fhxd.juliY += buuu
        }
    } else if(ck == 'bottom') {
        if(1 < y) {
            fhxd.juliY -= buuu
        }
    } else if(ck == 'left') {
        if(0 < x) {
            fhxd.juliX -= buuu
        }
    } else if(ck == 'right') {
        if(x < (9 - buuu + 1)) {
            fhxd.juliX += buuu
        }
    }
}
// 默认所处的位置和距离
var fhxd = {
    // 0代表是‘left’, 1代表是’top', 2代表的是’right, 3代表是'bottom'
    ckxd: 1,
    juliX: 0,
    juliY: 1
}

var __main = () => {
    buttonGoClick()
}
__main()
