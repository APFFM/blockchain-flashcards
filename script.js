import courseContent from './content.js';

let topics = courseContent.topics;
let currentTopic = 0;
let currentCard = 0;
let showDetail = false;
let progress = JSON.parse(localStorage.getItem('flashcardProgress')) || {};

function init() {
  try {
    renderTopics();
    renderCard();
    updateProgress();
    setupEventListeners();
  } catch (error) {
    console.error('Error initializing app:', error);
  }
}

function renderTopics() {
  const topicsContainer = document.getElementById('topics');
  if (!topicsContainer) return;
  
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
  try {
    if (!topics[currentTopic] || !topics[currentTopic].cards[currentCard]) {
      console.error('Invalid topic or card index');
      return;
    }
    
    const card = topics[currentTopic].cards[currentCard];
    const questionEl = document.getElementById('question');
    const answerEl = document.getElementById('answer');
    const detailEl = document.getElementById('detail');
    
    if (questionEl) questionEl.textContent = card.question || '';
    if (answerEl) answerEl.textContent = showDetail ? (card.answer || '') : '';
    if (detailEl) detailEl.textContent = showDetail ? (card.detail || '') : '';
    
    // Mark card as seen
    const cardId = `${currentTopic}-${currentCard}`;
    if (!progress[cardId]) {
      progress[cardId] = true;
      localStorage.setItem('flashcardProgress', JSON.stringify(progress));
      updateProgress();
    }
  } catch (error) {
    console.error('Error rendering card:', error);
  }
}

function updateProgress() {
  try {
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
  } catch (error) {
    console.error('Error updating progress:', error);
  }
}

function setupEventListeners() {
  const toggleBtn = document.getElementById('toggle-detail');
  const prevBtn = document.getElementById('prev');
  const nextBtn = document.getElementById('next');
  const resetBtn = document.getElementById('reset');

  if (toggleBtn) {
    toggleBtn.onclick = () => {
      showDetail = !showDetail;
      renderCard();
    };
  }
  
  if (prevBtn) {
    prevBtn.onclick = () => {
      if (currentCard > 0) {
        currentCard--;
      } else if (currentTopic > 0) {
        currentTopic--;
        currentCard = topics[currentTopic].cards.length - 1;
      }
      renderTopics();
      renderCard();
    };
  }
  
  if (nextBtn) {
    nextBtn.onclick = () => {
      if (currentCard < topics[currentTopic].cards.length - 1) {
        currentCard++;
      } else if (currentTopic < topics.length - 1) {
        currentTopic++;
        currentCard = 0;
      }
      renderTopics();
      renderCard();
    };
  }
  
  if (resetBtn) {
    resetBtn.onclick = () => {
      if (confirm('Are you sure you want to reset your progress?')) {
        progress = {};
        localStorage.setItem('flashcardProgress', JSON.stringify(progress));
        updateProgress();
      }
    };
  }

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
window.addEventListener('DOMContentLoaded', init); 