# [Expose Page](https://fresh-bruh.github.io/Lab5_Starter/expose.html)

## Lab Members 
* Noah Terrell
* Albert Hoang



## Expose Part 3. Unit Test Chech For Understanding 

**Question 1** - No, you would not use a unit test for the "message" feature. Sending a message involves multiple components working together the UI, the network, the database, the recipient receiving it, etc. Unit tests only test individual isolated pieces of code, so you can't really isolate "sending a message" into one unit. This would be better suited for an integration test.

**Question 2** - Yes, you would use a unit test for the "max message length" feature. This is a single isolated function that takes in a string and checks if it's over 80 characters it doesn't depend on anything else. You could easily write a unit test like:
- input of 80 characters -> should be allowed 
- input of 81 characters -> should be blocked 

It's self contained, simple, and has clear inputs and outputs exactly what unit tests are designed for.