# Timestamp Microservice

This is the boilerplate code for the Timestamp Microservice project. Instructions for building your project can be found at https://www.freecodecamp.org/learn/apis-and-microservices/apis-and-microservices-projects/timestamp-microservice


# Key 
1. Understand the goal
  - Whatever the input is, we return unix and UTC time.

  - If the input isn't valid, which means it's not any of the date format, return error.

  - If there's no paramDate, return currect date in unix and UTC.

2. Set the right questions

  - How can we return unix and UTC time? What needs to be the input and what will be the output of the methods we're going to use?

  Resource
  [https://www.w3schools.com/jsref/jsref_obj_date.asp]

  To summarize, an input of all this method must be a Date object, which can be created by new Date() first. 

  new Date(milliseconds); -> milliseconds is unix
  new Date(dateString); -> dateString can be UTC date param

  Output of both = Date object


  - How do you tell if the paramDate is unix or UTC?

  When parsed paramDate from the URL , everything is in string. 
  If it's in UTC format (valid date), then it can be parsed right away. 

  However, if it's in unix format (a sting of number), then we need to convert it into number first, in order to create new Date().

  - So how do we keep it as a string if it's in UTC, and convert it if it's a number? 
  
  ```sh
  const checkUnix = paramDate * 1;
  ```
  The output can be string if paramDate is a string(UTC) and can convert a string of number into Number. JS glitch.

  Now checkUnix will either be a number or string. 
  
  We can use isNaN() to identify if it's a number or a string, to set paramDate to a correct type of data for new Date()

  - How do you tell if the paramDate is valid?
  If you send invalid date into newDate(arg), it wil return 'Invalid Date'.
  We match that string to returned value. 

  - How do you return unix or UTC value?
  Now that we got a Date object from either Unix or UTC. We can use 
  .getTime() to return unix
  .toUTCString() to return UTC date






