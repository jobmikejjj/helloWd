//没事干 加个时间戳
function getID(){
    var date = new Date();

    // 获取年月日
    var year = date.getFullYear();
    var month = date.getMonth() + 1; // 月份从0开始，需要加1
    var day = date.getDate();

    // 格式化为 yyyy-mm-dd
    var formattedDate = `${year}${month.toString().padStart(2, '0')}${day.toString().padStart(2, '0')}`;
    var rund = Math.ceil(Math.random()*1000);
    var Sjc = formattedDate+'|'+rund;
    console.log(Sjc);
    return Sjc;


}
function exportData() {
    var data = "商品名称,商品数量\n";

    products.forEach(function (product, index) {
        var quantity = parseInt(document.querySelectorAll('#orderTableBody tr input')[index].value);
        if (quantity > 0) {
            data += `${product.name},${quantity}\n`;
        }
    });

    // 商品总计
    var totalSum = document.getElementById('totalSum').textContent.replace("总计：", "");
    data += `商品总计,${totalSum}\n`;
    data += '购买请认准唯一VX：123456\n'

    // 创建Blob对象
    var blob = new Blob([data], { type: 'application/vnd.ms-excel' });

    // 创建下载链接
    var link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = getID();
    
    
    // 模拟点击下载链接
    link.click();
}