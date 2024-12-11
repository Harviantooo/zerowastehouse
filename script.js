function showPage(pageId) {
    // Sembunyikan semua halaman
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.remove('active');
    });

    // Tampilkan halaman yang dipilih
    const activePage = document.getElementById(pageId);
    if (activePage) {
        activePage.classList.add('active');
    }
}
