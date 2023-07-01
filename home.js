
var revealIntent = document.getElementById("intent");
var revealAct = document.getElementById("act");
var revealGrowth = document.getElementById("growth");
var revealCurious = document.getElementById("curious");
var revealCreate = document.getElementById("create");
var revealAware = document.getElementById("aware");
var revealExpress = document.getElementById("express");
var revealHumble = document.getElementById("humble");

var intentDesc = document.getElementById("intent-desc");
var actDesc = document.getElementById("act-desc");
var growthDesc = document.getElementById("growth-desc");
var curiousDesc = document.getElementById("curious-desc");
var createDesc = document.getElementById("create-desc");
var awareDesc = document.getElementById("aware-desc");
var expressDesc = document.getElementById("express-desc");
var humbleDesc = document.getElementById("humble-desc");

var who = document.getElementById("who");


// Add an event listener for the mouseover event on the button
revealIntent.addEventListener("mouseover", function() {
    intentDesc.style.opacity = 1; // Show the hidden text
    who.style.opacity = 0; // hide the big words
  });
  // Add an event listener for the mouseout event on the button
  revealIntent.addEventListener("mouseout", function() {
    intentDesc.style.opacity = 0; // Hide the text again
    who.style.opacity = 1; // show the big words
  });
  // Add an event listener for the mouseover event on the button
revealAct.addEventListener("mouseover", function() {
    actDesc.style.opacity = 1; // Show the hidden text
    who.style.opacity = 0; // hide the big words
  });
  // Add an event listener for the mouseout event on the button
  revealAct.addEventListener("mouseout", function() {
    actDesc.style.opacity = 0; // Hide the text again
    who.style.opacity = 1; // show the big words
  });
  // Add an event listener for the mouseover event on the button
revealGrowth.addEventListener("mouseover", function() {
    growthDesc.style.opacity = 1; // Show the hidden text
    who.style.opacity = 0; // hide the big words
  });
  // Add an event listener for the mouseout event on the button
  revealGrowth.addEventListener("mouseout", function() {
    growthDesc.style.opacity = 0; // Hide the text again
    who.style.opacity = 1; // show the big words
  });
  // Add an event listener for the mouseover event on the button
revealCurious.addEventListener("mouseover", function() {
    curiousDesc.style.opacity = 1; // Show the hidden text
    who.style.opacity = 0; // hide the big words
  });
  // Add an event listener for the mouseout event on the button
  revealCurious.addEventListener("mouseout", function() {
    curiousDesc.style.opacity = 0; // Hide the text again
    who.style.opacity = 1; // show the big words
  });
  // Add an event listener for the mouseover event on the button
revealCreate.addEventListener("mouseover", function() {
    createDesc.style.opacity = 1; // Show the hidden text
    who.style.opacity = 0; // hide the big words
  });
  // Add an event listener for the mouseout event on the button
  revealCreate.addEventListener("mouseout", function() {
    createDesc.style.opacity = 0; // Hide the text again
    who.style.opacity = 1; // show the big words
  });
  // Add an event listener for the mouseover event on the button
revealAware.addEventListener("mouseover", function() {
    awareDesc.style.opacity = 1; // Show the hidden text
    who.style.opacity = 0; // hide the big words
  });
  // Add an event listener for the mouseout event on the button
  revealAware.addEventListener("mouseout", function() {
    awareDesc.style.opacity = 0; // Hide the text again
    who.style.opacity = 1; // show the big words
  });
  // Add an event listener for the mouseover event on the button
revealExpress.addEventListener("mouseover", function() {
    expressDesc.style.opacity = 1; // Show the hidden text
    who.style.opacity = 0; // hide the big words
  });
  // Add an event listener for the mouseout event on the button
  revealExpress.addEventListener("mouseout", function() {
    expressDesc.style.opacity = 0; // Hide the text again
    who.style.opacity = 1; // show the big words
  });
  // Add an event listener for the mouseover event on the button
revealHumble.addEventListener("mouseover", function() {
    humbleDesc.style.opacity = 1; // Show the hidden text
    who.style.opacity = 0; // hide the big words
  });
  // Add an event listener for the mouseout event on the button
  revealHumble.addEventListener("mouseout", function() {
    humbleDesc.style.opacity = 0; // Hide the text again
    who.style.opacity = 1; // show the big words
  });