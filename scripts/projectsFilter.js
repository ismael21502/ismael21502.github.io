function initProjectsFilter() {
    const filterItems = document.querySelectorAll(".projectsFilterItem");
    const cards = document.querySelectorAll(".projectCard");

    filterItems.forEach(item => {
        item.addEventListener("click", () => {
            const filter = item.dataset.filter;
            setActiveItems(filterItems, item)
            filterCards(cards, filter)
        });
    });
    console.log(filterItems)
}

function setActiveItems(items, activeItem) {
    items.forEach(item => item.classList.remove("active"));
    activeItem.classList.add("active");
}

function filterCards(cards, filter) {
    cards.forEach((card, i) => {
        const categories = card.dataset.category.split(" ");
        const shouldShow = filter === "all" || categories.includes(filter);
        setTimeout(() => {
            if (!shouldShow) hideCard(card)
            else showCard(card)
        }, i * 40);
    });
}

function hideCard(card) {
    card.classList.add("hiding");
    setTimeout(() => {
        card.classList.add("hidden");
        card.classList.remove("hiding");
    }, 150);
}

function showCard(card) {
    card.classList.remove("hidden");
    card.offsetHeight;
    card.classList.remove("hiding");
}

initProjectsFilter()