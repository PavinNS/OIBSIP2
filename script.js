let form = document.querySelecter('form');
function myFunction()
{
  alert("You Have Logged In Successfully");
}
form.addEventListener('submit', (e) => {
  e.preventDefault();
  return false;
});