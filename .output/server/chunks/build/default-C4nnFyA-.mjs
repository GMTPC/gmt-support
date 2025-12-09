import { withCtx, renderSlot, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';
import DefaultLayoutWithVerticalNav from './DefaultLayoutWithVerticalNav-B-Snwdax.mjs';
import './nuxt-link-wKVHBGBj.mjs';
import './server.mjs';
import 'node:http';
import 'node:https';
import '../_/index.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import '../_/nitro.mjs';
import 'node:fs';
import 'node:url';
import 'node:path';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'pinia';
import 'vue-router';
import './Footer-CU1sv2Bm.mjs';
import './NavItems-DJ_kKkLO.mjs';
import './UserProfile-DpYlaKwg.mjs';
import './avatar-1-BLwzgS8N.mjs';
import './VAvatar-BWioJSAV.mjs';
import './VMenu-CLtX8H-Q.mjs';
import './VOverlay-B9V9YqYJ.mjs';
import './forwardRefs-Oip3fNRq.mjs';
import './scopeId-b3c5ZUEe.mjs';
import './VList-DCeFvVa6.mjs';
import './index-DUS45q6U.mjs';
import './ssrBoot-BtvJZs44.mjs';
import './VDivider-LYYZi4vy.mjs';
import './VListItemAction-HStnLId_.mjs';
import './logo-C2NYPRdy.mjs';
import 'vue3-perfect-scrollbar';
import './index-C4qjYUvh.mjs';
import './VSpacer-DFw6v9aV.mjs';

const _sfc_main = {
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(DefaultLayoutWithVerticalNav, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
