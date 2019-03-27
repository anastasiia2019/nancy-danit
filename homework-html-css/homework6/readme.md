## Задание

Сверстать макет [psd](Design_Architecture.psd)

#### Технические требования к верстке:
- Все секции в верхней половине сайта (верхнее меню, `The latest news`, `Most popular posts`) должны быть выполнена используя Flexbox 
- Все секции в нижней половине сайта (`Our most popular clients`, `Top rated`, `Hot news`, подвал) должны быть выполнена используя функционал CSS Grid
- Фоновые картинки должны быть зафиксированы на заднем фоне, и не двигаться при скролле, но между разными блоками должны быть показаны разные картинки
- Пример работы данного свойства можно увидеть [здесь](./Preview.gif)  

Для удобства, полные версии всех фоновых картинок вынесены в отдельную [папку](img) и даются вместе с макетом 

#### Примечание
Данное домашнее задание включает материал трех занятий - Flexbox, CSS Grid, Animation / Parallax. После занятия по Flexbox нужно сверстать верхнюю часть макета. После занятия по CSS Grid нужно сверстать нижнюю часть макета. После занятия по Animation / Parallax необходимо зафиксировать фоновые картинки при скролле.

#### Не обязательное задание продвинутой сложности:
- Сверстать вторую версию этого макета, в котором фоновые картинки между блоками при скроллинге будут двигаться медленнее, чем основные блоки с текстом, но между разными блоками по-прежнему должны быть разные картинки

 <!--<div class="container">-->
        <!--<div class="rated">-->
            <!--<div class="rated-name">Top rated</div>-->
            <!--<div class="gallery-img">-->
                <!--<li class="gallery"><img src="./img/gallery/latest-post-1-img.png" alt=""></li>-->
                <!--<li class="gallery"><img src="./img/gallery/latest-post-2-img.png" alt=""></li>-->
                <!--<li class="gallery"><img src="./img/gallery/latest-post-3-img.png" alt=""></li>-->
                <!--<li class="gallery"><img src="./img/gallery/latest-post-4-img.png" alt=""></li>-->
                <!--<li class="gallery"><img src="./img/gallery/latest-post-5-img.png" alt=""></li>-->
                <!--<li class="gallery"><img src="./img/gallery/latest-post-6-img.png" alt=""></li>-->
                <!--<li class="gallery"><img src="./img/gallery/latest-post-7-img.png" alt=""></li>-->
            <!--</div>-->
        <!--</div>-->
    <!--</div>-->



/*rated name*/
.rated {

    position: relative;
    width: 1900px;
    height: 1030px;
    background-color: #f2f2f2;
    display: grid;
    grid-template-rows:100%;
    justify-items: center;


}
.rated-name {
    padding: 199px 0px 55px;
    color: #ffffff;
    font-family: "Open Sans", sans-serif;
    font-size: 32px;
    font-weight: 700;
    text-transform: uppercase;
    height: 25px;

}