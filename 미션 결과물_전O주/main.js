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


document.getElementById('login-form').addEventListener('submit', function(event) {
    var userId = document.getElementById('id_form').value;
    var password = document.getElementById('psd_form').value;

    // 아이디 또는 비밀번호가 공란인지 검사
    if (userId === '' || password === '') {
        event.preventDefault(); // 폼 제출 방지
        alert('아이디 혹은 비밀번호가 입력되지 않았습니다.');
    } else if (userId === '1010' && password === '1010') {
        // 로그인 성공 처리
        event.preventDefault(); // 폼 제출 방지
        alert('로그인이 되었습니다. !');
    } else {
        // 로그인 실패 처리
        event.preventDefault(); // 폼 제출 방지
        alert('아이디 또는 비밀번호가 잘못되었습니다.');
    }
});

