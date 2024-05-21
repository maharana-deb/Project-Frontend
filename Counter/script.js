let c = 0;
const para = document.getElementById('count')

function incr (){
    if(c < 25){
        ++c;
    }
    para.textContent = c;
    change();
    // change1();
    // change2();
}

function decr (){
    if(c > 0){
        --c;
    }
    para.textContent = c;
    change();
}

function reset (){
    c = 0;
    para.textContent = c;
    change();
}

function change() {
    let color1 = "#" + Math.floor(Math.random()*10000000).toString(16);
    let color2 = "#" + Math.floor(Math.random()*10000000).toString(16);
    document.getElementById('main').style.background=`linear-gradient(${color1}, ${color2})`;
    change1(color1);
    change2(color2)
}

function change1(c1) {
    document.getElementById('select1').style.backgroundColor= c1;
}

function change2(c2) {
    document.getElementById('select2').style.backgroundColor= c2;
}