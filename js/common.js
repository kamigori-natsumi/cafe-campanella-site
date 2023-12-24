// 画像と対応するテキストの情報を配列で用意する。画像のファイルパスとそれに対応するテキスト情報がオブ←エクトとして格納されている
const imageData = [
  { imagePath: 'img/tentyo.jpg', text: '店長' },
  { imagePath: 'img/nikki.jpg', text: 'ニッキ' },
  { imagePath: 'img/sakura.jpg', text: 'サクラ' },
  { imagePath: 'img/cream.jpg', text: 'もか' },
  { imagePath: 'img/mochi.jpg', text: 'おもち' },
  { imagePath: 'img/arubino.jpg', text: 'おじき' }
];

// imageData 配列からランダムに1つの要素を選択し、
function getRandomImage() {
  if (imageData.length === 0) {
    return null; // データがない場合は null を返す
  }

  const randomIndex = Math.floor(Math.random() * imageData.length);
  return imageData.splice(randomIndex, 1)[0];
}

// 画像とテキストを表示する関数
function displayImageAndText(container, imageData) {
  const imageWrapper = document.createElement('div');
  imageWrapper.classList.add('image-wrapper');

  const img = document.createElement('img');
  img.src = imageData.imagePath;
  img.alt = 'Random Image';
  imageWrapper.appendChild(img);

  const text = document.createElement('p');
  text.textContent = imageData.text;
  imageWrapper.appendChild(text);

  container.appendChild(imageWrapper);
}

// 3枚のランダムな画像を選択して表示する関数
function selectAndDisplayImages() {
  // 画像コンテナの要素を取得
  const imageContainer = document.getElementById('image-container');

  // 3枚のランダムな画像を選択
  const selected1 = getRandomImage();
  const selected2 = getRandomImage();
  const selected3 = getRandomImage();

  // 画像とテキストを表示
  displayImageAndText(imageContainer, selected1);
  displayImageAndText(imageContainer, selected2);
  displayImageAndText(imageContainer, selected3);
}

// 画像とテキストを選択して表示する関数を実行
selectAndDisplayImages();




// スワイパー
const swiper = new Swiper(".swiper", {
  loop: true, //繰り返し指定
  autoplay: {
    delay: 0,
  },
  speed: 6000,
  slidesPerView: 2,
  spaceBetween: 10, //スライド間の余白
});


const swiper2 = new Swiper(".swiper2", {
  slidesPerView: 2,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  pagination: {
    el: ".swiper-pagination", //必須の設定：ページネーションのclass指定
    type: "bullets",
    clickable: "clickable"
  },
  loop: true, //繰り返し指定
  spaceBetween: 10 //スライド感の余白
});



document.addEventListener("scroll", function() {
  const scrollPosition = window.scrollY;
  const header = document.querySelector('.accordionLogo');

  if (scrollPosition > 350) {
      header.style.top = "0";
  } else {
      header.style.top = "-350px"; 
  }
});


function toggleAccordion() {
  const accordionContent = document.querySelector('.accordion-item');

  if (accordionContent.style.display === 'none') {
      accordionContent.style.display = 'block';
  } else {
      accordionContent.style.display = 'none';
  }
}




// ローディングアニメーション
window.addEventListener('load', loadingWindow);

        function loadingWindow() {

            setTimeout(function () {

                document.getElementById('loading').classList.add('loaded');


            }, 3000);
        };
// window.onload=function(){
//   setTimeout(function () {
//     const contents=document.getElementById("contents");
//     const loading=document.getElementById("loading");
//     loading.style.display="none";
//     contents.style.display="block";
// },3000);
// };



// 対象の要素を全て取得（共通のクラス名がついている要素）
const tytle = document.querySelectorAll('.star'); 

//　要素がビューポート内に入っているかどうか確認してクラスと付け外しを行う関数
function observation(){
    // 取得した全ての対して処理を繰り返すためにforEach関数を使って処理する
    tytle.forEach(function(target) {
        // 要素の位置情報を取得
        const targetRect = target.getBoundingClientRect();

        // 画面内に入っているかどうかを判定
        if (targetRect.top < window.innerHeight && targetRect.bottom >= 0) {
            // 画面内に入った場合、クラスを付与
            target.classList.add('shooting'); // yourClassNameは付与したいクラス名に置き換えてください
        } else {
            // 画面外に出た場合、クラスを除去
            target.classList.remove('shooting');
        }
    });
};

// スクロールイベントを追加
window.addEventListener('scroll', observation);