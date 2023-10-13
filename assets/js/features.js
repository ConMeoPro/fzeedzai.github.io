var getBody = document.querySelector('body');
getBody.innerHTML = `
<div id="main">
    <div id="header">
      <div id="nav"></div>
      </div>
    <div id="video-background">
        <video autoplay muted loop>
            <source src="https://freezestore.site/assets/media/videoplayback.mp4" type="video/mp4">
        </video>
    </div>
    <div class="text-center">
      <h1 style="padding-top: 100px;">Features</h1>
      <h5></h5>
    </div>
  <div class="boxes">
   <box1 class="box1">
     <a href="https://www.facebook.com/ZeeYewEm/">[+] Support</a>
   </box1>
  <div style="position: absolute;top: 500px;" class="project-card">
      <div class="project-image">
        <img src="https://freezestore.site/assets/pictures/fsbanner.png">
      </div>
      <div class="project-info">
        <p style="color: #fff;" class="project-category">Game Services</p>
                    <strong class="project-title">
                      <span style="color: #fff;">Blox Fruits</span>               
                    <h4 style="color: #fff;"> | Status: </h4>
                    <h4 style="color: green;">Working</h4>
        <div class="box">
        </strong>
                        <ul>
                            <li>
                                <p class="Tabs">[ Main ]</p>
                                <ul>
                                   <li>
                                     +Level
                                        <ul class="More">
                                            <li>&nbsp;&nbsp;&nbsp;&nbsp;- 1-700 : $1</li>
                                            <li>&nbsp;&nbsp;&nbsp;&nbsp;- 700-1500 : $1</li>
                                            <li>&nbsp;&nbsp;&nbsp;&nbsp;- 1500-2450 : $1</li>
                                            <li>&nbsp;&nbsp;&nbsp;&nbsp;- 1-2450 : $2</li>
                                        </ul>
                                   </li>
                                </ul>
                                          <ul>
                                   <li>
                                     +Currency
                                        <ul class="More">
                                          <li>&nbsp;&nbsp;&nbsp;&nbsp;- 10K Fragments : $1</li>
                                          <li>&nbsp;&nbsp;&nbsp;&nbsp;- 10M Beli : $2</li>
                                        </ul>
                                   </li>
                                  <ul>
                            <li>
                                <p class="Tabs">[ Item ]</p>
                                <ul>
                                   <li>
                                  <li>
                                        + Item
                                        <ul class="More">
                                            <li>&nbsp;&nbsp;&nbsp;&nbsp;- Mythical(No DB) : $4</li>
                                            <li>&nbsp;&nbsp;&nbsp;&nbsp;- Legendary(No Tushita) : 2$</li>
                                            <li>&nbsp;&nbsp;&nbsp;&nbsp;- Tushita : 3$</li>
                                            <li>&nbsp;&nbsp;&nbsp;&nbsp;- True Triple Katana : $5</li>
                                        </ul>
                                  </li>
                                  <li>
                                        + Bounty
                                        <ul class="More">
                                            <li>&nbsp;&nbsp;&nbsp;&nbsp;- Get Summon Seabeast : $15</li>
                                            <li>&nbsp;&nbsp;&nbsp;&nbsp;- 1M/$1</li>
                                        </ul>
                                  </li>
                                  <li>
                                        + Fruits
                                        <ul class="More">
                                            <li>&nbsp;&nbsp;&nbsp;&nbsp;- 3M+ Fruits : $3</li>
                                            <li>&nbsp;&nbsp;&nbsp;&nbsp;- 2M+ Fruits : $2</li>
                                            <li>&nbsp;&nbsp;&nbsp;&nbsp;- Leopard , Dough : 4$</li>
                                        </ul>
                                </ul>
                            </li>
                        </ul>


                                            
      <div style="position: absolute;top: -21px;left: 400px;" class="project-card">
      <div class="project-image">
        <img src="https://freezestore.site/assets/pictures/fsbanner.png">
      </div>
      <div class="project-info">
        <p style="color: #fff;" class="project-category">Tool Projects</p>
                    <strong style="color: black;"class="project-title">
                      <span style="color: #fff;">Zee Spammer</span>                
                    <h4 style="color: #fff;"> | Status: </h4>
                    <h4 style="color: var(--status-color);display: inline-block;">Working</h4>
                    </strong>
        <div class="box">
                        <ul>
                            <li>
                                <p class="Tabs">[ Function ]</p>
                                <ul>
                                   <li>
                                     Spam
                                        <ul class="More">
                                            <li>&nbsp;&nbsp;&nbsp;&nbsp;- Works on Facebook and messenger</li>
                                        </ul>
                                   </li>
                                   <li>
                                   Languages(Paid)
                                     <ul class="More">
                                       <li>&nbsp;&nbsp;&nbsp;&nbsp; - Vietnamese</li>
                                       <li>&nbsp;&nbsp;&nbsp;&nbsp; - English</li>
                                     </ul>
                                   Custom message(Paid and Free)
                                   <ul class="More">
                                 </ul>
                                   </li>
                                </ul>
                              <ul>
                            <li>
                                <p class="Tabs">[ Logs ]</p>
                                <ul>
                                   <li>
                                          <ul>
                                   <li>
                                     Updates Log
                                        <ul class="More">
                                          <li>&nbsp;&nbsp;&nbsp;&nbsp;- 9/10/2023 : Fixed Download error</li>
                                          <li>&nbsp;&nbsp;&nbsp;&nbsp;- 9/11/2023 : Added messages status</li>
                                          <li>&nbsp;&nbsp;&nbsp;&nbsp;- 10/5/2023 : Added Premium Version</li>

                                        </ul>
                                   </li>
                                  <ul>
                            <li>
                                <p class="Tabs">[ Download ]</p>
                                <ul>
                                   <li>
                                  <li>
                                        Links
                                        <ul class="More">
<li><a href="https://web1s.me/ckEvE3MdVQ">&nbsp;&nbsp;&nbsp;&nbsp;- Web1s(Trial) : Click Here</a></li>
<li>&nbsp;&nbsp;&nbsp;&nbsp;- Discord : Updating</li>
<li>&nbsp;&nbsp;&nbsp;&nbsp;- Premium : Updating</li>
                                        </ul>
                                  </li>
                                  
                                </ul>
                            </li>
                        </ul>
                                          </ul>
                                   </li>
                                </ul>
                            </li>
                              </ul>
                            </li>
                        </ul>
        </div>
      </div>
      </div>
                                          </ul>
                            </li>
                        </ul>
      </div>
  </div>`;
  





const navElements = document.getElementById('nav');

navElements.innerHTML = `
    <li><a id="home-href"></a></li>
    <li><a id="features-href" class="active"></a></li>
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

getContact.setAttribute('href','./contact.html');
getContact.textContent = 'Contact';

getAbout.setAttribute('href','./other/about.html');
getAbout.textContent = 'About';

getHome.setAttribute('href','../index.html');
getHome.textContent = 'Home';

getMore.setAttribute('href','#');
getMore.textContent = 'More';

const getHeading = document.querySelector('.text-center h1');
getHeading.setAttribute('autofocus',true);
