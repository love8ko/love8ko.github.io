(async()=>{
  const $=s=>document.querySelector(s);let data,frames=[],active=0,trigger=null,touch=null;
  try{const response=await fetch('gallery.json',{cache:'no-store'});if(!response.ok)throw Error();data=await response.json();}catch{$('#gallery').textContent='The layouts could not be loaded. Please refresh this page.';return;}
  const url=p=>`${p}?v=${encodeURIComponent(data.version)}`;
  const gallery=$('#gallery');gallery.replaceChildren();
  for(const series of data.series){
    const section=document.createElement('section');section.className='series';section.id=series.prefix;
    const heading=document.createElement('div');heading.className='series-heading';
    const tag=document.createElement('span');tag.className='series-tag';tag.textContent=series.prefix;
    const label=document.createElement('div');const title=document.createElement('h2');title.textContent=series.name;const desc=document.createElement('p');desc.textContent=series.description;label.append(title,desc);
    const count=document.createElement('span');count.className='series-count';count.textContent='01 — 03';heading.append(tag,label,count);section.append(heading);
    const row=document.createElement('div');row.className='row';row.tabIndex=0;row.setAttribute('aria-label',series.name+' layouts');
    for(const frame of series.frames){
      const index=frames.length;frames.push(frame);
      const figure=document.createElement('figure');figure.className='frame-item';
      const caption=document.createElement('figcaption');const id=document.createElement('span');id.className='frame-id';id.textContent=frame.id;const stage=document.createElement('span');stage.className='frame-stage';stage.textContent=frame.readiness==='approved'?'Ready for review':'Design concept';caption.append(id,stage);
      const button=document.createElement('button');button.type='button';button.className='shot';button.setAttribute('aria-label','View '+frame.id+' — '+frame.headline);button.dataset.id=frame.id;
      if(frame.preview&&frame.original){const img=document.createElement('img');img.src=url(frame.preview);img.alt=frame.headline;img.style.width='100%';img.addEventListener('error',()=>{button.textContent='Image unavailable. Open to try the original.';});button.append(img);}else{button.append(window.RefluxoraLayout(frame));}
      button.addEventListener('click',()=>{trigger=button;show(index);$('#viewer').showModal();$('#close').focus();});
      const note=document.createElement('p');note.className='frame-note';note.textContent=frame.shortJob;figure.append(caption,button,note);row.append(figure);
    }
    section.append(row);gallery.append(section);
  }
  function show(index){active=(index+frames.length)%frames.length;const f=frames[active];$('#viewer-title').textContent=f.id;$('#viewer-status').textContent=f.readiness==='approved'?'Approved screen · full resolution':'Design concept · not for App Store';$('#viewer-body').replaceChildren();
    const ready=Boolean(f.original);$('#download').hidden=!ready;$('#original').hidden=!ready;
    if(ready){const img=document.createElement('img');img.src=url(f.original);img.alt=f.headline;img.addEventListener('error',()=>{img.replaceWith(document.createTextNode('Image unavailable. Use Open original to retry.'));});$('#viewer-body').append(img);$('#original').href=url(f.original);$('#download').href=url(f.original);$('#download').download=f.id+'.png';}else{$('#original').removeAttribute('href');$('#download').removeAttribute('href');$('#viewer-body').append(window.RefluxoraLayout(f));}
  }
  $('#close').addEventListener('click',()=>$('#viewer').close());$('#viewer').addEventListener('close',()=>{trigger?.focus();});
  $('#previous').addEventListener('click',()=>show(active-1));$('#next').addEventListener('click',()=>show(active+1));
  $('#viewer').addEventListener('keydown',e=>{
    if(e.key==='ArrowLeft'||e.key==='ArrowRight'){e.preventDefault();show(active+(e.key==='ArrowRight'?1:-1));}
    if(e.key==='Tab'){
      const items=[...$('#viewer').querySelectorAll('a[href],button:not([disabled])')].filter(n=>!n.hidden&&n.getClientRects().length);
      const first=items[0],last=items.at(-1);
      if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus();}
      else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus();}
    }
  });
  $('#viewer').addEventListener('click',e=>{if(e.target!==$('#viewer'))return;const r=e.target.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)$('#viewer').close();});
  $('#viewer-body').addEventListener('touchstart',e=>{if(e.touches.length===1)touch={x:e.touches[0].clientX,y:e.touches[0].clientY};else touch=null;},{passive:true});
  $('#viewer-body').addEventListener('touchend',e=>{if(!touch)return;const dx=e.changedTouches[0].clientX-touch.x,dy=e.changedTouches[0].clientY-touch.y;if(Math.abs(dx)>60&&Math.abs(dx)>Math.abs(dy)*1.4)show(active+(dx<0?1:-1));touch=null;},{passive:true});
  $('#version').textContent=data.version;window.galleryReady=true;
})();
