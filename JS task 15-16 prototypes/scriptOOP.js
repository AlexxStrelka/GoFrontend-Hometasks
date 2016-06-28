$(function() {


function Human() {
	this.name = "Jan";
	this.age = 25;
	this.gender = 'male';
	this.height = 185;
	this.weight = 75;
}


function Worker(jobPlace) {
	this.jobPlace = jobPlace;
	this.salary = 25000;
}

function Student(studyPlace, scholarship) {
	this.studyPlace = studyPlace;
	this.scholarship = scholarship;

}

Worker.prototype = new Human();
Student.prototype = new Human();

Worker.prototype.working = function() {
		alert("I am busy working!");
	};

Student.prototype.watchTV = function() {
		alert("I am busy watching serials...");
	};



var newWorker = new Worker("Yahoo");
var newWorker2 = new Worker("Google");

var newStudent = new Student("KNEU", '1000');
var newStudent2 = new Student("KPI", '3000');


// console.log("newWorker.jobPlace", newWorker.jobPlace, newWorker);
// console.log("newStudent2.studyPlace", newStudent2.studyPlace, newStudent2.height);




});