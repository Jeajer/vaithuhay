const input_list = document.querySelectorAll('.field');
const inventory_district = document.getElementById('inventory_district');
const inventory_ward = document.getElementById('inventory_ward');

input_list.forEach((input) => {
    const field_text = input.querySelector('.field-input-wrapper .field-input');
    field_text.addEventListener('change', function () {
        if(field_text.value == "") {
            input.classList.remove('active');
            if(input.id == 'inventory_province'){
                inventory_district.style.display = 'none';
                inventory_ward.style.display = 'none';
            }
            else if(input.id == 'inventory_district'){
                inventory_ward.style.display = 'none';
            }
        }
        else{
            input.classList.add('active');
            if(input.id == 'inventory_province'){
                inventory_district.style.display = 'inline';
            }
            else if(input.id == 'inventory_district'){
                inventory_ward.style.display = 'inline';
            }
        }
    });
});


document.querySelector('.cart .coupon .field-input-wrapper .field-input').addEventListener('change', function() {
    if(this.value == ""){
        document.querySelector('.cart .coupon').classList.remove('active');
    }
    else{
        document.querySelector('.cart .coupon').classList.add('active');
    }
});



document.querySelector('#step-footer-checkout .step-footer-continue-btn').addEventListener('click', function() {
    const button = this;
    button.classList.add('loading'); 

    setTimeout(function() {
        button.classList.remove('loading'); 
    }, 3000);
});



document.getElementById('pick_at_location_false').addEventListener('change', function() {
    if(this.checked){
        document.getElementById('location_shipping').style.display = 'table';
        document.getElementById('location_shipping_spec').style.display = 'inline';
        document.getElementById('location_inventory').style.display = 'none';
        document.getElementById('location_inventory_spec').style.display = 'none';
    }
});

document.getElementById('pick_at_location_true').addEventListener('change', function() {
    if(this.checked){
        document.getElementById('location_shipping').style.display = 'none';
        document.getElementById('location_shipping_spec').style.display = 'none';
        document.getElementById('location_inventory').style.display = 'table';
        document.getElementById('location_inventory_spec').style.display = 'inline';
    }
});

document.getElementById('payment_method_id_151901').addEventListener('change', function() {
    if(this.checked){
        document.getElementById('content_method_id_151901').style.display = 'block';
        document.getElementById('content_method_id_959388').style.display = 'none';
    }
});

document.getElementById('payment_method_id_959388').addEventListener('change', function() {
    if(this.checked){
        document.getElementById('content_method_id_151901').style.display = 'none';
        document.getElementById('content_method_id_959388').style.display = 'block';
    }
});

document.getElementById('payment_method_id_1000734000').addEventListener('change', function() {
    if(this.checked){
        document.getElementById('content_method_id_151901').style.display = 'none';
        document.getElementById('content_method_id_959388').style.display = 'none';
    }
});

document.getElementById('payment_method_id_1003717094').addEventListener('change', function() {
    if(this.checked){
        document.getElementById('content_method_id_151901').style.display = 'none';
        document.getElementById('content_method_id_959388').style.display = 'none';
    }
});




const coupon_list = document.querySelectorAll('.coupon-more-popup .coupon-more .coupon-popup-content .coupon-list .coupon-item');
coupon_list.forEach((item) => {
    const more_btn = item.querySelector('.item-btn .item-more-btn');
    const des = item.querySelector('.item-des');
    const des_short = item.querySelector('.item-des-short');

    more_btn.addEventListener('click',() =>{
        if(des_short.style.display == 'none'){
            des_short.style.display = 'block';
            des.style.display = 'none';
            more_btn.querySelector('.more-btn-title').innerHTML = 'xem chi tiết';
            more_btn.querySelector('i').style.transform = 'rotate(0deg)';
        }
        else{
            des_short.style.display = 'none';
            des.style.display = 'block';
            more_btn.querySelector('.more-btn-title').innerHTML = 'Thu gọn';
            more_btn.querySelector('i').style.transform = 'rotate(180deg)';
        }
    });
});



document.querySelector('.cart .discount .discount-title').addEventListener('click', function(){
    document.querySelector('.coupon-more-popup').classList.add('active');
});

document.querySelector('.coupon-more-popup .coupon-more .coupon-popup-title .coupon-close-btn').addEventListener('click', function(){
    document.querySelector('.coupon-more-popup').classList.remove('active');
});

document.querySelector('.coupon-more-popup').addEventListener('click', (e) => {
    if(e.target.id == 'coupon_popup'){
        document.querySelector('.coupon-more-popup').classList.remove('active');
    }
});