//closure
/*(function(){
    let btninsert = document.getElementById("btn-insert");
    let txtproduct = document.getElementById("txtproduct");
    let itens = document.getElementById("itens");
    let txtnumber = document.getElementById("txtnumber");
    let numbers = document.getElementById("numbers");
    let buttonlist = document.getElementById("button-list");
    let btncancel = document.getElementById("btn-cancel");

    let listProd = [];
    let listNum = [];
    let listButton = [];

    btninsert.onclick = click_btninsert;
    btncancel.onclick = click_btncancel;

    function click_btninsert(){
        //console.log("Clicou...");
        addProd(txtproduct.value);
        addNum(txtnumber.value);
        addButton("button");
    }

    function click_btncancel(){
        txtproduct.value = "";
        txtnumber.value = "";
    }

    function addProd(product){
        listProd.push(product);
        update_itens();
    }

    function addNum(num){
        listNum.push(num);
        update_numbers();
    }

    function addButton(button){
        listButton.push(button);
        update_buttons();
    }

    function update_itens(){
        itens.innerHTML = "";
        txtproduct.value = "";
        for(let i in listProd){
            let oneItem = listProd[i];
            let li = document.createElement("li");
            li.appendChild(document.createTextNode(oneItem));
            itens.appendChild(li);
        }
    }

    function update_numbers(){
        numbers.innerHTML = "";
        txtnumber.value = "";
        for(let i in listNum){
            let oneNumber = listNum[i] + " x";
            let li = document.createElement("li");
            li.appendChild(document.createTextNode(oneNumber));
            numbers.appendChild(li);
        }
    }

    function update_buttons(){
        buttonlist.innerHTML = "";
        for(let i in listButton){
            let li = document.createElement("li");

            let div = document.createElement("div");
            div.className = "buttons";

            let btn1 = document.createElement("button");
            btn1.innerHTML = "Comprado";
            btn1.type = "button";
            btn1.id = "btn-purchased";
            btn1.className = "btn-purchased";

            let btn2 = document.createElement("button");
            btn2.innerHTML = "Deletar";
            btn2.type = "button";
            btn2.id = "btn-delete";
            btn2.className = "btn-delete";

            div.appendChild(btn1);
            div.appendChild(btn2);
            li.appendChild(div);

            buttonlist.appendChild(li);
        }
    }
})();*/

(function(){
    let btninsert = document.getElementById("btn-insert");
    let txtproduct = document.getElementById("txtproduct");
    let txtnumber = document.getElementById("txtnumber");
    let noitens = document.getElementById("no-itens");
    let list = document.getElementById("list");
    let btncancel = document.getElementById("btn-cancel");
    let btndelete = document.getElementById("btn-delete");
    let divbuttons = document.getElementById("div-buttons");

    let listProd = [];
    let listNum = [];
    let listButton = [];

    btninsert.onclick = click_btninsert;
    btncancel.onclick = click_btncancel;
    txtproduct.onkeydown = key_enter;
    txtnumber.onkeydown = key_enter;
    

    function click_btninsert(){
        //console.log("Clicou...");
        changeCss();
        addProd(txtproduct.value);
        addNum(txtnumber.value);
        addButton("button");
        update();
        removeItem();
    }

    function key_enter(key){
        if(key.key === 'Enter'){
            click_btninsert();
        }
    }

    function click_btncancel(){
        txtproduct.value = "";
        txtnumber.value = "";
    }

    function click_btndelete(){
        //console.log("deletar");
        //console.log(e.target.getAttribute("data-id"));
        let line = this.parentNode.parentNode;
        line.remove();
        visibleNoItens();
    }

    function click_btnpurchased(){
        //console.log("comprado");
        //console.log(this.parentNode.parentNode);
        let p1 = this.parentNode.previousElementSibling;
        p1.classList.toggle('purchased');
    }

    function changeCss(){
        noitens.classList.add('deleted');
    }

    function addProd(product){
        listProd.push(product);
    }

    function addNum(num){
        listNum.push(num);
    }

    function addButton(button){
        listButton.push(button);
    }

    function removeItem(){
        listProd.shift();
        listNum.shift();
        listButton.shift();
    }

    function visibleNoItens(){
        let lines = document.getElementById("line");
        if(lines == null){
            noitens.classList.remove('deleted');
        }
    }

    function update(){
        //list.innerHTML = "";
        txtproduct.value = "";
        txtnumber.value = "";
        for(let i in listProd){
            let oneItem = listProd[i];
            let oneNumber = listNum[i];

            let li = document.createElement("li");
            li.id = "line";

            let div1 = document.createElement("div");
            div1.className = "text";

            let p1 = document.createElement("p");
            p1.className = "product";
            p1.id = "text-li1";
            p1.appendChild(document.createTextNode(oneItem));

            let p2 = document.createElement("p");
            p2.className = "number";
            p2.id = "text-li2";
            p2.appendChild(document.createTextNode(oneNumber));

            let div2 = document.createElement("div");
            div2.className = "buttons";
            div1.id = "div-buttons";

            let btn1 = document.createElement("button");
            btn1.innerHTML = "Comprado";
            btn1.type = "button";
            btn1.id = "btn-purchased";
            btn1.className = "btn-purchased";
            btn1.onclick = click_btnpurchased;

            let btn2 = document.createElement("button");
            btn2.innerHTML = "Deletar";
            btn2.type = "button";
            btn2.id = "btn-delete";
            btn2.className = "btn-delete";
            btn2.onclick = click_btndelete;

            div1.appendChild(p1);
            div1.appendChild(p2);
            div2.appendChild(btn1);
            div2.appendChild(btn2);
            li.appendChild(div1);
            li.appendChild(div2);

            list.appendChild(li);
        }
    }
})();