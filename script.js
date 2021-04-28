// validation for empty inputs learned here: https://www.w3schools.com/howto/howto_js_validation_empty_input.asp

// blog page script
const commentInput = document.querySelector(`form`);

commentInput.addEventListener('submit', function (event) {
  const username = document.getElementById("username");
  const email = document.getElementById("email");
  const comment = document.getElementById("comment");
  event.preventDefault();
  const commentSection = document.querySelector('.comments');
  const newCommentSection = document.createElement("section");
  const commentDate = new Date();

  newCommentSection.innerHTML = `
        <img src="http://placecorgi.com/90" />        
        <div class="commentText">
          <p>${commentDate} by ${username.value}</p>
          <p>${comment.value}</p>
        </div>
      `
  if (username.value == '') {
    alert(`Please enter a name!`);
  } else if (email.value == "") {
    alert(`Please enter an email!`);
  } else if (comment.value == "") {
    alert(`Please enter a comment!`)
  } else {
    commentSection.appendChild(newCommentSection);
  }
})

// contact page script
const messageInput = document.querySelector(`.contactForm`);

messageInput.addEventListener('submit', function (event) {
  event.preventDefault();
  const inputName = document.forms["contactForm"]["username"].value;
  const inputEmail = document.forms["contactForm"]["email"].value;
  const inputMessage = document.forms["contactForm"]["message"].value;

  if (inputName == '') {
    alert(`Please enter a name!`);
  } else if (inputEmail == "") {
    alert(`Please enter an email!`);
  } else if (inputMessage == "") {
    alert(`Please enter a message!`)
  } else {
    alert(`Thank you for sending me a message!`);
  }
})