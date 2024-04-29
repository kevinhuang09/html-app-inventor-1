// 定義台灣縣市及對應的 HTML 文件名稱
const citiesAndFiles = {
    '選擇一個縣市': '',
    '基隆市': 'a001.html',
    '台北市': 'a002.html',
    '新北市': 'a003.html',
    '桃園市': 'a004.html',
    '新竹市': 'a005.html',
    '新竹縣': 'a006.html',
    '苗栗縣': 'a007.html',
    '台中市': 'a008.html',
    '彰化縣': 'a009.html',
    '南投縣': 'a010.html',
    '雲林縣': 'a011.html',
    '嘉義市': 'a012.html',
    '嘉義縣': 'a013.html',
    '台南市': 'a014.html',
    '高雄市': 'a015.html',
    '屏東縣': 'a016.html',
    '台東縣': 'a017.html',
    '花蓮縣': 'a018.html',
    '宜蘭縣': 'a019.html',
    '澎湖縣': 'a020.html',
    '金門縣': 'a021.html',
    '連江縣': 'a022.html'
};

// 獲取下拉式選單元素
const cityDropdown = document.getElementById('menu');

// 初始化下拉式選單
function initializeDropdown() {
    // 清空下拉式選單
    cityDropdown.innerHTML = '';

    // 遍歷 citiesAndFiles 對象,創建選項並添加到下拉式選單中
    Object.keys(citiesAndFiles).forEach(city => {
        const option = document.createElement('option');
        option.value = city;
        option.text = city;
        cityDropdown.add(option);
    });

    // 將下拉式選單的值設置為第一個選項
    cityDropdown.value = '選擇一個縣市';
    cityDropdown.selectedIndex = 0;
}

// 監聽下拉式選單的 change 事件
cityDropdown.addEventListener('change', () => {
    const selectedCity = cityDropdown.value;
    const htmlFileName = citiesAndFiles[selectedCity];

    if (htmlFileName) {
        const url = `${htmlFileName}`;
        window.location.href = url;
    }
});

// 在頁面載入時執行初始化下拉式選單
window.onload = function() {
    initializeDropdown();

    // 監聽返回按鈕的點擊事件,當返回時初始化下拉式選單
    const backButton = document.getElementById("backButton");
    backButton.addEventListener("click", function() {
        initializeDropdown();
        window.history.back();
    });
};

// 對話框內容
const dialogText = "歡迎來到台灣的地理基礎知識教學。點擊開始學習吧!";

// 獲取對話框元素
const dialogBox = document.getElementById("dialogBox");

// 將對話框內容按照每行15個字進行分段，並加入換行符號
let wrappedText = '';
for (let i = 0; i < dialogText.length; i += 15) {
    wrappedText += dialogText.slice(i, i + 15) + '\n';
}

// 設置定時器，每隔一段時間將文字加入對話框中，實現慢慢印出效果
let index = 0;
const intervalId = setInterval(function() {
    if (index < wrappedText.length) {
        dialogBox.innerText += wrappedText.charAt(index);
        index++;
    } else {
        clearInterval(intervalId); // 停止定時器
    }
}, 50); // 每隔50毫秒印出一個字
