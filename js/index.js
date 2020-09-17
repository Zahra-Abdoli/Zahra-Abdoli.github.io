function sendEmail() {
	Email.send({
	Host: "smtp.gmail.com",
	Username : "<zahraabdoli.dev@gmailcom>",
	Password : "<>",
		To: "<zahraabdoli.dev@gmailcom>",
		From: "<zahraabdoli.dev@gmailcom>",
	Subject : "<email subject>",
	Body : "<email body>",
	}).then(
		message => alert("mail sent successfully")
	);
}