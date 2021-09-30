export default function displayBox() {
  const labelList = document.querySelectorAll('.list');
  const checkBoxes = document.querySelectorAll('.check-list');
  for (let i = 0; i < checkBoxes.length; i += 1) {
    checkBoxes[i].addEventListener('change', () => {
      // const taskIndex = e.target.getAttribute('data-id');
      // alert(taskIndex);
      