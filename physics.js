const localBooks = [
    { title: "NCDC Physics Learner's Book", level: "S.1", type: "PDF", link: "https://fresh-teacher.github.io/SeniorTwoPhysicsLessonNotes.html" },
    { title: "UNEB Past Papers: Physics 2023", level: "UCE", type: "DOCX", link: "https://fresh-teacher.github.io/SeniorTwoPhysicsLessonNotes.html" },
    { title: "Advanced Level Mechanics", level: "A-Level", type: "PDF", link: "https://fresh-teacher.github.io/SeniorTwoPhysicsLessonNotes.html" },
];

const globalBooks = [
    { title: "Fundamentals of Physics (Halliday)", level: "University", type: "PDF", link: "#" },
    { title: "Quantum Mechanics Intro", level: "Advanced", type: "PDF", link: "#" },
];

function displayBooks(books, elementId) {
    const container = document.getElementById(elementId);
    container.innerHTML = "";
    books.forEach(book => {
        container.innerHTML += `
            <div class="book-card">
                <span class="badge">${book.level}</span>
                <h3>${book.title}</h3>
                <p>Format: ${book.type}</p>
                <a href="${book.link}" class="download-btn">Download</a>
            </div>
        `;
    });
}

function searchBooks() {
    const query = document.getElementById('searchInput').toLowerCase();
    const filteredLocal = localBooks.filter(b => b.title.toLowerCase().includes(query));
    const filteredGlobal = globalBooks.filter(b => b.title.toLowerCase().includes(query));

    displayBooks(filteredLocal, 'local-list');
    displayBooks(filteredGlobal, 'global-list');
}

// Initial Load
displayBooks(localBooks, 'local-list');
displayBooks(globalBooks, 'global-list');