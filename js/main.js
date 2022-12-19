const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

// Select tab content item
function selectItem(e) {
    removeBorder();
    removeShow();
    // add border to current tab
    this.classList.add('tab-border')

    // Grab Content Item from DOM
    const tabContentItem = document.querySelector(`#${this.id}-content`)

    // Add show class
    tabContentItem.classList.add('show')
    console.log(this.id)
}


function removeBorder() {
    tabItems.forEach(item => item.classList.remove('tab-border'))
}

function removeShow() {
    tabContentItems.forEach(item => item.classList.remove('show'))
}

// Tab Click
tabItems.forEach(item => item.addEventListener('click', selectItem))

