
//Work JSON 
var work = {
    "jobs": [{
        "employer": "Texas State University",
        "title": "Graduate Assistant",
        "location": "San Marcos",
        "dates": "May 2016-Present",
        "description": "My current study is focusing on web development, object oriented programming and software testing. "
    },
    {
        "employer": "BOA Marine Services Inc.",
        "title": "Marine Engineer",
        "location": "Houston",
        "dates": "May. 2013-Aug. 2013",
        "description": "As a engineer, I was focusing on devloping JavaScript,Python, and VB scripting code."
    },  
    {
        "employer": "Texas A&M University ",
        "title": "Lab Assistant",
        "location": "College Station",
        "dates": "Aug. 2011-May 2012",
        "description": "Create MATLAB code to investigated the coupling between vibration and acoustic of solid plate and membrane."
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
			"github": "https://github.com/hitwater/Udacity-P5-Neighborhoodmap",
			"demo": "http://hitwater.github.io//Udacity-P5-Neighborhoodmap/",
		},
		{
			"title": "Restaurant Website",
			"date worked": "April, 2016",
			"description": "An interactive web system with AngularJS, Node.js, Express.js, and MongoDB which allows users to register and login into the restaurant website, search dishes’ menu, and write review for dishes. ",
			"github": "https://github.com/hitwater/coursera-full-stack-web-development",
			
		},
		{
			"title": "Car Dealership Managment",
			"date worked": "December, 2016",
			"description": "A Dealership Management system in Java to help customers and employees to finish the transactions.",
			"image": "http://hitwater.github.io/images/4.jpg",
			"github": "https://github.com/hitwater/Car-Dealership-Managment-Software",
			"demo": "https://youtu.be/5AmEeVsn9jU"
			
		
		},
		{
			"title": "Rental Books Website",
			"date worked": "March, 2016",
			"description": "A rental books website for students to rent textbooks using HTML5, JavaScript , PHP and MySQL",			
			"image": "http://hitwater.github.io/images/6.jpg",
			"github": "https://github.com/hitwater/Rental_Books",
			"demo": "https://youtu.be/PPM8KJhob9A"
		},
		{
			"title": "Arcade Game",
			"date worked": "April, 2016",
			"description": "Classic arcade game clone project for Udacity Front-end Web Development Nanodegree",
			"github": "https://github.com/hitwater/Udacity-P3-Arcade-Game",
			"demo": "http://hitwater.github.io//Udacity-P3-Arcade-Game/"
		},
		{
			"title": "Python Interactive Game",
			"date worked": "December, 2015",
			"description": "Use Python code to create interactive game such as Ping-Pong, Blackjack, and Asteroids",
			"github": "https://github.com/hitwater/Python-Interactive-Game",
			"demo": "https://youtu.be/i5w6WTa5uVU"
		},
		{
			"title": "Simulate of Ethernet",
			"date worked": "March, 2016",
			"description": "Implemented TCP sockets and develop C program to simulate of an Ethernet with UNIX processes",
			"image": "http://hitwater.github.io/images/5.jpg",
			"github": "https://github.com/hitwater/Simulation_of_Ethernet",
		}

	]

};
// Display project json info
projects.display = function(){
	for (var project in projects.projects){

			$("#projects").append(HTMLprojectStart);

			$(".project-entry:last").append('<div id="div' + project + '"></div>')
										.append(HTMLprojectTitle.replace("%data%", projects.projects[project]["title"]))
										.append(HTMLprojectDates.replace("%data%", projects.projects[project]["date worked"]))
										.append(HTMLprojectDescription.replace("%data%", projects.projects[project]["description"]));
			// display demo or github json info if they exisit
			if (projects.projects[project]["demo"] != undefined )
				$(".project-entry:last").append(HTMLprojectDemo.replace("#", projects.projects[project]["demo"]));
			if (projects.projects[project]["github"] != undefined )
				$(".project-entry:last").append(HTMLprojectGithub.replace("#", projects.projects[project]["github"]));
	}

}


//Bio JSON
var bio = {
	"first name": "Guiming  ",
	"last name": "  Huang",
    "role": "Graduate Student Major in Software Engineering",
    "contacts": {
        "mobile number": "979-402-6699",
        "email": "guiming2011@gmail.com",
        "github username": "hitwater",
        "twitter handle": "@guiming2016",
        "location": "Austin"
    },
	"welcome message": "I'm passionate about web design and web development and highly self-motivated and goal-oriented professional committed to pursuing a long-term career in software engineer. Skilled analytical problem-solver with the ability to quickly learn new technologies. Ability to work well with people at all levels. 2+ years of hands on experience with HTML, CSS, JavaScript, MEAN stack, Python. Familiar with software development life cycle. Feel free to check out my Github repositories and demo projects. You can also find me on Linkedin and Twitter.",
    "skills": ["Java","C++","Python", "SQL", "Javascript",  "HTML5", "CSS", "JQuery","Bootstrap","Knockout.js","Express.js","MongoDB","Angular.JS","Node.js","Linux", "Eclipse", "Sublime", "Git", "MATLAB"],
    "bio pic": "images/fry.jpg"	
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
        "majors": ["Software Engineering"],
        "dates": "12-15-2017",
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
    "onlineCourses": [{
        "title": "NanoDegree",
        "school": "Udacity",
        "dates": "02.01.2016",
        "url": "https://www.udacity.com/"
    },{
        "title": "Full Stack Web Development",
        "school": "Coursera",
        "dates": "10.01.2016",
        "url": "https://www.coursera.org/"
    }
    ]
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
	$("#education").append(HTMLonlineClasses);
	// Display online courses
	for (var onlineCourse in education.onlineCourses){	
		var num = education.schools.length + parseInt(onlineCourse);
		$("#education").append(HTMLschoolStart);
		$(".education-entry:last").append(HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse]["dates"]))
									.append(HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse]["school"]))
									.append(HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse]["title"]))
									.append(HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourse]["url"]));
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


// Call bio, work, projects and education functions
bio.display();
work.display();
projects.display();
education.display();






