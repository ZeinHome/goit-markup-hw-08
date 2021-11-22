(() => {
    const refs1 = {
        menuBtnRef: document.querySelector("[data-menu-button]"),
        closeModalBtn: document.querySelector("[data-menu-close]"),
        mobileMenuRef: document.querySelector("[data-menu]"),
    };

    refs1.menuBtnRef.addEventListener('click', toggleModal);
    refs1.closeModalBtn.addEventListener('click', toggleModal);

    function toggleModal() {

        refs1.mobileMenuRef.classList.toggle('is-open');
        document.body.classList.toggle("modal-open");
    }
})();