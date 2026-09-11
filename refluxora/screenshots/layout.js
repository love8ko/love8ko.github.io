/* One source of truth for exact product and enlarged-result content. */
window.RefluxoraLayout=function(f){
 const n=(tag,cls,text)=>{const e=document.createElement(tag);e.className=cls;if(text)e.textContent=text;return e;};
 const copy=f.copy||{};
 const icon=kind=>{const e=n('span','proof-icon');const paths={meal:'<circle cx="18" cy="20" r="10"/><path d="M3 7v12m4-12v12M3 13h4m-2 6v15M35 7v27m0-27c-6 5-6 13 0 13"/>',bed:'<path d="M4 30V12m0 12h32v10M4 30h32M12 24V14h19a5 5 0 0 1 5 5v5"/><circle cx="8" cy="19" r="4"/>'};e.innerHTML='<svg viewBox="0 0 40 40" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'+paths[kind]+'</svg>';return e;};
 const timeline=()=>{const e=n('div','timing-diagram');e.append(icon('meal'),n('span','timing-arrow','→'),n('strong','timing-hours',f.proofDiagram.duration),n('span','timing-arrow','→'),icon('bed'));return e;};
 const dish=cls=>{const e=n('img',cls);e.src=f.foodAsset;e.alt=copy.dishAlt||'Grilled salmon with rice, green beans and sauce in a separate ramekin';return e;};
 const art=n('div',`art human casting-${f.series} frame-${f.position} locale-${f.locale||'en-US'}`);art.dataset.id=f.id;art.lang=f.lang||'en';
 const photo=n('img','art-photo');photo.src=f.asset;photo.alt=f.scene;art.append(photo,n('div','scene-shade'));
 const brand=n('div','art-brand');brand.append(n('span','brand-symbol','✳'),n('span','','refluxora'));art.append(brand);
 if(f.keywords?.length)art.append(n('div','audience-tags',f.keywords.join(' • ')));
 const head=n('div','art-head'),h=n('h3','');f.headlineLines.forEach((line,i)=>h.append(n('span',i===f.accentLine?'accent':'',line)));head.append(h,n('p','art-subline',f.subline));art.append(head);
 if(f.metric&&f.reportPlacement){const paper=n('div','report-highlight');for(const[k,v]of Object.entries(f.reportPlacement))paper.style.setProperty(k,v);paper.append(n('span','report-label',f.metric.label),n('strong','report-value',f.metric.value));art.append(paper);}
 const phone=n('div','phone');phone.append(n('div','phone-button power'),n('div','phone-button volume'));
 const screen=n('div','phone-screen'),status=n('div','phone-status');status.append(n('span','',f.position==='01'?'1:24':'9:41'),n('span','island'),n('span','status-icons','▮▮▮ ▰'));screen.append(status);
 const ui=n('div','ui-body'),top=n('div','ui-top');top.append(n('span','ui-back','‹'),n('span','app-name',f.ui.title||'Refluxora'),n('span','ui-menu','···'));ui.append(top,n('div','ui-label',f.ui.label));
 if(f.ui.question)ui.append(n('div','question-bubble',f.ui.question));
 if(f.foodAsset){const input=n('div','dish-input');input.append(n('h4','',copy.dishTitle||'Grilled salmon'),n('p','',copy.dishDescription||'Lemon butter sauce'),dish('ui-dish'));ui.append(input);}
 if(f.metric){const input=n('div','metric-input');input.append(n('span','ui-eyebrow',f.metric.label),n('strong','aet-value',f.metric.value),n('span','metric-demo','Illustrative pH report'));ui.append(input);}
 if(f.ui.context){const context=n('div','context-input');context.append(n('span','context-date',f.ui.contextDate));for(const[a,b]of f.ui.context){const row=n('div','context-row');row.append(n('span','',a),n('strong','',b));context.append(row);}ui.append(context);}
 const answer=n('div','ui-card');answer.append(n('h4','ui-focus',f.ui.focus),n('p','ui-explanation',f.ui.explanation));if(f.ui.nextQuestion)answer.append(n('div','next-question',f.ui.nextQuestion));if(f.ui.context){const detail=answer.querySelector('.ui-explanation');detail.remove();ui.insertBefore(answer,ui.querySelector('.context-input'));ui.append(detail);}else ui.append(answer);
 if(f.ui.cta)ui.append(n('div','ui-cta',f.ui.cta));
 if(f.source)ui.append(n('div','ui-source',copy.sourceLabel||(f.metric?'↗ About pH monitoring':'↗ NIDDK · Reflux guidance')));
 ui.append(n('p','ui-disclaimer',f.ui.disclaimer));screen.append(ui,n('div','home-indicator'));phone.append(screen,n('div','glass-reflection'));art.append(phone);
 if(f.foodAsset){const food=n('div','food-popout');food.append(dish('hero-dish'),n('span','food-caption',copy.dishCaption||'EXAMPLE ORDER'));art.append(food);}
 if(f.position==='08'){const summary=f.summary||{};const doc=n('div','summary-popout');doc.append(n('span','doc-brand',summary.format||'Refluxora · PDF'),n('strong','',summary.title||'Your observations'),n('span','summary-dates',summary.date||'Sep 7–10 · Example'));for(const t of summary.rows||['Meals & symptoms','Throat & voice notes','Your confirmed report'])doc.append(n('div','summary-line','✓ '+t));art.append(doc);}
 const proof=n('div','proof-card');proof.append(n('span','proof-label',f.proofLabel));if(f.proofDiagram)proof.append(timeline());proof.append(n('strong','proof-focus',f.ui.focus));art.append(proof);
 const foot=n('div','art-foot');foot.append(n('span','',copy.footer||'Illustrative interface · Design concept'),n('span','',f.id));art.append(foot);return art;
};
