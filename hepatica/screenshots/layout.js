/* Exact visible English text comes exclusively from copy/en-US.json via gallery.json. */
window.hepaticaLayout = function(f, shared) {
  const el=(tag,cls,text)=>{const n=document.createElement(tag);n.className=cls;if(text!==undefined)n.textContent=text;return n;};
  const art=el('article','art '+f.id);art.lang='en-US';art.dataset.frame=f.id;
  const photo=el('img','photo');photo.src='assets/'+f.asset;photo.alt=f.scene;art.append(photo);
  const head=el('div','head'),h=el('h1','');f.headline.forEach((s,i)=>h.append(el('span',i===f.accent?'accent':'',s)));
  const sub=el('p','subline');f.subline.forEach(s=>sub.append(el('span','',s)));head.append(h,sub);art.append(head);
  if(f.paper){const p=el('div','paper-print');p.append(el('p','paper-title',f.paper.title),el('span','paper-date',f.paper.date));const t=el('div','paper-term');t.append(el('small','',f.paper.label),el('strong','',f.paper.term),el('span','',f.paper.definition));p.append(t);art.append(p);}
  art.append(el('div','brand',shared.brand.toUpperCase()));
  const card=el('div','result-card'),top=el('div','card-top');top.append(el('strong','',f.cardTitle),el('span','example',shared.exampleLabel));card.append(top,el('p','question',f.question),el('p','focus',f.focus),el('p','explanation',f.explanation),el('p','note',f.note));art.append(card);
  const foot=el('footer','');foot.append(el('span','',shared.footer),el('span','',f.id));art.append(foot);return art;
};
