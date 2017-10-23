var log = console.log.bind(console)
// 提示框和悬浮层
var app = $('.app')
var fucg = $('.fucg')
// 按钮
var btn = $('.btn')
// 确定和取消的按钮
var btnConfirm = $('.btnConfirm')
var btnCancel = $('.btnCancel')
// 当浮出层显示时，点击浮出层以外的部分，默认为关闭浮出层
var fucgClick = () => {
    // 点击事件
    fucg.click(() => {
       log('in click')
       hide()
    })
}
var btnClick = () => {
    btn.click(() => {
        log('in click')
        show()
    })
}
var btnConfirmClick = () => {
    btnConfirm.click(() => {
        hide()
        callbackConfirm()
    })
}
var btnCancelClick = () => {
    btnCancel.click(() => {
        hide()
        callbackCance()
    })
}
var show = () => {
    fucg.show()
    app.show()
}
var hide = () => {
    fucg.hide()
    app.hide()
}
var bind = () => {
    fucgClick()
    btnClick()
    btnConfirmClick()
    btnCancelClick()
}
var __main = () => {
    bind()
}
__main()
