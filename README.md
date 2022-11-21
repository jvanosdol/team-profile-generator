# weather-app# <Timed-Quiz>

## Author

James Van Osdol

## Description

This project demonstrates knowledge of generating custom HTML files based on user input. The initial HTML is blank except for a header element. As the user answers the prompts, the answers are then saved and are built into the HTML file. When the user is finished with prompts, the HTML file will finish generating and will display all of the user generated input. The user input will be displayed in cards within the main page. The HTML file is reset each time the program is run. 

The goal of the project is to generate a web page that displays a 'team' that the user creates. The user must add a manager and then has the option to add any number of interns or engineers. Based on the type of employee that is being added, the user will be prompted to add specific data about the employee. 





*** Added the ability to delete previously saved notes

The purpose of this project is to demonstrate knowledge of DOM manipulation and using localStorage to save and call saved data and then display it in specific text-areas. 

The project displays time-blocks, broken down by hour. Each time-block 'row' has a designated 'time', a text-area, a save button, and a delete button. The delete button is extra, I thought it would be fun to try and add the ability to delete specific items. 

Each 'row' event is broken down by hour, from 9AM to 5PM. Each row's text-area will change color depending on how the local time compares to the event row's set time. Text-areas in each row will change color based local time, 'green' if the event is in the future, 'red' if the event time matches the local time, and 'grey' if the event has already passed (the event time is less than the local time).

For instance, the first row is 9AM, if the local time is 8AM, the 9AM row will be set to green, indicating that this event is still in the future. If the event time matches the current local hour, the event's text-area will be set to 'red', and if the event is in the past, the text-area will be set to grey.


User's are able to enter in text into each of the text-areas, if the page is refreshed, the text will not be saved. In order to save the text in the desired text-area, the user must click on the 'save' button. Clicking the 'save' button stores the text content within a specific text-area to local storage, the page is then refreshed and then the local storage value for the specific text-area is then pulled from local storage and then displayed within the text-area. 

The user also has the added ability to delete the text content within a specified text-area. The user can click on the 'delete' button which will clear the value/text content from a specific text-area, by clearing its respective local storage.

## Table of Contents

- [Installation](#installation)
- [Screenshots](#screenshots)
- [Credits](#credits)
- [Features](#features)
- [How To Contribute](#how-to-contribute)
- [Contact](#contact)


## Built With

-Javascript
-HTML
-CSS



## Installation

Clone the repo
git clone https://github.com/jvanosdol/daily-planner


## Screenshots


- Planner Screenshot


  ![screenshot](/assets/planner-screenshot.png)


## Credits

- [Google](https://www.google.com)
- [W3](https://www.w3schools.com)
- [stackoverflow](https://stackoverflow.com/)

## Features

This app allows users to create a daily planner, they can enter, save, and then delete events based on hourly time slots.


## Deployed Page

https://jvanosdol.github.io/daily-planner/


## Github Repo

https://github.com/jvanosdol/daily-planner


## How to Contribute

1. Fork the Project
2. Create your Feature Branch (git checkout -b)
3. Commit your Changes (git commit -m '')
4. Push to the Branch (git push origin)
5. Open a Pull Request


## Contact

Github username: jvanosdol

email: j.vanosdol99@yahoo.com

