'use strict';
(async()=>{
 const data=await fetch('gallery.json?v=r11',{cache:'no-store'}).then(r=>{if(!r.ok)throw Error(r.status);return r.json();});
 const grid=document.getElementById('gallery'),dialog=document.getElementById('lightbox'),viewer=document.getElementById('viewer'),picker=document.getElementById('locale-picker');
 let visibleFrames=[],active=0,opener;
 document.getElementById('revision').textContent=data.revision;
 const setZoom=on=>{viewer.classList.toggle('zoomed',on);document.getElementById('zoom').setAttribute('aria-pressed',String(on));document.getElementById('zoom').textContent=on?'Fit to view':'Zoom 100%';};
 function show(index){active=(index+visibleFrames.length)%visibleFrames.length;const f=visibleFrames[active],img=document.getElementById('full-image');img.src=f.original;img.alt=f.headline.join(' ');document.getElementById('modal-title').textContent=f.localeName+' · '+f.id+' · '+f.revision;document.getElementById('download').href=f.original;setZoom(false);viewer.scrollTo(0,0);}
 for(const locale of data.locales){
  const option=document.createElement('option');option.value=locale.locale;option.textContent=locale.name+' · '+locale.status;picker.append(option);
  const section=document.createElement('section');section.id='locale-'+locale.locale;section.className='locale-section';section.dataset.locale=locale.locale;section.lang=locale.locale;
  const head=document.createElement('div');head.className='locale-head';const title=document.createElement('h2');title.textContent=locale.name;const status=document.createElement('span');status.className='status';status.textContent=locale.status;const download=document.createElement('a');download.href=locale.download;download.download='';download.textContent='ZIP · 8 PNG';head.append(title,status,download);
  const row=document.createElement('div');row.className='grid';
  for(const f of data.frames.filter(f=>f.locale===locale.locale)){
   const figure=document.createElement('figure');figure.className='frame';figure.dataset.key=f.renderKey;
   const button=document.createElement('button');button.setAttribute('aria-label','Открыть '+f.id+': '+f.headline.join(' '));
   const img=document.createElement('img');img.src=f.preview;img.alt=f.headline.join(' ');img.width=440;img.height=956;button.append(img);
   button.addEventListener('click',()=>{opener=button;visibleFrames=data.frames.filter(x=>x.locale===locale.locale);active=visibleFrames.findIndex(x=>x.renderKey===f.renderKey);show(active);dialog.showModal();document.getElementById('close').focus();});
   const cap=document.createElement('figcaption');cap.textContent=f.slot;const label=document.createElement('span');label.textContent=f.locale+' · '+f.revision+' · '+locale.status;cap.append(label);figure.append(button,cap);row.append(figure);
  }
  section.append(head,row);grid.append(section);
 }
 function selectLocale(code,updateUrl=true){
  if(!data.locales.some(l=>l.locale===code))code=data.defaultLocale;
  picker.value=code;
  document.querySelectorAll('.locale-section').forEach(section=>section.hidden=section.dataset.locale!==code);
  visibleFrames=data.frames.filter(f=>f.locale===code);
  document.documentElement.lang=code;
  if(updateUrl){const u=new URL(location.href);u.searchParams.set('v',data.revision);u.searchParams.set('locale',code);history.replaceState(null,'',u);}
 }
 picker.addEventListener('change',()=>selectLocale(picker.value));
 selectLocale(new URLSearchParams(location.search).get('locale')||data.defaultLocale,false);
 document.getElementById('previous').onclick=()=>show(active-1);document.getElementById('next').onclick=()=>show(active+1);document.getElementById('close').onclick=()=>dialog.close();document.getElementById('zoom').onclick=()=>setZoom(!viewer.classList.contains('zoomed'));
 dialog.addEventListener('close',()=>opener?.focus());dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close();});dialog.addEventListener('keydown',e=>{if(e.key==='ArrowLeft'){e.preventDefault();show(active-1);}if(e.key==='ArrowRight'){e.preventDefault();show(active+1);}});
 window.galleryReady=true;
})().catch(error=>{document.getElementById('load-error').hidden=false;console.error(error);});
