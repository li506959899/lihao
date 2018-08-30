window.onload = function () {


    class Modules_2 {
        constructor() {
            this.loadJSON()
                .done($.proxy(function (res) {
                    // console.log(res);
                    this.renderPag(res)
                }, this))
        }
        loadJSON() {
            return $.ajax({
                url: '../php/goodlist.json',
                dataType: 'json'
            })
        }
        renderPag(json) {
            //console.log(json);

            for (var i = 0, len = json.length; i < len; i++) {
                let html = '';
                html = `
            <li class="goodshover">
            <div class="fixname">
                <a href="../html/details.html">
                    <img src="${json[i].goodsImg}" alt="">
                    <p class="size_p">限时7折</p>
                    <dl class="size_lie">
                        <dd>可售配置：</dd>
                        <dt>S</dt>
                        <dt>M</dt>
                        <dt>L</dt>
                        <dt>XL</dt>
                        <dt>XXL</dt>
                    </dl>
                </a>
            </div>
            <span>${json[i].brandCNName}</span>
            <span>
                <a href="javascript:void(0)">${json[i].goodsName}</a>
            </span>
            <span>
                <b>${json[i].finalPrice}</b>
                <del>${json[i].xiuPrice}</del>
            </span>
        </li>
        `
                $('#poplist').append(html);

            }


        }
    }
    new Modules_2()
}