document.addEventListener('DOMContentLoaded', () => {
    let ul = document.querySelector("#band");
    const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

    function sortBands(bands) {
        const articles = ["a", "an", "the"];
        return bands.sort((a, b) => {
            const aNormalized = a.replace(/\b(a|an|the)\b/i, '').trim(); // Remove articles from band name
            const bNormalized = b.replace(/\b(a|an|the)\b/i, '').trim(); // Remove articles from band name
            return aNormalized.localeCompare(bNormalized); // Compare the normalized names
        });
    }

    const arr = sortBands(bands);
    for (let i = 0; i < arr.length; i++) {
        let li = document.createElement("li"); // Corrected variable name to 'li'
        li.textContent = arr[i]; // Use 'li' instead of 'list'
        ul.appendChild(li); // Correctly append the 'li' to 'ul'
    }
});
