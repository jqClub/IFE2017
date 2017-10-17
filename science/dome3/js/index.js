var log = console.log.bind(console)
// 1.添加点击的事件
var bindClick = () => {
	var app = $('#app')
	// 事件委托
	app.click(function(ev) {
		log('in click')
		var self = ev.target
		var className = $(self).attr('class')
		// 2.判断当前点击的class，执行相应的代码
		if(className == 'zlxc') {
			// 显示在校生的选项
			zlxcShow()
		} else if(className == 'buzlxc') {
			// 显示非在校生的选项
			buzlxcShow()
		}
	})
}
var show = $('.show')
// 默认添加市下面的区信息
var tmjw = (i) => {
	var html = ''
	// 循环一个数组,默认显示的是北京市的区信息
	var qus = quuu[i]
	// log('qus', qus)
	qus.map(function(qu) {
		var r = `<option value="">${qu}</option>`
		html += r

	})
	// log(html)
	return html
}
var zlxcShow = () => {
	log('in zlxcShow')
	var xrxd = tmjw('北京')
	var h = `
		<span>学校</span>
		<select id="uiArea" name="">
			<option value="北京">北京</option>
			<option value="广州">广州</option>
		</select>
		<select id='quArea' class="" name="">
			${xrxd}
		</select>`
	show.html(h)
}
var buzlxcShow = () => {
	log('in buzlxcShow')
	var h = `
		<span>就业单位</span>
		<input type="text" name="" value="">`
	show.html(h)
}
// 地区的数据
var quuu = {
	'北京': ['东城区', '西城区', '朝阳区'],
	'广州': ['白云区', '天河区', '海珠区'],
}
// 改变的时候，去改变二级菜单里面的值
var bindChange = () => {
	// 事件委托
	show.change(function() {
		var uiArea = $('#uiArea')
		var quArea = $('#quArea')
		// log('quArea', quArea)
		var diqu = uiArea.val()
		// log('diqu', diqu)
		var h = tmjw(diqu)
		// log('h', h)
		quArea.html(h)
	})
}
var __main = () => {
	bindClick()
	bindChange()
}
__main()
