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
  link.href = '/images/Mahmudul-Frontend-developer.pdf'; // Replace with the path to your PDF file
  link.download = 'Mahmudul_Resume.pdf'; // The name of the file once downloaded
  link.click();
});
