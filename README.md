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
What is the runtime complexity of each function?
How does your code work?
What other approaches did you decide not to pursue?
How would you test this?

## Sources
- [node.js dns](https://nodejs.org/api/dns.html#dns_dns_lookup_hostname_options_callback)

## Questions
For questions, please email me.  
[Email Me](mailto:brookejones406@gmail.com)  