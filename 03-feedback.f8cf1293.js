function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,a=/^0o[0-7]+$/i,u=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=f||c||Function("return this")(),s=Object.prototype.toString,m=Math.max,d=Math.min,p=function(){return l.Date.now()};function v(e,t,n){var o,i,r,a,u,f,c=0,l=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=o,r=i;return o=i=void 0,c=t,a=e.apply(r,n)}function I(e){return c=e,u=setTimeout(S,t),l?y(e):a}function j(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-c>=r}function S(){var e=p();if(j(e))return h(e);u=setTimeout(S,function(e){var n=t-(e-f);return s?d(n,r-(e-c)):n}(e))}function h(e){return u=void 0,v&&o?y(e):(o=i=void 0,a)}function k(){var e=p(),n=j(e);if(o=arguments,i=this,f=e,n){if(void 0===u)return I(f);if(s)return u=setTimeout(S,t),y(f)}return void 0===u&&(u=setTimeout(S,t)),a}return t=b(t)||0,g(n)&&(l=!!n.leading,r=(s="maxWait"in n)?m(b(n.maxWait)||0,t):r,v="trailing"in n?!!n.trailing:v),k.cancel=function(){void 0!==u&&clearTimeout(u),c=0,o=f=i=u=void 0},k.flush=function(){return void 0===u?a:h(p())},k}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=r.test(e);return n||a.test(e)?u(e.slice(2),n?2:8):i.test(e)?NaN:+e}t=function(e,t,n){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return g(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),v(e,t,{leading:o,maxWait:t,trailing:i})};const y={feedbackForm:document.querySelector(".feedback-form"),emailInput:document.querySelector('.feedback-form input[name="email"]'),messageInput:document.querySelector('.feedback-form textarea[name="message"]')};y.feedbackForm.addEventListener("submit",(function(e){e.preventDefault(),e.target.reset(),localStorage.removeItem("feedback-form-state");const t={email:y.emailInput.value,message:y.messageInput.value};console.log(t)})),y.feedbackForm.addEventListener("input",e(t)((function(){const e={email:y.emailInput.value,message:y.messageInput.value};localStorage.setItem("feedback-form-state",JSON.stringify(e))}),500)),function(){const e=localStorage.getItem("feedback-form-state");if(e){const t=JSON.parse(e);y.emailInput.value=t.email,y.messageInput.value=t.message}}();
//# sourceMappingURL=03-feedback.f8cf1293.js.map
