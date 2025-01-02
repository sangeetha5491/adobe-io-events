"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[7490],{20682:function(e,a,n){n.r(a),n.d(a,{_frontmatter:function(){return i},default:function(){return s}});var t=n(87462),m=n(63366),o=(n(15007),n(64983)),d=n(91515),p=["components"],i={},r={_frontmatter:i},l=d.Z;function s(e){var a=e.components,n=(0,m.Z)(e,p);return(0,o.mdx)(l,(0,t.Z)({},r,n,{components:a,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"install-adobe-io-events-add-on-module-on-aem-on-premise"},"Install Adobe I/O Events Add-On Module on AEM On-Premise"),(0,o.mdx)("p",null,"You have 2 main options to install the ",(0,o.mdx)("inlineCode",{parentName:"p"},"aio-aem-events")," add-on module:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"you may do it manually using AEM package manager."),(0,o.mdx)("li",{parentName:"ul"},"you may automate it with ",(0,o.mdx)("inlineCode",{parentName:"li"},"maven"))),(0,o.mdx)("h2",{id:"using-aem-package-manager"},"Using AEM Package Manager"),(0,o.mdx)("ol",null,(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("p",{parentName:"li"},"Open AEM Package Manager by selecting the ",(0,o.mdx)("strong",{parentName:"p"},"Tools")," icon and then selecting ",(0,o.mdx)("strong",{parentName:"p"},"Deployment")," and ",(0,o.mdx)("strong",{parentName:"p"},"Packages"),".")),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("p",{parentName:"li"},"In ",(0,o.mdx)("strong",{parentName:"p"},"Package Manager"),", select ",(0,o.mdx)("strong",{parentName:"p"},"Upload Package"),". Select ",(0,o.mdx)("strong",{parentName:"p"},"Browse")," and navigate to the package zip file. Select ",(0,o.mdx)("strong",{parentName:"p"},"OK"),"."),(0,o.mdx)("blockquote",{parentName:"li"},(0,o.mdx)("p",{parentName:"blockquote"},"Note: If you have an older version of the package, uninstall it and remove it to avoid potential conflicts.**."))),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("p",{parentName:"li"},"Select ",(0,o.mdx)("strong",{parentName:"p"},"Install"),".")),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("p",{parentName:"li"},"On the ",(0,o.mdx)("strong",{parentName:"p"},"Install Package")," dialog box, select ",(0,o.mdx)("strong",{parentName:"p"},"Merge")," from the ",(0,o.mdx)("strong",{parentName:"p"},"Access Control Handling")," drop-down list and select ",(0,o.mdx)("strong",{parentName:"p"},"Install"),".")),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("p",{parentName:"li"},"Watch the ",(0,o.mdx)("strong",{parentName:"p"},"Activity Log"),". If installed, the log reports that the package is imported."))),(0,o.mdx)("p",null,"For more information read the ",(0,o.mdx)("a",{parentName:"p",href:"https://experienceleague.adobe.com/docs/experience-manager-65/administering/contentmanagement/package-manager.html?lang=en"},"AEM package manager guide")),(0,o.mdx)("h2",{id:"using-maven"},"Using ",(0,o.mdx)("inlineCode",{parentName:"h2"},"maven")),(0,o.mdx)("p",null,"Using ",(0,o.mdx)("inlineCode",{parentName:"p"},"maven"),", you may deploy ",(0,o.mdx)("inlineCode",{parentName:"p"},"aio-aem-events")," as an embedded package within your own AEM project."),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},"add ",(0,o.mdx)("inlineCode",{parentName:"p"},"aio-aem-events")," in your ",(0,o.mdx)("inlineCode",{parentName:"p"},"maven")," build ",(0,o.mdx)("inlineCode",{parentName:"p"},"dependencies")," section"),(0,o.mdx)("pre",{parentName:"li"},(0,o.mdx)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n      <groupId>com.adobe.aio.aem</groupId>\n      <artifactId>aio-aem-events</artifactId>\n      <version>${aio-aem-events.version}</version>\n      <classifier>aem65</classifier>\n      <type>zip</type>\n</dependency>\n"))),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},"add ",(0,o.mdx)("inlineCode",{parentName:"p"},"aio-aem-events")," in your ",(0,o.mdx)("inlineCode",{parentName:"p"},"maven")," build ",(0,o.mdx)("inlineCode",{parentName:"p"},"filevault-package-maven-plugin")," ",(0,o.mdx)("inlineCode",{parentName:"p"},"embedded")," ",(0,o.mdx)("inlineCode",{parentName:"p"},"configuration")," section:"),(0,o.mdx)("pre",{parentName:"li"},(0,o.mdx)("code",{parentName:"pre",className:"language-xml"},"<embedded>\n      <groupId>com.adobe.aio.aem</groupId>\n      <artifactId>aio-aem-events</artifactId>\n      <type>zip</type>\n      <target>/apps/mysite-packages/application/install</target>\n</embedded>\n")))),(0,o.mdx)("p",null,"For more details on embedding 3rd-party within our AEM project read ",(0,o.mdx)("a",{parentName:"p",href:"https://experienceleague.adobe.com/docs/experience-manager-cloud-service/content/implementing/developing/aem-project-content-package-structure.html%3Flang%3Den#embedding-3rd-party-packages"},"AEM project structure guide"),"."),(0,o.mdx)("p",null,"If you are looking for a working sample browse ",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/francoisledroff/aio-aem-events-sample/tree/aem65"},"aio-aem-events-sample")))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-using-aem-aem-addon-module-aem-on-premise-package-install-md-cb8999a1a2484cb8a7c9.js.map