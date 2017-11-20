import React from 'react';

export let titleInfo = {
    "name": "Maxwell Atkinson",
    "profession": "Fullstack Developer",
    "location": "Berlin, DE"
};

export let summary = "I am a fullstack developer with a passion for creating and designing applications. I began teaching myself how to develop code in grade school, and have pursued it ever since. In 2016 I attended an alternative education, a fully immersive, project based school called devCodeCamp. I chose to build my capstone project as a React-Native application because I had never designed anything for mobile or used React before, and I thought the challenge would prove my skills as a developer. This gave me the opportunity to showcase my ability to quickly teach myself a new library and show off my skills on mobile devices. After graduating at the top of my class, I was asked to build a MVP for Trailhead Clinical Strategies using React.js. Working on a team of 6 gave me insight to how a development team works and the processes required to create a product. I now live in Berlin and am looking for a position where I can use my skills to create something amazing.";

export let basicInfo = [
    { "title": "Name", "text": "Maxwell Scott Atkinson" },
    { "title": "Age", "text": _calculateAge(new Date(1994, 7, 15)) },
    { "title": "Nationality", "text": "American" },
    { "title": "Location", "text": "Berlin, DE" },
    { "title": "Language", "text": "English" }
];

export let skills = [
    { "title": "CSS", "progress":  70},
    { "title": "HTML", "progress":  100},
    { "title": "Javascript", "progress":  60},
    { "title": "JQuery", "progress":  50},
    { "title": "C#", "progress":  60},
    { "title": "PHP", "progress":  40},
    { "title": "React", "progress":  60},
    { "title": "React-Native", "progress":  60},
    { "title": "Git", "progress":  80},
    { "title": "MySQL", "progress":  60},
    { "title": "UX Design", "progress":  50},
    { "title": "Project Management", "progress":  30}
];

export let education = [
    {
        "name": "devCodeCamp",
        "dates": "January 2017",
        "major": "Fullstack Software Development",
        "location": "Milwaukee, WI",
        "description": "Learned Fullstack Development procedures and guidelines through an fully immersive experience. Taught using a constantly evoving curriculum that focused on project based learning and team building.",
        "image": "devCodeCamp.png"
    },
    {
        "name": "University of Wisconsin Milwaukee",
        "dates": "2012 - 2015",
        "major": "Laboratory Technician",
        "location": "Milwaukee, WI",
        "description": "Studied to be a laboratory technician through the university's biomedical science program.",
        "image": "uwm.png"
    }
];

export let experience = [
    {
        "name": "LatinoPro",
        "dates": "April 2017 - September 2017",
        "location": "Milwaukee, WI",
        "position": "Lead Developer",
        "description": "As the lead developer I focused on creating/maintaining documentation, leading agile development, developing main web application using Laravel, php, mysql, html/css, and react.js.",
        "image": "latinoPro.png"
    },
    {
        "name": "US Army",
        "dates": "August 2013 - Current",
        "location": "Milwaukee, WI",
        "position": "Signal Support Systems Specialist",
        "description": "Primarily responsible for working with battlefield signal support systems and terminal devices. This includes maintaining radio and data distribution systems, performing signal support functions and technical assistance for computer systems, providing technical assistance and training for local area networks, and maintenance for equipment, terminal devices, assigned vehicles and power generators.",
        "image": "us_army.png"
    },
    {
        "name": "MynaAE",
        "dates": "January 2017 - Febuary 2017",
        "location": "Milwaukee, WI",
        "position": "Developer",
        "description": "MynaAE was made using react.js for the company Trailhead Clinical Strategies to better translate clinical practice guidelines into applications from multiple healthcare IT vendors. This two week project consisted of implementing the authoring environment for Myna. The software system is designed to standardize the guideline testing independent of the technology stack used by hundreds of different HCIT vendors.",
        "image": "tcs.png"
    },
    {
        "name": "Geochat",
        "dates": "December 2016 - January 2017",
        "location": "Milwaukee, WI",
        "position": "Sole Developer",
        "description": "GeoChat is a messaging app created for my capstone. It leaves messages in real world locations and the messages can then be viewed by others who are also in that area. It was built using React.js for android.",
        "image": "geochat.png"
    }
];

export let contact = [
    {
        "name": "github",
        "icon": "github",
        "color": "DarkMagenta",
        "link": "https://github.com/Msatkin"
    },
    {
        "name": "linkedIn",
        "icon": "linkedin",
        "color": "DarkTurquoise",
        "link": "https://www.linkedin.com/in/maxwell-atkinson-703945135/"
    },
    {
        "name": "email",
        "icon": "envelope",
        "color": "Khaki",
        "link": "",
        "modal": true,
        "modalInfo": {
            "header": "Get In Contact",
            "body": emailBody(),
            "footer": emailFooter()
        }
    }
];

export let fullResume = {
    "title": titleInfo,
    "skills": skills,
    "education": education,
    "experience": experience
};

function _calculateAge(date) {
    var ageDifMs = Date.now() - date.getTime();
    var ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

function emailBody() {
    return (
        <div>
            <form id="gform" method="POST" data-email="mscottaa@gmail.com"
            action={"https://script.google.com/macros/s/AKfycby9NieXSUt8VD0L7f_7ssD9dbhJrCFvphGeoCUocFQ8PvoUNB60/exec"}>
                <div className={"form-group"}>
                    <label className={"pull-left"} htmlFor="name">Name:</label>
                    <input name="name" type="text" className={"form-control"} id="name" required/>
                </div>
                <div className={"form-group"}>
                    <label className={"pull-left"} htmlFor="email">Email:</label>
                    <input name="email" type="email" className={"form-control input-lg"} id="email" required/>
                    <span id="email-invalid" style={{display: "none"}}>Must be a valid email address</span>
                </div>
                <div className={"form-group"}>
                    <label className={"pull-left"} htmlFor="message">Message:</label>
                    <textarea name="message" rows="7" type="text" className={"form-control input-lg"} id="message" required/>
                </div>
            </form>
            <div style={{display: "none"}} id="thankyou_message">
                <h2><em>Thanks</em> for reaching out!
                I will get back to you soon!</h2>
            </div>
        </div>
    );
}

function emailFooter() {
    return (
        <div> 
            <input id="contact-submit" type="submit" value="Send" form="gform" className={"btn btn-primary btn-lg"}/>
            <button type="button" className={"btn btn-default btn-lg"} data-dismiss="modal">Close</button>   
        </div>
    );
}