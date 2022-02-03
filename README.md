# eVisitChallenge
Date: 2/2/2022

## Description  
* Challenge: Imagine your team has developed a web service that receives requests from about 20 million unique IP addresses every day. You want to keep track of the IP addresses that are making the most requests to your service each day. 

* Your job is to write a program that 
   - (1) tracks these IP addresses in memory (don’t use a database), and 
   - (2) returns the 100 most common IP addresses.

* In the language of your choice, please implement these functions:
   - request_handled(ip_address)
This function accepts a string containing an IP address like “145.87.2.109”. This function will be called by the web service every time it handles a request. The calling code is outside the scope of this project. Since it is being called very often, this function needs to have a fast runtime.

   - top100()
This function should return the top 100 IP addresses by request count, with the highest traffic IP address first. This function also needs to be fast. Imagine it needs to provide a quick response (< 300ms) to display on a dashboard, even with 20 millions IP addresses. This is a very important requirement. Don’t forget to satisfy this requirement.

   - clear()
Called at the start of each day to forget about all IP addresses and tallies.

## Table of Contents
- [Acceptance Criteria](#acceptance-criteria)
- [Approach](#approach-and-future-improvements)
- [Sources](#sources)
- [Questions](#questions)

## Acceptance Criteria
```
GIVEN a web service receives daily requests from about 20 million unique IP addresses
WHEN each day ends
THEN I am able to view the top 100 IP addresses
WHEN I view the top 100 IP addresses
THEN they are sorted by highest to lowest traffic
```

## Approach and Future Improvements
What would you do differently if you had more time?
   - Discuss with fellow coders to work out a better solution, as I'm sure this isn't it
   - Look into whether local storage is the way to store this kind (and amount) of data, given a db is off the table
   - 
What is the runtime complexity of each function?
   - the request handled function would be called each time a request is made, so pretty much continually
   - the top100() function needs additional code to only run at the end of the day prior to the clear() function
   -  the clear() function runs once every 24 hours
How does your code work?
    - I chose the ipify API as it does not have limitations to the number of requests. It is reliable, fast, fully funded, and has been around for years. No permissions needed for use. 
    - IP addresses are stored to an array and then unique occurrences are counted.
    I didn't have time, but from here you'd take the count and sort from greatest to least using .sort --  and display the results in the console or however it is preferred.
What other approaches did you decide not to pursue?
   - The async function I commented out at the bottom of the script.js file
How would you test this?
   - You could test on a smaller scale site/service to work out any bugs, then implement it into your actual service.

## Sources
- [Ipify](https://github.com/rdegges/ipify-api)

## Questions
For questions:  
[Email Me](mailto:brookejones406@gmail.com)  