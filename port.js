// Tombol muncul saat scroll
window.addEventListener('scroll', function() {
    const backToTopButton = document.querySelector('.back-to-top');
    if (window.pageYOffset > 300) {
        backToTopButton.classList.add('visible');
    } else {
        backToTopButton.classList.remove('visible');
    }
});

// Fungsi kembali ke atas
document.querySelector('.back-to-top').addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

document.querySelector('.retro-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = {
        name: e.target.name.value,
        email: e.target.email.value,
        message: e.target.message.value,
        _subject: "New message from portfolio"
    };

    try {
        const response = await fetch('https://formspree.io/f/mgvadkej', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(formData)
        });
        
        if (response.ok) {
            alert("Pesan dah terkirim ya azriel...");
            e.target.reset();
        } else {
            throw new Error('Alamak tahapok pesan gagal.....');
        }
    } catch (error) {
        alert("Error: " + error.message);
    }
});
