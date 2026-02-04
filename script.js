// Game State
let currentEra = null;
let currentSite = null;
let currentMiniGame = null;
let currentGameStep = 0;
let gameScore = 0;

// Auth State
let currentUser = null;
let isLoggedIn = false;

// Global variables for map and markers
let map;
let markers = {};
let photoContainer = null;

// DOM Elements
const loadingScreen = document.getElementById('loadingScreen');
const starfield = document.getElementById('starfield');
const playerPointsEl = document.getElementById('playerPoints');
const playerRankEl = document.getElementById('playerRank');
const playerBadgesEl = document.getElementById('playerBadges');
const eraListEl = document.getElementById('eraList');
const galleryGridEl = document.getElementById('galleryGrid');
const quizModal = document.getElementById('quizModal');
const quizContainer = document.getElementById('quizContainer');
const notification = document.getElementById('notification');
const notificationMessage = document.getElementById('notificationMessage');

// Auth DOM Elements
const authContainer = document.getElementById('authContainer');
const gameInterface = document.getElementById('gameInterface');
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');
const authTabs = document.querySelectorAll('.auth-tab');
const authParticles = document.getElementById('authParticles');
const userMenuBtn = document.getElementById('userMenuBtn');
const userDropdown = document.getElementById('userDropdown');
const logoutBtn = document.getElementById('logoutBtn');
const usernameDisplay = document.getElementById('usernameDisplay');
const profileBtn = document.getElementById('profileBtn');
const avatarShopBtn = document.getElementById('avatarShopBtn');
const profileModal = document.getElementById('profileModal');
const closeProfileModal = document.getElementById('closeProfileModal');
const profileContent = document.getElementById('profileContent');
const avatarShopModal = document.getElementById('avatarShopModal');
const closeAvatarShopModal = document.getElementById('closeAvatarShopModal');
const avatarShopContent = document.getElementById('avatarShopContent');

// Welcome System
const welcomeContainer = document.getElementById('welcomeContainer');
const welcomeStartBtn = document.getElementById('welcomeStartBtn');

// Photo Preview Modal
const photoPreviewModal = document.getElementById('photoPreviewModal');
const photoTitle = document.getElementById('photoTitle');
const previewImage = document.getElementById('previewImage');
const photoDescription = document.getElementById('photoDescription');
const closePhotoModal = document.getElementById('closePhotoModal');

// Guide System Elements
const guideContainer = document.getElementById('guideContainer');
const guideContent = document.getElementById('guideContent');
const guideSkipBtn = document.getElementById('guideSkipBtn');
const prevGuideBtn = document.getElementById('prevGuideBtn');
const nextGuideBtn = document.getElementById('nextGuideBtn');
const guideProgress = document.getElementById('guideProgress');
const showGuideBtn = document.getElementById('showGuideBtn');
const guideBtn = document.getElementById('guideBtn');

// Enhanced Avatar System
const avatarShop = {
    avatars: [
        { id: 'default', name: 'Explorer', price: 0, category: 'basic', icon: 'fas fa-user', description: 'Your starting avatar' },
        { id: 'phoenician', name: 'Phoenician Trader', price: 500, category: 'historical', icon: 'fas fa-ship', description: 'Master of ancient sea routes' },
        { id: 'roman', name: 'Roman Legionary', price: 800, category: 'historical', icon: 'fas fa-helmet-battle', description: 'Guardian of the empire' },
        { id: 'carthaginian', name: 'Carthaginian General', price: 1000, category: 'historical', icon: 'fas fa-crown', description: 'Leader of ancient Carthage' },
        { id: 'islamic', name: 'Islamic Scholar', price: 600, category: 'historical', icon: 'fas fa-mosque', description: 'Keeper of knowledge and faith' },
        { id: 'ottoman', name: 'Ottoman Bey', price: 900, category: 'historical', icon: 'fas fa-scroll', description: 'Ruler of the Ottoman era' },
        { id: 'neon_warrior', name: 'Neon Warrior', price: 1500, category: 'special', icon: 'fas fa-robot', description: 'Futuristic history defender' },
        { id: 'time_traveler', name: 'Time Traveler', price: 2000, category: 'special', icon: 'fas fa-clock', description: 'Master of historical timelines' },
        { id: 'history_master', name: 'History Master', price: 3000, category: 'special', icon: 'fas fa-graduation-cap', description: 'Ultimate historical expert' },
        { id: 'treasure_hunter', name: 'Treasure Hunter', price: 1200, category: 'special', icon: 'fas fa-gem', description: 'Seeker of hidden artifacts' },
        { id: 'desert_nomad', name: 'Desert Nomad', price: 700, category: 'regional', icon: 'fas fa-camel', description: 'Wanderer of the Sahara' },
        { id: 'medina_merchant', name: 'Medina Merchant', price: 850, category: 'regional', icon: 'fas fa-coins', description: 'Trader in ancient markets' }
    ],
    categories: [
        { id: 'all', name: 'All Avatars' },
        { id: 'basic', name: 'Basic' },
        { id: 'historical', name: 'Historical' },
        { id: 'special', name: 'Special' },
        { id: 'regional', name: 'Regional' }
    ]
};

// Guide System
const guideSteps = [
    {
        id: 1,
        title: "Welcome to Tunisia Explorer!",
        description: "I'm Tariq, your personal guide. Let me show you around this amazing journey through Tunisia's history!",
        hint: "Click 'Next' to continue the tutorial"
    },
    {
        id: 2,
        title: "Exploring Historical Eras",
        description: "Start with Ancient Carthage! Click on any era in the sidebar to see available historical sites. Green checkmarks show sites you've discovered.",
        hint: "Try clicking on 'Ancient Carthage' in the sidebar"
    },
    {
        id: 3,
        title: "Interactive Map",
        description: "The map shows all historical sites. Red markers are undiscovered, green are discovered. Click any marker to explore a site!",
        hint: "Double-click markers to see photos, single-click to explore sites"
    },
    {
        id: 4,
        title: "Earning Coins & Points",
        description: "Complete quizzes at historical sites to earn coins and points. Use coins to buy avatars in the shop!",
        hint: "You start with 100 coins. Each completed site gives 100 more!"
    },
    {
        id: 5,
        title: "Your Profile & Avatars",
        description: "Click your username in the top-right to access your profile and avatar shop. Customize your explorer identity!",
        hint: "Try visiting the avatar shop to see all available avatars"
    },
    {
        id: 6,
        title: "Timeline Progress",
        description: "Track your journey on the timeline below. Complete eras to unlock new ones and earn special badges!",
        hint: "Complete all sites in an era to unlock the next one"
    },
    {
        id: 7,
        title: "Ready to Explore!",
        description: "You're all set! Start your adventure by clicking any site marker on the map or selecting from the sidebar.",
        hint: "Begin with 'Carthage Ruins' in the Ancient Carthage era"
    }
];

let currentGuideStep = 0;
let guideActive = false;

// Initialize the application
document.addEventListener('DOMContentLoaded', function () {
    initAuthSystem();
    initCursorEffects();
    loadGameSettings();
    setupEventListeners();
    initGuideSystem();
    initWelcomeSystem();
});

// Initialize Auth System
function initAuthSystem() {
    createAuthParticles();
    setupAuthEventListeners();
    checkExistingSession();
}

// Create animated particles for auth background
function createAuthParticles() {
    const particleCount = 20;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');

        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const tx = (Math.random() - 0.5) * 100;
        const ty = (Math.random() - 0.5) * 100;

        particle.style.left = `${x}%`;
        particle.style.top = `${y}%`;
        particle.style.setProperty('--tx', `${tx}px`);
        particle.style.setProperty('--ty', `${ty}px`);
        particle.style.animationDelay = `${Math.random() * 6}s`;
        particle.style.opacity = Math.random() * 0.5 + 0.1;

        authParticles.appendChild(particle);
    }
}

// Initialize cursor effects
function initCursorEffects() {
    let trailCount = 0;
    const maxTrails = 10;

    document.addEventListener('mousemove', (e) => {
        if (trailCount < maxTrails) {
            const trail = document.createElement('div');
            trail.className = 'cursor-trail';
            trail.style.left = `${e.clientX - 10}px`;
            trail.style.top = `${e.clientY - 10}px`;

            const hue = Math.random() * 60 + 180;
            trail.style.background = `radial-gradient(circle, hsl(${hue}, 100%, 70%), transparent)`;

            document.body.appendChild(trail);
            trailCount++;

            setTimeout(() => {
                if (trail.parentNode) {
                    trail.parentNode.removeChild(trail);
                    trailCount--;
                }
            }, 600);
        }
    });
}

// Setup auth event listeners
function setupAuthEventListeners() {
    authTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const targetTab = tab.dataset.tab;
            authTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            document.querySelectorAll('.auth-form').forEach(form => {
                form.classList.remove('active');
            });
            document.getElementById(`${targetTab}Form`).classList.add('active');
        });
    });

    loginForm.addEventListener('submit', handleLogin);
    signupForm.addEventListener('submit', handleSignup);

    // User dropdown
    userMenuBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        userDropdown.classList.toggle('show');
    });

    profileBtn.addEventListener('click', showProfile);
    avatarShopBtn.addEventListener('click', showAvatarShop);
    logoutBtn.addEventListener('click', handleLogout);
    closeProfileModal.addEventListener('click', () => {
        profileModal.classList.remove('active');
    });
    closeAvatarShopModal.addEventListener('click', () => {
        avatarShopModal.classList.remove('active');
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!userMenuBtn.contains(e.target) && !userDropdown.contains(e.target)) {
            userDropdown.classList.remove('show');
        }
    });

    profileModal.addEventListener('click', (e) => {
        if (e.target === profileModal) {
            profileModal.classList.remove('active');
        }
    });

    avatarShopModal.addEventListener('click', (e) => {
        if (e.target === avatarShopModal) {
            avatarShopModal.classList.remove('active');
        }
    });
}

// Check for existing session
function checkExistingSession() {
    const savedUser = localStorage.getItem('tunisiaExplorerUser');
    const savedGameState = localStorage.getItem('tunisiaExplorerState');

    if (savedUser && savedGameState) {
        try {
            currentUser = JSON.parse(savedUser);
            isLoggedIn = true;
            showGameInterface();
        } catch (error) {
            console.error('Error loading user session:', error);
            showAuthInterface();
        }
    } else {
        showAuthInterface();
    }
}

// Handle login
function handleLogin(e) {
    e.preventDefault();

    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    if (!username || !password) {
        showAuthNotification('Please fill in all fields', 'error');
        return;
    }

    const loginBtn = loginForm.querySelector('.auth-btn');
    const originalText = loginBtn.innerHTML;

    loginBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Authenticating...';
    loginBtn.disabled = true;

    setTimeout(() => {
        const users = JSON.parse(localStorage.getItem('tunisiaExplorerUsers') || '{}');

        if (users[username] && users[username].password === password) {
            currentUser = {
                username: username,
                email: users[username].email,
                joined: users[username].joined,
                avatar: users[username].avatar || 'default',
                ownedAvatars: users[username].ownedAvatars || ['default'],
                coins: users[username].coins || 0
            };

            localStorage.setItem('tunisiaExplorerUser', JSON.stringify(currentUser));
            isLoggedIn = true;

            showAuthNotification('Welcome back, Explorer!', 'success');
            setTimeout(() => {
                showGameInterface();
            }, 1500);
        } else {
            showAuthNotification('Invalid username or password', 'error');
            loginBtn.innerHTML = originalText;
            loginBtn.disabled = false;
        }
    }, 2000);
}

// Handle signup
function handleSignup(e) {
    e.preventDefault();

    const username = document.getElementById('signupUsername').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    const confirmPassword = document.getElementById('signupConfirmPassword').value;
    const termsAgreed = document.getElementById('termsAgreement').checked;

    if (!username || !email || !password || !confirmPassword) {
        showAuthNotification('Please fill in all fields', 'error');
        return;
    }

    if (password !== confirmPassword) {
        showAuthNotification('Passwords do not match', 'error');
        return;
    }

    if (!termsAgreed) {
        showAuthNotification('Please agree to the terms and conditions', 'error');
        return;
    }

    if (password.length < 6) {
        showAuthNotification('Password must be at least 6 characters', 'error');
        return;
    }

    const signupBtn = signupForm.querySelector('.auth-btn');
    const originalText = signupBtn.innerHTML;

    signupBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Creating Account...';
    signupBtn.disabled = true;

    setTimeout(() => {
        const users = JSON.parse(localStorage.getItem('tunisiaExplorerUsers') || '{}');

        if (users[username]) {
            showAuthNotification('Username already exists', 'error');
            signupBtn.innerHTML = originalText;
            signupBtn.disabled = false;
            return;
        }

        users[username] = {
            password: password,
            email: email,
            joined: new Date().toISOString(),
            avatar: 'default',
            ownedAvatars: ['default'],
            coins: 100
        };

        localStorage.setItem('tunisiaExplorerUsers', JSON.stringify(users));

        currentUser = {
            username: username,
            email: email,
            joined: users[username].joined,
            avatar: 'default',
            ownedAvatars: ['default'],
            coins: 100
        };

        localStorage.setItem('tunisiaExplorerUser', JSON.stringify(currentUser));
        isLoggedIn = true;

        showAuthNotification('Account created successfully! You received 100 starting coins!', 'success');
        setTimeout(() => {
            showGameInterface();
        }, 1500);
    }, 2000);
}

// Show auth notification
function showAuthNotification(message, type) {
    const notification = document.createElement('div');
    notification.className = `auth-notification ${type}`;
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check' : 'exclamation'}-circle"></i>
        <span>${message}</span>
    `;

    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? 'rgba(0, 255, 0, 0.1)' : 'rgba(255, 0, 0, 0.1)'};
        border: 1px solid ${type === 'success' ? 'var(--success-color)' : 'var(--danger-color)'};
        color: var(--text-light);
        padding: 1rem 1.5rem;
        border-radius: 8px;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        z-index: 10001;
        animation: slideInRight 0.3s ease;
    `;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Show auth interface
function showAuthInterface() {
    authContainer.classList.add('active');
    gameInterface.classList.remove('active');
    loginForm.reset();
    signupForm.reset();
}

// Show game interface
function showGameInterface() {
    authContainer.classList.remove('active');
    gameInterface.classList.add('active');

    if (currentUser) {
        usernameDisplay.textContent = currentUser.username;
        // Update header avatar icon
        const currentAvatar = avatarShop.avatars.find(avatar => avatar.id === currentUser.avatar) || avatarShop.avatars[0];
        const headerAvatarIcon = document.getElementById('headerAvatarIcon');
        if (headerAvatarIcon) {
            headerAvatarIcon.className = currentAvatar.icon;
        }
    }

    if (!window.gameInitialized) {
        initGame();
        window.gameInitialized = true;
    }
}

// Initialize Welcome System
function initWelcomeSystem() {
    if (welcomeStartBtn) {
        welcomeStartBtn.addEventListener('click', () => {
            welcomeContainer.classList.remove('active');
            setTimeout(() => {
                showGuide();
            }, 1000);
        });
    }
}

function showWelcomeContainer() {
    const hasSeenWelcome = localStorage.getItem('tunisiaExplorer_welcomeSeen');

    if (!hasSeenWelcome) {
        if (welcomeContainer) {
            welcomeContainer.classList.add('active');
            localStorage.setItem('tunisiaExplorer_welcomeSeen', 'true');
        }
    }
}

// Initialize Guide System
function initGuideSystem() {
    if (guideSkipBtn) {
        guideSkipBtn.addEventListener('click', hideGuide);
    }

    if (prevGuideBtn) {
        prevGuideBtn.addEventListener('click', prevGuideStep);
    }

    if (nextGuideBtn) {
        nextGuideBtn.addEventListener('click', nextGuideStep);
    }

    if (showGuideBtn) {
        showGuideBtn.addEventListener('click', showGuide);
    }

    if (guideBtn) {
        guideBtn.addEventListener('click', (e) => {
            e.preventDefault();
            userDropdown.classList.remove('show');
            showGuide();
        });
    }

    // Check if guide should be shown
    const guideCompleted = localStorage.getItem('tunisiaExplorer_guideCompleted');
    if (!guideCompleted && isLoggedIn) {
        setTimeout(() => {
            showGuide();
        }, 2000);
    }
}

// Show guide
function showGuide() {
    if (!guideContainer) return;

    guideActive = true;
    currentGuideStep = 0;
    guideContainer.classList.add('active');
    renderGuideStep();
}

// Hide guide
function hideGuide() {
    if (!guideContainer) return;

    guideActive = false;
    guideContainer.classList.remove('active');
    localStorage.setItem('tunisiaExplorer_guideCompleted', 'true');
}

// Render guide step
function renderGuideStep() {
    if (!guideContent || !guideProgress || !prevGuideBtn || !nextGuideBtn) return;

    const step = guideSteps[currentGuideStep];

    // Update content
    guideContent.innerHTML = `
        <div class="guide-step ${currentGuideStep === 0 ? 'active' : 'completed'}">
            <span class="guide-step-number">${step.id}</span>
            <span class="guide-step-title">${step.title}</span>
            <p class="guide-step-description">${step.description}</p>
            <div class="guide-step-hint">
                <i class="fas fa-lightbulb"></i>
                <span>${step.hint}</span>
            </div>
        </div>
    `;

    // Update progress dots
    guideProgress.innerHTML = '';
    guideSteps.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.className = 'progress-dot';
        if (index === currentGuideStep) {
            dot.classList.add('active');
        } else if (index < currentGuideStep) {
            dot.classList.add('completed');
        }
        dot.addEventListener('click', () => {
            currentGuideStep = index;
            renderGuideStep();
        });
        guideProgress.appendChild(dot);
    });

    // Update buttons
    prevGuideBtn.disabled = currentGuideStep === 0;
    nextGuideBtn.textContent = currentGuideStep === guideSteps.length - 1 ? 'Finish Tutorial' : 'Next Step';
}

// Previous guide step
function prevGuideStep() {
    if (currentGuideStep > 0) {
        currentGuideStep--;
        renderGuideStep();
    }
}

// Next guide step
function nextGuideStep() {
    if (currentGuideStep < guideSteps.length - 1) {
        currentGuideStep++;
        renderGuideStep();
    } else {
        hideGuide();
        showNotification('Tutorial completed! Happy exploring!', 'success');
    }
}

// Initialize the game
function initGame() {
    loadGameState();
    createStarfield();
    initMap();
    renderEraList();
    updatePlayerStats();
    renderGallery();
    updateTimeline();

    setTimeout(() => {
        loadingScreen.classList.add('hidden');

        setTimeout(() => {
            showWelcomeContainer();
        }, 500);
    }, 2000);

    initializeSettings();
}

// Create animated starfield background
function createStarfield() {
    const starCount = 100;

    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.classList.add('star');

        const size = Math.random() * 2 + 1;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.animationDelay = `${Math.random() * 4}s`;

        starfield.appendChild(star);
    }
}

// Initialize the OpenStreetMap
function initMap() {
    if (!document.getElementById('map')) return;

    map = L.map('map').setView([34.0, 9.0], 7);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 18
    }).addTo(map);
    map.attributionControl.setPosition('bottomleft');
    map.zoomControl.setPosition('topright');
    // Add markers for all sites
    gameData.eras.forEach(era => {
        era.sites.forEach(site => {
            const icon = L.divIcon({
                html: `<div class="custom-marker ${site.discovered ? 'discovered' : 'undiscovered'}"></div>`,
                className: 'marker-container',
                iconSize: [20, 20],
                iconAnchor: [10, 10]
            });

            const marker = L.marker([site.lat, site.lng], { icon })
                .addTo(map)
                .bindPopup(`
                    <div class="map-popup">
                        <h3>${site.name}</h3>
                        <p>${site.description}</p>
                        <img src="${site.image}" alt="${site.name}" style="width: 100%; border-radius: 5px; margin: 5px 0;">
                        ${!site.discovered ? `<button onclick="openSiteWelcomeFromMap('${era.id}', '${site.id}')" class="btn btn-primary" style="width: 100%; margin-top: 5px;">Explore Site</button>` : ''}
                    </div>
                `);

            marker.on('click', () => {
                if (era.unlocked) {
                    openSiteWelcome(era, site);
                } else {
                    showNotification('This era is locked! Complete previous eras first.', 'error');
                }
            });

            // Add double click event for photo preview
            marker.on('dblclick', () => {
                showPhotoPreview(site);
            });

            markers[site.id] = marker;
        });
    });
}

// Show photo preview modal
function showPhotoPreview(site) {
    photoTitle.textContent = site.name;
    previewImage.src = site.image;
    photoDescription.textContent = site.description;
    photoPreviewModal.classList.add('active');
}

// Update timeline progress
function updateTimeline() {
    const totalSites = gameData.eras.reduce((total, era) => total + era.sites.length, 0);
    const discoveredSites = gameData.playerStats.discoveredSites.length;
    const progressPercent = (discoveredSites / totalSites) * 100;

    const timelineTrack = document.querySelector('.timeline-track');
    if (timelineTrack) {
        timelineTrack.style.setProperty('--progress', `${progressPercent}%`);
    }

    // Update timeline milestones
    const timelineMilestones = document.getElementById('timelineMilestones');
    if (timelineMilestones) {
        timelineMilestones.innerHTML = '';

        gameData.eras.forEach(era => {
            const milestone = document.createElement('div');
            milestone.className = 'timeline-milestone';

            const discoveredCount = era.sites.filter(site => site.discovered).length;
            const totalCount = era.sites.length;

            if (discoveredCount === totalCount) {
                milestone.classList.add('completed');
                milestone.innerHTML = '<i class="fas fa-check"></i>';
            } else if (discoveredCount > 0) {
                milestone.classList.add('current');
                milestone.innerHTML = '<i class="fas fa-play"></i>';
            } else {
                milestone.innerHTML = '<i class="fas fa-lock"></i>';
            }

            const label = document.createElement('div');
            label.className = 'milestone-label';
            label.textContent = era.name.split(' ')[0];

            milestone.appendChild(label);
            timelineMilestones.appendChild(milestone);
        });
    }
}


// Open site from map popup
function openSiteWelcomeFromMap(eraId, siteId) {
    const era = gameData.eras.find(e => e.id === eraId);
    const site = era.sites.find(s => s.id === siteId);
    if (era && site) {
        openSiteWelcome(era, site);
    }
}

// Open site welcome screen
function openSiteWelcome(era, site) {
    if (site.discovered) {
        showNotification('You\'ve already discovered this site!', 'error');
        return;
    }

    currentEra = era;
    currentSite = site;
    currentGameStep = 0;
    gameScore = 100; // Base score for starting

    renderWelcomeScreen();
    quizModal.classList.add('active');
}

// Render welcome screen
function renderWelcomeScreen() {
    if (!quizContainer) return;

    quizContainer.innerHTML = `
        <div class="welcome-screen">
            <div class="welcome-icon">
                <i class="fas fa-map-marked-alt"></i>
            </div>
            <h2 class="welcome-title">Welcome to ${currentSite.name}!</h2>
            <p class="welcome-message">Are you ready to explore this historical treasure?</p>
            <button class="btn btn-primary" onclick="startMiniGames()">Start Exploration</button>
        </div>
    `;
}

// Start mini-games
function startMiniGames() {
    currentMiniGame = 'quiz';
    renderQuizGame();
}

let currentQuizQuestion = 0;
let quizAnswers = [];

function renderQuizGame() {
    if (!quizContainer) return;

    const quiz = currentSite.miniGames.quiz;
    currentQuizQuestion = 0;
    quizAnswers = [];

    showQuizQuestion();
}

function showQuizQuestion() {
    const quiz = currentSite.miniGames.quiz;
    const question = quiz.questions[currentQuizQuestion];

    quizContainer.innerHTML = `
        <div class="quiz-game">
            <div class="quiz-progress-bar">
                <div class="quiz-progress-fill" style="width: ${((currentQuizQuestion + 1) / quiz.questions.length) * 100}%"></div>
            </div>
            
            <div class="quiz-header">
                <h3>${quiz.title}</h3>
                <div class="quiz-counter">Question ${currentQuizQuestion + 1} of ${quiz.questions.length}</div>
            </div>
            
            <div class="quiz-question-container">
                <h4 class="quiz-question-text">${question.question}</h4>
                
                <div class="quiz-options-grid">
                    ${question.options.map((option, index) => `
                        <div class="quiz-option-card" data-index="${index}" onclick="selectQuizOption(${index})">
                            <div class="option-indicator"></div>
                            <div class="option-text">${option}</div>
                        </div>
                    `).join('')}
                </div>
            </div>
            
            <div class="quiz-actions">
                ${currentQuizQuestion > 0 ? `
                    <button class="btn btn-secondary" onclick="previousQuizQuestion()">
                        <i class="fas fa-arrow-left"></i> Previous
                    </button>
                ` : '<div></div>'}
                
                <button class="btn btn-primary" id="quizNextBtn" onclick="nextQuizQuestion()" disabled>
                    ${currentQuizQuestion === quiz.questions.length - 1 ? 'Submit Quiz' : 'Next Question'}
                    <i class="fas fa-arrow-right"></i>
                </button>
            </div>
        </div>
    `;
}

function selectQuizOption(index) {
    // Remove previous selection
    document.querySelectorAll('.quiz-option-card').forEach(card => {
        card.classList.remove('selected');
    });

    // Select new option
    const selectedCard = document.querySelector(`[data-index="${index}"]`);
    selectedCard.classList.add('selected');

    // Store answer
    quizAnswers[currentQuizQuestion] = index;

    // Enable next button
    document.getElementById('quizNextBtn').disabled = false;
}

function previousQuizQuestion() {
    if (currentQuizQuestion > 0) {
        currentQuizQuestion--;
        showQuizQuestion();

        // Restore previous selection
        if (quizAnswers[currentQuizQuestion] !== undefined) {
            setTimeout(() => {
                const selectedCard = document.querySelector(`[data-index="${quizAnswers[currentQuizQuestion]}"]`);
                if (selectedCard) {
                    selectedCard.classList.add('selected');
                    document.getElementById('quizNextBtn').disabled = false;
                }
            }, 100);
        }
    }
}

function nextQuizQuestion() {
    const quiz = currentSite.miniGames.quiz;

    if (currentQuizQuestion < quiz.questions.length - 1) {
        currentQuizQuestion++;
        showQuizQuestion();

        // Restore selection if exists
        if (quizAnswers[currentQuizQuestion] !== undefined) {
            setTimeout(() => {
                const selectedCard = document.querySelector(`[data-index="${quizAnswers[currentQuizQuestion]}"]`);
                if (selectedCard) {
                    selectedCard.classList.add('selected');
                    document.getElementById('quizNextBtn').disabled = false;
                }
            }, 100);
        }
    } else {
        // Submit quiz
        checkQuizAnswers();
    }
}

function checkQuizAnswers() {
    const quiz = currentSite.miniGames.quiz;
    let correctCount = 0;

    quiz.questions.forEach((question, index) => {
        if (quizAnswers[index] === question.correct) {
            correctCount++;
        }
    });

    const percentage = (correctCount / quiz.questions.length) * 100;

    // Show results
    quizContainer.innerHTML = `
        <div class="quiz-results">
            <div class="results-icon">
                <i class="fas fa-${percentage >= 70 ? 'trophy' : 'redo'}"></i>
            </div>
            
            <h2 class="results-title">${percentage >= 70 ? 'Great Job!' : 'Keep Learning!'}</h2>
            
            <div class="results-score">
                <div class="score-circle">
                    <div class="score-value">${correctCount}/${quiz.questions.length}</div>
                    <div class="score-label">Correct Answers</div>
                </div>
            </div>
            
            <div class="results-percentage">
                <div class="percentage-bar">
                    <div class="percentage-fill" style="width: ${percentage}%"></div>
                </div>
                <div class="percentage-text">${Math.round(percentage)}% Score</div>
            </div>
            
            <div class="results-breakdown">
                <h4>Question Breakdown:</h4>
                ${quiz.questions.map((question, index) => {
        const isCorrect = quizAnswers[index] === question.correct;
        return `
                        <div class="breakdown-item ${isCorrect ? 'correct' : 'incorrect'}">
                            <div class="breakdown-icon">
                                <i class="fas fa-${isCorrect ? 'check' : 'times'}"></i>
                            </div>
                            <div class="breakdown-text">
                                <div class="breakdown-question">Q${index + 1}: ${question.question}</div>
                                <div class="breakdown-answer">
                                    Your answer: ${question.options[quizAnswers[index]]}
                                    ${!isCorrect ? `<br>Correct: ${question.options[question.correct]}` : ''}
                                </div>
                            </div>
                        </div>
                    `;
    }).join('')}
            </div>
            
            ${percentage >= 70 ? `
                <button class="btn btn-primary" onclick="completeQuiz()">
                    Continue <i class="fas fa-arrow-right"></i>
                </button>
            ` : `
                <button class="btn btn-secondary" onclick="renderQuizGame()">
                    <i class="fas fa-redo"></i> Retry Quiz
                </button>
            `}
        </div>
    `;

    if (percentage >= 70) {
        gameScore += 100;

        if (currentUser) {
            currentUser.coins += 50;
            updateUserData();
        }

        showNotification('Quiz passed! +50 coins!', 'success');
    } else {
        showNotification('Score at least 70% to pass. Try again!', 'error');
        gameScore = 0;
    }
}

function completeQuiz() {
    completeSite();
}

// Complete site
function completeSite() {
    gameData.playerStats.points += gameScore;
    gameData.playerStats.discoveredSites.push(currentSite.id);
    currentSite.discovered = true;

    if (currentUser) {
        currentUser.coins += 100;
        updateUserData();
        showNotification(`Site completed! +100 coins! Total coins: ${currentUser.coins}`, 'success');
    }

    const eraComplete = currentEra.sites.every(site => site.discovered);
    if (eraComplete) {
        gameData.playerStats.badges++;

        if (currentUser) {
            currentUser.coins += 500;
            updateUserData();
        }

        const currentEraIndex = gameData.eras.findIndex(e => e.id === currentEra.id);
        if (currentEraIndex < gameData.eras.length - 1) {
            gameData.eras[currentEraIndex + 1].unlocked = true;
            showEraCompleteCelebration(currentEra.name, gameData.eras[currentEraIndex + 1].name);
        } else {
            showAllErasCompleteCelebration();
        }
    }

    updatePlayerStats();
    updateMarker(currentSite);
    renderEraList();
    renderGallery();
    updateTimeline();

    closeQuizModal();
}

// Show era completion celebration
function showEraCompleteCelebration(completedEra, newEra) {
    showNotification(`🎉 ${completedEra} completed! ${newEra} unlocked! +500 coins!`, 'success');
}

function showAllErasCompleteCelebration() {
    showNotification('🎊 CONGRATULATIONS! You have completed all historical eras! You are a true History Master!', 'success');
}

// Update marker appearance after discovery
function updateMarker(site) {
    const marker = markers[site.id];
    if (marker) {
        const icon = L.divIcon({
            html: `<div class="custom-marker discovered"></div>`,
            className: 'marker-container',
            iconSize: [20, 20],
            iconAnchor: [10, 10]
        });
        marker.setIcon(icon);
    }
}

// Update player stats display
function updatePlayerStats() {
    if (playerPointsEl) playerPointsEl.textContent = gameData.playerStats.points;
    if (playerBadgesEl) playerBadgesEl.textContent = gameData.playerStats.badges;

    let newRank = 'Novice';
    for (let i = gameData.ranks.length - 1; i >= 0; i--) {
        if (gameData.playerStats.points >= gameData.ranks[i].minPoints) {
            newRank = gameData.ranks[i].name;
            break;
        }
    }

    if (newRank !== gameData.playerStats.rank) {
        gameData.playerStats.rank = newRank;
        showNotification(`Congratulations! You've reached the rank of ${newRank}!`, 'success');
    }

    if (playerRankEl) playerRankEl.textContent = gameData.playerStats.rank;

    saveGameState();
}

// Render the gallery of discovered sites
function renderGallery() {
    if (!galleryGridEl) return;
    galleryGridEl.innerHTML = '';

    gameData.eras.forEach(era => {
        era.sites.forEach(site => {
            if (site.discovered) {
                const galleryCard = document.createElement('div');
                galleryCard.classList.add('gallery-card');

                const galleryImage = document.createElement('img');
                galleryImage.classList.add('gallery-image');
                galleryImage.src = site.image;
                galleryImage.alt = site.name;

                const galleryInfo = document.createElement('div');
                galleryInfo.classList.add('gallery-info');

                const galleryTitle = document.createElement('h3');
                galleryTitle.classList.add('gallery-title');
                galleryTitle.textContent = site.name;

                const galleryDescription = document.createElement('p');
                galleryDescription.classList.add('gallery-description');
                galleryDescription.textContent = site.description;

                galleryInfo.appendChild(galleryTitle);
                galleryInfo.appendChild(galleryDescription);

                galleryCard.appendChild(galleryImage);
                galleryCard.appendChild(galleryInfo);

                galleryGridEl.appendChild(galleryCard);
            }
        });
    });

    if (galleryGridEl.children.length === 0) {
        const noSitesMessage = document.createElement('div');
        noSitesMessage.style.textAlign = 'center';
        noSitesMessage.style.padding = '2rem';
        noSitesMessage.style.color = 'var(--text-dim)';
        noSitesMessage.textContent = 'No sites discovered yet. Explore the map to find historical locations!';
        galleryGridEl.appendChild(noSitesMessage);
    }
}

// Function to render the era list in the sidebar
function renderEraList() {
    if (!eraListEl) return;
    eraListEl.innerHTML = '';

    gameData.eras.forEach(era => {
        const eraItem = document.createElement('li');
        eraItem.classList.add('era-item');

        const eraHeader = document.createElement('div');
        eraHeader.classList.add('era-header');
        if (!era.unlocked) {
            eraHeader.classList.add('locked');
        }

        const eraName = document.createElement('div');
        eraName.classList.add('era-name');
        eraName.textContent = era.name;

        const eraStatus = document.createElement('div');
        eraStatus.classList.add('era-status');

        const eraProgress = document.createElement('div');
        eraProgress.classList.add('era-progress');

        const eraProgressBar = document.createElement('div');
        eraProgressBar.classList.add('era-progress-bar');

        const discoveredCount = era.sites.filter(site => site.discovered).length;
        const totalCount = era.sites.length;
        const progressPercent = (discoveredCount / totalCount) * 100;

        eraProgressBar.style.width = `${progressPercent}%`;
        eraProgress.appendChild(eraProgressBar);

        const progressText = document.createElement('div');
        progressText.classList.add('era-progress-text');
        progressText.textContent = `${discoveredCount}/${totalCount}`;
        eraStatus.appendChild(eraProgress);
        eraStatus.appendChild(progressText);

        eraHeader.appendChild(eraName);
        eraHeader.appendChild(eraStatus);

        const eraSites = document.createElement('div');
        eraSites.classList.add('era-sites');

        era.sites.forEach(site => {
            const siteItem = document.createElement('div');
            siteItem.classList.add('site-item');

            const siteStatus = document.createElement('div');
            siteStatus.classList.add('site-status');
            if (site.discovered) {
                siteStatus.classList.add('discovered');
                siteStatus.innerHTML = '<i class="fas fa-check"></i>';
            } else {
                siteStatus.classList.add('undiscovered');
                siteStatus.innerHTML = '<i class="fas fa-question"></i>';
            }

            const siteName = document.createElement('div');
            siteName.classList.add('site-name');
            siteName.textContent = site.name;

            siteItem.appendChild(siteStatus);
            siteItem.appendChild(siteName);

            siteItem.addEventListener('click', () => {
                // If the site is already discovered OR if it's the site currently being discovered
                if (site.discovered || (currentSite && currentSite.id === site.id)) {
                    // Focus the map on the site's location
                    map.setView([site.lat, site.lng], 17);
                    // Show a notification to confirm the action
                    showNotification(`Focusing map on ${site.name}`, 'info');
                }
                // If the site is not discovered but its era is unlocked
                else if (era.unlocked) {
                    // Show the welcome screen to start the discovery process
                    openSiteWelcome(era, site);
                }
                // If the era is locked
                else {
                    // Show the locked era message
                    showNotification('This era is locked! Complete previous eras first.', 'error');
                }
            });

            eraSites.appendChild(siteItem);
        });

        eraItem.appendChild(eraHeader);
        eraItem.appendChild(eraSites);

        eraHeader.addEventListener('click', () => {
            if (era.unlocked) {
                eraHeader.classList.toggle('active');
                eraSites.classList.toggle('expanded');
            } else {
                showNotification('This era is locked! Complete previous eras first.', 'error');
            }
        });

        eraListEl.appendChild(eraItem);
    });
}

// Close quiz modal
function closeQuizModal() {
    if (quizModal) quizModal.classList.remove('active');
    currentEra = null;
    currentSite = null;
    currentMiniGame = null;
    currentGameStep = 0;
    gameScore = 0;
}

// Show notification
function showNotification(message, type = 'success') {
    if (!notification || !notificationMessage) return;

    notificationMessage.textContent = message;
    notification.className = 'notification show';

    if (type === 'error') {
        notification.classList.add('error');
        notification.querySelector('.notification-icon').className = 'notification-icon fas fa-exclamation-circle';
    } else {
        notification.classList.add('success');
        notification.querySelector('.notification-icon').className = 'notification-icon fas fa-check-circle';
    }

    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}


// Save game state to localStorage
function saveGameState() {
    const gameState = {
        playerStats: gameData.playerStats,
        eras: gameData.eras.map(era => ({
            id: era.id,
            unlocked: era.unlocked,
            sites: era.sites.map(site => ({
                id: site.id,
                discovered: site.discovered
            }))
        }))
    };

    localStorage.setItem('tunisiaExplorerState', JSON.stringify(gameState));
}

// Load game state from localStorage
function loadGameState() {
    const savedState = localStorage.getItem('tunisiaExplorerState');

    if (savedState) {
        try {
            const gameState = JSON.parse(savedState);
            gameData.playerStats = gameState.playerStats;

            gameState.eras.forEach(savedEra => {
                const era = gameData.eras.find(e => e.id === savedEra.id);
                if (era) {
                    era.unlocked = savedEra.unlocked;

                    savedEra.sites.forEach(savedSite => {
                        const site = era.sites.find(s => s.id === savedSite.id);
                        if (site) {
                            site.discovered = savedSite.discovered;
                        }
                    });
                }
            });
        } catch (error) {
            console.error('Error loading game state:', error);
        }
    }
}

// Game Settings
const gameSettings = {
    difficulty: 'normal',
    animations: true,
    sound: true,
    autoSave: true,
    guideFrequency: 'medium'
};

function saveGameSettings() {
    localStorage.setItem('tunisiaExplorer_settings', JSON.stringify(gameSettings));
}

function loadGameSettings() {
    const saved = localStorage.getItem('tunisiaExplorer_settings');
    if (saved) {
        Object.assign(gameSettings, JSON.parse(saved));
    }
}

// Settings functions
const settingsBtn = document.getElementById('settingsBtn');
const settingsModal = document.getElementById('settingsModal');
const closeSettingsModal = document.getElementById('closeSettingsModal');

function initializeSettings() {
    if (settingsBtn) {
        settingsBtn.addEventListener('click', showSettings);
    }

    if (closeSettingsModal) {
        closeSettingsModal.addEventListener('click', () => {
            settingsModal.classList.remove('active');
        });
    }

    if (settingsModal) {
        settingsModal.addEventListener('click', (e) => {
            if (e.target === settingsModal) {
                settingsModal.classList.remove('active');
            }
        });
    }

    loadSettingsValues();

    // Add change listeners
    const difficultySetting = document.getElementById('difficultySetting');
    const autoSaveSetting = document.getElementById('autoSaveSetting');
    const animationsSetting = document.getElementById('animationsSetting');
    const guideFrequencySetting = document.getElementById('guideFrequencySetting');

    if (difficultySetting) {
        difficultySetting.addEventListener('change', (e) => {
            gameSettings.difficulty = e.target.value;
            saveGameSettings();
            showNotification(`Difficulty changed to ${e.target.value}`, 'success');
        });
    }

    if (autoSaveSetting) {
        autoSaveSetting.addEventListener('change', (e) => {
            gameSettings.autoSave = e.target.checked;
            saveGameSettings();
        });
    }

    if (animationsSetting) {
        animationsSetting.addEventListener('change', (e) => {
            gameSettings.animations = e.target.checked;
            saveGameSettings();
            toggleAnimations(e.target.checked);
        });
    }

    if (guideFrequencySetting) {
        guideFrequencySetting.addEventListener('change', (e) => {
            gameSettings.guideFrequency = e.target.value;
            saveGameSettings();
        });
    }
}

function showSettings(e) {
    if (e) e.preventDefault();
    userDropdown.classList.remove('show');

    if (settingsModal) {
        settingsModal.classList.add('active');
    }
}

function loadSettingsValues() {
    const difficultySetting = document.getElementById('difficultySetting');
    const autoSaveSetting = document.getElementById('autoSaveSetting');
    const animationsSetting = document.getElementById('animationsSetting');
    const soundSetting = document.getElementById('soundSetting');
    const guideFrequencySetting = document.getElementById('guideFrequencySetting');

    if (difficultySetting) difficultySetting.value = gameSettings.difficulty;
    if (autoSaveSetting) autoSaveSetting.checked = gameSettings.autoSave;
    if (animationsSetting) animationsSetting.checked = gameSettings.animations;
    if (soundSetting) soundSetting.checked = gameSettings.sound;
    if (guideFrequencySetting) guideFrequencySetting.value = gameSettings.guideFrequency;
}

function toggleAnimations(enabled) {
    if (enabled) {
        document.body.classList.remove('no-animations');
    } else {
        document.body.classList.add('no-animations');
    }
}

function restartTutorial() {
    localStorage.removeItem('tunisiaExplorer_guideCompleted');
    localStorage.removeItem('tunisiaExplorer_welcomeSeen');
    showNotification('Tutorial will restart on next page load', 'success');
    setTimeout(() => {
        location.reload();
    }, 2000);
}

function resetGameProgress() {
    if (confirm('Are you sure you want to reset ALL game progress? This cannot be undone!')) {
        if (confirm('Really delete everything? Your coins, discovered sites, and rank will be lost!')) {
            localStorage.removeItem('tunisiaExplorerState');
            localStorage.removeItem('tunisiaExplorerUser');
            showNotification('Game progress reset! Reloading...', 'success');
            setTimeout(() => {
                location.reload();
            }, 2000);
        }
    }
}

// Enhanced showProfile function
function showProfile(e) {
    if (e) e.preventDefault();
    userDropdown.classList.remove('show');

    if (!currentUser) return;

    // Calculate stats
    const totalSites = gameData.eras.reduce((total, era) => total + era.sites.length, 0);
    const discoveredSites = gameData.playerStats.discoveredSites.length;
    const completionRate = totalSites > 0 ? (discoveredSites / totalSites) * 100 : 0;

    const eraProgress = gameData.eras.map(era => {
        const eraSites = era.sites.length;
        const discoveredEraSites = era.sites.filter(site => site.discovered).length;
        return {
            name: era.name,
            progress: eraSites > 0 ? (discoveredEraSites / eraSites) * 100 : 0,
            discovered: discoveredEraSites,
            total: eraSites
        };
    });

    const currentAvatar = avatarShop.avatars.find(avatar => avatar.id === currentUser.avatar) || avatarShop.avatars[0];

    // Generate profile content
    profileContent.innerHTML = `
        <div class="profile-header">
            <div class="profile-avatar">
                <i class="${currentAvatar.icon}"></i>
            </div>
            <div class="profile-info">
                <h2 class="profile-name">${currentUser.username}</h2>
                <p class="profile-email">${currentUser.email}</p>
                <p class="profile-join-date">Joined: ${new Date(currentUser.joined).toLocaleDateString()}</p>
                <p class="profile-avatar-name">Current Avatar: ${currentAvatar.name}</p>
            </div>
        </div>
        
        <div class="profile-stats">
            <div class="profile-stat-card">
                <div class="profile-stat-value">${gameData.playerStats.points}</div>
                <div class="profile-stat-label">Total Points</div>
            </div>
            <div class="profile-stat-card">
                <div class="profile-stat-value">${currentUser.coins || 0}</div>
                <div class="profile-stat-label">Coins</div>
            </div>
            <div class="profile-stat-card">
                <div class="profile-stat-value">${discoveredSites}</div>
                <div class="profile-stat-label">Sites Discovered</div>
            </div>
            <div class="profile-stat-card">
                <div class="profile-stat-value">${Math.round(completionRate)}%</div>
                <div class="profile-stat-label">Completion Rate</div>
            </div>
        </div>
        
        <div class="profile-sections">
            <div class="profile-section">
                <h3 class="profile-section-title">Era Progress</h3>
                ${eraProgress.map(era => `
                    <div class="progress-item">
                        <div class="progress-label">
                            <span>${era.name}</span>
                            <span>${era.discovered}/${era.total}</span>
                        </div>
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: ${era.progress}%"></div>
                        </div>
                    </div>
                `).join('')}
            </div>
            
            <div class="profile-section">
                <h3 class="profile-section-title">Achievements</h3>
                <div class="achievement-list">
                    <div class="achievement-item ${discoveredSites >= 1 ? 'unlocked' : 'locked'}">
                        <div class="achievement-icon">
                            <i class="fas fa-map-marker-alt"></i>
                        </div>
                        <div class="achievement-name">First Discovery</div>
                        <div class="achievement-desc">Discover your first historical site</div>
                    </div>
                    <div class="achievement-item ${gameData.playerStats.points >= 1000 ? 'unlocked' : 'locked'}">
                        <div class="achievement-icon">
                            <i class="fas fa-star"></i>
                        </div>
                        <div class="achievement-name">Master Explorer</div>
                        <div class="achievement-desc">Earn 1000 points</div>
                    </div>
                    <div class="achievement-item ${completionRate >= 50 ? 'unlocked' : 'locked'}">
                        <div class="achievement-icon">
                            <i class="fas fa-trophy"></i>
                        </div>
                        <div class="achievement-name">Halfway There</div>
                        <div class="achievement-desc">Complete 50% of all sites</div>
                    </div>
                    <div class="achievement-item ${currentUser.ownedAvatars.length >= 5 ? 'unlocked' : 'locked'}">
                        <div class="achievement-icon">
                            <i class="fas fa-user-friends"></i>
                        </div>
                        <div class="achievement-name">Avatar Collector</div>
                        <div class="achievement-desc">Own 5 different avatars</div>
                    </div>
                </div>
            </div>
        </div>
        
        <div style="text-align: center; margin-top: 2rem;">
            <button class="btn btn-primary" onclick="showAvatarShop()">
                <i class="fas fa-store"></i>
                Visit Avatar Shop
            </button>
        </div>
    `;

    // Show the modal
    profileModal.classList.add('active');
}

// Make sure close button works
document.getElementById('closeProfileModal').addEventListener('click', () => {
    profileModal.classList.remove('active');
});

// Close modal when clicking outside
profileModal.addEventListener('click', (e) => {
    if (e.target === profileModal) {
        profileModal.classList.remove('active');
    }
});
const currentAvatar = avatarShop.avatars.find(avatar => avatar.id === currentUser.avatar) || avatarShop.avatars[0];
const joinDate = new Date(currentUser.joined);
const daysSinceJoin = Math.floor((new Date() - joinDate) / (1000 * 60 * 60 * 24));

// Update header avatar
const headerAvatarIcon = document.getElementById('headerAvatarIcon');
if (headerAvatarIcon) {
    headerAvatarIcon.className = currentAvatar.icon;
}

profileContent.innerHTML = `
        <div class="profile-header">
            <div class="profile-avatar">
                <i class="${currentAvatar.icon}"></i>
            </div>
            <div class="profile-info">
                <h2 class="profile-name">${currentUser.username}</h2>
                <p class="profile-email">${currentUser.email}</p>
                <p class="profile-join-date">Explorer for ${daysSinceJoin} days</p>
                <p class="profile-avatar-name">Equipped: <strong>${currentAvatar.name}</strong></p>
                <div class="profile-achievement-badge">
                    <i class="fas fa-${gameData.playerStats.rank.toLowerCase() === 'legend' ? 'crown' : 'star'}"></i>
                    <span>${gameData.playerStats.rank}</span>
                </div>
            </div>
        </div>
        
        <div class="profile-stats">
            <div class="profile-stat-card">
                <div class="profile-stat-value">${gameData.playerStats.points.toLocaleString()}</div>
                <div class="profile-stat-label">Total Points</div>
            </div>
            <div class="profile-stat-card">
                <div class="profile-stat-value">${currentUser.coins || 0}</div>
                <div class="profile-stat-label">Coins</div>
            </div>
            <div class="profile-stat-card">
                <div class="profile-stat-value">${discoveredSites}/${totalSites}</div>
                <div class="profile-stat-label">Sites Discovered</div>
            </div>
            <div class="profile-stat-card">
                <div class="profile-stat-value">${Math.round(completionRate)}%</div>
                <div class="profile-stat-label">Completion Rate</div>
            </div>
        </div>
        
        <div class="profile-sections">
            <div class="profile-section">
                <h3 class="profile-section-title">Era Progress</h3>
                ${eraProgress.map(era => `
                    <div class="progress-item">
                        <div class="progress-label">
                            <span>${era.name}</span>
                            <span>${era.discovered}/${era.total} (${Math.round(era.progress)}%)</span>
                        </div>
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: ${era.progress}%"></div>
                        </div>
                        <div class="era-status-indicator ${era.status}">
                            <i class="fas fa-${era.status === 'completed' ? 'check-circle' :
        era.status === 'in-progress' ? 'play-circle' :
            era.status === 'unlocked' ? 'lock-open' : 'lock'}"></i>
                            ${era.status.replace('-', ' ')}
                        </div>
                    </div>
                `).join('')}
            </div>
            
            <div class="profile-section">
                <h3 class="profile-section-title">Achievements</h3>
                <div class="achievement-list">
                    <div class="achievement-item ${discoveredSites >= 1 ? 'unlocked' : 'locked'}">
                        <div class="achievement-icon">
                            <i class="fas fa-map-marker-alt"></i>
                        </div>
                        <div class="achievement-name">First Discovery</div>
                        <div class="achievement-desc">Discover your first historical site</div>
                    </div>
                    <div class="achievement-item ${gameData.playerStats.points >= 1000 ? 'unlocked' : 'locked'}">
                        <div class="achievement-icon">
                            <i class="fas fa-star"></i>
                        </div>
                        <div class="achievement-name">Master Explorer</div>
                        <div class="achievement-desc">Earn 1000 points</div>
                    </div>
                    <div class="achievement-item ${completionRate >= 50 ? 'unlocked' : 'locked'}">
                        <div class="achievement-icon">
                            <i class="fas fa-trophy"></i>
                        </div>
                        <div class="achievement-name">Halfway There</div>
                        <div class="achievement-desc">Complete 50% of all sites</div>
                    </div>
                    <div class="achievement-item ${currentUser.ownedAvatars.length >= 5 ? 'unlocked' : 'locked'}">
                        <div class="achievement-icon">
                            <i class="fas fa-user-friends"></i>
                        </div>
                        <div class="achievement-name">Avatar Collector</div>
                        <div class="achievement-desc">Own 5 different avatars</div>
                    </div>
                    <div class="achievement-item ${gameData.playerStats.rank === 'Legend' ? 'unlocked' : 'locked'}">
                        <div class="achievement-icon">
                            <i class="fas fa-crown"></i>
                        </div>
                        <div class="achievement-name">History Legend</div>
                        <div class="achievement-desc">Reach the highest rank</div>
                    </div>
                    <div class="achievement-item ${completionRate === 100 ? 'unlocked' : 'locked'}">
                        <div class="achievement-icon">
                            <i class="fas fa-medal"></i>
                        </div>
                        <div class="achievement-name">Completionist</div>
                        <div class="achievement-desc">Discover all historical sites</div>
                    </div>
                </div>
            </div>
        </div>
        
        <div style="text-align: center; margin-top: 2rem;">
            <button class="btn btn-primary" onclick="showAvatarShop()">
                <i class="fas fa-store"></i>
                Visit Avatar Shop
            </button>
            <button class="btn btn-secondary" onclick="showGuide()" style="margin-left: 1rem;">
                <i class="fas fa-question-circle"></i>
                Show Tutorial
            </button>
        </div>
    `;

// Add CSS for era status indicator
const style = document.createElement('style');
style.textContent = `
        .era-status-indicator {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            font-size: 0.8rem;
            margin-top: 0.5rem;
            padding: 0.3rem 0.8rem;
            border-radius: 15px;
            width: fit-content;
        }
        .era-status-indicator.completed {
            background: rgba(0, 255, 0, 0.1);
            color: var(--success-color);
            border: 1px solid var(--success-color);
        }
        .era-status-indicator.in-progress {
            background: rgba(0, 255, 255, 0.1);
            color: var(--primary-color);
            border: 1px solid var(--primary-color);
        }
        .era-status-indicator.unlocked {
            background: rgba(255, 255, 255, 0.1);
            color: var(--text-light);
            border: 1px solid var(--text-dim);
        }
        .era-status-indicator.locked {
            background: rgba(255, 255, 255, 0.05);
            color: var(--text-dim);
            border: 1px solid var(--text-dim);
        }
        .profile-achievement-badge {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            background: linear-gradient(45deg, var(--primary-color), var(--secondary-color));
            color: var(--dark-bg);
            padding: 0.5rem 1rem;
            border-radius: 20px;
            margin-top: 0.5rem;
            font-weight: 700;
        }
    `;
document.head.appendChild(style);

profileModal.classList.add('active');


// Enhanced showAvatarShop function
function showAvatarShop(e) {
    if (e) e.preventDefault();
    userDropdown.classList.remove('show');
    profileModal.classList.remove('active');

    if (!currentUser) return;

    const shopBalance = document.getElementById('shopBalance');
    if (shopBalance) {
        shopBalance.textContent = currentUser.coins || 0;
    }

    avatarShopContent.innerHTML = `
        <div class="avatar-shop-header">
            <h2>Avatar Shop</h2>
            <div class="avatar-shop-balance">
                <i class="fas fa-coins"></i>
                <span id="shopBalance">${currentUser.coins || 0}</span> coins
            </div>
        </div>
        
        <div class="avatar-categories">
            ${avatarShop.categories.map(category => `
                <button class="category-btn ${category.id === 'all' ? 'active' : ''}" 
                        data-category="${category.id}">
                    ${category.name}
                </button>
            `).join('')}
        </div>
        
        <div class="avatar-grid" id="avatarGrid">
            ${renderAvatarGrid('all')}
        </div>
        
        <div class="avatar-shop-info">
            <div class="shop-tip">
                <i class="fas fa-lightbulb"></i>
                <span>Tip: Complete more historical sites to earn coins for new avatars!</span>
            </div>
        </div>
    `;

    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const category = btn.dataset.category;
            document.getElementById('avatarGrid').innerHTML = renderAvatarGrid(category);
        });
    });

    avatarShopModal.classList.add('active');
}

// Enhanced renderAvatarGrid function
function renderAvatarGrid(category) {
    const filteredAvatars = category === 'all'
        ? avatarShop.avatars
        : avatarShop.avatars.filter(avatar => avatar.category === category);

    if (filteredAvatars.length === 0) {
        return `
            <div class="no-avatars">
                <i class="fas fa-store-slash"></i>
                <h3>No avatars in this category</h3>
                <p>Try another category!</p>
            </div>
        `;
    }

    return filteredAvatars.map(avatar => {
        const isOwned = currentUser.ownedAvatars.includes(avatar.id);
        const isEquipped = currentUser.avatar === avatar.id;
        const canAfford = currentUser.coins >= avatar.price;

        return `
            <div class="avatar-item ${isOwned ? 'owned' : ''} ${isEquipped ? 'equipped' : ''} ${!isOwned && !canAfford ? 'locked' : ''}">
                ${isOwned ? '<div class="owned-badge">OWNED</div>' : ''}
                ${isEquipped ? '<div class="equipped-badge">EQUIPPED</div>' : ''}
                
                <div class="avatar-image">
                    <i class="${avatar.icon}"></i>
                </div>
                
                <div class="avatar-name">${avatar.name}</div>
                
                <div class="avatar-description">
                    ${avatar.description}
                </div>
                
                <div class="avatar-price">
                    <i class="fas fa-coins"></i>
                    ${avatar.price.toLocaleString()} coins
                </div>
                
                <div class="avatar-actions">
                    ${!isOwned ? `
                        <button class="btn-buy" onclick="buyAvatar('${avatar.id}')" 
                                ${!canAfford ? 'disabled' : ''}>
                            ${canAfford ? 'Buy Now' : 'Need More Coins'}
                        </button>
                    ` : ''}
                    
                    ${isOwned && !isEquipped ? `
                        <button class="btn-equip" onclick="equipAvatar('${avatar.id}')">
                            Equip Avatar
                        </button>
                    ` : ''}
                    
                    ${isEquipped ? `
                        <button class="btn-equipped" disabled>
                            Currently Equipped
                        </button>
                    ` : ''}
                </div>
            </div>
        `;
    }).join('');
}

// Enhanced buyAvatar function
function buyAvatar(avatarId) {
    const avatar = avatarShop.avatars.find(a => a.id === avatarId);
    if (!avatar) return;

    if (currentUser.coins < avatar.price) {
        showNotification(`You need ${avatar.price - currentUser.coins} more coins to buy ${avatar.name}!`, 'error');
        return;
    }

    if (!confirm(`Buy ${avatar.name} for ${avatar.price} coins?`)) {
        return;
    }

    currentUser.coins -= avatar.price;
    if (!currentUser.ownedAvatars.includes(avatarId)) {
        currentUser.ownedAvatars.push(avatarId);
    }

    updateUserData();
    showNotification(`Congratulations! You bought the ${avatar.name} avatar!`, 'success');

    // Update shop balance
    const shopBalance = document.getElementById('shopBalance');
    if (shopBalance) {
        shopBalance.textContent = currentUser.coins;
    }

    const activeCategory = document.querySelector('.category-btn.active')?.dataset.category || 'all';
    document.getElementById('avatarGrid').innerHTML = renderAvatarGrid(activeCategory);

    // Refresh profile if open
    if (profileModal.classList.contains('active')) {
        showProfile({ preventDefault: () => { } });
    }
}

// Enhanced equipAvatar function
function equipAvatar(avatarId) {
    if (!currentUser.ownedAvatars.includes(avatarId)) {
        showNotification('You need to own this avatar first!', 'error');
        return;
    }

    currentUser.avatar = avatarId;
    updateUserData();

    const avatar = avatarShop.avatars.find(a => a.id === avatarId);
    showNotification(`You equipped the ${avatar.name} avatar!`, 'success');

    // Update header avatar
    const headerAvatarIcon = document.getElementById('headerAvatarIcon');
    if (headerAvatarIcon) {
        headerAvatarIcon.className = avatar.icon;
    }

    const activeCategory = document.querySelector('.category-btn.active')?.dataset.category || 'all';
    document.getElementById('avatarGrid').innerHTML = renderAvatarGrid(activeCategory);

    // Refresh profile if open
    if (profileModal.classList.contains('active')) {
        showProfile({ preventDefault: () => { } });
    }
}

// Update user data in localStorage
function updateUserData() {
    localStorage.setItem('tunisiaExplorerUser', JSON.stringify(currentUser));
    const users = JSON.parse(localStorage.getItem('tunisiaExplorerUsers') || '{}');
    if (users[currentUser.username]) {
        users[currentUser.username] = {
            ...users[currentUser.username],
            avatar: currentUser.avatar,
            ownedAvatars: currentUser.ownedAvatars,
            coins: currentUser.coins
        };
        localStorage.setItem('tunisiaExplorerUsers', JSON.stringify(users));
    }
}

// Handle logout
function handleLogout(e) {
    e.preventDefault();
    userDropdown.classList.remove('show');

    if (confirm('Are you sure you want to logout?')) {
        currentUser = null;
        isLoggedIn = false;
        localStorage.removeItem('tunisiaExplorerUser');
        showAuthNotification('Logged out successfully', 'success');
        showAuthInterface();
    }
}

// Setup event listeners
function setupEventListeners() {

    // Quiz modal
    if (quizModal) {
        quizModal.addEventListener('click', (e) => {
            if (e.target === quizModal) {
                closeQuizModal();
            }
        });
    }

    const closeModalBtn = document.getElementById('closeModal');
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', closeQuizModal);
    }

    // Photo preview modal
    if (closePhotoModal) {
        closePhotoModal.addEventListener('click', () => {
            photoPreviewModal.classList.remove('active');
        });
    }

    if (photoPreviewModal) {
        photoPreviewModal.addEventListener('click', (e) => {
            if (e.target === photoPreviewModal) {
                photoPreviewModal.classList.remove('active');
            }
        });
    }
}

// Wait for the entire page to load
document.addEventListener('DOMContentLoaded', () => {
    console.log("SCRIPT: DOM Content Loaded. Starting script.");

    // Get references to all important elements
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    const authContainer = document.getElementById('authContainer');
    const gameInterface = document.getElementById('gameInterface');
    const guideContainer = document.getElementById('guideContainer');

    console.log("SCRIPT: Element references:", {
        loginForm: !!loginForm,
        signupForm: !!signupForm,
        authContainer: !!authContainer,
        gameInterface: !!gameInterface,
        guideContainer: !!guideContainer
    });

    // Check if elements exist
    if (!loginForm || !signupForm || !authContainer || !gameInterface || !guideContainer) {
        console.error("SCRIPT ERROR: One or more required elements were not found. Stopping script.");
        return; // Stop the script
    }

    /**
     * Shows the tutorial.
     */
    function showTutorial() {
        console.log("FUNCTION: showTutorial() called.");
        guideContainer.classList.add('active');
        localStorage.setItem('tutorialShown', 'true');
        console.log("FUNCTION: 'active' class added. Tutorial should be visible.");
    }

    /**
     * The main logic to run after a successful auth attempt.
     */
    function handleAuthSuccess() {
        console.log("FUNCTION: handleAuthSuccess() called. Switching interfaces.");
        
        // Hide auth, show game
        authContainer.classList.remove('active');
        gameInterface.classList.add('active');
        
        // Check if the tutorial has been shown
        const tutorialAlreadyShown = localStorage.getItem('tutorialShown');
        console.log("FUNCTION: Checking localStorage. 'tutorialShown' is:", tutorialAlreadyShown);

        if (!tutorialAlreadyShown) {
            console.log("FUNCTION: Tutorial not shown yet. Showing it in 500ms...");
            setTimeout(showTutorial, 500);
        } else {
            console.log("FUNCTION: Tutorial already shown. Skipping.");
        }
    }

    // --- Add Event Listeners to the Forms ---
    loginForm.addEventListener('submit', (event) => {
        console.log("EVENT: Login form submitted.");
        event.preventDefault(); // Stop page reload
        
        // --- YOUR LOGIN LOGIC GOES HERE ---
        // For now, we simulate success after 1 second
        console.log("EVENT: Simulating login success in 1 second...");
        setTimeout(handleAuthSuccess, 1000);
    });

    signupForm.addEventListener('submit', (event) => {
        console.log("EVENT: Signup form submitted.");
        event.preventDefault(); // Stop page reload

        // --- YOUR SIGNUP LOGIC GOES HERE ---
        // For now, we simulate success after 1 second
        console.log("EVENT: Simulating signup success in 1 second...");
        setTimeout(handleAuthSuccess, 1000);
    });

    // --- Helper functions for testing ---
    window.clearTutorialHistory = () => {
        localStorage.removeItem('tutorialShown');
        console.log("HELPER: Tutorial history cleared.");
    };

    window.showTutorialManually = showTutorial;
});

// Make functions globally available for HTML onclick handlers
window.openSiteWelcomeFromMap = openSiteWelcomeFromMap;
window.startMiniGames = startMiniGames;
window.completeSite = completeSite;
window.closeQuizModal = closeQuizModal;
window.showAvatarShop = showAvatarShop;
window.buyAvatar = buyAvatar;
window.equipAvatar = equipAvatar;
window.selectQuizOption = selectQuizOption;
window.previousQuizQuestion = previousQuizQuestion;
window.nextQuizQuestion = nextQuizQuestion;
window.completeQuiz = completeQuiz;
window.showPhotoPreview = showPhotoPreview;
window.restartTutorial = restartTutorial;
window.resetGameProgress = resetGameProgress;
window.showGuide = showGuide;

// Add avatar shop CSS styles
const avatarShopStyles = `
    .avatar-shop-info {
        margin-top: 2rem;
        padding-top: 1rem;
        border-top: 1px solid rgba(0, 255, 255, 0.2);
    }
    
    .shop-tip {
        display: flex;
        align-items: center;
        gap: 1rem;
        background: rgba(255, 255, 0, 0.05);
        border: 1px solid rgba(255, 255, 0, 0.3);
        border-radius: 10px;
        padding: 1rem;
        color: var(--accent-color);
    }
    
    .shop-tip i {
        font-size: 1.5rem;
    }
    
    .avatar-description {
        color: var(--text-dim);
        font-size: 0.8rem;
        margin-bottom: 1rem;
        min-height: 40px;
    }
    
    .no-avatars {
        grid-column: 1 / -1;
        text-align: center;
        padding: 3rem;
        color: var(--text-dim);
    }
    
    .no-avatars i {
        font-size: 3rem;
        margin-bottom: 1rem;
    }
    
    .no-avatars h3 {
        color: var(--text-light);
        margin-bottom: 0.5rem;
    }
`;

// Add styles to document
const styleSheet = document.createElement("style");
styleSheet.textContent = avatarShopStyles;
document.head.appendChild(styleSheet);