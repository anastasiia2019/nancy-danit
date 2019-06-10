
//work js menu-tab
const tabsCaptionLink = document.querySelectorAll('.tab-menu-question a');
for (let i = 0; i < tabsCaptionLink.length; i++) {
    tabsCaptionLink[i].addEventListener('click', switchTab);
}

function switchTab() {
    const elemDiv = this.parentElement;
    const allListItems = elemDiv.children;
    const arrayListItems = Array.prototype.slice.call(allListItems);
    arrayListItems.forEach(function(item) {
        item.classList.remove('active');
    });
    this.classList.add('active');
    const tabsContent = document.querySelectorAll('.tab-menu-answer');
    for(let i =0; i<tabsContent.length; i++){
        tabsContent[i].classList.remove('active');
    }

    const position = arrayListItems.indexOf(this);
    tabsContent[position].classList.add('active');
}

//work plugin menu-tab
// $(document).ready(function () {
//     $('.tab-menu-item').click(function () {
//         $(this)
//             .addClass('active')
//             .siblings()
//             .removeClass('active')
//             .closest('.services-container')
//             .find('.tab-menu-answer')
//             .removeClass('active')
//             .eq($(this).index())
//             .addClass('active');
//     });
// });