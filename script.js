document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Handle user registration
    alert('Registration submitted!');
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Handle user login
    alert('Login submitted!');
});

document.getElementById('resourceUploadForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Handle resource upload
    const title = document.getElementById('resourceTitle').value;
    const file = document.getElementById('resourceFile').files[0];
    if (title && file) {
        alert(`Resource "${title}" uploaded!`);
        // You can send the file to the server for processing here
    } else {
        alert('Please provide a title and select a file to upload.');
    }
});

// Simulated data (replace with actual data retrieval logic)
const totalStudents = 250;
const totalAssignments = 50;
const completedAssignments = 35;
const totalCourses = 10;

// Update student count
document.getElementById('studentCountValue').innerText = totalStudents;

// Update assignment status
document.getElementById('totalAssignments').innerText = totalAssignments;
document.getElementById('completedAssignments').innerText = completedAssignments;
document.getElementById('pendingAssignments').innerText = totalAssignments - completedAssignments;

// Update course count
document.getElementById('courseCountValue').innerText = totalCourses;


document.getElementById('resourceUploadForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Handle resource upload
    const title = document.getElementById('resourceTitle').value;
    const file = document.getElementById('resourceFile').files[0];
    if (title && file) {
        alert(`Resource "${title}" uploaded!`);
        // You can send the file to the server for processing here
    } else {
        alert('Please provide a title and select a file to upload.');
    }
});

// Navigation bar animation
const navLinks = document.querySelectorAll('header nav ul li a');

navLinks.forEach(link => {
    link.addEventListener('mouseover', function() {
        link.style.transform = 'scale(1.1)';
        link.style.transition = 'transform 0.3s ease-in-out';
    });

    link.addEventListener('mouseout', function() {
        link.style.transform = 'scale(1)';
        link.style.transition = 'transform 0.3s ease-in-out';
    });
});
