document.getElementById('hamburger-menu').addEventListener('click', function() {
    var navMenu = document.getElementById('nav-menu');
    if (navMenu.style.display === 'block') {
        navMenu.style.display = 'none';
    } else {
        navMenu.style.display = 'block';
    }
});

// 햄버거 메뉴 아이콘에 마우스가 올라갔을 때 이벤트 리스너 추가
document.getElementById('hamburger-menu').addEventListener('mouseenter', function() {
    // 'nav-menu' ID를 가진 요소를 찾아 navMenu 변수에 할당
    var navMenu = document.getElementById('nav-menu');
    // navMenu의 display 스타일을 'block'으로 설정하여 메뉴를 표시
    navMenu.style.display = 'block';
});

// nav-menu 에 마우스가 올라갔을 때 이벤트 리스너 추가
document.getElementById('nav-menu').addEventListener('mouseenter', function() {
    // 'nav-menu' ID를 가진 요소를 찾아 navMenu 변수에 할당
    var navMenu = document.getElementById('nav-menu');
    // navMenu의 display 스타일을 'block'으로 설정하여 메뉴를 표시
    navMenu.style.display = 'block';
});

// 햄버거 메뉴 아이콘에서 마우스가 벗어났을 때 이벤트 리스너 추가
document.getElementById('hamburger-menu').addEventListener('mouseleave', function() {
    // 'nav-menu' ID를 가진 요소를 찾아 navMenu 변수에 할당
    var navMenu = document.getElementById('nav-menu');
    // navMenu의 display 스타일을 'none'으로 설정하여 메뉴를 숨김
    navMenu.style.display = 'none';
});

