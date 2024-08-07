import { c as createComponent, r as renderTemplate, m as maybeRenderHead, e as renderComponent, a as addAttribute } from './astro/server_pfMX3tV2.mjs';
import 'kleur/colors';
import { $ as $$Logo } from './Logo_BJTHD5sx.mjs';

const $$LandingHeader5 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header id="landing-header" class="py-3 px-10 flex items-center fixed top-0 w-full justify-between z-40 text-white"> <div class="flex flex-grow basis-0"> <a href="./">${renderComponent($$result, "Logo", $$Logo, {})}</a> </div> <nav class="hidden xl:block sm:hidden"> <ul class="flex text-sm [&>li>a]:transition-colors [&>li>a]:duration-500 [&>li>a]:text-current [&>li>a]:font-medium [&>li>a]:inline-block [&>li>a]:px-4 [&>li>a]:py-2"> <li><a href="#tech"></a></li> </ul> </nav> <nav class="flex flex-grow justify-end basis-0"> <ul class="flex text-sm [&>li>a]:transition-colors [&>li>a]:duration-500 [&>li>a]:text-current [&>li>a]:font-medium [&>li>a]:inline-block [&>li>a]:px-4 [&>li>a]:py-2"></ul> </nav> <nav id="modal-menu" class=" hidden xl:hidden flex flex-col bg-white fixed top-0 left-0 right-0 bottom-0 "> <button id="close-btn" class=" w-screen flex justify-end p-5"> <img class="text-black h-6 " src="/close-icon.svg" alt="close image"> </button> <ul class="flex flex-col mt-4 [&>li>a]:transition-colors [&>li]:m-3  [&>li>a]:flex [&>li>a]:justify-between [&>li>a]:duration-200 [&>li>a]:text-black [&>li>a]:font-medium [&>li>a]:inline-block [&>li>a]:px-6 [&>li>a]:py-3 [&>li>a]:rounded-md [&>li>a]:w-full"> <li><a class="hover:bg-slate-100" href="#home"> Home <img class="h-5" alt="arrow icon" src="/arrow-icon.svg"></a> </li> <li><a class="hover:bg-slate-100" href="#model-s"> Precio <img class="h-5" alt="arrow icon" src="/arrow-icon.svg"></a></li> <li><a class="hover:bg-slate-100" href="#model-3"> Funciones <img class="h-5" alt="arrow icon" src="/arrow-icon.svg"></a></li> <li><a class="hover:bg-slate-100" href="#model-x"> Realtime Data <img class="h-5" alt="arrow icon" src="/arrow-icon.svg"></a></li> <li><a class="hover:bg-slate-100" href="#model-y"> Notas y Cámara <img class="h-5" alt="arrow icon" src="/arrow-icon.svg"></a></li> <li><a class="hover:bg-slate-100" href="#powerwall"> Tecnologías Empleadas <img class="h-5" alt="arrow icon" src="/arrow-icon.svg"></a></li> <li><a class="hover:bg-slate-100" href="#accesorios">Descargar la App <img class="h-5" alt="arrow icon" src="/arrow-icon.svg"></a></li> </ul> </nav> <div id="menu-backdrop"${addAttribute(`
      absolute bg-black/5 backdrop-blur-lg rounded
      translate-x-[var(--left)] translate-y-[var(--top)]
      left-0 top-0
      w-[var(--width)] h-[var(--height)]
      transition-all duration-500
      ease-in-out opacity-0 -z-10
    `, "class")}></div> </header>   `;
}, "/home/daroncin/Intelli_Fridge/src/components/LandingHeader5.astro", void 0);

export { $$LandingHeader5 as $ };
