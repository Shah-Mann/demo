function displayGreeting() {
  let time = document.getElementById("time").value;
  let hour = parseInt(time.substring(0, 2));
  // let minute = parseInt(time.substring(3, 5));
  let greeting = "";

  if (hour >= 0 && hour < 12) {
    greeting = "Good morning 🥱🥱🥱!";
  } else if (hour >= 12 && hour < 15) {
    greeting = "Good afternoon !";
  } else if (hour >= 15 && hour < 18) {
    greeting = "Let have a ☕☕ break!";
  } else if (hour >= 18 && hour < 21) {
    greeting = "Good evening!";
  } else if (hour >= 21 && hour < 24) {
    greeting = "Good night 🛌🛌🛌!";
  } else if (hour > 23) {
    greeting = "Please enter the correct Time";
  }

  document.getElementById("greeting").textContent = greeting;
}
