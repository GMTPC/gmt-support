import { _ as __nuxt_component_0 } from './nuxt-link-wKVHBGBj.mjs';
import { defineComponent, ref, h, useSSRContext, toRef, isRef, resolveComponent, withCtx, createVNode, unref, openBlock, createBlock, toDisplayString, createCommentVNode, renderSlot, watch, resolveDynamicComponent, mergeProps } from 'vue';
import { ssrRenderComponent, ssrRenderStyle, ssrInterpolate, ssrRenderSlot, ssrRenderVNode, ssrRenderAttr } from 'vue/server-renderer';
import Footer from './Footer-CU1sv2Bm.mjs';
import _sfc_main$4 from './NavItems-DJ_kKkLO.mjs';
import _sfc_main$3 from './UserProfile-DpYlaKwg.mjs';
import { u as useRoute$1, s as useDisplay, _ as _export_sfc, a$ as useNuxtApp, a3 as useAuthStore, V as VIcon } from './server.mjs';
import { l as logo } from './logo-C2NYPRdy.mjs';
import { PerfectScrollbar } from 'vue3-perfect-scrollbar';
import { u as useToggle, s as syncRef } from './index-C4qjYUvh.mjs';
import { V as VSpacer } from './VSpacer-DFw6v9aV.mjs';
import './avatar-1-BLwzgS8N.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:url';
import 'node:path';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
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
import '../_/index.mjs';
import 'pinia';

const useStateKeyPrefix = "$s";
function useState(...args) {
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (typeof args[0] !== "string") {
    args.unshift(autoKey);
  }
  const [_key, init] = args;
  if (!_key || typeof _key !== "string") {
    throw new TypeError("[nuxt] [useState] key must be a string: " + _key);
  }
  if (init !== void 0 && typeof init !== "function") {
    throw new Error("[nuxt] [useState] init must be a function: " + init);
  }
  const key = useStateKeyPrefix + _key;
  const nuxtApp = useNuxtApp();
  const state = toRef(nuxtApp.payload.state, key);
  if (state.value === void 0 && init) {
    const initialValue = init();
    if (isRef(initialValue)) {
      nuxtApp.payload.state[key] = initialValue;
      return initialValue;
    }
    state.value = initialValue;
  }
  return state;
}
const _sfc_main$2 = {
  __name: "VerticalNav",
  __ssrInlineRender: true,
  props: {
    tag: {
      type: null,
      required: false,
      default: "aside"
    },
    isOverlayNavActive: {
      type: Boolean,
      required: true
    },
    toggleIsOverlayNavActive: {
      type: Function,
      required: true
    }
  },
  setup(__props) {
    const isCollapsed = useState("verticalNavCollapsed", () => false);
    const toggleCollapsed = () => {
      isCollapsed.value = !isCollapsed.value;
    };
    const props = __props;
    const { mdAndDown } = useDisplay();
    const refNav = ref();
    const route = useRoute$1();
    watch(() => route.path, () => {
      props.toggleIsOverlayNavActive(false);
    });
    const isVerticalNavScrolled = ref(false);
    const updateIsVerticalNavScrolled = (val) => isVerticalNavScrolled.value = val;
    const handleNavScroll = (evt) => {
      isVerticalNavScrolled.value = evt.target.scrollTop > 0;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(props.tag), mergeProps({
        ref_key: "refNav",
        ref: refNav,
        "data-allow-mismatch": "",
        class: ["layout-vertical-nav", [
          {
            "visible": __props.isOverlayNavActive,
            "scrolled": unref(isVerticalNavScrolled),
            "overlay-nav": unref(mdAndDown)
          }
        ]]
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="nav-header" data-v-79a42c7b${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "nav-header", {}, () => {
              _push2(ssrRenderComponent(_component_NuxtLink, {
                to: "/",
                class: "app-logo app-title-wrapper"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  var _a;
                  if (_push3) {
                    _push3(`<div class="d-flex" data-v-79a42c7b${_scopeId2}>${(_a = unref(logo)) != null ? _a : ""}</div><h1 class="leading-normal" data-v-79a42c7b${_scopeId2}> sneat </h1>`);
                  } else {
                    return [
                      createVNode("div", {
                        class: "d-flex",
                        innerHTML: unref(logo)
                      }, null, 8, ["innerHTML"]),
                      createVNode("h1", { class: "leading-normal" }, " sneat ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<button type="button" class="nav-toggle"${ssrRenderAttr("aria-pressed", unref(isCollapsed))} title="Toggle navigation" data-v-79a42c7b${_scopeId}>`);
              if (!unref(isCollapsed)) {
                _push2(`<span data-v-79a42c7b${_scopeId}>\xAB</span>`);
              } else {
                _push2(`<span data-v-79a42c7b${_scopeId}>\xBB</span>`);
              }
              _push2(`</button>`);
            }, _push2, _parent2, _scopeId);
            _push2(`</div>`);
            ssrRenderSlot(_ctx.$slots, "before-nav-items", {}, () => {
              _push2(`<div class="vertical-nav-items-shadow" data-v-79a42c7b${_scopeId}></div>`);
            }, _push2, _parent2, _scopeId);
            ssrRenderSlot(_ctx.$slots, "nav-items", { updateIsVerticalNavScrolled }, () => {
              _push2(ssrRenderComponent(unref(PerfectScrollbar), {
                tag: "ul",
                class: "nav-items",
                options: { wheelPropagation: false },
                onPsScrollY: handleNavScroll
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    ssrRenderSlot(_ctx.$slots, "default", {}, null, _push3, _parent3, _scopeId2);
                  } else {
                    return [
                      renderSlot(_ctx.$slots, "default", {}, void 0, true)
                    ];
                  }
                }),
                _: 3
              }, _parent2, _scopeId));
            }, _push2, _parent2, _scopeId);
            ssrRenderSlot(_ctx.$slots, "after-nav-items", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              createVNode("div", { class: "nav-header" }, [
                renderSlot(_ctx.$slots, "nav-header", {}, () => [
                  createVNode(_component_NuxtLink, {
                    to: "/",
                    class: "app-logo app-title-wrapper"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", {
                        class: "d-flex",
                        innerHTML: unref(logo)
                      }, null, 8, ["innerHTML"]),
                      createVNode("h1", { class: "leading-normal" }, " sneat ")
                    ]),
                    _: 1
                  }),
                  createVNode("button", {
                    type: "button",
                    class: "nav-toggle",
                    onClick: toggleCollapsed,
                    "aria-pressed": unref(isCollapsed),
                    title: "Toggle navigation"
                  }, [
                    !unref(isCollapsed) ? (openBlock(), createBlock("span", { key: 0 }, "\xAB")) : (openBlock(), createBlock("span", { key: 1 }, "\xBB"))
                  ], 8, ["aria-pressed"])
                ], true)
              ]),
              renderSlot(_ctx.$slots, "before-nav-items", {}, () => [
                createVNode("div", { class: "vertical-nav-items-shadow" })
              ], true),
              renderSlot(_ctx.$slots, "nav-items", { updateIsVerticalNavScrolled }, () => [
                createVNode(unref(PerfectScrollbar), {
                  tag: "ul",
                  class: "nav-items",
                  options: { wheelPropagation: false },
                  onPsScrollY: handleNavScroll
                }, {
                  default: withCtx(() => [
                    renderSlot(_ctx.$slots, "default", {}, void 0, true)
                  ]),
                  _: 3
                })
              ], true),
              renderSlot(_ctx.$slots, "after-nav-items", {}, void 0, true)
            ];
          }
        }),
        _: 3
      }), _parent);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("@layouts/components/VerticalNav.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const VerticalNav = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-79a42c7b"]]);
const _sfc_main$1 = defineComponent({
  setup(props, { slots }) {
    const isOverlayNavActive = ref(false);
    const isLayoutOverlayVisible = ref(false);
    const isVerticalNavCollapsed = useState("verticalNavCollapsed", () => false);
    const toggleIsOverlayNavActive = useToggle(isOverlayNavActive);
    const toggleVerticalNavCollapsed = () => {
      isVerticalNavCollapsed.value = !isVerticalNavCollapsed.value;
    };
    const route = useRoute$1();
    useDisplay();
    const isClientOverlay = ref(false);
    syncRef(isOverlayNavActive, isLayoutOverlayVisible);
    return () => {
      var _a, _b, _c;
      const verticalNav = h(VerticalNav, { isOverlayNavActive: isOverlayNavActive.value, toggleIsOverlayNavActive }, {
        "nav-header": () => {
          var _a2;
          return (_a2 = slots["vertical-nav-header"]) == null ? void 0 : _a2.call(slots, { toggleIsOverlayNavActive });
        },
        "before-nav-items": () => {
          var _a2;
          return (_a2 = slots["before-vertical-nav-items"]) == null ? void 0 : _a2.call(slots);
        },
        "default": () => {
          var _a2;
          return (_a2 = slots["vertical-nav-content"]) == null ? void 0 : _a2.call(slots);
        },
        "after-nav-items": () => {
          var _a2;
          return (_a2 = slots["after-vertical-nav-items"]) == null ? void 0 : _a2.call(slots);
        }
      });
      const navbar = h("header", { class: ["layout-navbar navbar-blur"] }, [
        h("div", { class: "navbar-content-container" }, (_a = slots.navbar) == null ? void 0 : _a.call(slots, {
          toggleVerticalOverlayNavActive: toggleIsOverlayNavActive,
          toggleVerticalNavCollapsed,
          isVerticalNavCollapsed: isVerticalNavCollapsed.value
        }))
      ]);
      const main = h("main", { class: "layout-page-content" }, h("div", { class: "page-content-container" }, (_b = slots.default) == null ? void 0 : _b.call(slots)));
      const footer = h("footer", { class: "layout-footer" }, [
        h("div", { class: "footer-content-container" }, (_c = slots.footer) == null ? void 0 : _c.call(slots))
      ]);
      const layoutOverlay = h("div", {
        class: ["layout-overlay", { visible: isLayoutOverlayVisible.value }],
        onClick: () => {
          isLayoutOverlayVisible.value = !isLayoutOverlayVisible.value;
        }
      });
      return h("div", {
        class: [
          "layout-wrapper layout-nav-type-vertical layout-navbar-static layout-footer-static layout-content-width-fluid",
          isClientOverlay.value && "layout-overlay-nav",
          isVerticalNavCollapsed.value && "layout-vertical-nav-collapsed",
          route.meta.layoutWrapperClasses
        ]
      }, [
        verticalNav,
        h("div", { class: "layout-content-wrapper" }, [
          navbar,
          main,
          footer
        ]),
        layoutOverlay
      ]);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("@layouts/components/VerticalNavLayout.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "DefaultLayoutWithVerticalNav",
  __ssrInlineRender: true,
  setup(__props) {
    const authStore = useAuthStore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_IconBtn = resolveComponent("IconBtn");
      const _component_NuxtLink = __nuxt_component_0;
      _push(ssrRenderComponent(_sfc_main$1, _attrs, {
        navbar: withCtx(({ toggleVerticalOverlayNavActive, toggleVerticalNavCollapsed, isVerticalNavCollapsed }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="d-flex h-100 align-center" data-v-88e28da5${_scopeId}>`);
            _push2(ssrRenderComponent(_component_IconBtn, {
              class: "d-none d-lg-inline me-2",
              onClick: ($event) => toggleVerticalNavCollapsed(),
              title: isVerticalNavCollapsed ? "Expand navigation" : "Collapse navigation"
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VIcon, {
                    icon: isVerticalNavCollapsed ? "bx-chevron-right" : "bx-chevron-left"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VIcon, {
                      icon: isVerticalNavCollapsed ? "bx-chevron-right" : "bx-chevron-left"
                    }, null, 8, ["icon"])
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_IconBtn, {
              class: "ms-n3 d-lg-none",
              onClick: ($event) => toggleVerticalOverlayNavActive(true)
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VIcon, { icon: "bx-menu" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VIcon, { icon: "bx-menu" })
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(`<div class="d-flex align-center cursor-pointer ms-lg-n3" style="${ssrRenderStyle({ "user-select": "none" })}" data-v-88e28da5${_scopeId}></div>`);
            _push2(ssrRenderComponent(VSpacer, null, null, _parent2, _scopeId));
            if (unref(authStore).user) {
              _push2(`<div class="d-flex align-center me-3" data-v-88e28da5${_scopeId}><span class="text-body-2 font-weight-medium me-2" data-v-88e28da5${_scopeId}>${ssrInterpolate(unref(authStore).user.name || unref(authStore).user.username)}</span></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(_sfc_main$3, null, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "d-flex h-100 align-center" }, [
                createVNode(_component_IconBtn, {
                  class: "d-none d-lg-inline me-2",
                  onClick: ($event) => toggleVerticalNavCollapsed(),
                  title: isVerticalNavCollapsed ? "Expand navigation" : "Collapse navigation"
                }, {
                  default: withCtx(() => [
                    createVNode(VIcon, {
                      icon: isVerticalNavCollapsed ? "bx-chevron-right" : "bx-chevron-left"
                    }, null, 8, ["icon"])
                  ]),
                  _: 2
                }, 1032, ["onClick", "title"]),
                createVNode(_component_IconBtn, {
                  class: "ms-n3 d-lg-none",
                  onClick: ($event) => toggleVerticalOverlayNavActive(true)
                }, {
                  default: withCtx(() => [
                    createVNode(VIcon, { icon: "bx-menu" })
                  ]),
                  _: 1
                }, 8, ["onClick"]),
                createVNode("div", {
                  class: "d-flex align-center cursor-pointer ms-lg-n3",
                  style: { "user-select": "none" }
                }),
                createVNode(VSpacer),
                unref(authStore).user ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "d-flex align-center me-3"
                }, [
                  createVNode("span", { class: "text-body-2 font-weight-medium me-2" }, toDisplayString(unref(authStore).user.name || unref(authStore).user.username), 1)
                ])) : createCommentVNode("", true),
                createVNode(_sfc_main$3)
              ])
            ];
          }
        }),
        "vertical-nav-header": withCtx(({ toggleIsOverlayNavActive }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "/",
              class: "app-logo app-title-wrapper"
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                var _a;
                if (_push3) {
                  _push3(`<div class="d-flex" data-v-88e28da5${_scopeId2}>${(_a = unref(logo)) != null ? _a : ""}</div><h1 class="app-logo-title" data-v-88e28da5${_scopeId2}> sneat </h1>`);
                } else {
                  return [
                    createVNode("div", {
                      class: "d-flex",
                      innerHTML: unref(logo)
                    }, null, 8, ["innerHTML"]),
                    createVNode("h1", { class: "app-logo-title" }, " sneat ")
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_IconBtn, {
              class: "d-block d-lg-none",
              onClick: ($event) => toggleIsOverlayNavActive(false)
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VIcon, { icon: "bx-x" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VIcon, { icon: "bx-x" })
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_NuxtLink, {
                to: "/",
                class: "app-logo app-title-wrapper"
              }, {
                default: withCtx(() => [
                  createVNode("div", {
                    class: "d-flex",
                    innerHTML: unref(logo)
                  }, null, 8, ["innerHTML"]),
                  createVNode("h1", { class: "app-logo-title" }, " sneat ")
                ]),
                _: 1
              }),
              createVNode(_component_IconBtn, {
                class: "d-block d-lg-none",
                onClick: ($event) => toggleIsOverlayNavActive(false)
              }, {
                default: withCtx(() => [
                  createVNode(VIcon, { icon: "bx-x" })
                ]),
                _: 1
              }, 8, ["onClick"])
            ];
          }
        }),
        "vertical-nav-content": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$4, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$4)
            ];
          }
        }),
        footer: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(Footer, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(Footer)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default", {}, void 0, true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/components/DefaultLayoutWithVerticalNav.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const DefaultLayoutWithVerticalNav = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-88e28da5"]]);

export { DefaultLayoutWithVerticalNav as default };
