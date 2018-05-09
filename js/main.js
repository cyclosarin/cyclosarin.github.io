// 项目入口初始化
window.onload = initialize;

// const fetch = fetch || (url) => {
// 	return new Promise((resolve, reject) => {
// 		let xhr = new XMLHttpRequest()
// 		xhr.open("GET", url, true);
// 		xhr.onreadystatechange = function() {
// 			if (xhr.status === 200) {
// 				resolve(xhr.response);
// 			}
// 			else if (xhr.status >= 400) {
// 				reject(xhr)
// 			}
// 		}
// 	})
// }

function initialize() {
	// 通过域名信息获取用户名，根据gihub's pages的一些规则，二级域名是Github用户名
	// eg: https://abc.github.io => abc
	let githubUsername = window.location.hostname.split(".")[0];

	// 通过接口抓取用户信息
	// 这里要使用第三方js库

	fetch("https://api.github.com").then((response) => {
		if (response.status === 200) {
			return response.json();
		}
	}).then(data => {
		console.log(data);
	});
}