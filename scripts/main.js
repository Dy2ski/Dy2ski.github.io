alert("Hello from Steve the creator of this game.");
document.write("<h1>RESULTS</h1>");
var correct = 0;
alert("Welcome to my quiz about Science-Fiction books, movies, and history!");
var rightYear = 1977;
var question1 = prompt("What year did 'Star Wars: A New Hope' get released?");
if (parseInt(question1) === rightYear ) { correct +=1;
  document.write("<ul><strong>Question 1 - </strong> What year did 'Star Wars: A New Hope' get released?</ul> <ul>You got the right answer! Yoda is proud!</ul>");

} else {
  document.write("<ul><strong>Question 1 - </strong> What year did 'Star Wars: A New Hope' get released?</ul> <ul>Your answer is incorrect. You are NO jedi!</ul>");

}

var question2 = prompt("Who was the author of the book '1984'?");
if (question2.toUpperCase() === 'GEORGE ORWELL') { correct +=1;
  document.write("<ul><strong>Question 2 - </strong> Who was the author of the book '1984'?</ul> <ul>You got the right answer! You should work for the Thought Police!</ul>");


} else {
  document.write("<ul><strong>Question 2 - </strong> Who was the author of the book '1984'?</ul> <ul>Your answer is incorrect. Big Brother is watching!</ul>");

}


var question3 = prompt("What is the farthest planet in our solar system? Hint: Pluto does not count, since it is a dwarf planet.");
if (question3.toUpperCase() === 'NEPTUNE' ) { correct +=1;
     document.write("<ul><strong>Question 3 - </strong> What is the farthest planet in our solar system?</ul> <ul>You got the right answer! YEAH! Hope you did NOT use Google!</ul>");
} else {
  document.write("<ul><strong>Question 3 - </strong> What is the farthest planet in our solar system?</ul> <ul>Your answer is incorrect. Did you sleep through third grade???</ul>");


}


var question4 = prompt("Which Sci-Fi movie was NOT based on a Stephen King book: 'Running Man,' 'The Lawnmower Man,' or 'Starman?' ");
if (question4.toUpperCase() === 'STARMAN') { correct +=1;
  document.write("<ul><strong>Question 4 - </strong> Which Sci-Fi movie was NOT based on a Stephen King book: 'Running Man,' 'The Lawnmower Man,' or 'Starman?'</ul> <ul>You got the right answer! You are totally awesome!! You must like the 80s. Oh what a nice mullet you have! :)</ul>");


} else {
  document.write("<ul><strong>Question 4 - </strong> Which Sci-Fi movie was NOT based on a Stephen King book: 'Running Man,' 'The Lawnmower Man,' or 'Starman?'</ul> <ul>Your answer is incorrect. You should probably get a Delorean and spend some time in the 1980s!</ul>");


}

alert('The last question is true or false!');
var question5 = prompt("TRUE or FALSE. Mission commander Neil Armstrong and pilot Buzz Aldrin, landed the lunar module in 1969. Armstrong became the first person to step on the surface.");
if (question5.toUpperCase() === 'TRUE') { correct +=1;
  document.write("<ul><strong>Question 5 - </strong> TRUE or FALSE. Mission commander Neil Armstrong and pilot Buzz Aldrin, landed the lunar module in 1969. Armstrong became the first person to step on the surface.</ul> <ul>You got the right answer! The Eagle has landed baby!</ul>");


} else {
  document.write('<ul><strong>Question 5 - </strong> TRUE or FALSE. Mission commander Neil Armstrong and pilot Buzz Aldrin, landed the lunar module in 1969. Armstrong became the first person to step on the surface.</ul> <ul>Your answer is INCORRECT!! You were probably rooting for the Russians to get there first! boooo.</ul>');

}


//output results

document.write("<p> You got " + correct + " out of 5 questions correct.</p>");

// output rank

if ( correct === 5) {
   document.write("<p><strong> You got ALL correct!! YOU ARE A JEDI! </strong></p>");


} else if ( correct >= 4){
     document.write("<p><strong>You are almost a Jedi. Not bad!! You could probably fly an X-Wing pretty well!</strong></p>");

} else if ( correct >= 2) {
     document.write("<p><strong>You are of average skill. ehh. Did you try? At best you would be a stormtrooper in the 80th Star Wars movie.</strong></p>");



}  else {
      document.write("<p><strong> You have NO skills. You didn't put up any fight. Darth Vader would freeze you in carbonite.</strong></p>");
                    }
