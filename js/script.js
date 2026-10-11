
const btn=document.querySelector('.mobile-btn');
const menu=document.querySelector('.menu');
if(btn){
  btn.addEventListener('click',()=>{
    menu.classList.toggle('mobile-open');
    menu.style.display=menu.classList.contains('mobile-open')?'flex':'';
    if(menu.classList.contains('mobile-open')){
      menu.style.position='absolute';menu.style.top='78px';menu.style.left='0';menu.style.right='0';
      menu.style.background='#fff';menu.style.padding='18px 6%';menu.style.flexDirection='column';menu.style.alignItems='flex-start';
      menu.style.boxShadow='0 20px 30px rgba(0,0,0,.08)';
    }else{menu.removeAttribute('style')}
  });
}
const back=document.querySelector('.backtop');
window.addEventListener('scroll',()=>{if(back) back.style.display=window.scrollY>500?'grid':'none'});
if(back) back.onclick=()=>window.scrollTo({top:0,behavior:'smooth'});
const observer=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')})
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
document.querySelectorAll('[data-wa-form]').forEach(form=>{
  form.addEventListener('submit',e=>{
    e.preventDefault();
    const data=new FormData(form);
    const msg=`Hello Ahmed Enterprises,%0A%0AName: ${data.get('name')}%0APhone: ${data.get('phone')}%0AEmail: ${data.get('email')}%0ARequirement: ${data.get('message')}`;
    window.open('https://wa.me/9167080380?text='+msg,'_blank');
  })
});
