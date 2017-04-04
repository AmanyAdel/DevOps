$(document).ready(function(){

	$('#addItem').on('click', addItem);
	$('#todos').on('change', '.completeItem', completeItem);
	$('#todos').on('click', '.deleteItem', deleteItem);
	$('#todos').on('click', '.todoText', startEditing);
	$('#todos').on('click', '.saveItem', stopEditing);
	$('newTodo').on('keypress', function(event){
		if(event.which === 13) {
			addItem();
		event.preventDefault();
		}
	});

	

	function startEditing(event){
		var taskLi = $(this).parent();
		var currentText = taskLi.find('.todoText').text();       // get the current todoText
		taskLi.find('.editText').val(currentText);              // place it inside the textbox
		taskLi.find('.editText').show();                       // show the textbox
		taskLi.find('.saveItem').show();                 
		taskLi.find('.todoText').hide();                      // hide the original currentText
		}                 
	

		function stopEditing(event){
			$(this).hide();                                       // hide the save button
			var taskLi = $(this).parent();                                     
			var newValue = taskLi.find('.editText').val();
			taskLi.find('.editText').hide();                    // hide the edit textbox
			taskLi.find('.todoText').text(newValue)            // take the value from the edit textbox and place it in our span
			taskLi.find('.todoText').show();                  // show our span
		}                 


       function addItem(){
		var newTodoText = $.trim($('#newTodo').val());
		
    if (newTodoText==""){
    
        alert("You must write something");
        return false;
    }
    
    var itemExists = false;

            
        $("#todos").each(function(){
                
    	if ($('#todos').text() == newTodoText){
                    itemExists = true;
                    alert('Item already exists');
                 }
             });
            
          if (!itemExists){

		$('#todos').append('<li><input class = "completeItem" type = "checkbox"><span class = "todoText">' + newTodoText + 
		'</span><input type = "text" class = "editText"><button class = "btn btn-success saveItem">save</button><span class= "glyphicon glyphicon-trash deleteItem"></span></li>');
		$('#newTodo').val("");
	}

	}

	function deleteItem(){
		$(this).parent().remove();

	}

	function completeItem(){
		$(this).parent().toggleClass('done');
	}

});

                                                                         
                                                                             









