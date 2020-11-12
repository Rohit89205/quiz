function submitForm(e){
    e.preventDefault();
    let name = document.forms["Welcome_form"]["name"].value;

    
    // store player name 
    sessionStorage.setItem("Player Name", name);
    alert("Hello " +name);
    // name set on view
    location.href = "quiz.html";

}