export function   debounce(func,delay){
  // 防抖函数
  let timer = null
  
  return function(...args){
   
    
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      func.apply(this,args)
      // this 是为了不使作用域改变
      //args是调用函数的参数(需要传参数的时候)
    },delay)
  }
}

//正则表达式，字符串匹配
export function formatDate(date,fmt) {
  //1.获取年份
  //y
  //y+ ->  一个或者多个
  //y*  ->  0个或者多个y
  //y?  ->  0个或者1个y
  //2019
  //yy  - 19
  //yyyy  - 2019
  //y  - 9
  //yyy  - 019
  if(/(y+)/.test(fmt)){
    fmt=fmt.replace(RegExp.$1,(date.getFullYear()+'').substr(4-RegExp.$1.length));
  }

  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  };

  for(let k in o){
    if(new RegExp(`(${k})`).test(fmt)){
      let str = o[k] + '';
      fmt =fmt.replace(RegExp.$1,(RegExp.$1.length === 1)? str :padLeftZero(str)) ;
    }
  }
  return fmt;
}



function padLeftZero(str) {
  return ('00' + str).substr(str.length);
}