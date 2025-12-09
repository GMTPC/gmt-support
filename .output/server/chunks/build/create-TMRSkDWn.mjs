import { _ as __nuxt_component_0 } from './Breadcrumbs-CblUXPow.mjs';
import { a as VBtn, a4 as navigateTo, V as VIcon } from './server.mjs';
import { defineComponent, ref, withCtx, unref, createTextVNode, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { _ as _sfc_main$1 } from './MemoForm-OFhb7Eer.mjs';
import { u as useMemoStore, V as VContainer, M as MemoPdfExport } from './memo-C_jS_Qbz.mjs';
import { V as VRow, a as VCol } from './VRow-zuLeAiTc.mjs';
import { V as VSnackbar } from './VSnackbar-DZIKnoSv.mjs';
import './nuxt-link-wKVHBGBj.mjs';
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
import './VCard-CSiTQXcr.mjs';
import './VAvatar-BWioJSAV.mjs';
import './VForm-wpOva5dg.mjs';
import './VTextField-BBb08qcq.mjs';
import './index-DUS45q6U.mjs';
import './forwardRefs-Oip3fNRq.mjs';
import './VCheckbox-B6hYyIfB.mjs';
import './VCheckboxBtn-DiqOHInw.mjs';
import './VTextarea-C1Baibx1.mjs';
import './client-only-CW16b6V6.mjs';
import 'html2canvas';
import 'jspdf';
import './VOverlay-B9V9YqYJ.mjs';
import './scopeId-b3c5ZUEe.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "create",
  __ssrInlineRender: true,
  setup(__props) {
    const memoStore = useMemoStore();
    const pdfExportRef = ref();
    const snackbar = ref({
      show: false,
      message: "",
      color: "success"
    });
    const showSnackbar = (message, color = "success") => {
      snackbar.value = {
        show: true,
        message,
        color
      };
    };
    const handleSave = () => {
      try {
        const memoId = memoStore.saveMemo();
        showSnackbar("\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08!", "success");
        setTimeout(() => {
          navigateTo(`/memo/${memoId}`);
        }, 1e3);
      } catch (error) {
        console.error("Error saving memo:", error);
        showSnackbar("\u0E40\u0E01\u0E34\u0E14\u0E02\u0E49\u0E2D\u0E1C\u0E34\u0E14\u0E1E\u0E25\u0E32\u0E14\u0E43\u0E19\u0E01\u0E32\u0E23\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01", "error");
      }
    };
    const handleExportPdf = async () => {
      var _a;
      try {
        if (!memoStore.currentMemo.id) {
          memoStore.saveMemo();
        }
        await ((_a = pdfExportRef.value) == null ? void 0 : _a.exportToPdf());
        showSnackbar("Export PDF \u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08!", "success");
      } catch (error) {
        console.error("Error exporting PDF:", error);
        showSnackbar("\u0E40\u0E01\u0E34\u0E14\u0E02\u0E49\u0E2D\u0E1C\u0E34\u0E14\u0E1E\u0E25\u0E32\u0E14\u0E43\u0E19\u0E01\u0E32\u0E23 Export PDF", "error");
      }
    };
    const handleReset = () => {
      if (confirm("\u0E04\u0E38\u0E13\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E23\u0E35\u0E40\u0E0B\u0E47\u0E15\u0E1F\u0E2D\u0E23\u0E4C\u0E21\u0E2B\u0E23\u0E37\u0E2D\u0E44\u0E21\u0E48?")) {
        memoStore.resetCurrentMemo();
        showSnackbar("\u0E23\u0E35\u0E40\u0E0B\u0E47\u0E15\u0E1F\u0E2D\u0E23\u0E4C\u0E21\u0E41\u0E25\u0E49\u0E27", "info");
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Breadcrumbs = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(VContainer, { fluid: "" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Breadcrumbs, {
              items: [
                { text: "\u0E43\u0E1A\u0E02\u0E2D\u0E0B\u0E37\u0E49\u0E2D", to: "/memo", icon: "bx-file" },
                { text: "\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E43\u0E2B\u0E21\u0E48", icon: "bx-plus" }
              ],
              "show-home": true
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(VRow, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCol, { cols: "12" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="d-flex justify-space-between align-center mb-4"${_scopeId3}><div${_scopeId3}><h1 class="text-h4 font-weight-bold"${_scopeId3}> \u0E2A\u0E23\u0E49\u0E32\u0E07\u0E43\u0E1A\u0E02\u0E2D\u0E0B\u0E37\u0E49\u0E2D\u0E43\u0E2B\u0E21\u0E48 </h1><p class="text-subtitle-1 text-medium-emphasis"${_scopeId3}> \u0E01\u0E23\u0E2D\u0E01\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E43\u0E1A\u0E02\u0E2D\u0E0B\u0E37\u0E49\u0E2D </p></div>`);
                        _push4(ssrRenderComponent(VBtn, {
                          variant: "outlined",
                          onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))("/memo")
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VIcon, { start: "" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` bx-arrow-back `);
                                  } else {
                                    return [
                                      createTextVNode(" bx-arrow-back ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(` \u0E01\u0E25\u0E31\u0E1A `);
                            } else {
                              return [
                                createVNode(VIcon, { start: "" }, {
                                  default: withCtx(() => [
                                    createTextVNode(" bx-arrow-back ")
                                  ]),
                                  _: 1
                                }),
                                createTextVNode(" \u0E01\u0E25\u0E31\u0E1A ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "d-flex justify-space-between align-center mb-4" }, [
                            createVNode("div", null, [
                              createVNode("h1", { class: "text-h4 font-weight-bold" }, " \u0E2A\u0E23\u0E49\u0E32\u0E07\u0E43\u0E1A\u0E02\u0E2D\u0E0B\u0E37\u0E49\u0E2D\u0E43\u0E2B\u0E21\u0E48 "),
                              createVNode("p", { class: "text-subtitle-1 text-medium-emphasis" }, " \u0E01\u0E23\u0E2D\u0E01\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E43\u0E1A\u0E02\u0E2D\u0E0B\u0E37\u0E49\u0E2D ")
                            ]),
                            createVNode(VBtn, {
                              variant: "outlined",
                              onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))("/memo")
                            }, {
                              default: withCtx(() => [
                                createVNode(VIcon, { start: "" }, {
                                  default: withCtx(() => [
                                    createTextVNode(" bx-arrow-back ")
                                  ]),
                                  _: 1
                                }),
                                createTextVNode(" \u0E01\u0E25\u0E31\u0E1A ")
                              ]),
                              _: 1
                            }, 8, ["onClick"])
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCol, { cols: "12" }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "d-flex justify-space-between align-center mb-4" }, [
                          createVNode("div", null, [
                            createVNode("h1", { class: "text-h4 font-weight-bold" }, " \u0E2A\u0E23\u0E49\u0E32\u0E07\u0E43\u0E1A\u0E02\u0E2D\u0E0B\u0E37\u0E49\u0E2D\u0E43\u0E2B\u0E21\u0E48 "),
                            createVNode("p", { class: "text-subtitle-1 text-medium-emphasis" }, " \u0E01\u0E23\u0E2D\u0E01\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E43\u0E1A\u0E02\u0E2D\u0E0B\u0E37\u0E49\u0E2D ")
                          ]),
                          createVNode(VBtn, {
                            variant: "outlined",
                            onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))("/memo")
                          }, {
                            default: withCtx(() => [
                              createVNode(VIcon, { start: "" }, {
                                default: withCtx(() => [
                                  createTextVNode(" bx-arrow-back ")
                                ]),
                                _: 1
                              }),
                              createTextVNode(" \u0E01\u0E25\u0E31\u0E1A ")
                            ]),
                            _: 1
                          }, 8, ["onClick"])
                        ])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VRow, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCol, { cols: "12" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_sfc_main$1, {
                          memo: unref(memoStore).currentMemo,
                          "is-saved": false,
                          onSave: handleSave,
                          onExportPdf: handleExportPdf,
                          onReset: handleReset
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_sfc_main$1, {
                            memo: unref(memoStore).currentMemo,
                            "is-saved": false,
                            onSave: handleSave,
                            onExportPdf: handleExportPdf,
                            onReset: handleReset
                          }, null, 8, ["memo"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCol, { cols: "12" }, {
                      default: withCtx(() => [
                        createVNode(_sfc_main$1, {
                          memo: unref(memoStore).currentMemo,
                          "is-saved": false,
                          onSave: handleSave,
                          onExportPdf: handleExportPdf,
                          onReset: handleReset
                        }, null, 8, ["memo"])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Breadcrumbs, {
                items: [
                  { text: "\u0E43\u0E1A\u0E02\u0E2D\u0E0B\u0E37\u0E49\u0E2D", to: "/memo", icon: "bx-file" },
                  { text: "\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E43\u0E2B\u0E21\u0E48", icon: "bx-plus" }
                ],
                "show-home": true
              }),
              createVNode(VRow, null, {
                default: withCtx(() => [
                  createVNode(VCol, { cols: "12" }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "d-flex justify-space-between align-center mb-4" }, [
                        createVNode("div", null, [
                          createVNode("h1", { class: "text-h4 font-weight-bold" }, " \u0E2A\u0E23\u0E49\u0E32\u0E07\u0E43\u0E1A\u0E02\u0E2D\u0E0B\u0E37\u0E49\u0E2D\u0E43\u0E2B\u0E21\u0E48 "),
                          createVNode("p", { class: "text-subtitle-1 text-medium-emphasis" }, " \u0E01\u0E23\u0E2D\u0E01\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E43\u0E1A\u0E02\u0E2D\u0E0B\u0E37\u0E49\u0E2D ")
                        ]),
                        createVNode(VBtn, {
                          variant: "outlined",
                          onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))("/memo")
                        }, {
                          default: withCtx(() => [
                            createVNode(VIcon, { start: "" }, {
                              default: withCtx(() => [
                                createTextVNode(" bx-arrow-back ")
                              ]),
                              _: 1
                            }),
                            createTextVNode(" \u0E01\u0E25\u0E31\u0E1A ")
                          ]),
                          _: 1
                        }, 8, ["onClick"])
                      ])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(VRow, null, {
                default: withCtx(() => [
                  createVNode(VCol, { cols: "12" }, {
                    default: withCtx(() => [
                      createVNode(_sfc_main$1, {
                        memo: unref(memoStore).currentMemo,
                        "is-saved": false,
                        onSave: handleSave,
                        onExportPdf: handleExportPdf,
                        onReset: handleReset
                      }, null, 8, ["memo"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(MemoPdfExport, {
        ref_key: "pdfExportRef",
        ref: pdfExportRef,
        memo: unref(memoStore).currentMemo
      }, null, _parent));
      _push(ssrRenderComponent(VSnackbar, {
        modelValue: snackbar.value.show,
        "onUpdate:modelValue": ($event) => snackbar.value.show = $event,
        color: snackbar.value.color,
        timeout: 3e3
      }, {
        actions: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VBtn, {
              variant: "text",
              onClick: ($event) => snackbar.value.show = false
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u0E1B\u0E34\u0E14 `);
                } else {
                  return [
                    createTextVNode(" \u0E1B\u0E34\u0E14 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VBtn, {
                variant: "text",
                onClick: ($event) => snackbar.value.show = false
              }, {
                default: withCtx(() => [
                  createTextVNode(" \u0E1B\u0E34\u0E14 ")
                ]),
                _: 1
              }, 8, ["onClick"])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(snackbar.value.message)} `);
          } else {
            return [
              createTextVNode(toDisplayString(snackbar.value.message) + " ", 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/memo/create.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
