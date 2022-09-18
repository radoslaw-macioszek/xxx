console.log("xxx");

const data = ["aaa", "bbb"];

const button = document.querySelector(".clickbutton");

button.addEventListener("click", function () {
	const val = document.querySelector(".inputValue").value;

	document.querySelector(".data").innerHTML = val;
});
