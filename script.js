// Dynamic Tagline Rotator
document.addEventListener('DOMContentLoaded', function() {
    const taglines = [
        "Live. Stream. Game. Develop.",
        "Gaming Beyond Limits.",
        "Join the Adventure.",
        "Stream. Create. Connect."
    ];
    
    let currentTaglineIndex = 0;
    const taglineElement = document.getElementById('tagline');

    function changeTagline() {
        currentTaglineIndex = (currentTaglineIndex + 1) % taglines.length;
        taglineElement.textContent = taglines[currentTaglineIndex];
    }

    setInterval(changeTagline, 3000); // Change tagline every 3 seconds
});
