/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */
var aqiData = {};
var cityInput = document.getElementById("aqi-city-input");
console.log(cityInput);
var city = document.getElementById('aqi-city-input').value.trim();
var quality = document.getElementById('aqi-value-input').value;
var aqiTable = document.getElementById('aqi-table');

/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */

function addAqiData() {
   aqiData.push([city,quality]);
}

/**
 * 渲染aqi-table表格
 */
function renderAqiList() {
   console.log(1);
   aqiTable.innerHTML += '<tr><td>'+city+'</td><td>'+quality+'</td>><td><button>删除</button></tr>';
}

/**
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */
function addBtnHandle() {
  addAqiData();
  renderAqiList();
}

/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */
function delBtnHandle() {
  // do sth.

  renderAqiList();
}

function init() {

  // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数
  document.getElementById('add-btn').onclick = addBtnHandle;

  // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数
  document.getElementById('aqi-table').getElementsByTagName('button').onclick = delBtnHandle;

}

init();


