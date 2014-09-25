// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

// create tab group
var tabGroup = Titanium.UI.createTabGroup();

var win = Titanium.UI.createWindow({  
    title:"Specials",
    backgroundColor:"#FFFFFF",
    //navBarHidden:true, //Hide the nav bar for the window
    tabBarHidden:true //Hide the tab bar for the window
});
//Remember, we are hiding this tab through the property tabBarHidden above
var tab = Titanium.UI.createTab({  
    icon:"KS_nav_views.png",
    title:"Specials",
    window:win
});

//Method for custom table row creation
//1. Store all the data we need in an array of objects
//2. Traverse the array in a for loop and make TableViewRows out of views
//3. Store the created TableViewRows in a new array
//4. Set the new array as the data source for our TableView

//1. Store all the data we need in an array of objects
var data = [
	{img:"images/spa.png",title:"Day Spa Package",amount:250},
	{img:"images/desert-sea.png", title:"2 Day Salton Sea", amount:350},
	{img:"images/backpack.png", title: "Big Sur Retreat", amount:620}	
]

var rowData = []; //An array that will hold our row objects created by createTableViewRow

//2. Traverse the array in a for loop and make TableViewRows out of views
for(var i = 0; i < data.length; i++){
	
	//Create rows to insert in the table row
	var img = Titanium.UI.createImageView({
		image:data[i].img,//The img property of the data array
		height:180,
		width:320
	});
	
	var bgBar = Titanium.UI.createView({
		height:36,
		width:"100%",
		bottom:0,
		left:0,
		backgroundColor:"#000",
		opacity:0.6
	})
	
	var title = Titanium.UI.createLabel({
		text:data[i].title,//The title property of the data array
		height:36,
		width:"75%", //Ideally the screen width
		bottom:0,
		left:0,
		color:"#FFFFFF",
		textAlign:"left"
	});

	var amount = Titanium.UI.createLabel({
		text:"$" + data[i].amount,//The amount property of the data array
		height:36,
		width:"25%",
		bottom:0,
		right:0,
		color:"#FFFFFF",
		textAlign:"right"
	});
	
	//Create the row
	var row = Titanium.UI.createTableViewRow({
		height:"auto"//Set the height of the row to auto so that it expands freely in the vertical direction
	});
	
	//Add the views to the row
	row.add(img);
	row.add(bgBar);
	row.add(title);
	row.add(amount);
	
	//Two methods for adding listeners
	//1. Add listeners internally to the views added to the row
	//2. Add a listener to the table and use the e.source property to figure out what event fired the event
	/*
	img.addEventListener("click", function(e){
		alert("You tapped the image");
	});
	
	bgBar.addEventListener("click",function(e){
		alert("You tapped the view behind the text");
	});
	*/
	//3. Store the created TableViewRows in a new array
	//push the row into the array
	rowData.push(row);
}

//More complex table will use rows created with createTableViewRow
var tableView = Titanium.UI.createTableView({
	//4. Set the new array as the data source for our TableView
	data:rowData
});

tableView.addEventListener("click", function(e){
	//2. Add a listener to the table and use the e.source property to figure out what event fired the event
	alert(e.source);
});

win.add(tableView);

tabGroup.addTab(tab);  

// open tab group
tabGroup.open();