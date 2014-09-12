Titanium.UI.setBackgroundColor('#000');


//Main screen text and views.
var mainWindow = Ti.UI.createWindow({
	backgroundColor: "#3d3d3e",
	fullscreen: true,
});

var about = Ti.UI.createLabel({
	text: "About",
	color: "#fff",
	top: 50,
	left: 31,
	font: {fontSize: 80, fontFamily: "Helvetica", fontWeight: "regular"},
});

var me = Ti.UI.createLabel({
	text: "Me",
	color: "#fff",
	top: 130,
	right: 33,
	font: {fontSize: 80, fontFamily: "Helvetica", fontWeight: "regular"},
});

var questionsPageButton = Ti.UI.createView({
	top: 300,
	backgroundColor: "B73636",
	height: 100,
});

var background = Ti.UI.createView({
	top: 305,
	backgroundColor: "922B2B",
	height: 100,
});

var questionsPageText = Ti.UI.createLabel({
	text: "Questions",
	color: "#fff",
	font: {fontSize: 42, fontFamily: "Helvetica", fontWeight: "regular"},
});

var mainWindowLabel = Ti.UI.createLabel({
	text: "1409 Ian Dorosh",
	color: "#fff",
	bottom: 20,
	font: {fontSize: 12, fontFamily: "Helvetica", fontWeight: "light"},
});

var openQuestions = function(){	
	var questionsView = Ti.UI.createWindow({
		title: "Questions",
		backgroundColor: "#fff",
		fullscreen: true,
		
	});
	navWindow.openWindow(questionsView);
};


//Event listener for questions button.
questionsPageButton.addEventListener("click", function(openData){
	navWindow.openWindow(dataView);
});


// Puts main window into a navigation window. 
var navWindow = Ti.UI.iOS.createNavigationWindow({
	window: mainWindow,
});

//Links json.js to app.js
var loadFile = require("json");


questionsPageButton.add(questionsPageText);
mainWindow.add(about,me, background, questionsPageButton, mainWindowLabel);
navWindow.open();




