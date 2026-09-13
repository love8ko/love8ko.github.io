/* R10: source-based, enlarged interface details. Every word lives in the copy manifest. */
window.hepaticaProductLayout=function(f,shared){
 const el=(tag,cls,text)=>{const n=document.createElement(tag);n.className=cls;if(text!==undefined)n.textContent=text;return n;};
 const p=f.product,art=el('article','art product-art '+f.slot+' product-'+p.kind);art.lang='en-US';art.dataset.frame=f.id;
 if(f.asset){const photo=el('img','product-photo');photo.src='assets/'+f.asset;photo.alt=f.scene;art.append(photo);}
 const head=el('div','head'),h=el('h1','');f.headline.forEach((s,i)=>h.append(el('span',i===f.accent?'accent':'',s)));head.append(h);art.append(head);
 if(p.kind==='symptom'){const moon=el('div','night-symbol');moon.setAttribute('aria-hidden','true');moon.innerHTML='<svg viewBox="0 0 120 120"><path d="M95 77A45 45 0 0 1 42 15a47 47 0 1 0 53 62Z" fill="currentColor"/><path d="m92 10 3 9 9 3-9 3-3 9-3-9-9-3 9-3ZM109 46l2 5 5 2-5 2-2 5-2-5-5-2 5-2Z" fill="currentColor"/></svg>';art.append(moon);}
 const device=el('section',p.phone?'product-device':'product-panel'),screen=el('div','product-screen');
 if(p.phone){const status=el('div','product-status');status.append(el('span','','9:41'),el('i','product-island'),el('span','product-signal','▰'));screen.append(status);}
 const nav=el('div','product-nav');if(p.back)nav.append(el('span','product-back',p.back));nav.append(el('strong','product-title',p.title));if(p.action)nav.append(el('span','product-nav-action',p.action));screen.append(nav);
 const body=el('div','product-body');
 const label=t=>el('p','product-label',t);
 const field=(name,value,cls='')=>{const row=el('div','product-field '+cls);row.append(label(name),el('p','product-field-value',value));return row;};
 const day=()=>{const d=el('div','product-date');d.append(el('span','',p.dayLabel),el('strong','',p.day));return d;};
 if(p.kind==='answer'){
  body.append(el('h2','product-result-title',p.heading));
  const context=el('div','product-context');context.append(label(p.contextLabel),el('p','product-context-text',p.context));body.append(context,el('p','product-answer-text',p.answer),label(p.resultLabel));
  const list=el('div','product-questions');p.questions.forEach((q,i)=>{const row=el('div','product-question');row.append(el('span','product-check',i===0?'✓':''),el('p','',q));list.append(row);});body.append(list,el('div','product-primary',p.button));
 }else if(p.kind==='visit'){
  body.append(label(p.label));p.questions.forEach((q,i)=>{const row=el('div','visit-question');row.append(el('span','visit-number',String(i+1)),el('p','',q),el('span','visit-remove','−'));body.append(row);});body.append(el('div','product-add','＋ '+p.add));
 }else if(p.kind==='history'){
  body.append(el('p','history-summary',p.summary));p.items.forEach(item=>{const row=el('div','history-entry');row.append(el('p','history-task',item.title),el('p','history-question',item.text));const date=el('div','history-date');date.append(el('span','',item.date),el('span','history-chevron','›'));row.append(date);body.append(row);});
 }else if(p.kind==='symptom'){
  body.append(day(),field(p.typeLabel,p.type,'symptom-type'));const severity=el('div','severity-field');severity.append(label(p.severityLabel));const choices=el('div','severity-choices');for(let i=1;i<=5;i++)choices.append(el('span',i<=p.severity?'selected':'',String(i)));severity.append(choices,el('p','severity-scale',p.scale));body.append(severity,field(p.noteLabel,p.note,'symptom-note'));
 }else if(p.kind==='medication'){
  body.append(day(),field(p.nameLabel,p.name,'medication-name'),field(p.doseLabel,p.dose,'medication-dose'),el('p','medication-disclaimer',p.disclaimer));
 }
 screen.append(body);device.append(screen);art.append(device);
 if(['answer','history'].includes(p.kind)){const action=el('div','product-benefit');action.append(el('p','card-label',f.cardTitle),el('p','focus',f.focus));art.append(action);}
 const foot=el('footer','');foot.append(el('span','',p.example),el('span','',f.id));art.append(foot);return art;
};
