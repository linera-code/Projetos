$(document).ready(function () {
    //remover classes e ids não utilizaveis	
     $("#header-search, .caret").remove();
    //}

    //esconder entrar e sair{
    $("#header_user_info .list-inline li:first-child").css("display", "none");
    //}
    //remover edicao footer{
    $(".nav-links li:last-child").css("display", "none");
    $("#collapse4 p:last-child").css("display", "none");
    $(".block.space-top-15.space-left-10 p").css("display", "none");
    $(".row.clearfix.formas").find(".widget-html.block.space-lr-10 p:last-child").css("display", "none");
    $(".widget-inner.block_content.text-center").children("p:last-child").css("display", "none");
    $(".col-lg-6.col-md-6.col-sm-12.col-xs-12:eq(1)").remove();

    //}
    AdicionarDirecionadorWhatsappTopo();

    //posiciona os textos de logar e sair proximo ao carrinho{
    $("#header_logo").after($(".container-entrar-ou-cadastrar-carrinho"));
    $(".container-entrar-ou-cadastrar-carrinho").append($("#header-right-cart"));
    //}

    $(".pagebuilder.clearfix").children().eq(0).addClass("container-carrossel");
    $("#header-main").after($("#wbc-mainnav"));
    $("#page").children("br").remove();

    $(".dropdown-menu-inner ul li").each(function () {
        var InserirTextoDinamico = $(this).find("a .menu-title").text().replaceAll(" ", "").replaceAll("Á", "A").replaceAll("á", "A").replaceAll("É", "E").replaceAll("é", "E").replaceAll("Í", "I").replaceAll("i", "I").replaceAll("Ó", "O").replaceAll("ó", "O").replaceAll("Ú", "U").replaceAll("ú", "U").replaceAll("(", "").replaceAll(")", "").replaceAll("/", "").toLowerCase();
        var GeradorImagem = '<img src="../fotos/' + InserirTextoDinamico + '.jpg">' + '</img>';
        $(this).find(".menu-title").before(GeradorImagem);

    });
    
    $(".dropdown-menu.submenu-v1").children().find(".menu-title").each(function(){
        var TodosSpansFiltrar = $(this).text();
        if(TodosSpansFiltrar.includes("(")){
            var SpanFiltrado = $(this).text();
            var AdicionarBreakSpan = SpanFiltrado.replace("(","<br/>(")
            $(this).html(AdicionarBreakSpan);
    }

    });
    
    if ($(".sidebar.column.col-xs-12.col-sm-12.col-md-3.col-lg-3.offcanvas-sidebar")[0]) {
        var Link_Pagina_Selecao_De_Produto = $("<link />", {
            rel: "stylesheet",
            type: "text/css",
            href: "https://linera-code.github.io/projetos/loja-virtual/ere-bancos/css/ere-bancos-pagina-selecao-de-produtos.css"
        });

        $("head").append(Link_Pagina_Selecao_De_Produto);
        $(".main-content").after($("#footer"));
    }
    
    if (window.location.pathname.includes("/noticia-central-de-atendimento")) {
        var Link_Pagina_Central_De_Atendimento = $("<link />", {
            rel: "stylesheet",
            type: "text/css",
            href: "https://linera-code.github.io/projetos/loja-virtual/ere-bancos/css/ere-bancos-central-de-atendimento.css"
        });

        $("head").append(Link_Pagina_Central_De_Atendimento);


    }
        if (window.location.pathname.includes("/noticia")) {
            $(".content-page").css("color","#fff");
            $(".col-lg-12.col-md-12.col-sm-12.col-xs-12 h1, h3").css("color","#fff");
        }
            if (window.location.pathname.includes("/noticia-politica-de-privacidade-e-cookies")) {
            $(".content-page").css("color","#fff");
            $(".col-lg-12.col-md-12.col-sm-12.col-xs-12 h1, h3").css("color","#fff");
        }


    else if ($(".pagebuilder.clearfix")[0]) {

        var Link_Pagina_Index = $("<link />", {
            rel: "stylesheet",
            type: "text/css",
            href: "https://linera-code.github.io/projetos/loja-virtual/ere-bancos/css/ere-bancos-index.css"
        });

        $("head").append(Link_Pagina_Index);

        var CaixaBordao = '<div class="container-bordao">' +
            '<div class="organizar-texto-e-imagem">' +
            '<div class="icone-moto-e-selecionar-motocicleta">' +
            '<div class="container-icone-moto">' +
            '<img src="https://cdn.awsli.com.br/1803/1803744/arquivos/bike-15_icon-icons.com_66448.png" class="icone-moto">' +
            '</div>' +
            '<div class="container-texto-slogan">' +
            '<div class="texto_selecione_sua_motocicleta">ERE BANCOS - AQUI SE FABRICA O BANCO DO BUM BUM FELIZ.' + '</div>' +
            '</div>' +
            '<div class="container-icone-moto">' +
            '<img src="https://cdn.awsli.com.br/1803/1803744/arquivos/bike-15_icon-icons.com_66448.png" class="icone-moto icone-moto-espelho">' + '</div>' +
            '</div>' +
            '</div>' +
            '</div>';
        $(".container-carrossel").after(CaixaBordao);


    }
    else if (window.location.pathname.includes("/identificacao")) {
        var Link_Pagina_Identificacao = $("<link />", {
            rel: "stylesheet",
            type: "text/css",
            href: "https://linera-code.github.io/projetos/loja-virtual/ere-bancos/css/ere-bancos-identificacao.css"
        });

        $("head").append(Link_Pagina_Identificacao);


    }
    else if (window.location.pathname.includes("/cadastrar")) {
        var Link_Pagina_Cadastro = $("<link />", {
            rel: "stylesheet",
            type: "text/css",
            href: "https://linera-code.github.io/projetos/loja-virtual/ere-bancos/css/ere-bancos-cadastrar-oruc.css"
        });

        $("head").append(Link_Pagina_Cadastro);


    }

    if ($("#header_user_info .login:eq(0)").text() != " Login ou Cadastre-se") {

        var BotaoSair = '<div class="sair">' +
            '<a href="logoff">Sair' +
            '</a>' +
            '</div>';


        $(".entrar-ou-cadastrar").children().remove();
        $(".entrar-ou-cadastrar").append(BotaoSair)
    }
    
    function AdicionarDirecionadorWhatsappTopo() {
        var Numero_Whatsapp = $(".shop-phone:eq(2)").text();
        var Numero_Whatsapp_Dinamico = $(".shop-phone:eq(2)").text().replaceAll("(", "").replaceAll(")", "").replaceAll(" ", "").replaceAll("-", "");


        var Link_Whatsapp = '<a href="https://web.whatsapp.com/send?phone=55' + Numero_Whatsapp_Dinamico + '"' + 'class="link-whatsapp">' + '</a>';
        $(".shop-phone:eq(2)").append(Link_Whatsapp);
        $(".link-whatsapp").append(Numero_Whatsapp)

        $(".shop-phone:eq(2)").contents()[1].remove();
    }
});
