document.getElementById("feedback-form").addEventListener("submit", function(event) {
    event.preventDefault();
    submitFeedback();
});

function submitFeedback() {
    // Get form values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").
