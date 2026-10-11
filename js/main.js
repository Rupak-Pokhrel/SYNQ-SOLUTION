(function(){
  // mobile menu
  var burger=document.getElementById('burger'),menu=document.getElementById('menu');
  burger.addEventListener('click',function(){var o=menu.classList.toggle('open');burger.setAttribute('aria-expanded',o)});
  menu.addEventListener('click',function(e){if(e.target.tagName==='A')menu.classList.remove('open')});

  // active nav on scroll
  var map={home:'home',scenarios:'home',product:'product',pipeline:'product',how:'how',features:'features',about:'about'};
  var links=[].slice.call(menu.querySelectorAll('a'));
  var io=new IntersectionObserver(function(es){
    es.forEach(function(e){
      if(e.isIntersecting){
        var k=map[e.target.id];
        links.forEach(function(a){a.classList.toggle('on',a.dataset.s===k)});
      }
    });
  },{rootMargin:'-40% 0px -55% 0px'});
  Object.keys(map).forEach(function(id){var el=document.getElementById(id);if(el)io.observe(el)});

  // stage tabs
  var tabs=[].slice.call(document.querySelectorAll('.tabs button')),cards=[].slice.call(document.querySelectorAll('#cyc .cy'));
  tabs.forEach(function(b){b.addEventListener('click',function(){
    var i=+b.dataset.t;
    tabs.forEach(function(t,j){t.setAttribute('aria-selected',j===i)});
    cards.forEach(function(c,j){c.classList.toggle('on',j===i)});
  })});

  // demo modal
  var dlg=document.getElementById('demo'),dm=document.getElementById('demoMsg');
  document.querySelectorAll('[data-demo]').forEach(function(b){b.addEventListener('click',function(){
    dm.textContent='';
    if(dlg.showModal)dlg.showModal();else dlg.setAttribute('open','');
  })});
  document.getElementById('demoSend').addEventListener('click',function(){
    var n=document.getElementById('dn'),e=document.getElementById('de');
    if(!n.value.trim()||!/^\S+@\S+\.\S+$/.test(e.value)){dm.style.color='var(--peach)';dm.textContent='Enter your name and a valid work email.';return}
    dm.style.color='var(--green)';dm.textContent='Request received. We’ll email '+e.value+' shortly.';
    n.value='';e.value='';
  });

  // newsletter
  document.getElementById('sub').addEventListener('submit',function(ev){
    ev.preventDefault();
    var i=document.getElementById('subEmail'),m=document.getElementById('subMsg');
    if(!/^\S+@\S+\.\S+$/.test(i.value)){m.style.color='var(--peach)';m.textContent='Enter a valid email address.';return}
    m.style.color='var(--green)';m.textContent='Subscribed. Watch your inbox.';i.value='';
  });
})();
