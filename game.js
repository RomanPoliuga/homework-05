// Масив можливих клавіш
const keys = ["a", "s", "d", "f", "g", "h", "j", "k", "l", "z"];
let currentKeyIndex = 0;

const keyElement = document.getElementById("key");
const newGameButton = document.getElementById("new-game");

// Функція для оновлення поточної клавіші
function updateKey() {
  currentKeyIndex = Math.floor(Math.random() * keys.length);
  keyElement.textContent = keys[currentKeyIndex];
}

updateKey();

// Обробник натискання клавіші
document.addEventListener("keydown", (event) => {
  const pressedKey = event.key.toLowerCase();

  if (pressedKey === keys[currentKeyIndex]) {
    PNotify.success({
      text: `✅ Правильно! Клавіша "${pressedKey.toUpperCase()}"`,
      delay: 1000,
    });
    updateKey();
  } else {
    PNotify.error({
      text: `❌ Неправильно! Ви натиснули "${pressedKey.toUpperCase()}"`,
      delay: 1500,
    });
  }
});

// Запобігання небажаних дій
document.addEventListener("keypress", (event) => {
  event.preventDefault();
});

// Кнопка нової гри
newGameButton.addEventListener("click", () => {
  updateKey();
  PNotify.info({
    text: "🔄 Нова гра розпочата!",
    delay: 1000,
  });
});
