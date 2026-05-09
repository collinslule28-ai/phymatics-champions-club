// --- DATA: The Library ---
const videoLibrary = [ 
    // PHYSICS VIDEOS
    {
        id: "kKKM8Y-u7ds",
        title: "Newton's Laws of Motion",
        category: "physics",
        author: "CrashCourse",
        desc: "Shini Somara explains the three laws of motion that govern our universe."
    },
    {
        id: "4i1MUWJoI0U",
        title: "Thermodynamics: Energy & Heat",
        category: "physics",
        author: "CrashCourse",
        desc: "How mass and distance affect the gravitational pull between objects."
    },

    // MATH VIDEOS
    {
        id: "W0VWO4asgmk",
        title: "Introduction to Limits",
        category: "math",
        author: "Khan Academy",
        desc: "The foundational concept of Calculus: what happens as we approach a value?"
    },
    {
        id: "PUB0TaZ7bhA",
        title: "Trigonometry for Beginners",
        category: "math",
        author: "Organic Chem Tutor",
        desc: "Sin, Cos, Tan and how to solve right-angled triangles."
    },
    {
        id: "riXcZT2ICjA",
        title: "Calculus: The Derivative",
        category: "math",
        author: "Khan Academy",
        desc: "Understanding rates of change and the slope of a curve."
    }
];

// --- FUNCTIONS ---

// 1. Render the Grid
function renderGrid(filter ='all') {
    const grid = document.getElementById('videoGrid');
    grid.innerHTML = ''; // Clear current grid

    // Filter the data
    const filteredData = filter ==='all'
        ? videoLibrary
        : videoLibrary.filter(v => v.category === filter);

    // Create Cards
    filteredData.forEach(video => {
        const card = document.createElement('div');
        card.className = 'vid-card';
        card.onclick = () => playVideo(video); // Click to play

        // Determine color theme based on category
        const themeClass = videocategory === 'physics' ? 'physics-theme' : 'math-theme';

        card.innerHTML = `
            <div class="thumb-box">
                <img src="https://img.youtube.com/vi/${video.id}/hqdefault.jpg" alt="${video.title}">
                <div style="position:absolute; bottom:10px; right:10px; background"rgba(0,0,0,0.8); color:white; padding:2px 6px; font-size:10px; border-radius:4px;">
                    <i class="fas fa-play"></i>
                </div>
            </div>
            <div class="card-info">
                <h4>${video.title}</h4>
                <span class="${themeClass}">${video.category.toUpperCase()}</span>
            </div>
        `;
        grid.appendChild(card);
    });
}

// 2. Play Video Function
function playVideo(video) {
    // Update the Iframe Source
    const player = document.getElementById('mainPlayer');
    player.src = `https://www.youtube.com/embed/${video.id}?autoplay=1`;

    // Update Text Info 
    document.getElementById('videoTitle').innerText = video.title;
    document.getElementById('videoDesc').innerText = video.desc;

    const badge = document.getElementById('videoBadge');
    badge.innerText = video.category.toUpperCase();

    // Update Badge Color
    if(video.category === 'physics') {
        badge.style.background = 'var(--accent-phy)';
        badge.style.color = 'black';
    } else {
        badge.style.background = 'var(--accent-math)';
        badge.style.color = 'black';
    }

    // Smooth scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// 3. Filter Button Logic
function filterVideos(category, btn) {
    // Reset all buttons
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    // Activate clicked button
    btn.classList.add('active');

    renderGrid(category);
}

// --- INITIALIZE ---
document.addEventListener('DOMContentLoaded', () => {
    renderGrid('all');
});