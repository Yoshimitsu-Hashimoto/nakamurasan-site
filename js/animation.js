//ページ表示遅延
document.addEventListener('DOMContentLoaded', function() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-active');
        } else {
          entry.target.classList.remove('animate-active'); // ビューポート外に出たらクラスを削除
        }
      });
    }, {
      threshold: 0.1
    });

    document.querySelectorAll('.animate').forEach(section => {
      observer.observe(section);
    });
  });

  console.log('test');
