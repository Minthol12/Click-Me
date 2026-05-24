// ==================== PASSWORD PROTECTION ====================
const correctPassword = "Notebook";
const passwordOverlay = document.getElementById("passwordOverlay");
const mainContent = document.getElementById("mainContent");
const passwordInput = document.getElementById("passwordInput");
const unlockBtn = document.getElementById("unlockBtn");
const passwordError = document.getElementById("passwordError");

function checkPassword() {
    if (passwordInput.value === correctPassword) {
        passwordOverlay.style.display = "none";
        mainContent.style.display = "block";
        initAudio();
        initScreenshotProtection();
        initPrivacyProtection();
    } else {
        passwordError.textContent = "that's not the word... try again";
        passwordInput.value = "";
        passwordInput.focus();
    }
}

unlockBtn.addEventListener("click", checkPassword);
passwordInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") checkPassword();
});

// ==================== AUDIO ====================
let pianoAudio = null;
let audioPlaying = false;

function initAudio() {
    pianoAudio = document.getElementById("pianoAudio");
    if (pianoAudio) {
        pianoAudio.volume = 0.2;
    }
}

// ==================== CANDLE ====================
const candleWrapper = document.getElementById("candleWrapper");
const candleFlame = document.getElementById("candleFlame");
const candleGlow = document.getElementById("candleGlow");
let isLit = false;

if (candleWrapper) {
    candleWrapper.addEventListener("click", () => {
        if (!isLit) {
            candleFlame.classList.add("active");
            candleGlow.classList.add("active");
            isLit = true;
            if (pianoAudio && !audioPlaying) {
                pianoAudio.play().then(() => {
                    audioPlaying = true;
                }).catch(e => console.log("Audio play needs user interaction first"));
            }
        } else {
            candleFlame.classList.remove("active");
            candleGlow.classList.remove("active");
            isLit = false;
            if (pianoAudio && audioPlaying) {
                pianoAudio.pause();
                audioPlaying = false;
            }
        }
    });
}

// ==================== BOOK COVER ====================
const bookCover = document.getElementById("bookCover");
const bookOpen = document.getElementById("bookOpen");
const openBookBtn = document.getElementById("openBookBtn");

if (openBookBtn) {
    openBookBtn.addEventListener("click", () => {
        bookCover.style.display = "none";
        bookOpen.style.display = "flex";
    });
}

// ==================== LETTER CONTENT ====================
const chapters = [
    `I don't know if you will ever read this, but I am very grateful for you. You have shown me a kind soul, someone that I want to surround myself with more — people like you. You brought pieces of your world into mine, and now mine feels empty without you in it.
    <br><br>
    You looked at life in a way that made everything around you more beautiful. I will always remember you. I don't love you, but I love <em>you</em>. You as a person are one of the purest people I have met.
    <br><br>
    I know we didn't talk a lot. But when we did, hearing the softness of your voice, the calmness — it made me calm and my mind quiet. No matter how much time passes, there will always be a version of me standing inside those moments with you.`,
    
    `There are things I regret saying and things I regret not saying. I catch myself replaying moments with you like scenes I am scared to forget. Sometimes I think the hardest thing in life is meeting someone who feels like home when they were never meant to stay.
    <br><br>
    I don't know if we will ever cross paths again. Probably not. The chance is very small. But I want you to know that I will forever be grateful to you more than you will ever know.
    <br><br>
    Maybe that's the cruel thing about exchange students. They teach people how attached a heart can get in such little time. You came into my life with another language, another culture, another home — yet somehow your soul still felt familiar to mine.`,
    
    `I know I am probably one of the last people you like talking to. That is fine. I am just grateful that you did. It made the darkness not so dark. You were my safety net without knowing it, and I am sorry for that. I put things on you just because I needed something to fill the void in my chest.
    <br><br>
    I will always feel deeply about you. Not in a romantic way, but in a way that feels like something I cannot explain.
    <br><br>
    Since you may never read this, I will be honest. I did like you at the beginning when you moved here, but I think that was just because you were new and someone I could talk about. That is my own insecurity. I have no social skills. I used you to talk about.`,
    
    `I won't forget prom night. Even though it wasn't the best, those short conversations with you were the best thing ever.
    <br><br>
    Sadly, a piece of me will always search for you in crowded airports and unfamiliar accents. I hate to admit this, but somewhere between your stories, your laugh, and the way you looked at things differently — I fell for you. Your accent became my favorite sound without me even realizing it.
    <br><br>
    I remember you reading my poems. Seeing that smile on your face filled my heart with joy. You read the poem about prom, and you smiled, and my heart swelled more than I have ever felt in my life. Maybe it was because you read a piece of me and found it beautiful.`,
    
    `Your smile. Your eyes. Your hair. Your accent. It is all beautiful. I have never felt this way about a girl I don't love — which is strange, because I always thought if you felt this way, you loved them. But you proved that is not true. I love your soul. How bright it is. How gentle you are with your words.
    <br><br>
    The way they leave your mouth is like snow falling. So soft, but somehow filling the whole silence.
    <br><br>
    You may forget me in ten years, and that hurts. I just wish we could have been friends. I wish I talked to you more. I wish I asked you more questions. I have so much regret.`,
    
    `You became one of the most important people in my life. The first time I really talked to you, at that basketball game — it was awkward as hell. But I liked the awkwardness because I hadn't felt that in a long time.
    <br><br>
    You are one of the bravest people I have met. I could have never gone to a foreign school. I could have never put myself out there like you did. I am envious of you for that.
    <br><br>
    I hope you find your Noah. I hope he treats you like royalty. I hope you travel everywhere you want to go. I wish the best for you. I truly do.
    <br><br>
    I should have asked you to slow dance at prom. I wish you knew how much I regret not asking.
    <br><br>
    I am afraid I will forget your voice, your laugh. I am afraid I will look for you in every girl I meet. And I don't know if that is a bad thing or a good thing.
    <br><br>
    I wish I said goodbye. But goodbyes are forever. And I hope the distance between us won't be forever. I hope I will see you again.`
];

let currentChapter = 0;
const totalChapters = chapters.length;
const pageTextDiv = document.getElementById("pageText");
const chapterBadge = document.getElementById("chapterBadge");
const pageNumberSpan = document.getElementById("pageNumber");
const pageCounter = document.getElementById("pageCounter");
const prevBtn = document.getElementById("prevPageBtn");
const nextBtn = document.getElementById("nextPageBtn");
const currentPageDiv = document.getElementById("currentPage");

const romanNumerals = ["I", "II", "III", "IV", "V", "VI"];

function updatePage() {
    pageTextDiv.innerHTML = chapters[currentChapter];
    chapterBadge.textContent = `chapter ${romanNumerals[currentChapter]}`;
    pageNumberSpan.textContent = romanNumerals[currentChapter];
    pageCounter.textContent = `${currentChapter + 1} / ${totalChapters}`;
    prevBtn.disabled = currentChapter === 0;
    nextBtn.disabled = currentChapter === totalChapters - 1;
    
    currentPageDiv.style.animation = "none";
    setTimeout(() => {
        currentPageDiv.style.animation = "pageEnter 0.35s ease";
    }, 10);
}

if (prevBtn && nextBtn) {
    prevBtn.addEventListener("click", () => {
        if (currentChapter > 0) {
            currentChapter--;
            updatePage();
        }
    });

    nextBtn.addEventListener("click", () => {
        if (currentChapter < totalChapters - 1) {
            currentChapter++;
            updatePage();
        }
    });
}

updatePage();

// ==================== STAR MESSAGES ====================
const starTrigger = document.getElementById("starTrigger");
const messagePanel = document.getElementById("messagePanel");
const messageInput = document.getElementById("messageInput");
const saveMessageBtn = document.getElementById("saveMessageBtn");
const closeMessageBtn = document.getElementById("closeMessageBtn");
const savedMessagesList = document.getElementById("savedMessagesList");

function loadMessages() {
    const messages = JSON.parse(localStorage.getItem("naemiMessages") || "[]");
    savedMessagesList.innerHTML = "";
    if (messages.length === 0) {
        savedMessagesList.innerHTML = '<div style="color:#bfa58c; text-align:center; padding:0.5rem;">no messages yet... be the first</div>';
        return;
    }
    messages.slice().reverse().forEach(msg => {
        const msgDiv = document.createElement("div");
        msgDiv.className = "saved-msg";
        msgDiv.textContent = msg;
        savedMessagesList.appendChild(msgDiv);
    });
}

if (saveMessageBtn) {
    saveMessageBtn.addEventListener("click", () => {
        const text = messageInput.value.trim();
        if (text === "") return;
        const messages = JSON.parse(localStorage.getItem("naemiMessages") || "[]");
        messages.push(text);
        localStorage.setItem("naemiMessages", JSON.stringify(messages));
        messageInput.value = "";
        loadMessages();
    });
}

if (closeMessageBtn) {
    closeMessageBtn.addEventListener("click", () => {
        messagePanel.style.display = "none";
    });
}

if (starTrigger) {
    starTrigger.addEventListener("click", () => {
        if (messagePanel.style.display === "none" || !messagePanel.style.display) {
            messagePanel.style.display = "block";
            loadMessages();
        } else {
            messagePanel.style.display = "none";
        }
    });
}

loadMessages();

// ==================== SCREENSHOT PROTECTION ====================
function initScreenshotProtection() {
    const overlay = document.getElementById("protectionOverlay");
    if (!overlay) return;
    
    // Method 1: Detect keyboard shortcuts (Print Screen, Cmd+Shift+3, etc.)
    document.addEventListener("keyup", (e) => {
        if (e.key === "PrintScreen" || (e.key === "s" && (e.ctrlKey || e.metaKey))) {
            overlay.classList.add("active");
            setTimeout(() => {
                overlay.classList.remove("active");
            }, 150);
        }
    });
    
    // Method 2: Detect when page becomes inactive (app switcher on mobile)
    document.addEventListener("visibilitychange", () => {
        if (document.hidden) {
            overlay.classList.add("active");
        } else {
            setTimeout(() => {
                overlay.classList.remove("active");
            }, 200);
        }
    });
    
    // Method 3: Blur detection for mobile app switch
    window.addEventListener("blur", () => {
        overlay.classList.add("active");
        setTimeout(() => {
            overlay.classList.remove("active");
        }, 200);
    });
    
    // Method 4: Disable context menu
    document.addEventListener("contextmenu", (e) => {
        e.preventDefault();
        return false;
    });
    
    // Method 5: Disable drag and drop of images
    const images = document.querySelectorAll("img");
    images.forEach(img => {
        img.addEventListener("dragstart", (e) => e.preventDefault());
    });
}

// ==================== PRIVACY PROTECTION ====================
function initPrivacyProtection() {
    // Disable common screenshot shortcuts
    document.addEventListener("keydown", (e) => {
        // F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U
        if (e.key === "F12" || 
            (e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "J" || e.key === "C")) ||
            (e.ctrlKey && e.key === "u")) {
            e.preventDefault();
            return false;
        }
        
        // Ctrl+S, Ctrl+P
        if ((e.ctrlKey || e.metaKey) && (e.key === "s" || e.key === "p")) {
            e.preventDefault();
            return false;
        }
    });
    
    // Disable long-press menu on mobile
    document.querySelectorAll("*").forEach(el => {
        el.addEventListener("contextmenu", (e) => e.preventDefault());
        el.addEventListener("touchstart", (e) => {
            if (e.touches.length > 1) {
                e.preventDefault();
            }
        });
    });
    
    // Add CSS to prevent selection (already in CSS but reinforcing with JS)
    document.body.style.webkitTouchCallout = "none";
    document.body.style.webkitUserSelect = "none";
}

// ==================== MOBILE TOUCH FIXES ====================
// Ensure buttons work on touch devices
const allButtons = document.querySelectorAll("button");
allButtons.forEach(btn => {
    btn.addEventListener("touchstart", (e) => {
        // Just to ensure touch registers
        btn.style.transform = "scale(0.97)";
        setTimeout(() => {
            btn.style.transform = "";
        }, 150);
    });
});

// Prevent zoom on double tap for buttons
document.querySelectorAll("button, .star-trigger, .candle-wrapper, .map-icon-container").forEach(el => {
    el.addEventListener("touchstart", (e) => {
        if (e.touches.length === 1) {
            e.preventDefault();
            // Simulate click after small delay
            setTimeout(() => {
                el.click();
            }, 10);
        }
    });
});

console.log("Website loaded. Protected and ready.");