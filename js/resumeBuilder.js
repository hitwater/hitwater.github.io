
//Work JSON 
var work = {
    "jobs": [    
    {
        "employer": "Tokyo Electron",
        "title": "Software Engineer Intern",
        "location": "Austin",
        "dates": "May. 2017-Aug. 2017",
        "description": "As a engineer, I was focusing on devloping Python and Matlab code for image processing and data analytics."
    }, 
    {
        "employer": "Texas State University",
        "title": "Graduate Assistant",
        "location": "San Marcos",
        "dates": "May 2016-Present",
        "description": "My current study is focusing on web development, object oriented programming and software testing."
    },
 
    {
        "employer": "Texas A&M University ",
        "title": "Lab Assistant",
        "location": "College Station",
        "dates": "Aug. 2011-May 2012",
        "description": "Create MATLAB code to investigated the coupling between vibration and acoustic of solid plate and membrane."
    },  
    {
        "employer": "Harbin Institute of Technology",
        "title": "Research Assistant",
        "location": "Harbin",
        "dates": "Aug. 2009-May 2011",
        "description": "Developed C++ code to create user interface, control motion of motor, and generate data for A/D converter."
    }]
	
};
// Display work json info
work.display = function(){
	
	for (var job in work.jobs){
		$("#workExperience").append(HTMLworkStart);
		$(".work-entry:last").append(HTMLworkTitle.replace("%data%", work.jobs[job]["title"]))
								.append(HTMLworkEmployer.replace("%data%", work.jobs[job]["employer"]))
								.append(HTMLworkLocation.replace("%data%", work.jobs[job]["location"]))
								.append(HTMLworkDates.replace("%data%", work.jobs[job]["dates"]))
								.append(HTMLworkDescription.replace("%data%", work.jobs[job]["description"]));
	}
		
}
// Projects JSON
var projects = {
	"projects": [
		{
			"title": "Neighborhood Map",
			"date worked": "May, 2016",
			"description": "Neighborhood Map project for Udacity Front-end Web Development Nanodegree",
			"demo": "http://hitwater.github.io//Udacity-P5-Neighborhoodmap/",
			"github": "https://github.com/hitwater/Udacity-P5-Neighborhoodmap",

			"progress": 100
		},
		{
			"title": "Car Dealership Managment",
			"date worked": "December, 2016",
			"description": "A Dealership Management system in Java to help customers and employees to finish the transactions.",
			"video": "https://youtu.be/4sZCm70FwZA",
			"github": "https://github.com/hitwater/Car-Dealership-Managment-Software",
			"progress": 100
		},
		{
			"title": "Keyword Search Engine",
			"date worked": "April, 2017",
			"description": "Implement a keyword search interface with AngularJS, Elasticsearch and Bonsai for local keyword search",
			"demo" : "https://hitwater.github.io/Keyword_Local_Search/",
			"github": "https://github.com/hitwater/Keyword_Local_Search",
			"progress": 80
			
		},
		{
			"title": "Texas-State-Online-Bookstore",
			"date worked": "December, 2016",
			"description": "Create an online Bookstore with Angular.JS and Google Firebase.",
			"video": "https://youtu.be/yvPkUIwMEQI",
			"github": "https://github.com/hitwater/Texas-State-Online-Bookstore",
			"progress": 80
		},
		{
			"title": "Rental Books Website",
			"date worked": "March, 2016",
			"description": "A rental books website for students to rent textbooks using HTML5, JavaScript , PHP and MySQL",			
			"video": "https://youtu.be/uee8MFr05ks",
			"github": "https://github.com/hitwater/Rental_Books",
			"progress": 90
		},
		{
			"title": "Arcade Game",
			"date worked": "April, 2016",
			"description": "Classic arcade game clone project for Udacity Front-end Web Development Nanodegree",
			"demo": "http://hitwater.github.io//Udacity-P3-Arcade-Game/",
			"github": "https://github.com/hitwater/Udacity-P3-Arcade-Game",
			"progress": 100
		},
		{
			"title": "Python Interactive Game",
			"date worked": "December, 2015",
			"description": "Use Python code to create interactive game such as Ping-Pong, Blackjack, and Asteroids",
			"video": "https://youtu.be/LH7BGrw5N9o",
			"github": "https://github.com/hitwater/Python-Interactive-Game",
			"progress": 100
		},		
		{
			"title": "Website Optimization",
			"date worked": "April, 2016",
			"description": "Optimized an inefficient web application's JavaScript, CSS and assets delivery",
			"github": "https://github.com/hitwater/Udacity-P4-Website-Optimization",
			"progress": 100
		},
		{
			"title": "Simulate of Ethernet",
			"date worked": "March, 2016",
			"description": "Implemented TCP sockets and develop C program to simulate of an Ethernet with UNIX processes",
			"github": "https://github.com/hitwater/Simulation_of_Ethernet",
			"progress": 100
		},
		

	]

};
// Display project json info
projects.display = function(){
	var d3Div = new Array(projects.projects.length);
	var progressDiv = new Array(projects.projects.length);
	for (var project in projects.projects){

			$("#projects").append(HTMLprojectStart);

			$(".project-entry:last").append('<div id="div' + project + '"></div>')
										.append(HTMLprojectTitle.replace("%data%", projects.projects[project]["title"]))
										.append(HTMLprojectDates.replace("%data%", projects.projects[project]["date worked"]))
										.append(HTMLprojectDescription.replace("%data%", projects.projects[project]["description"]));
			// display demo or github json info if they exisit
			if (projects.projects[project]["demo"] != undefined )
				$(".project-entry:last").append(HTMLprojectDemo.replace("#", projects.projects[project]["demo"]));
			if (projects.projects[project]["video"] != undefined )
				$(".project-entry:last").append(HTMLprojectVideo.replace("#", projects.projects[project]["video"]));
			if (projects.projects[project]["github"] != undefined )
				$(".project-entry:last").append(HTMLprojectGithub.replace("#", projects.projects[project]["github"]));
			// call d3 progress chart function
			projects.progressChart(d3Div, progressDiv, project, 'div' + project, projects.projects[project]["progress"]);

	}

}
// project d3 progress chart function
projects.progressChart = function(d3Div, progressDiv, project, container, value) {

	d3Div[project] = d3.select(document.getElementById(container));

	progressDiv[project] = radialProgress(document.getElementById(container))
        .diameter(150)
        .value(value)
        .render();
};


//Bio JSON
var bio = {
	"first name": "Guiming  ",
	"last name": "  Huang",
    	"role": "Graduate Student Major in Computer Science",
	 "welcome message": "Highly self-motivated and goal-oriented professional committed to pursuing a position in Software Engineer. Skilled analytical problem-solver with the ability to quickly learn new technologies. Ability to work well with people at all levels. 3+ years of hands on experience with C++, Java, Python, JavaScript. Familiar with software development life cycle.",
    	"contacts": {
        "mobile number": "979-402-6699",
        "email": "guiming2011@gmail.com",
	"github username": "hitwater",		
        "twitter handle": "@guiming2016",
        "location": "Austin"
    },
    "skills": ["Java","C++","Python", "Javascript", "SQL","MEAN Stack","IntelliJ", "Git", "Linux"],
};
bio.display = function(){
	var formattedFName = HTMLheaderFName.replace("%data%", bio["first name"].toUpperCase());
	var formattedLName = HTMLheaderLName.replace("%data%", bio["last name"].toUpperCase());
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role.toUpperCase());
	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts["mobile number"]);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts["email"]);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts["github username"]);
	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts["twitter handle"]);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts["location"]);
	var formattedBioPic = HTMLbioPic.replace("%data%", bio["bio pic"]);
	var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio["welcome message"]);

	
	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedLName);
	$("#header").prepend(formattedFName);	
	$("#header").append(formattedWelcomeMsg);
	$("#topContacts ul").append(formattedMobile);
	$("#topContacts ul").append(formattedEmail);
	$("#topContacts ul").append(formattedGithub);
	$("#topContacts ul").append(formattedTwitter);	
	$("#topContacts ul").append(formattedLocation);

    for (var skill = 0; skill < bio.skills.length; skill++) {
        var formattedskills = HTMLskills.replace("%data%", bio.skills[skill]);
        $("#skills-list").append(formattedskills);
    }

}
//Education JSON
var education = {
    "schools": [{
        "name": "Texas State University",
        "location": "San Marcos",
        "degree": "Master degree",
        "majors": ["Computer Science"],
        "dates": "05-15-2018",
        "url": "http://www.txstate.edu/"
    },{
        "name": "Texas A&M University",
        "location": "College Station",
        "degree": "Master degree",
        "majors": ["Ocean Engineering"],
        "dates": "12-12-2013",
        "url": "https://www.tamu.edu/"
    }, {
        "name": "Harbin Insititute of Technology",
        "location": "Harbin",
        "degree": "Bachelor degree",
        "majors": ["Mechanical Engineering"],
        "dates": "07-01-2009",
        "url": "http://en.hit.edu.cn/"
    }],
};
// Display education json info
education.display = function(){
	for (var school in education.schools){	
		$("#education").append(HTMLschoolStart);
		$(".education-entry:last").append(HTMLschoolDates.replace("%data%", education.schools[school]["dates"]))
									.append(HTMLschoolName.replace("%data%", education.schools[school]["name"]).replace("#", education.schools[school]["url"]))
									.append(HTMLschoolLocation.replace("%data%", education.schools[school]["location"]));
																											
		for(var major in education.schools[school].majors){
			$(".education-entry:last").append(HTMLschoolMajor.replace("%data%", education.schools[school]["majors"][major]));
		}
	}

}
//Map
$("#mapDiv").append(googleMap);


// Display a list of skill labels
var skillsChartLabels = function(){
	for (skill in polarData){
	  var skillLabelColor = polarData[skill].labelcolor;
	  var skillHTML = '<span class="label ' + skillLabelColor + '">' + skillLabel + '</span>';
	  $("#skills-list").append(skillHTML);
	}
}
// chartjs library from: http://www.chartjs.org/docs/#polar-area-chart
var polarData = [
  {
    value: 10,
    color:"#F7464A",
    highlight: "#FF5A5E",
    label: "Java",
    labelcolor: "red"
  },
  {
    value: 8,
    color:"#F06613",
    highlight: "#FF5A5E",
    label: "C++",
    labelcolor: "gray"
  },
  {
    value: 8,
    color:"#F06613",
    highlight: "#FF5A5E",
    label: "Python",
    labelcolor: "orange"
  },
  {
    value: 8,
    color: "#46BFBD",
    highlight: "#5AD3D1",
    label: "Javascript",
    labelcolor: "green"
  },
  {
    value: 8,
    color: "#46BFBD",
    highlight: "#5AD3D1",
    label: "SQL",
    labelcolor: "gray"
  },
  {
    value: 6,
    color: "#FDB45C",
    highlight: "#FFC870",
    label: "MEAN stack",
    labelcolor: "yellow"
  },
  {
    value: 6,
    color: "#949FB1",
    highlight: "#A8B3C5",
    label: "IntelliJ",
    labelcolor: "green"
  },
	
  {
    value: 6,
    color: "#23582b",
    highlight: "#A8B3C5",
    label: "Git",
    labelcolor: "darker-green"
  },
  {
    value: 5,
    color: "#4D5360",
    highlight: "#616774",
    label: "Linux",
    labelcolor: "darker-gray"
  }

  ];
// Display a list of skill labels
var skillsChartLabels = function(){
	for (skill in polarData){
	  var skillLabel = polarData[skill].label;
	  var skillLabelColor = polarData[skill].labelcolor;
	  var skillHTML = '<span class="label ' + skillLabelColor + '">' + skillLabel + '</span>';
	  $("#skills-list").append(skillHTML);
	}
}
// Call functions
window.onload = function(){
	var ctx = document.getElementById("skills-chart").getContext("2d");
	window.myPolarArea = new Chart(ctx).PolarArea(polarData, {
  		responsive:false
	});
	// Call skillsChartLabels function defined
	skillsChartLabels();
};
// Call
// Call bio, work, projects and education functions
bio.display();
work.display();
projects.display();
education.display();






