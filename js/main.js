function initial() {
	let username = window.location.hostname;
	console.log(username);
}

window.onload = function() {
	var links = document.querySelectorAll("a");

	links.forEach(a => {
		a.addEventListener("contextmenu", handler);
	});

	function handler(e) {
		return e.preventDefault();
	}

	initial();

	function github(username) {
		fetch("https://api.github.com/users/" + username).then((response) => {
			if (response.status === 200) {
				console.log(response);
			}
		})
	}

	github("cyclosarin")
}