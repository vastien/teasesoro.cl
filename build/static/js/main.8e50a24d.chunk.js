(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(n,e,a){n.exports=a(42)},29:function(n,e,a){},30:function(n,e,a){},42:function(n,e,a){"use strict";a.r(e);var t,i,o=a(0),r=a.n(o),l=a(15),c=a.n(l),s=(a(29),a(30),a(1)),d=a(2),p=function(){return r.a.createElement(o.Fragment,null,r.a.createElement("div",{id:"condiciones"},r.a.createElement(m,null,r.a.createElement("div",null,r.a.createElement("label",{className:"titlelabel"},"T\xe9rminos de Uso"),r.a.createElement("label",{className:"bodylabel"},"Teasesoro.cl es una plataforma de anuncios. El creador de un anuncio debe certificar su identidad para para cumplir aceptar los t\xe9rminos de uso y la responsabilidad legal. \xc9ste proceso de certificaci\xf3n implica la presentaci\xf3n de una copia digital de un documento legal vigente que certifique la identidad de la persona, ya sea carnet de identidad, pasaporte o licencia de conducir. \xc9ste documento es solicitado de forma obligatoria durante el proceso de publicaci\xf3n de anuncio. El anunciante es responsable de todo el contenido expuesto en su anuncio incluso su cumplimiento y acepta la responsabilidad legal ante cualquier hecho que pueda ocasionar un da\xf1o de cualquier tipo a un usuario que adquiera los servicios anunciados.")))))},m=d.a.div(t||(t=Object(s.a)(["\n\n    font-family: 'Noto Sans Mono', monospace;\n    margin-top: 5vh;\n    justify-content: center;\n    margin:5%;\n    width:90%;\n    align-items: center;\n    text-align: center;\n    display: block;\n    box-shadow: -5px 6px 55px -8px rgba(0, 0, 0, 0.88);\n    border-radius: 10px 10px 10px 10px;\n    -moz-border-radius: 10px 10px 10px 10px;\n    -webkit-border-radius: 10px 10px 10px 10px;\n \n    .bodylabel{\n    display:flex;\n    margin-inline:5vw;\n    margin-top:4vh;\n    width:90%;\n    color: bisque;\n    font-size: 1.2em;\n    padding-bottom: 3vh;\n}\n    .titlelabel{\n    font-size: 1.8em;\n    display:block;\n    color: white;\n    padding: 2vh;\n    font-we\n    padding-bottom: 0;\n}\n"]))),u=a(20);var b,h,f=function(n){return r.a.createElement(g,null,r.a.createElement("div",{onClick:n.handleClick,className:"icon nav-icon-5 ".concat(n.clicked?"open":"")},r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null)))},g=d.a.div(i||(i=Object(s.a)(["\n.nav-icon-5{\n  width: 35px;\n  height: 30px;\n  margin: 10px 10px;\n  position: relative;\n  cursor: pointer;\n  display: inline-block;\n}\n.nav-icon-5 span{\n  background-color:#fff;\n  position: absolute;\n  border-radius: 2px;\n  transition: .3s cubic-bezier(.8, .5, .2, 1.4);\n  width:100%;\n  height: 4px;\n  transition-duration: 500ms\n}\n.nav-icon-5 span:nth-child(1){\n  top:0px;\n  left: 0px;\n}\n.nav-icon-5 span:nth-child(2){\n  top:13px;\n  left: 0px;\n  opacity:1;\n}\n.nav-icon-5 span:nth-child(3){\n  bottom:0px;\n  left: 0px;\n}\n.nav-icon-5:not(.open):hover span:nth-child(1){\n  transform: rotate(-3deg) scaleY(1.1);\n}\n.nav-icon-5:not(.open):hover span:nth-child(2){\n  transform: rotate(3deg) scaleY(1.1);\n}\n.nav-icon-5:not(.open):hover span:nth-child(3){\n  transform: rotate(-4deg) scaleY(1.1);\n}\n.nav-icon-5.open span:nth-child(1){\n  transform: rotate(45deg);\n  top: 13px;\n}\n.nav-icon-5.open span:nth-child(2){\n  opacity:0;\n}\n.nav-icon-5.open span:nth-child(3){\n  transform: rotate(-45deg);\n  top: 13px;\n}\n\n"])));var x,v=function(){var n=Object(o.useState)(!1),e=Object(u.a)(n,2),a=e[0],t=e[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(y,null,r.a.createElement("label",{className:"titleNav"}),r.a.createElement("div",{className:"Links ".concat(a?"Active":"")},r.a.createElement("a",{href:"#"},"Inicio"),r.a.createElement("a",{href:"#publicate"},"Publ\xedcate"),r.a.createElement("a",{href:"#condiciones"},"T\xe9rminos de Uso")),r.a.createElement("div",{className:"Burguer"},r.a.createElement(f,{clicked:a,handleClick:function(){t(!a)}})),r.a.createElement(E,{className:"initial ".concat(a?" active":"")})))},E=d.a.div(b||(b=Object(s.a)(["\n  background-color: #222;\n  position: fixed;\n  top: -1000px;\n  left: -1000px;\n  width: 100%;\n  height: 100%;\n  z-index: 10;\n\n  transition: all .6s ease ;\n  \n  &.active{\n    \n    border-radius: 0 0 75% 0;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    opacity: 1;\n  }\n"]))),y=d.a.nav(h||(h=Object(s.a)(["\n   \n    z-index: 10000;\n    color: white;\n    padding-top: 2vh;\n    padding-left: 3vh;\n    font-size: 1.5em;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    font-family: 'Raleway', sans-serif;\n\n    a{\n        color: white;\n        text-decoration: none;\n        margin-right: 5vh;\n        position:relative;\n        z-index: 100;\n\n    }\n\n\n    .Burguer{\n        top: 1vh;\n        position:fixed;\n        right: 1vh;\n            z-index: 100;\n\n        @media(min-width: 1024px){\n            display:none;\n        }\n    }\n\n    .Links{\n        position: absolute;\n        top: -700px;\n        left: -2000px;\n        margin-inline: auto;\n        text-align: center;\n\n        a{\n            color: white;\n            font-size: 2rem;\n            display:block;\n            &:hover{\n            color: bisque;\n\n            }\n        }\n\n       @media(min-width: 1024px){\n        position: initial;\n        margin: 0;\n        \n        a{\n            font-size: 1.3rem;\n            color:white;\n            display: inline;\n        }\n\n       } \n    }\n\n    .Links.Active{\n        color: white;\n        margin-left: auto;\n        margin-right: auto;\n        top: 31%;\n        left: 0;\n        right: 0;\n        display:block;\n        width: 100%;\n        height: 100%;\n        text-align:center;\n        position:fixed;\n        z-index: 10000;\n\n\n        a{\n        color: white;\n        margin-left: 2vh;\n        margin: 5vh;\n        display: block;\n        align-items: center;\n        \n        cursor: pointer;\n        transition: all .9s ease ;\n\n          &:hover{\n                color: bisque;\n        }\n        }\n\n\n    }\n\n\n    \n\n"])));var w,k=function(){return r.a.createElement(o.Fragment,null,r.a.createElement(v,null),r.a.createElement(z,null,r.a.createElement("label",{className:"l1"},"Contacta a tu asesor/a verificado/a"),r.a.createElement("label",{className:"l2"},"Un lugar transparente."),r.a.createElement("label",{className:"l3"},"Sin comisiones ni intermediarios.")))},z=d.a.div(x||(x=Object(s.a)(["\n\n    margin-left: 3vh;\n    margin-top: 3vh;\n \n    \n    .l1{\n         font-family: 'Raleway', sans-serif;\n        font-size: 5vh;\n        color: rgb(255, 255, 255);\n        display:block;\n        font-family: 'Noto Sans Mono', monospace;\n        \n    }\n\n    .l2{\n        font-size:3.8vh;\n        display:block;\n        font-weight: bold;\n        color: bisque;\n        font-family: 'Noto Sans Mono', monospace;\n    }\n\n    .l3{\n        font-size:2.5vh;\n        display:block;\n        color: #E3C19C;\n        font-family: 'Noto Sans Mono', monospace;\n    }\n\n\n\n\n\n"]))),N=a(19).Sync.makeFactory({image:"",name:"",area:"",description:"",price:"",contact:""});function j(n){return r.a.createElement(M,null,r.a.createElement("img",{className:"image",src:n.image}),r.a.createElement("label",{className:"name"},n.name),r.a.createElement("label",{className:"area"},n.area),r.a.createElement("label",{className:"description"},n.description),r.a.createElement("label",{className:"price"},n.price),r.a.createElement("label",{className:"contact"},n.contact))}var F,M=d.a.label(w||(w=Object(s.a)(["\n\n    margin: 2vh;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n    display: block;\n    width: 35vh;\n    padding: 2vh;\n    font-family: 'Noto Sans Mono', monospace;\n    box-shadow: -5px 6px 55px -8px rgba(0, 0, 0, 0.88);\n    border-radius: 10px 10px 10px 10px;\n    -moz-border-radius: 10px 10px 10px 10px;\n    -webkit-border-radius: 10px 10px 10px 10px;\n\n\n    .image{\n        margin: 0 auto;\n        border-radius: 70%;\n        width:150px;\n        height:150px;\n        object-fit: cover;\n        position: relative;\n        z-index: 0;\n    }\n\n    .name{\n        color: #FFE4C4;\n        font-size: 2.7vh;\n        display:block;\n        padding: 5px;\n    }\n\n    .area{\n        color: #FB8840;\n        font-size: 2.3vh;\n        display:block;\n        padding: 5px;\n    }\n\n    .description{\n        font-size: 2.2vh;\n        display:block;\n        color: #F2E9DB;\n        padding: 5px;\n    }\n\n    .price{\n        font-size: 2.4vh;\n        display:block;\n        color: #93E07D;\n        padding: 5px;\n    }\n\n    .contact{\n        font-size: 2.2vh;\n        display:block;\n        color: #7FB0FE;\n        padding: 5px;\n    }\n\n\n    @media(max-width: 1024px){\n        display:block;\n        width: 70vw;\n        margin: 0 auto;\n        margin-bottom: 3vh;\n        margin-inline: 15vw;\n    }\n\n\n"])));function q(){var n=N.build({image:"https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1330&q=80",name:"Basti\xe1n Escribano",area:"\xc1rea Inform\xe1tica",description:"Servicios de Asesor\xedas de Programaci\xf3n, Gu\xedas, Clases Particulares y Realizaci\xf3n de Tareas.",price:"60min: $15.000",contact:"+56 9 46241025"});return r.a.createElement(B,null,r.a.createElement(j,{image:n.image,name:n.name,area:n.area,description:n.description,price:n.price,contact:n.contact}),r.a.createElement(j,{image:n.image,name:n.name,area:n.area,description:n.description,price:n.price,contact:n.contact}),r.a.createElement(j,{image:n.image,name:n.name,area:n.area,description:n.description,price:n.price,contact:n.contact}),r.a.createElement(j,{image:n.image,name:n.name,area:n.area,description:n.description,price:n.price,contact:n.contact}))}var S,B=d.a.div(F||(F=Object(s.a)(["\n      margin-top: 3vh;\n      display: flex;   \n      flex-wrap: wrap;\n\n"]))),C=function(){return r.a.createElement(o.Fragment,null,r.a.createElement(m,null,r.a.createElement("label",{id:"publicate",className:"titlelabel"},"Publ\xedcate"),r.a.createElement("label",{className:"bodylabel"},"Para publicar tu aviso de asesor\xedas en teasesoro.cl debes agendar una reuni\xf3n para certificar tu identidad. Esto es a trav\xe9s de una reuni\xf3n a trav\xe9s de Zoom o Google Meet.")),r.a.createElement(O,null,r.a.createElement("div",{"data-aos":"fade-up",id:"talk"},r.a.createElement("form",{className:"form",target:"_blank",action:"https://formsubmit.co/bastian.escribano@usach.cl",method:"POST"},r.a.createElement("input",{type:"text",name:"_honey",className:"dn"}),r.a.createElement("input",{type:"hidden",name:"_next",value:"https://teasesoro.cl"}),r.a.createElement("input",{type:"hidden",name:"_captcha",value:"false"}),r.a.createElement("label",{className:"titlelabel"},"\xa1Agendemos una reuni\xf3n!"),r.a.createElement("input",{type:"hidden",name:"_subject",value:"Atomics"}),r.a.createElement("div",{className:"form-control"},r.a.createElement("input",{type:"text",name:"Name",id:"Name",required:!0}),r.a.createElement("label",null,"Nombre")),r.a.createElement("div",{className:"form-control"},r.a.createElement("input",{type:"email",name:"Email",id:"Email",required:!0}),r.a.createElement("label",null,"Email")),r.a.createElement("p",null,r.a.createElement("textarea",{name:"Mensaje",placeholder:"\xbfQu\xe9 podemos hacer por ti?"})),r.a.createElement("button",{type:"submit"},"Enviar")))))},O=d.a.div(S||(S=Object(s.a)(["\n.dn { \n    display:none;\n}\n\n.titlelabel{\n    font-size: 1.8em;\n    display:block;\n    color: white;\n    padding: 2vh;\n    font-we\n    padding-bottom: 0;\n}\n\n.styledForm {\n    position: relative;\n}\n\n.form {\n    margin:0 auto;\n    width: 60vw;\n    margin-inline: 20vw;\n    font-family: 'Noto Sans Mono', monospace;\n    height: 70vh;\n    border-radius: 8px;\n    box-shadow: 0 0 40px -10px #000;\n    padding: 4vh;\n    box-sizing: border-box; \n    position: relative;\n}\n\ntextarea {\n    width: 100%;\n    padding: 2vh;\n    height: 25vh;\n    box-sizing: border-box;\n    background: none;\n    outline: none;\n    resize: none;\n    border: 0;\n    transition: all .3s;\n    border-bottom: 2px solid #bebed2;\n}\n\ninput {\n    width: 100%;\n    padding: 1vh;   \n    box-sizing: border-box;\n    background: none;\n    outline: none;\n    resize: none;\n    border: 0;\n    font-family: 'Montserrat', sans-serif;\n    transition: all .3s;\n    border-bottom: 2px solid #bebed2\n}\n\ninput:focus {\n    border-bottom: 2px solid #78788c\n}\n\np:before {\n    content: attr(type);\n    display: block;\n    margin: 1vh;\n    font-size: 14px;\n}\n\nbutton {\n    float: right;\n    margin: 2vh;\n    border: 2px solid #A49861;\n    background: 0;\n    padding: 0.5vh;\n    cursor: pointer;\n    transition: all .3s;\n    font-size: 2vh;\n}\n\nbutton:hover {\n    color: rgb(179, 174, 174);\n\n}\n\nspan {\n    margin: 0 5px 0 15px\n}\n.form-control{\n    position: relative;\n    margin: 20px 0 40px;\n}\n.form-control input {\n    background-color: transparent ;\n    display: block ;\n    width: 100%;\n    margin-top: 30px;;\n    font-size: 13px;\n}\n\n\n.form-control label{\n    font-size: 13px;\n    position: absolute;\n    top: -2px;\n    left: 0;\n    /*pointer-events: none;*/\n}\n\n.form-control label {\n    display: inline-block;\n    font-size: 14px;\n    min-width: 5px;\n    transition-duration: 400ms;\n}\n\n.form-control input:focus + label,\n.form-control input:valid + label,\n.form-control label:hover,\n.form-control input:hover + label\n{\n    font-size: 15px;\n    transform: translateY(-20px);\n    transition-delay: 80ms;\n    transition-duration: 500ms;\n}\n\n.form-control input:valid{\n    border-bottom-color: rgb(76, 161, 47);\n}\n@media (max-width: 621px) {\n    .form {\n        margin: 4vw;\n        width: 90vw;\n\n    }\n    \n}\n"])));var P=function(){return r.a.createElement(o.Fragment,null,r.a.createElement("div",{className:"Background",style:{backgroundImage:"url(https://images.unsplash.com/photo-1606636660488-16a8646f012c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)",backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat"}}),r.a.createElement(k,null),r.a.createElement(q,null),r.a.createElement(C,null),r.a.createElement(p,null))},A=function(n){n&&n instanceof Function&&a.e(3).then(a.bind(null,43)).then(function(e){var a=e.getCLS,t=e.getFID,i=e.getFCP,o=e.getLCP,r=e.getTTFB;a(n),t(n),i(n),o(n),r(n)})};c.a.createRoot(document.getElementById("root")).render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(P,null))),A()}},[[21,1,2]]]);
//# sourceMappingURL=main.8e50a24d.chunk.js.map