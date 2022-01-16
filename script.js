var storage = [];

function update(){
	var temp = document.getElementById("edit-box");
	var data = "";

	for(i = 0; i < storage.length; i++){
		data += "<textarea readonly>";
		data += storage[i]; 
		data += "</textarea>";
		data += "<button onclick=edit("+i+")>Edit</button>";
		data += "<button onclick=remove("+i+")>Delete</button>";
	}

	temp.innerHTML = data;
}

function add(){
	var temp = document.getElementById("textToAdd");
	var hold = temp.value;
	if(hold){
		storage.push(hold);
		temp.value = "";
		update();
	}
}

function remove(index){
	storage.splice(index,1);
	update();
}

function edit(index){

	var temp = document.getElementById("editDiv");
	temp.style.display = "block";

	document.getElementById("newText").onsubmit = function(){
		var hold = document.getElementById("nextTextToAdd");
		if(hold.value.trim()){
			storage.splice(index, 1, hold.value.trim());
			hold.value = "";
			temp.style.display = "none"; 
			update();
		}
		else{
			hold.value = "";
			temp.style.display = "none"; 
		}
	}
}


