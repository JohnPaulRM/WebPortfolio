
function addProject(title, description, link) {
    const projectDiv = document.createElement('div');
    projectDiv.classList.add('project');

    projectDiv.innerHTML = `
        <h3>${title}</h3>
        <p>${description}</p>
        <a href="${link}" target="_blank">View Project</a>
    `;

    document.getElementById('project-list').appendChild(projectDiv);
}

// Directly adding projects
addProject("Project Title 1", "Description of Project 1. This project involves...", "https://link-to-your-project1.com");
addProject("Project Title 2", "Description of Project 2. This project focuses on...", "https://link-to-your-project2.com");


document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    const name = document.getElementById('contact-name').value; // Get the name
    const email = document.getElementById('contact-email').value; // Get the email
    const message = document.getElementById('contact-message').value; // Get the message

    // Here you can handle the form submission, e.g., send the data to a server or display a thank you message
    alert(`Thank you, ${name}! Your message has been sent.`); // Display a thank you message

    // Clear the form fields
    document.getElementById('contact-name').value = '';
    document.getElementById('contact-email').value = '';
    document.getElementById('contact-message').value = '';
});