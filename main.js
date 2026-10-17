// Menu toggle + language switch. Default text is English in the HTML; Marathi is swapped in from translations.js.
(function(){
  var nav=document.getElementById('nav'),mb=document.getElementById('menu');
  mb.addEventListener('click',function(){var o=nav.classList.toggle('open');mb.setAttribute('aria-expanded',o)});
  var btn=document.getElementById('lang');
  function apply(l){
    document.documentElement.lang=l;
    document.querySelectorAll('[data-i18n]').forEach(function(e){
      if(!e.hasAttribute('data-en'))e.setAttribute('data-en',e.innerHTML);
      var t=(T[l]||{})[e.dataset.i18n];e.innerHTML=(l==='mr'&&t)?t:e.getAttribute('data-en');});
    btn.textContent=l==='mr'?'English':'मराठी';btn.setAttribute('lang',l==='mr'?'en':'mr');
    btn.setAttribute('aria-label',l==='mr'?'Switch to English':'मराठीत पहा');
  }
  var l='en';try{l=localStorage.getItem('nagara-lang')||'en'}catch(e){}
  apply(l);
  btn.addEventListener('click',function(){l=l==='mr'?'en':'mr';try{localStorage.setItem('nagara-lang',l)}catch(e){}apply(l)});
})();
