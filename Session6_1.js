/*Input the basic salary of an employee and validate if the employee salary greater
than equals to 15000 and working_hr daily more than 10 hours. Then add 10%
bonus to its basic salary and display the basic salary with bonus. Else add 5%
bonus to its basic salary and display the result in a div box.*/

// Function to calculate salary with bonus.
function updateSalary(){
	// Hide result div box.
	var divResult=document.getElementById("result");
	divResult.style.display='none';

	var txtSalary= document.getElementById("txt_salary");
	var currentSalary= txtSalary.value;

	var txtHours= document.getElementById("txt_hours");
	var hours= txtHours.value;

	// Check for valid salaru and hours value.
	if(currentSalary && hours && !isNaN(currentSalary) && !isNaN(hours)){

		var bonus=0;
		// Compare bonus condition
		if(currentSalary >= 15000 && hours >=10){
			
			bonus = parseFloat(currentSalary) * (10/100); 
		}
		else{
			bonus = parseFloat(currentSalary) * (5/100);
		}

		currentSalary = parseInt(currentSalary) + parseInt(bonus);
		divResult.innerHTML="Salary has been updated. <br> Bonus is <b>"+ bonus +" </b>and Updated Salary is: <b>"+ currentSalary + "</b>";
		divResult.style.display='block';
	}
	else{
		alert("Please enter correct values");
	}
}