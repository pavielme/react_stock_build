(this.webpackJsonppavielstockreact=this.webpackJsonppavielstockreact||[]).push([[0],{37:function(e,a,t){e.exports=t(78)},42:function(e,a,t){},44:function(e,a,t){},75:function(e,a){},78:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(34),s=t.n(r),o=(t(42),t(18)),i=t.n(o),l=t(35),m=t(1),u=t(2),p=t(4),h=t(3),d=(t(44),function(e){Object(p.a)(t,e);var a=Object(h.a)(t);function t(e){return Object(m.a)(this,t),a.call(this,e)}return Object(u.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"stock-list"},this.props.children)}}]),t}(c.a.Component)),v=function(e){Object(p.a)(t,e);var a=Object(h.a)(t);function t(e){return Object(m.a)(this,t),a.call(this,e)}return Object(u.a)(t,[{key:"round",value:function(e,a){if((""+e).includes("e")){var t=(""+e).split("e"),n="";return+t[1]+a>0&&(n="+"),+(Math.round(+t[0]+"e"+n+(+t[1]+a))+"e-"+a)}return+(Math.round(e+"e+"+a)+"e-"+a)}},{key:"render",value:function(){var e=this.props.tiker?this.round(this.props.tiker,2):"";return c.a.createElement("div",{className:"stock"},c.a.createElement("div",{className:"top-bar"},c.a.createElement("div",{className:"title-content"},c.a.createElement("span",{className:"title"},this.props.title),c.a.createElement("span",{className:"symbol"},this.props.symbol," ",c.a.createElement("span",{className:"usdprice"},"$",this.round(this.props.priceUSD,2)))),c.a.createElement("div",{className:"marketPrice ".concat(this.props.profit?"profit":"lost")},c.a.createElement("span",{className:"price"},c.a.createElement("span",{className:"tiker ".concat(e?e<0?"lost":"profit":"")}," ",e," "),this.round(this.props.price,2)," SEK ",c.a.createElement("span",{className:"direction ".concat(this.props.increase?"increase":"decrease")},c.a.createElement("i",{className:"fas fa-angle-double-".concat(this.props.increase?"up":"down")}))),c.a.createElement("span",{className:"change"},c.a.createElement("i",{className:"fas fa-chevron-".concat(this.props.profit?"up":"down")})," ",this.round(this.props.change.ammount,2)," "),c.a.createElement("span",{className:"changePercent"},"(",this.round(100*this.props.change.percent,2),"%)"))),c.a.createElement("div",{className:"bottom-bar"},c.a.createElement("div",{className:"hold"},"Antal: ",this.props.balance.hold," ",this.props.symbol),c.a.createElement("div",{className:"worth"},this.round(this.props.balance.worth,2)," SEK"),c.a.createElement("div",{className:"worth-USD"},"$",this.round(this.props.balance.worthUSD,2)," "),c.a.createElement("div",{className:"pr-lo-change ".concat(this.props.balance.change.ammount<0?"lost":"profit")},c.a.createElement("div",{className:"pr-lo"},c.a.createElement("i",{className:"fas fa-chevron-".concat(this.props.balance.change.ammount<0?"down":"up"," small")})," ",this.round(this.props.balance.change.ammount,2)," ",c.a.createElement("span",{className:"small sek"},"SEK")),c.a.createElement("div",{className:"pr-lo-percent"},this.round(100*this.props.balance.change.percent,2),"%"))))}}]),t}(c.a.Component),f=function(e){Object(p.a)(t,e);var a=Object(h.a)(t);function t(e){return Object(m.a)(this,t),a.call(this,e)}return Object(u.a)(t,[{key:"round",value:function(e,a){if((""+e).includes("e")){var t=(""+e).split("e"),n="";return+t[1]+a>0&&(n="+"),+(Math.round(+t[0]+"e"+n+(+t[1]+a))+"e-"+a)}return+(Math.round(e+"e+"+a)+"e-"+a)}},{key:"render",value:function(){return c.a.createElement("div",{className:"wallet-content"},c.a.createElement("div",{className:"balance"},this.round(this.props.balance,2)," ",c.a.createElement("span",{className:"small sek"},"SEK")),c.a.createElement("div",{className:"changeContent ".concat(this.props.profit?"profit":"lost")},c.a.createElement("div",{className:"change"},c.a.createElement("i",{className:"fas fa-chevron-".concat(this.props.profit?"up":"down"," small")})," ",this.round(this.props.change,2)," ",c.a.createElement("span",{className:"small sek"},"SEK")),c.a.createElement("div",{className:"changePercent"},this.round(this.props.percent,2),"%")))}}]),t}(c.a.Component),E=t(36),b=t.n(E)()("http://34.105.195.136:3005/"),k=function(e){Object(p.a)(t,e);var a=Object(h.a)(t);function t(e){var n;return Object(m.a)(this,t),(n=a.call(this,e)).state={savedStocks:[{symbol:"NVAX",name:"NOVAVAX INC",currency:"NVAX",icon:null,balance:{shares:0,invested:0}},{symbol:"ETH-USD",name:"ETHEREUM",currency:"ETH",icon:null,balance:{shares:1.00057718,invested:3400}},{symbol:"LTC-USD",name:"LITECOIN",currency:"LTC",icon:null,balance:{shares:5.0118422,invested:2500}},{symbol:"LINK-USD",name:"CHAINLINK",currency:"LINK",icon:null,balance:{shares:10.73068806,invested:1e3}},{symbol:"NIO",name:"NIO INC",currency:"NIO",icon:null,balance:{shares:20,invested:2360}},{symbol:"NKLA",name:"NIKOLA CORP.",currency:"NKLA",icon:null,balance:{shares:13,invested:4080}}],StockData:[],wallet:{balance:0,change:0,percent:0},countdown:"Laddar.."},n}return Object(u.a)(t,[{key:"animationHandler",value:function(){var e=Object(l.a)(i.a.mark((function e(a){var t=this;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e){var n=t.state.StockData;if(n.length){for(var c in n){var r=n[c].market_price.SEK.current,s=a[c].market_price.SEK.current;s>=r&&(a[c].increase=!0),a[c].tiker=s-r}e(a)}else e(a)})));case 1:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()},{key:"loadStocks",value:function(){var e=this;b.emit("request stocks",this.state.savedStocks,(function(a){setTimeout((function(){if(!a)return console.log("Failed to update"),e.setState({countdown:20}),!1;e.animationHandler(a).then((function(a){e.setState({StockData:a,countdown:20}),e.updateWallet()}))}),3e3)}))}},{key:"componentDidMount",value:function(){var e=this;this.loadStocks(),setInterval((function(){b.connected&&e.loadStocks()}),2e4)}},{key:"toPercent",value:function(e){var a=e.balance.shares*e.market_price.SEK.current;return(a-e.balance.invested)/a||0}},{key:"updateWallet",value:function(){var e=this.state.StockData,a=0,t=0;for(var n in e){a+=e[n].balance.shares*e[n].market_price.SEK.current,t+=e[n].balance.invested}var c=a-t,r={balance:a,change:c,percent:c/(.01*t)};this.setState({wallet:r})}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"app"},c.a.createElement(f,{balance:this.state.wallet.balance,change:this.state.wallet.change,percent:this.state.wallet.percent,profit:!(this.state.wallet.change<0)}),c.a.createElement("div",{className:"indicator ".concat(b.connected?"connection_online":"connection_offline")}),c.a.createElement("div",{className:"page"},c.a.createElement(d,null,this.state.StockData.map((function(a,t){return c.a.createElement(v,{key:t,title:a.name,symbol:a.currency,increase:!!a.increase,tiker:!!a.tiker&&a.tiker,profit:!(a.market_price.SEK.change<0),price:a.market_price.SEK.current,priceUSD:a.market_price.USD.current,change:{ammount:a.market_price.SEK.change,percent:a.market_price.SEK.percent},balance:{hold:a.balance.shares,worth:a.balance.shares*a.market_price.SEK.current,worthUSD:a.balance.shares*a.market_price.USD.current,change:{ammount:a.balance.shares*a.market_price.SEK.current-a.balance.invested,percent:e.toPercent(a)}}})})),c.a.createElement("div",{className:"counter"},b.connected?"Laddar.."===this.state.countdown?c.a.createElement("i",{className:"fas fa-spinner animateSpin"}):this.state.countdown:"DC"))),c.a.createElement("div",{className:"reload-btn",onClick:function(){return window.location.reload()}},"Uppdatera"))}}]),t}(c.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[37,1,2]]]);
//# sourceMappingURL=main.4bff2662.chunk.js.map