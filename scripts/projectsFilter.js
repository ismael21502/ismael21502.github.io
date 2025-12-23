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
    cards.forEach(card => {
        const categories = card.dataset.category.split(" ");
        const shouldShow = filter === "all" || categories.includes(filter);
        card.classList.toggle("hidden", !shouldShow);
    });
}

initProjectsFilter()