"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[7411],{66588:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return r},default:function(){return m}});var i=a(87462),n=a(63366),s=(a(15007),a(64983)),o=a(91515),d=["components"],r={},p={_frontmatter:r},c=o.Z;function m(e){var t=e.components,a=(0,n.Z)(e,d);return(0,s.mdx)(c,(0,i.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,s.mdx)("h1",{id:"integrate-analytics-triggers-with-adobe-io-events"},"Integrate Analytics Triggers with Adobe I/O Events"),(0,s.mdx)("p",null,"These instructions describe how to use Adobe Analytics triggers to notify you of Adobe I/O events, including the behavior of your site","’","s users. Follow the instructions below to try the solution yourself."),(0,s.mdx)("h2",{id:"introduction"},"Introduction"),(0,s.mdx)("h3",{id:"what-are-triggers"},"What are Triggers?"),(0,s.mdx)("p",null,"Triggers is an Experience Cloud Activation core service that enables marketers to identify, define, and monitor key consumer behaviors, and then generate cross-solution communication to re-engage visitors. Triggers uses Adobe Analytics as the data source for consumer behavior.\nFor more information on triggers, see the ",(0,s.mdx)("a",{parentName:"p",href:"https://marketing.adobe.com/resources/help/en_US/mcloud/triggers.html"},"Triggers Help Page"),"."),(0,s.mdx)("p",null,"Before setting up and using Adobe I/O, you will need to do the following:"),(0,s.mdx)("ol",null,(0,s.mdx)("li",{parentName:"ol"},(0,s.mdx)("a",{parentName:"li",href:"#obtain-product-authorization"},"Obtain product authorization")),(0,s.mdx)("li",{parentName:"ol"},(0,s.mdx)("a",{parentName:"li",href:"#obtain-administrative-permissions"},"Obtain administrative permissions"))),(0,s.mdx)("h3",{id:"obtain-product-authorization"},"Obtain product authorization"),(0,s.mdx)("p",null,"To complete this solution, you will need authorization to use the following services:"),(0,s.mdx)("ul",null,(0,s.mdx)("li",{parentName:"ul"},"Adobe Analytics, including Triggers"),(0,s.mdx)("li",{parentName:"ul"},"Adobe Campaign"),(0,s.mdx)("li",{parentName:"ul"},"Adobe Experience Cloud Activation Core Services"),(0,s.mdx)("li",{parentName:"ul"},"An ",(0,s.mdx)("a",{parentName:"li",href:"https://helpx.adobe.com/x-productkb/global/adobe-id-account-change.html"},"Adobe ID"),", if you do not have one already")),(0,s.mdx)("h3",{id:"obtain-administrative-permissions"},"Obtain administrative permissions"),(0,s.mdx)("p",null,"You will also need administrative permissions for the following:"),(0,s.mdx)("ul",null,(0,s.mdx)("li",{parentName:"ul"},"Adobe Analytics"),(0,s.mdx)("li",{parentName:"ul"},"Your enterprise organization")),(0,s.mdx)("p",null,"If you do not have administrative permissions, please contact your Adobe System Administrator. After requesting administrative permissions, watch for an email from Adobe Systems Incorporated, as shown:"),(0,s.mdx)("p",null,"   ",(0,s.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"386px"}},"\n      ",(0,s.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"67.1875%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,s.mdx)("picture",{parentName:"span"},"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/adobe-io-events/static/dd00d9efbaf55a5502841483c6a1cbbf/5530d/events_atrig_01.webp 320w","/adobe-io-events/static/dd00d9efbaf55a5502841483c6a1cbbf/17ef8/events_atrig_01.webp 386w"],sizes:"(max-width: 386px) 100vw, 386px",type:"image/webp"}),"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/adobe-io-events/static/dd00d9efbaf55a5502841483c6a1cbbf/dd4a7/events_atrig_01.png 320w","/adobe-io-events/static/dd00d9efbaf55a5502841483c6a1cbbf/d999c/events_atrig_01.png 386w"],sizes:"(max-width: 386px) 100vw, 386px",type:"image/png"}),"\n          ",(0,s.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/adobe-io-events/static/dd00d9efbaf55a5502841483c6a1cbbf/d999c/events_atrig_01.png",alt:"Admin rights email",title:"Admin rights email",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,s.mdx)("h3",{id:"set-up-products"},"Set up products"),(0,s.mdx)("p",null,"To set up Analytics Triggers:"),(0,s.mdx)("ol",null,(0,s.mdx)("li",{parentName:"ol"},(0,s.mdx)("a",{parentName:"li",href:"#get-product-access-through-adobe-admin-console"},"Get product access through Adobe Admin Console")),(0,s.mdx)("li",{parentName:"ol"},(0,s.mdx)("a",{parentName:"li",href:"#specify-a-new-trigger"},"Specify a new trigger"))),(0,s.mdx)("h4",{id:"get-product-access-through-adobe-admin-console"},"Get product access through Adobe Admin Console"),(0,s.mdx)("p",null,"To get access through the Adobe Admin Console:"),(0,s.mdx)("ol",null,(0,s.mdx)("li",{parentName:"ol"},(0,s.mdx)("p",{parentName:"li"},"Sign into the console by clicking the ",(0,s.mdx)("strong",{parentName:"p"},"Sign in")," button on the administrator rights email you received from Adobe and then providing your credentials.")),(0,s.mdx)("li",{parentName:"ol"},(0,s.mdx)("p",{parentName:"li"},"On the main screen of the Admin Console, select ",(0,s.mdx)("strong",{parentName:"p"},"Products"),".")),(0,s.mdx)("li",{parentName:"ol"},(0,s.mdx)("p",{parentName:"li"},"On the Products page of the console, verify that your requested products have been added to the site and then select the ",(0,s.mdx)("strong",{parentName:"p"},"Adobe Analytics")," icon."),(0,s.mdx)("p",{parentName:"li"},"  ",(0,s.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,s.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"38.4375%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,s.mdx)("picture",{parentName:"span"},"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/adobe-io-events/static/b3d739b7d4ceb7497be1dfc4815ade79/5530d/events_atrig_31.webp 320w","/adobe-io-events/static/b3d739b7d4ceb7497be1dfc4815ade79/0c8fb/events_atrig_31.webp 640w","/adobe-io-events/static/b3d739b7d4ceb7497be1dfc4815ade79/94b1e/events_atrig_31.webp 1280w","/adobe-io-events/static/b3d739b7d4ceb7497be1dfc4815ade79/f7482/events_atrig_31.webp 1482w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/adobe-io-events/static/b3d739b7d4ceb7497be1dfc4815ade79/dd4a7/events_atrig_31.png 320w","/adobe-io-events/static/b3d739b7d4ceb7497be1dfc4815ade79/0f09e/events_atrig_31.png 640w","/adobe-io-events/static/b3d739b7d4ceb7497be1dfc4815ade79/bbbf7/events_atrig_31.png 1280w","/adobe-io-events/static/b3d739b7d4ceb7497be1dfc4815ade79/4585a/events_atrig_31.png 1482w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,s.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/adobe-io-events/static/b3d739b7d4ceb7497be1dfc4815ade79/bbbf7/events_atrig_31.png",alt:"Admin Console products page",title:"Admin Console products page",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    "))),(0,s.mdx)("li",{parentName:"ol"},(0,s.mdx)("p",{parentName:"li"},"Select the ",(0,s.mdx)("strong",{parentName:"p"},"Details")," links and do the following:"),(0,s.mdx)("ol",{parentName:"li"},(0,s.mdx)("li",{parentName:"ol"},(0,s.mdx)("p",{parentName:"li"},"Verify that ",(0,s.mdx)("strong",{parentName:"p"},"Triggers")," appears in the ",(0,s.mdx)("strong",{parentName:"p"},"Inclued Services")," section."),(0,s.mdx)("p",{parentName:"li"},(0,s.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,s.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"45.9375%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,s.mdx)("picture",{parentName:"span"},"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/adobe-io-events/static/3d2d4a8f9ab95c47bf9e0bb28a183ec7/5530d/events_atrig_32.webp 320w","/adobe-io-events/static/3d2d4a8f9ab95c47bf9e0bb28a183ec7/0c8fb/events_atrig_32.webp 640w","/adobe-io-events/static/3d2d4a8f9ab95c47bf9e0bb28a183ec7/94b1e/events_atrig_32.webp 1280w","/adobe-io-events/static/3d2d4a8f9ab95c47bf9e0bb28a183ec7/0b34d/events_atrig_32.webp 1920w","/adobe-io-events/static/3d2d4a8f9ab95c47bf9e0bb28a183ec7/237f9/events_atrig_32.webp 2524w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/adobe-io-events/static/3d2d4a8f9ab95c47bf9e0bb28a183ec7/dd4a7/events_atrig_32.png 320w","/adobe-io-events/static/3d2d4a8f9ab95c47bf9e0bb28a183ec7/0f09e/events_atrig_32.png 640w","/adobe-io-events/static/3d2d4a8f9ab95c47bf9e0bb28a183ec7/bbbf7/events_atrig_32.png 1280w","/adobe-io-events/static/3d2d4a8f9ab95c47bf9e0bb28a183ec7/ac7a9/events_atrig_32.png 1920w","/adobe-io-events/static/3d2d4a8f9ab95c47bf9e0bb28a183ec7/fa34b/events_atrig_32.png 2524w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,s.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/adobe-io-events/static/3d2d4a8f9ab95c47bf9e0bb28a183ec7/bbbf7/events_atrig_32.png",alt:"Admin Console: configure product",title:"Admin Console: configure product",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    "))))),(0,s.mdx)("li",{parentName:"ol"},(0,s.mdx)("p",{parentName:"li"},"To give permissions to users who want access to Adobe services in the cloud:"),(0,s.mdx)("ol",{parentName:"li"},(0,s.mdx)("li",{parentName:"ol"},(0,s.mdx)("p",{parentName:"li"},"Select ",(0,s.mdx)("strong",{parentName:"p"},"User management")," and then select ",(0,s.mdx)("strong",{parentName:"p"},"Users"),".")),(0,s.mdx)("li",{parentName:"ol"},(0,s.mdx)("p",{parentName:"li"},"Select the user","’","s name."),(0,s.mdx)("p",{parentName:"li"},(0,s.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"967px"}},"\n      ",(0,s.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"32.1875%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,s.mdx)("picture",{parentName:"span"},"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/adobe-io-events/static/1bb7eb1cc8b1adcc301d452693f6c607/5530d/events_atrig_05.webp 320w","/adobe-io-events/static/1bb7eb1cc8b1adcc301d452693f6c607/0c8fb/events_atrig_05.webp 640w","/adobe-io-events/static/1bb7eb1cc8b1adcc301d452693f6c607/0a18a/events_atrig_05.webp 967w"],sizes:"(max-width: 967px) 100vw, 967px",type:"image/webp"}),"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/adobe-io-events/static/1bb7eb1cc8b1adcc301d452693f6c607/dd4a7/events_atrig_05.png 320w","/adobe-io-events/static/1bb7eb1cc8b1adcc301d452693f6c607/0f09e/events_atrig_05.png 640w","/adobe-io-events/static/1bb7eb1cc8b1adcc301d452693f6c607/3ccd1/events_atrig_05.png 967w"],sizes:"(max-width: 967px) 100vw, 967px",type:"image/png"}),"\n          ",(0,s.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/adobe-io-events/static/1bb7eb1cc8b1adcc301d452693f6c607/3ccd1/events_atrig_05.png",alt:"Selecting the user name",title:"Selecting the user name",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    "))),(0,s.mdx)("li",{parentName:"ol"},(0,s.mdx)("p",{parentName:"li"},"For the user","’","s ",(0,s.mdx)("strong",{parentName:"p"},"Access and rights"),", provide ",(0,s.mdx)("strong",{parentName:"p"},"Product Access")," and ",(0,s.mdx)("strong",{parentName:"p"},"Admin Rights")," from the drop-down for the available products and services."),(0,s.mdx)("p",{parentName:"li"},(0,s.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"765px"}},"\n      ",(0,s.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"53.75%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,s.mdx)("picture",{parentName:"span"},"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/adobe-io-events/static/e28b85324ccf7afafa58a465eb33fa77/5530d/events_atrig_06.webp 320w","/adobe-io-events/static/e28b85324ccf7afafa58a465eb33fa77/0c8fb/events_atrig_06.webp 640w","/adobe-io-events/static/e28b85324ccf7afafa58a465eb33fa77/db6df/events_atrig_06.webp 765w"],sizes:"(max-width: 765px) 100vw, 765px",type:"image/webp"}),"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/adobe-io-events/static/e28b85324ccf7afafa58a465eb33fa77/dd4a7/events_atrig_06.png 320w","/adobe-io-events/static/e28b85324ccf7afafa58a465eb33fa77/0f09e/events_atrig_06.png 640w","/adobe-io-events/static/e28b85324ccf7afafa58a465eb33fa77/e97d8/events_atrig_06.png 765w"],sizes:"(max-width: 765px) 100vw, 765px",type:"image/png"}),"\n          ",(0,s.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/adobe-io-events/static/e28b85324ccf7afafa58a465eb33fa77/e97d8/events_atrig_06.png",alt:"Setting the user access rights",title:"Setting the user access rights",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")))))),(0,s.mdx)("h4",{id:"specify-a-new-trigger"},"Specify a new trigger"),(0,s.mdx)("p",null,"You can specify triggers for many events on your site. This example will set notifications to be sent when carts are abandoned: set a trigger for sessions when the user visits either a ",(0,s.mdx)("strong",{parentName:"p"},"cart.html"),", ",(0,s.mdx)("strong",{parentName:"p"},"checkout.html")," or ",(0,s.mdx)("strong",{parentName:"p"},"order.html")," page, but never reaches the ",(0,s.mdx)("strong",{parentName:"p"},"thank-you.html")," page within a ten minute session. The trigger indicates that the user added products to the cart, and was about to make a purchase, but later decided otherwise, or forgot to complete the purchase."),(0,s.mdx)("p",null,"To specify a new trigger:"),(0,s.mdx)("ol",null,(0,s.mdx)("li",{parentName:"ol"},(0,s.mdx)("p",{parentName:"li"},"On the Experience Cloud home page, select the ",(0,s.mdx)("strong",{parentName:"p"},"Apps")," icon, and then select ",(0,s.mdx)("strong",{parentName:"p"},"Activation"),"."),(0,s.mdx)("p",{parentName:"li"},(0,s.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,s.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"46.875%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,s.mdx)("picture",{parentName:"span"},"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/adobe-io-events/static/2fa6eedfa1ecf9ce1d6ba399453bda21/5530d/events_atrig_34.webp 320w","/adobe-io-events/static/2fa6eedfa1ecf9ce1d6ba399453bda21/0c8fb/events_atrig_34.webp 640w","/adobe-io-events/static/2fa6eedfa1ecf9ce1d6ba399453bda21/94b1e/events_atrig_34.webp 1280w","/adobe-io-events/static/2fa6eedfa1ecf9ce1d6ba399453bda21/0b34d/events_atrig_34.webp 1920w","/adobe-io-events/static/2fa6eedfa1ecf9ce1d6ba399453bda21/04e09/events_atrig_34.webp 2502w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/adobe-io-events/static/2fa6eedfa1ecf9ce1d6ba399453bda21/dd4a7/events_atrig_34.png 320w","/adobe-io-events/static/2fa6eedfa1ecf9ce1d6ba399453bda21/0f09e/events_atrig_34.png 640w","/adobe-io-events/static/2fa6eedfa1ecf9ce1d6ba399453bda21/bbbf7/events_atrig_34.png 1280w","/adobe-io-events/static/2fa6eedfa1ecf9ce1d6ba399453bda21/ac7a9/events_atrig_34.png 1920w","/adobe-io-events/static/2fa6eedfa1ecf9ce1d6ba399453bda21/cadd2/events_atrig_34.png 2502w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,s.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/adobe-io-events/static/2fa6eedfa1ecf9ce1d6ba399453bda21/bbbf7/events_atrig_34.png",alt:"Experience Cloud Admin, selecting Activation",title:"Experience Cloud Admin, selecting Activation",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    "))),(0,s.mdx)("li",{parentName:"ol"},(0,s.mdx)("p",{parentName:"li"},"In the ",(0,s.mdx)("strong",{parentName:"p"},"Web Activation")," section, select the ",(0,s.mdx)("strong",{parentName:"p"},"Triggers")," option."),(0,s.mdx)("p",{parentName:"li"},(0,s.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,s.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"75%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,s.mdx)("picture",{parentName:"span"},"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/adobe-io-events/static/dbe511411fcb3fd439c9b7af6974ee26/5530d/events_atrig_33.webp 320w","/adobe-io-events/static/dbe511411fcb3fd439c9b7af6974ee26/0c8fb/events_atrig_33.webp 640w","/adobe-io-events/static/dbe511411fcb3fd439c9b7af6974ee26/94b1e/events_atrig_33.webp 1280w","/adobe-io-events/static/dbe511411fcb3fd439c9b7af6974ee26/df236/events_atrig_33.webp 1342w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/adobe-io-events/static/dbe511411fcb3fd439c9b7af6974ee26/dd4a7/events_atrig_33.png 320w","/adobe-io-events/static/dbe511411fcb3fd439c9b7af6974ee26/0f09e/events_atrig_33.png 640w","/adobe-io-events/static/dbe511411fcb3fd439c9b7af6974ee26/bbbf7/events_atrig_33.png 1280w","/adobe-io-events/static/dbe511411fcb3fd439c9b7af6974ee26/50bf7/events_atrig_33.png 1342w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,s.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/adobe-io-events/static/dbe511411fcb3fd439c9b7af6974ee26/bbbf7/events_atrig_33.png",alt:"Launching Triggers",title:"Launching Triggers",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    "))),(0,s.mdx)("li",{parentName:"ol"},(0,s.mdx)("p",{parentName:"li"},"On the ",(0,s.mdx)("strong",{parentName:"p"},"Triggers")," page, select the ",(0,s.mdx)("strong",{parentName:"p"},"New Triggers")," button, and then choose ",(0,s.mdx)("strong",{parentName:"p"},"Abandonment"),"."),(0,s.mdx)("p",{parentName:"li"},(0,s.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"755px"}},"\n      ",(0,s.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"26.875%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,s.mdx)("picture",{parentName:"span"},"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/adobe-io-events/static/9c3d3dc471d5710c092a0d0d5d2a4221/5530d/events_atrig_19.webp 320w","/adobe-io-events/static/9c3d3dc471d5710c092a0d0d5d2a4221/0c8fb/events_atrig_19.webp 640w","/adobe-io-events/static/9c3d3dc471d5710c092a0d0d5d2a4221/ffd27/events_atrig_19.webp 755w"],sizes:"(max-width: 755px) 100vw, 755px",type:"image/webp"}),"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/adobe-io-events/static/9c3d3dc471d5710c092a0d0d5d2a4221/dd4a7/events_atrig_19.png 320w","/adobe-io-events/static/9c3d3dc471d5710c092a0d0d5d2a4221/0f09e/events_atrig_19.png 640w","/adobe-io-events/static/9c3d3dc471d5710c092a0d0d5d2a4221/3369e/events_atrig_19.png 755w"],sizes:"(max-width: 755px) 100vw, 755px",type:"image/png"}),"\n          ",(0,s.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/adobe-io-events/static/9c3d3dc471d5710c092a0d0d5d2a4221/3369e/events_atrig_19.png",alt:"Selecting the Abandonment trigger",title:"Selecting the Abandonment trigger",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    "))),(0,s.mdx)("li",{parentName:"ol"},(0,s.mdx)("p",{parentName:"li"},"On the ",(0,s.mdx)("strong",{parentName:"p"},"New Trigger")," box, specify a ",(0,s.mdx)("strong",{parentName:"p"},"Name")," and provide a ",(0,s.mdx)("strong",{parentName:"p"},"Description")," for your trigger. Select the ",(0,s.mdx)("strong",{parentName:"p"},"Report Suite")," that contains the Adobe Analytics data you want to trigger from."),(0,s.mdx)("p",{parentName:"li"},(0,s.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"286px"}},"\n      ",(0,s.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"80.76923076923077%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,s.mdx)("picture",{parentName:"span"},"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/adobe-io-events/static/64ec8d83376aaaac42b9013ede8e1e5d/d7664/events_atrig_20.webp 286w"],sizes:"(max-width: 286px) 100vw, 286px",type:"image/webp"}),"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/adobe-io-events/static/64ec8d83376aaaac42b9013ede8e1e5d/9e45f/events_atrig_20.png 286w"],sizes:"(max-width: 286px) 100vw, 286px",type:"image/png"}),"\n          ",(0,s.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/adobe-io-events/static/64ec8d83376aaaac42b9013ede8e1e5d/9e45f/events_atrig_20.png",alt:"Entering trigger details",title:"Entering trigger details",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    "))),(0,s.mdx)("li",{parentName:"ol"},(0,s.mdx)("p",{parentName:"li"},"On the ",(0,s.mdx)("strong",{parentName:"p"},"Triggers Settings")," page, define the business rules for your trigger. You can drag a dimension/metric box from the left panel to the right side of the screen and then specify the business rules for what must happen and what must not happen in a session. In this case, set the trigger to fire after 10 minutes of inactivity after the rules are met."),(0,s.mdx)("p",{parentName:"li"},(0,s.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1063px"}},"\n      ",(0,s.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"110.31249999999999%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,s.mdx)("picture",{parentName:"span"},"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/adobe-io-events/static/98f23bdff845f4c6893fdd7b421aafdc/5530d/events_atrig_21.webp 320w","/adobe-io-events/static/98f23bdff845f4c6893fdd7b421aafdc/0c8fb/events_atrig_21.webp 640w","/adobe-io-events/static/98f23bdff845f4c6893fdd7b421aafdc/1fcbd/events_atrig_21.webp 1063w"],sizes:"(max-width: 1063px) 100vw, 1063px",type:"image/webp"}),"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/adobe-io-events/static/98f23bdff845f4c6893fdd7b421aafdc/dd4a7/events_atrig_21.png 320w","/adobe-io-events/static/98f23bdff845f4c6893fdd7b421aafdc/0f09e/events_atrig_21.png 640w","/adobe-io-events/static/98f23bdff845f4c6893fdd7b421aafdc/f6540/events_atrig_21.png 1063w"],sizes:"(max-width: 1063px) 100vw, 1063px",type:"image/png"}),"\n          ",(0,s.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/adobe-io-events/static/98f23bdff845f4c6893fdd7b421aafdc/f6540/events_atrig_21.png",alt:"Defining trigger business rules",title:"Defining trigger business rules",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    "))),(0,s.mdx)("li",{parentName:"ol"},(0,s.mdx)("p",{parentName:"li"},"Save your changes."))),(0,s.mdx)("p",null,"Once you save the trigger, any event in your report suite that meets the defined business rules criteria will cause a trigger to fire. You can view the status of triggers on the ",(0,s.mdx)("strong",{parentName:"p"},"Triggers")," page."),(0,s.mdx)("p",null,(0,s.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1036px"}},"\n      ",(0,s.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"112.1875%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,s.mdx)("picture",{parentName:"span"},"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/adobe-io-events/static/d18f0b9a59abc1329c9528fded4a5177/5530d/events_atrig_22.webp 320w","/adobe-io-events/static/d18f0b9a59abc1329c9528fded4a5177/0c8fb/events_atrig_22.webp 640w","/adobe-io-events/static/d18f0b9a59abc1329c9528fded4a5177/57ca4/events_atrig_22.webp 1036w"],sizes:"(max-width: 1036px) 100vw, 1036px",type:"image/webp"}),"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/adobe-io-events/static/d18f0b9a59abc1329c9528fded4a5177/dd4a7/events_atrig_22.png 320w","/adobe-io-events/static/d18f0b9a59abc1329c9528fded4a5177/0f09e/events_atrig_22.png 640w","/adobe-io-events/static/d18f0b9a59abc1329c9528fded4a5177/4423c/events_atrig_22.png 1036w"],sizes:"(max-width: 1036px) 100vw, 1036px",type:"image/png"}),"\n          ",(0,s.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/adobe-io-events/static/d18f0b9a59abc1329c9528fded4a5177/4423c/events_atrig_22.png",alt:"Viewing triggers listing",title:"Viewing triggers listing",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,s.mdx)("h2",{id:"use-adobe-developer-console"},"Use Adobe Developer Console"),(0,s.mdx)("p",null,"Integrations are created as part of a project within Adobe Developer Console. This requires you to have access to ",(0,s.mdx)("a",{parentName:"p",href:"https://www.adobe.com/go/devs_console_ui"},"Console")," in order to create a project, add events to your project, configure the events, and register your webhook."),(0,s.mdx)("p",null,"For detailed instructions on completing these steps, please begin by reading the ",(0,s.mdx)("a",{parentName:"p",href:"https://www.adobe.com/go/devs_console_getting_started"},"Adobe Developer Console Getting Started guide"),". "),(0,s.mdx)("p",null,"When you are ready to ",(0,s.mdx)("a",{parentName:"p",href:"/adobe-io-events/developer-console/docs/guides/services/services-add-event/"},"add events to your project")," follow the steps provided, making sure to select ",(0,s.mdx)("strong",{parentName:"p"},"Analytics Triggers"),"."),(0,s.mdx)("p",null,"Once you have completed the event registration, you will be taken to the ",(0,s.mdx)("em",{parentName:"p"},"Registration Details")," page where you will be able to see the details of your new registration. "),(0,s.mdx)("p",null,"For more information, read the ",(0,s.mdx)("a",{parentName:"p",href:"../index.md"},"Introduction to Webhooks"),". "),(0,s.mdx)("p",null,(0,s.mdx)("em",{parentName:"p"},"The following image shows an example of an event registration using Creative Cloud Libraries. Results for Adobe Analytics will be similar.")),(0,s.mdx)("p",null,(0,s.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,s.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"61.5625%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,s.mdx)("picture",{parentName:"span"},"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/adobe-io-events/static/16dbba702552a01ef7f3deffda37bb13/5530d/events-registration-details.webp 320w","/adobe-io-events/static/16dbba702552a01ef7f3deffda37bb13/0c8fb/events-registration-details.webp 640w","/adobe-io-events/static/16dbba702552a01ef7f3deffda37bb13/94b1e/events-registration-details.webp 1280w","/adobe-io-events/static/16dbba702552a01ef7f3deffda37bb13/0b34d/events-registration-details.webp 1920w","/adobe-io-events/static/16dbba702552a01ef7f3deffda37bb13/d5269/events-registration-details.webp 2560w","/adobe-io-events/static/16dbba702552a01ef7f3deffda37bb13/4f2a7/events-registration-details.webp 2672w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/adobe-io-events/static/16dbba702552a01ef7f3deffda37bb13/dd4a7/events-registration-details.png 320w","/adobe-io-events/static/16dbba702552a01ef7f3deffda37bb13/0f09e/events-registration-details.png 640w","/adobe-io-events/static/16dbba702552a01ef7f3deffda37bb13/bbbf7/events-registration-details.png 1280w","/adobe-io-events/static/16dbba702552a01ef7f3deffda37bb13/ac7a9/events-registration-details.png 1920w","/adobe-io-events/static/16dbba702552a01ef7f3deffda37bb13/c7a69/events-registration-details.png 2560w","/adobe-io-events/static/16dbba702552a01ef7f3deffda37bb13/dce3f/events-registration-details.png 2672w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,s.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/adobe-io-events/static/16dbba702552a01ef7f3deffda37bb13/bbbf7/events-registration-details.png",alt:"Event Registration Details tab in Adobe Developer Console",title:"Event Registration Details tab in Adobe Developer Console",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,s.mdx)("h2",{id:"watch-the-solution-work"},"Watch the solution work"),(0,s.mdx)("p",null,"Your enterprise may have its own tool that you can use to subscribe and listen to webhook events. Alternatively, you can use the following procedure to set up notifications with Slack."),(0,s.mdx)("p",null,"To watch your trigger work on Slack:"),(0,s.mdx)("ol",null,(0,s.mdx)("li",{parentName:"ol"},(0,s.mdx)("p",{parentName:"li"},"Clone the repository and follow the setup described on ",(0,s.mdx)("a",{parentName:"p",href:"https://github.com/hirenshah111/webhook_server"},"https://github.com/hirenshah111/webhook_server"),".")),(0,s.mdx)("li",{parentName:"ol"},(0,s.mdx)("p",{parentName:"li"},"Modify the Slack details in webhook_server/public/javascripts/app.js according to how you want to see the notifications.")),(0,s.mdx)("li",{parentName:"ol"},(0,s.mdx)("p",{parentName:"li"},"Run the application and create a ",(0,s.mdx)("strong",{parentName:"p"},"triggers2")," listener, then select ",(0,s.mdx)("strong",{parentName:"p"},"Connect"),"."),(0,s.mdx)("p",{parentName:"li"},(0,s.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1199px"}},"\n      ",(0,s.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"25%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,s.mdx)("picture",{parentName:"span"},"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/adobe-io-events/static/a61e86d68742b545886eecdbd0e79227/5530d/events_atrig_29.webp 320w","/adobe-io-events/static/a61e86d68742b545886eecdbd0e79227/0c8fb/events_atrig_29.webp 640w","/adobe-io-events/static/a61e86d68742b545886eecdbd0e79227/661f4/events_atrig_29.webp 1199w"],sizes:"(max-width: 1199px) 100vw, 1199px",type:"image/webp"}),"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/adobe-io-events/static/a61e86d68742b545886eecdbd0e79227/dd4a7/events_atrig_29.png 320w","/adobe-io-events/static/a61e86d68742b545886eecdbd0e79227/0f09e/events_atrig_29.png 640w","/adobe-io-events/static/a61e86d68742b545886eecdbd0e79227/be814/events_atrig_29.png 1199w"],sizes:"(max-width: 1199px) 100vw, 1199px",type:"image/png"}),"\n          ",(0,s.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/adobe-io-events/static/a61e86d68742b545886eecdbd0e79227/be814/events_atrig_29.png",alt:"Listening to webhook events",title:"Listening to webhook events",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")))),(0,s.mdx)("p",null,"Trigger messages are received as ",(0,s.mdx)("inlineCode",{parentName:"p"},"POST")," requests on this thread."))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-using-analytics-triggers-event-setup-md-4d2bfe5bac3dd025b976.js.map