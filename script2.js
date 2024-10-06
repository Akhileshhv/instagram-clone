const likeButton = document.querySelector('.post-actions button:first-child');
let isLiked = false;

likeButton.addEventListener('click', () => {
    isLiked = !isLiked;
    likeButton.textContent = isLiked ? 'Liked' : 'Like';
});
