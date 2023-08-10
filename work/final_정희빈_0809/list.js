
// Add 버튼 클릭 시 또는 엔터 키 입력 시 리스트에 단어 추가
document.getElementById('add').onclick = (e) => {
    addListItem();
};

document.getElementById('name').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        addListItem();
    }
});

// 리스트 아이템 추가 함수
function addListItem() {
    let name = document.getElementById('name').value;
    if (name.trim() === '') {
        return; // 값이 비어있으면 추가하지 않음
    }

    let txt = document.createTextNode(name);
    let ele_li = document.createElement('li');
    ele_li.appendChild(txt);

    let result = document.getElementById('list1');
    result.appendChild(ele_li);


    ele_li.onclick = () => {
        ele_li.classList.toggle('active'); // 배경색을 토글
    };

    result.style.overflowY = 'scroll';

    document.getElementById('name').value = '';

    // 더블클릭 인식 후 삭제
    let lastClickTime = 0;
    const DOUBLE_CLICK_THRESHOLD = 300; // 더블클릭으로 인식될 시간 간격 (300ms)

    ele_li.addEventListener('click', (e) => {
        let currentTime = new Date().getTime();
        if (currentTime - lastClickTime < DOUBLE_CLICK_THRESHOLD) {
            // 더블클릭으로 판단
            console.log("Double Clicked:", e.target);
            e.target.remove();
        } else {
            // 클릭으로 판단
            console.log("Clicked:", e.target);
        }
        lastClickTime = currentTime;
    });
}





// Send 버튼 클릭 시 list1의 선택된 단어를 list2로 이동
document.getElementById('send').onclick = () => {
    let list1 = document.getElementById('list1');
    let list2 = document.getElementById('list2');
    
    let selectedItems = list1.querySelectorAll('li.active');

    selectedItems.forEach(item => {
        item.classList.remove('active'); // 배경색 클래스 제거
        list2.appendChild(item);
    });

    list2.style.overflowY = 'scroll';
};


// Back 버튼 클릭 시 list2의 선택된 단어를 list1로 이동
document.getElementById('back').onclick = () => {
    let list1 = document.getElementById('list1');
    let list2 = document.getElementById('list2');

    let selectedItems = list2.querySelectorAll('li.active');

    selectedItems.forEach(item => {
        item.classList.remove('active');
        list1.appendChild(item);
    });

};

