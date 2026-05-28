document.addEventListener("DOMContentLoaded", () => {
    const art = document.getElementById("postcard-art");
    const image = document.getElementById("postcard-image");
    const flipButton = document.getElementById("postcard-flip");
    const randomButton = document.getElementById("random-postcard-button");
    const elements = {
        title: document.getElementById("details-title"),
        story: document.getElementById("details-story")
    };

    if (!Array.isArray(postcardEntries) || postcardEntries.length === 0) {
        return;
    }

    let currentIndex = 0;
    let showingBack = false;

    function updatePostcardImage(card) {
        image.src = showingBack ? card.backImage : card.frontImage;
        image.alt = showingBack ? card.backAlt : card.frontAlt;
        flipButton.setAttribute(
            "aria-label",
            showingBack ? "Show front of postcard" : "Show back of postcard"
        );
    }

    function renderPostcard(index) {
        const card = postcardEntries[index];

        art.setAttribute("data-status", card.status);
        showingBack = false;
        updatePostcardImage(card);
        elements.title.textContent = card.diner;
        elements.story.textContent = card.story;
    }

    function showRandomPostcard() {
        if (postcardEntries.length === 1) {
            renderPostcard(0);
            return;
        }

        let nextIndex = currentIndex;

        while (nextIndex === currentIndex) {
            nextIndex = Math.floor(Math.random() * postcardEntries.length);
        }

        currentIndex = nextIndex;
        renderPostcard(currentIndex);
    }

    flipButton.addEventListener("click", () => {
        showingBack = !showingBack;
        updatePostcardImage(postcardEntries[currentIndex]);
    });

    randomButton.addEventListener("click", showRandomPostcard);
    renderPostcard(currentIndex);
});
