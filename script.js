const topics = [
  {
    name: "Blockchain Fundamentals",
    cards: [
      {
        question: "What is Blockchain?",
        answer: "Distributed immutable ledger for secure transactions",
        detail: "A blockchain is a chain of blocks containing transaction data, cryptographically linked and maintained across a distributed network. Key characteristics: Decentralization (no central authority), Transparency (public verification), Immutability (permanent records), Security (cryptographic proofs)."
      },
      {
        question: "Key Blockchain vs DLT difference",
        answer: "Blockchain is a type of DLT with chained blocks",
        detail: "DLT (Distributed Ledger Technology) is the broader category. Blockchain specifically uses cryptographic chaining of blocks. All blockchains are DLTs, but not all DLTs use blockchain structure."
      },
      {
        question: "4 Blockchain Types by Access",
        answer: "Public Permissionless, Public Permissioned, Private Permissionless, Private Permissioned",
        detail: "1. Public Permissionless: Bitcoin, Ethereum (open to all)\n2. Public Permissioned: Land registries (viewable by all, edit by authorized)\n3. Private Permissionless: Consortium chains\n4. Private Permissioned: Enterprise solutions like Hyperledger"
      }
    ]
  },
  {
    name: "Cryptography & Security",
    cards: [
      {
        question: "Symmetric vs Asymmetric Encryption",
        answer: "Single key vs key pair system",
        detail: "Symmetric: AES, uses same key for encrypt/decrypt. Fast but insecure key exchange.\nAsymmetric: RSA/ECC, uses public/private keys. Enables secure digital signatures and PKI."
      },
      {
        question: "3 Hash Function Properties",
        answer: "Collision Resistance, Hiding, Puzzle-Friendliness",
        detail: "1. Collision Resistance: Hard to find x≠y with H(x)=H(y)\n2. Hiding: Can't determine input from output\n3. Puzzle-Friendly: No better strategy than random guessing"
      }
    ]
  }
];

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
  
  document.getElementById('question').textContent = showDetail ? card.answer : card.question;
  document.getElementById('answer').textContent = showDetail ? '' : card.answer;
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

// Initialize the app
init(); 