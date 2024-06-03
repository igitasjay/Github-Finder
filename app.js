// init github
const github = new Github();

// init UI
const ui = new UI();

// Search input

const searchUser = document.getElementById("searchUser");

// Sarch input event listener
searchUser.addEventListener("keyup", (e) => {
  // Get input text
  const userText = e.target.value;

  if (userText !== "") {
    //make http call
    github.getUser(userText).then((data) => {
      if (data.profile.message === "Not Found") {
        // show alert
        ui.showAlert("User not found", "alert alert-danger");
      } else {
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
      }
    });
  } else {
    //show alert
    ui.clearProfile();
  }
});
