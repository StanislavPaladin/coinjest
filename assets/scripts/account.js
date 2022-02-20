const userPanel = document.querySelector('.header-user');
const userTrigger = document.querySelector('.header-user__green');
const sidebarItem = document.querySelectorAll('.sidebar-item');
const headerNavigationItem = document.querySelector('.header-navigation__item');
const welcomeContent = document.querySelector('#content-welcome');
const depositContent = document.querySelector('#content-deposit');
const withdrawContent = document.querySelector('#content-withdraw');
const profileInfoContent = document.querySelector('#content-profile-information');
const profileHistoryContent = document.querySelector('#content-profile-history');
const depositHistoryContent = document.querySelector('#content-deposit-history');
const withdrawalHistoryContent = document.querySelector('#content-withdrawal-history');
const tradeHistoryContent = document.querySelector('#content-trade-history');
const referralsContent = document.querySelector('#content-referrals');
const settingsContent = document.querySelector('#content-settings');
const walletLink = document.getElementById('wallet-link');
const copyBtn = document.getElementById('copy-btn')
const content = [welcomeContent, depositContent, withdrawContent, profileInfoContent, profileHistoryContent, depositHistoryContent, withdrawalHistoryContent, tradeHistoryContent, referralsContent, settingsContent];

// изначальное состояние сайдбара и отображаемого контента
function initContent() {
    sidebarItem.forEach(item => item.classList.remove('active'));
    content.forEach(item => item.style.display="none");
    welcomeContent.style.display="block";
}
initContent();

// user panel в хедере
userTrigger.addEventListener('click', () => userPanel.classList.toggle('active'));
// сайдбар, управление отображаемым контентом в админке
sidebarItem.forEach(item => item.addEventListener('click', (e) => {
    sidebarItem.forEach(item => item.classList.remove('active'));
    item.classList.add('active');
    headerNavigationItem.textContent = item.textContent;
    content.forEach(item => item.style.display="none");

    window.scrollTo(0,0)

    if(item.id == 'deposit') {
        depositContent.style.display="block"
    } else if (item.id=="withdraw") {
        withdrawContent.style.display="block"
    } 
    else if (item.id=="profile-information") {
        profileInfoContent.style.display="block"
    } 
    else if (item.id=="profile-history") {
        profileHistoryContent.style.display="block"
    } 
    else if (item.id=="deposit-history") {
        depositHistoryContent.style.display="block"
    } 
    else if (item.id=="withdrawal-history") {
        withdrawalHistoryContent.style.display="block"
    } 
    else if (item.id=="trade-history") {
        tradeHistoryContent.style.display="block"
    } 
    else if (item.id=="referrals") {
        referralsContent.style.display="block"
    } 
    else if (item.id=="settings") {
        settingsContent.style.display="block"
    } 

}))


// копирование в буфер обмена линка на кошелёк
copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(walletLink.textContent)
})

// кастомизация селекта
$('.select').each(function () {
    const _this = $(this),
        selectOption = _this.find('option'),
        selectOptionLength = selectOption.length,
        selectedOption = selectOption.filter(':selected'),
        duration = 300; // длительность анимации 

    _this.hide();
    _this.wrap('<div class="select"></div>');
    $('<div>', {
        class: 'new-select',
        text: _this.children('option:disabled').text()
    }).insertAfter(_this);

    const selectHead = _this.next('.new-select');
    $('<div>', {
        class: 'new-select__list'
    }).insertAfter(selectHead);

    const selectList = selectHead.next('.new-select__list');
    for (let i = 1; i < selectOptionLength; i++) {
        $('<div>', {
                class: 'new-select__item',
                html: $('<span>', {
                    text: selectOption.eq(i).text()
                })
            })
            .attr('data-value', selectOption.eq(i).val())
            .appendTo(selectList);
    }

    const selectItem = selectList.find('.new-select__item');
    selectList.slideUp(0);
    selectHead.on('click', function () {
        if (!$(this).hasClass('on')) {
            $(this).addClass('on');
            selectList.slideDown(duration);

            selectItem.on('click', function () {
                let chooseItem = $(this).data('value');

                $('select').val(chooseItem).attr('selected', 'selected');
                selectHead.text($(this).find('span').text());

                selectList.slideUp(duration);
                selectHead.removeClass('on');
            });

        } else {
            $(this).removeClass('on');
            selectList.slideUp(duration);
        }
    });
});
