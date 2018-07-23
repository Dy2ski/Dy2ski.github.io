document.write("<h1>RESULTS</h1>");
var correct = 0;
alert("Welcome to my quiz about science and fiction. These questions are from books, history, and movies!");
var rightYear = 1977;
var question1 = prompt("What year did 'Star Wars: a New Hope' get released?");
if (parseInt(question1) === rightYear ) { correct +=1;
  document.write("<ul><strong>Question 1 - </strong> What year did 'Star Wars: A New Hope' get released?</ul> <ul><strong> Answer: 1977 </strong></ul> <ul>You got the right answer! Yoda is proud!</ul>");

} else {
    document.write("<ul><strong>Question 1 - </strong> What year did 'Star Wars: A New Hope' get released? </ul> <ul><strong> Answer: 1977 </strong></ul> <ul>Your answer is incorrect. You are NO jedi!</ul>");

}



var question2 = prompt("Who was the author of the book '1984'?");
if (question2.toLowerCase() === "george orwell" ) { correct +=1;
  document.write("<ul><strong>Question 2 - </strong> Who was the author of the book '1984'?</ul> <ul><strong> Answer: George Orwell </strong></ul> <ul>Yout got the right answer! You should work for the thought police!</ul>");







} else {
  document.write("<ul><strong>Question 2 - </strong> Who was the author of the book '1984'?</ul> <ul><strong> Answer: George Orwell </strong></ul> <ul>Your answer is incorrect. Big Brother is watching!</ul>");

}


var question3 = prompt("What is the farthest planet in our solar system? Hint: Pluto does not count, since it is a dwarf planet.");
if (question3.toLowerCase() === "neptune" ) { correct +=1;
     document.write("<ul><strong>Question 3 - </strong> What is the farthest planet in our solar system? Hint: Pluto does not count, since it is a dwarf planet.</ul> <ul><strong> Answer: Neptune </strong></ul> <ul>You got the right answer! YEAH! Hope you did NOT use Google!</ul>");
} else {
  document.write("<ul><strong>Question 3 - </strong> What is the farthest planet in our solar system? Hint: Pluto does not count, since it is a dwarf planet.</ul> <ul><strong> Answer: Neptune </strong></ul> <ul>Your answer is incorrect. Did you sleep through third grade???</ul>");


}


var question4 = prompt("In the movie, 'Terminator' what was the computer system that became self aware and started the war with the Humans called? Hint: It's one word.");
if (question4.toLowerCase() === "skynet") { correct +=1;
  document.write("<ul><strong>Question 4 - </strong> In the movie, 'Terminator' what was the computer system that became self aware and started the war with the Humans called? Hint: It's one word. </ul> <ul><strong> Answer: Skynet </strong></ul> <ul>You got the right answer! You are totally awesome!! You must like the 80s. Oh what a nice mullet you have! :)</ul>");


} else {
  document.write("<ul><strong>Question 4 - </strong> In the movie, 'Terminator' what was the computer system that became self aware and started the war with the Humans called? Hint: It's one word.</ul> <ul><strong> Answer: Skynet </strong> </ul> <ul>Your answer is incorrect. You should probably get a Delorean and spend some time in the 1980s!</ul>");


}


var question5 = prompt("Who was the second person to walk on the moon's surface after Neil Armstrong?");
if (question5.toLowerCase() === "buzz aldrin") { correct +=1;
  document.write("<ul><strong>Question 5 - </strong> Who was the second person to walk on the moon's surface after Neil Armstrong?</ul> <ul><strong> Answer: Buzz Aldrin</strong> </ul> <ul>You got the right answer! The Eagle has landed baby!</ul>");


} else {
  document.write("<ul><strong>Question 5 - </strong> Who was the second person to walk on the moon's surface after Neil Armstrong?'</ul> <ul><strong> Answer: Buzz Aldrin </strong> </ul> <ul>Your answer is INCORRECT!! You were probably rooting for the Russians to get to the moon first! boooo.</ul>");

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
