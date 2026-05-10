const questions = [
  {
    q: "How are you feeling today?",
    options: ["Very Happy", "Good", "Sad", "Angry"]
  },
  {
    q: "Favourite Colour?",
    options: ["Blue", "Red", "Green", "Yellow"]
  },
  {
    q: "Favourite Flower?",
    options: ["Rose", "Lily", "Lotus", "Jasmine"]
  },
  {
    q: "How is your studies going?",
    options: ["Excellent", "Good", "Average", "Bad"]
  },
  {
    q: "How do you feel in morning?",
    options: ["Fresh", "Normal", "Sleepy", "Tired"]
  },
  {
    q: "Do you enjoy school/college?",
    options: ["Always", "Sometimes", "Rarely", "Never"]
  },
  {
    q: "Favourite Fruit?",
    options: ["Apple", "Mango", "Banana", "Orange"]
  },
  {
    q: "How often do you feel stressed?",
    options: ["Never", "Sometimes", "Often", "Always"]
  },
  {
    q: "Your energy level?",
    options: ["High", "Medium", "Low", "Very Low"]
  },
  {
    q: "Do you like your daily routine?",
    options: ["Yes", "Mostly", "Not much", "No"]
  }
];

let score = 0;

const quizDiv = document.getElementById("quiz");

questions.forEach((item, index) => {
  let div = document.createElement("div");
  div.classList.add("question");

  div.innerHTML = `<h3>${index+1}. ${item.q}</h3>` +
    item.options.map((opt, i) => {
      return `<label>
        <input type="radio" name="q${index}" value="${i}"> ${opt}
      </label><br>`;
    }).join("");

  quizDiv.appendChild(div);
});

function showResult() {
  score = 0;

  for (let i = 0; i < questions.length; i++) {
    let selected = document.querySelector(`input[name="q${i}"]:checked`);
    if (selected) {
      score += parseInt(selected.value);
    }
  }

  let resultText = "";

  if (score <= 8) {
    resultText = "😊 You are in a VERY HAPPY MOOD! Keep smiling 🌸🐦";
  } else if (score <= 16) {
    resultText = "😐 You are in a NORMAL mood. Stay positive!";
  } else {
    resultText = "😔 You seem low. Take rest, listen music, and relax 🌼";
  }

  document.getElementById("result").innerText = resultText;
}