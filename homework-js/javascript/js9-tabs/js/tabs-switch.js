document.querySelector('.tabs-menu').addEventListener('click', funcShowTabs);

function funcShowTabs(event) {
    if (event.target.className === 'tab-m') {
        let dataMenu = event.target.getAttribute('data-target');
        let tabM = document.getElementsByClassName('tab-m');
        for (let i = 0; i < tabM.length; i++) {
            tabM[i].classList.remove('target');
        }
        event.target.classList.add('target');
        let tabContent = document.getElementsByClassName('tab-c');
        for (let i = 0; i < tabContent.length; i++) {
            let dataContent = tabContent[i].dataset.target;
            if (dataMenu === dataContent) {
                tabContent[i].style.display = 'block';
            } else {
                tabContent[i].style.display = 'none';
            }
        }
    }

};




