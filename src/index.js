document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let s = document.querySelectorAll('input')[1];
  
  s.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#list').innerHTML += '<p>' + task + '</p>';
  })
});
