/* Extend E04–E08 only. Reviewed E01–E03 and the C renderer stay intact. */
window.RefluxoraTrioLayout = window.RefluxoraLayout;
window.RefluxoraLayout = function(f) {
  if (f.series !== 'E' || Number(f.position) < 4) return window.RefluxoraTrioLayout(f);
  const n=(tag,cls,text)=>{const el=document.createElement(tag);el.className=cls;if(text)el.textContent=text;return el;};
  const copy=f.copy||{};
  if(f.position==='08') {
    const art=window.RefluxoraCLayout({...f,series:'C'});art.classList.add('series-E','e-extended','e-08');
    art.classList.add(`locale-${f.locale||'en-US'}`);art.lang=f.lang||'en';art.querySelector('.art-brand').remove();
    return art;
  }
  const art=n('div',`art series-E e-extended e-${f.position} locale-${f.locale||'en-US'}`);art.dataset.id=f.id;art.lang=f.lang||'en';
  const photo=n('img','art-photo');photo.src=f.asset;photo.alt=f.scene;art.append(photo);
  const head=n('div','art-head'),h=n('h3','');
  f.headlineLines.forEach((line,i)=>h.append(n('span',i===f.accentLine?'accent':'',line)));
  head.append(h,n('p','art-subline',f.subline));art.append(head);
  const app=n('div','e-app'),top=n('div','e-app-top');
  top.append(n('strong','',f.ui.title),n('span','',copy.example||'Example'));app.append(top);

  if(f.position==='04') {
    const schedule=n('div','e-schedule');
    for(const [label,time] of f.ui.context){const cell=n('div','e-time');cell.append(n('span','',label),n('strong','',time));schedule.append(cell);}
    app.append(schedule,n('div','e-reminder',f.ui.cta));
  }
  if(f.position==='05') {
    const rows=n('div','e-saved-entries');
    for(const [time,label] of f.ui.context){const row=n('div','e-entry');row.append(n('span','e-entry-check','✓'),n('strong','',label),n('span','e-entry-time',time));rows.append(row);}
    app.append(n('div','e-day',f.ui.contextDate),rows);
  }
  if(f.position==='06') {
    const chips=n('div','e-observations');
    for(const [label,value] of f.ui.context){const chip=n('div','e-observation');chip.append(n('span','',label),n('strong','',value),n('span','e-observation-check','✓'));chips.append(chip);}
    app.append(n('div','e-day',f.ui.contextDate),chips);
  }
  if(f.position==='07') {
    const timeline=n('div','e-history');
    f.ui.context.forEach(([time,label],i)=>{const row=n('div','e-history-row');const icon=n('div',`e-history-icon history-${i}`);
      if(i===0){icon.innerHTML='<svg viewBox="0 0 40 40" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" aria-label="Meal"><circle cx="18" cy="20" r="10"/><path d="M3 7v12m4-12v12M3 13h4m-2 6v15M35 7v27m0-27c-6 5-6 13 0 13"/></svg>';}else{icon.append(n('span','','☾'));}
      const text=n('div','');text.append(n('span','e-history-time',time),n('strong','e-history-label',label));row.append(icon,text);timeline.append(row);
    });
    app.append(n('div','e-day',f.ui.contextDate),timeline);
  }
  if(f.position==='08') {
    const doc=n('div','e-summary-document');doc.append(n('span','e-summary-format','PDF'),n('strong','e-summary-title','Your saved history'),n('span','e-summary-date','Sep 7–10 · Example'));
    for(const text of f.summaryRows)doc.append(n('div','e-summary-row','✓ '+text));
    app.append(doc,n('div','e-share-button',f.ui.cta));
  }
  const result=n('div','e-result');result.append(n('span','e-result-label',f.proofLabel),n('strong','ui-focus proof-focus',f.ui.focus));
  app.append(result,n('p','e-explanation',f.ui.explanation));art.append(app);
  const foot=n('div','art-foot');foot.append(n('span','',copy.footer||'Illustrative interface · Design concept'),n('span','',f.id));art.append(foot);
  return art;
};
