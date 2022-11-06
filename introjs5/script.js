function* infinity(){
    let i = 0;
    while(true){
        console.log(i++);
        yield; //"Congela" a função
    }
}

function date(){
    console.log(new Date());
}

const infinityGenerator = infinity();
infinityGenerator.next();
date();
infinityGenerator.next();