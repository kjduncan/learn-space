(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,function(e,t,a){e.exports=a.p+"static/media/Mercury.f8aa06fe.svg"},function(e,t,a){e.exports=a.p+"static/media/Venus.ae9d955f.svg"},function(e,t,a){e.exports=a.p+"static/media/Earth.ba2e9d1d.svg"},function(e,t,a){e.exports=a.p+"static/media/mars.4ab39eba.svg"},function(e,t,a){e.exports=a.p+"static/media/jupiter.5b6a42cc.svg"},function(e,t,a){e.exports=a.p+"static/media/saturn.3ebd2023.svg"},function(e,t,a){e.exports=a.p+"static/media/Uranus.970afb86.svg"},function(e,t,a){e.exports=a.p+"static/media/neptune.17aac410.svg"},,,function(e,t,a){e.exports=a.p+"static/media/sun.47738ae5.svg"},function(e,t,a){e.exports=a.p+"static/media/spaceshipFlame.bbd6b63b.svg"},,function(e,t,a){e.exports=a(29)},,,,,function(e,t,a){},,function(e,t,a){},,,function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),i=a(15),r=a.n(i),o=(a(24),a(1)),m=a(2),c=a(4),l=a(3),u=a(5),d=(a(26),a(16)),h=a.n(d),p=a(6),b=a.n(p),f=a(7),E=a.n(f),v=a(8),g=a.n(v),w=a(9),y=a.n(w),k=a(10),N=a.n(k),S=a(11),C=a.n(S),P=a(12),O=a.n(P),j=a(13),x=a.n(j),M=a(17),z=a.n(M),T=function(e){var t=e.handleClose,a=e.show,n=e.children,i=a?"modal display-block":"modal display-none";return s.a.createElement("div",{className:i},s.a.createElement("div",{className:"overlay",onClick:function(){t()}}),s.a.createElement("section",{className:"modal-main fade-in"},n,s.a.createElement("button",{onClick:t},"close")))},A=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(l.a)(t).call(this,e))).closePlanet=function(){a.setState({planetShowing:!1},function(){setTimeout(function(){a.props.planetClose({})},200)})},a.state={show:!1},a.showModal=function(e){console.log(e),a.setState({show:!0,meta:e})},a.hideModal=function(){a.setState({show:!1})},a.state={planetShowing:!1,meta:""},a}return Object(u.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;window.requestAnimationFrame(function(){e.setState({planetShowing:!0})})}},{key:"render",value:function(){return console.log(this.props),s.a.createElement("div",{className:"mother"},s.a.createElement(T,{show:this.state.show,handleClose:this.hideModal},s.a.createElement("p",{className:"planetName"},this.props.planet.name),s.a.createElement("p",null,this.state.meta)),s.a.createElement("div",{className:"Planet ".concat(this.state.planetShowing?"show":"hidden")},s.a.createElement("div",{className:"row"},s.a.createElement("ul",{className:"planet-info columns medium-8 medium-push-10"},s.a.createElement("li",null,s.a.createElement("button",{type:"button",onClick:this.showModal.bind(this,this.props.planet.attributes.size)},"Size")),s.a.createElement("li",null,s.a.createElement("button",{type:"button",onClick:this.showModal.bind(this,this.props.planet.attributes.distance)},"Distance")),s.a.createElement("li",null,s.a.createElement("button",{type:"button",onClick:this.showModal.bind(this,this.props.planet.attributes.atmosphere)},"Atmosphere")),s.a.createElement("li",null,s.a.createElement("button",{type:"button",onClick:this.showModal.bind(this,this.props.planet.attributes.orbit)},"Orbit"))))))}}]),t}(n.Component),U=a(18),J=a.n(U),V=[{name:"Mercury",attributes:{size:"4,879 km in diameter",distance:"57,909,227 km (0.39 AU) from the Sun",atmosphere:"Mercury has just 38% the gravity of Earth, this is too little to hold on to what atmosphere it has which is blown away by solar winds. However while gases escape into space they are constantly being replenished at the same time by the same solar winds, radioactive decay and dust caused by micrometeorites",orbit:"88 days to orbit the Sun",imgSrc:b.a}},{name:"Earth",attributes:{size:"12,742 km in diameter",distance:"149,598,262 km (1 AU) from the Sun",atmosphere:"The atmosphere of Earth is the layer of gases, commonly known as air, that surrounds the planet Earth and is retained by Earths gravity.",orbit:"365.24 days to orbit the Sun",imgSrc:g.a}},{name:"Jupiter",attributes:{size:"139,822 km in diameter",distance:"778,340,821 km (5.20 AU) from the Sun",atmosphere:"The upper atmosphere of Jupiter is divided into cloud belts and zones. They are made primarily of ammonia crystals, sulfur, and mixtures of the two compounds.",orbit:"11.9 years to orbit the Sun",imgSrc:N.a}},{name:"Uranus",attributes:{size:"50,724 km in diameter",distance:"2,870,658,186 km (19.22 AU) from the Sun",atmosphere:"Like the other gas giants, it has a hydrogen upper layer, which has helium mixed in. Below that is an icy \u201cmantle, which surrounds a rock and ice core. The upper atmosphere is made of water, ammonia and the methane ice crystals that give the planet its pale blue colour.",imgSrc:O.a}},{name:"Venus",attributes:{size:"12,104 km in diameter",distance:"108,209,475 km (0.73 AU) from the Sun",atmosphere:"The average surface temperature is 462 \xb0C, and because Venus does not tilt on its axis, there is no seasonal variation. The dense atmosphere of around 96.5 percent carbon dioxide traps heat and causes a greenhouse effect.",orbit:"225 days to orbit the Sun",imgSrc:E.a}},{name:"Mars",attributes:{size:"6,779 km in diameter",distance:"200 mil",atmosphere:"For years Mars has been known to have water in the form of ice. The first signs of trickling water are dark stripes or stains on crater wall and cliffs seen in satellite images. Due to Mars\u2019 atmosphere this water would have to be salty to prevent it from freezing or vaporising.",orbit:"1.9 years to orbit the Sun",imgSrc:y.a}},{name:"Saturn",attributes:{size:"116,464 km in diameter",distance:"1,426,666,422 km (9.58 AU) from the Sun",atmosphere:"Saturn\u2019s atmosphere is composed primarily of hydrogen (96%) and helium (3%) with traces of other substances like methane, ammonia, acetylene, ethane, propane and phosphine. Winds in the upper atmosphere can reach speeds of 500 metres a second, these combined with heat rising from within the planet\u2019s interior cause yellow and gold bands.",orbit:"29.5 years to orbit the Sun",imgSrc:C.a}},{name:"Neptune",attributes:{size:"49,244 km in diameter",distance:"4,498,396,441 km (30.10 AU) from the Sun",atmosphere:"The atmosphere of Neptune is made of hydrogen and helium, with some methane. The methane absorbs red light, which makes the planet appear a lovely blue. High, thin clouds drift in the upper atmosphere.",orbit:"164.8 years to orbit the Sun",imgSrc:x.a}},{name:"Sun"},{name:"Title"}],B=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(l.a)(t).call(this,e))).selectedPlanet=function(e){a.setState({selectedPlanet:e},function(){setTimeout(function(){a.setState({planetOpen:!0})},1e3)})},a.state={selectedPlanet:{},planetOpen:!1},a}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;console.warn(this.state.selectedPlanet),console.warn(this.state.planetOpen);var t=function(t){return J()(t.toLowerCase(),{"planet-fly":e.state.selectedPlanet.name!==t&&void 0!==e.state.selectedPlanet.name&&e.state.selectedPlanet.name!==V[8].name,"planet-selected":e.state.selectedPlanet.name===t,"planet-return":e.state.selectedPlanet.name===V[8].name})};return s.a.createElement("div",{className:"Home"},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"stars-bg-xs"}),s.a.createElement("div",{className:"stars-bg-md"}),s.a.createElement("div",{className:"stars-bg-lg"}),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"columns medium-3 medium-pull-1 ship bounce"},s.a.createElement("img",{onClick:function(){e.selectedPlanet(V[8])},src:z.a})),s.a.createElement("div",{className:"columns medium-8 medium-pull-3"},s.a.createElement("h1",{className:t(V[9].name)},"Lets Explore Space"))),s.a.createElement("div",{className:"row planets"},s.a.createElement("div",{className:"columns small-12"},s.a.createElement("div",{className:"column medium-3 medium-push-2"},s.a.createElement("button",{onClick:function(){e.selectedPlanet(V[0])},className:t(V[0].name)},s.a.createElement("img",{src:b.a}),"Mercury")),s.a.createElement("div",{className:"column medium-3 medium-push-2"},s.a.createElement("button",{onClick:function(){e.selectedPlanet(V[1])},className:t(V[1].name)},s.a.createElement("img",{src:g.a}),"Earth")),s.a.createElement("div",{className:"column medium-3 medium-push-2"},s.a.createElement("button",{onClick:function(){e.selectedPlanet(V[2])},className:t(V[2].name)},s.a.createElement("img",{src:N.a}),"Jupiter")),s.a.createElement("div",{className:"column medium-3 medium-push-2"},s.a.createElement("button",{onClick:function(){e.selectedPlanet(V[3])},className:t(V[3].name)},s.a.createElement("img",{src:O.a}),"Uranus")))),s.a.createElement("div",{className:"row planets"},s.a.createElement("div",{className:"columns small-12"},s.a.createElement("div",{className:"column medium-3 medium-push-2"},s.a.createElement("button",{onClick:function(){e.selectedPlanet(V[4])},className:t(V[4].name)},s.a.createElement("img",{src:E.a}),"Venus")),s.a.createElement("div",{className:"column medium-3 medium-push-2"},s.a.createElement("button",{onClick:function(){e.selectedPlanet(V[5])},className:t(V[5].name)},s.a.createElement("img",{src:y.a}),"Mars")),s.a.createElement("div",{className:"column medium-3 medium-push-2"},s.a.createElement("button",{onClick:function(){e.selectedPlanet(V[6])},className:t(V[6].name)},s.a.createElement("img",{src:C.a}),"Saturn")),s.a.createElement("div",{className:"column medium-3 medium-push-2"},s.a.createElement("button",{onClick:function(){e.selectedPlanet(V[7])},className:t(V[7].name)},s.a.createElement("img",{src:x.a}),"Neptune")))),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"columns medium-3 medium-pull-6"},s.a.createElement("div",{className:t(V[8].name)},s.a.createElement("img",{src:h.a}))))),this.state.planetOpen&&this.state.selectedPlanet.name!==V[8].name&&s.a.createElement(A,{planet:this.state.selectedPlanet}))}}]),t}(n.Component),D=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement(B,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[19,2,1]]]);
//# sourceMappingURL=main.efbf27d8.chunk.js.map