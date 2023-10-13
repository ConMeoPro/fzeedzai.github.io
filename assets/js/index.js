fetch('https://api.ipify.org?format=json')
    .then(response => response.json())
    .then(data => {
        const ip = data.ip;
        console.log('Hello, your IP Adress is :',ip);
        console.warn("⚠Don't try to attack my website ⚠")
    })
    .catch(error => {
        console.error('Lỗi khi lấy địa chỉ IP:', error);
    });


var getBody = document.querySelector('body');
getBody.innerHTML = `
<div id="main">
    <div id="header">
      <div id="nav"></div>
      <div id="slider"></div>
      <div id="content">
    <div class="content__music"></div>
    <div class="text-center"></div>
    <box1 class="box1"></box1>
      <div class="boxes">
  <boxes></boxes>
  </div>
      </div>
    </div>
    <div id="footer">
      <div class="ban-quyen"></div>
    </div>`;
const navElements = document.getElementById('nav');

navElements.innerHTML = `
    <li><a id="home-href" class="active"></a></li>
    <li><a id="features-href"></a></li>
    <li><a id="contact-href"></a></li>
    <li><a id="about-href"></a></li>
    <li><a id="more-href"></a></li>
`;

const getHome = document.getElementById('home-href');
const getFeatures = document.getElementById('features-href');
const getContact = document.getElementById('contact-href');
const getAbout = document.getElementById('about-href');
const getMore = document.getElementById('more-href');

getFeatures.setAttribute('href','./other/features.html');
getFeatures.textContent = 'Features';

getContact.setAttribute('href','./other/contact.html');
getContact.textContent = 'Contact';

getAbout.setAttribute('href','./other/about.html');
getAbout.textContent = 'About';

getHome.setAttribute('href','#');
getHome.textContent = 'Home';

getMore.setAttribute('href','#');
getMore.textContent = 'More';



const getSlider = document.getElementById('slider');
getSlider.innerHTML = '<div id="video-background"><video autoplay muted loop><source src="./assets/media/videoplayback.mp4" type="video/mp4"></video></div>'


const getFooter = document.querySelector('#footer .ban-quyen');
getFooter.innerHTML = `
<p>Copyrights by</p>
<strong><a href="https://facebook.com/ZeeYewEm" >@Zee Yew Em</a></strong>
`;

const getTextcenter = document.querySelector('#content .text-center');
getTextcenter.innerHTML = `
      <h1 style="padding-top: 50px;text-shadow: 0px 10px 100px cyan;">Freeze Dzai</h1>
      <h5 style="padding-top: 50px;">Tao thật sự rất ghét bị thua cuộc.</h5>
      <h2 style="padding-top: 50px;">Why choose us?</h2>
`;

document.querySelector('.box1').innerHTML = '<a href="./other/features.html">[+] My projects</a>';
document.querySelector('.content__music').innerHTML = '<audio autoplay loop><source src="./assets/media/backgroundmusic.mp3" type="audio/mpeg"></audio>';

const getBoxes = document.querySelector('.boxes');
getBoxes.innerHTML = `<boxwhy class="boxwhy why-col">
<div style="color: white;float: left;line-height: 150%;font-size: 25px;" class="ti-money"></div>
 <a>Cheap</a>
</boxwhy>

<boxwhyg class="boxwhyg why-col" style="float: right;">
    <div style="color: white;float: left;line-height: 150%;font-size: 25px;" class="ti-lock"></div>
     <a>Secure</a>
 </boxwhyg>`;
