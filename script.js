import courseContent from '/blockchain-flashcards/content.js';

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
  let card = topics[currentTopic].cards[currentCard];
  
  // Card background with subtle shadow
  fill(255);
  stroke(200);
  drawingContext.shadowOffsetX = 5;
  drawingContext.shadowOffsetY = 5;
  drawingContext.shadowBlur = 10;
  drawingContext.shadowColor = 'rgba(0,0,0,0.2)';
  rect(50, 100, width-100, 300, 10);
  drawingContext.shadowColor = 'rgba(0,0,0,0)';
  
  // Question/Answer section
  fill(0);
  textSize(24);
  textStyle(BOLD);
  text(showDetail ? "Answer:" : "Question:", 70, 130);
  
  textSize(20);
  textStyle(NORMAL);
  text(showDetail ? card.answer : card.question, 70, 160, width-140);
  
  // Detail section with improved formatting
  if (showDetail && card.detail) {
    textSize(16);
    fill(80);
    let detailY = 200;
    
    // Split detail into paragraphs
    let paragraphs = card.detail.split('\n');
    paragraphs.forEach(p => {
      text(p, 70, detailY, width-140);
      detailY += textWidth(p) / (width-140) * 25 + 30;
    });
  }
  
  // Show additional fields if present
  if (showDetail) {
    let y = 320;
    textSize(14);
    
    if (card.diagram) {
      fill(100);
      text("Diagram:", 70, y);
      fill(0);
      text(card.diagram, 140, y);
      y += 30;
    }
    
    if (card.critical) {
      fill(100);
      text("Critical Thinking:", 70, y);
      fill(0);
      text(card.critical, 180, y);
    }
  }
  
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