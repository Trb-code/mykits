const kit = new Object();
// 最大值
kit.zuida = function() {
  var max = arguments[0];
  for (var i = 0; i < arguments.length; i++) {
    if (max < arguments[i]) {
      max = arguments[i];
    }
  }
  return max;
};

// 最少值
kit.zuishao = function() {
  let min = arguments[0];
  for (let i = 0; i < arguments.length; i++) {
    if (min > arguments[i]) {
      min = arguments[i];
    }
  }
  return min;
};
// var result = add(12, 24, 25, 36, 89, 20, 2, 150, 254, -2)
// alert(result);
// 随机数封装
kit.radom = function(max, min) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

// 随机颜色

kit.col = function(Number = 0) {
  return Math.floor(Math.random() * (Number + 1));
};
kit.rgbcol = function() {
  var r = kit.col(255);
  var g = kit.col(255);
  var b = kit.col(255);
  return "rgb(" + r + "," + b + "," + g + ")";
};

//随机生成16进制的颜色
kits.randomHexColor = function(arr = "0123456789ABCDEF") {
  let color = "";
  for (let i = 0; i < 6; i++) {
    const index = Math.floor(Math.random() * arr.length);
    color += arr.charAt(index);
  }
  return "#" + color;
};
// 时间

kit.formatTime = function() {
  var now = new Date();
  var hh = now.getHours();
  var mm = now.getMinutes();
  var ss = now.getSeconds();
  if (hh < 10) hh = "0" + hh;
  if (mm < 10) mm = "0" + mm;
  if (ss < 10) ss = "0" + ss;

  return hh + ":" + mm + ":" + ss;
};

// 日期格式化封装
kit.formatDate = function() {
  var now = new Date();
  var yy = now.getFullYear();
  var mm = now.getMonth() + 1;
  var dd = now.getDate();
  if (mm < 10) mm = "0" + mm;
  if (dd < 10) dd = "0" + dd;
  return (nyr = yy + "/" + mm + "/" + dd);
};
