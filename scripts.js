// generateBlogPreviews.js
document.addEventListener('DOMContentLoaded', function () {
    const blogContainer = document.getElementById('blog-previews');

    blogPosts.forEach(post => {
        // Create blog preview elements
        const previewDiv = document.createElement('div');
        previewDiv.className = 'blog-preview';

        const img = document.createElement('img');
        img.src = post.image;
        img.alt = post.title;

        const title = document.createElement('h3');
        const titleLink = document.createElement('a');
        titleLink.href = post.link;
        titleLink.textContent = post.title;
        title.appendChild(titleLink);

        const excerpt = document.createElement('p');
        excerpt.textContent = post.excerpt;

        // Append elements to the preview container
        previewDiv.appendChild(img);
        previewDiv.appendChild(title);
        previewDiv.appendChild(excerpt);

        // Add the preview to the main container
        blogContainer.appendChild(previewDiv);
    });
});