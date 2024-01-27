// 4. 嵌套页面（iframe）获取父页面的URL（考虑跨源场景）

//如果获取父窗口的 URL 出现错误（例如由于同源策略限制导致无法访问父窗口的 URL），则 catch 块会捕获到该错误。

let parentURL
try {
  parentURL = window.parent.location.href
} catch {
  //使用 document.referrer 来获取当前窗口的父页面的 URL。
  //document.referrer 返回当前窗口的父页面的 URL，即打开当前页面的页面的 URL。
  //浏览器会将打开子窗口的页面称为引用页面（或称为父窗口
  parentURL = document.referrer
}
