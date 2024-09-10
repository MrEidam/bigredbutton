const menu = `
<!-- Menu -->
  <div class="menu-container" onclick="">
    <div class="button">Menu
        <span class="fas">
          <svg height="1em" viewBox="0 0 448 512"><style>svg{fill:#ffffff}</style><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
          <svg height="1em" viewBox="0 0 384 512"><style>svg{fill:#ffffff}</style><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
        </span>
    </div>
    <ul style="display: none">
      <li><a onclick="toClick()" id="brb">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M0 55.2L0 426c0 12.2 9.9 22 22 22c6.3 0 12.4-2.7 16.6-7.5L121.2 346l58.1 116.3c7.9 15.8 27.1 22.2 42.9 14.3s22.2-27.1 14.3-42.9L179.8 320l118.1 0c12.2 0 22.1-9.9 22.1-22.1c0-6.3-2.7-12.3-7.4-16.5L38.6 37.9C34.3 34.1 28.9 32 23.2 32C10.4 32 0 42.4 0 55.2z"/></svg>
      </a></li>
      <li><a onclick="toShop()" id="shop">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 24C0 10.7 10.7 0 24 0L69.5 0c22 0 41.5 12.8 50.6 32l411 0c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3l-288.5 0 5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5L488 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg>
      </a></li>
      <li><a onclick="toUpgrade()" id="upg">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM151.2 217.4c-4.6 4.2-7.2 10.1-7.2 16.4c0 12.3 10 22.3 22.3 22.3l41.7 0 0 96c0 17.7 14.3 32 32 32l32 0c17.7 0 32-14.3 32-32l0-96 41.7 0c12.3 0 22.3-10 22.3-22.3c0-6.2-2.6-12.1-7.2-16.4l-91-84c-3.8-3.5-8.7-5.4-13.9-5.4s-10.1 1.9-13.9 5.4l-91 84z"/></svg>
      </a></li>
      <li><a onclick="toSetting()" id="sett">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"/></svg>
      </a></li>
    </ul>
</div>`;

const htmlTitle = `
<header>
<h1 id="tit">BRB THE GAME</h1>
</header>
<h3 id="heh"></h3>
<a onclick="toClick()">
<img src="./img/brb-still.png" draggable="false">
</a>

<div id="jonathan"></div>

<!-- Soc. -->
<div class="socmenu">
<li style="--i:1;--clr:#f00;">
    <a href="https://www.youtube.com/@mreidam" target="_blank"><img src="./img/youtube.svg"></a>
</li>
<li style="--i:2;--clr:#FF4500;">
    <a href="https://www.reddit.com/r/BRBGame/" target="_blank"><img src="./img/reddit.svg"></a>
</li>
<!-- <li style="--i:2;--clr:#00acee;">
    <a href="https://twitter.com/EidamMr" target="_blank"><img src="./img/twitter.svg"></a>
</li> -->
<div class="toggle" id="soctog">
    <svg height="1em" viewBox="0 0 512 512"><path d="M384 336a63.78 63.78 0 00-46.12 19.7l-148-83.27a63.85 63.85 0 000-32.86l148-83.27a63.8 63.8 0 10-15.73-27.87l-148 83.27a64 64 0 100 88.6l148 83.27A64 64 0 10384 336z" fill="currentColor"/></svg>
    <svg height="1em" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" fill="currentColor"/></svg>
</div>
</div>
<footer></footer>`;

const htmlClicking = `
<div id="jonathan"></div>
  
  <!-- Clicks -->
  <div id="logclick">
    <p id="disclick">
  </div>
  
  <!-- BRB -->
  <div id="button" onclick="clicking()">
    <img src="../img/brb-still.png" id="unpressed" draggable="false">
    <img src="../img/brb-pressed.png" id="pressed" draggable="false">
  </div>

  <!-- Šmol changelog -->
  <div class="changelog" onclick="change()">
    <svg height="1em" viewBox="0 0 512 512"><path d="M256 56C145.72 56 56 145.72 56 256s89.72 200 200 200 200-89.72 200-200S366.28 56 256 56zm0 82a26 26 0 11-26 26 26 26 0 0126-26zm48 226h-88a16 16 0 010-32h28v-88h-16a16 16 0 010-32h32a16 16 0 0116 16v104h28a16 16 0 010 32z" fill="currentColor"/></svg>
  </div>

  ${menu}`;

const htmlShop = `
  <!-- Clicks -->
    <section class="joe" id="jonathan">
      <div id="logclick">
        <img src="../img/icons8-rest.svg" id="imgcli" draggable="false">
        <p id="disclick"></p>
      </div>
    </section>
  
  
  
    <!-- I T E M S -->
    <main style="margin-top: 210px;">
      <article class="main">
        <!-- Dog -->
        <div class="item">
          <section class="title">
            <h2 id="disdogName"></h2>
            <img src="../img/dog.svg">
          </section>
          <div class="buttons" style="--Bcolor: darkorange">
            <button onclick="buydog()" class="buyone" id="dg1">
              Buy a Dog for 100 clicks
            </button>
            <button onclick="mxdg()" class="buymax">
              MAX
            </button>
          </div>
          
          <p id="disdog"></p>
        </div>
  
        <!-- Cat -->
        <div class="item">
          <section class="title">
            <h2 id="discatName"></h2>
            <img src="../img/cat-body.svg">
          </section>
          <div class="buttons" style="--Bcolor: orange">
            <button onclick="buycat()" class="buyone" id="ct1">
              Buy a Cat for 10 dogs
            </button>
            <button onclick="mxct()" class="buymax">
              MAX
            </button>
          </div>
          <div class="clickbtn" style="--Bcolor: orange">
            <button onclick="buyCcat()" class="buyone" id="Cct1">
              Buy a Cat for 1,2 k clicks
            </button>
            <button onclick="mxCct()" class="buymax">
              MAX
            </button>
          </div>
          <p id="discat"></p>
        </div>
  
        <!-- Fox -->
        <div class="item">
          <section class="title">
            <h2 id="disfoxName"></h2>
            <img src="../img/fox.svg">
          </section>
          <div class="buttons" style="--Bcolor: lightsalmon">
            <button onclick="buyfox()" class="buyone" id="fx1">
              Buy a Fox for 15 dogs
            </button>
            <button onclick="mxfx()" class="buymax">
              MAX
            </button>
          </div>
          <div class="clickbtn" style="--Bcolor: lightsalmon">
            <button onclick="buyCfox()" class="buyone" id="Cfx1">
              Buy a Fox for 1,8 k clicks
            </button>
            <button onclick="mxCfx()" class="buymax">
              MAX
            </button>
          </div>
          <p id="disfox"></p>
        </div>
  
        <!-- Wolf -->
        <div class="item">
          <section class="title">
            <h2 id="diswolName"></h2>
            <img src="../img/wolf.svg">
          </section>
          <div class="buttons" style="--Bcolor: lightgray">
            <button onclick="buywol()" class="buyone" id="wl1">
              Buy a Wolf for 6 dogs and 5 foxes
            </button>
            <button onclick="mxwl()" class="buymax">
              MAX
            </button>
          </div>
          <div class="clickbtn" style="--Bcolor: lightgray">
            <button onclick="buyCwol()" class="buyone" id="Cwl1">
              Buy a Wolf for 10 k clicks
            </button>
            <button onclick="mxCwl()" class="buymax">
              MAX
            </button>
          </div>
          <p id="diswol"></p>
        </div>
  
        <!-- Hamster -->
        <div class="item">
          <section class="title">
            <h2 id="dishamName"></h2>
            <img src="../img/hamster.svg" draggable="false">
          </section>
          <div class="buttons" style="--Bcolor: wheat">
            <button onclick="buyham()" class="buyone" id="hm1">
              Buy a Hamster for 1 wolf and 2 cats
            </button>
            <button onclick="mxhm()" class="buymax">
              MAX
            </button>
          </div>
          <div class="clickbtn" style="--Bcolor: wheat">
            <button onclick="buyCham()" class="buyone" id="Chm1">
              Buy a Hamster for 13 k clicks
            </button>
            <button onclick="mxChm()" class="buymax">
              MAX
            </button>
          </div>
          <p id="disham"></p>
        </div>
  
        <!-- Whales -->
        <div class="item">
          <section class="title">
            <h2 id="diswhaName"></h2>
            <img src="../img/whale.svg" draggable="false">
          </section>
          <div class="buttons" style="--Bcolor: MediumAquamarine">
            <button onclick="buywha()" class="buyone" id="wh1">
              Buy a Whale for 2 wolfs
            </button>
            <button onclick="mxwh()" class="buymax">
              MAX
            </button>
          </div>
          <div class="clickbtn" style="--Bcolor: MediumAquamarine">
            <button onclick="buyCwha()" class="buyone" id="Cwh1">
              Buy a Whale for 22 k clicks
            </button>
            <button onclick="mxCwh()" class="buymax">
              MAX
            </button>
          </div>
          <p id="diswha"></p>
        </div>
  
        <!-- Capybara -->
        <div class="item">
          <section class="title">
            <h2 id="discapName"></h2>
            <img src="../img/capybara.svg" draggable="false">
          </section>
          <div class="buttons" style="--Bcolor: rosybrown">
            <button onclick="buycap()" class="buyone" id="cp1">
              Buy a Capybara for 1 whale and 4 cats
            </button>
            <button onclick="mxcp()" class="buymax">
              MAX
            </button>
          </div>
          <div class="clickbtn" style="--Bcolor: rosybrown">
            <button onclick="buyCcap()" class="buyone" id="Ccp1">
              Buy a Capybara for 28 k clicks
            </button>
            <button onclick="mxCcp()" class="buymax">
              MAX
            </button>
          </div>
          <p id="discap"></p>
        </div>
  
        <!-- Platypus-->
        <div class="item">
          <section class="title">
            <h2 id="displaName"></h2>
            <img src="../img/platypus.svg" draggable="false">
          </section>
          <div class="buttons" style="--Bcolor: Sienna">
            <button onclick="buypla()" class="buyone" id="pl1">
              Buy a Platypus for 1 cappybarra and 1 wolf
            </button>
            <button onclick="mxpl()" class="buymax">
              MAX
            </button>
          </div>
          <div class="clickbtn" style="--Bcolor: Sienna">
            <button onclick="buyCpla()" class="buyone" id="Cpl1">
              Buy a Platapuse for 420 k clicks
            </button>
            <button onclick="mxCpl()" class="buymax">
              MAX
            </button>
          </div>
          <p id="displa"></p>
        </div>
  
        <!-- Porcupine -->
        <div class="item">
          <section class="title">
            <h2 id="disporName"></h2>
            <img src="../img/porcupine.svg" draggable="false">
          </section>
          <div class="buttons" style="--Bcolor: SaddleBrown">
            <button onclick="buypor()" class="buyone" id="pr1">
              Buy a Porcupine for 1 whale and 4 cats
            </button>
            <button onclick="mxpr()" class="buymax">
              MAX
            </button>
          </div>
          <div class="clickbtn" style="--Bcolor: SaddleBrown">
            <button onclick="buyCpor()" class="buyone" id="Cpr1">
              Buy a Porcupine for 28 k clicks
            </button>
            <button onclick="mxCpr()" class="buymax">
              MAX
            </button>
          </div>
          <p id="dispor"></p>
        </div>
  
        <!-- Hippopotamus -->
        <div class="item">
          <section class="title">
            <h2 id="dishipName"></h2>
            <img src="../img/hippopotamus.svg" draggable="false">
          </section>
          <div class="buttons" style="--Bcolor: LightSlateGray">
            <button onclick="buyhip()" class="buyone" id="hi1">
              Buy a Hippopotamus for
            </button>
            <button onclick="mxhi()" class="buymax">
              MAX
            </button>
          </div>
          <div class="clickbtn" style="--Bcolor: LightSlateGray">
            <button onclick="buyChip()" class="buyone" id="Chi1">
              Buy a Hippopotamus for 
            </button>
            <button onclick="mxChi()" class="buymax">
              MAX
            </button>
          </div>
          <p id="diship"></p>
        </div>
  
        <!-- Snake -->
        <div class="item">
          <section class="title">
            <h2 id="dissnaName"></h2>
            <img src="../img/snake.svg">
          </section>
          <div class="buttons" style="--Bcolor: green">
            <button onclick="buysna()" class="buyone" id="sn1">
              Buy a Snake
            </button>
            <button onclick="mxsn()" class="buymax">
              MAX
            </button>
          </div>
          <div class="clickbtn" style="--Bcolor: green">
            <button onclick="buyCsna()" class="buyone" id="Csn1">
              Buy a Snake for clicks
            </button>
            <button onclick="mxCsn()" class="buymax">
              MAX
            </button>
          </div>
          <p id="dissna"></p>
        </div>
  
        <!-- Cheetah -->
        <div class="item">
          <section class="title">
            <h2 id="discheName"></h2>
            <img src="../img/cheetah.svg">
          </section>
          <div class="buttons" style="--Bcolor: GoldenRod">
            <button onclick="buyche()" class="buyone" id="ch1">
              Buy a Cheetah
            </button>
            <button onclick="mxch()" class="buymax">
              MAX
            </button>
          </div>
          <div class="clickbtn" style="--Bcolor: GoldenRod">
            <button onclick="buyCche()" class="buyone" id="Cch1">
              Buy a Cheetah for clicks
            </button>
            <button onclick="mxCch()" class="buymax">
              MAX
            </button>
          </div>
          <p id="dische"></p>
        </div>
  
        <!-- Pythons -->
        <div class="item">
          <section class="title">
            <h2 id="dispytName"></h2>
            <img src="../img/python.svg">
          </section>
          <div class="buttons" style="--Bcolor: CornflowerBlue">
            <button onclick="buypyt()" class="buyone" id="py1">
              Buy a Python
            </button>
            <button onclick="mxpy()" class="buymax">
              MAX
            </button>
          </div>
          <div class="clickbtn" style="--Bcolor: CornflowerBlue">
            <button onclick="buyCpyt()" class="buyone" id="Cpy1">
              Buy a Python for clicks
            </button>
            <button onclick="mxCpy()" class="buymax">
              MAX
            </button>
          </div>
          <p id="dispyt"></p>
        </div>
  
        <!-- Giraffe -->
        <div class="item">
          <section class="title">
            <h2 id="disgirName"></h2>
            <img src="../img/girafe.svg">
          </section>
          <div class="buttons" style="--Bcolor: #ffdb4d">
            <button onclick="buygir()" class="buyone" id="gi1">
              Buy a Giraffe
            </button>
            <button onclick="mxgi()" class="buymax">
              MAX
            </button>
          </div>
          <div class="clickbtn" style="--Bcolor: #ffdb4d">
            <button onclick="buyCgir()" class="buyone" id="Cgi1">
              Buy a Giraffe for clicks
            </button>
            <button onclick="mxCgi()" class="buymax">
              MAX
            </button>
          </div>
          <p id="disgir"></p>
        </div>
  
        <!-- Otter -->
        <div class="item">
          <section class="title">
            <h2 id="disottName"></h2>
            <img src="../img/otter.svg">
          </section>
          <div class="buttons" style="--Bcolor: #bc8f8f">
            <button onclick="buyoth()" class="buyone" id="ot1">
              Buy a Otter
            </button>
            <button onclick="mxot()" class="buymax">
              MAX
            </button>
          </div>
          <div class="clickbtn" style="--Bcolor: #bc8f8f">
            <button onclick="buyCoth()" class="buyone" id="Cot1">
              Buy a Otter for clicks
            </button>
            <button onclick="mxCot()" class="buymax">
              MAX
            </button>
          </div>
          <p id="disoth"></p>
        </div>
  
        <!-- Meerkat -->
        <div class="item">
          <section class="title">
            <h2 id="dismeeName"></h2>
            <img src="../img/meerkat.svg">
          </section>
          <div class="buttons" style="--Bcolor: #cd853f">
            <button onclick="buymee()" class="buyone" id="me1">
              Buy a Meerkat
            </button>
            <button onclick="mxme()" class="buymax">
              MAX
            </button>
          </div>
          <div class="clickbtn" style="--Bcolor: #cd853f">
            <button onclick="buyCmee()" class="buyone" id="Cme1">
              Buy a Meerkat for clicks
            </button>
            <button onclick="mxCme()" class="buymax">
              MAX
            </button>
          </div>
          <p id="dismee"></p>
        </div>
  
        <!-- Racoon -->
        <div class="item">
          <section class="title">
            <h2 id="disracName"></h2>
            <img src="../img/racoon.svg">
          </section>
          <div class="buttons" style="--Bcolor: #708090">
            <button onclick="buyrac()" class="buyone" id="ra1">
              Buy a Racoon
            </button>
            <button onclick="mxra()" class="buymax">
              MAX
            </button>
          </div>
          <div class="clickbtn" style="--Bcolor: #708090">
            <button onclick="buyCrac()" class="buyone" id="Cra1">
              Buy a Racoon for clicks
            </button>
            <button onclick="mxCra()" class="buymax">
              MAX
            </button>
          </div>
          <p id="disrac"></p>
        </div>
  
        <!-- Owl -->
        <div class="item">
          <section class="title">
            <h2 id="disowlName"></h2>
            <img src="../img/owl.svg">
          </section>
          <div class="buttons" style="--Bcolor: #f4a460">
            <button onclick="buyowl()" class="buyone" id="ow1">
              Buy a Owl
            </button>
            <button onclick="mxow()" class="buymax">
              MAX
            </button>
          </div>
          <div class="clickbtn" style="--Bcolor: #f4a460">
            <button onclick="buyCowl()" class="buyone" id="Cow1">
              Buy a Owl for clicks
            </button>
            <button onclick="mxCow()" class="buymax">
              MAX
            </button>
          </div>
          <p id="disowl"></p>
        </div>
  
        <!-- Badger -->
        <div class="item">
          <section class="title">
            <h2 id="disbadName"></h2>
            <img src="../img/badger.svg">
          </section>
          <div class="buttons" style="--Bcolor: #D8D6CA">
            <button onclick="buybad()" class="buyone" id="ba1">
              Buy a Badger
            </button>
            <button onclick="mxba()" class="buymax">
              MAX
            </button>
          </div>
          <div class="clickbtn" style="--Bcolor: #D8D6CA">
            <button onclick="buyCbad()" class="buyone" id="Cba1">
              Buy a Badger for clicks
            </button>
            <button onclick="mxCba()" class="buymax">
              MAX
            </button>
          </div>
          <p id="disbad"></p>
        </div>
  
        <!-- Squirrel -->
        <div class="item">
          <section class="title">
            <h2 id="dissquName"></h2>
            <img src="../img/squirell.svg">
          </section>
          <div class="buttons" style="--Bcolor: #CFB190">
            <button onclick="buysqu()" class="buyone" id="sq1">
              Buy a Squirrel
            </button>
            <button onclick="mxsq()" class="buymax">
              MAX
            </button>
          </div>
          <div class="clickbtn" style="--Bcolor: #CFB190">
            <button onclick="buyCsqu()" class="buyone" id="Csq1">
              Buy a Squirrel for clicks
            </button>
            <button onclick="mxCsq()" class="buymax">
              MAX
            </button>
          </div>
          <p id="dissqu"></p>
        </div>
  
        <!-- Chameleon -->
        <div class="item">
          <section class="title">
            <h2 id="dischaName"></h2>
            <img src="../img/chameleon.svg">
          </section>
          <div class="buttons" style="--Bcolor: #BED15F">
            <button onclick="buycha()" class="buyone" id="cha1">
              Buy a Chameleon
            </button>
            <button onclick="mxcha()" class="buymax">
              MAX
            </button>
          </div>
          <div class="clickbtn" style="--Bcolor: #BED15F">
            <button onclick="buyCcha()" class="buyone" id="Ccha1">
              Buy a Chameleon for clicks
            </button>
            <button onclick="mxCcha()" class="buymax">
              MAX
            </button>
          </div>
          <p id="discha"></p>
        </div>
  
        <!-- Chicken -->
        <div class="item">
          <section class="title">
            <h2 id="dischiName"></h2>
            <img src="../img/chickens.svg">
          </section>
          <div class="buttons" style="--Bcolor: #D1DCE6">
            <button onclick="buychi()" class="buyone" id="chi1">
              Buy a Chicken
            </button>
            <button onclick="mxchi()" class="buymax">
              MAX
            </button>
          </div>
          <div class="clickbtn" style="--Bcolor: #D1DCE6">
            <button onclick="buyCchi()" class="buyone" id="Cchi1">
              Buy a Chicken for clicks
            </button>
            <button onclick="mxCchi()" class="buymax">
              MAX
            </button>
          </div>
          <p id="dischi"></p>
        </div>
  
        <!-- Wombat -->
        <div class="item">
          <section class="title">
            <h2 id="diswomName"></h2>
            <img src="../img/wombats.svg">
          </section>
          <div class="buttons" style="--Bcolor: #B3B3B3">
            <button onclick="buywom()" class="buyone" id="wom1">
              Buy a Wombat
            </button>
            <button onclick="mxwom()" class="buymax">
              MAX
            </button>
          </div>
          <div class="clickbtn" style="--Bcolor: #B3B3B3">
            <button onclick="buyCwom()" class="buyone" id="Cwom1">
              Buy a Wombat for clicks
            </button>
            <button onclick="mxCwom()" class="buymax">
              MAX
            </button>
          </div>
          <p id="diswom"></p>
        </div>
  
        <!-- Panther -->
        <div class="item">
          <section class="title">
            <h2 id="dispanName"></h2>
            <img src="../img/panther.svg">
          </section>
          <div class="buttons" style="--Bcolor: #000;">
            <button onclick="buypan()" class="buyone" id="pan1" style="color:#fff;">
              Buy a Panther
            </button>
            <button onclick="mxpan()" class="buymax" style="color:#fff;border-left: #dddddd33 solid;">
              MAX
            </button>
          </div>
          <div class="clickbtn" style="--Bcolor: #000;">
            <button onclick="buyCpan()" class="buyone" id="Cpan1" style="color:#fff;">
              Buy a Panther for clicks
            </button>
            <button onclick="mxCpan()" class="buymax" style="color:#fff;border-left: #dddddd33 solid;">
              MAX
            </button>
          </div>
          <p id="dispan"></p>
        </div>
  
        <!-- Coyote -->
        <div class="item">
          <section class="title">
            <h2 id="discoyName"></h2>
            <img src="../img/coyote.svg">
          </section>
          <div class="buttons" style="--Bcolor: #E7B76B;">
            <button onclick="buycoy()" class="buyone" id="coy1">
              Buy a Coyote
            </button>
            <button onclick="mxcoy()" class="buymax">
              MAX
            </button>
          </div>
          <div class="clickbtn" style="--Bcolor: #E7B76B;">
            <button onclick="buyCcoy()" class="buyone" id="Ccoy1">
              Buy a Coyote for clicks
            </button>
            <button onclick="mxCcoy()" class="buymax">
              MAX
            </button>
          </div>
          <p id="discoy"></p>
        </div>
  
        <!-- Frog -->
        <div class="item">
          <section class="title">
            <h2 id="disfroName"></h2>
            <img src="../img/frog.svg">
          </section>
          <div class="buttons" style="--Bcolor: #97BF0D;">
            <button onclick="buyfro()" class="buyone" id="fro1">
              Buy a Frog
            </button>
            <button onclick="mxfro()" class="buymax">
              MAX
            </button>
          </div>
          <div class="clickbtn" style="--Bcolor: #97BF0D;">
            <button onclick="buyCfro()" class="buyone" id="Cfro1">
              Buy a Frog for clicks
            </button>
            <button onclick="mxCfro()" class="buymax">
              MAX
            </button>
          </div>
          <p id="disfro"></p>
        </div>
  
        <!-- Bear -->
        <div class="item">
          <section class="title">
            <h2 id="disbeaName"></h2>
            <img src="../img/bear.svg">
          </section>
          <div class="buttons" style="--Bcolor: #7C512C;">
            <button onclick="buybea()" class="buyone" id="bea1">
              Buy a Bear
            </button>
            <button onclick="mxbea()" class="buymax">
              MAX
            </button>
          </div>
          <div class="clickbtn" style="--Bcolor: #7C512C;">
            <button onclick="buyCbea()" class="buyone" id="Cbea1">
              Buy a Bear for clicks
            </button>
            <button onclick="mxCbea()" class="buymax">
              MAX
            </button>
          </div>
          <p id="disbea"></p>
        </div>
  
        <!-- Pig -->
        <div class="item">
          <section class="title">
            <h2 id="dispigName"></h2>
            <img src="../img/pig.svg">
          </section>
          <div class="buttons" style="--Bcolor: #F9CCCE;">
            <button onclick="buypig()" class="buyone" id="pig1">
              Buy a Pig
            </button>
            <button onclick="mxpig()" class="buymax">
              MAX
            </button>
          </div>
          <div class="clickbtn" style="--Bcolor: #F9CCCE;">
            <button onclick="buyCpig()" class="buyone" id="Cpig1">
              Buy a Pig for clicks
            </button>
            <button onclick="mxCpig()" class="buymax">
              MAX
            </button>
          </div>
          <p id="dispig"></p>
        </div>
  
        <!-- Seal -->
        <div class="item">
          <section class="title">
            <h2 id="disseaName"></h2>
            <img src="../img/seal.svg">
          </section>
          <div class="buttons" style="--Bcolor: #7B7E87;">
            <button onclick="buysea()" class="buyone" id="sea1">
              Buy a Seal
            </button>
            <button onclick="mxsea()" class="buymax">
              MAX
            </button>
          </div>
          <div class="clickbtn" style="--Bcolor: #7B7E87;">
            <button onclick="buyCsea()" class="buyone" id="Csea1">
              Buy a Seal for clicks
            </button>
            <button onclick="mxCsea()" class="buymax">
              MAX
            </button>
          </div>
          <p id="dissea"></p>
        </div>
  
      </article>
  
  
  
      <article class="main">
        <!-- Lemons -->
        <div class="item">
          <section class="title">
            <h2 id="dislemName"></h2>
            <img src="../img/lemon.svg" draggable="false">
          </section>
          <div class="buttons" style="--Bcolor: yellow">
            <button onclick="buylem()" class="buyone" id="lm1">
              Buy a Lemon for <b style="font-weight: 1000;">some</b> cats
            </button>
            <button onclick="mxlm()" class="buymax">
              MAX
            </button>
          </div>
          <p id="dislem"></p>
        </div>
  
        <!-- Lemon t3-->
        <div class="item">
          <section class="title">
            <h2 id="dislt3Name"></h2>
            <img src="../img/lemon-tree.svg" draggable="false">
          </section>
          <div class="buttons" style="--Bcolor: lightgoldenrodyellow">
            <button onclick="buylt3()" class="buyone" id="lt1">
              Buy a Lemon Tree for 5 lemons
            </button>
            <button onclick="mxlt()" class="buymax">
              MAX
            </button>
          </div>
          <p id="dislt3"></p>
        </div>
      </article>
        
    </main>
  
    ${menu}
    
    <a href="#" class="upwards">
      <img src="../img/arrow-up.svg" alt="">
</a>`;

const htmlUpgrade = `
<!-- lemons -->
  <section class="joe" id="jonathan">
    <div id="loglm">
      <img src="../img/lemon.svg" id="imglm" draggable="false">
      <p id="dislm"></p>
    </div>
  </section>
  
  <main style="margin-top: 175px;">
    <!-- Example -->
    <div class="item">
      <h2>BRB</h2>
      <img src="../img/brb-still.png">
      <div class="buttons" style="--Bcolor: darkred">
        <button onclick="buyMcc()" class="buyone" id="Mc1">
        </button><!--
        <button onclick="mxMc()" class="buymax">
          MAX
        </button>-->
      </div>
      
      <p id="disMcmake"></p>
    </div>

  
    <div class="item">
      <h2>Prestige</h2>
      <img src="../img/angel-wings.svg">
      <div>
        <progress id="prog" min="0" max="1000" value="0"></progress>
      </div>
      <div class="buttons" style="--Bcolor: gold">
        <button class="buyTone" onclick="tblb()" id="presBT1">
          Buy 1 ticket
        </button>
        <button class="buymax" onclick="talb()" id="presBTmax">
          MAX
        </button>
      </div>
      <button id="ItsTime" onclick="TheThing();"></button>
      <p id="progva"></p>
      <p id="got"></p>
    </div>
  </main>

  ${menu}`;

const htmlSettings = `
<section class="joe" id="jonathan"></section>

        <main class="main" style="margin-top: 125px;">
            <section class="item">
                <article id="help"><h3 id="hl"></h3></article>
                <button class="change" onclick="help()"></button>
            </section>
            <section class="item">
                <article id="suicide"><h3 id="rs"></h3></article>
                <button class="change" onclick="reset()"></button>
            </section>
        </main>

        <section class="sites item">
            <article><h2 id="sites"></h2></article>
            <section>
                <a class="site" href="https://history.mreidam-brb.com" target="_blank" style="--cls: cornflowerblue">
                    <h3 id="history">History</h3>
                    <img src="../img/history.svg" alt="">
                </a>
                <a class="site" href="../RPG" target="_blank" style="--cls: #d57500; margin-top: .5rem">
                    <h3 id="rpg">RPG</h3>
                    <img src="../img/rpg.svg" alt="">
                </a>
            </section>
        </section>


        ${menu}`;

function toTitle(){
  document.getElementById('link').href = '../css/title.css';
  document.getElementById('icon').href = '../img/brb-still.png';
  document.body.innerHTML = htmlTitle;
}

function toClick(){
  document.getElementById('link').href = '../css/brb.css';
  document.getElementById('icon').href = '../img/brb-still.png';
  if(navigator.language == 'cs' || navigator.language == 'cs-CZ'){
    document.documentElement.setAttribute('lang', 'cz');
    document.title = 'BRB - Klikání';
  }else{
    document.documentElement.setAttribute('lang', 'en');
    document.title = 'BRB - Clicking';
  }
  document.body.innerHTML = htmlClicking;
  checklang();
  uploadClicking();
  menuStart();
}

function toShop(){
  document.getElementById('link').href = '../css/shop.css';
  document.getElementById('icon').href = '../img/shop.png';
  if(navigator.language == 'cs' || navigator.language == 'cs-CZ'){
    document.documentElement.setAttribute('lang', 'cz');
    document.title = 'BRB - Obchod';
  }else{
    document.documentElement.setAttribute('lang', 'en');
    document.title = 'BRB - Shop';
  }
  document.body.innerHTML = htmlShop;
  checklang();
  loadShop();
  menuStart();
}

function toUpgrade(){
  document.getElementById('link').href = '../css/upgr.css'
  document.getElementById('icon').href = '../img/upgrade-icon-png-12.jpg';
  if(navigator.language == 'cs' || navigator.language == 'cs-CZ'){
    document.documentElement.setAttribute('lang', 'cz');
    document.title = 'BRB - Vylepšení';
  }else{
    document.documentElement.setAttribute('lang', 'en');
    document.title = 'BRB - Upgrades';
  }
  document.body.innerHTML = htmlUpgrade;
  checklang();
  loadUpgrades();
  menuStart();
}

function toSetting(){
  document.getElementById('link').href = '../css/sett.css'
  document.getElementById('icon').href = '../img/settings.svg';
  if(navigator.language == 'cs' || navigator.language == 'cs-CZ'){
    document.documentElement.setAttribute('lang', 'cz');
    document.title = 'BRB - Nastavení';
  }else{
    document.documentElement.setAttribute('lang', 'en');
    document.title = 'BRB - Settings';
  } 
  document.body.innerHTML = htmlSettings;
  checklang();
  loadSettings();
  menuStart();
}