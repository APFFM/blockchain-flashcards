import courseContent from './content.js';

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
  if (!topics[currentTopic] || !topics[currentTopic].cards[currentCard]) {
    console.error('Invalid topic or card index');
    return;
  }
  
  const card = topics[currentTopic].cards[currentCard];
  
  document.getElementById('question').textContent = card.question || '';
  document.getElementById('answer').textContent = showDetail ? (card.answer || '') : '';
  document.getElementById('detail').textContent = showDetail ? (card.detail || '') : '';
  
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
  
  const progressBar = document.getElementById('progress');
  if (progressBar) {
    progressBar.style.width = `${percent}%`;
  }
  
  const progressText = document.getElementById('progress-text');
  if (progressText) {
    progressText.textContent = `${percent}% Progress (${learned}/${total} cards)`;
  }
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

  // Add keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
      if (currentCard > 0) {
        currentCard--;
      } else if (currentTopic > 0) {
        currentTopic--;
        currentCard = topics[currentTopic].cards.length - 1;
      }
      renderTopics();
      renderCard();
    } else if (e.key === 'ArrowRight') {
      if (currentCard < topics[currentTopic].cards.length - 1) {
        currentCard++;
      } else if (currentTopic < topics.length - 1) {
        currentTopic++;
        currentCard = 0;
      }
      renderTopics();
      renderCard();
    } else if (e.key === ' ') { // Spacebar
      showDetail = !showDetail;
      renderCard();
      e.preventDefault(); // Prevent page scrolling
    }
  });
}

// Initialize the app
init(); 