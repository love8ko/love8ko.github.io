/* All visible screenshot text comes from copy/en-US.json via gallery.json. */
window.hepaticaLayout=function(f,shared){
 const el=(tag,cls,text)=>{const n=document.createElement(tag);n.className=cls;if(text!==undefined)n.textContent=text;return n;};
 const art=el('article','art '+f.id);art.lang='en-US';art.dataset.frame=f.id;
 const photo=el('img','photo');photo.src='assets/'+f.asset;photo.alt=f.scene;art.append(photo);
 const brand=el('div','wordmark');brand.innerHTML='<svg class="liver-mark" viewBox="0 0 28 24" aria-hidden="true"><path d="M3 9C5 5 11 4 17 6l7 1c3 0 3 4 0 6l-7 2c-5 1-8 6-12 5-3-1-4-7-2-11Z"/><path d="M17 6c0 5-2 8-5 11"/></svg>';brand.append(el('span','',shared.brand.toUpperCase()));art.append(brand);if(f.sceneLabel)art.append(el('div','scene-label',f.sceneLabel));
 const head=el('div','head'),h=el('h1','');f.headline.forEach((s,i)=>h.append(el('span',i===f.accent?'accent':'',s)));head.append(h);art.append(head);
 const paths={chat:'<path d="M20 11a8 8 0 0 1-8 8H5l-4 3 1-7a8 8 0 0 1 10-12 8 8 0 0 1 8 8Z"/><path d="M7 9h7M7 13h5"/>',scan:'<path d="M8 3H3v5M16 3h5v5M3 16v5h5M21 16v5h-5"/><path d="M8 9h8v7H8zM10 9l1-2h2l1 2"/><circle cx="12" cy="12.5" r="1.6"/>',calendar:'<rect x="3" y="5" width="18" height="16" rx="3"/><path d="M7 2v6M17 2v6M3 10h18M8 15l3 3 5-5"/>'};
 const strip=el('div','action-strip'),icon=el('div','action-icon');icon.setAttribute('aria-hidden','true');icon.innerHTML='<svg viewBox="0 0 24 24">'+paths[f.icon]+'</svg>';
 const body=el('div','action-copy');body.append(el('p','card-label',f.cardTitle),el('p','focus',f.focus));strip.append(icon,body);if(!f.mockup)art.append(strip);
 if(f.mockup){
 const m=f.mockup,wrap=el('section','app-detail');wrap.append(el('p','mockup-action',f.focus));
 const device=el('div','device'),screen=el('div','app-screen'),nav=el('div','app-nav');
 nav.append(el('span','app-cancel',m.cancel),el('strong','app-title',m.title),el('span','app-save',m.save));
 const day=el('div','app-day');day.append(el('span','',m.dayLabel),el('span','app-date',m.day));
 const card=el('div','app-drinks');card.append(el('p','app-measure',m.measure));const step=el('div','app-step');step.append(el('span','app-minus','−'),el('strong','app-value',m.value),el('span','app-plus','+'));card.append(step,el('p','app-state',m.state));
 screen.append(nav,day,card);device.append(screen);wrap.append(device,el('span','mockup-caption',m.caption));art.append(wrap);
 }
 const foot=el('footer','');foot.append(el('span','',shared.footer),el('span','',f.id));art.append(foot);return art;
};
