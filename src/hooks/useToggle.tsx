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
