import { _ as __nuxt_component_0$1 } from './nuxt-link-wKVHBGBj.mjs';
import { useSSRContext, mergeProps, withCtx, createVNode, openBlock, createBlock, createCommentVNode, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderSlot } from 'vue/server-renderer';
import { _ as _export_sfc, V as VIcon } from './server.mjs';

const _sfc_main = {
  __name: "Breadcrumbs",
  __ssrInlineRender: true,
  props: {
    items: {
      type: Array,
      default: () => []
    },
    showHome: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<nav${ssrRenderAttrs(mergeProps({
        "aria-label": "breadcrumb",
        class: "breadcrumbs"
      }, _attrs))} data-v-651ce2bf><ol data-v-651ce2bf>`);
      if (__props.showHome) {
        _push(`<li data-v-651ce2bf>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/",
          class: "d-flex align-center"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(VIcon, {
                icon: "bx-home",
                size: "20",
                class: "me-1"
              }, null, _parent2, _scopeId));
              _push2(`<span data-v-651ce2bf${_scopeId}>\u0E2B\u0E19\u0E49\u0E32\u0E41\u0E23\u0E01</span>`);
            } else {
              return [
                createVNode(VIcon, {
                  icon: "bx-home",
                  size: "20",
                  class: "me-1"
                }),
                createVNode("span", null, "\u0E2B\u0E19\u0E49\u0E32\u0E41\u0E23\u0E01")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(VIcon, {
          icon: "bx-chevron-right",
          size: "20",
          class: "separator"
        }, null, _parent));
        _push(`</li>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--[-->`);
      ssrRenderList(__props.items, (item, idx) => {
        _push(`<li class="${ssrRenderClass({ "is-last": idx === __props.items.length - 1 })}" data-v-651ce2bf>`);
        if (item.to && idx !== __props.items.length - 1) {
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: item.to,
            class: "d-flex align-center"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                if (item.icon) {
                  _push2(ssrRenderComponent(VIcon, {
                    icon: item.icon,
                    size: "20",
                    class: "me-1"
                  }, null, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
                _push2(`<span data-v-651ce2bf${_scopeId}>${ssrInterpolate(item.text)}</span>`);
              } else {
                return [
                  item.icon ? (openBlock(), createBlock(VIcon, {
                    key: 0,
                    icon: item.icon,
                    size: "20",
                    class: "me-1"
                  }, null, 8, ["icon"])) : createCommentVNode("", true),
                  createVNode("span", null, toDisplayString(item.text), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
        } else {
          _push(`<div class="d-flex align-center" data-v-651ce2bf>`);
          if (item.icon) {
            _push(ssrRenderComponent(VIcon, {
              icon: item.icon,
              size: "20",
              class: "me-1"
            }, null, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(`<span data-v-651ce2bf>${ssrInterpolate(item.text)}</span></div>`);
        }
        if (idx !== __props.items.length - 1) {
          _push(ssrRenderComponent(VIcon, {
            icon: "bx-chevron-right",
            size: "20",
            class: "separator"
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</li>`);
      });
      _push(`<!--]-->`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</ol></nav>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Breadcrumbs.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-651ce2bf"]]);

export { __nuxt_component_0 as _ };
