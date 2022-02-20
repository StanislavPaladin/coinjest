// переменные для управление хедером
const userPanel = document.querySelector('.header-user');
const userTrigger = document.querySelector('.header-user__green');
const headerNavigationItem = document.querySelector('.header-navigation__item');

// переменные для управления сайдбаром
const sidebarItem = document.querySelectorAll('.sidebar-item');

// отображаемый контент
const welcomeContent = document.querySelector('#content-welcome');
const depositContent = document.querySelector('#content-deposit');
const withdrawContent = document.querySelector('#content-withdraw');
const profileInfoContent = document.querySelector('#content-profile-information');
const profileHistoryContent = document.querySelector('#content-profile-history');
const depositHistoryContent = document.querySelector('#content-deposit-history');
const withdrawalHistoryContent = document.querySelector('#content-withdrawal-history');
const tradeHistoryContent = document.querySelector('#content-trade-history');
const transferHistoryContent = document.querySelector('#content-transfer-history');
const referralsContent = document.querySelector('#content-referrals');
const settingsContent = document.querySelector('#content-settings');
const content = [welcomeContent, depositContent, withdrawContent, profileInfoContent, profileHistoryContent, depositHistoryContent, withdrawalHistoryContent, tradeHistoryContent, transferHistoryContent, referralsContent, settingsContent];

// пошаговое открытие форм
const depositStepOne = document.getElementById('deposit-setpOne');
const depositStepTwo = document.getElementById('deposit-stepTwo');
const submitDepositBtn = document.getElementById('submit-deposit');
const depositFirst = document.getElementById('deposit-first');
const depositSecond = document.getElementById('deposit-second');
const depositThird = document.getElementById('deposit-third');
const depositFourth = document.getElementById('deposit-fourth');
const depositFifth = document.getElementById('deposit-fifth');
const depositStepsContent = [depositFirst, depositSecond, depositThird, depositFourth, depositFifth];
const withdrawFirst = document.getElementById('withdraw-stepOne');
const withdrawSecond = document.getElementById('withdraw-stepTwo');
const withdrawThird = document.getElementById('withdraw-stepThree');
const withdrawFourth = document.getElementById('withdraw-stepFour');
const withdrawStepsContent = [withdrawFirst, withdrawSecond, withdrawThird, withdrawFourth];
const withdrawBtn = document.getElementById('withdraw');

// контент, содержимое которого копируется в буффер обмена
const walletLink = document.getElementById('wallet-link');
const walletLinkSecond = document.getElementById('wallet-link2');
const walletLinkBtc = document.getElementById('wallet-link-btc');
const walletLinkEth = document.getElementById('wallet-link-eth');
const walletLinkCash = document.getElementById('wallet-link-cash');
const walletLinkXrp = document.getElementById('wallet-link-xrp');
// кнопки копирования
const copyBtn = document.getElementById('copy-btn');
const copyBtnSecond = document.getElementById('copy-btn2');
const copyBtnBtc = document.getElementById('copy-btn-btc');
const copyBtnEth = document.getElementById('copy-btn-eth');
const copyBtnCash = document.getElementById('copy-btn-cash');
const copyBtnXrp = document.getElementById('copy-btn-xrp');




// изначальное состояние сайдбара и отображаемого контента
function initContent() {
    sidebarItem.forEach(item => item.classList.remove('active'));
    content.forEach(item => item.style.display = "none");
    welcomeContent.style.display = "block";
}
initContent();

// user panel в хедере
userTrigger.addEventListener('click', () => userPanel.classList.toggle('active'));
document.querySelector('.header-user__settings').addEventListener('click', ()=> {
    $('#settings').click();
    document.querySelector('.header-user').classList.toggle('active');
})
document.querySelector('.header-user__logout').addEventListener('click', ()=> {
    $('#logout').click();
    document.querySelector('.header-user').classList.toggle('active');
})

// сайдбар, управление отображаемым контентом в админке
document.getElementById('get-started').addEventListener('click', ()=> $('#deposit').click());
sidebarItem.forEach(item => item.addEventListener('click', (e) => {
    sidebarItem.forEach(item => item.classList.remove('active'));
    item.classList.add('active');
    headerNavigationItem.textContent = item.textContent;
    content.forEach(item => item.style.display = "none");

    window.scrollTo(0, 0)

    if (item.id == 'deposit') {
        depositContent.style.display = "block"
    } else if (item.id == "withdraw") {
        withdrawContent.style.display = "block"
    } else if (item.id == "profile-information") {
        profileInfoContent.style.display = "block"
    } else if (item.id == "profile-history") {
        profileHistoryContent.style.display = "block"
    } else if (item.id == "deposit-history") {
        depositHistoryContent.style.display = "block"
    } else if (item.id == "withdrawal-history") {
        withdrawalHistoryContent.style.display = "block"
    } else if (item.id == "trade-history") {
        tradeHistoryContent.style.display = "block"
    } else if (item.id == "transfer-history") {
        transferHistoryContent.style.display = "block"
    } else if (item.id == "referrals") {
        referralsContent.style.display = "block"
    } else if (item.id == "settings") {
        settingsContent.style.display = "block"
    }
}))


// пошаговое открытие  формы в make a deposit и withdraw funds
function depositInit() {
    depositStepTwo.style.display = "none";
    depositStepsContent.forEach(item => item.style.display="none");
    withdrawStepsContent.forEach(item => item.style.display="none");
    withdrawBtn.addEventListener('click', () => {
        withdrawFirst.style.display="block";
        withdrawFirst.querySelectorAll('.new-select__item').forEach(item => item.addEventListener('click', () => withdrawStepsContent[1].style.display="block"));
        withdrawSecond.querySelectorAll('.new-select__item').forEach(item => item.addEventListener('click', () => withdrawStepsContent[2].style.display="block"));
        withdrawThird.querySelectorAll('.new-select__item').forEach(item => item.addEventListener('click', () => withdrawStepsContent[3].style.display="block"));
        withdrawFourth.querySelectorAll('.new-select__item').forEach(item => item.addEventListener('click', () => withdrawStepsContent[4].style.display="block"))
    })
    submitDepositBtn.addEventListener('click', (e) => {
        e.preventDefault();
        depositStepTwo.style.display = 'block';
        depositStepOne.style.display = 'none';
        depositStepsContent[0].style.display="block";
        depositFirst.querySelectorAll('.new-select__item').forEach(item => item.addEventListener('click', () => depositStepsContent[1].style.display="block"));
        depositSecond.querySelectorAll('.new-select__item').forEach(item => item.addEventListener('click', () => depositStepsContent[2].style.display="block"));
        depositThird.querySelectorAll('.new-select__item').forEach(item => item.addEventListener('click', () => depositStepsContent[3].style.display="block"));
        depositFourth.querySelectorAll('.new-select__item').forEach(item => item.addEventListener('click', () => depositStepsContent[4].style.display="block"))
    })
    
    

}
depositInit();

// копирование в буфер обмена линка на кошелёк/рефералов
copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(walletLink.textContent)
})
copyBtnSecond.addEventListener('click', () => {
    navigator.clipboard.writeText(walletLinkSecond.textContent)
})
copyBtnBtc.addEventListener('click', () => {
    console.log(walletLinkBtc);
    navigator.clipboard.writeText(walletLinkBtc.value)
})
copyBtnEth.addEventListener('click', () => {
    navigator.clipboard.writeText(walletLinkEth.value)
})
copyBtnCash.addEventListener('click', () => {
    navigator.clipboard.writeText(walletLinkCash.value)
})
copyBtnXrp.addEventListener('click', () => {
    navigator.clipboard.writeText(walletLinkXrp.value)
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