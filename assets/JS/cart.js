const cart_list = document.querySelectorAll('.cart-list .cart-item');

cart_list.forEach((item) => {
    const item_check = item.querySelector('.item-checkbox');
    item_check.addEventListener('click', () => {
        console.log(item.checked);
        if (item_check.classList.contains('active')) {
            item_check.classList.remove('active');
        }
        else{
            item_check.classList.add('active');
        }
    });
});

const form_list = document.querySelectorAll('.gift-body .gift-container .gift-content .form-information .form-checkbox');
form_list.forEach((item) => {
    const item_check = item.querySelector('.item-checkbox');
    item_check.addEventListener('click', () => {
        console.log(item.checked);
        if (item_check.classList.contains('active')) {
            item_check.classList.remove('active');
        }
        else{
            item_check.classList.add('active');
        }
    });
});

const form_gift = document.querySelector('#form-gift');
document.querySelector('.payment-checkout .payment-container .payment-code .wrapper-gift').addEventListener('click', () => {
    form_gift.classList.add('active');
});


document.querySelector('.gift-body .gift-container .form-close-btn').addEventListener('click', () => {
    form_gift.classList.remove('active');
});

document.querySelector('.gift-body .gift-container .gift-content .form-btn .back-btn').addEventListener('click', () => {
    form_gift.classList.remove('active');
});

document.querySelector('.gift-body .gift-container .gift-content .form-btn .confirm-btn').addEventListener('click', () => {
    form_gift.classList.remove('active');
});

form_gift.addEventListener('click', (e) => {
    if(e.target.id == 'form-gift'){
        form_gift.classList.remove('active');
    }
});





const form_coupon = document.querySelector('#form-coupon');
const coupon_list = form_coupon.querySelectorAll('.coupon-container .coupon-content .coupon-list .coupon-item');

coupon_list.forEach((item) => {
    const save_btn = item.querySelector('.coupon-copy');
    save_btn.addEventListener('click', () => {
        coupon_list.forEach((item) => {
            const save_btn_1 = item.querySelector('.coupon-copy');
            save_btn_1.innerHTML = '<strong>Sao chép mã</strong>';
            save_btn_1.style.color = '#EA3B3B';
        });
        save_btn.innerHTML = '<strong>Đã sao chép</strong>';
        save_btn.style.color = '#5F5F5F';
    });
});



document.querySelector('.payment-checkout .payment-container .payment-code .wrapper-coupon').addEventListener('click', () => {
    form_coupon.classList.add('active');
});

document.querySelector('.coupon-body .coupon-container .form-back-btn').addEventListener('click', () => {
    form_coupon.classList.remove('active');
});

form_coupon.addEventListener('click', (e) => {
    if(e.target.id == 'form-coupon'){
        form_coupon.classList.remove('active');
    }
});





const title_change_list = document.querySelectorAll('.change-option .change-option-container .change-option-body .title-change .select-swap .select-item');
const type_change_list = document.querySelectorAll('.change-option .change-option-container .change-option-body .type-change .select-swap .select-item');

title_change_list.forEach((item) => {
    item.addEventListener('click', () => {
        title_change_list.forEach((e) => {
            e.classList.remove('active');
        });
        item.classList.add('active');
    });
});

type_change_list.forEach((item) => {
    item.addEventListener('click', () => {
        type_change_list.forEach((e) => {
            e.classList.remove('active');
        });
        item.classList.add('active');
    });
});








const form_change_option = document.querySelector('#change_option');

const cart_item_list = document.querySelectorAll('.cart-list .cart-item');
cart_item_list.forEach((item) => {
    const change_option_btn = item.querySelector('.item-information .item-other .editor-variant button');
    change_option_btn.addEventListener('click', () => {
        form_change_option.classList.add('active');
    });
});

document.querySelector('.change-option .change-option-container .change-option-head .change-option-close').addEventListener('click', (e) => {
    form_change_option.classList.remove('active');
});

form_change_option.addEventListener('click', (e) => {
    if(e.target.id == 'change_option'){
        form_change_option.classList.remove('active');
    }
});