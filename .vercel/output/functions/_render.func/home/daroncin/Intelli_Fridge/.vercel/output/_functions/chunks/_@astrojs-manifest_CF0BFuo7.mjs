import 'cookie';
import 'kleur/colors';
import { D as DEFAULT_404_COMPONENT } from './astro/server_pfMX3tV2.mjs';
import 'clsx';
import { escape } from 'html-escaper';
import { compile } from 'path-to-regexp';

function template({
  title,
  pathname,
  statusCode = 404,
  tabTitle,
  body
}) {
  return `<!doctype html>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<title>${tabTitle}</title>
		<style>
			:root {
				--gray-10: hsl(258, 7%, 10%);
				--gray-20: hsl(258, 7%, 20%);
				--gray-30: hsl(258, 7%, 30%);
				--gray-40: hsl(258, 7%, 40%);
				--gray-50: hsl(258, 7%, 50%);
				--gray-60: hsl(258, 7%, 60%);
				--gray-70: hsl(258, 7%, 70%);
				--gray-80: hsl(258, 7%, 80%);
				--gray-90: hsl(258, 7%, 90%);
				--black: #13151A;
				--accent-light: #E0CCFA;
			}

			* {
				box-sizing: border-box;
			}

			html {
				background: var(--black);
				color-scheme: dark;
				accent-color: var(--accent-light);
			}

			body {
				background-color: var(--gray-10);
				color: var(--gray-80);
				font-family: ui-monospace, Menlo, Monaco, "Cascadia Mono", "Segoe UI Mono", "Roboto Mono", "Oxygen Mono", "Ubuntu Monospace", "Source Code Pro", "Fira Mono", "Droid Sans Mono", "Courier New", monospace;
				line-height: 1.5;
				margin: 0;
			}

			a {
				color: var(--accent-light);
			}

			.center {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				height: 100vh;
				width: 100vw;
			}

			h1 {
				margin-bottom: 8px;
				color: white;
				font-family: system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
				font-weight: 700;
				margin-top: 1rem;
				margin-bottom: 0;
			}

			.statusCode {
				color: var(--accent-light);
			}

			.astro-icon {
				height: 124px;
				width: 124px;
			}

			pre, code {
				padding: 2px 8px;
				background: rgba(0,0,0, 0.25);
				border: 1px solid rgba(255,255,255, 0.25);
				border-radius: 4px;
				font-size: 1.2em;
				margin-top: 0;
				max-width: 60em;
			}
		</style>
	</head>
	<body>
		<main class="center">
			<svg class="astro-icon" xmlns="http://www.w3.org/2000/svg" width="64" height="80" viewBox="0 0 64 80" fill="none"> <path d="M20.5253 67.6322C16.9291 64.3531 15.8793 57.4632 17.3776 52.4717C19.9755 55.6188 23.575 56.6157 27.3035 57.1784C33.0594 58.0468 38.7122 57.722 44.0592 55.0977C44.6709 54.7972 45.2362 54.3978 45.9045 53.9931C46.4062 55.4451 46.5368 56.9109 46.3616 58.4028C45.9355 62.0362 44.1228 64.8429 41.2397 66.9705C40.0868 67.8215 38.8669 68.5822 37.6762 69.3846C34.0181 71.8508 33.0285 74.7426 34.403 78.9491C34.4357 79.0516 34.4649 79.1541 34.5388 79.4042C32.6711 78.5705 31.3069 77.3565 30.2674 75.7604C29.1694 74.0757 28.6471 72.2121 28.6196 70.1957C28.6059 69.2144 28.6059 68.2244 28.4736 67.257C28.1506 64.8985 27.0406 63.8425 24.9496 63.7817C22.8036 63.7192 21.106 65.0426 20.6559 67.1268C20.6215 67.2865 20.5717 67.4446 20.5218 67.6304L20.5253 67.6322Z" fill="white"/> <path d="M20.5253 67.6322C16.9291 64.3531 15.8793 57.4632 17.3776 52.4717C19.9755 55.6188 23.575 56.6157 27.3035 57.1784C33.0594 58.0468 38.7122 57.722 44.0592 55.0977C44.6709 54.7972 45.2362 54.3978 45.9045 53.9931C46.4062 55.4451 46.5368 56.9109 46.3616 58.4028C45.9355 62.0362 44.1228 64.8429 41.2397 66.9705C40.0868 67.8215 38.8669 68.5822 37.6762 69.3846C34.0181 71.8508 33.0285 74.7426 34.403 78.9491C34.4357 79.0516 34.4649 79.1541 34.5388 79.4042C32.6711 78.5705 31.3069 77.3565 30.2674 75.7604C29.1694 74.0757 28.6471 72.2121 28.6196 70.1957C28.6059 69.2144 28.6059 68.2244 28.4736 67.257C28.1506 64.8985 27.0406 63.8425 24.9496 63.7817C22.8036 63.7192 21.106 65.0426 20.6559 67.1268C20.6215 67.2865 20.5717 67.4446 20.5218 67.6304L20.5253 67.6322Z" fill="url(#paint0_linear_738_686)"/> <path d="M0 51.6401C0 51.6401 10.6488 46.4654 21.3274 46.4654L29.3786 21.6102C29.6801 20.4082 30.5602 19.5913 31.5538 19.5913C32.5474 19.5913 33.4275 20.4082 33.7289 21.6102L41.7802 46.4654C54.4274 46.4654 63.1076 51.6401 63.1076 51.6401C63.1076 51.6401 45.0197 2.48776 44.9843 2.38914C44.4652 0.935933 43.5888 0 42.4073 0H20.7022C19.5206 0 18.6796 0.935933 18.1251 2.38914C18.086 2.4859 0 51.6401 0 51.6401Z" fill="white"/> <defs> <linearGradient id="paint0_linear_738_686" x1="31.554" y1="75.4423" x2="39.7462" y2="48.376" gradientUnits="userSpaceOnUse"> <stop stop-color="#D83333"/> <stop offset="1" stop-color="#F041FF"/> </linearGradient> </defs> </svg>
			<h1>${statusCode ? `<span class="statusCode">${statusCode}: </span> ` : ""}<span class="statusMessage">${title}</span></h1>
			${body || `
				<pre>Path: ${escape(pathname)}</pre>
			`}
			</main>
	</body>
</html>`;
}

const DEFAULT_404_ROUTE = {
  component: DEFAULT_404_COMPONENT,
  generate: () => "",
  params: [],
  pattern: /\/404/,
  prerender: false,
  pathname: "/404",
  segments: [[{ content: "404", dynamic: false, spread: false }]],
  type: "page",
  route: "/404",
  fallbackRoutes: [],
  isIndex: false
};
function ensure404Route(manifest) {
  if (!manifest.routes.some((route) => route.route === "/404")) {
    manifest.routes.push(DEFAULT_404_ROUTE);
  }
  return manifest;
}
async function default404Page({ pathname }) {
  return new Response(
    template({
      statusCode: 404,
      title: "Not found",
      tabTitle: "404: Not Found",
      pathname
    }),
    { status: 404, headers: { "Content-Type": "text/html; charset=utf-8" } }
  );
}
default404Page.isAstroComponentFactory = true;
const default404Instance = {
  default: default404Page
};

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    const path = toPath(sanitizedParams);
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///home/daroncin/Intelli_Fridge/","adapterName":"@astrojs/vercel/serverless","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"const i=document.querySelector(\"#landing-header\"),d={root:null,rootMargin:\"0px\",threshold:.9},a=new IntersectionObserver(e=>{e.forEach(o=>{const{isIntersecting:r}=o;if(r){const n=o.target.getAttribute(\"data-header-color\");n&&(i.style.color=n)}})},d),u=document.querySelectorAll(\".landing-section\");u.forEach(e=>a.observe(e));const y=document.querySelectorAll(\"#landing-header li\"),t=document.querySelector(\"#menu-backdrop\");y.forEach(e=>{e.addEventListener(\"mouseenter\",()=>{const{left:o,top:r,width:n,height:c}=e.getBoundingClientRect();t.style.setProperty(\"--left\",`${o}px`),t.style.setProperty(\"--top\",`${r}px`),t.style.setProperty(\"--width\",`${n}px`),t.style.setProperty(\"--height\",`${c}px`),t.style.opacity=\"1\",t.style.visibility=\"visible\"}),e.addEventListener(\"mouseleave\",()=>{t.style.opacity=\"0\",t.style.visibility=\"hidden\"})});const m=document.getElementById(\"menu-btn\"),s=document.querySelector(\"#modal-menu\"),h=s?s.querySelectorAll(\"li > a\"):[],p=document.querySelector(\"#close-btn\");function l(){s?.classList.toggle(\"hidden\")}m?.addEventListener(\"click\",l);p?.addEventListener(\"click\",l);h.forEach(e=>{e.addEventListener(\"click\",l)});\n"}],"styles":[{"type":"external","src":"/_astro/Functionwrapper.BqIJVL0D.css"},{"type":"inline","content":"body,html{margin:0;padding:0;height:100%;width:100%}.background-container[data-astro-cid-iaqweare]{position:relative;min-height:100vh;background-image:url(../images/tech.jpg);background-size:cover;background-position:center;background-repeat:no-repeat}.technologies-section[data-astro-cid-iaqweare]{color:#fff;padding:4rem 1rem}.technologies-content[data-astro-cid-iaqweare]{position:relative;text-align:center;z-index:1}.technologies-title[data-astro-cid-iaqweare]{font-size:2.5rem;font-weight:700;margin-bottom:1rem;color:#000}.technologies-subtitle[data-astro-cid-iaqweare]{font-size:1.125rem;margin-bottom:2rem}.technologies-cards[data-astro-cid-iaqweare]{display:flex;flex-wrap:wrap;justify-content:center;gap:1.5rem}.technologies-card[data-astro-cid-iaqweare]{background-color:#fff;color:#000;border:1px solid #ccc;border-radius:.5rem;padding:1.5rem;width:250px;box-shadow:0 4px 6px #0000001a;transition:transform .3s;text-align:center;display:flex;flex-direction:column;align-items:center;justify-content:center}.technologies-card[data-astro-cid-iaqweare]:hover{transform:scale(1.05)}.technologies-card-image[data-astro-cid-iaqweare]{width:100px;height:100px;-o-object-fit:contain;object-fit:contain;margin-bottom:1rem}.technologies-card-title[data-astro-cid-iaqweare]{font-size:1.5rem;font-weight:700;margin-bottom:1rem}.technologies-card-description[data-astro-cid-iaqweare]{color:#333;margin-bottom:1rem}.components-section[data-astro-cid-iaqweare]{padding:4rem 1rem}.components-cards[data-astro-cid-iaqweare]{display:grid;grid-template-columns:repeat(3,1fr);gap:1.5rem}.components-card[data-astro-cid-iaqweare]{background-color:#fff;color:#000;border:1px solid #ccc;border-radius:.5rem;padding:1.5rem;box-shadow:0 4px 6px #0000001a;transition:transform .3s;text-align:center;display:flex;flex-direction:column;align-items:center;justify-content:center}.components-card[data-astro-cid-iaqweare]:hover{transform:scale(1.05)}.components-card-image[data-astro-cid-iaqweare]{width:100px;height:100px;-o-object-fit:contain;object-fit:contain;margin-bottom:1rem}.components-card-title[data-astro-cid-iaqweare]{font-size:1.5rem;font-weight:700;margin-bottom:1rem}.components-card-description[data-astro-cid-iaqweare]{color:#333;margin-bottom:1rem}\n"}],"routeData":{"route":"/functionwrapper","isIndex":false,"type":"page","pattern":"^\\/Functionwrapper\\/?$","segments":[[{"content":"Functionwrapper","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/Functionwrapper.astro","pathname":"/Functionwrapper","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"const i=document.querySelector(\"#landing-header\"),d={root:null,rootMargin:\"0px\",threshold:.9},a=new IntersectionObserver(e=>{e.forEach(o=>{const{isIntersecting:r}=o;if(r){const n=o.target.getAttribute(\"data-header-color\");n&&(i.style.color=n)}})},d),u=document.querySelectorAll(\".landing-section\");u.forEach(e=>a.observe(e));const y=document.querySelectorAll(\"#landing-header li\"),t=document.querySelector(\"#menu-backdrop\");y.forEach(e=>{e.addEventListener(\"mouseenter\",()=>{const{left:o,top:r,width:n,height:c}=e.getBoundingClientRect();t.style.setProperty(\"--left\",`${o}px`),t.style.setProperty(\"--top\",`${r}px`),t.style.setProperty(\"--width\",`${n}px`),t.style.setProperty(\"--height\",`${c}px`),t.style.opacity=\"1\",t.style.visibility=\"visible\"}),e.addEventListener(\"mouseleave\",()=>{t.style.opacity=\"0\",t.style.visibility=\"hidden\"})});const m=document.getElementById(\"menu-btn\"),s=document.querySelector(\"#modal-menu\"),h=s?s.querySelectorAll(\"li > a\"):[],p=document.querySelector(\"#close-btn\");function l(){s?.classList.toggle(\"hidden\")}m?.addEventListener(\"click\",l);p?.addEventListener(\"click\",l);h.forEach(e=>{e.addEventListener(\"click\",l)});\n"}],"styles":[{"type":"external","src":"/_astro/Functionwrapper.BqIJVL0D.css"},{"type":"inline","content":".precios-section[data-astro-cid-6l3lpwr5]{position:relative;color:#fff;padding:4rem 1rem;min-height:100vh;overflow:hidden;background-color:transparent}.precios-background[data-astro-cid-6l3lpwr5]{position:absolute;inset:0;background-image:url(/_astro/price2.BhjqVVFD.jpg);background-size:cover;background-position:center;background-repeat:no-repeat;z-index:-1}.precios-content[data-astro-cid-6l3lpwr5]{position:relative;text-align:center;z-index:1}.precios-title[data-astro-cid-6l3lpwr5]{font-size:2.5rem;font-weight:700;margin-bottom:1rem}.precios-subtitle[data-astro-cid-6l3lpwr5]{font-size:1.125rem;margin-bottom:2rem}.precios-cards[data-astro-cid-6l3lpwr5]{display:flex;flex-wrap:wrap;justify-content:center;gap:1.5rem}.precios-card[data-astro-cid-6l3lpwr5]{background-color:#fff;color:#000;border:1px solid #ccc;border-radius:.5rem;padding:1.5rem;width:250px;box-shadow:0 4px 6px #0000001a;transition:transform .3s;text-align:center}.precios-card[data-astro-cid-6l3lpwr5]:hover{transform:scale(1.05)}.precios-card-title[data-astro-cid-6l3lpwr5]{font-size:1.5rem;font-weight:700;margin-bottom:1rem}.precios-card-description[data-astro-cid-6l3lpwr5]{color:#333;margin-bottom:1rem}.precios-card-price[data-astro-cid-6l3lpwr5]{font-size:2rem;font-weight:700}\n"}],"routeData":{"route":"/pricewrapper","isIndex":false,"type":"page","pattern":"^\\/Pricewrapper\\/?$","segments":[[{"content":"Pricewrapper","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/Pricewrapper.astro","pathname":"/Pricewrapper","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/Functionwrapper.BqIJVL0D.css"}],"routeData":{"route":"/registerwrapper","isIndex":false,"type":"page","pattern":"^\\/Registerwrapper\\/?$","segments":[[{"content":"Registerwrapper","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/Registerwrapper.astro","pathname":"/Registerwrapper","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"const i=document.querySelector(\"#landing-header\"),d={root:null,rootMargin:\"0px\",threshold:.9},a=new IntersectionObserver(e=>{e.forEach(o=>{const{isIntersecting:r}=o;if(r){const n=o.target.getAttribute(\"data-header-color\");n&&(i.style.color=n)}})},d),u=document.querySelectorAll(\".landing-section\");u.forEach(e=>a.observe(e));const y=document.querySelectorAll(\"#landing-header li\"),t=document.querySelector(\"#menu-backdrop\");y.forEach(e=>{e.addEventListener(\"mouseenter\",()=>{const{left:o,top:r,width:n,height:c}=e.getBoundingClientRect();t.style.setProperty(\"--left\",`${o}px`),t.style.setProperty(\"--top\",`${r}px`),t.style.setProperty(\"--width\",`${n}px`),t.style.setProperty(\"--height\",`${c}px`),t.style.opacity=\"1\",t.style.visibility=\"visible\"}),e.addEventListener(\"mouseleave\",()=>{t.style.opacity=\"0\",t.style.visibility=\"hidden\"})});const m=document.getElementById(\"menu-btn\"),s=document.querySelector(\"#modal-menu\"),h=s?s.querySelectorAll(\"li > a\"):[],p=document.querySelector(\"#close-btn\");function l(){s?.classList.toggle(\"hidden\")}m?.addEventListener(\"click\",l);p?.addEventListener(\"click\",l);h.forEach(e=>{e.addEventListener(\"click\",l)});\n"}],"styles":[{"type":"external","src":"/_astro/Functionwrapper.BqIJVL0D.css"},{"type":"inline","content":"body{margin:0;padding:0;background:url(/_astro/support.CmqZ8koY.jpg) no-repeat center center fixed;background-size:cover;color:#333}#support[data-astro-cid-ddnnewap]{padding:2rem;background:#fffc;max-width:800px;margin:0 auto;position:relative;z-index:1}#support[data-astro-cid-ddnnewap] h2[data-astro-cid-ddnnewap]{font-size:1.8rem;color:#126b6d;border-bottom:1px solid #e0e0e0;padding-bottom:.5rem;margin-bottom:1.5rem}.faq-item[data-astro-cid-ddnnewap]{margin-bottom:1rem;border-bottom:1px solid #e0e0e0;padding-bottom:.5rem}.faq-item[data-astro-cid-ddnnewap] h3[data-astro-cid-ddnnewap]{font-size:1.2rem;color:#0b0b0b;margin:0}.faq-item[data-astro-cid-ddnnewap] p[data-astro-cid-ddnnewap]{margin:.5rem 0;color:#555}#guides[data-astro-cid-ddnnewap] ul[data-astro-cid-ddnnewap],#contact[data-astro-cid-ddnnewap] ul[data-astro-cid-ddnnewap]{list-style:none;padding:0}#guides[data-astro-cid-ddnnewap] li[data-astro-cid-ddnnewap],#contact[data-astro-cid-ddnnewap] li[data-astro-cid-ddnnewap]{margin:.5rem 0}#guides[data-astro-cid-ddnnewap] a[data-astro-cid-ddnnewap],#contact[data-astro-cid-ddnnewap] a[data-astro-cid-ddnnewap]{color:#126b6d;text-decoration:none}#guides[data-astro-cid-ddnnewap] a[data-astro-cid-ddnnewap]:hover,#contact[data-astro-cid-ddnnewap] a[data-astro-cid-ddnnewap]:hover,#tickets[data-astro-cid-ddnnewap] a[data-astro-cid-ddnnewap]:hover{text-decoration:underline}#tickets[data-astro-cid-ddnnewap] a[data-astro-cid-ddnnewap]{color:#ff6773}#tickets[data-astro-cid-ddnnewap] p[data-astro-cid-ddnnewap]{margin:1rem 0}\n"}],"routeData":{"route":"/supportwrapper","isIndex":false,"type":"page","pattern":"^\\/Supportwrapper\\/?$","segments":[[{"content":"Supportwrapper","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/Supportwrapper.astro","pathname":"/Supportwrapper","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"const i=document.querySelector(\"#landing-header\"),d={root:null,rootMargin:\"0px\",threshold:.9},a=new IntersectionObserver(e=>{e.forEach(o=>{const{isIntersecting:r}=o;if(r){const n=o.target.getAttribute(\"data-header-color\");n&&(i.style.color=n)}})},d),u=document.querySelectorAll(\".landing-section\");u.forEach(e=>a.observe(e));const y=document.querySelectorAll(\"#landing-header li\"),t=document.querySelector(\"#menu-backdrop\");y.forEach(e=>{e.addEventListener(\"mouseenter\",()=>{const{left:o,top:r,width:n,height:c}=e.getBoundingClientRect();t.style.setProperty(\"--left\",`${o}px`),t.style.setProperty(\"--top\",`${r}px`),t.style.setProperty(\"--width\",`${n}px`),t.style.setProperty(\"--height\",`${c}px`),t.style.opacity=\"1\",t.style.visibility=\"visible\"}),e.addEventListener(\"mouseleave\",()=>{t.style.opacity=\"0\",t.style.visibility=\"hidden\"})});const m=document.getElementById(\"menu-btn\"),s=document.querySelector(\"#modal-menu\"),h=s?s.querySelectorAll(\"li > a\"):[],p=document.querySelector(\"#close-btn\");function l(){s?.classList.toggle(\"hidden\")}m?.addEventListener(\"click\",l);p?.addEventListener(\"click\",l);h.forEach(e=>{e.addEventListener(\"click\",l)});\n"}],"styles":[{"type":"external","src":"/_astro/Functionwrapper.BqIJVL0D.css"},{"type":"inline","content":"body,html{margin:0;padding:0;height:100%;width:100%}.background-container[data-astro-cid-ofnozrxq]{position:relative;min-height:100vh;background-image:url(/_astro/tech.CVwJj3a1.jpg);background-size:cover;background-position:center;background-repeat:no-repeat}.technologies-section[data-astro-cid-ofnozrxq]{color:#fff;padding:4rem 1rem}.technologies-content[data-astro-cid-ofnozrxq]{position:relative;text-align:center;z-index:1}.technologies-title[data-astro-cid-ofnozrxq]{font-size:2.5rem;font-weight:700;margin-bottom:1rem;color:#000}.technologies-subtitle[data-astro-cid-ofnozrxq]{font-size:1.125rem;margin-bottom:2rem}.technologies-cards[data-astro-cid-ofnozrxq]{display:flex;flex-wrap:wrap;justify-content:center;gap:1.5rem}.technologies-card[data-astro-cid-ofnozrxq]{background-color:#fff;color:#000;border:1px solid #ccc;border-radius:.5rem;padding:1.5rem;width:250px;box-shadow:0 4px 6px #0000001a;transition:transform .3s;text-align:center;display:flex;flex-direction:column;align-items:center;justify-content:center}.technologies-card[data-astro-cid-ofnozrxq]:hover{transform:scale(1.05)}.technologies-card-image[data-astro-cid-ofnozrxq]{width:100px;height:100px;-o-object-fit:contain;object-fit:contain;margin-bottom:1rem}.technologies-card-title[data-astro-cid-ofnozrxq]{font-size:1.5rem;font-weight:700;margin-bottom:1rem}.technologies-card-description[data-astro-cid-ofnozrxq]{color:#333;margin-bottom:1rem}.components-section[data-astro-cid-ofnozrxq]{padding:4rem 1rem}.components-cards[data-astro-cid-ofnozrxq]{display:grid;grid-template-columns:repeat(3,1fr);gap:1.5rem}.components-card[data-astro-cid-ofnozrxq]{background-color:#fff;color:#000;border:1px solid #ccc;border-radius:.5rem;padding:1.5rem;box-shadow:0 4px 6px #0000001a;transition:transform .3s;text-align:center;display:flex;flex-direction:column;align-items:center;justify-content:center}.components-card[data-astro-cid-ofnozrxq]:hover{transform:scale(1.05)}.components-card-image[data-astro-cid-ofnozrxq]{width:100px;height:100px;-o-object-fit:contain;object-fit:contain;margin-bottom:1rem}.components-card-title[data-astro-cid-ofnozrxq]{font-size:1.5rem;font-weight:700;margin-bottom:1rem}.components-card-description[data-astro-cid-ofnozrxq]{color:#333;margin-bottom:1rem}\n"}],"routeData":{"route":"/technowrapper","isIndex":false,"type":"page","pattern":"^\\/Technowrapper\\/?$","segments":[[{"content":"Technowrapper","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/Technowrapper.astro","pathname":"/Technowrapper","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"const i=document.querySelector(\"#landing-header\"),d={root:null,rootMargin:\"0px\",threshold:.9},a=new IntersectionObserver(e=>{e.forEach(o=>{const{isIntersecting:r}=o;if(r){const n=o.target.getAttribute(\"data-header-color\");n&&(i.style.color=n)}})},d),u=document.querySelectorAll(\".landing-section\");u.forEach(e=>a.observe(e));const y=document.querySelectorAll(\"#landing-header li\"),t=document.querySelector(\"#menu-backdrop\");y.forEach(e=>{e.addEventListener(\"mouseenter\",()=>{const{left:o,top:r,width:n,height:c}=e.getBoundingClientRect();t.style.setProperty(\"--left\",`${o}px`),t.style.setProperty(\"--top\",`${r}px`),t.style.setProperty(\"--width\",`${n}px`),t.style.setProperty(\"--height\",`${c}px`),t.style.opacity=\"1\",t.style.visibility=\"visible\"}),e.addEventListener(\"mouseleave\",()=>{t.style.opacity=\"0\",t.style.visibility=\"hidden\"})});const m=document.getElementById(\"menu-btn\"),s=document.querySelector(\"#modal-menu\"),h=s?s.querySelectorAll(\"li > a\"):[],p=document.querySelector(\"#close-btn\");function l(){s?.classList.toggle(\"hidden\")}m?.addEventListener(\"click\",l);p?.addEventListener(\"click\",l);h.forEach(e=>{e.addEventListener(\"click\",l)});\n"}],"styles":[{"type":"external","src":"/_astro/Functionwrapper.BqIJVL0D.css"},{"type":"inline","content":"body,html{margin:0;padding:0;height:100%;width:100%;font-family:Arial,sans-serif;background:#3e858e;display:flex;align-items:center;justify-content:center;flex-direction:column}.main-container[data-astro-cid-kgfp5dhy]{display:flex;flex-direction:column;align-items:center;gap:20px}.thermometer-container[data-astro-cid-kgfp5dhy]{display:flex;align-items:center;gap:40px}.thermometer[data-astro-cid-kgfp5dhy]{width:80px;height:300px;background:linear-gradient(to top,#ffebee,#f44336);border-radius:40px;border:8px solid #f44336;position:relative;overflow:hidden;box-shadow:0 4px 8px #0003}.thermometer-bulb[data-astro-cid-kgfp5dhy]{width:100px;height:100px;background:#f44336;border-radius:50%;position:absolute;bottom:-50px;left:50%;transform:translate(-50%);border:8px solid #f44336;box-shadow:0 4px 8px #0003}.thermometer-fill[data-astro-cid-kgfp5dhy]{width:100%;background:#fff;position:absolute;bottom:0;left:0;border-radius:0 0 40px 40px}.thermometer-label[data-astro-cid-kgfp5dhy]{margin-top:20px;font-size:1.5rem;color:#333;font-weight:700;text-align:center}.thermometer-image[data-astro-cid-kgfp5dhy]{width:80px;height:300px;background:url(https://example.com/your-thermometer-image.png) no-repeat center center;background-size:contain}.title[data-astro-cid-kgfp5dhy]{font-size:3rem;color:#333;margin-bottom:20px;text-align:center}\n"}],"routeData":{"route":"/temperaturewrapper","isIndex":false,"type":"page","pattern":"^\\/Temperaturewrapper\\/?$","segments":[[{"content":"Temperaturewrapper","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/Temperaturewrapper.astro","pathname":"/Temperaturewrapper","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"g();m();function g(){throw new Error(\"Function not implemented.\")}function m(){throw new Error(\"Function not implemented.\")}function f(){return navigator.userAgent.indexOf(\"Edge\")>-1||navigator.userAgent.indexOf(\"Edg\")>-1}let l=document.querySelector(\"#bg-image-accessories\");f(),l.src=\"appu.jpg\";const p=document.querySelector(\"#landing-header\"),E={root:null,rootMargin:\"0px\",threshold:.9},y=new IntersectionObserver(e=>{e.forEach(n=>{const{isIntersecting:o}=n;if(o){const r=n.target.getAttribute(\"data-header-color\");r&&(p.style.color=r)}})},E),h=document.querySelectorAll(\".landing-section\");h.forEach(e=>y.observe(e));const v=document.querySelectorAll(\"#landing-header li\"),t=document.querySelector(\"#menu-backdrop\");v.forEach(e=>{e.addEventListener(\"mouseenter\",()=>{const{left:n,top:o,width:r,height:u}=e.getBoundingClientRect();t.style.setProperty(\"--left\",`${n}px`),t.style.setProperty(\"--top\",`${o}px`),t.style.setProperty(\"--width\",`${r}px`),t.style.setProperty(\"--height\",`${u}px`),t.style.opacity=\"1\",t.style.visibility=\"visible\"}),e.addEventListener(\"mouseleave\",()=>{t.style.opacity=\"0\",t.style.visibility=\"hidden\"})});const b=document.getElementById(\"menu-btn\"),i=document.querySelector(\"#modal-menu\"),x=i?i.querySelectorAll(\"li > a\"):[],A=document.querySelector(\"#close-btn\");function s(){i?.classList.toggle(\"hidden\")}b?.addEventListener(\"click\",s);A?.addEventListener(\"click\",s);x.forEach(e=>{e.addEventListener(\"click\",s)});function q(){return navigator.userAgent.indexOf(\"Edge\")>-1||navigator.userAgent.indexOf(\"Edg\")>-1}let c=document.querySelector(\"#bg-image-models\");q(),c.src=\"price.jpg\";function S(){return navigator.userAgent.indexOf(\"Edge\")>-1||navigator.userAgent.indexOf(\"Edg\")>-1}let a=document.querySelector(\"#bg-image-modelx\");S(),a.src=\"data2.jpg\";function w(){return navigator.userAgent.indexOf(\"Edge\")>-1||navigator.userAgent.indexOf(\"Edg\")>-1}let d=document.querySelector(\"#bg-image-powerwall\");w(),d.src=\"tech.jpg\";\n"}],"styles":[{"type":"external","src":"/_astro/Functionwrapper.BqIJVL0D.css"},{"type":"external","src":"/_astro/index.CyzEh6TC.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/home/daroncin/Intelli_Fridge/src/pages/Functionwrapper.astro",{"propagation":"none","containsHead":true}],["/home/daroncin/Intelli_Fridge/src/pages/Registerwrapper.astro",{"propagation":"none","containsHead":true}],["/home/daroncin/Intelli_Fridge/src/pages/Supportwrapper.astro",{"propagation":"none","containsHead":true}],["/home/daroncin/Intelli_Fridge/src/pages/Temperaturewrapper.astro",{"propagation":"none","containsHead":true}],["/home/daroncin/Intelli_Fridge/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/Functionwrapper@_@astro":"pages/functionwrapper.astro.mjs","\u0000@astro-page:src/pages/Pricewrapper@_@astro":"pages/pricewrapper.astro.mjs","\u0000@astro-page:src/pages/Registerwrapper@_@astro":"pages/registerwrapper.astro.mjs","\u0000@astro-page:src/pages/Supportwrapper@_@astro":"pages/supportwrapper.astro.mjs","\u0000@astro-page:src/pages/Technowrapper@_@astro":"pages/technowrapper.astro.mjs","\u0000@astro-page:src/pages/Temperaturewrapper@_@astro":"pages/temperaturewrapper.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-renderers":"renderers.mjs","/home/daroncin/Intelli_Fridge/node_modules/astro/dist/env/setup.js":"chunks/astro/env-setup_Cr6XTFvb.mjs","/home/daroncin/Intelli_Fridge/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_BkR_XoPb.mjs","\u0000@astrojs-manifest":"manifest_ysi67mUo.mjs","/astro/hoisted.js?q=1":"_astro/hoisted.Drw0kY7F.js","/astro/hoisted.js?q=3":"_astro/hoisted.C4IjoYLW.js","/astro/hoisted.js?q=2":"_astro/hoisted.DoYD3nyV.js","/astro/hoisted.js?q=4":"_astro/hoisted.VIv1XhCL.js","/astro/hoisted.js?q=0":"_astro/hoisted.Bdk7E1TN.js","@astrojs/react/client.js":"_astro/client.5I5BMcNS.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/price2.BhjqVVFD.jpg","/_astro/tech.CVwJj3a1.jpg","/_astro/support.CmqZ8koY.jpg","/_astro/Functionwrapper.BqIJVL0D.css","/_astro/index.CyzEh6TC.css","/appu.jpg","/arrow-icon.svg","/banner.mp4","/bloc.jpg","/close-icon.svg","/cuca.gif","/data2.jpg","/datar.jpg","/favicon.svg","/func.webp","/price.jpg","/price2.jpg","/support.jpg","/tech.jpg","/_astro/client.5I5BMcNS.js"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"experimentalEnvGetSecretEnabled":false});

export { DEFAULT_404_ROUTE as D, default404Instance as d, ensure404Route as e, manifest as m };
