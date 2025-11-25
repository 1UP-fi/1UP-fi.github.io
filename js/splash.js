let me = document.currentScript;
fetch("/splashes.txt").then(r=>r.text()).then(t=>{
    t=t.split('\n').filter(s=>s!='');
    me.outerHTML = t[Math.random()*t.length|0];
});