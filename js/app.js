var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 1000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}
document.getElementById('downloadResume').addEventListener('click', function() {
  const link = document.createElement('a');
  link.href = '/images/Mahmudul-resume.pdf'; // Replace with the path to your PDF file
  link.download = 'Mahmudul_Resume.pdf'; // The name of the file once downloaded
  link.click();
});
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
const closeIcon = document.querySelector('.close-icon');

hamburger.addEventListener('click', () => {
    mobileMenu.style.display = 'block';
});

closeIcon.addEventListener('click', () => {
    mobileMenu.style.display = 'none';
});
const navLinks = document.querySelectorAll('.mobile-menu .navigate-link a');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.style.display = 'none';
    });
});

