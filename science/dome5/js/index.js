var log = console.log.bind(console)
var buttonGoClick = () => {
    var input = $('#id-input-vily')
    var btn = $('#id-button-go')
    var fhky = $('.fhky')
    // 根据选项去判断
    var xrxd = $('#id-select-xrxd')
    // log('input, btn', input, btn)
    btn.click(function(ev) {
        var vi = fhxd.ckxd % 4
        // var value = input.val()
        var value = xrxd.val()
        // log(fhky.css('left'))
        if(value == 'GO') {
            goBu(fhky, 1)
        } else if(value == 'TUN LEF') {
            traLeft(fhky, vi)
            // log('fhxd.ckxd LEF', fhxd.ckxd)
        }  else if(value == 'TUN RIG') {
            traRight(fhky, vi)
        }  else if(value == 'TUN BAC') {
            traBottom(fhky, vi)
            // log('fhxd.ckxd RIG', fhxd.ckxd)
        } else if(value == 'TRA LEF') {
            moveLeft(fhky)
        } else if(value == 'TRA TOP') {
            moveTop(fhky)
        } else if(value == 'TRA RIG') {
            moveRight(fhky)
        } else if(value == 'TRA BOT') {
            moveBottom(fhky)
        } else if(value == 'MOV LEF') {
            pjdrL(fhky)
        } else if(value == 'MOV TOP') {
            pjdrT(fhky)
        } else if(value == 'MOV RIG') {
            pjdrR(fhky)
        } else if(value == 'MOV BOT') {
            pjdrB(fhky)
        }
    })
}
// 判断当前的位置，并转向左侧
var pjdrL = function(fhky) {
    log('in pjdrL', fhxd.ckxd)
    var arr = ['left', 'top', 'right', 'bottom']
    var ck = arr[fhxd.ckxd % 4]
    // 注意：需要判断是否超过了范围
    // if(ck == 'top') {
    //     fhxd.ckxd = 0
    //     fhky.css({'transform': `rotate(270deg)`})
    //     // goBu(fhky, 1)
    // } else if(ck == 'bottom') {
    //     fhxd.ckxd = 0
    //     fhky.css({'transform': `rotate(270deg)`})
    //     // pjdr(1)
    //     // goBu(fhky, 1)
    // } else if(ck == 'left') {
    //     // pjdr(1)
    //     // goBu(fhky, 1)
    // } else if(ck == 'right') {
    //     fhxd.ckxd = 0
    //     fhky.css({'transform': `rotate(270deg)`})
    //     // goBu(fhky, 1)
    // }
    fhxd.ckxd = 0
    fhky.css({'transform': `rotate(-90deg)`})
    fhky.css({'transition': `top 1s 1s, left 1s 1s, transform 1s ease`})
    goBu(fhky, 1)
}
// 判断当前的位置，并转向右侧
var pjdrR = function(fhky) {
    var arr = ['left', 'top', 'right', 'bottom']
    var ck = arr[fhxd.ckxd % 4]
    // 注意：需要判断是否超过了范围
    // if(ck == 'top') {
    //     fhxd.ckxd = 2
    //     fhky.css({'transform': `rotate(90deg)`})
    //     // goBu(fhky, 1)
    // } else if(ck == 'bottom') {
    //     fhxd.ckxd = 2
    //     fhky.css({'transform': `rotate(90deg)`})
    //     // goBu(fhky, 1)
    // } else if(ck == 'left') {
    //     fhxd.ckxd = 2
    //     fhky.css({'transform': `rotate(90deg)`})
    //     // goBu(fhky, 1)
    // } else if(ck == 'right') {
    //     // goBu(fhky, 1)
    // }
    fhxd.ckxd = 2
    fhky.css({'transform': `rotate(90deg)`})
    fhky.css({'transition': `top 1s 1s, left 1s 1s, transform 1s ease`})
    goBu(fhky, 1)
}
// 判断当前的位置，并转向顶部
var pjdrT = function(fhky) {
    var arr = ['left', 'top', 'right', 'bottom']
    var ck = arr[fhxd.ckxd % 4]
    // 注意：需要判断是否超过了范围
    // if(ck == 'top') {
    //     // goBu(fhky, 1)
    // } else if(ck == 'bottom') {
    //     fhxd.ckxd = 1
    //     fhky.css({'transform': `rotate(0)`})
    //     // goBu(fhky, 1)
    // } else if(ck == 'left') {
    //     fhxd.ckxd = 1
    //     fhky.css({'transform': `rotate(0)`})
    //     // goBu(fhky, 1)
    // } else if(ck == 'right') {
    //     fhxd.ckxd = 1
    //     fhky.css({'transform': `rotate(0)`})
    //     // goBu(fhky, 1)
    // }
    fhxd.ckxd = 1
    fhky.css({'transform': `rotate(0)`})
    fhky.css({'transition': `top 1s 1s, left 1s 1s, transform 1s ease`})
    goBu(fhky, 1)
}
// 判断当前的位置，并转向底部
var pjdrB = function(fhky) {
    var arr = ['left', 'top', 'right', 'bottom']
    var ck = arr[fhxd.ckxd % 4]
    // 注意：需要判断是否超过了范围
    // if(ck == 'top') {
    //     fhxd.ckxd = 3
    //     fhky.css({'transform': `rotate(180deg)`})
    //     // goBu(fhky, 1)
    // } else if(ck == 'bottom') {
    //     // goBu(fhky, 1)
    // } else if(ck == 'left') {
    //     fhxd.ckxd = 3
    //     fhky.css({'transform': `rotate(180deg)`})
    //     // goBu(fhky, 1)
    // } else if(ck == 'right') {
    //     fhxd.ckxd = 3
    //     fhky.css({'transform': `rotate(180deg)`})
    //     // goBu(fhky, 1)
    // }
    fhxd.ckxd = 3
    fhky.css({'transform': `rotate(180deg)`})
    fhky.css({'transition': `top 1s 1s, left 1s 1s, transform 1s ease`})
    goBu(fhky, 1)
}

var goBu = function(fhky, key) {
    // 前进一步改变相应的位置
    pjdr(key)
    // 设置相应的值
    var y = (fhxd.juliY * -0.42)
    var x = (((fhxd.juliX) * 0.42) + 0.02)
    fhky.css({'top': `${y}rem`, 'left': `${x}rem`})
}
var traLeft = function(fhky, vi) {
    // 1 -90deg; 0 -180deg; -1 -270deg; -2 -360deg
    var r = 90 * (vi - 2)
    fhky.css({'transform': `rotate(${r}deg)`})
    fhxd.ckxd -= 1
}
var traRight = function(fhky, vi) {
    // 1 90deg; 2 180deg; 3 270deg; 4 360deg
    var r = 90 * vi
    fhky.css({'transform': `rotate(${r}deg)`})
    fhxd.ckxd += 1
}
var traBottom = function(fhky, vi) {
    // 1 180deg; 3 360deg
    var r = 90 * (vi + 1)
    fhky.css({'transform': `rotate(${r}deg)`})
    fhxd.ckxd += 2
}
var moveLeft = function(fhky) {
    if(0 < fhxd.juliX) {
        fhxd.juliX -= 1
    }
    var x = (((fhxd.juliX) * 0.42) + 0.02)
    fhky.css({'left': `${x}rem`})
}
var moveRight = function(fhky) {
    if(fhxd.juliX < 9) {
        fhxd.juliX += 1
    }
    log('fhxd.juliX', fhxd.juliX)
    var x = (((fhxd.juliX) * 0.42) + 0.02)
    fhky.css({'left': `${x}rem`})
}
var moveTop = function(fhky) {
    if(fhxd.juliY < 10) {
        fhxd.juliY += 1
    }
    var y = (fhxd.juliY * -0.42)
    fhky.css({'top': `${y}rem`})
}
var moveBottom = function(fhky) {
    if(1 < fhxd.juliY) {
        fhxd.juliY -= 1
    }
    var y = (fhxd.juliY * -0.42)
    fhky.css({'top': `${y}rem`})
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
// 获取当前选项的值
var bindSelect= function() {
    var xrxd = $('#id-select-xrxd')
    xrxd.change(function() {
        var value = xrxd.val()

    })
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
    // bindSelect()
}
__main()
