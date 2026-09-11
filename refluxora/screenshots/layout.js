/* Shared deterministic composition. All v1 product screens are labelled design concepts. */
window.RefluxoraLayout = function(frame) {
  const el = document.createElement('div');
  el.className = `art ${frame.series === 'A' ? 'human' : 'product'} frame-${frame.position}`;
  const node = (tag, cls, text) => { const n=document.createElement(tag);n.className=cls;if(text)n.textContent=text;return n; };
  el.append(node('div','art-brand','refluxora'));
  const head=node('div','art-head');
  const h=node('h3','');frame.headlineLines.forEach((line,i)=>{if(i)h.append(document.createElement('br'));h.append(document.createTextNode(line));});
  head.append(h,node('p',frame.position==='03'?'menu-bullet':'',frame.subline));el.append(head);
  const photo=node('img','art-photo');photo.src=frame.asset;photo.alt=frame.scene;photo.draggable=false;
  photo.addEventListener('error',()=>{const error=node('p','image-error','Photo unavailable. Please reload the page.');el.append(error);},{once:true});el.append(photo);
  const panel=node('div','product-panel');
  if(frame.series==='B'){const status=node('div','phone-status');status.append(node('span','','9:41'),node('span','island',''),node('span','','▰'));panel.append(status);}
  const ui=node('div','ui-body');
  const top=node('div','ui-top');top.append(node('span','ui-back','‹'),node('span','',frame.ui.title),node('span','ui-menu','···'));ui.append(top);
  const tag=node('div','ui-label');tag.append(node('span','ui-spark','✧'),document.createTextNode(frame.ui.label));ui.append(tag);
  if(frame.position==='01'){
    ui.append(node('div','question-bubble',frame.ui.question));
    const answer=node('div','ui-card');answer.append(node('span','ui-eyebrow','A clearer explanation'),node('h4','',frame.ui.focus),node('p','ui-explanation',frame.ui.explanation));
    const source=node('div','ui-source');source.append(node('span','','↗'),document.createTextNode('NIDDK · Meal timing'));answer.append(source);ui.append(answer);
  }else if(frame.position==='02'){
    const result=node('div','lab-value');result.append(node('span','ui-eyebrow','Vitamin B12'),node('div','lab-number','220'),node('span','lab-unit','pg/mL'),node('p','','Example lab range: 200–900 pg/mL'));ui.append(result);
    const answer=node('div','ui-card');answer.append(node('span','ui-eyebrow','In plain English'),node('h4','',frame.ui.focus),node('p','ui-explanation',frame.ui.explanation));ui.append(answer);
  }else{
    const dish=node('div','dish-name');dish.append(node('span','ui-eyebrow','From the menu'),node('h4','','Grilled salmon'),node('p','','With lemon butter sauce'));ui.append(dish);
    const answer=node('div','ui-card');answer.append(node('span','ui-eyebrow','One change to consider'),node('h4','',frame.ui.focus),node('p','ui-explanation',frame.ui.explanation));ui.append(answer);
  }
  if(frame.series==='B'){const next=node('div','ui-next');next.append(node('span','ui-eyebrow',frame.ui.nextLabel),node('p','',frame.ui.next));ui.append(next);ui.append(node('div','ui-cta',frame.ui.cta),node('p','ui-disclaimer',frame.ui.disclaimer));}
  panel.append(ui);
  if(frame.series==='B')panel.append(node('div','home-indicator',''));
  el.append(panel);
  const foot=node('div','art-foot');foot.append(node('span','','Design concept · Not for App Store'),node('span','',frame.id));el.append(foot);
  return el;
};
