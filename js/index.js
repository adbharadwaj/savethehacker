var customerList = [
	{"name":"Aditya Bharadwaj","id":"ad@example.com","phone":"8979879827"},
	{"name":"NikantVohra","id":"ad@example.com","phone":"8979879817"},
	{"name":"NikantVo","id":"ad@example.com","phone":"8979879817"},
	{"name":"Nikan","id":"ad@example.com","phone":"8979879817"}
];



function setupCustmers() {
	console.log(customerList);
	for (var i = 0; i < customerList.length; i++) {
		$("#cust_list").append(createCustListItem(customerList[i].name,i));
	};
}

function createCustListItem(name,index) {
	if (index>0)
		return "<li><a href=\"#\">"+name+"</a></li>";
	else
		return "<li class=\"active\"><a href=\"#\">"+name+"</a></li>"
}


setupCustmers();
