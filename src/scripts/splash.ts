let me = document.currentScript;
fetch("/splashes.txt").then(r=>r.text()).then(txt=>{
    let arr = txt.split('\n').filter(s=>s!='');
    me!.outerHTML = arr[Math.random()*arr.length|0];
});