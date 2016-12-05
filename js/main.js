$(document).ready(function(){
// initially - create all the fieldsets in the HTML
// later - hide all but first and then show/hide. use CSS to hide all but the first



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
	$('#'+targetid).show();
});


});
