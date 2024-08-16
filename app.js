// Get the main form and input
const mainForm = document.getElementById("jobForm");
const textInput = document.querySelectorAll(".input");

// Get the modal
const modal = document.querySelectorAll(".modal");
const modal1 = document.getElementById("modal1");
const modal2 = document.getElementById("createJobModal");
const modal3 = document.getElementById("modal3");
const modal4 = document.getElementById("modal4");
const modal5 = document.getElementById("modal5");

// Get the button that opens the modal
const btn = document.getElementById("createJobBtn");

//Get the button that sends the user data
const sendBtn = document.getElementById("createJobButton");

// Get the <span> element that closes the modal
const span1 = document.getElementsByClassName("close")[0];
const span2 = document.getElementsByClassName("close")[1];
const span3 = document.getElementsByClassName("close")[2];

//Get the <a> element that opens the fourth modal
const Link = document.getElementById("link");

//Get the sidebar
const sidebar = document.getElementById("sidebar");

// When the user clicks the button, open the modal
btn.addEventListener("click", () => {
  modal1.style.display = "flex";
  modal2.style.opacity = 1;
  setTimeout(() => {
    modal1.style.display = "none";
    modal2.style.display = "flex";
  }, 2000);
});
// When the user clicks on <span> (x), close the modal
span1.addEventListener("click", () => {
  modal1.style.display = "none";
});
span2.addEventListener("click", () => {
  modal2.style.display = "none";
});
span3.addEventListener("click", () => {
  modal3.style.display = "none";
});

// When the user clicks anywhere outside of the modal, close it
window.addEventListener("click", (event) => {
  if (event.target.id === "modal1") {
    modal1.style.display = "none";
    modal2.style.opacity = 0;
    setTimeout(() => {
      modal2.style.display = "none";
    }, 1500);
  } else if (event.target.id === "createJobModal") {
    modal2.style.display = "none";
  } else if (event.target.id === "modal3") {
    modal3.style.display = "none";
  }
});

// When the user clicks "Create Job", populate the details section
const address = document.getElementById("addres");

sendBtn.addEventListener("click", (e) => {
  // Get form values
  const jobType = document.getElementById("jobTypes").value;
  const scheduledDate = document.getElementById("scheduledDate").value;
  const startTime = document.getElementById("scheduledStartTime").value;
  const endTime = document.getElementById("scheduledEndTime").value;
  const technician = document.getElementById("technician").value;
  const errors = document.getElementById("error");
  // Give the form values
  const addressValue = address.value.trim();
  const allValid = Array.from(textInput).every(
    (input) => input?.value.trim()?.length > 0
  );

  // Check if the address input is filled
  if (allValid && addressValue) {
    sendBtn.style.backgroundColor = "#C45455";
    sendBtn.innerHTML = "Request is sent";
    errors.style.display = "none";
    address.style.borderColor = "#C45455";

    setTimeout(() => {
      modal2.style.display = "none";
      modal3.style.display = "flex";
    }, 4000);

    // Populate the details section
    document.getElementById("address").innerHTML = addressValue;
    document.getElementById("jobType").innerHTML = jobType;
    document.getElementById("jobDate").innerHTML = scheduledDate;
    document.getElementById("jobStartTime").innerHTML = startTime;
    document.getElementById("jobEndTime").innerHTML = endTime;
    document.getElementById("technicnan").innerHTML = technician;
  } else {
    e.preventDefault();
    if (!addressValue) {
      errors.style.display = "block";
      address.style.borderColor = "#1c3c5d";
    }
  }
});

address.addEventListener("input", function () {
  const input = this;
  const errorMessage = input.nextElementSibling;

  if (input.value) {
    input.style.borderColor = "#C45455";
    errorMessage.style.display = "none";
  } else {
    errorMessage.style.display = "block";
  }
});

Link.addEventListener("click", () => {
  modal3.style.display = "none";
  modal4.style.display = "flex";
  setTimeout(() => {
    modal4.style.display = "none";
    modal5.style.display = "flex";
    setTimeout(() => {
      modal3.style.display = "flex";
      modal5.style.display = "none";
    }, 2000);
  }, 2000);
});
