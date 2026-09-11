/* Exact typography, demo data and product interface; generated photography only. */
window.RefluxoraLayout=function(f){
 const n=(tag,cls,text)=>{const e=document.createElement(tag);e.className=cls;if(text)e.textContent=text;return e;};
 const art=n('div',`art ${f.series==='A'?'human':'product'} frame-${f.position}`);
 const photo=n('img','art-photo');photo.src=f.asset;photo.alt=f.scene;art.append(photo,n('div','scene-shade'));
 const brand=n('div','art-brand');brand.append(n('span','brand-symbol','✳'),n('span','','refluxora'));art.append(brand);
 const head=n('div','art-head'),h=n('h3','');f.headlineLines.forEach((line,i)=>h.append(n('span',i===f.accentLine?'accent':'',line)));head.append(h,n('p',f.position==='02'?'menu-bullet':'',f.subline));art.append(head);
 if(f.series==='B'&&f.position==='01'){const q=n('div','scene-question');q.append(n('span','input-label','YOUR QUESTION'),n('p','',f.ui.question));art.append(q);}
 if(f.position==='02'){const m=n('div','scene-paper menu-paper');m.append(n('span','paper-kicker','FROM THE MENU'),n('h4','','Grilled salmon'),n('p','','Lemon butter sauce'),n('div','paper-rule'),n('span','paper-small','BEFORE YOU ORDER'));art.append(m);}
 if(f.position==='03'){const r=n('div','scene-paper report-paper');r.append(n('span','paper-kicker','ESOPHAGEAL pH REPORT'),n('p','paper-small','Illustrative report'),n('div','paper-rule'));const m=n('div','paper-highlight');m.append(n('span','','Acid exposure time'),n('strong','','7.2%'));r.append(m,n('div','paper-rule'),n('div','paper-rule short'));art.append(r);}
 const phone=n('div','phone');phone.append(n('div','phone-button power'),n('div','phone-button volume'));
 const screen=n('div','phone-screen'),status=n('div','phone-status');status.append(n('span','',f.position==='01'?'1:24':'9:41'),n('span','island'),n('span','status-icons','▮▮▮ ▰'));screen.append(status);
 const ui=n('div','ui-body'),top=n('div','ui-top');top.append(n('span','ui-back','‹'),n('span','',f.ui.title),n('span','ui-menu','···'));ui.append(top,n('div','ui-label',f.ui.label));
 if(f.position==='01')ui.append(n('div','question-bubble',f.ui.question));
 if(f.position==='02'){const d=n('div','ui-input');d.append(n('span','ui-eyebrow','FROM YOUR MENU'),n('h4','','Grilled salmon'),n('p','','Lemon butter sauce'));ui.append(d);}
 if(f.position==='03'){const m=n('div','ui-input');m.append(n('span','ui-eyebrow','ACID EXPOSURE TIME'),n('strong','aet-value','7.2%'),n('p','','Illustrative pH report'));ui.append(m);}
 const answer=n('div','ui-card');answer.append(n('span','ui-eyebrow',f.proofLabel),n('h4','ui-focus',f.ui.focus),n('p','ui-explanation',f.ui.explanation));ui.append(answer,n('div','ui-source',f.position==='03'?'↗ About pH monitoring':'↗ NIDDK · Reflux guidance'),n('div','ui-cta',f.ui.cta),n('p','ui-disclaimer',f.ui.disclaimer));screen.append(ui,n('div','home-indicator'));phone.append(screen,n('div','glass-reflection'));art.append(phone);
 const proof=n('div','proof-card'),copy=n('div','proof-copy');copy.append(n('span','proof-label',f.proofLabel),n('strong','proof-focus',f.ui.focus));proof.append(n('div','proof-mark',f.position==='03'?'Aa':'✓'),copy);art.append(proof);
 const foot=n('div','art-foot');foot.append(n('span','','Illustrative interface · Design concept'),n('span','',f.id));art.append(foot);return art;
};
