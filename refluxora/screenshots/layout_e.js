/* E is an additional direction. The original C renderer remains unchanged. */
window.RefluxoraCLayout=window.RefluxoraLayout;
window.RefluxoraLayout=function(f){
 if(f.series!=='E')return window.RefluxoraCLayout(f);
 const n=(tag,cls,text)=>{const e=document.createElement(tag);e.className=cls;if(text)e.textContent=text;return e;};
 if(f.position==='02'){
  const art=window.RefluxoraCLayout({...f,series:'C'});art.classList.add('series-E','e-02');
  art.querySelector('.art-brand')?.remove();art.querySelector('.app-name').textContent=f.ui.title;return art;
 }
 const copy=f.copy||{};const art=n('div',`art series-E e-${f.position} locale-${f.locale||'en-US'}`);art.dataset.id=f.id;art.lang=f.lang||'en';
 const photo=n('img','art-photo');photo.src=f.asset;photo.alt=f.scene;art.append(photo,n('div','scene-shade'));
 const head=n('div','art-head'),h=n('h3','');f.headlineLines.forEach((line,i)=>h.append(n('span',i===f.accentLine?'accent':'',line)));head.append(h,n('p','art-subline',f.subline));art.append(head);
 if(f.position==='01')art.append(n('div','e-anatomy-caption',copy.anatomyCaption||'Reflux explained'));
 if(f.report){
  const paper=n('div','e-report-print');paper.append(n('div','e-pdf-badge',f.report.format),n('strong','e-report-title',f.report.title),n('span','e-report-type',f.report.type),n('span','e-report-demo',f.report.date),n('div','e-report-rule'));
  const finding=n('div','e-report-finding');finding.append(n('span','',f.report.findingLabel+':'),n('strong','e-paper-term',f.report.finding));paper.append(finding,n('div','e-report-rule'),n('span','e-paper-note',copy.paperNote||'Your uploaded report'));art.append(paper,n('div','e-report-connector',copy.reportConnector||'PDF → AI'));
 }
 const app=n('div','e-app'),top=n('div','e-app-top');top.append(n('strong','',f.ui.title),n('span','',copy.example||'Example'));app.append(top);
 if(f.ui.question)app.append(n('div','e-ui-question',f.ui.question));
 if(f.ui.context){const ctx=n('div','e-context');for(const[a,b]of f.ui.context){const item=n('div','');item.append(n('span','',a),n('strong','',b));ctx.append(item);}app.append(ctx);}
 if(f.report){const finding=n('div','e-ui-finding');finding.append(n('span','',copy.reportLead||'Your report says'),n('strong','e-ui-term',f.report.finding));app.append(finding);}
 const result=n('div','e-result');result.append(n('span','e-result-label',f.proofLabel),n('strong','ui-focus proof-focus',f.ui.focus));app.append(result,n('p','e-explanation',f.ui.explanation));art.append(app);
 const foot=n('div','art-foot');foot.append(n('span','',copy.footer||'Illustrative interface · Design concept'),n('span','',f.id));art.append(foot);return art;
};
