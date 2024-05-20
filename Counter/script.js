let c = 0, value = "Zero";
const para = document.getElementById('count')
const para1 = document.getElementById('eo')

function incr (){
    if(c < 25){
        ++c;
    }
    para.textContent = c;
    view();
}

function decr (){
    if(c > 0){
        --c;
    }
    para.textContent = c;
    view();
}

function view (){
    if(c % 2 == 0){
        if(c == 0) value = "Zero"
        else value = "Even"
    } else {
        value = "Odd"
    }
    para1.textContent = value;
}

function reset (){
    c = 0;
    value = "Zero";
    para.textContent = c;
    para1.textContent = value;
}