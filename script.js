var newarray=[
	["Site", "https://jennygeryak.github.io/"],
	["Github", "https://github.com/JennyGeryak"],
	["Codepen", "http://codepen.io/JennyGeryak/"],
	["Linkedin", "https://www.linkedin.com/in/jane-geryak-721719a5"],
	["Instagram", "https://www.instagram.com/jenny_geryak/"]
];
var menu_menu=document.getElementById("menu");
var menu = document.createElement("nav");
menu_menu.appendChild(menu);
var menu_body = document.createElement("ul");

for (var i = 0;i<newarray.length; i=i+1) {
	console.dir(newarray[i]);
	menu.appendChild(menu_body);
	var element_container = document.createElement("li");
	menu_body.appendChild(element_container);
	var element = document.createElement("a");
	element_container.appendChild(element);
}
 


