// ごみカツ！ 共通JavaScript (script.js)
document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('error', function() {
            this.style.display = 'none';
            if (this.parentElement.classList.contains('img-placeholder')) {
                this.parentElement.innerText = '画像';
            }
        });
    });
});

// 新しい支援依頼画面で「対応できません」を押したときの処理
function removeRequestCard(button) {
    const card = button.closest('.card');
    if (card) {
        card.style.transition = 'opacity 0.3s ease';
        card.style.opacity = '0';
        setTimeout(() => {
            card.remove();
            alert('支援依頼をスキップしました。');
        }, 300);
    }
}

// 見守り画面で「了解」ボタンを押したときの処理
function acknowledgeMimamori(button) {
    if (button.classList.contains('btn-acknowledged')) return;
    button.innerText = '了解済み ✓';
    button.classList.add('btn-acknowledged');
    const card = button.closest('.card');
    if (card) {
        card.style.backgroundColor = '#f9f9f9';
        card.style.borderColor = '#ddd';
    }
}
