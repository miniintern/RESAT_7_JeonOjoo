document.addEventListener('DOMContentLoaded', () => {
    const prevButton = document.getElementById('prev-mon');
    const nextButton = document.getElementById('next-mon');
    const currentMonthDisplay = document.getElementById('curent-mon');
    const calendarGrid = document.querySelector('.calendar-grid');
    const memoContainer = document.querySelector('.memo-container');
    const memoInput = document.getElementById('memo-input');
    const saveButton = document.getElementById('save-memo');
    const deleteButton = document.getElementById('delete-memo');

    // 현재 날짜를 기준으로 달력을 설정한다.
    let currentMonth = new Date();

    // 달력을 렌더링
    const renderCalendar = () => {
        // 달의 첫번째 날과 마지막 날을 구한다. 
        const firstDayOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1);
        const lastDayOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0);

        // 현재 달의 첫 날이 시작하는 요일의 인덱스를 구함 / 0: 일요일, 1:월요일, 2:화요일, 3:수요일, 4:목요일, 5:금요일, 6:토요일
        const startDay = firstDayOfMonth.getDay();


        // 달력 그리드를 초기화
        calendarGrid.innerHTML = '';

        // 첫 요일 전까지 빈 칸으로 채움.
        // i=0 (일요일) 부터 startDay(첫 요일) 전까지 빈 칸으로 채우는 것
        for (let i = 0; i < startDay; i++) {
            const emptyCell = document.createElement('div');
            emptyCell.classList.add('calendar-day', 'empty');
            calendarGrid.appendChild(emptyCell);
     }

        // 첫날부터 마지막 날까지 날짜 채우기
        for (let day = firstDayOfMonth; day <= lastDayOfMonth; day.setDate(day.getDate() + 1)) {
            const dayElement = document.createElement('div');
            dayElement.classList.add('calendar-day');
            dayElement.textContent = day.getDate();
            dayElement.dataset.date = day.toISOString().split('T')[0];

            // 로컬 스토리지에서 메모를 확인하고 표시
            if (localStorage.getItem(dayElement.dataset.date)) {
                dayElement.classList.add('has-memo');
            }

            // 만약 날짜를 클릭하면 -> 메모패드 열기
            dayElement.addEventListener('click', () => selectDate(dayElement.dataset.date));
            calendarGrid.appendChild(dayElement);
        }

        // 현재 연/월 표시
        currentMonthDisplay.textContent = `${currentMonth.getFullYear()}년 ${currentMonth.getMonth() + 1}월`;
    };


    // 선택한 날짜에 대한 메모 편집 함수
    const selectDate = (dateString) => {
        memoContainer.style.display = 'flex';
        // 메모의 입력란의 값을 현재 메모 dataString 가져온 것으로 설정
        memoInput.value = localStorage.getItem(dateString) || '';
        memoInput.focus();
        // 저장 버튼과 삭제 버튼 클릭시 이벤트 처리
        saveButton.onclick = () => saveMemo(dateString);
        deleteButton.onclick = () => deleteMemo(dateString);
    };

    const saveMemo = (dateString) => {
        localStorage.setItem(dateString, memoInput.value);
        memoContainer.style.display = 'none';
        renderCalendar();
    };

    const deleteMemo = (dateString) => {
        localStorage.removeItem(dateString);
        memoContainer.style.display = 'none';
        renderCalendar();
    };


    // 이전 달 이동할 때 이벤트 처리
    prevButton.addEventListener('click', () => {
        currentMonth.setMonth(currentMonth.getMonth() - 1);
        renderCalendar();
    });


    // 다음 달 이동 시 이벤트 처리
    nextButton.addEventListener('click', () => {
        currentMonth.setMonth(currentMonth.getMonth() + 1);
        renderCalendar();
    });

    renderCalendar();
});
