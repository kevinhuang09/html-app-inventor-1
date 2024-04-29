// 獲取首頁連結元素
const homeLink1 = document.getElementById("home-link1");
const homeLink2 = document.getElementById("home-link2");
const homeLink3 = document.getElementById("home-link3");

// 獲取圖片元素
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");
const image4 = document.getElementById("image4");
const image5 = document.getElementById("image5");

//獲取容器元素
const imageContainer1 = document.getElementById("image-container1");
const imageContainer2 = document.getElementById("image-container2");
const imageContainer3 = document.getElementById("image-container3");

const backButton1 = document.getElementById("backButton1");
const backButton2 = document.getElementById("backButton2");

const dialogText2 = "測試歡迎來到基隆市介紹，選擇上方項目清單，";
const dialogBox2 = document.getElementById("dialogBox2");

const dialogText = "歡迎來到基隆市介紹，選擇上方項目清單，開始學習吧~";
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

// 添加點擊事件監聽器
homeLink1.addEventListener("click", function(event) {
    // 阻止默認事件
    event.preventDefault();
    dialogBox2.innerText = "";
    // 控制圖片
    image1.style.display = "block";
    image2.style.display = "none";
    image3.style.display = "none";
    image4.style.display = "none";
    image5.style.display = "none";
    // 控制容器
    imageContainer1.style.display="inline";
    imageContainer2.style.display="none";
    imageContainer3.style.display="none";
    //控制對話框一
    dialogBox.style.display="none";
    //控制對話框二
    dialogBox2.style.display="inline";
    //控制按鈕一
    backButton1.style.display="none";
    
    // 延遲顯示地理位置文字介紹
    setTimeout(function() {
        
        let wrappedText2 = '';
        for(let i=0;i<dialogText2.length;i+=15){
            wrappedText2+=dialogText2.slice(i,i+15)+'\n';
        }
        let index2 = 0;
        const intervalId2 = setInterval(function() {
            if (index2 < wrappedText2.length) {
                dialogBox2.innerText += wrappedText2.charAt(index2);
                index2++;
            } else {
                clearInterval(intervalId2); // 停止定時器
                //控制按鈕二
                backButton2.style.display="inline";
            }
        }, 50); // 每隔50毫秒印出一個字
    }, 1000); // 1000 毫秒後顯示地理位置文字介紹
    
});


homeLink2.addEventListener("click", function(event) {
    // 阻止默認事件
    event.preventDefault();
    // 控制圖片
    image1.style.display = "none";
    image2.style.display = "none";
    image3.style.display = "none";
    image4.style.display = "block";
    image5.style.display = "block";
    // 控制容器
    imageContainer1.style.display="none";
    imageContainer2.style.display="inline";
    imageContainer3.style.display="none";
    //控制對話框一
    dialogBox.style.display="none";
    //控制對話框二
    dialogBox2.style.display="none";
    //控制按鈕一
    backButton1.style.display="none";
    //控制按鈕二
    backButton2.style.display="inline";
});

homeLink3.addEventListener("click", function(event) {
    // 阻止默認事件
    event.preventDefault();
    // 控制圖片
    image1.style.display = "none";
    image2.style.display = "none";
    image3.style.display = "none";
    image4.style.display = "none";
    image5.style.display = "none";
    // 控制容器
    imageContainer1.style.display="none";
    imageContainer2.style.display="none";
    imageContainer3.style.display="inline";
    //控制對話框一
    dialogBox.style.display="none";
    //控制對話框二
    dialogBox2.style.display="none";
    //控制按鈕一
    backButton1.style.display="none";
    //控制按鈕二
    backButton2.style.display="inline";
});
//聽返回按鈕的點擊事件
backButton1.addEventListener("click", function() {
    // 使用 window.history.back() 方法返回上一個歷史記錄
    // url1="file.html";
    // window.open(url1, "_blank");
    window.location.href = "file.html";
    // window.history.back();
});
backButton2.addEventListener("click", function() {
    // 使用 window.history.back() 方法返回上一個歷史記錄
    // url1="file.html";
    // window.open(url1, "_blank");
    window.location.href = "file.html";
    // window.history.back();
});
