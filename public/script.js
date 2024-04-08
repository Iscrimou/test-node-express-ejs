document.querySelector('#inputQuantity').addEventListener('input', function() {
  const quantity = parseInt(this.value);

  if (quantity >= 1 && quantity <= 99) {
    const content = document.querySelector('#content');
    content.innerHTML = '';
  
    for (let i = 0; i < quantity; i++) {
      const itemDiv = document.createElement('div');
      itemDiv.classList.add('item');
      const circleSpan = document.createElement('span');
      circleSpan.classList.add('circle');
      circleSpan.textContent = i + 1;
      itemDiv.appendChild(circleSpan);
      content.appendChild(itemDiv);
    }
  } else if (quantity) {
    alert("The quantity needs to be between 1 and 99");
  }
});