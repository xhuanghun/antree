
<!DOCTYPE html><html class=''>
<head><meta charset='UTF-8'>

<script src='js/prefixfree.min.js'></script>
<style class="cp-pen-styles">
*, *:after, *:before {
  box-sizing: border-box;
  -moz-box-sizing: border-box;
}
* {margin:0;padding:0;border: 0 none;position: relative;}

html {
  background: #fff;
  width: 100%;
  height: 100%;
  font-family: dosis, sans-serif;
  font-weight: 300;
  color: #fff;
}

section {
  background: lightskyblue;
  width: 80vw;
  max-width: 40rem;
  min-width: 390px;
  height: 25rem;
  margin: 0rem auto;
  box-shadow: 0 0 6px rgba(0,0,0,.4);
}
article {
  position: absolute;
  left: 0;
  top: 5rem;
  right: 0;
  bottom: 0;
  padding: 1rem 2rem 0;
  overflow: auto;
  transition: .7s;
  transform: scale(0);
  transform-origin: center right;
  transition-delay: .1s;
}
article:before {
  color: rgba(0,0,0,.2);
  font-size: 4rem;
  font-weight: 100;
  position: absolute;
  bottom: 1rem;
  right: 1rem;
}
h2 {
  font-size: 2.5rem;
  font-weight: 600;
  text-align: center;
  color: rgba(0,0,0,.6);
}
h2 img {
  width: 120px;
  height: auto;
  background: #f9f9f9;
  border: 5px solid rgba(0,0,0,.7);
  border-radius: 50%;
  padding: 5px;
  display: block;
  margin: 0 auto;
  box-shadow: 0 0 7px rgba(0,0,0,.5);
}
h2 span {
  font-family: Great Vibes;
  font-weight: 400;
  display: block;
  margin-bottom: 1rem;
}
footer ul {
  width: 100%;
  color: #037B49;
}
footer li {
  list-style-type: none;
  float: left;
  width: 20%;
  text-align: center;
  font-size: 3rem;
  font-weight: 100;  
}
p, dl, ol {
  line-height: 1.5;
  font-size: 1.3rem;
}
ol li {margin: 0 0 .5rem 1rem;}
dt {
  font-size: 1.6rem;
  font-weight: 600;
  text-indent: 1.5rem;
}
nav {
  background: #fff;
  width: 100%;
  height: 2rem;
  box-shadow: 0 0 6px rgba(0,0,0,.4);
}
nav:after {
  content:'';
  width: 25%;
  height: 2rem;
  background: #BEE3D1;
  position: absolute;
  transition: .5s;
}
input {
  display: none;
}
label {
  width: 25%;
  float: left;
  color: #BEE3D1;
  text-align: center;
  cursor: pointer;
  transition: .5s;
  z-index: 2;
}
label:hover {color: #1E6743;}
label:before {
  display: block;
  font-size: 3rem;
  line-height: 5rem;
  z-index: 2;
}
#profile:checked ~ nav [for='profile'],
#settings:checked ~ nav [for='settings'],
#posts:checked ~ nav [for='posts'],
#books:checked ~ nav [for='books'] {
  color: #1E6743;
  font-weight: 600;
}
#settings:checked ~ nav [for='settings'] {}
#profile:checked ~ nav [for='profile'] {}

#profile:checked ~ nav:after {
  left: 0;
}
#settings:checked ~ nav:after {
  left:25%;
  border-top: 0 none;
}
#posts:checked ~ nav:after {
  left: 50%;
}
#books:checked ~ nav:after {
  left: 75%;
}

#profile:checked ~ .uno,
#settings:checked ~ .dos,
#posts:checked ~ .tres,
#books:checked ~ .cuatro {
  display: block;
  transform: scale(1);
  transition-delay: .5s; 
}
a {color: rgba(0,0,0,.4)}
a:hover {color: rgba(0,0,0,.2)}
</style>
</head>
<body>
<section>
    <input type="radio" id="profile" value="1" name="tractor" checked='checked' />    
    <input type="radio" id="settings" value="2" name="tractor" />      
    <input type="radio" id="posts" value="3" name="tractor" />
    <input type="radio" id="books" value="4" name="tractor" />
  
  <nav>   
      <label for="profile" >基本信息</label>
      <label for="settings" >项目阶段</label>
      <label for="posts">图片信息</label>
      <label for="books">附件信息</label>
  </nav>
  
  <article class='uno'>    
     <footer>
        <ul>
           <li class='fontawesome-link'>1</li>
           <li class='fontawesome-paper-clip'>2</li>
           <li class='fontawesome-sitemap'>3</li>
           <li class='fontawesome-wrench'>4</li>
           <li class='fontawesome-magic'>5</li>
        </ul>
     </footer>
  </article>
  
  <article class='dos fontawesome-wrench'>
  	<p>6</p>
  </article>
  
  <article class='tres fontawesome-file-alt'>
    <p>7</p>
  </article>
  
  <article class='cuatro fontawesome-copy'>
    <p>8</p>
  </article>
</section>

<script>
</script>
</body></html>