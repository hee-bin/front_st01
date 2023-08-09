/* <!DOCTYPE html>
<html lang="en">
<head>
    <!-- 기타 메타 태그 및 스타일 -->
</head>
<body>
    <div>
        <input type="text" id="inputWord" placeholder="단어를 입력하세요">
        <button id="addButton">추가</button>
    </div>
    <div id="textContainer" style="max-height: 200px; overflow-y: auto;">
        <!-- 추가된 텍스트가 표시될 곳 -->
    </div>

    <script>
        const addButton = document.getElementById('addButton');
        const textContainer = document.getElementById('textContainer');
        const inputWord = document.getElementById('inputWord');

        addButton.addEventListener('click', function() {
            const word = inputWord.value;
            if (word) {
                const textElement = document.createElement('p');
                textElement.textContent = word;
                textContainer.appendChild(textElement);
                inputWord.value = ''; // 입력 필드 초기화
                textContainer.scrollTop = textContainer.scrollHeight; // 스크롤을 맨 아래로 이동
            }
        });
    </script>
    
</body>
</html> */

document.getElementById('add').onclick=(e)=>{

    e.preventDefault();
    //console.log(e.target);

    let name = document.getElementById('name').value;
    let txt = document.createTextNode(name);
    let ele_li = document.createElement('li');


    ele_li.appendChild(txt);
    console.log(ele_li);


    let result = document.getElementById('list1')
    result.appendChild(ele_li);

}