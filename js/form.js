const fName = document.getElementById("form-name");
const fEmail = document.getElementById("form-email");
const fSubject = document.getElementById("form-subject");
const fMessage = document.getElementById("form-message");
const form = document.getElementsByClassName("folio-form")[0];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("clicked");

  Email.send({
    SecureToken: "ce6f29c3-4bed-44c5-a12f-b2e8f51e0d7d",
    To: "saxton@riotmedia.co",
    From: "saxton@riotmedia.co",
    Subject: "Form Submission",
    Body: `New Info Submitted:
    ${fName.value};
    ${fEmail.value};
    ${fSubject.value};
    ${fMessage.value}`,
  }).then((message) =>
    alert(
      "Thank you! Your information has been sent to Saxton and he will respond within 48 hours!"
    )
  );
  form.reset();
});
