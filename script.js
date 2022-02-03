//eVisit Coding Challenge: Web service receives requests from ~20 million unique IP addresses every day. In memory, track top 100 IP addresses (most requests per day). Sort from most to least requests

var dailyIPs = [];

function requestHandled() {
    jQuery(document).ready(function($) {
        $.getJSON('https://api.ipify.org?format=json', function(data){
        //IP to string
            $(".ip").text(data.ip);
        //store in array
            dailyIPs.push(data.ip)
        });
    });
}

function top100() {
    //display the number of occurrences for each IP address
    const count = {};
    for (const e of dailyIPs) {
        if (count[e]) {
            count[e] += 1;
        }
        else {
            count[e] = 1;
        }
    }
    //TO DO: sort from greatest to least and display
}

//TO DO: call top100() at the end of each day (or in the event we want to see it)

//Clear the data each day
function clear() {
    dailyIPs = [];
   }

setTimeout(clear, 86400000);



//alternative method requiring the use of NPM and axios 
// async function getIpClient() {
//     try {
//       const response = await axios.get('https://api.ipify.org?format=json');
//       console.log(response);
//     } catch (error) {
//       console.error(error);
//     }
//   }
  
//   getIpClient();