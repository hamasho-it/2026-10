// ごみカツ！ 共通JavaScript (script.js)
document.addEventListener("DOMContentLoaded", function() {
    // 画像読み込みエラー時に灰色のプレースホルダー表示を維持する処理
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

// 新しい支援依頼画面で「対応できません」ボタンが押された時の処理
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
