/* empty css                                           */
import { c as createComponent, r as renderTemplate, d as renderHead, f as renderSlot, b as createAstro, m as maybeRenderHead, e as renderComponent, a as addAttribute } from '../chunks/astro/server_pfMX3tV2.mjs';
import 'kleur/colors';
import 'clsx';
import { $ as $$Logo } from '../chunks/Logo_BJTHD5sx.mjs';
/* empty css                                          */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { title } = Astro2.props;
  return renderTemplate`<!-- src/layouts/BaseLayout.astro --><html lang="es"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${title}</title><!-- Agrega tus estilos aquí -->${renderHead()}</head> <body> <header> <!-- Header content here --> </header> <main> ${renderSlot($$result, $$slots["default"])} <!-- Aquí se renderiza el contenido del componente hijo --> </main> <footer> <!-- Footer content here --> </footer> </body></html>`;
}, "/home/daroncin/Intelli_Fridge/src/layouts/BaseLayout.astro", void 0);

const $$LandingHeader6 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header id="landing-header" class="py-3 px-10 flex items-center fixed top-0 w-full justify-between z-40 text-white"> <div class="flex flex-grow basis-0"> <a href="./">${renderComponent($$result, "Logo", $$Logo, {})}</a> </div> <nav class="hidden xl:block sm:hidden"> <ul class="flex text-sm [&>li>a]:transition-colors [&>li>a]:duration-500 [&>li>a]:text-current [&>li>a]:font-medium [&>li>a]:inline-block [&>li>a]:px-4 [&>li>a]:py-2"> <li><a href="#price"></a></li> </ul> </nav> <nav class="flex flex-grow justify-end basis-0"> <ul class="flex text-sm [&>li>a]:transition-colors [&>li>a]:duration-500 [&>li>a]:text-current [&>li>a]:font-medium [&>li>a]:inline-block [&>li>a]:px-4 [&>li>a]:py-2"> <li class="hidden xl:block sm:hidden"><a href="#"></a></li> </ul> </nav> <nav id="modal-menu" class=" hidden xl:hidden flex flex-col bg-white fixed top-0 left-0 right-0 bottom-0 "> <button id="close-btn" class=" w-screen flex justify-end p-5"> <img class="text-black h-6 " src="/close-icon.svg" alt="close image"> </button> <ul class="flex flex-col mt-4 [&>li>a]:transition-colors [&>li]:m-3  [&>li>a]:flex [&>li>a]:justify-between [&>li>a]:duration-200 [&>li>a]:text-black [&>li>a]:font-medium [&>li>a]:inline-block [&>li>a]:px-6 [&>li>a]:py-3 [&>li>a]:rounded-md [&>li>a]:w-full"></ul> </nav> <div id="menu-backdrop"${addAttribute(`
      absolute bg-black/5 backdrop-blur-lg rounded
      translate-x-[var(--left)] translate-y-[var(--top)]
      left-0 top-0
      w-[var(--width)] h-[var(--height)]
      transition-all duration-500
      ease-in-out opacity-0 -z-10
    `, "class")}></div> </header>   `;
}, "/home/daroncin/Intelli_Fridge/src/components/LandingHeader6.astro", void 0);

const $$SupportPage = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">${maybeRenderHead()}<body data-astro-cid-ddnnewap> ${renderComponent($$result, "LandingHeader6", $$LandingHeader6, { "data-astro-cid-ddnnewap": true })} ${renderComponent($$result, "Layout", $$BaseLayout, { "title": "Soporte", "data-astro-cid-ddnnewap": true }, { "default": ($$result2) => renderTemplate` <section id="support" data-astro-cid-ddnnewap> <br data-astro-cid-ddnnewap> <h2 data-astro-cid-ddnnewap>Soporte</h2> <p data-astro-cid-ddnnewap>Bienvenido a la sección de soporte de Intelli-Fridge. Aquí encontrarás información útil para resolver problemas comunes y cómo ponerte en contacto con nuestro equipo de soporte.</p> <br data-astro-cid-ddnnewap> <section id="faq" data-astro-cid-ddnnewap> <h2 data-astro-cid-ddnnewap>Preguntas Frecuentes</h2> <div class="faq-item" data-astro-cid-ddnnewap> <h3 data-astro-cid-ddnnewap>¿Qué hago si olvido mi contraseña?</h3> <p data-astro-cid-ddnnewap>Si olvidaste tu contraseña, puedes darle click a "olvide mi contraseña", te llegara un correo con los pasos a seguir para recuperarla.</p> </div> <div class="faq-item" data-astro-cid-ddnnewap> <h3 data-astro-cid-ddnnewap>¿Para que dispositivos esta disponible la aplicacion movil?</h3> <p data-astro-cid-ddnnewap>Por el momento solo esta disponible para dispositivos Android, en futuras actualizaciones se podra descargar en IOS.</p> </div> <div class="faq-item" data-astro-cid-ddnnewap> <h3 data-astro-cid-ddnnewap>¿Cómo descargar la aplicacion?</h3> <p data-astro-cid-ddnnewap>En nuestra aplicacion web existe un apartado en donde se puede descargar nuestra aplicacion. Es una apk y se tiene que dar autorizacion desde configuracion de su dispositivo movil.</p> </div> <div class="faq-item" data-astro-cid-ddnnewap> <h3 data-astro-cid-ddnnewap>¿Cuanto dura mi periodo de garantia</h3> <p data-astro-cid-ddnnewap>Contamos con un periodo de garantia de 6 meses, solo por daño en componentes, no nos hacemo responsables de mal uso de nuestro kit.</p> </div> </section> <section id="contact" data-astro-cid-ddnnewap> <h2 data-astro-cid-ddnnewap>Contacto de Soporte</h2> <p data-astro-cid-ddnnewap>Si necesitas asistencia adicional, no dudes en ponerte en contacto con nuestro equipo de soporte. Puedes hacerlo a través de los siguientes canales:</p> <ul data-astro-cid-ddnnewap> <li data-astro-cid-ddnnewap>Correo Electrónico: <a href="mailto:bitbusters.technologies@gmail.com" data-astro-cid-ddnnewap>bitbusters.technologiest@gmail.com</a></li> <li data-astro-cid-ddnnewap>Teléfono: +52 614-376-81-16</li> </ul> </section> </section>  ` })}</body>`;
}, "/home/daroncin/Intelli_Fridge/src/components/SupportPage.astro", void 0);

const $$Supportwrapper = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "SupportPage", $$SupportPage, {})}`;
}, "/home/daroncin/Intelli_Fridge/src/pages/Supportwrapper.astro", void 0);

const $$file = "/home/daroncin/Intelli_Fridge/src/pages/Supportwrapper.astro";
const $$url = "/Supportwrapper";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Supportwrapper,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
