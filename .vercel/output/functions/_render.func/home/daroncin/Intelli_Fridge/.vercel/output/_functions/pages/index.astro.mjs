/* empty css                                           */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, f as renderSlot, e as renderComponent, b as createAstro, d as renderHead } from '../chunks/astro/server_pfMX3tV2.mjs';
import 'kleur/colors';
import 'clsx';
import { $ as $$Logo } from '../chunks/Logo_BJTHD5sx.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$FooterMenu = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="py-3 px-10 flex justify-center items-center absolute bottom-0 w-full z-40 text-gray-600 text-xs font-medium" id="landing-footer"> <nav> <ul class="flex [&>li>a]:inline-block [&>li>a]:px-2 [&>li>a]:py-2"> <li><a href="#">Bitbusters © 2024</a></li> <li><a href="#">Privacidad y Legal</a></li> <li><a href="#">Contacto</a></li> <li><a href="#">Noticias</a></li> <li><a href="#">Seguir Informado</a></li> <li><a href="#">Localización de Sucursales</a></li> </ul> </nav> </footer>`;
}, "/home/daroncin/Intelli_Fridge/src/components/FooterMenu.astro", void 0);

const $$Astro$1 = createAstro();
const $$Section = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Section;
  const { color, title, subtitle, id, showFooterContent } = Astro2.props;
  const textColor = `text-${color}`;
  return renderTemplate`${maybeRenderHead()}<section class="landing-section bg-black h-screen w-screen text-center overflow-hidden relative"${addAttribute(color, "data-header-color")}${addAttribute(id, "id")}> <div class="z-30 relative h-full flex flex-col"> <header> <h2${addAttribute(`${textColor} pt-40 text-[40px] font-medium`, "class")}> ${title} </h2> <p${addAttribute(`${textColor} text-sm`, "class")}> ${subtitle} </p> </header> <footer class="flex flex-col flex-grow justify-end pb-20"> ${renderSlot($$result, $$slots["footer"])} <!-- Contidionally load footer: --> ${showFooterContent && renderTemplate`${renderComponent($$result, "FooterMenu", $$FooterMenu, {})}`} </footer> </div> <div class="absolute top-0 bottom-0 h-full w-full z-10"> ${renderSlot($$result, $$slots["background"])} </div> </section>`;
}, "/home/daroncin/Intelli_Fridge/src/components/Section.astro", void 0);

const $$Download = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "title": "Descargar App", "subtitle": "Descarga de la aplicaci\xF3n M\xF3vil", "color": "White", "id": "downloadapp", "showFooterContent": "true" }, { "background": ($$result2) => renderTemplate`${maybeRenderHead()}<img alt="Accesorios" class="h-full w-full object-cover object-center" src="accessories.avif" id="bg-image-accessories">`, "footer": ($$result2) => renderTemplate`<div class="gap-x-6 flex mx-auto"> <a class="border-[3px] border-black bg-black text-sm rounded font-medium text-white px-12 py-2 inline-block transition-colors duration-300 hover:border-gray-800 hover:bg-gray-800" href="#">
Intelli-Fridge</a> <!-- <a
      class="bg-white text-sm rounded font-medium px-12 py-2 transition-colors hover:bg-black hover:text-white inline-flex justify-center items-center text-black"
      href="#"
    >
      Saber más</a
    > --> </div>` })} `;
}, "/home/daroncin/Intelli_Fridge/src/components/Download.astro", void 0);

const $$HeroSection = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "title": "Bienvenido a Intelli-Fridge!", "subtitle": "Moderniza la forma en la que interact\xFAas con tu refrigerador.", "color": "black", "id": "home" }, { "background": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="relative"> <video class="object-center object-cover h-full w-full" autoplay muted loop src="/banner.mp4"></video> <div class="absolute inset-0 bg-gray-200 opacity-30"></div> </div>`, "footer": ($$result2) => renderTemplate`<div> <a class="border-[3px] border-white bg-white/5 backdrop-blur-sm text-sm rounded font-medium text-white px-12 py-2 inline-block hover:bg-white hover:text-black transition-colors" href="Registerwrapper">
Registrarse
</a> </div>` })}`;
}, "/home/daroncin/Intelli_Fridge/src/components/HeroSection.astro", void 0);

const $$LandingHeader = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header id="landing-header" class="py-3 px-10 flex items-center fixed top-0 w-full justify-between z-40 text-white"> <div class="flex flex-grow basis-0"> <a href="./">${renderComponent($$result, "Logo", $$Logo, {})}</a> </div> <nav class="hidden xl:block sm:hidden"> <ul class="flex text-sm [&>li>a]:transition-colors [&>li>a]:duration-500 [&>li>a]:text-current [&>li>a]:font-medium [&>li>a]:inline-block [&>li>a]:px-4 [&>li>a]:py-2"> <li><a href="#price">Precio</a></li> <li><a href="#temperature">Temperatura</a></li> <li><a href="#tech">Tecnologías Empleadas</a></li> <li><a href="#downloadapp">Descargar la App</a></li> </ul> </nav> <nav class="flex flex-grow justify-end basis-0"> <ul class="flex text-sm [&>li>a]:transition-colors [&>li>a]:duration-500 [&>li>a]:text-current [&>li>a]:font-medium [&>li>a]:inline-block [&>li>a]:px-4 [&>li>a]:py-2"> <li class="hidden xl:block sm:hidden"><a href="/Supportwrapper">Soporte</a></li> <li class="hidden xl:block sm:hidden"><a href="#">Cuenta</a></li> <li><a id="menu-btn" href="#">Menú</a></li> </ul> </nav> <nav id="modal-menu" class=" hidden xl:hidden flex flex-col bg-white fixed top-0 left-0 right-0 bottom-0 "> <button id="close-btn" class=" w-screen flex justify-end p-5"> <img class="text-black h-6 " src="/close-icon.svg" alt="close image"> </button> <ul class="flex flex-col mt-4 [&>li>a]:transition-colors [&>li]:m-3  [&>li>a]:flex [&>li>a]:justify-between [&>li>a]:duration-200 [&>li>a]:text-black [&>li>a]:font-medium [&>li>a]:inline-block [&>li>a]:px-6 [&>li>a]:py-3 [&>li>a]:rounded-md [&>li>a]:w-full"> <li><a class="hover:bg-slate-100" href="#home"> Home <img class="h-5" alt="arrow icon" src="/arrow-icon.svg"></a> </li> <li><a class="hover:bg-slate-100" href="#model-s"> Precio <img class="h-5" alt="arrow icon" src="/arrow-icon.svg"></a></li> <li><a class="hover:bg-slate-100" href="#model-3"> Funciones <img class="h-5" alt="arrow icon" src="/arrow-icon.svg"></a></li> <li><a class="hover:bg-slate-100" href="#model-x"> Realtime Data <img class="h-5" alt="arrow icon" src="/arrow-icon.svg"></a></li> <li><a class="hover:bg-slate-100" href="#model-y"> Notas y Cámara <img class="h-5" alt="arrow icon" src="/arrow-icon.svg"></a></li> <li><a class="hover:bg-slate-100" href="#powerwall"> Tecnologías Empleadas <img class="h-5" alt="arrow icon" src="/arrow-icon.svg"></a></li> <li><a class="hover:bg-slate-100" href="#accesorios">Descargar la App <img class="h-5" alt="arrow icon" src="/arrow-icon.svg"></a></li> </ul> </nav> <div id="menu-backdrop"${addAttribute(`
      absolute bg-black/5 backdrop-blur-lg rounded
      translate-x-[var(--left)] translate-y-[var(--top)]
      left-0 top-0
      w-[var(--width)] h-[var(--height)]
      transition-all duration-500
      ease-in-out opacity-0 -z-10
    `, "class")}></div> </header>   `;
}, "/home/daroncin/Intelli_Fridge/src/components/LandingHeader.astro", void 0);

const $$Price = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "title": "Precio", "subtitle": "Consulte los Precios de la Instalaci\xF3n Personalizada!", "color": "black", "id": "price" }, { "background": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="relative"> <img alt="Precio" class="h-full w-full object-cover object-center" src="model-s.avif" id="bg-image-models"> <div class="absolute inset-0 bg-gray-200 opacity-30"></div> </div>`, "footer": ($$result2) => renderTemplate`<div class="gap-x-6 flex mx-auto"> <a class="bg-white text-sm rounded font-medium px-12 py-2 transition-colors hover:bg-black hover:text-white inline-flex justify-center items-center text-black" href="/Pricewrapper">
Saber más
</a> </div>` })} `;
}, "/home/daroncin/Intelli_Fridge/src/components/Price.astro", void 0);

const $$Temperature = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "title": "Temperatura", "subtitle": "Consulta Virtual de los Datos del Refrigerador en Tiempo Real", "color": "white", "id": "temperature" }, { "background": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="relative"> <img alt="Realtime Data" class="h-full w-full object-cover object-center" src="model-x.avif" id="bg-image-modelx"> <div class="absolute inset-0 bg-gray-800 opacity-50"></div> </div>`, "footer": ($$result2) => renderTemplate`<div class="gap-x-6 flex mx-auto"> <a class="border-[3px] border-gray-600 bg-gray-600 text-sm rounded font-medium text-white px-12 py-2 inline-block transition-colors hover:border-gray-500 hover:bg-gray-500" href="/Temperaturewrapper">
Consultar Datos
</a> </div>` })} `;
}, "/home/daroncin/Intelli_Fridge/src/components/Temperature.astro", void 0);

const $$Technologies = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "title": "Tecnolog\xEDas Empleadas", "subtitle": "Listado de las Tecnolog\xEDas que Hacen Funcionar a Intelli-Fridge", "color": "black", "id": "tech" }, { "background": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="relative"> <img alt="Tecnologías Empleadas" class="h-full w-full object-cover object-center" src="powerwall.avif" id="bg-image-powerwall"> <div class="absolute inset-0 bg-gray-200 opacity-30"></div> </div>`, "footer": ($$result2) => renderTemplate`<div class="gap-x-6 flex mx-auto"> <a class="border-[3px] border-gray-800 bg-gray-800 text-sm rounded font-medium text-white px-16 py-2 inline-block transition-colors hover:border-gray-500 hover:bg-gray-500" href="/Technowrapper">
Consultar Tecnologías
</a> </div>` })} `;
}, "/home/daroncin/Intelli_Fridge/src/components/Technologies.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/home/daroncin/Intelli_Fridge/src/layouts/Layout.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate` ${renderComponent($$result, "Layout", $$Layout, { "title": "Intelli-Fridge" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "LandingHeader", $$LandingHeader, {})} ${maybeRenderHead()}<main class="snap-y snap-mandatory relative w-full h-screen overflow-y-auto overflow-x-hidden scroll-smooth"> <div class="snap-center"> ${renderComponent($$result2, "HeroSection", $$HeroSection, {})} </div> <div class="snap-center"> ${renderComponent($$result2, "Price", $$Price, {})} </div> <div class="snap-center"> ${renderComponent($$result2, "Temperature", $$Temperature, {})} </div> <div class="snap-center"> ${renderComponent($$result2, "Technologies", $$Technologies, {})} </div> <div class="snap-center"> ${renderComponent($$result2, "Accessories", $$Download, {})} </div> </main> ` })}`;
}, "/home/daroncin/Intelli_Fridge/src/pages/index.astro", void 0);

const $$file = "/home/daroncin/Intelli_Fridge/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
