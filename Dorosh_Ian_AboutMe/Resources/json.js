
//JSON Data
var data = {
	"aboutMe":{
		"headTitle": "About Me",
		"questions": [
			{
				title: "What is your name?", 
				description: "My name is\n Ian Dorosh", 			
			},
			{
				title: "What is your chat user name?", 
				description: "     My user name is\n iDorosh@Fullsail.Edu", 
			},
			{
				title: "In which time zone do you reside?", 
				description: "I live in Minnesota which is located in the Central Standard Time zone.", 
			},
			{
				title: "Why are you in the MD Program?",
				description: "I started getting into smartphones and computers at a very young age. I always wanted the latest and greatest wether it was smartphones, game consoles, or tablets, I was always facinated by technology.",
			},
			{
				title: "How comfortable are you with JS?", 
				description: "At this point I am very comforatble with Java Script. Aside from school projects I have been creating my own apps to get to know Java Script as much as I can.", 
			},
			{
				title: "How comfortable are you with TI?", 
				description: "For the most part Titanium Studio has become very familiar to me working on my own apps has helped alot I have learned features in Titanium that we have not yet covered in class like adding modules such as AdMob to my applications.",
			},
			{
				title: "What is your favorite sport?", 
				description: "My favrorite sport by far has to be Football. Our whole family gets together every Sunday to watch games. I love watching Vikings games since I am from MN but have lately started to enjoy watchin the Buccaneers because my brother in law is from Tampa. ", 
			},
			{
				title: "Do you have any pets?", 
				description: "I have a dog and his name is Romeo. Romeo is a small Yorkie and I had him for 3 years now.", 
			},
			{
				title: "What is your favorite Movie?", 
				description: "This changes alot for me since I go to the movies alot wwith friends in my spare time but currently its Gardians of the Galaxy. I think the action combined with the humor makes it a really good movie and I would recomend it to anyone.", 
			},
			{
				title: "What is your favorite book?", 
				description: "One of my favorite books has to be The Martian. I don't read many books I tend to listen to them on Audible but read this one because it was a gift, and it was a really good book without any dull moments.", 
			},
			{
				title: "What is your favorite TV Show?", 
				description: "My favorite show is probably Game of Thrones but I bet everyone says that so I'm going with Suits instead. Suits is a great show about lawyers and what makes it a very great show is that its funny while being serious and I am a big fan of those type of shows.", 
			},
			{
				title: "What is your favorite Song?", 
				description: "This is a really hard one for me because I listen to music all the time and to many different genres, but if I really had to chose it would probably have to be Bleeding Out by Alex Clare", 
			},
			{
				title: "Who is your favorite Actor?", 
				description: "My favorite actor is Defenetly Liam Neeson. I am the biggest fan of action movies and I think he's in all of the best ones.", 
			},
			{
				title: "What are your hobbies?", 
				description: "I really enjoy art wether its drawing painting jewlery or ceramics I tried it all and have won competitions back in highschool for my ceramic pieces.", 
			},
		]
	}
};


//New window to display all my questions
dataView = Ti.UI.createWindow({
	title: "Questions",
	backgroundColor: "#fff",
	fullscreen: true,
});
	
//Creates a Table View for my questions
var questions = Ti.UI.createTableView({
});


//If the app is running on an iPhone the table will be grouped together. 
if(Ti.Platform.name === "iPhone OS"){
	questions.style = Ti.UI.iPhone.TableViewStyle.GROUPED;
};

//Header for table view.
	var questionsSection = Ti.UI.createTableViewSection({
		headerTitle: data.aboutMe.headTitle,
	});

// Function that will run when a question is chosen. This function contains all the information for my views and text.
var detail = function(data){
	console.log(data);
	var detailWindow = Ti.UI.createWindow({
		title: "Answer",
		backgroundColor: "#3d3d3e",
		fullscreen: true,
	});
	// I use data.title to pull the information from the JSON data. 
	var questionsText = Ti.UI.createLabel({
		text: data.title,
		font: {fontSize: 24, fontFamily: "AmericanTypewriter", fontWeight: "light"},
		color: "#ffff",
	});
	
	var questionBox = Ti.UI.createView({
			backgroundColor:"#FF4C4C",
			top: 70, 
			height: 80,
	});
	
	var questionBack = Ti.UI.createView({
			backgroundColor:"#922B2B",
			top: 75, 
			height: 80,
	});
	
	var detailText = Ti.UI.createLabel({
		text: data.desc,
		font: {fontSize: 18, fontFamily: "AmericanTypewriter", fontWeight: "light"},
		color: "#fff",
	});
	
	// I use a empty view to keep my text margins away from the edge of the screen, I'm not exactly sure if there is a better way of doing this.
	var textBox = Ti.UI.createView({
			height: 200,
			width: 290,
	});
	
	var detailTextBackground = Ti.UI.createView({
			backgroundColor:"#E54444",
			top:200,
			height: 200,
	});
	
	var detailBack = Ti.UI.createView({
			backgroundColor:"#922B2B",
			top:205,
			height: 200,
	});
	
	//Opens the detailWindow in a Navigation window allowing the user to click back to go to the questions list again.
	navWindow.openWindow(detailWindow);
	
	questionBox.add(questionsText);
	
	textBox.add(detailText);
	detailTextBackground.add(textBox);
	detailWindow.add(detailBack, detailTextBackground,questionBack, questionBox);
	
};


for(var i=0, j=data.aboutMe.questions.length; i<j; i++){
	var row = Ti.UI.createTableViewRow({
		title: data.aboutMe.questions[i].title,
		desc: data.aboutMe.questions[i].description,
	});
	
	questionsSection.add(row);
};

//Using Event Propagation instead of making an event listener to every button.
questions.addEventListener("click", function(event){
	console.log(event.source);
});

var questionsSections = [questionsSection];
questions.setData(questionsSections);
dataView.add(questions);
