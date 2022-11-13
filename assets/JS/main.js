function changeProductList(type, element) {
    let otherFilter = document.getElementsByClassName('home-filter_btn')
    for (var i = 0; i < otherFilter.length; i++) {
        // Object.assign(otherFilter[i].style, {
        //     backgroundColor: '#f5f5f5',
        //     color: '#333'
        // })
        otherFilter[i].style.background = '#f5f5f5'
        otherFilter[i].style.color = '#333'
        
    }
    // element.classList.add("btn--primary")
    element.style.background = '#EE4D2D';
    element.style.color = '#fff';
    
    document.getElementById(type).style.display = 'flex';

    switch (type) {
        case 'popular':
            document.getElementById('newest').style.display = 'none';
            document.getElementById('best-sell').style.display = 'none';
            break;
        case 'newest':
            document.getElementById('popular').style.display = 'none';
            document.getElementById('best-sell').style.display = 'none';
            break;
        case 'best-sell':
            document.getElementById('popular').style.display = 'none';
            document.getElementById('newest').style.display = 'none';       
            break;                    
    }
}


// Hiện form đăng ký/đăng nhập
function formLogin() {
    var formElement = document.querySelector(".form");
    formElement.style.display = 'block';
    
}


