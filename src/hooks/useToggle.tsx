export const toggleFilter = () => {
    const filter: HTMLElement | null = document.querySelector('#filter');
    const toggle: HTMLElement | null = document.querySelector('#filter-toggle');

    if(filter && toggle) {
        if(filter.classList.contains('hide-filter')) {
            filter.classList.remove('hide-filter');
            toggle.classList.remove('invisible');
        } else {
            filter.classList.add('hide-filter');
            toggle.classList.add('invisible');
        }
    }
};

export const toggleMobileMenu = () => {
    const menu: HTMLElement | null = document.querySelector('#menu-mobile');

    if(menu) {
        if(menu.classList.contains('translate-x-full')) {
            menu.classList.remove('translate-x-full');
        } else {
            menu.classList.add('translate-x-full');
        }
    }
};

export const toggleSellerAccount = () => {
    const toggle: HTMLElement | null = document.querySelector('#seller-account-toggle');
    const popup: HTMLElement | null = document.querySelector('#seller-account');

    if(toggle && popup) {
        if(popup.classList.contains('hide-seller-account')) {
            popup.classList.remove('hide-seller-account');
        } else {
            popup.classList.add('hide-seller-account');
        }
    }
};

export const toggleSellerSidebar = () => {
    const menu: HTMLElement | null = document.querySelector('#menu-seller');
    const header: HTMLElement | null = document.querySelector('header');
    const main: HTMLElement | null = document.querySelector('main');

    if(menu && header && main) {
        if(window.innerWidth < 768) {
            if(menu.classList.contains('hide-seller-sidebar')) {
                menu.classList.remove('hide-seller-sidebar');
            } else {
                menu.classList.add('hide-seller-sidebar');
            }
        } else {
            if(menu.classList.contains('translate-x-[-13.5rem]')) {
                menu.classList.remove('translate-x-[-13.5rem]');
                header.classList.remove('store-header-full');
                main.classList.remove('store-content-full');
            } else {
                menu.classList.add('translate-x-[-13.5rem]');
                header.classList.add('store-header-full');
                main.classList.add('store-content-full');
            }
        }
    }
};
