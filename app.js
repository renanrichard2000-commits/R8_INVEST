/* ===== Estado / progresso (salvo no navegador) ===== */
const STORE_KEY = "rea_progress_v1";
let done = {};
try { done = JSON.parse(localStorage.getItem(STORE_KEY) || "{}"); } catch(e){ done = {}; }
let currentCourse = null, currentLessonKey = null, activeFilter = "todos";

const lessonKey = (c, m, l) => `${c}:${m}:${l}`;
function courseLessons(course){ let n=0; course.modules.forEach(m=>n+=m.lessons.length); return n; }
function courseDone(course){ let n=0; course.modules.forEach((m,mi)=>m.lessons.forEach((_,li)=>{ if(done[lessonKey(course.id,mi,li)]) n++; })); return n; }
function save(){ localStorage.setItem(STORE_KEY, JSON.stringify(done)); }

/* ===== Navegação ===== */
function showView(name){
  document.querySelectorAll(".view").forEach(v=>v.classList.remove("active"));
  document.getElementById("view-"+name).classList.add("active");
  ["home","progress","about"].forEach(n=>{
    const b=document.getElementById("nav-"+n); if(b) b.classList.toggle("active", n===name);
  });
  if(name==="progress") renderProgress();
  if(name==="home") renderCourses();
  window.scrollTo({top:0,behavior:"smooth"});
}

/* ===== Catálogo ===== */
function setFilter(btn){
  document.querySelectorAll("#filters button").forEach(b=>b.classList.remove("active"));
  btn.classList.add("active"); activeFilter = btn.dataset.cat; renderCourses();
}
function renderCourses(){
  const q = (document.getElementById("search").value || "").toLowerCase();
  const grid = document.getElementById("course-grid");
  const list = COURSES.filter(c =>
    (activeFilter==="todos" || c.category===activeFilter) &&
    (c.title.toLowerCase().includes(q) || c.description.toLowerCase().includes(q))
  );
  document.getElementById("empty-msg").style.display = list.length ? "none" : "block";
  grid.innerHTML = list.map(c=>{
    const total = courseLessons(c), d = courseDone(c), pct = total ? Math.round(d/total*100) : 0;
    return `<article class="course-card">
      <div class="thumb ${c.thumb}"><span class="thumb-icon">${c.icon}</span><span class="badge">${c.categoryLabel}</span><span class="level">${c.level} · ⭐ ${c.rating}</span></div>
      <div class="card-body">
        <h3>${c.title}</h3><p>${c.description}</p>
        <div class="meta"><span>🎬 ${total} aulas</span><span>🧩 ${c.modules.length} módulos</span><span>📜 Certificado</span></div>
        <div class="progress-wrap"><div class="progress-bar"><div class="progress-fill" style="width:${pct}%"></div></div>
        <div class="progress-label"><span>${d} de ${total} aulas</span><span>${pct}%</span></div></div>
        <button class="btn" onclick="openCourse('${c.id}')">${d>0 ? "▶ Continuar assistindo" : "▶ Começar curso"}</button>
      </div></article>`;
  }).join("");
  refreshStats();
}
function refreshStats(){
  const total = COURSES.reduce((s,c)=>s+courseLessons(c),0);
  const d = COURSES.reduce((s,c)=>s+courseDone(c),0);
  document.getElementById("stat-courses").textContent = COURSES.length;
  document.getElementById("stat-lessons").textContent = total;
  document.getElementById("stat-done").textContent = d;
}
function refreshAll(){ renderCourses(); if(currentCourse) renderPlaylist(); }

/* ===== Player ===== */
function openCourse(id){
  currentCourse = COURSES.find(c=>c.id===id);
  // abre na primeira aula não concluída (ou na primeira)
  outer: for(let mi=0; mi<currentCourse.modules.length; mi++){
    for(let li=0; li<currentCourse.modules[mi].lessons.length; li++){
      if(!done[lessonKey(id,mi,li)]){ selectLesson(mi,li); break outer; }
    }
    if(mi===currentCourse.modules.length-1) selectLesson(0,0);
  }
  showView("player");
  document.querySelectorAll("nav button").forEach(b=>b.classList.remove("active"));
}
function selectLesson(mi, li){
  const lesson = currentCourse.modules[mi].lessons[li];
  currentLessonKey = lessonKey(currentCourse.id, mi, li);
  document.getElementById("video-lesson-title").textContent = lesson.title;
  document.getElementById("lesson-title").textContent = lesson.title;
  document.getElementById("lesson-desc").textContent = lesson.desc + "  ·  ⏱ Duração: " + lesson.duration;
  renderPlaylist();
  updateDoneBtn();
  window.scrollTo({top:0,behavior:"smooth"});
}
function renderPlaylist(){
  document.getElementById("playlist-course").textContent = currentCourse.icon + " " + currentCourse.title;
  const total = courseLessons(currentCourse), d = courseDone(currentCourse);
  const pct = total ? Math.round(d/total*100) : 0;
  document.getElementById("playlist-progress").textContent = `${d} de ${total} aulas concluídas (${pct}%)`;
  document.getElementById("playlist-fill").style.width = pct + "%";
  let html = "";
  currentCourse.modules.forEach((m,mi)=>{
    html += `<div class="module-title">${m.title}</div>`;
    m.lessons.forEach((l,li)=>{
      const k = lessonKey(currentCourse.id,mi,li);
      html += `<div class="lesson ${done[k]?'completed':''} ${k===currentLessonKey?'current':''}" onclick="selectLesson(${mi},${li})">
        <div class="num">${done[k]?'✓':li+1}</div>
        <div class="info"><b>${l.title}</b><span>⏱ ${l.duration}</span></div></div>`;
    });
  });
  document.getElementById("playlist").innerHTML = html;
}
function updateDoneBtn(){
  const b = document.getElementById("btn-done"), is = !!done[currentLessonKey];
  b.classList.toggle("done", is);
  b.textContent = is ? "✓ Aula concluída (clique p/ desmarcar)" : "✓ Marcar como concluída";
}
function toggleDone(){
  if(done[currentLessonKey]) delete done[currentLessonKey]; else { done[currentLessonKey]=1; toast("🎉 Aula concluída! Progresso salvo."); }
  save(); updateDoneBtn(); renderPlaylist(); refreshStats();
}

/* ===== Progresso ===== */
function renderProgress(){
  const total = COURSES.reduce((s,c)=>s+courseLessons(c),0);
  const d = COURSES.reduce((s,c)=>s+courseDone(c),0);
  document.getElementById("p-done").textContent = d;
  document.getElementById("p-total").textContent = total;
  document.getElementById("p-percent").textContent = (total?Math.round(d/total*100):0) + "%";
  document.getElementById("p-courses-done").textContent = COURSES.filter(c=>courseDone(c)===courseLessons(c) && total>0).length;
  document.getElementById("progress-list").innerHTML = COURSES.map(c=>{
    const t=courseLessons(c), dd=courseDone(c), pct=t?Math.round(dd/t*100):0;
    return `<div class="course-card" style="margin-bottom:14px"><div class="card-body">
      <h3>${c.icon} ${c.title}</h3>
      <div class="progress-wrap"><div class="progress-bar"><div class="progress-fill" style="width:${pct}%"></div></div>
      <div class="progress-label"><span>${dd} de ${t} aulas</span><span>${pct}%</span></div></div>
      <button class="btn ghost" onclick="openCourse('${c.id}')">▶ Abrir curso</button></div></div>`;
  }).join("");
}

/* ===== Toast ===== */
let toastTimer;
function toast(msg){
  const t = document.getElementById("toast"); t.textContent = msg; t.classList.add("show");
  clearTimeout(toastTimer); toastTimer = setTimeout(()=>t.classList.remove("show"), 3200);
}

renderCourses();
