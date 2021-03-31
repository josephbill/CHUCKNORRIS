//variables to tag interfaces 
var pJokes = document.querySelector("#pJoke");
var pCreated = document.querySelector("#pCreated");


function getJokes(){
    //intialize XMLHttpRequest object 
    var ajax = new XMLHttpRequest;
    //variable for api url 
    var url = "https://api.chucknorris.io/jokes/random";



    //set the request using .open method
    ajax.open('GET',url,true);

    //handling the response using the onreadystatechange 
    ajax.onreadystatechange = function(){
    	//check whether the response is ready  and status of the browser protocal
    	if (this.status === 200 && this.readyState === 4) {
                 console.log(this.responseText);
                 //variable to store values form responseText : using JSON.parse
                 let data = JSON.parse(this.responseText);
                 //map details to paragraph
                 pJokes.innerHTML = `${data.value}`;
                 pCreated.innerHTML = `${data.created_at}`;
    	} else {
    		this.onerror = onerror();
    	}
    }

    //execute the ajax
    ajax.send();

}

function onerror(){
	pJokes.innerHTML = "Error occurred, check network";
}



function postData(){

   //pick user input 
   var jobPost = document.getElementById("job").value;
   var namePost  = document.getElementById("name").value;
   var postAction = document.getElementById("postAction");
   //intialize the XMLHttpRequest object
   var ajaxPost = new XMLHttpRequest;
   const url = "https://reqres.in/api/users";


   //set the request
   ajaxPost.open('POST',url,true);

   //handling the response 
   ajaxPost.onreadystatechange = function(){
   	       	//check whether the response is ready  and status of the browser protocal
   	       	if (this.readyState === 4 && this.status === 200) {
                     console.log(this.responseText);
                     postAction.innerHTML = "Data posted";
   	       	} else {
   	       		// this.onerror = onerror();
   	       		console.log(this.onerror)
   	       	}
   }
    //http header
    ajaxPost.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    //execute my ajax 
    ajaxPost.send("name=namePost&job=jobPost");


}