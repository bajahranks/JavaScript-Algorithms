/****************************************************************************
* Function to lookup a profile stored in an Array of Objects. It checks for 
* someone first name, if found it will check to see if the property passed as
* an argument is part of the person's profile. If it wasn't able to find either
* then a message stating that will be returned.
* - Developed by Ravi Lamontagne
*******************************************************************************/

function lookUpProfile(firstName, prop){

	var noFirstName = true;
	var noProp = true;
	  
	for (var i = 0; i < contacts.length; i++){
	  if (contacts[i].firstName === firstName){
		noFirstName = false; 
		if (contacts[i].hasOwnProperty(prop)){
		  noProp = false;
		  return contacts[i][prop];
		}
	  }
	}
	  
	if (noFirstName){
		return "No such contact";
	  } else if (noProp){
		return "No such property";
	  }  
  
}