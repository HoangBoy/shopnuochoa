
const listImage = document.querySelector('.list-images');
const imgs = document.getElementsByTagName('img');
const btnLeft = document.querySelector('.btn-left');
const btnRight = document.querySelector('.btn-right');
const length = imgs.length;
let current = 0;

const handleChangeSlide = () => {
  if (current === length - 1) {
    listImage.style.transform = 'translateX(0)';
    current = 0;
  } else {
    current++;
    listImage.style.transform = `translateX(-${current * 100}%)`;
  }

  document.querySelector('.active').classList.remove('active');
  document.querySelector('.index-item-' + current).classList.add('active');
};

let slideInterval = setInterval(handleChangeSlide, 3000);

btnRight.addEventListener('click', () => {
  handleChangeSlide();
});

btnLeft.addEventListener('click', () => {
  if (current === 0) {
    current = length - 1;
    listImage.style.transform = `translateX(-${current * 100}%)`;
  } else {
    current--;
    listImage.style.transform = `translateX(-${current * 100}%)`;
  }

  document.querySelector('.active').classList.remove('active');
  document.querySelector('.index-item-' + current).classList.add('active');
});

const restartSlideInterval = () => {
  clearInterval(slideInterval);
  slideInterval = setInterval(handleChangeSlide, 3000);
};

listImage.addEventListener('mouseover', restartSlideInterval);
listImage.addEventListener('touchstart', restartSlideInterval);

// form 64 tinh thanh VN





//



function checkTime(i){
  if( i < 10){
      i = "0" + i;
  }
  return i ;
}


function thoiGian(){

  // khoi tao doi tuong Date
  var ngay = new Date();

  var h = ngay.getHours();
  var m = ngay.getMinutes();
  var s = ngay.getSeconds();

  m = checkTime(m);
  s = checkTime(s);

   var time = document.getElementById('demo');
   time.innerHTML = h +":" +m +":"+ s ;

   var t = setTimeout(
   thoiGian
   , 500);
}
  thoiGian();