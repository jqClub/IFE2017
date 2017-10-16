// 去掉数组里的空格和没有内容的项目
Array.prototype.notempty = function(){
    // log('in notempty')
    return this.filter(t => t!=undefined && t!==null && t!=='');
}
