var newarray=[
	["Site", "https://jennygeryak.github.io/"],
	["Github", "https://github.com/JennyGeryak"],
	["Codepen", "http://codepen.io/JennyGeryak/",[
		["HTML-form", "http://s.codepen.io/JennyGeryak/debug/qqXrBJ"],
		["Running_button", "http://s.codepen.io/JennyGeryak/debug/RoZpgN"],
		["Check_list", "http://s.codepen.io/JennyGeryak/debug/yVoMpv",]
	]],
	["Linkedin", "https://www.linkedin.com/in/jane-geryak-721719a5"],
	["Instagram", "https://www.instagram.com/jenny_geryak/"]
];
var menu_menu=document.getElementById("menu");
var menu = document.createElement("nav");
menu_menu.appendChild(menu);

function Menu (array, parent) {
	var menu_body = document.createElement("ul");
	parent.appendChild(menu_body);
	for (var i = 0;i<array.length; i=i+1){
		var element_container = document.createElement("li");
		menu_body.appendChild(element_container);
		var element = document.createElement("a");
		element_container.appendChild(element);
		element.innerHTML=array[i][0];
		element.href=array[i][1];	
		if (array[i].length==3) {
			Menu(array[i][2], element_container);
		}
	}

}
Menu (newarray, menu);



