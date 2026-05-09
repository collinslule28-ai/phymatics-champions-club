// --- DATA REPOSITORY ---
const resources = [
    {
        title: "NCDC Mathematics Syllabus",
        type: "olevel",
        desc: "Oficial O-Level curriculum guide and textbook downloads.",
        link: "https://ncdc.go.ug/",
        icon: "fa-book"
    },
    {
        title:"Uneb Past Papers (Sharebility)",
        type: "alevel",
        desc: "Archive of UACE Principal Math papers P1 and P2.",
        link: "https://sharebility.net/",
        icon: "fa-file-pdf"
    },
    {
        title: "Khan Academy: Algebra",
        type: "videos",
        desc: "World-class video tutorials for quadratic equations.",
        link:"https://www.khanacademy.org/math/algebra",
        icon: "fa-play"
    },
    {
        title: "Zainematics",
        type: "olevel",
        desc: "Famous simplified math tutorials for O-Level students.",
        link: "https://www.youtube.com/@Zainematics",
        icon: "fa-video"
    },
    {
        title: "Dr. Frost Maths",
        type: "alevel",
        desc: "Advanced Calculus and Mechanics interactive tools.",
        link: "https://www.drfrostmaths.com/",
        icon: "fa-calculator"
    },
    {
        title: "Physics & Math Tutor",
        type: "alevel",
        desc: "Revision notes for A-Level Pure Mathematics.",
        link: "https://www.physicsandmathstutor.com/",
        icon: "fa-atom"
    }
];

// --- FUNCTIONS ---

// 1. Render Function (Draws the cards)
function renderCards(data) {
    const grid = document.getElementById('resourceGrid');
    grid.innerHTML = ""; // Clear existing content

    data.forEach(item => {
        const card = document.createElement('div');
        card.className = 'resource-card';
        card.innerHTML = `
            <span class="tag ${item.type}">${item.type.toUpperCase()}</span>
            <div class="card-icon"><i class="fas ${item.icon}"></i></div>
            <h3>${item.title}</h3>
            <p>${item.desc}</p>
            <a href="${item.link}" target="_blank" class="btn-go">Access Resource &rarr;</a>
        `;
        grid.appendChild(card);
    });
}

// 2. Filter Function (Clicking sidebar buttons)
function filterResources(category, btnElements) {
    // Highlight active button
    if (btnElement) {
        document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
        btnElement.classList.add('active');
    }
}

// 3. Search Function (Typing in search bar)
function searchLibrary() {
    const term = document.getElementById('searchInput').ariaValueMax.toLowerCase();
    const filtered = resources.filter(item =>
        item.title.toLowerCase().includes(term) ||
        item.desc.toLowerCase().includes(term)
    );
    renderCards(filtered);
}

// --- INITIALIZATION ---
// This ensures the code runs ONLY after HTML is ready
document.addEventListener('DOMContentLoaded', () => {
    console.log("Phymatics System Loaded");
    renderCards(resources);
});