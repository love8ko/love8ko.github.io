/* All visible screenshot text comes from copy/en-US.json via gallery.json. */
window.hepaticaLayout=function(f,shared){
 const el=(tag,cls,text)=>{const n=document.createElement(tag);n.className=cls;if(text!==undefined)n.textContent=text;return n;};
 const art=el('article','art '+f.id);art.lang='en-US';art.dataset.frame=f.id;
 const photo=el('img','photo');photo.src='assets/'+f.asset;photo.alt=f.scene;art.append(photo);
 art.append(el('div','wordmark',shared.brand.toUpperCase()));
 const head=el('div','head'),h=el('h1','');f.headline.forEach((s,i)=>h.append(el('span',i===f.accent?'accent':'',s)));head.append(h);art.append(head);
 const paths={chat:'<path d="M20 11a8 8 0 0 1-8 8H5l-4 3 1-7a8 8 0 0 1 10-12 8 8 0 0 1 8 8Z"/><path d="M7 9h7M7 13h5"/>',scan:'<path d="M8 3H3v5M16 3h5v5M3 16v5h5M21 16v5h-5"/><path d="M8 9h8v7H8zM10 9l1-2h2l1 2"/><circle cx="12" cy="12.5" r="1.6"/>',calendar:'<rect x="3" y="5" width="18" height="16" rx="3"/><path d="M7 2v6M17 2v6M3 10h18M8 15l3 3 5-5"/>'};
 const strip=el('div','action-strip'),icon=el('div','action-icon');icon.setAttribute('aria-hidden','true');icon.innerHTML='<svg viewBox="0 0 24 24">'+paths[f.icon]+'</svg>';
 const body=el('div','action-copy');body.append(el('p','card-label',f.cardTitle),el('p','focus',f.focus));strip.append(icon,body);art.append(strip);
 const foot=el('footer','');foot.append(el('span','',shared.footer),el('span','',f.id));art.append(foot);return art;
};
