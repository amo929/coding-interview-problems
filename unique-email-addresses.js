/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {

	var map = new Map();

	emails.forEach(val => {
	    var atIndex = val.indexOf("@");
	    if(atIndex <= 0) return;

	    var plusIndex = val.substring(0, atIndex).indexOf("+");
	    if(plusIndex <= 0) plusIndex = atIndex;

	    var local = val.substring(0, plusIndex).split(".").join("");
	    var domain = val.substring(atIndex);

	    map.set(local+domain, 1);
	})

	return map.size;
};

var arr = ["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"];

console.log(numUniqueEmails(arr));