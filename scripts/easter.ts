const K : string[] = Array(3).fill(["1","ArrowUp"]).flat();
let k : string[] = [];

document.addEventListener('keyup', e=>{
    k.push(e.key);

    if (k.length > K.length) k.shift();

    if (k.join() == K.join()) {
        document.documentElement.style.setProperty("--theme", "red");
    }
});

let me = document.currentScript;
fetch("/splashes.txt").then(r=>r.text()).then(txt=>{
    let arr = txt.split('\n').filter(s=>s!='');
    me!.outerHTML = arr[Math.random()*arr.length|0];
});