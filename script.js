document.addEventListener('DOMContentLoaded',()=>{
  const toggle=document.getElementById('nav-toggle');
  const nav=document.getElementById('nav');
  toggle.addEventListener('click',()=>{
    if(nav.style.display==='block'){nav.style.display=''}else{nav.style.display='block'}
  });

  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click',e=>{
      const href=a.getAttribute('href');
      if(href.length>1){
        e.preventDefault();
        document.querySelector(href).scrollIntoView({behavior:'smooth',block:'start'});
        if(window.innerWidth<700){nav.style.display=''}
      }
    })
  });

  // Video thumbnails — open YouTube directly in a new tab.
  // YouTube's IFrame API is blocked by browsers when the page is served
  // as a local file:// URL (CSP / CORS restriction), so we just link out.
  document.querySelectorAll('.video-thumb').forEach(btn=>{
    btn.addEventListener('click',()=>{
      const id = btn.getAttribute('data-id');
      window.open('https://www.youtube.com/watch?v=' + id, '_blank', 'noopener');
    });
  });
});
