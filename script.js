// Array of file metadata
const files = [
    { title: "Kinematics Notes", type: "pdf", desc: "Linear motion and projectile physics.", link: "#" },
    { title: "Newton's Laws", type: "pdf", desc: "Understanding forces and inertia.", link: "#" },
    { title: "Optics Lecture", type: "pdf", desc: "A full video guide on light reflection.", link: "#" },
    { title: "Thermodynamics", type: "pdf", desc: "Heat transfer and energy states.", link: "#" },
    { title: "Wave Motion", type: "pdf", desc: "Sound and electromagnetic wave clips.", link: "#" },
]; 

const grid = document.getElementById('libraryGrid');
const searchInput = document.getElementById('searchInput');

// Function to render cards
function renderLibrary(filteredArray) {
    grid.innerHTML = '';
    filteredArray.forEach(file => {
        const icon = file.type === 'pdf' ?;
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <div class="icon">${icon}</div>
            <h4>${file.title}</h4>
            <p>${file.desc}</p>
            <a href="${file.link}" class="download-btn" download>Download</a>
        `;
        grid.appendChild(card);
    });
}

// Search functionality
searchInput.addEventListener('input', (e) => {
    const searchVal = e.target.value.toLowerCase();
    const matches = files.filter(file => 
        file.title.toLowerCase().includes(searchVal) ||
        file.desc.toLowerCase().includes(searchVal)
    );
    renderLibrary(matches);
});

// Type filtering
function filterType(type) {
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => btn.classList.remove('active'));

    // Set active button
    event.target.classList.add('active');

    if (type === 'all') {
        renderLibrary(files);
    } else {
        const filtered = files.filter(file => file.type === type);
        renderLibrary(filtered);
    }
}

//Initial Load
renderLibrary(files);