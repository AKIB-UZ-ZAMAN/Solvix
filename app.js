const questions = {
    math: [
        {q: "What is 15 + 27?", options: ["40", "42", "38", "45"], correct: 1, topic: "arithmetic", explanation: "15 + 27 equals 42. Break it down to (10 + 20) + (5 + 7) = 30 + 12 = 42."},
        {q: "What is 3/4 as decimal?", options: ["0.25", "0.5", "0.75", "1.0"], correct: 2, topic: "fractions", explanation: "3 divided by 4 equals 0.75. Fractions represent division."},
        {q: "Solve 2x + 5 = 15", options: ["5", "7", "10", "12"], correct: 0, topic: "algebra", explanation: "Subtract 5 from both sides: 2x = 10. Then divide by 2: x = 5."},
        {q: "Area of square with side 5m?", options: ["20m²", "25m²", "30m²", "35m²"], correct: 1, topic: "geometry", explanation: "Area of square = side × side = 5m × 5m = 25m²."},
        {q: "What is 5² + 3³?", options: ["25", "32", "52", "62"], correct: 2, topic: "exponents", explanation: "5² = 25 and 3³ = 27. 25 + 27 = 52."},
        {q: "Convert 2.5km to meters", options: ["250m", "1500m", "2000m", "2500m"], correct: 3, topic: "measurement", explanation: "1 kilometer = 1000 meters, so 2.5km = 2.5 × 1000 = 2500m."},
        {q: "Prime number in:", options: ["9", "15", "17", "21"], correct: 2, topic: "number theory", explanation: "17 is only divisible by 1 and itself. Others have multiple factors."},
        {q: "30% of 200 = ?", options: ["30", "60", "90", "120"], correct: 1, topic: "percentages", explanation: "30% of 200 = 0.30 × 200 = 60."},
        {q: "Value of π (pi)", options: ["3.14", "3.16", "22/7", "Both A & C"], correct: 3, topic: "geometry", explanation: "π ≈ 3.14 and 22/7 ≈ 3.1429 are common approximations."},
        {q: "Next in sequence: 2,4,8,16...", options: ["24", "32", "48", "64"], correct: 1, topic: "patterns", explanation: "This is a geometric sequence where each number is multiplied by 2 (16 × 2 = 32)."},
        {q: "12 × 0.5 = ?", options: ["6", "12", "24", "0.6"], correct: 0, topic: "arithmetic", explanation: "Multiplying by 0.5 is the same as dividing by 2. 12 ÷ 2 = 6."},
        {q: "Factors of 24?", options: ["1,2,3,8", "1,2,3,4,6,8,12,24", "2,3,4,6,8", "2,3,4,6,8,12"], correct: 1, topic: "factors", explanation: "Factors are numbers that divide exactly into 24 without remainder."},
        {q: "180 degrees = __ radians", options: ["π", "2π", "π/2", "3π/2"], correct: 0, topic: "geometry", explanation: "180° = π radians is a standard conversion in trigonometry."},
        {q: "Average of 10,20,30", options: ["15", "20", "25", "30"], correct: 1, topic: "averages", explanation: "(10 + 20 + 30) ÷ 3 = 60 ÷ 3 = 20."},
        {q: "10² - 5³ = ?", options: ["-100", "-25", "75", "100"], correct: 1, topic: "exponents", explanation: "10² = 100, 5³ = 125. 100 - 125 = -25."},
        {q: "What is 144 ÷ 12?", options: ["10", "11", "12", "13"], correct: 2, topic: "arithmetic", explanation: "12 × 12 = 144, so 144 ÷ 12 = 12."},
        {q: "Solve for x: 3x - 7 = 14", options: ["7", "8", "9", "10"], correct: 0, topic: "algebra", explanation: "Add 7 to both sides: 3x = 21. Then divide by 3: x = 7."},
        {q: "What is 1/3 + 1/6?", options: ["1/9", "1/2", "2/9", "1/4"], correct: 1, topic: "fractions", explanation: "Convert to common denominator: 2/6 + 1/6 = 3/6 = 1/2."}
    ],
    bio: [
        {q: "Powerhouse of cell?", options: ["Nucleus", "Mitochondria", "Ribosome"], correct: 1, topic: "cell biology", explanation: "Mitochondria produce ATP, the cell's energy currency."},
        {q: "Photosynthesis site?", options: ["Chloroplast", "Mitochondria", "Nucleus"], correct: 0, topic: "botany", explanation: "Chloroplasts contain chlorophyll for photosynthesis."},
        {q: "Human blood pH range?", options: ["6.5-7.0", "7.0-7.2", "7.35-7.45"], correct: 2, topic: "physiology", explanation: "Blood is slightly alkaline with pH 7.35-7.45."},
        {q: "DNA structure name?", options: ["Double helix", "Triple helix", "Linear"], correct: 0, topic: "genetics", explanation: "DNA has a double helix structure discovered by Watson and Crick."},
        {q: "Human chromosomes count?", options: ["23", "46", "48"], correct: 1, topic: "genetics", explanation: "Humans have 46 chromosomes (23 pairs) in diploid cells."},
        {q: "Largest human organ?", options: ["Liver", "Skin", "Lungs"], correct: 1, topic: "anatomy", explanation: "Skin is the largest organ by surface area and weight."},
        {q: "Enzyme in saliva?", options: ["Amylase", "Pepsin", "Lipase"], correct: 0, topic: "digestion", explanation: "Salivary amylase begins starch digestion in the mouth."},
        {q: "Gas released by plants?", options: ["O₂", "CO₂", "N₂"], correct: 0, topic: "respiration", explanation: "Plants release oxygen as a byproduct of photosynthesis."},
        {q: "Study of plants?", options: ["Zoology", "Botany", "Ecology"], correct: 1, topic: "botany", explanation: "Botany is the scientific study of plant life."},
        {q: "Cell wall component?", options: ["Chitin", "Cellulose", "Protein"], correct: 1, topic: "cell biology", explanation: "Plant cell walls are primarily made of cellulose."},
        {q: "Vitamin D helps absorb?", options: ["Calcium", "Iron", "Vitamin C"], correct: 0, topic: "nutrition", explanation: "Vitamin D enhances calcium absorption in the intestines."},
        {q: "Human brain part for memory?", options: ["Cerebrum", "Hippocampus", "Cerebellum"], correct: 1, topic: "anatomy", explanation: "Hippocampus plays key role in memory formation."},
        {q: "Plant water transport tissue?", options: ["Xylem", "Phloem", "Cambium"], correct: 0, topic: "botany", explanation: "Xylem transports water and minerals upward in plants."},
        {q: "Enzyme that cuts DNA?", options: ["Ligase", "Polymerase", "Restriction"], correct: 2, topic: "biotech", explanation: "Restriction enzymes cut DNA at specific sequences."},
        {q: "Female sex chromosome?", options: ["XX", "XY", "YY"], correct: 0, topic: "genetics", explanation: "Females have XX chromosomes, males have XY."},
        {q: "Basic unit of life?", options: ["Cell", "Atom", "Molecule"], correct: 0, topic: "cell biology", explanation: "The cell is the smallest structural and functional unit of life."},
        {q: "Process of cell division?", options: ["Mitosis", "Meiosis", "Both"], correct: 2, topic: "cell biology", explanation: "Mitosis (somatic cells) and meiosis (gametes) are both cell division processes."}
    ],
    english: [
        {q: "Synonym of 'happy'?", options: ["Joyful", "Angry", "Sad"], correct: 0, topic: "vocabulary", explanation: "'Joyful' means very happy, making it a synonym."},
        {q: "Correct spelling?", options: ["Recieve", "Receive", "Receve"], correct: 1, topic: "spelling", explanation: "'Receive' follows the 'i before e except after c' rule."},
        {q: "Opposite of 'ancient'?", options: ["Modern", "Old", "Antique"], correct: 0, topic: "vocabulary", explanation: "'Modern' means relating to the present time, opposite of ancient."},
        {q: "'She __ to school'", options: ["go", "goes", "going"], correct: 1, topic: "grammar", explanation: "Third person singular present tense requires 'goes'."},
        {q: "Punctuate: 'Hello world'", options: [".", "!", "?"], correct: 1, topic: "punctuation", explanation: "An exclamation mark expresses strong feeling or emphasis."},
        {q: "Plural of 'child'?", options: ["Childs", "Children", "Childes"], correct: 1, topic: "grammar", explanation: "Irregular plural forms include 'children' (child), 'oxen' (ox), etc."},
        {q: "'Time is money' is a:", options: ["Simile", "Metaphor", "Alliteration"], correct: 1, topic: "literary devices", explanation: "A metaphor directly compares two unlike things without 'like' or 'as'."},
        {q: "Past tense of 'run'?", options: ["Ran", "Runned", "Running"], correct: 0, topic: "grammar", explanation: "'Run' is an irregular verb with past tense 'ran'."},
        {q: "Article: __ university", options: ["a", "an", "the"], correct: 0, topic: "grammar", explanation: "Use 'a' before words with consonant sounds, 'an' before vowel sounds."},
        {q: "'Beautiful' is a:", options: ["Noun", "Verb", "Adjective"], correct: 2, topic: "parts of speech", explanation: "Adjectives describe nouns, like 'beautiful sunset'."},
        {q: "Correct: 'Their/There' house", options: ["Their", "There", "They're"], correct: 0, topic: "homophones", explanation: "'Their' shows possession, 'there' indicates place, 'they're' is contraction."},
        {q: "Comparative of 'good'?", options: ["Better", "Best", "Gooder"], correct: 0, topic: "adjectives", explanation: "Irregular comparatives: good → better → best."},
        {q: "Sentence type: 'Shut the door!'", options: ["Declarative", "Interrogative", "Imperative"], correct: 2, topic: "sentence types", explanation: "Imperative sentences give commands or requests."},
        {q: "'Quickly' is a:", options: ["Adjective", "Adverb", "Noun"], correct: 1, topic: "parts of speech", explanation: "Adverbs modify verbs, often ending in -ly."},
        {q: "Correct plural: 'ox'", options: ["Oxes", "Oxen", "Oxs"], correct: 1, topic: "grammar", explanation: "Another irregular plural: 'ox' becomes 'oxen'."},
        {q: "Present participle of 'write'?", options: ["Wrote", "Written", "Writing"], correct: 2, topic: "grammar", explanation: "Present participles end in -ing and show ongoing action."},
        {q: "'The cat's toy' shows:", options: ["Plural", "Possession", "Contraction"], correct: 1, topic: "punctuation", explanation: "Apostrophe + s shows possession for singular nouns."}
    ]
};

// Shuffle function for questions
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// User data management - Multi-user support
function getAllUserData() {
    const allUserData = localStorage.getItem('quizUsersData');
    return allUserData ? JSON.parse(allUserData) : {};
}

function saveAllUserData(data) {
    localStorage.setItem('quizUsersData', JSON.stringify(data));
}

function getCurrentUserData(username) {
    const allUserData = getAllUserData();
    return allUserData[username] || null;
}

function saveCurrentUserData(username, data) {
    const allUserData = getAllUserData();
    allUserData[username] = data;
    saveAllUserData(allUserData);
}

function updateUserStats(username, subject, score, timeTaken, mistakes) {
    const allUserData = getAllUserData();
    
    if (!allUserData[username]) {
        allUserData[username] = {
            stats: {},
            lastActive: new Date().toISOString()
        };
    }
    
    const userData = allUserData[username];
    userData.lastActive = new Date().toISOString();
    
    if (!userData.stats[subject]) {
        userData.stats[subject] = {
            attempts: 0,
            bestScore: 0,
            totalTime: 0,
            avgTime: 0,
            commonMistakes: {}
        };
    }
    
    const subjectStats = userData.stats[subject];
    subjectStats.attempts++;
    subjectStats.bestScore = Math.max(subjectStats.bestScore, score);
    subjectStats.totalTime += timeTaken;
    subjectStats.avgTime = Math.round(subjectStats.totalTime / subjectStats.attempts);
    
    // Track mistakes
    mistakes.forEach(topic => {
        subjectStats.commonMistakes[topic] = (subjectStats.commonMistakes[topic] || 0) + 1;
    });
    
    saveAllUserData(allUserData);
    displayUserStats(username);
}

function displayUserStats(username) {
    const allUserData = getAllUserData();
    const userData = username ? allUserData[username] : null;
    const statsDiv = document.getElementById('progress-data');
    
    if (!username || !userData) {
        document.getElementById('user-stats').classList.add('hidden');
        return;
    }
    
    document.getElementById('user-stats').classList.remove('hidden');
    let html = `<p>Viewing: <strong>${username}</strong></p>`;
    
    if (Object.keys(userData.stats).length === 0) {
        html += `<p>No quiz data yet. Complete a quiz to see your stats!</p>`;
    } else {
        for (const subject in userData.stats) {
            const s = userData.stats[subject];
            html += `
                <div class="report-card">
                    <h4>${subject.toUpperCase()}</h4>
                    <p>Attempts: ${s.attempts}</p>
                    <p>Best Score: ${s.bestScore}/15</p>
                    <p>Average Time: ${Math.floor(s.avgTime/60)}m ${s.avgTime%60}s</p>
                    ${Object.keys(s.commonMistakes).length > 0 ? 
                        `<p>Common Mistakes: ${Object.entries(s.commonMistakes)
                            .sort((a,b) => b[1]-a[1])
                            .slice(0,3)
                            .map(([topic, count]) => `${topic} (${count})`).join(', ')}</p>` : ''}
                </div>
            `;
        }
    }
    
    // Show user switcher if multiple users exist
    const userCount = Object.keys(allUserData).length;
    if (userCount > 1) {
        html += `<div class="user-switcher">
            <h4>Switch User</h4>
            <select id="user-select">
                ${Object.keys(allUserData).map(u => 
                    `<option value="${u}" ${u === username ? 'selected' : ''}>${u}</option>`
                ).join('')}
            </select>
            <button id="switch-user-btn">Switch</button>
        </div>`;
    }
    
    statsDiv.innerHTML = html;
    
    // Add event listener for user switcher if it exists
    const switchBtn = document.getElementById('switch-user-btn');
    if (switchBtn) {
        switchBtn.addEventListener('click', () => {
            const selectedUser = document.getElementById('user-select').value;
            document.getElementById('username').value = selectedUser;
            displayUserStats(selectedUser);
        });
    }
}

// Quiz state variables
let currentQuestion = 0;
let score = 0;
let time = 420; // 7 minutes in seconds
let timerInterval;
let userAnswers = [];
let flaggedQuestions = [];
let currentSubject = 'math';
let shuffledQuestions = [];

// DOM Elements
const startBtn = document.getElementById('start-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const submitBtn = document.getElementById('submit-btn');
const homeBtn = document.getElementById('home-btn');
const userSubmitBtn = document.getElementById('user-submit');

// Event Listeners
startBtn.addEventListener('click', startQuiz);
prevBtn.addEventListener('click', showPreviousQuestion);
nextBtn.addEventListener('click', showNextQuestion);
submitBtn.addEventListener('click', showResults);
homeBtn.addEventListener('click', goHome);
userSubmitBtn.addEventListener('click', saveUsername);

// Updated saveUsername function
function saveUsername() {
    const username = document.getElementById('username').value.trim();
    if (username) {
        const allUserData = getAllUserData();
        
        // If this is a new user, initialize their data
        if (!allUserData[username]) {
            allUserData[username] = {
                stats: {},
                lastActive: new Date().toISOString()
            };
            saveAllUserData(allUserData);
        }
        
        displayUserStats(username);
    }
}

function goHome() {
    clearInterval(timerInterval);
    document.getElementById('quiz-container').classList.add('hidden');
    document.getElementById('result-container').classList.add('hidden');
    document.getElementById('start-screen').classList.remove('hidden');
    displayUserStats();
}

function startQuiz() {
    const username = document.getElementById('username').value.trim();
    if (!username) {
        alert('Please enter your name before starting the quiz.');
        return;
    }
    
    currentSubject = document.getElementById('subject-select').value;
    
    // Shuffle questions and select first 15
    shuffledQuestions = shuffleArray([...questions[currentSubject]]).slice(0, 15);
    userAnswers = Array(shuffledQuestions.length).fill(null);
    flaggedQuestions = Array(shuffledQuestions.length).fill(false);
    
    document.getElementById('start-screen').classList.add('hidden');
    document.getElementById('quiz-container').classList.remove('hidden');
    resetQuizState();
    startTimer();
    showQuestion();
}

function resetQuizState() {
    currentQuestion = 0;
    score = 0;
    time = 420; // 7 minutes
    document.querySelector('.progress').style.width = '0%';
}

function startTimer() {
    updateTimerDisplay();
    timerInterval = setInterval(() => {
        time--;
        updateTimerDisplay();
        if (time <= 0) {
            clearInterval(timerInterval);
            showResults();
        }
    }, 1000);
}

function updateTimerDisplay() {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    const timer = document.getElementById('timer');
    timer.textContent = `Time: ${minutes.toString().padStart(2,'0')}:${seconds.toString().padStart(2,'0')}`;
    
    if (time <= 60) { // Last minute
        timer.classList.add('low-time');
    } else {
        timer.classList.remove('low-time');
    }
}

function showQuestion() {
    const question = shuffledQuestions[currentQuestion];
    const optionsDiv = document.getElementById('options');
    
    document.getElementById('question-number').textContent = 
        `Question ${currentQuestion + 1}/${shuffledQuestions.length}`;
    
    document.getElementById('question').textContent = question.q;
    optionsDiv.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = `option ${userAnswers[currentQuestion] === index ? 'selected' : ''} ${flaggedQuestions[currentQuestion] ? 'flagged' : ''}`;
        optionDiv.textContent = option;
        optionDiv.onclick = () => selectAnswer(index);
        optionDiv.ondblclick = () => toggleFlagged();
        optionsDiv.appendChild(optionDiv);
    });

    prevBtn.disabled = currentQuestion === 0;
    nextBtn.disabled = currentQuestion === shuffledQuestions.length - 1;
    submitBtn.classList.toggle('hidden', currentQuestion !== shuffledQuestions.length - 1);
    
    const progress = (currentQuestion + 1) / shuffledQuestions.length * 100;
    document.querySelector('.progress').style.width = `${progress}%`;
}

function toggleFlagged() {
    flaggedQuestions[currentQuestion] = !flaggedQuestions[currentQuestion];
    showQuestion(); // Refresh to show flag
}

function selectAnswer(selectedIndex) {
    userAnswers[currentQuestion] = selectedIndex;
    showQuestion();
}

function showPreviousQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        showQuestion();
    }
}

function showNextQuestion() {
    if (currentQuestion < shuffledQuestions.length - 1) {
        currentQuestion++;
        showQuestion();
    }
}

function showResults() {
    clearInterval(timerInterval);
    document.getElementById('quiz-container').classList.add('hidden');
    document.getElementById('result-container').classList.remove('hidden');

    // Calculate score and accuracy
    const mistakes = [];
    score = shuffledQuestions.reduce((acc, question, index) => {
        if (userAnswers[index] === question.correct) {
            return acc + 1;
        } else {
            mistakes.push(question.topic);
            return acc;
        }
    }, 0);
    
    const accuracy = ((score / shuffledQuestions.length) * 100).toFixed(1);
    const timeTaken = 420 - time;

    // Update user stats
    const username = document.getElementById('username').value.trim();
    if (username) {
        updateUserStats(username, currentSubject, score, timeTaken, mistakes);
    }
    // This web based quiz app was created by AKIB UZ ZAMAN
    // Display results
    document.getElementById('scores').innerHTML = `
        <h3>📚 ${currentSubject.toUpperCase()} RESULTS</h3>
        <div class="report-card">
            <p>✅ Correct Answers: ${score}/15</p>
            <p>📈 Accuracy: ${accuracy}%</p>
            <p>⏱️ Time Taken: ${Math.floor(timeTaken/60)}m ${timeTaken%60}s</p>
            ${flaggedQuestions.some(f => f) ? `<p>🚩 Flagged Questions: ${flaggedQuestions.filter(f => f).length}</p>` : ''}
        </div>
    `;

    // Generate recommendations
    const recommendations = generateRecommendations(timeTaken, accuracy, mistakes);
    document.getElementById('recommendations').innerHTML = `
        <h4>🤖 AI Analysis</h4>
        <div class="report-card">
            ${recommendations.map(r => `<p>• ${r}</p>`).join('')}
        </div>
    `;

    // Show answer feedback
    showAnswerFeedback();
}

function showAnswerFeedback() {
    const feedbackDiv = document.getElementById('answer-feedback');
    let html = '<h4>📝 Question Review</h4>';
    
    shuffledQuestions.forEach((question, index) => {
        const isCorrect = userAnswers[index] === question.correct;
        const userAnswer = userAnswers[index] !== null ? question.options[userAnswers[index]] : "Unanswered";
        const correctAnswer = question.options[question.correct];
        
        html += `
            <div class="answer-item ${isCorrect ? 'correct' : 'incorrect'}">
                <p><strong>Q${index+1}:</strong> ${question.q}</p>
                <p>Your answer: ${userAnswer} ${isCorrect ? '✅' : '❌'}</p>
                ${!isCorrect ? `<p>Correct answer: ${correctAnswer}</p>` : ''}
                <p class="explanation">💡 ${question.explanation}</p>
            </div>
        `;
    });
    
    feedbackDiv.innerHTML = html;
}

function generateRecommendations(timeTaken, accuracy, mistakes) {
    const recommendations = [];
    const topicFrequency = mistakes.reduce((acc, topic) => {
        acc[topic] = (acc[topic] || 0) + 1;
        return acc;
    }, {});

    const topWeakTopic = Object.entries(topicFrequency).sort((a,b) => b[1]-a[1])[0];

    // Time-based suggestions
    if (timeTaken < 180) {
        recommendations.push("⚡ You finished quickly! Consider spending more time reviewing each question");
    } else if (timeTaken > 360) {
        recommendations.push("⏳ Time Management: Practice with timed quizzes to improve your pacing");
    } else {
        recommendations.push("⏱️ Good time management! You used your time effectively");
    }

    // Accuracy-based suggestions
    if (accuracy < 50) {
        recommendations.push("📚 Foundation Alert: Focus on basic concepts before moving to advanced topics");
    } else if (accuracy < 75) {
        recommendations.push("🎯 Target Practice: Concentrate on your weak areas for improvement");
    } else {
        recommendations.push("🎉 Excellent Accuracy! Keep up the good work");
    }

    // Topic-based suggestions
    if (topWeakTopic) {
        recommendations.push(
            `🔍 Focus Area: ${topWeakTopic[0]} (${topWeakTopic[1]} errors)`
        );
    }

    // Flagged questions
    const flaggedCount = flaggedQuestions.filter(f => f).length;
    if (flaggedCount > 0) {
        recommendations.push(
            `🚩 You flagged ${flaggedCount} questions - review these carefully`
        );
    }

    // Subject-specific resources
    const resources = {
        math: "Practice on ACS Math courses (aparsclassroom.com/math)",
        bio: "Watch Nano Biology Course YouTube videos for biology concepts",
        english: "Do Munzereen Apu's English course to improve grammar"
    };
    recommendations.push(`📚 Recommended Resource: ${resources[currentSubject]}`);

    return recommendations;
}

// Initialize
displayUserStats();
