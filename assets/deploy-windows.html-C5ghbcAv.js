import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as i,o,c as l,a as e,b as t,d as a,e as r}from"./app-Cd8I0gyF.js";const p={},d=e("h2",{id:"部署教程",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#部署教程"},[e("span",null,"部署教程")])],-1),c=e("br",null,null,-1),m={href:"https://www.python.org/downloads/release/python-3119",target:"_blank",rel:"noopener noreferrer"},h=e("br",null,null,-1),u=e("img",{src:"https://img2.imgtp.com/2024/04/11/q3NfsbUp.png",alt:"图1",loading:"lazy"},null,-1),g=e("br",null,null,-1),y=e("br",null,null,-1),b=e("img",{src:"",alt:"图2",loading:"lazy"},null,-1),_=e("br",null,null,-1),v={href:"https://github.moeyy.xyz/github.com/git-for-windows/git/releases/download/v2.44.0.windows.1/Git-2.44.0-64-bit.exe",target:"_blank",rel:"noopener noreferrer"},f=e("br",null,null,-1),w=e("img",{src:"https://img2.imgtp.com/2024/04/11/Oa6RHDrb.png",alt:"图1",loading:"lazy"},null,-1),k=e("br",null,null,-1),x=r(`<p>3.使用Git克隆仓库</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">git</span> clone https://github.com/MeoProject/lx-music-api-server <span class="token parameter variable">-b</span> main
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>4.使用pip或poetry进行依赖项安装</p><details class="hint-container details"><summary>pip</summary><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>pip config <span class="token builtin class-name">set</span> global.index-url https://pypi.tuna.tsinghua.edu.cn/simple<span class="token punctuation">(</span>可选的操作<span class="token punctuation">)</span>
pip <span class="token function">install</span> <span class="token parameter variable">-r</span> requirements.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></details><details class="hint-container details"><summary>poetry</summary><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>pip <span class="token function">install</span> poetry
poetry <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></details><p>5.启动服务器</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>python main.py
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果终端上出现监听IP:端口，那么恭喜您，您已经完成部署😋</p>`,8);function P(N,T){const n=i("ExternalLinkIcon");return o(),l("div",null,[d,e("p",null,[t("1.下载并且安装Python3.10-3.11"),c,t(" 前往"),e("a",m,[t("Python官网"),a(n)]),t("下拉即可找到Python3.11.9的下载链接"),h,u,g,t(" 然后安装Python"),y,b]),e("p",null,[t("2.下载并且安装Git"),_,e("a",v,[t("点击我加速下载"),a(n)]),f,w,k,t(" 一路点击Next和Install即可")]),x])}const q=s(p,[["render",P],["__file","deploy-windows.html.vue"]]),I=JSON.parse('{"path":"/deploy/deploy-windows.html","title":"Windows部署教程","lang":"zh-CN","frontmatter":{"head":[["meta",{"name":"keywords","content":"Windows部署教程"}],["meta",{"property":"og:url","content":"https://apidoc.zcmonety.xyz/deploy/deploy-windows.html"}],["meta",{"property":"og:site_name","content":"LX Music Api Server"}],["meta",{"property":"og:title","content":"Windows部署教程"}],["meta",{"property":"og:description","content":"部署教程 1.下载并且安装Python3.10-3.11 前往Python官网下拉即可找到Python3.11.9的下载链接 图1 然后安装Python 图2 2.下载并且安装Git 点击我加速下载 图1 一路点击Next和Install即可 3.使用Git克隆仓库 4.使用pip或poetry进行依赖项安装 pip poetry 5.启动服务器 如果..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://img2.imgtp.com/2024/04/11/q3NfsbUp.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-14T06:02:46.000Z"}],["meta",{"property":"article:author","content":"ikun0014"}],["meta",{"property":"article:published_time","content":"2024-04-10T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-14T06:02:46.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Windows部署教程\\",\\"image\\":[\\"https://img2.imgtp.com/2024/04/11/q3NfsbUp.png\\",\\"https://img2.imgtp.com/2024/04/11/Oa6RHDrb.png\\"],\\"datePublished\\":\\"2024-04-10T00:00:00.000Z\\",\\"dateModified\\":\\"2024-04-14T06:02:46.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"ikun0014\\"}]}"]],"title":"Windows部署教程","icon":"fab fa-dochub","author":"ikun0014","date":"2024-04-10T00:00:00.000Z","index":false,"description":"部署教程 1.下载并且安装Python3.10-3.11 前往Python官网下拉即可找到Python3.11.9的下载链接 图1 然后安装Python 图2 2.下载并且安装Git 点击我加速下载 图1 一路点击Next和Install即可 3.使用Git克隆仓库 4.使用pip或poetry进行依赖项安装 pip poetry 5.启动服务器 如果..."},"headers":[{"level":2,"title":"部署教程","slug":"部署教程","link":"#部署教程","children":[]}],"git":{"createdTime":1712763316000,"updatedTime":1713074566000,"contributors":[{"name":"ikun","email":"ikun0014@qq.com","commits":3}]},"readingTime":{"minutes":0.66,"words":199},"filePathRelative":"deploy/deploy-windows.md","localizedDate":"2024年4月10日","autoDesc":true}');export{q as comp,I as data};