$(document).ready(function(){
// initially - create all the fieldsets in the HTML
// later - hide all but first and then show/hide. use CSS to hide all but the first


   var data = { "questions":[ {
              
                	"question": "How do you feel today",
                	"questionID": "question1",
                	"responses": [ 
                	{
						"response": "aggressive", 
						"action": "question2"
                	}, {
                		"response": "stressed", 
                		"action": "question3"
                	}, {
						"response": "low", 
						"action": "question4"
                	} ]
	
			
			
				}, {
					"question": "How do you feel about seeing other people?",
                	"questionID": "question2",
                	"responses": [ 
                	{
						"response": "introverted", 
						"action": "outcome1"
                	}, {
                		"response": "extroverted", 
                		"action": "outcome2"
                	} ]
            	}, {
					"question": "How do you feel about seeing other people?",
                	"questionID": "question3",
                	"responses": [ 
                	{
						"response": "introverted", 
						"action": "outcome3"
                	}, {
                		"response": "extroverted", 
                		"action": "outcome4"
                	} ]
            	} , {
					"question": "How do you feel about seeing other people?",
                	"questionID": "question4",
                	"responses": [ 
                	{
						"response": "introverted", 
						"action": "outcome5"
                	}, {
                		"response": "extroverted", 
                		"action": "outcome6"
                	} ]
            	}],
       "outcomes": [ {
       				"outcomeID": "outcome1",
       				"outcome": "This is the text for outcome 1"
	
			       },
			       {
       				"outcomeID": "outcome2",
       				"outcome": "Aggressive and extroverted"
	
			       },
			       {
       				"outcomeID": "outcome3",
       				"outcome": "This is the text for outcome 3"
	
			       },{
       				"outcomeID": "outcome4",
       				"outcome": "This is the text for outcome 4"
	
			       },{
       				"outcomeID": "outcome5",
       				"outcome": "This is the text for outcome 5"
	
			       },{
       				"outcomeID": "outcome6",
       				"outcome": "This is the text for outcome 6"
	
			       }
       

    ]}


    	var output ='';
        output += '<form id="questform">';

        for (var i in data.questions) {
        	
        	//console.log(data.questions[i].question);
        	output += '<fieldset id="'+data.questions[i].questionID+'"><legend>'+data.questions[i].question+'</legend>';
            // we want a unique id for each response to make the labels work
            // so we output the 'questionID' and then we count the answers so we can output the number of the answer.
            // initialise a variable called  'answercount'
            var answercount = 1;

 			for (var f in data.questions[i].responses) {
 				// output a label around each input, and give each input an ID using the questionID and answercount
            	output += '<label for="'+data.questions[i].questionID+answercount+'"><input id="'+data.questions[i].questionID+answercount+'" type="radio" data-action="'+data.questions[i].responses[f].action+'" name="mood" value="" checked> '+data.questions[i].responses[f].response+'</label><br>';
  				// increment answercount so it goes up for each answer
  				answercount++;
        	}
        	output += '<input type="submit" id="mood" value="Submit" ></fieldset>'

          

         
          
        	// console.log("Output"+output);

           
        }
          for (var g in data.outcomes) {
            	output += '<div class="outcome" id="'+data.outcomes[g].outcomeID+'"><p>'+data.outcomes[g].outcome+'</p></div>';
            }

        output+="</form>";

        $("main").append(output);

        //document.getElementById("main").append()=output;
        //console.log("output:: "+output);
 




/* have a form with some elements
 each element can have a data-action, which is the id of a form or outcome you should direct to 
 onclick for each radio button - show a  form or outcome based on the data-action.
 - hide the thing you're on.
 */

// intercept a click on a submit button
$(":submit").click(function(e){
	// stop the form from actually submitting
	e.preventDefault();
	// get the name of the element from the id on the submit button
	var radioName = this.id;
	// get the id of the data-action
	var targetid = $('input[name='+radioName+']:checked', '#questform').attr('data-action');
	// OK so now hide the fieldset you're in and show the target
	$(this).parent().hide();
	
	// show the 'loading' icon	
	$(".loading").show();
	
	// use a 'setTimeout' to wait for 600 milliseconds (just over half a second!), 
	// and then hide the loading icon and show the target
	setTimeout(function(){
		$(".loading").hide();
		$('#'+targetid).show();	
	},600);
	
});


});
