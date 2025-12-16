const CODE : string[] = Array(3).fill(["1","ArrowUp"]).flat();
let keys : string[] = [];

document.addEventListener('keyup', e=>{
    keys.push(e.key);

    if (keys.length > CODE.length) keys.shift();

    if (keys.join() == CODE.join()) {
        document.documentElement.style.setProperty("--theme", "red");
    }
});

let me = document.currentScript;
fetch("/splashes.txt").then(r=>r.text()).then(txt=>{
    let arr = txt.split('\n').filter(s=>s!='');
    me!.outerHTML = arr[Math.random()*arr.length|0];
});


let me = document.currentScript;
fetch("/splashes.txt").then(r=>r.text()).then(txt=>{
    let arr = txt.split('\n').filter(s=>s!='');
    me!.outerHTML = arr[Math.random()*arr.length|0];
});
