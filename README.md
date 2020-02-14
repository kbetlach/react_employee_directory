# React Employee Directory

## Introduction

This is a directory created with React.js that on load, displays all employees in an ascending alphabetical list by first name. The employee data is imported from an employee.json file.

The user is able to manipulate the list by filtering and sorting by various parameters. The filter is a search bar that shortens the list based on what the user types in. The application utilizes React.js state so that the interface updates in real time as the user interacts with it, as opposed to needing to click a button once the parameters are entered. The employee list will filter down by either first or last name, employee date of birth or employee location. If no employees are found, the list will simply display "No Employees Found."

Additionally, the user can sort the list by the same paramaters listed above, and order the list in ascending or descending order.

<img width="1279" alt="directory" src="https://user-images.githubusercontent.com/53587397/74564239-3a1b9000-4f34-11ea-92ef-fa5a6236f97c.png">

## User Story

As a user, I want to be able to view my entire employee directory at once so that I have quick access to their information.

## Technologies Utilized

- React.js
- React.js State / Render

## Launch

Here is the link to the deployed app on Surge:

(http://materialistic-boats.surge.sh/)

## Sources and Inspiration

This is my first app made using React.js, providing some valuable practice with components and state, and learning how to link everything together to create the final product.

I benefitted a lot from visualizing how everything fit together, and not being shy about creating many different components to achieve my desired end result. I'm most proud of the following code, which is where state manipulation and page layout all happens in the EmployeeInfo. js:

<img width="895" alt="code" src="https://user-images.githubusercontent.com/53587397/74564245-3d168080-4f34-11ea-82f3-4146fc889800.png">