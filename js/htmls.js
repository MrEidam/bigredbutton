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
        <span id="clickMake">+69k/s</span>
      </div>
      <input type="text" id="search" onkeyup="/*search()*/" placeholder="Search.." title="Type in a category">
    </section>
  
  
  
    <!-- I T E M S -->
    <main style="margin-top: 210px;">
      <article class="main">
        <!-- Dog -->
        <div class="item">
          <section class="title">
            <img src="../img/dog.svg">
            <h3 id="disdogName">Dog</h3>
            <span id="dogMake">+69k/s</span>
          </section>
          <div class="buttons" style="--Bcolor: darkorange">
            <button onclick="buydog()" class="buyone" id="dog1">
              Buy a Dog for 100 clicks
            </button>
            <button onclick="mxdog()" class="buymax">
              MAX
            </button>
          </div>
          
          <p id="disdog">You've got OUTPUT</p>
        </div>
  
        <!-- Cat -->
        <div class="item">
          <section class="title">
            <img src="../img/cat-body.svg">
            <h3 id="discatName">Cat</h3>
            <span id="catMake">+69k/s</span>
          </section>
          <div class="buttons" style="--Bcolor: orange">
            <div class="column">
              <button onclick="buycat()" class="buyone0" id="cat1">
                Buy a Cat for 10 dogs
              </button>
              <button onclick="buyCcat()" class="buyone1" id="Ccat1">
                Buy a Cat for 1,2 k clicks
              </button>
            </div>
            <div class="column">
              <button onclick="mxCcat()" class="buymax0">
                MAX
              </button>
              <button onclick="mxcat()" class="buymax1">
                MAX
              </button>
            </div>
          </div>
          <p id="discat">You've got OUTPUT</p>
        </div>
  
        <!-- Fox -->
        <div class="item">
          <section class="title">
            <img src="../img/fox.svg">
            <h3 id="disfoxName">Fox</h3>
            <span id="foxMake">+69k/s</span>
          </section>
          <div class="buttons" style="--Bcolor: lightsalmon">
            <div class="column">
              <button onclick="buyfox()" class="buyone0" id="fox1">
                Buy a Fox for 15 dogs
              </button>
              <button onclick="buyCfox()" class="buyone1" id="Cfox1">
                Buy a Fox for 1,8 k clicks
              </button>
            </div>
            <div class="column">
              <button onclick="mxCfox()" class="buymax0">
                MAX
              </button>
              <button onclick="mxfox()" class="buymax1">
                MAX
              </button>
            </div>
          </div>
          <p id="disfox">You've got OUTPUT</p>
        </div>
  
        <!-- Wolf -->
        <div class="item">
          <section class="title">
            <img src="../img/wolf.svg">
            <h3 id="diswolfName">wolf</h3>
            <span id="wolfMake">+69k/s</span>
          </section>
          <div class="buttons" style="--Bcolor: lightgray">
            <div class="column">
              <button onclick="buywolf()" class="buyone0" id="wolf1">
                Buy a wolf for 6 dogs and 5 foxes
              </button>
              <button onclick="buyCwolf()" class="buyone1" id="Cwolf1">
                Buy a wolf for 10 k clicks
              </button>
            </div>
            <div class="column">
              <button onclick="mxCwolf()" class="buymax0">
                MAX
              </button>
              <button onclick="mxwolf()" class="buymax1">
                MAX
              </button>
            </div>
          </div>
          <p id="diswolf">You've got OUTPUT</p>
        </div>
  
        <!-- Hamster -->
        <div class="item">
          <section class="title">
            <img src="../img/hamster.svg" draggable="false">
            <h3 id="dishamsterName">hamster</h3>
            <span id="hamsterMake">+69k/s</span>
          </section>
          <div class="buttons" style="--Bcolor: wheat">
            <div class="column">
              <button onclick="buyhamster()" class="buyone0" id="hamster1">
                Buy a hamster for 1 wolf and 2 cats
              </button>
              <button onclick="buyChamster()" class="buyone1" id="Chamster1">
                Buy a hamster for 13 k clicks
              </button>
            </div>
            <div class="column">
              <button onclick="mxChamster()" class="buymax0">
                MAX
              </button>
              <button onclick="mxhamster()" class="buymax1">
                MAX
              </button>
            </div>
          </div>
          <p id="dishamster">You've got OUTPUT</p>
        </div>
  
        <!-- Whales -->
        <div class="item">
          <section class="title">
            <img src="../img/whale.svg" draggable="false">
            <h3 id="diswhaleName">whale</h3>
            <span id="whaleMake">+69k/s</span>
          </section>
          <div class="buttons" style="--Bcolor: MediumAquamarine">
            <div class="column">
              <button onclick="buywhale()" class="buyone0" id="whale1">
                Buy a whale for 2 wolfs
              </button>
              <button onclick="buyCwhale()" class="buyone1" id="Cwhale1">
                Buy a whale for 22 k clicks
              </button>
            </div>
            <div class="column">
              <button onclick="mxCwhale()" class="buymax0">
                MAX
              </button>
              <button onclick="mxwhale()" class="buymax1">
                MAX
              </button>
            </div>
          </div>
          <p id="diswhale">You've got OUTPUT</p>
        </div>
  
        <!-- Capybara -->
        <div class="item">
          <section class="title">
            <img src="../img/capybara.svg" draggable="false">
            <h3 id="discapybaraName">capybara</h3>
            <span id="capybaraMake">+69k/s</span>
          </section>
          <div class="buttons" style="--Bcolor: rosybrown">
            <div class="column">
              <button onclick="buycapybara()" class="buyone0" id="capybara1">
                Buy a capybara for 1 whale and 4 cats
              </button>
              <button onclick="buyCcapybara()" class="buyone1" id="Ccapybara1">
                Buy a capybara for 28 k clicks
              </button>
            </div>
            <div class="column">
              <button onclick="mxCcapybara()" class="buymax0">
                MAX
              </button>
              <button onclick="mxcapybara()" class="buymax1">
                MAX
              </button>
            </div>
          </div>
          <p id="discapybara">You've got OUTPUT</p>
        </div>
  
        <!-- Snake -->
        <div class="item">
          <section class="title">
            <img src="../img/snake.svg">
            <h3 id="dissnakeName">snake</h3>
            <span id="snakeMake">+69k/s</span>
          </section>
          <div class="buttons" style="--Bcolor: green">
            <div class="column">
              <button onclick="buysnake()" class="buyone0" id="snake1">
                Buy a snake
              </button>
              <button onclick="buyCsnake()" class="buyone1" id="Csnake1">
                Buy a snake for clicks
              </button>
            </div>
            <div class="column">
              <button onclick="mxCsnake()" class="buymax0">
                MAX
              </button>
              <button onclick="mxsnake()" class="buymax1">
                MAX
              </button>
            </div>
          </div>
          <p id="dissnake">You've got OUTPUT</p>
        </div>
  
        <!-- Cheetah -->
        <div class="item">
          <section class="title">
            <img src="../img/cheetah.svg">
            <h3 id="discheetahName">cheetah</h3>
            <span id="cheetahMake">+69k/s</span>
          </section>
          <div class="buttons" style="--Bcolor: GoldenRod">
            <div class="column">
              <button onclick="buycheetah()" class="buyone0" id="cheetah1">
                Buy a cheetah
              </button>
              <button onclick="buyCcheetah()" class="buyone1" id="Ccheetah1">
                Buy a cheetah for clicks
              </button>
            </div>
            <div class="column">
              <button onclick="mxCcheetah()" class="buymax0">
                MAX
              </button>
              <button onclick="mxcheetah()" class="buymax1">
                MAX
              </button>
            </div>
          </div>
          <p id="discheetah">You've got OUTPUT</p>
        </div>
  
        <!-- Giraffe -->
        <div class="item">
          <section class="title">
            <img src="../img/girafe.svg">
            <h3 id="disgiraffeName">giraffe</h3>
            <span id="giraffeMake">+69k/s</span>
          </section>
          <div class="buttons" style="--Bcolor: #ffdb4d">
            <div class="column">
              <button onclick="buygiraffe()" class="buyone0" id="giraffe1">
                Buy a giraffe
              </button>
              <button onclick="buyCgiraffe()" class="buyone1" id="Cgiraffe1">
                Buy a giraffe for clicks
              </button>
            </div>
            <div class="column">
              <button onclick="mxCgiraffe()" class="buymax0">
                MAX
              </button>
              <button onclick="mxgiraffe()" class="buymax1">
                MAX
              </button>
            </div>
          </div>
          <p id="disgiraffe">You've got OUTPUT</p>
        </div>
  
        <!-- Otter -->
        <div class="item">
          <section class="title">
            <img src="../img/otter.svg">
            <h3 id="disotterName">otter</h3>
            <span id="otterMake">+69k/s</span>
          </section>
          <div class="buttons" style="--Bcolor: #bc8f8f">
            <div class="column">
              <button onclick="buyotter()" class="buyone0" id="otter1">
                Buy a otter
              </button>
              <button onclick="buyCotter()" class="buyone1" id="Cotter1">
                Buy a otter for clicks
              </button>
            </div>
            <div class="column">
              <button onclick="mxCotter()" class="buymax0">
                MAX
              </button>
              <button onclick="mxotter()" class="buymax1">
                MAX
              </button>
            </div>
          </div>
          <p id="disotter">You've got OUTPUT</p>
        </div>
  
        <!-- Racoon -->
        <div class="item">
          <section class="title">
            <img src="../img/racoon.svg">
            <h3 id="disracoonName">racoon</h3>
            <span id="racoonMake">+69k/s</span>
          </section>
          <div class="buttons" style="--Bcolor: #708090">
            <div class="column">
              <button onclick="buyracoon()" class="buyone0" id="racoon1">
                Buy a racoon
              </button>
              <button onclick="buyCracoon()" class="buyone1" id="Cracoon1">
                Buy a racoon for clicks
              </button>
            </div>
            <div class="column">
              <button onclick="mxCracoon()" class="buymax0">
                MAX
              </button>
              <button onclick="mxracoon()" class="buymax1">
                MAX
              </button>
            </div>
          </div>
          <p id="disracoon">You've got OUTPUT</p>
        </div>
  
        <!-- Badger -->
        <div class="item">
          <section class="title">
            <img src="../img/badger.svg">
            <h3 id="disbadgerName">Badger</h3>
            <span id="badgerMake">+69k/s</span>
          </section>
          <div class="buttons" style="--Bcolor: #D8D6CA">
            <div class="column">
              <button onclick="buybadger()" class="buyone0" id="badger1">
                Buy a Badger
              </button>
              <button onclick="buyCbadger()" class="buyone1" id="Cbadger1">
                Buy a Badger for clicks
              </button>
            </div>
            <div class="column">
              <button onclick="mxCbadger()" class="buymax0">
                MAX
              </button>
              <button onclick="mxbadger()" class="buymax1">
                MAX
              </button>
            </div>
          </div>
          <p id="disbadger">You've got OUTPUT</p>
        </div>
  
        <!-- Squirrel -->
        <div class="item">
          <section class="title">
            <img src="../img/squirell.svg">
            <h3 id="dissquirrelName">Squirrel</h3>
            <span id="squirrelMake">+69k/s</span>
          </section>
          <div class="buttons" style="--Bcolor: #CFB190">
            <div class="column">
              <button onclick="buysquirrel()" class="buyone0" id="squirrel1">
                Buy a Squirrel
              </button>
              <button onclick="buyCsquirrel()" class="buyone1" id="Csquirrel1">
                Buy a Squirrel for clicks
              </button>
            </div>
            <div class="column">
              <button onclick="mxCsquirrel()" class="buymax0">
                MAX
              </button>
              <button onclick="mxsquirrel()" class="buymax1">
                MAX
              </button>
            </div>
          </div>
          <p id="dissquirrel">You've got OUTPUT</p>
        </div>
  
        <!-- Chameleon -->
        <div class="item">
          <section class="title">
            <img src="../img/chameleon.svg">
            <h3 id="dischameleonName">Chameleon</h3>
            <span id="chameleonMake">+69k/s</span>
          </section>
          <div class="buttons" style="--Bcolor: #BED15F">
            <div class="column">
              <button onclick="buychameleon()" class="buyone0" id="chameleon1">
                Buy a Chameleon
              </button>
              <button onclick="buyCchameleon()" class="buyone1" id="Cchameleon1">
                Buy a Chameleon for clicks
              </button>
            </div>
            <div class="column">
              <button onclick="mxCchameleon()" class="buymax0">
                MAX
              </button>
              <button onclick="mxchameleon()" class="buymax1">
                MAX
              </button>
            </div>
          </div>
          <p id="dischameleon">You've got OUTPUT</p>
        </div>
  
        <!-- Chicken -->
        <div class="item">
          <section class="title">
            <img src="../img/chickens.svg">
            <h3 id="dischickenName">Chicken</h3>
            <span id="chickenMake">+69k/s</span>
          </section>
          <div class="buttons" style="--Bcolor: #D1DCE6">
            <div class="column">
              <button onclick="buychicken()" class="buyone0" id="chicken1">
                Buy a Chicken
              </button>
              <button onclick="buyCchicken()" class="buyone1" id="Cchicken1">
                Buy a Chicken for clicks
              </button>
            </div>
            <div class="column">
              <button onclick="mxCchicken()" class="buymax0">
                MAX
              </button>
              <button onclick="mxchicken()" class="buymax1">
                MAX
              </button>
            </div>
          </div>
          <p id="dischicken">You've got OUTPUT</p>
        </div>
  
        <!-- Wombat -->
        <div class="item">
          <section class="title">
            <img src="../img/wombats.svg">
            <h3 id="diswombatName">Wombat</h3>
            <span id="wombatMake">+69k/s</span>
          </section>
          <div class="buttons" style="--Bcolor: #B3B3B3">
            <div class="column">
              <button onclick="buywombat()" class="buyone0" id="wombat1">
                Buy a Wombat
              </button>
              <button onclick="buyCwombat()" class="buyone1" id="Cwombat1">
                Buy a Wombat for clicks
              </button>
            </div>
            <div class="column">
              <button onclick="mxCwombat()" class="buymax0">
                MAX
              </button>
              <button onclick="mxwombat()" class="buymax1">
                MAX
              </button>
            </div>
          </div>
          <p id="diswombat">You've got OUTPUT</p>
        </div>
  
        <!-- Frog -->
        <div class="item">
          <section class="title">
            <img src="../img/frog.svg">
            <h3 id="disfrogName">Frog</h3>
            <span id="frogMake">+69k/s</span>
          </section>
          <div class="buttons" style="--Bcolor: #97BF0D;">
            <div class="column">
              <button onclick="buyfrog()" class="buyone0" id="frog1">
                Buy a Frog
              </button>
              <button onclick="buyCfrog()" class="buyone1" id="Cfrog1">
                Buy a Frog for clicks
              </button>
            </div>
            <div class="column">
              <button onclick="mxCfrog()" class="buymax0">
                MAX
              </button>
              <button onclick="mxfrog()" class="buymax1">
                MAX
              </button>
            </div>
          </div>
          <p id="disfrog">You've got OUTPUT</p>
        </div>
  
        <!-- Pig -->
        <div class="item">
          <section class="title">
            <img src="../img/pig.svg">
            <h3 id="dispigName">Pig</h3>
            <span id="pigMake">+69k/s</span>
          </section>
          <div class="buttons" style="--Bcolor: #F9CCCE;">
            <div class="column">
              <button onclick="buypig()" class="buyone0" id="pig1">
                Buy a Pig
              </button>
              <button onclick="buyCpig()" class="buyone1" id="Cpig1">
                Buy a Pig for clicks
              </button>
            </div>
            <div class="column">
              <button onclick="mxCpig()" class="buymax0">
                MAX
              </button>
              <button onclick="mxpig()" class="buymax1">
                MAX
              </button>
            </div>
          </div>
          <p id="dispig">You've got OUTPUT</p>
        </div>
  
        <!-- Seal -->
        <div class="item">
          <section class="title">
            <img src="../img/seal.svg">
            <h3 id="dissealName">Seal</h3>
            <span id="sealMake">+69k/s</span>
          </section>
          <div class="buttons" style="--Bcolor: #7B7E87;">
            <div class="column">
              <button onclick="buyseal()" class="buyone0" id="seal1">
                Buy a Seal
              </button>
              <button onclick="buyCseal()" class="buyone1" id="Cseal1">
                Buy a Seal for clicks
              </button>
            </div>
            <div class="column">
              <button onclick="mxCseal()" class="buymax0">
                MAX
              </button>
              <button onclick="mxseal()" class="buymax1">
                MAX
              </button>
            </div>
          </div>
          <p id="disseal">You've got OUTPUT</p>
        </div>
  
      </article>
  
  
  
      <article class="main">
        <!-- Lemons -->
        <div class="item" onclick="log()">
          <section class="title">
            <img src="../img/lemon.svg" draggable="false">
            <h3 id="dislemonName">Lemons</h3>
            <span id="lemonMake">+69k/s</span>
          </section>
          <div class="buttons" style="--Bcolor: yellow">
            <button onclick="buylemon()" class="buyone" id="lemon1">
              Buy a Lemon
            </button>
            <button onclick="mxlemon()" class="buymax">
              MAX
            </button>
          </div>
          <p id="dislemon">You've got OUTPUT</p>
        </div>
  
        <!-- Lemon t3-->
        <div class="item" onclick="log()">
          <section class="title">
            <img src="../img/lemon-tree.svg" draggable="false">
            <h3 id="dislt3Name">Lemon t</h3>
          </section>
          <div class="buttons" style="--Bcolor: lightgoldenrodyellow">
            <button onclick="buylt3()" class="buyone" id="lt1">
              Buy a Lemon Tree
            </button>
            <button onclick="mxlt()" class="buymax">
              MAX
            </button>
          </div>
          <p id="dislt3">You've got OUTPUT</p>
        </div>
      </article>
        
    </main>
  
    <a href="#" class="upwards">
      <img src="../img/arrow-up.svg" alt="">
    </a>

${menu}`;

const htmlUpgrade = `
<!-- lemons -->
  <section class="joe" id="jonathan">
    <!-- <div id="loglm">
      <img src="../img/lemon.svg" id="imglm" draggable="false">
      <p id="dislm"></p>
    </div>-->
  </section>
  
  <main style="margin-top: 175px;">
    <!-- Example--><!--
    <div class="item">
      <h2>BRB</h2>
      <img src="../img/brb-still.png">
      <div class="buttons" style="--Bcolor: darkred">
        <button onclick="buyMcc()" class="buyone" id="Mc1">
        </button>
        <button onclick="mxMc()" class="buymax">
          MAX
        </button>
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
    </div> -->

    <div class="inMaking">
      <h1> In Making </h1>
      <img src="./img/underconstuction.png">
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