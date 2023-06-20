const deleteButtons = document.querySelectorAll('.deleteButton');

deleteButtons.forEach(button => {
  button.addEventListener('click', () => {
    const characterElement = button.parentNode;
    const characterId = characterElement.dataset.characterId;
    
    console.log(characterId);

    fetch(`/api/users/characters/`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ id: characterId })
    })
      .then(response => {
        if (response.ok) {
          alert('Character deleted successfully.');
          // Optionally, remove the character element from the DOM
          characterElement.remove();
        } else {
          alert('Error deleting character.');
        }
      })
      .catch(error => {
        console.error(error);
      });
  });
});
