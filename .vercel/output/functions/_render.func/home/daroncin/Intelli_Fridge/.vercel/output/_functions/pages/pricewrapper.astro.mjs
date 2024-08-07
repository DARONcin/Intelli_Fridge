/* empty css                                           */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, e as renderComponent, a as addAttribute } from '../chunks/astro/server_pfMX3tV2.mjs';
import 'kleur/colors';
import { $ as $$Logo } from '../chunks/Logo_BJTHD5sx.mjs';
/* empty css                                        */
export { renderers } from '../renderers.mjs';

const $$LandingHeader2 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header id="landing-header" class="py-3 px-10 flex items-center fixed top-0 w-full justify-between z-40 text-white"> <div class="flex flex-grow basis-0"> <a href="./">${renderComponent($$result, "Logo", $$Logo, {})}</a> </div> <nav class="hidden xl:block sm:hidden"> <ul class="flex text-sm [&>li>a]:transition-colors [&>li>a]:duration-500 [&>li>a]:text-current [&>li>a]:font-medium [&>li>a]:inline-block [&>li>a]:px-4 [&>li>a]:py-2"> <li><a href="#price"></a></li> </ul> </nav> <nav class="flex flex-grow justify-end basis-0"> <ul class="flex text-sm [&>li>a]:transition-colors [&>li>a]:duration-500 [&>li>a]:text-current [&>li>a]:font-medium [&>li>a]:inline-block [&>li>a]:px-4 [&>li>a]:py-2"></ul> </nav> <nav id="modal-menu" class=" hidden xl:hidden flex flex-col bg-white fixed top-0 left-0 right-0 bottom-0 "> <button id="close-btn" class=" w-screen flex justify-end p-5"> <img class="text-black h-6 " src="/close-icon.svg" alt="close image"> </button> <ul class="flex flex-col mt-4 [&>li>a]:transition-colors [&>li]:m-3  [&>li>a]:flex [&>li>a]:justify-between [&>li>a]:duration-200 [&>li>a]:text-black [&>li>a]:font-medium [&>li>a]:inline-block [&>li>a]:px-6 [&>li>a]:py-3 [&>li>a]:rounded-md [&>li>a]:w-full"></ul> </nav> <div id="menu-backdrop"${addAttribute(`
      absolute bg-black/5 backdrop-blur-lg rounded
      translate-x-[var(--left)] translate-y-[var(--top)]
      left-0 top-0
      w-[var(--width)] h-[var(--height)]
      transition-all duration-500
      ease-in-out opacity-0 -z-10
    `, "class")}></div> </header>   `;
}, "/home/daroncin/Intelli_Fridge/src/components/LandingHeader2.astro", void 0);

const $$Precios = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">${maybeRenderHead()}<body data-astro-cid-6l3lpwr5> ${renderComponent($$result, "LandingHeader2", $$LandingHeader2, { "data-astro-cid-6l3lpwr5": true })} <section class="precios-section" data-astro-cid-6l3lpwr5> <div class="precios-background" data-astro-cid-6l3lpwr5></div> <div class="precios-content" data-astro-cid-6l3lpwr5> <h1 class="precios-title" data-astro-cid-6l3lpwr5>Precios del kit</h1> <br data-astro-cid-6l3lpwr5> <br data-astro-cid-6l3lpwr5> <br data-astro-cid-6l3lpwr5> <br data-astro-cid-6l3lpwr5> <br data-astro-cid-6l3lpwr5> <br data-astro-cid-6l3lpwr5> <br data-astro-cid-6l3lpwr5> <div class="precios-cards" data-astro-cid-6l3lpwr5> <div class="precios-card" data-astro-cid-6l3lpwr5> <h2 class="precios-card-title" data-astro-cid-6l3lpwr5>Servicio Básico</h2> <p class="precios-card-description" data-astro-cid-6l3lpwr5> - Monitoreo de temperatura en tiempo real.<br data-astro-cid-6l3lpwr5> - Sensor de distancia. <br data-astro-cid-6l3lpwr5> - App movil. </p> <p class="precios-card-price" data-astro-cid-6l3lpwr5>$3,499</p> </div> <div class="precios-card" data-astro-cid-6l3lpwr5> <h2 class="precios-card-title" data-astro-cid-6l3lpwr5>Servicio Premium</h2> <p class="precios-card-description" data-astro-cid-6l3lpwr5>- Notas Digitales.<br data-astro-cid-6l3lpwr5> - Bloqueo mediante huella dactilar.<br data-astro-cid-6l3lpwr5> - Pantalla para visualizar las notas.</p> <p class="precios-card-price" data-astro-cid-6l3lpwr5>$4,499</p> </div> </div> </div> </section></body>`;
}, "/home/daroncin/Intelli_Fridge/src/components/Precios.astro", void 0);

const $$Pricewrapper = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Precios", $$Precios, {})}`;
}, "/home/daroncin/Intelli_Fridge/src/pages/Pricewrapper.astro", void 0);

const $$file = "/home/daroncin/Intelli_Fridge/src/pages/Pricewrapper.astro";
const $$url = "/Pricewrapper";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Pricewrapper,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
