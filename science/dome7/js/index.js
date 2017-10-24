var log = console.log.bind(console)
// 点击‘添加’按钮事件
var addList = () => {
	var btn = $('#id-button-add')

	btn.click(function() {
		log('btn click')
		var value = ugig()
		/* 添加数据到页面中去 */
		insertHtml(value)
	})
}
/* 生成数组 */
var ugig = () => {
	var thList = $('.thList')
	var tdList = $('.tdList')
	log(thList, tdList)
	/* thList以，隔开,生成新的数组 */
	var ths = thList.val()
	log('ths', ths, typeof ths)
	/* var ths = '姓名,语文,数学,英语,总分' */
	var thsArray = ths.split(',')
	/* thList以，隔开,生成新的数组 */
	var tds = tdList.val()
	/* var tds = '小明,80,90,70,240;小红,90,60,90,240;小亮,60,100,70,230' */
	var tdsArray = tds.split(';')
	var tdsArray1 = []
	for(var i = 0; i < tdsArray.length; i++) {
		var a = tdsArray[i]
		var r = a.split(',')
		tdsArray1.push(r)
	}
	log('thsArray tdsArray tdsArray1', thsArray, tdsArray, tdsArray1)
	return new Array(thsArray, tdsArray1)
}
// 插入页面中
var insertHtml = (value) => {
	var app = $('.app')
	var arr1 = value[0]
	var arr2 = value[1]
	// 添加顶部的部分
	var html = `<table border='1' cellpadding='0' cellspacing='0'><tr><th>${arr1[0]}</th>`
	for (var i = 1; i < arr1.length; i++) {
		var a = arr1[i]
		html += `
			<th>
				${arr1[i]}
				<div class='jmtb'>
					<div class="triangleT" data-id='${i}'></div>
					<div class="triangleB" data-id='${i}'></div>
				</div>
			</th>`
	}
	html += `</tr>`
	// 添加下面的部分
	for (var i = 0; i < arr2.length; i++) {
		html += `<tr>`
		var b = arr2[i]
		for (var j = 0; j < b.length; j++) {
			var c = b[j]
			html += `<td>${c}</td>`
		}
		html += `</tr>`
	}
	html += `</table>`
	log('html', html)
	app.html(html)
}
// 排序事件（事件委托）
var bindPlxu = () => {
	var app = $('.app')
	app.click(function(ev) {
		// 获取点击的ID值
		var self = event.target
		var id = self.dataset.id
		log('id', id)
		// 根据id值去排序对应的数组
		var value = ugig()
		value[1].sort(function(x,y) {
			var fuhj
			if(self.classList.contains('triangleT')) {
				fuhj = Number(x[id])-Number(y[id])
			} else if(self.classList.contains('triangleB')){
				fuhj = Number(y[id]) - Number(x[id])
			}
			return fuhj
		})
		log('value', value)
		insertHtml(value)
	})
}

var __main = () => {
	addList()
	bindPlxu()
}
__main()
