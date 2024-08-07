/* empty css                                           */
import { c as createComponent, r as renderTemplate, e as renderComponent, d as renderHead } from '../chunks/astro/server_pfMX3tV2.mjs';
import 'kleur/colors';
import { $ as $$Logo } from '../chunks/Logo_BJTHD5sx.mjs';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Register = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(['<html> <head><title>Registrarse</title><!-- Incluye Tailwind CSS --><link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">', '</head> <body class="bg-gray-900 text-white"> <header id="landing-header" class="py-3 px-10 flex items-center fixed top-0 w-full justify-between z-40 text-white"> <div class="flex flex-grow basis-0"> <a href="./">', '</a> </div> </header> <main class="flex items-center justify-center min-h-screen"> <section class="register-section text-center"> <h1 class="text-3xl mb-4">Registrarse</h1> <button id="google-signin-btn" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">\nRegistrarse con Google\n</button> </section> </main> <script type="module">\n      import { signInWithGoogle } from "../components/firebaseConfig";\n\n      document.getElementById("google-signin-btn").addEventListener("click", async () => {\n        try {\n          const result = await signInWithGoogle();\n          console.log("Usuario autenticado:", result.user);\n          // No redirijas a otra p\xE1gina; el flujo de autenticaci\xF3n deber\xEDa abrir una ventana emergente\n        } catch (error) {\n          console.error("Error en la autenticaci\xF3n:", error);\n        }\n      });\n    <\/script> </body> </html>'])), renderHead(), renderComponent($$result, "Logo", $$Logo, {}));
}, "/home/daroncin/Intelli_Fridge/src/components/Register.astro", void 0);

const $$Registerwrapper = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Register", $$Register, {})}`;
}, "/home/daroncin/Intelli_Fridge/src/pages/Registerwrapper.astro", void 0);

const $$file = "/home/daroncin/Intelli_Fridge/src/pages/Registerwrapper.astro";
const $$url = "/Registerwrapper";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Registerwrapper,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
