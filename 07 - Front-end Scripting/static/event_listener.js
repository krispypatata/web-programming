// const superMario = document.getElementById('superMario');
const removeButton = document.getElementById('remove-game');

// const deleteGame = () => {
//     alert("Game is now deleted");
// }

const deleteGame = () => {
    document.getElementById("games-list").removeChild(document.getElementById("ascd"));
    alert("Game is now deleted");
}

removeButton.addEventListener('click', deleteGame);