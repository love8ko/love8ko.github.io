/* C/D use identical composition and shared proof components; only the lead changes. */
window.RefluxoraLayout=function(f){
 const n=(tag,cls,text)=>{const e=document.createElement(tag);e.className=cls;if(text)e.textContent=text;return e;};
 const icon=kind=>{const e=n('span','proof-icon');const paths={meal:'<circle cx="18" cy="20" r="10"/><path d="M3 7v12m4-12v12M3 13h4m-2 6v15M35 7v27m0-27c-6 5-6 13 0 13"/>',bed:'<path d="M4 30V12m0 12h32v10M4 30h32M12 24V14h19a5 5 0 0 1 5 5v5"/><circle cx="8" cy="19" r="4"/>'};e.innerHTML='<svg viewBox="0 0 40 40" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'+paths[kind]+'</svg>';return e;};
 const timeline=()=>{const e=n('div','timing-diagram');e.append(icon('meal'),n('span','timing-arrow','→'),n('strong','timing-hours','3 hours'),n('span','timing-arrow','→'),icon('bed'));return e;};
 const dish=cls=>{const e=n('img',cls);e.src=f.foodAsset;e.alt='Grilled salmon with rice, green beans and sauce in a separate ramekin';return e;};
 const art=n('div',`art human casting-${f.series} frame-${f.position}`);
 art.dataset.id=f.id;
 const photo=n('img','art-photo');photo.src=f.asset;photo.alt=f.scene;art.append(photo,n('div','scene-shade'));
 const brand=n('div','art-brand');brand.append(n('span','brand-symbol','✳'),n('span','','refluxora'));art.append(brand,n('div','audience-tags',(f.keywords||['GERD','ACID REFLUX']).join('  •  ')));
 const head=n('div','art-head'),h=n('h3','');f.headlineLines.forEach((line,i)=>h.append(n('span',i===f.accentLine?'accent':'',line)));head.append(h,n('p','art-subline',f.subline));art.append(head);
 if(f.position==='03'){
  const paper=n('div','report-highlight');if(f.reportPlacement)for(const [k,v] of Object.entries(f.reportPlacement))paper.style.setProperty(k,v);
  paper.append(n('span','report-label','Acid exposure time'),n('strong','report-value','7.2%'),n('span','report-demo','Illustrative report'));art.append(paper);
 }
 const phone=n('div','phone');phone.append(n('div','phone-button power'),n('div','phone-button volume'));
 const screen=n('div','phone-screen'),status=n('div','phone-status');status.append(n('span','',f.position==='01'?'1:24':'9:41'),n('span','island'),n('span','status-icons','▮▮▮ ▰'));screen.append(status);
 const ui=n('div','ui-body'),top=n('div','ui-top');top.append(n('span','ui-back','‹'),n('span','app-name','Refluxora'),n('span','ui-menu','···'));ui.append(top,n('div','ui-label','AI explanation · Example'));
 if(f.position==='01')ui.append(n('div','question-bubble',f.ui.question));
 if(f.position==='02'){
  const input=n('div','dish-input');input.append(n('h4','','Grilled salmon'),n('p','','Lemon butter sauce'),dish('ui-dish'));ui.append(input);
 }
 if(f.position==='03'){
  const input=n('div','metric-input');input.append(n('span','ui-eyebrow','ACID EXPOSURE TIME'),n('strong','aet-value','7.2%'),n('span','metric-demo','Illustrative pH report'));ui.append(input);
 }
 const answer=n('div','ui-card');if(f.position==='01')answer.append(timeline());answer.append(n('h4','ui-focus',f.ui.focus),n('p','ui-explanation',f.ui.explanation));ui.append(answer);
 
 ui.append(n('div','ui-source',f.position==='03'?'↗ About pH monitoring':'↗ NIDDK · Reflux guidance'),n('p','ui-disclaimer',f.ui.disclaimer));screen.append(ui,n('div','home-indicator'));phone.append(screen,n('div','glass-reflection'));art.append(phone);
 if(f.position==='02'){const food=n('div','food-popout');food.append(dish('hero-dish'),n('span','food-caption','YOUR ORDER, ADJUSTED'));art.append(food);}
 const proof=n('div','proof-card');
 if(f.position==='01')proof.append(timeline());else proof.append(n('span','proof-label',f.proofLabel));
 proof.append(n('strong','proof-focus',f.ui.focus));art.append(proof);
 const foot=n('div','art-foot');foot.append(n('span','','Illustrative interface · Design concept'),n('span','',f.id));art.append(foot);return art;
};
