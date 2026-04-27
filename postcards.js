document.addEventListener("DOMContentLoaded", () => {
    const art = document.getElementById("postcard-art");
    const image = document.getElementById("postcard-image");
    const randomButton = document.getElementById("random-postcard-button");
    const elements = {
        number: document.getElementById("postcard-number"),
        count: document.getElementById("postcards-count"),
        title: document.getElementById("details-title"),
        intro: document.getElementById("details-intro"),
        detailState: document.getElementById("details-state"),
        detailTown: document.getElementById("details-town"),
        detailDiner: document.getElementById("details-diner"),
        detailMedium: document.getElementById("details-medium"),
        story: document.getElementById("details-story")
    };

    if (!Array.isArray(postcardEntries) || postcardEntries.length === 0) {
        return;
    }

    let currentIndex = 0;

    function renderPostcard(index) {
        const card = postcardEntries[index];

        art.setAttribute("data-status", card.status);
        image.src = card.image;
        image.alt = card.alt;
        elements.number.textContent = `Postcard ${card.number}`;
        elements.count.textContent = `${index + 1} / ${postcardEntries.length}`;
        elements.title.textContent = card.diner;
        elements.intro.textContent = card.intro;
        elements.detailState.textContent = card.state;
        elements.detailTown.textContent = card.town;
        elements.detailDiner.textContent = card.diner;
        elements.detailMedium.textContent = card.medium;
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

    randomButton.addEventListener("click", showRandomPostcard);
    renderPostcard(currentIndex);
});
