const correctPassword = "Notebook";
const passwordOverlay = document.getElementById("passwordOverlay");
const mainContent = document.getElementById("mainContent");
const passwordInput = document.getElementById("passwordInput");
const unlockBtn = document.getElementById("unlockBtn");
const passwordError = document.getElementById("passwordError");
const passwordHint = document.getElementById("passwordHint");

// Set The Notebook hint
passwordHint.innerHTML = "Your Favorite Movie";

function checkPassword() {
    if (passwordInput.value === correctPassword) {
        passwordOverlay.style.display = "none";
        mainContent.style.display = "block";
        initProtection();
        initPetals();
        initTabs();
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

// Tab switching
function initTabs() {
    const sectionBtns = document.querySelectorAll(".section-btn");
    const tabContents = document.querySelectorAll(".tab-content");
    
    sectionBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            const tabId = btn.getAttribute("data-tab");
            
            sectionBtns.forEach(b => b.classList.remove("active"));
            tabContents.forEach(c => c.classList.remove("active"));
            
            btn.classList.add("active");
            const activeContent = document.getElementById(`tab-${tabId}`);
            if (activeContent) activeContent.classList.add("active");
        });
    });
}

// Song buttons open Spotify
const playBtns = document.querySelectorAll(".play-btn");
playBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        const url = btn.getAttribute("data-url");
        if (url) window.open(url, "_blank");
    });
});

// Book cover open
const bookCover = document.getElementById("bookCover");
const bookOpen = document.getElementById("bookOpen");
const openBookBtn = document.getElementById("openBookBtn");

if (openBookBtn) {
    openBookBtn.addEventListener("click", () => {
        bookCover.style.display = "none";
        bookOpen.style.display = "block";
    });
}

function formatPoeticText(text) {
    return text.replace(/I don't LOVE you, but I love YOU/g, 
        'I don\'t <em>love</em> you, but I love <span class="cursive-you">you</span>');
}

// ALL 15 PAGES - FULLY PRESERVED
const chaptersRaw = [
    `Dear Naemi,
    <br><br>
    I don't know if I will ever send you this. I don't know if you will ever read these words or if they will just live here forever, trapped in this letter that never finds your hands. But I need to write them anyway. I need to say them somewhere.
    <br><br>
    I am very grateful for you. More than you will ever understand. You have shown me a kind soul, the kind I didn't think existed anymore. Someone that I want to surround myself with more — people like you. People who are gentle without trying. People who make the world feel less heavy just by being in it.
    <br><br>
    You brought pieces of your world into mine. Small pieces. A conversation here. A laugh there. A few moments that I didn't realize would become everything. And now that you're gone, mine feels empty without you in it. Like someone took a room full of furniture and left only the echo of where everything used to be.
    <br><br>
    You looked at life in a way that made everything around you more beautiful. I don't know how you did that. I don't know if you even knew you were doing it. But when you looked at something, it mattered. When you smiled at something, it meant something.
    <br><br>
    I will always remember you. I don't LOVE you, but I love YOU. I love the person you are. The way you exist in this world. The way you make other people feel seen without even realizing it.
    <br><br>
    You as a person are one of the purest people I have met. And I have met a lot of people. Most of them leave no mark. But you — you carved something into me. Something small. Something I didn't ask for. Something I don't know how to live without anymore.`,

    `I know we didn't talk a lot. That is one of my greatest regrets. I replay it in my head like a movie I'm scared to forget — all the moments I could have said something, asked something, stayed a little longer. But I was scared. I am always scared.
    <br><br>
    But when we did talk — those rare, short moments — something happened inside me. Hearing the softness of your voice, the calmness, it made me calm. My mind, which never stops running, which never shuts up, went quiet. Completely quiet.
    <br><br>
    No matter how much time passes, there will always be a version of me standing inside those moments with you. A version of me frozen in time, still hearing your voice, still feeling that rare and beautiful silence. Even when everything else changes, that version of me will not move. He will stand there forever, holding onto the only peace he ever knew.
    <br><br>
    There are a lot of things I regret saying and a lot of things I regret not saying. I keep a list in my head. The things I should have told you. The questions I should have asked. The compliments I swallowed because I was too afraid of sounding stupid. I carry that list everywhere. It lives in my chest like something breathing.
    <br><br>
    I catch myself replaying moments with you like scenes I am scared to forget. The way you laughed at something I said. The way you looked at me when you thought I wasn't paying attention. The way you existed so softly in a world that is so loud.
    <br><br>
    And sometimes I think the hardest thing in life is meeting someone who feels like home when they were never meant to stay. You felt like home. A home I never had. A home I didn't know I was looking for. And now I am homesick for someone who was never mine to miss.`,

    `There is this thing we had. A handshake. Small. Silly, maybe. The kind of thing that doesn't mean anything to anyone else. But it meant something to me.
    <br><br>
    I don't know why that moment stuck. Maybe because in that tiny, stupid handshake, I felt seen. Like for a second, I wasn't just someone you tolerated. I wasn't just the quiet kid in the corner. I was someone you played along with. Someone you smiled at. Someone you touched, even if it was just for a second.
    <br><br>
    I think about that handshake more than I should. More than is normal. I think about the way your hand felt. The way you didn't pull away too fast. The way we both laughed a little, like we were in on something no one else understood.
    <br><br>
    It wasn't a conversation. It wasn't deep. It wasn't the kind of moment people write poems about. But it was ours. And I haven't had anything that felt like mine in a very long time. Everything else in my life feels borrowed or broken. But that handshake — that was ours. That was real. That was something I didn't have to share with anyone else.
    <br><br>
    I wonder if you remember it. I wonder if it lives anywhere in your mind the way it lives in mine. Or if it was just a second to you, something you did and then forgot. I hope you remember it. I hope somewhere, in the back of your memory, there is a small room where that handshake lives. And maybe, on some quiet night, you open that door and smile.
    <br><br>
    Because I do. I open that door all the time.`,

    `I won't forget prom night. Even though it wasn't the best night of my life — honestly, it was awkward and loud and I felt out of place the entire time — having those short conversations with you was the best thing ever. The best thing. Nothing else that night mattered. Not the music. Not the decorations. Not the people. Just you. Just the few minutes I got to stand near you and pretend I belonged there.
    <br><br>
    You wore pink. A pink dress. Soft pink. The kind of pink that doesn't scream for attention but still steals every drop of it. And you looked so lovely in it. I remember thinking — she looks like something from a painting. The kind of painting you would stare at in a museum and not want to leave. The kind of painting that makes you forget where you are because you're too busy looking at her.
    <br><br>
    I remember the way the dress moved when you walked. The way the color made your skin look warmer. The way you smiled in it, like you knew you looked beautiful but you were too humble to say it. I wanted to tell you. I wanted to say, "You look like a sunset. You look like something I want to remember forever." But I didn't. I swallowed the words like I always do.
    <br><br>
    Pink is your color. Not because of the dress. Because when I think of you, I see pink. Soft. Warm. Unforgettable. The color of a sky just before the sun disappears. The color of something gentle in a world that is rarely gentle. Every time I see pink now, I think of you. Every time. And I don't think that will ever stop.
    <br><br>
    I should have told you that night. I should have said, "You look beautiful." But I was scared. I am always scared. And now I am writing it in a letter you will probably never read. You looked beautiful, Naemi. You looked like everything I have ever wanted and didn't know how to ask for.`,

    `I don't know if this was genuine to you. I don't know if you remember it the way I do. But I remember you reading my poems. I remember handing them to you like I was handing over a piece of my ribcage. Because that's what my poems are — pieces of me. Blood and bone and things I can't say out loud.
    <br><br>
    And you read them. You actually read them. You didn't just glance and hand them back. You sat there, with my words in your hands, and you read every single one. And then I saw it — that smile. That small, soft smile that spread across your face like light coming through a window.
    <br><br>
    Seeing that smile filled my heart with joy. No. Joy is not the right word. It filled my heart with something I don't have a name for. Something bigger than joy. Something that made my chest feel too small for everything I was feeling.
    <br><br>
    I saw you reading the poem about prom. The one I wrote about that night. And I saw you smile. And that made my heart swell more than I have ever felt in my life. More than any achievement. More than any victory. More than anything. Because you read a piece of me — a messy, ugly, honest piece of me — and you found it beautiful. You didn't laugh. You didn't look away. You smiled.
    <br><br>
    That smile is still inside my chest. I don't think it will ever leave. I think it lives there now, curled up somewhere between my ribs, keeping me warm on nights when everything else feels cold. You gave me that. You gave me a smile I will carry until I die.
    <br><br>
    I wish I could tell you that. I wish I could say, "Your smile healed something in me." But I didn't. I just stood there, quiet, hoping you couldn't see how much you meant to me.`,

    `I remember seeing your art projects in class. The way you could look at something — a picture, a house, anything — and just draw it. Not trace it. Not copy it slowly. Just look and draw. Your hand knew what to do without you even thinking.
    <br><br>
    There was this one time in housing class. You were drawing a house. Just looking at a picture and putting it onto paper. And it looked exactly like the picture. I remember watching you and thinking — how does she do that? How does someone just see something and make it appear?
    <br><br>
    That stuck with me. The way you didn't even seem to try. It just came out of you. Like drawing was as natural as breathing. I don't have that kind of talent. I don't have anything that comes out of me that easily. But you did. And it was beautiful to watch.
    <br><br>
    I wish I had told you that. I wish I had said, "You're really good at that." But I didn't. I just watched from across the room, quiet, hoping you wouldn't notice me staring. I noticed everything, Naemi. Everything.`,
    <br><br>
    I noticed the way you tucked your hair behind your ear. The way you laughed with your whole face. The way you looked down when you were thinking. The way you said certain words with an accent that made them sound different. Softer. Like they meant more when they came out of your mouth.
    <br><br>
    I collected these things. Like little treasures. I stored them away in a part of my brain labeled "Naemi." And I visit that part often. Too often, maybe. But I can't help it. You were interesting. You were different. You were someone I wanted to understand.
    <br><br>
    I never told you any of this. I never said, "I notice things about you." I was too scared. Too quiet. Too worried that you would think I was weird. But I am weird. And I noticed everything. And I remember all of it.`,

    `You look at life in a way I don't understand. Not in a bad way. Not in a way that confuses me. But in a way that makes me wish I could see through your eyes for just one day. Just one. So I could understand what it feels like to find beauty in things that everyone else calls ordinary.
    <br><br>
    Things that are ugly to everyone else — you found something beautiful in them. A cracked sidewalk. An old building. A cloudy sky. You looked at things and saw stories. You looked at things and saw art. I don't know how you do that. I don't know if you were born with it or if you taught yourself. But it is rare. It is so rare.
    <br><br>
    Things that are ordinary — you made them feel like magic. A cup of coffee. A walk home. A quiet conversation. When you were there, everything felt different. Brighter. Softer. More important. You had this way of making the mundane feel sacred.
    <br><br>
    I don't know how you do that. But I know the world is luckier because you see it the way you do. I am luckier because I got to stand next to you while you looked at things. Even if it was only for a little while. Even if I never told you.`,

    `I know I am probably one of the last people you like talking to. I can feel it. The way conversations with me feel like chores. The way you look for exits. I don't blame you. I am a lot. I am too much. I have always been too much.
    <br><br>
    That is fine. I am just grateful that you did talk to me. Even if it was out of pity. Even if it was because no one else was around. You talked to me. You looked at me. You treated me like I was human when most people treat me like furniture.
    <br><br>
    It made the darkness not so dark. You don't understand how dark it gets in my head. You don't know about the nights I spend staring at ceilings, wondering why I am the way I am. You don't know about the thoughts that circle like vultures, waiting for me to fall asleep so they can tear me apart. But you — when you talked to me — the vultures went quiet. Just for a little while. Just long enough for me to breathe.
    <br><br>
    You were my safety net without knowing it. And I am sorry for that. I am sorry that I put that on you without asking. I am sorry that I used your kindness as a crutch. That is not fair to you. You did not sign up to hold someone together. You were just being nice. And I turned your niceness into survival.
    <br><br>
    I put a lot of things on you just because I needed something to fill the void in my chest. The void that never goes away. The void that has been there for as long as I can remember. You didn't know you were filling it. You didn't know you were keeping me from falling apart. But you were. And I will never forget that.`,

    `I have this void. This empty space inside my chest that never goes away. It has been there for years. Some days it is small, like a pebble in my shoe. Other days it is enormous, like a canyon I cannot cross.
    <br><br>
    I have tried so many things to fill it. Food. Sleep. Music. Nothing worked. The void always came back. It always wins. It is patient. It waits for me to feel okay, and then it reminds me that I am not.
    <br><br>
    Then you talked to me. And the void got quieter. Not gone. Never gone. But quieter. Like someone turned down the volume on a song I had been listening to for years. I didn't even notice how loud it was until you made it soft.
    <br><br>
    That is more than anyone else has ever done. No one else has ever made the void shut up. No one else has ever made me feel like maybe — just maybe — I am not completely broken. You didn't even know you were doing it. You were just being you. Just existing. Just talking to me like I was a normal person.
    <br><br>
    And that was enough. More than enough. It was everything.
    <br><br>
    I don't know how to thank you for that. I don't know how to say, "You quieted the thing inside me that has been screaming for years." That sounds dramatic. That sounds like too much. But it is the truth. And this letter is the only place I can tell the truth.`,

    `I will always feel deeply about you. Not in a romantic way, not in the way people write songs about, not in the way that ends with weddings and forever. But in a way that feels like something I cannot explain. Something that doesn't have a name. Something that lives in a part of my heart I didn't know existed until you showed up.
    <br><br>
    I have never felt this way about a girl I don't love. That is the strangest part. Because I always thought — if you feel this way about someone, you love them. That is just how it works. Feelings this big? This consuming? This permanent? That has to be love.
    <br><br>
    But you proved that is not true. You proved that there are feelings bigger than love. Or maybe smaller. Or maybe just different. I don't have the words for it. And I am someone who usually has words.
    <br><br>
    I love your soul. How bright it is even on days when you are tired. How gentle you are with your words even when you don't have to be. The way you speak — the way your words leave your mouth — it is like snow falling. So soft. So quiet. But somehow filling the whole silence.
    <br><br>
    You don't try to be loud. You don't try to be noticed. But you are impossible to ignore. You are a soft thing in a loud world, and that is why I will never forget you. That is why a piece of me will always belong to you, even if you never asked for it.`,

    `You may forget me in ten years. Maybe sooner. Maybe you have already started to forget. And that hurts. It hurts more than I want to admit. Because you are etched into me. You are ink on skin. But to you — I might just be a smudge. A name you used to know. A face you used to recognize.
    <br><br>
    I just wish we could have been friends. Real friends. The kind who text each other stupid things at 2am. The kind who know each other's favorite songs and worst fears. The kind who stay.
    <br><br>
    I wish I talked to you more. Every time I saw you and stayed silent, I regretted it. Every time I walked away without saying something, I felt the weight of that choice pressing on my chest. I have so much regret. So much. It piles up inside me like snow in a blizzard.
    <br><br>
    I should have asked you to slow dance at prom. I wish you knew how much I regret not asking. I think about it all the time. What if I had just walked over. What if I had just opened my mouth. What if I had just said, "Would you like to dance?" Would you have said yes? Would you have smiled? I will never know. And that question will follow me for the rest of my life.
    <br><br>
    I wish I told you goodbye. The last time I saw you, I just let you leave. I didn't say anything. I didn't hug you. I didn't thank you. I just stood there like a statue, watching you walk away. I wish I had said, "Goodbye, Naemi. Thank you for everything." But goodbyes are forever. And I didn't want it to be forever.
    <br><br>
    I hope the distance between us won't be forever. I hope I will see you again. I know the chance is small. Microscopic, maybe. But I am holding onto it anyway. It is all I have left.`,

    `I hope you find your Noah. I hope there is someone out there who sees you the way I see you — but actually does something about it. Someone who tells you you're beautiful without swallowing the words. Someone who holds your hand in public and isn't afraid of who sees.
    <br><br>
    I hope he treats you like the royalty you deserve. I hope he notices the small things. The way you laugh. The way your voice gets soft when you're tired. The way you tuck your hair behind your ear. The way you say certain words with an accent that makes them sound like music.
    <br><br>
    I hope he makes you feel seen. Not tolerated. Not endured. But truly, deeply seen.
    <br><br>
    I hope you travel everywhere you want to go. Spain. Italy. Everywhere. I hope you take photos of everything. I hope you never stop making art. The world needs your art. The world needs your eyes. The world needs the way you see things.
    <br><br>
    I hope you are happy. Really happy. The kind of happy that makes you forget what sadness felt like. The kind of happy that feels like sunlight on your skin after a long winter.
    <br><br>
    I wish the best for you. I truly do. You deserve a life that feels as beautiful as you are. You deserve love that is loud and certain and unafraid. You deserve everything. Everything. And I hope you get it. Even if I am not there to see it. Especially if I am not there to see it.`,

    `I am afraid I will forget your voice. The softness of it. The way you said my name. The way you laughed at things that weren't even that funny but you laughed anyway because you found joy in small places.
    <br><br>
    I am afraid I will forget your laugh. The sound of it. The way it made me feel like everything was going to be okay, even when it wasn't.
    <br><br>
    I am afraid I will look for you in every girl I meet. And I don't know if that is a bad thing or a good thing. Maybe it is both. Maybe it is a curse I will carry forever — seeing ghosts of you in strangers, hoping one of them will be kind the way you were kind, soft the way you were soft.
    <br><br>
    I am afraid you will read this and think it's too much. That I am too much. That my feelings are too heavy and my words are too many. That is why I push people away. That is why I stay quiet. I am afraid of being too much for someone. I am afraid of being left because I am exhausting.
    <br><br>
    But with you — I didn't want to push. I wanted to stay. I wanted to stand next to you and let you see all of me, even the ugly parts, even the broken parts, even the parts I hide from everyone else. I wanted you to see me and not run away.
    <br><br>
    I don't know if you would have stayed. I don't know if you would have looked at all of me and still wanted to be near me. I will never know. And that scares me too.`,

    `Maybe that's the cruel thing about exchange students. They teach people how attached a heart can get in such little time. They show up, they bloom in your life like flowers in spring, and then they leave. And you are left standing in an empty field, wondering how something so beautiful could disappear so fast.
    <br><br>
    You came into my life with another language, another culture, another home. You were from a place I had never been, a world I didn't know. Yet somehow your soul still felt familiar to mine. Like I had known you before. Like we had met in another life and were just picking up where we left off.
    <br><br>
    I don't know if we will ever cross paths again. Probably not. The chance is very small. The world is wide and we are just two people in it. But a piece of me will always search for you. In crowded airports. In unfamiliar accents. In the faces of strangers who walk past me too quickly.
    <br><br>
    I will listen for your voice in every crowd. I will look for your smile in every room. I will hope — foolishly, desperately — that one day, somewhere, I will turn a corner and you will be there.
    <br><br>
    And if that day never comes, I will still carry you. I will still hold the memory of you in my chest like something sacred. I will still be grateful that I got to know you, even for a little while. Even if it hurts. Even if missing you feels like drowning.
    <br><br>
    Some people are worth the pain of losing. You are one of them.
    <br><br>
    Thank you for existing. Thank you for being gentle when you didn't have to be. Thank you for reading my poems. Thank you for the handshake. Thank you for wearing pink to prom. Thank you for making the darkness not so dark.
    <br><br>
    I will forever be grateful for you. More than you will ever know. More than these words can say. More than this letter can hold.
    <br><br>
    This letter won't be sent. I know that. I have known it from the beginning. But if you're reading this — somehow — you already know it's for you. You already know who wrote it. You already know that every word is true.
    <br><br>
    <em>Yours in ways I don't have words for,</em>
    <br><br>
    — a boy who will never forget the girl in pink
    <br><br>
    <em>26 May 2026</em>`
];

const chapters = chaptersRaw.map(chapter => formatPoeticText(chapter));

let currentChapter = 0;
const totalChapters = chapters.length;
const pageTextDiv = document.getElementById("pageText");
const chapterBadge = document.getElementById("chapterBadge");
const pageNumberSpan = document.getElementById("pageNumber");
const pageCounter = document.getElementById("pageCounter");
const prevBtn = document.getElementById("prevPageBtn");
const nextBtn = document.getElementById("nextPageBtn");
const currentPageDiv = document.getElementById("currentPage");

const romanNumerals = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII", "XIII", "XIV", "XV"];

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

const styleAnim = document.createElement('style');
styleAnim.textContent = `
    @keyframes pageEnter {
        from { opacity: 0; transform: rotateY(4deg); }
        to { opacity: 1; transform: rotateY(0); }
    }
`;
document.head.appendChild(styleAnim);

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

function initProtection() {
    const overlay = document.getElementById("protectionOverlay");
    if (!overlay) return;
    
    document.addEventListener("visibilitychange", () => {
        if (document.hidden) {
            overlay.classList.add("active");
        } else {
            setTimeout(() => overlay.classList.remove("active"), 200);
        }
    });
    
    window.addEventListener("blur", () => {
        overlay.classList.add("active");
        setTimeout(() => overlay.classList.remove("active"), 200);
    });
    
    document.addEventListener("contextmenu", (e) => e.preventDefault());
    
    document.addEventListener("keydown", (e) => {
        if (e.key === "F12" || (e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "J" || e.key === "C")) || (e.ctrlKey && e.key === "u")) {
            e.preventDefault();
        }
        if ((e.ctrlKey || e.metaKey) && (e.key === "s" || e.key === "p")) {
            e.preventDefault();
        }
    });
}

// FALLING PETALS ANIMATION
function initPetals() {
    const canvas = document.getElementById("petalsCanvas");
    const ctx = canvas.getContext("2d");
    
    let width = window.innerWidth;
    let height = window.innerHeight;
    let petals = [];
    const petalCount = 80;
    
    function resizeCanvas() {
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;
    }
    
    class Petal {
        constructor() {
            this.x = Math.random() * width;
            this.y = Math.random() * height - height;
            this.size = 8 + Math.random() * 12;
            this.speedY = 0.8 + Math.random() * 1.5;
            this.speedX = -0.3 + Math.random() * 0.6;
            this.rotation = Math.random() * Math.PI * 2;
            this.rotationSpeed = -0.02 + Math.random() * 0.04;
            this.opacity = 0.5 + Math.random() * 0.4;
            this.color = `rgba(255, ${180 + Math.random() * 50}, ${160 + Math.random() * 60}, ${this.opacity})`;
        }
        
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            this.rotation += this.rotationSpeed;
            
            if (this.y > height + 50) {
                this.y = -50;
                this.x = Math.random() * width;
            }
            if (this.x > width + 50) this.x = -50;
            if (this.x < -50) this.x = width + 50;
        }
        
        draw() {
            ctx.save();
            ctx.translate(this.x, this.y);
            ctx.rotate(this.rotation);
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.quadraticCurveTo(this.size / 2, this.size / 3, this.size, 0);
            ctx.quadraticCurveTo(this.size / 2, -this.size / 3, 0, 0);
            ctx.fillStyle = this.color;
            ctx.fill();
            ctx.restore();
        }
    }
    
    function initPetalsArray() {
        for (let i = 0; i < petalCount; i++) {
            petals.push(new Petal());
        }
    }
    
    function animate() {
        ctx.clearRect(0, 0, width, height);
        for (let petal of petals) {
            petal.update();
            petal.draw();
        }
        requestAnimationFrame(animate);
    }
    
    window.addEventListener("resize", () => {
        resizeCanvas();
        petals = [];
        initPetalsArray();
    });
    
    resizeCanvas();
    initPetalsArray();
    animate();
}
