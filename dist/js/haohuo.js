class Modules_1{
    constructor(){
        this.loadJSON()
        .done($.proxy(function(res){
            //console.log(res);
            this.renderPag(res)
        },this))
    }
    loadJSON(){
        return $.ajax({
            url : '../php/goods.json',
            dataType:'json'
        })
    }
    renderPag(json){
        var html = '';
        for(let i = 0 ,len = json.length ; i < len ;i ++){
            html +=`
                    <li >
                        <a href="javascript:void(0)">
                            <img src="${json[i].img}" alt="">
                        <p></p>
                        </a>
                    </li>`
        }
        $('#pop-list').html(html);
        

    }
}
new Modules_1()
