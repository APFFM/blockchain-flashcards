import courseContent from './content.js';

// Replace the existing topics array
let topics = courseContent.topics;

let currentTopic = 0;
let currentCard = 0;
let showDetail = false;
let progress = JSON.parse(localStorage.getItem('flashcardProgress')) || {};

function init() {
  renderTopics();
  renderCard();
  updateProgress();
  setupEventListeners();
}

function renderTopics() {
  const topicsContainer = document.getElementById('topics');
  topicsContainer.innerHTML = '';
  
  topics.forEach((topic, index) => {
    const button = document.createElement('button');
    button.className = `topic-btn ${currentTopic === index ? 'active' : ''}`;
    button.textContent = topic.name;
    button.onclick = () => {
      currentTopic = index;
      currentCard = 0;
      renderTopics();
      renderCard();
    };
    topicsContainer.appendChild(button);
  });
}

function renderCard() {
  const card = topics[currentTopic].cards[currentCard];
  
  document.getElementById('question').textContent = card.question;
  document.getElementById('answer').textContent = showDetail ? card.answer : '';
  document.getElementById('detail').textContent = showDetail ? card.detail : '';
  
  // Mark card as seen
  const cardId = `${currentTopic}-${currentCard}`;
  if (!progress[cardId]) {
    progress[cardId] = true;
    localStorage.setItem('flashcardProgress', JSON.stringify(progress));
    updateProgress();
  }
}

function updateProgress() {
  const total = topics.reduce((acc, t) => acc + t.cards.length, 0);
  const learned = Object.values(progress).filter(v => v).length;
  const percent = (learned/total * 100).toFixed(1);
  
  document.getElementById('progress').style.width = `${percent}%`;
  document.getElementById('progress-text').textContent = 
    `${percent}% Progress (${learned}/${total} cards)`;
}

function setupEventListeners() {
  document.getElementById('toggle-detail').onclick = () => {
    showDetail = !showDetail;
    renderCard();
  };
  
  document.getElementById('prev').onclick = () => {
    if (currentCard > 0) {
      currentCard--;
    } else if (currentTopic > 0) {
      currentTopic--;
      currentCard = topics[currentTopic].cards.length - 1;
    }
    renderTopics();
    renderCard();
  };
  
  document.getElementById('next').onclick = () => {
    if (currentCard < topics[currentTopic].cards.length - 1) {
      currentCard++;
    } else if (currentTopic < topics.length - 1) {
      currentTopic++;
      currentCard = 0;
    }
    renderTopics();
    renderCard();
  };
  
  document.getElementById('reset').onclick = () => {
    if (confirm('Are you sure you want to reset your progress?')) {
      progress = {};
      localStorage.setItem('flashcardProgress', JSON.stringify(progress));
      updateProgress();
    }
  };
}

// Enhance the controls with better visual feedback
function drawControls() {
  let buttonY = 420;
  let buttonHeight = 40;
  
  // Detail toggle button
  let isHovered = mouseX > 50 && mouseX < 170 && mouseY > buttonY && mouseY < buttonY + buttonHeight;
  fill(isHovered ? color(0, 119, 182) : 200);
  rect(50, buttonY, 120, buttonHeight, 5);
  fill(isHovered ? 255 : 0);
  textAlign(CENTER, CENTER);
  text(showDetail ? "Hide Details" : "Show Details", 110, buttonY + buttonHeight/2);
  
  // Navigation buttons with hover effects
  ['Previous', 'Next', 'Reset'].forEach((label, i) => {
    let x = 200 + i * 140;
    isHovered = mouseX > x && mouseX < x + 120 && mouseY > buttonY && mouseY < buttonY + buttonHeight;
    fill(isHovered ? color(0, 119, 182) : 200);
    rect(x, buttonY, 120, buttonHeight, 5);
    fill(isHovered ? 255 : 0);
    text(label, x + 60, buttonY + buttonHeight/2);
  });
  
  textAlign(LEFT, BASELINE);
}

// Add keyboard navigation
function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    if (currentCard > 0) currentCard--;
    else if (currentTopic > 0) {
      currentTopic--;
      currentCard = topics[currentTopic].cards.length-1;
    }
  } else if (keyCode === RIGHT_ARROW) {
    if (currentCard < topics[currentTopic].cards.length-1) currentCard++;
    else if (currentTopic < topics.length-1) {
      currentTopic++;
      currentCard = 0;
    }
  } else if (keyCode === 32) { // Spacebar
    showDetail = !showDetail;
  }
}

// Initialize the app
init(); 