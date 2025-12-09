import { _ as __nuxt_component_0 } from './Breadcrumbs-CblUXPow.mjs';
import { a as VBtn, V as VIcon, a4 as navigateTo } from './server.mjs';
import { defineComponent, ref, computed, withCtx, unref, createTextVNode, createVNode, toDisplayString, openBlock, createBlock, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderStyle } from 'vue/server-renderer';
import { useRoute } from 'vue-router';
import { _ as _sfc_main$1 } from './MemoForm-OFhb7Eer.mjs';
import { u as useMemoStore, V as VContainer, M as MemoPdfExport } from './memo-C_jS_Qbz.mjs';
import { V as VRow, a as VCol } from './VRow-zuLeAiTc.mjs';
import { V as VCard, a as VCardText } from './VCard-CSiTQXcr.mjs';
import { V as VDivider } from './VDivider-LYYZi4vy.mjs';
import { V as VChip } from './VChip-DBW6TD_X.mjs';
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
import './VAvatar-BWioJSAV.mjs';
import './VSlideGroup-C5ipntF0.mjs';
import './VOverlay-B9V9YqYJ.mjs';
import './scopeId-b3c5ZUEe.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const memoStore = useMemoStore();
    const pdfExportRef = ref();
    const isViewMode = ref(false);
    const snackbar = ref({
      show: false,
      message: "",
      color: "success"
    });
    const hasAnyPurpose = computed(() => {
      const p = memoStore.currentMemo.purposes;
      return p.consider || p.know || p.issueCommand || p.continue;
    });
    const hasAnyAction = computed(() => {
      const a = memoStore.currentMemo.actions;
      return a.follow || a.considerReturn || a.copyStores || a.returnCopies || a.forApproval || a.toConsider || a.toKnow || a.other;
    });
    const formatDate = (dateString) => {
      if (!dateString) return "";
      const date = new Date(dateString);
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear() + 543;
      return `${day}/${month}/${year}`;
    };
    const showSnackbar = (message, color = "success") => {
      snackbar.value = {
        show: true,
        message,
        color
      };
    };
    const toggleEditMode = () => {
      isViewMode.value = !isViewMode.value;
    };
    const handleSave = () => {
      try {
        memoStore.saveMemo();
        showSnackbar("\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08!", "success");
        isViewMode.value = true;
      } catch (error) {
        console.error("Error saving memo:", error);
        showSnackbar("\u0E40\u0E01\u0E34\u0E14\u0E02\u0E49\u0E2D\u0E1C\u0E34\u0E14\u0E1E\u0E25\u0E32\u0E14\u0E43\u0E19\u0E01\u0E32\u0E23\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01", "error");
      }
    };
    const handleExportPdf = async () => {
      var _a;
      try {
        await ((_a = pdfExportRef.value) == null ? void 0 : _a.exportToPdf());
        showSnackbar("Export PDF \u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08!", "success");
      } catch (error) {
        console.error("Error exporting PDF:", error);
        showSnackbar("\u0E40\u0E01\u0E34\u0E14\u0E02\u0E49\u0E2D\u0E1C\u0E34\u0E14\u0E1E\u0E25\u0E32\u0E14\u0E43\u0E19\u0E01\u0E32\u0E23 Export PDF", "error");
      }
    };
    const handleReset = () => {
      if (confirm("\u0E04\u0E38\u0E13\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E22\u0E01\u0E40\u0E25\u0E34\u0E01\u0E01\u0E32\u0E23\u0E41\u0E01\u0E49\u0E44\u0E02\u0E2B\u0E23\u0E37\u0E2D\u0E44\u0E21\u0E48?")) {
        const memoId = String(route.params.id);
        memoStore.loadMemo(memoId);
        showSnackbar("\u0E22\u0E01\u0E40\u0E25\u0E34\u0E01\u0E01\u0E32\u0E23\u0E41\u0E01\u0E49\u0E44\u0E02\u0E41\u0E25\u0E49\u0E27", "info");
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
                { text: isViewMode.value ? "\u0E14\u0E39\u0E43\u0E1A\u0E02\u0E2D\u0E0B\u0E37\u0E49\u0E2D" : "\u0E41\u0E01\u0E49\u0E44\u0E02\u0E43\u0E1A\u0E02\u0E2D\u0E0B\u0E37\u0E49\u0E2D", icon: isViewMode.value ? "bx-show" : "bx-edit" }
              ],
              "show-home": true
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(VRow, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCol, { cols: "12" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="d-flex justify-space-between align-center mb-4"${_scopeId3}><div${_scopeId3}><h1 class="text-h4 font-weight-bold"${_scopeId3}>${ssrInterpolate(isViewMode.value ? "\u0E14\u0E39\u0E43\u0E1A\u0E02\u0E2D\u0E0B\u0E37\u0E49\u0E2D" : "\u0E41\u0E01\u0E49\u0E44\u0E02\u0E43\u0E1A\u0E02\u0E2D\u0E0B\u0E37\u0E49\u0E2D")}</h1><p class="text-subtitle-1 text-medium-emphasis"${_scopeId3}>${ssrInterpolate(unref(memoStore).currentMemo.subject || "\u0E44\u0E21\u0E48\u0E21\u0E35\u0E2B\u0E31\u0E27\u0E02\u0E49\u0E2D")}</p></div><div class="d-flex gap-2"${_scopeId3}>`);
                        if (isViewMode.value) {
                          _push4(ssrRenderComponent(VBtn, {
                            color: "primary",
                            onClick: toggleEditMode
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(VIcon, { start: "" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(` bx-edit `);
                                    } else {
                                      return [
                                        createTextVNode(" bx-edit ")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                                _push5(` \u0E41\u0E01\u0E49\u0E44\u0E02 `);
                              } else {
                                return [
                                  createVNode(VIcon, { start: "" }, {
                                    default: withCtx(() => [
                                      createTextVNode(" bx-edit ")
                                    ]),
                                    _: 1
                                  }),
                                  createTextVNode(" \u0E41\u0E01\u0E49\u0E44\u0E02 ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          _push4(`<!---->`);
                        }
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
                        _push4(`</div></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "d-flex justify-space-between align-center mb-4" }, [
                            createVNode("div", null, [
                              createVNode("h1", { class: "text-h4 font-weight-bold" }, toDisplayString(isViewMode.value ? "\u0E14\u0E39\u0E43\u0E1A\u0E02\u0E2D\u0E0B\u0E37\u0E49\u0E2D" : "\u0E41\u0E01\u0E49\u0E44\u0E02\u0E43\u0E1A\u0E02\u0E2D\u0E0B\u0E37\u0E49\u0E2D"), 1),
                              createVNode("p", { class: "text-subtitle-1 text-medium-emphasis" }, toDisplayString(unref(memoStore).currentMemo.subject || "\u0E44\u0E21\u0E48\u0E21\u0E35\u0E2B\u0E31\u0E27\u0E02\u0E49\u0E2D"), 1)
                            ]),
                            createVNode("div", { class: "d-flex gap-2" }, [
                              isViewMode.value ? (openBlock(), createBlock(VBtn, {
                                key: 0,
                                color: "primary",
                                onClick: toggleEditMode
                              }, {
                                default: withCtx(() => [
                                  createVNode(VIcon, { start: "" }, {
                                    default: withCtx(() => [
                                      createTextVNode(" bx-edit ")
                                    ]),
                                    _: 1
                                  }),
                                  createTextVNode(" \u0E41\u0E01\u0E49\u0E44\u0E02 ")
                                ]),
                                _: 1
                              })) : createCommentVNode("", true),
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
                            createVNode("h1", { class: "text-h4 font-weight-bold" }, toDisplayString(isViewMode.value ? "\u0E14\u0E39\u0E43\u0E1A\u0E02\u0E2D\u0E0B\u0E37\u0E49\u0E2D" : "\u0E41\u0E01\u0E49\u0E44\u0E02\u0E43\u0E1A\u0E02\u0E2D\u0E0B\u0E37\u0E49\u0E2D"), 1),
                            createVNode("p", { class: "text-subtitle-1 text-medium-emphasis" }, toDisplayString(unref(memoStore).currentMemo.subject || "\u0E44\u0E21\u0E48\u0E21\u0E35\u0E2B\u0E31\u0E27\u0E02\u0E49\u0E2D"), 1)
                          ]),
                          createVNode("div", { class: "d-flex gap-2" }, [
                            isViewMode.value ? (openBlock(), createBlock(VBtn, {
                              key: 0,
                              color: "primary",
                              onClick: toggleEditMode
                            }, {
                              default: withCtx(() => [
                                createVNode(VIcon, { start: "" }, {
                                  default: withCtx(() => [
                                    createTextVNode(" bx-edit ")
                                  ]),
                                  _: 1
                                }),
                                createTextVNode(" \u0E41\u0E01\u0E49\u0E44\u0E02 ")
                              ]),
                              _: 1
                            })) : createCommentVNode("", true),
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
                        ])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            if (isViewMode.value) {
              _push2(ssrRenderComponent(VRow, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(VCol, { cols: "12" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(VCard, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(VCardText, null, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(VRow, null, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(VCol, {
                                              cols: "12",
                                              md: "6"
                                            }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`<div class="mb-4"${_scopeId7}><div class="text-caption text-medium-emphasis"${_scopeId7}>\u0E08\u0E32\u0E01 (From)</div><div class="text-body-1"${_scopeId7}>${ssrInterpolate(unref(memoStore).currentMemo.from || "-")}</div></div>`);
                                                } else {
                                                  return [
                                                    createVNode("div", { class: "mb-4" }, [
                                                      createVNode("div", { class: "text-caption text-medium-emphasis" }, "\u0E08\u0E32\u0E01 (From)"),
                                                      createVNode("div", { class: "text-body-1" }, toDisplayString(unref(memoStore).currentMemo.from || "-"), 1)
                                                    ])
                                                  ];
                                                }
                                              }),
                                              _: 1
                                            }, _parent7, _scopeId6));
                                            _push7(ssrRenderComponent(VCol, {
                                              cols: "12",
                                              md: "6"
                                            }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`<div class="mb-4"${_scopeId7}><div class="text-caption text-medium-emphasis"${_scopeId7}>\u0E16\u0E36\u0E07 (To)</div><div class="text-body-1"${_scopeId7}>${ssrInterpolate(unref(memoStore).currentMemo.to || "-")}</div></div>`);
                                                } else {
                                                  return [
                                                    createVNode("div", { class: "mb-4" }, [
                                                      createVNode("div", { class: "text-caption text-medium-emphasis" }, "\u0E16\u0E36\u0E07 (To)"),
                                                      createVNode("div", { class: "text-body-1" }, toDisplayString(unref(memoStore).currentMemo.to || "-"), 1)
                                                    ])
                                                  ];
                                                }
                                              }),
                                              _: 1
                                            }, _parent7, _scopeId6));
                                            _push7(ssrRenderComponent(VCol, {
                                              cols: "12",
                                              md: "6"
                                            }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`<div class="mb-4"${_scopeId7}><div class="text-caption text-medium-emphasis"${_scopeId7}>\u0E2A\u0E33\u0E40\u0E19\u0E32 (CC)</div><div class="text-body-1"${_scopeId7}>${ssrInterpolate(unref(memoStore).currentMemo.cc || "-")}</div></div>`);
                                                } else {
                                                  return [
                                                    createVNode("div", { class: "mb-4" }, [
                                                      createVNode("div", { class: "text-caption text-medium-emphasis" }, "\u0E2A\u0E33\u0E40\u0E19\u0E32 (CC)"),
                                                      createVNode("div", { class: "text-body-1" }, toDisplayString(unref(memoStore).currentMemo.cc || "-"), 1)
                                                    ])
                                                  ];
                                                }
                                              }),
                                              _: 1
                                            }, _parent7, _scopeId6));
                                            _push7(ssrRenderComponent(VCol, {
                                              cols: "12",
                                              md: "3"
                                            }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`<div class="mb-4"${_scopeId7}><div class="text-caption text-medium-emphasis"${_scopeId7}>\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48</div><div class="text-body-1"${_scopeId7}>${ssrInterpolate(formatDate(unref(memoStore).currentMemo.date))}</div></div>`);
                                                } else {
                                                  return [
                                                    createVNode("div", { class: "mb-4" }, [
                                                      createVNode("div", { class: "text-caption text-medium-emphasis" }, "\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48"),
                                                      createVNode("div", { class: "text-body-1" }, toDisplayString(formatDate(unref(memoStore).currentMemo.date)), 1)
                                                    ])
                                                  ];
                                                }
                                              }),
                                              _: 1
                                            }, _parent7, _scopeId6));
                                            _push7(ssrRenderComponent(VCol, {
                                              cols: "12",
                                              md: "3"
                                            }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`<div class="mb-4"${_scopeId7}><div class="text-caption text-medium-emphasis"${_scopeId7}>\u0E40\u0E25\u0E02\u0E17\u0E35\u0E48\u0E40\u0E2D\u0E01\u0E2A\u0E32\u0E23</div><div class="text-body-1"${_scopeId7}>${ssrInterpolate(unref(memoStore).currentMemo.documentNumber || "-")}</div></div>`);
                                                } else {
                                                  return [
                                                    createVNode("div", { class: "mb-4" }, [
                                                      createVNode("div", { class: "text-caption text-medium-emphasis" }, "\u0E40\u0E25\u0E02\u0E17\u0E35\u0E48\u0E40\u0E2D\u0E01\u0E2A\u0E32\u0E23"),
                                                      createVNode("div", { class: "text-body-1" }, toDisplayString(unref(memoStore).currentMemo.documentNumber || "-"), 1)
                                                    ])
                                                  ];
                                                }
                                              }),
                                              _: 1
                                            }, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(VCol, {
                                                cols: "12",
                                                md: "6"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode("div", { class: "mb-4" }, [
                                                    createVNode("div", { class: "text-caption text-medium-emphasis" }, "\u0E08\u0E32\u0E01 (From)"),
                                                    createVNode("div", { class: "text-body-1" }, toDisplayString(unref(memoStore).currentMemo.from || "-"), 1)
                                                  ])
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(VCol, {
                                                cols: "12",
                                                md: "6"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode("div", { class: "mb-4" }, [
                                                    createVNode("div", { class: "text-caption text-medium-emphasis" }, "\u0E16\u0E36\u0E07 (To)"),
                                                    createVNode("div", { class: "text-body-1" }, toDisplayString(unref(memoStore).currentMemo.to || "-"), 1)
                                                  ])
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(VCol, {
                                                cols: "12",
                                                md: "6"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode("div", { class: "mb-4" }, [
                                                    createVNode("div", { class: "text-caption text-medium-emphasis" }, "\u0E2A\u0E33\u0E40\u0E19\u0E32 (CC)"),
                                                    createVNode("div", { class: "text-body-1" }, toDisplayString(unref(memoStore).currentMemo.cc || "-"), 1)
                                                  ])
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(VCol, {
                                                cols: "12",
                                                md: "3"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode("div", { class: "mb-4" }, [
                                                    createVNode("div", { class: "text-caption text-medium-emphasis" }, "\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48"),
                                                    createVNode("div", { class: "text-body-1" }, toDisplayString(formatDate(unref(memoStore).currentMemo.date)), 1)
                                                  ])
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(VCol, {
                                                cols: "12",
                                                md: "3"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode("div", { class: "mb-4" }, [
                                                    createVNode("div", { class: "text-caption text-medium-emphasis" }, "\u0E40\u0E25\u0E02\u0E17\u0E35\u0E48\u0E40\u0E2D\u0E01\u0E2A\u0E32\u0E23"),
                                                    createVNode("div", { class: "text-body-1" }, toDisplayString(unref(memoStore).currentMemo.documentNumber || "-"), 1)
                                                  ])
                                                ]),
                                                _: 1
                                              })
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(VDivider, { class: "my-4" }, null, _parent6, _scopeId5));
                                      _push6(`<div class="mb-4"${_scopeId5}><div class="text-subtitle-2 mb-2"${_scopeId5}>\u0E27\u0E31\u0E15\u0E16\u0E38\u0E1B\u0E23\u0E30\u0E2A\u0E07\u0E04\u0E4C:</div><div class="d-flex flex-wrap gap-2"${_scopeId5}>`);
                                      if (unref(memoStore).currentMemo.purposes.consider) {
                                        _push6(ssrRenderComponent(VChip, {
                                          color: "primary",
                                          size: "small"
                                        }, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(` \u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E1E\u0E34\u0E08\u0E32\u0E23\u0E13\u0E32 `);
                                            } else {
                                              return [
                                                createTextVNode(" \u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E1E\u0E34\u0E08\u0E32\u0E23\u0E13\u0E32 ")
                                              ];
                                            }
                                          }),
                                          _: 1
                                        }, _parent6, _scopeId5));
                                      } else {
                                        _push6(`<!---->`);
                                      }
                                      if (unref(memoStore).currentMemo.purposes.know) {
                                        _push6(ssrRenderComponent(VChip, {
                                          color: "info",
                                          size: "small"
                                        }, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(` \u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E17\u0E23\u0E32\u0E1A `);
                                            } else {
                                              return [
                                                createTextVNode(" \u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E17\u0E23\u0E32\u0E1A ")
                                              ];
                                            }
                                          }),
                                          _: 1
                                        }, _parent6, _scopeId5));
                                      } else {
                                        _push6(`<!---->`);
                                      }
                                      if (unref(memoStore).currentMemo.purposes.issueCommand) {
                                        _push6(ssrRenderComponent(VChip, {
                                          color: "warning",
                                          size: "small"
                                        }, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(` \u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E2D\u0E2D\u0E01\u0E04\u0E33\u0E2A\u0E31\u0E48\u0E07 `);
                                            } else {
                                              return [
                                                createTextVNode(" \u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E2D\u0E2D\u0E01\u0E04\u0E33\u0E2A\u0E31\u0E48\u0E07 ")
                                              ];
                                            }
                                          }),
                                          _: 1
                                        }, _parent6, _scopeId5));
                                      } else {
                                        _push6(`<!---->`);
                                      }
                                      if (unref(memoStore).currentMemo.purposes.continue) {
                                        _push6(ssrRenderComponent(VChip, {
                                          color: "success",
                                          size: "small"
                                        }, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(` \u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E14\u0E33\u0E40\u0E19\u0E34\u0E19\u0E01\u0E32\u0E23 `);
                                            } else {
                                              return [
                                                createTextVNode(" \u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E14\u0E33\u0E40\u0E19\u0E34\u0E19\u0E01\u0E32\u0E23 ")
                                              ];
                                            }
                                          }),
                                          _: 1
                                        }, _parent6, _scopeId5));
                                      } else {
                                        _push6(`<!---->`);
                                      }
                                      if (!hasAnyPurpose.value) {
                                        _push6(`<span class="text-medium-emphasis"${_scopeId5}>-</span>`);
                                      } else {
                                        _push6(`<!---->`);
                                      }
                                      _push6(`</div></div><div class="mb-4"${_scopeId5}><div class="text-subtitle-2 mb-2"${_scopeId5}>\u0E01\u0E32\u0E23\u0E14\u0E33\u0E40\u0E19\u0E34\u0E19\u0E01\u0E32\u0E23:</div><div class="d-flex flex-wrap gap-2"${_scopeId5}>`);
                                      if (unref(memoStore).currentMemo.actions.follow) {
                                        _push6(ssrRenderComponent(VChip, { size: "small" }, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(`\u0E1B\u0E0F\u0E34\u0E1A\u0E31\u0E15\u0E34\u0E15\u0E32\u0E21`);
                                            } else {
                                              return [
                                                createTextVNode("\u0E1B\u0E0F\u0E34\u0E1A\u0E31\u0E15\u0E34\u0E15\u0E32\u0E21")
                                              ];
                                            }
                                          }),
                                          _: 1
                                        }, _parent6, _scopeId5));
                                      } else {
                                        _push6(`<!---->`);
                                      }
                                      if (unref(memoStore).currentMemo.actions.considerReturn) {
                                        _push6(ssrRenderComponent(VChip, { size: "small" }, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(` \u0E1E\u0E34\u0E08\u0E32\u0E23\u0E13\u0E32\u0E41\u0E25\u0E49\u0E27\u0E2A\u0E48\u0E07\u0E04\u0E37\u0E19`);
                                            } else {
                                              return [
                                                createTextVNode(" \u0E1E\u0E34\u0E08\u0E32\u0E23\u0E13\u0E32\u0E41\u0E25\u0E49\u0E27\u0E2A\u0E48\u0E07\u0E04\u0E37\u0E19")
                                              ];
                                            }
                                          }),
                                          _: 1
                                        }, _parent6, _scopeId5));
                                      } else {
                                        _push6(`<!---->`);
                                      }
                                      if (unref(memoStore).currentMemo.actions.copyStores) {
                                        _push6(ssrRenderComponent(VChip, { size: "small" }, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(`\u0E16\u0E48\u0E32\u0E22\u0E2A\u0E33\u0E40\u0E19\u0E32\u0E40\u0E01\u0E47\u0E1A\u0E44\u0E27\u0E49 `);
                                            } else {
                                              return [
                                                createTextVNode("\u0E16\u0E48\u0E32\u0E22\u0E2A\u0E33\u0E40\u0E19\u0E32\u0E40\u0E01\u0E47\u0E1A\u0E44\u0E27\u0E49 ")
                                              ];
                                            }
                                          }),
                                          _: 1
                                        }, _parent6, _scopeId5));
                                      } else {
                                        _push6(`<!---->`);
                                      }
                                      if (unref(memoStore).currentMemo.actions.returnCopies) {
                                        _push6(ssrRenderComponent(VChip, { size: "small" }, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(`\u0E2A\u0E48\u0E07\u0E2A\u0E33\u0E40\u0E19\u0E32\u0E04\u0E37\u0E19 `);
                                            } else {
                                              return [
                                                createTextVNode("\u0E2A\u0E48\u0E07\u0E2A\u0E33\u0E40\u0E19\u0E32\u0E04\u0E37\u0E19 ")
                                              ];
                                            }
                                          }),
                                          _: 1
                                        }, _parent6, _scopeId5));
                                      } else {
                                        _push6(`<!---->`);
                                      }
                                      if (unref(memoStore).currentMemo.actions.forApproval) {
                                        _push6(ssrRenderComponent(VChip, { size: "small" }, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(`\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E2D\u0E19\u0E38\u0E21\u0E31\u0E15\u0E34 `);
                                            } else {
                                              return [
                                                createTextVNode("\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E2D\u0E19\u0E38\u0E21\u0E31\u0E15\u0E34 ")
                                              ];
                                            }
                                          }),
                                          _: 1
                                        }, _parent6, _scopeId5));
                                      } else {
                                        _push6(`<!---->`);
                                      }
                                      if (unref(memoStore).currentMemo.actions.toConsider) {
                                        _push6(ssrRenderComponent(VChip, { size: "small" }, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(`\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E1E\u0E34\u0E08\u0E32\u0E23\u0E13\u0E32 `);
                                            } else {
                                              return [
                                                createTextVNode("\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E1E\u0E34\u0E08\u0E32\u0E23\u0E13\u0E32 ")
                                              ];
                                            }
                                          }),
                                          _: 1
                                        }, _parent6, _scopeId5));
                                      } else {
                                        _push6(`<!---->`);
                                      }
                                      if (unref(memoStore).currentMemo.actions.toKnow) {
                                        _push6(ssrRenderComponent(VChip, { size: "small" }, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(`\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E17\u0E23\u0E32\u0E1A`);
                                            } else {
                                              return [
                                                createTextVNode("\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E17\u0E23\u0E32\u0E1A")
                                              ];
                                            }
                                          }),
                                          _: 1
                                        }, _parent6, _scopeId5));
                                      } else {
                                        _push6(`<!---->`);
                                      }
                                      if (unref(memoStore).currentMemo.actions.other) {
                                        _push6(ssrRenderComponent(VChip, { size: "small" }, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(` \u0E2D\u0E37\u0E48\u0E19\u0E46: ${ssrInterpolate(unref(memoStore).currentMemo.otherAction)}`);
                                            } else {
                                              return [
                                                createTextVNode(" \u0E2D\u0E37\u0E48\u0E19\u0E46: " + toDisplayString(unref(memoStore).currentMemo.otherAction), 1)
                                              ];
                                            }
                                          }),
                                          _: 1
                                        }, _parent6, _scopeId5));
                                      } else {
                                        _push6(`<!---->`);
                                      }
                                      if (!hasAnyAction.value) {
                                        _push6(`<span class="text-medium-emphasis"${_scopeId5}>-</span>`);
                                      } else {
                                        _push6(`<!---->`);
                                      }
                                      _push6(`</div></div>`);
                                      _push6(ssrRenderComponent(VDivider, { class: "my-4" }, null, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(VRow, null, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(VCol, { cols: "12" }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`<div class="mb-4"${_scopeId7}><div class="text-caption text-medium-emphasis"${_scopeId7}>\u0E40\u0E23\u0E37\u0E48\u0E2D\u0E07</div><div class="text-body-1"${_scopeId7}>${ssrInterpolate(unref(memoStore).currentMemo.subject || "-")}</div></div>`);
                                                } else {
                                                  return [
                                                    createVNode("div", { class: "mb-4" }, [
                                                      createVNode("div", { class: "text-caption text-medium-emphasis" }, "\u0E40\u0E23\u0E37\u0E48\u0E2D\u0E07"),
                                                      createVNode("div", { class: "text-body-1" }, toDisplayString(unref(memoStore).currentMemo.subject || "-"), 1)
                                                    ])
                                                  ];
                                                }
                                              }),
                                              _: 1
                                            }, _parent7, _scopeId6));
                                            _push7(ssrRenderComponent(VCol, { cols: "12" }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`<div class="mb-4"${_scopeId7}><div class="text-caption text-medium-emphasis"${_scopeId7}>\u0E23\u0E32\u0E22\u0E25\u0E30\u0E40\u0E2D\u0E35\u0E22\u0E14</div><div class="text-body-1"${_scopeId7}>${ssrInterpolate(unref(memoStore).currentMemo.details || "-")}</div></div>`);
                                                } else {
                                                  return [
                                                    createVNode("div", { class: "mb-4" }, [
                                                      createVNode("div", { class: "text-caption text-medium-emphasis" }, "\u0E23\u0E32\u0E22\u0E25\u0E30\u0E40\u0E2D\u0E35\u0E22\u0E14"),
                                                      createVNode("div", { class: "text-body-1" }, toDisplayString(unref(memoStore).currentMemo.details || "-"), 1)
                                                    ])
                                                  ];
                                                }
                                              }),
                                              _: 1
                                            }, _parent7, _scopeId6));
                                            _push7(ssrRenderComponent(VCol, { cols: "12" }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`<div class="mb-4"${_scopeId7}><div class="text-caption text-medium-emphasis"${_scopeId7}>\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21/\u0E40\u0E19\u0E37\u0E49\u0E2D\u0E2B\u0E32</div><div class="text-body-1" style="${ssrRenderStyle({ "white-space": "pre-wrap" })}"${_scopeId7}>${ssrInterpolate(unref(memoStore).currentMemo.message || "-")}</div></div>`);
                                                } else {
                                                  return [
                                                    createVNode("div", { class: "mb-4" }, [
                                                      createVNode("div", { class: "text-caption text-medium-emphasis" }, "\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21/\u0E40\u0E19\u0E37\u0E49\u0E2D\u0E2B\u0E32"),
                                                      createVNode("div", {
                                                        class: "text-body-1",
                                                        style: { "white-space": "pre-wrap" }
                                                      }, toDisplayString(unref(memoStore).currentMemo.message || "-"), 1)
                                                    ])
                                                  ];
                                                }
                                              }),
                                              _: 1
                                            }, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(VCol, { cols: "12" }, {
                                                default: withCtx(() => [
                                                  createVNode("div", { class: "mb-4" }, [
                                                    createVNode("div", { class: "text-caption text-medium-emphasis" }, "\u0E40\u0E23\u0E37\u0E48\u0E2D\u0E07"),
                                                    createVNode("div", { class: "text-body-1" }, toDisplayString(unref(memoStore).currentMemo.subject || "-"), 1)
                                                  ])
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(VCol, { cols: "12" }, {
                                                default: withCtx(() => [
                                                  createVNode("div", { class: "mb-4" }, [
                                                    createVNode("div", { class: "text-caption text-medium-emphasis" }, "\u0E23\u0E32\u0E22\u0E25\u0E30\u0E40\u0E2D\u0E35\u0E22\u0E14"),
                                                    createVNode("div", { class: "text-body-1" }, toDisplayString(unref(memoStore).currentMemo.details || "-"), 1)
                                                  ])
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(VCol, { cols: "12" }, {
                                                default: withCtx(() => [
                                                  createVNode("div", { class: "mb-4" }, [
                                                    createVNode("div", { class: "text-caption text-medium-emphasis" }, "\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21/\u0E40\u0E19\u0E37\u0E49\u0E2D\u0E2B\u0E32"),
                                                    createVNode("div", {
                                                      class: "text-body-1",
                                                      style: { "white-space": "pre-wrap" }
                                                    }, toDisplayString(unref(memoStore).currentMemo.message || "-"), 1)
                                                  ])
                                                ]),
                                                _: 1
                                              })
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(VDivider, { class: "my-4" }, null, _parent6, _scopeId5));
                                      _push6(`<div class="d-flex gap-2"${_scopeId5}>`);
                                      _push6(ssrRenderComponent(VBtn, {
                                        color: "success",
                                        onClick: handleExportPdf
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(VIcon, { start: "" }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(` mdi-file-pdf-box `);
                                                } else {
                                                  return [
                                                    createTextVNode(" mdi-file-pdf-box ")
                                                  ];
                                                }
                                              }),
                                              _: 1
                                            }, _parent7, _scopeId6));
                                            _push7(` Export PDF `);
                                          } else {
                                            return [
                                              createVNode(VIcon, { start: "" }, {
                                                default: withCtx(() => [
                                                  createTextVNode(" mdi-file-pdf-box ")
                                                ]),
                                                _: 1
                                              }),
                                              createTextVNode(" Export PDF ")
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(VBtn, {
                                        color: "primary",
                                        variant: "outlined",
                                        onClick: toggleEditMode
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(VIcon, { start: "" }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(` mdi-pencil `);
                                                } else {
                                                  return [
                                                    createTextVNode(" mdi-pencil ")
                                                  ];
                                                }
                                              }),
                                              _: 1
                                            }, _parent7, _scopeId6));
                                            _push7(` \u0E41\u0E01\u0E49\u0E44\u0E02 `);
                                          } else {
                                            return [
                                              createVNode(VIcon, { start: "" }, {
                                                default: withCtx(() => [
                                                  createTextVNode(" mdi-pencil ")
                                                ]),
                                                _: 1
                                              }),
                                              createTextVNode(" \u0E41\u0E01\u0E49\u0E44\u0E02 ")
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(`</div>`);
                                    } else {
                                      return [
                                        createVNode(VRow, null, {
                                          default: withCtx(() => [
                                            createVNode(VCol, {
                                              cols: "12",
                                              md: "6"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode("div", { class: "mb-4" }, [
                                                  createVNode("div", { class: "text-caption text-medium-emphasis" }, "\u0E08\u0E32\u0E01 (From)"),
                                                  createVNode("div", { class: "text-body-1" }, toDisplayString(unref(memoStore).currentMemo.from || "-"), 1)
                                                ])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              cols: "12",
                                              md: "6"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode("div", { class: "mb-4" }, [
                                                  createVNode("div", { class: "text-caption text-medium-emphasis" }, "\u0E16\u0E36\u0E07 (To)"),
                                                  createVNode("div", { class: "text-body-1" }, toDisplayString(unref(memoStore).currentMemo.to || "-"), 1)
                                                ])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              cols: "12",
                                              md: "6"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode("div", { class: "mb-4" }, [
                                                  createVNode("div", { class: "text-caption text-medium-emphasis" }, "\u0E2A\u0E33\u0E40\u0E19\u0E32 (CC)"),
                                                  createVNode("div", { class: "text-body-1" }, toDisplayString(unref(memoStore).currentMemo.cc || "-"), 1)
                                                ])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              cols: "12",
                                              md: "3"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode("div", { class: "mb-4" }, [
                                                  createVNode("div", { class: "text-caption text-medium-emphasis" }, "\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48"),
                                                  createVNode("div", { class: "text-body-1" }, toDisplayString(formatDate(unref(memoStore).currentMemo.date)), 1)
                                                ])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              cols: "12",
                                              md: "3"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode("div", { class: "mb-4" }, [
                                                  createVNode("div", { class: "text-caption text-medium-emphasis" }, "\u0E40\u0E25\u0E02\u0E17\u0E35\u0E48\u0E40\u0E2D\u0E01\u0E2A\u0E32\u0E23"),
                                                  createVNode("div", { class: "text-body-1" }, toDisplayString(unref(memoStore).currentMemo.documentNumber || "-"), 1)
                                                ])
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VDivider, { class: "my-4" }),
                                        createVNode("div", { class: "mb-4" }, [
                                          createVNode("div", { class: "text-subtitle-2 mb-2" }, "\u0E27\u0E31\u0E15\u0E16\u0E38\u0E1B\u0E23\u0E30\u0E2A\u0E07\u0E04\u0E4C:"),
                                          createVNode("div", { class: "d-flex flex-wrap gap-2" }, [
                                            unref(memoStore).currentMemo.purposes.consider ? (openBlock(), createBlock(VChip, {
                                              key: 0,
                                              color: "primary",
                                              size: "small"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(" \u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E1E\u0E34\u0E08\u0E32\u0E23\u0E13\u0E32 ")
                                              ]),
                                              _: 1
                                            })) : createCommentVNode("", true),
                                            unref(memoStore).currentMemo.purposes.know ? (openBlock(), createBlock(VChip, {
                                              key: 1,
                                              color: "info",
                                              size: "small"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(" \u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E17\u0E23\u0E32\u0E1A ")
                                              ]),
                                              _: 1
                                            })) : createCommentVNode("", true),
                                            unref(memoStore).currentMemo.purposes.issueCommand ? (openBlock(), createBlock(VChip, {
                                              key: 2,
                                              color: "warning",
                                              size: "small"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(" \u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E2D\u0E2D\u0E01\u0E04\u0E33\u0E2A\u0E31\u0E48\u0E07 ")
                                              ]),
                                              _: 1
                                            })) : createCommentVNode("", true),
                                            unref(memoStore).currentMemo.purposes.continue ? (openBlock(), createBlock(VChip, {
                                              key: 3,
                                              color: "success",
                                              size: "small"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(" \u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E14\u0E33\u0E40\u0E19\u0E34\u0E19\u0E01\u0E32\u0E23 ")
                                              ]),
                                              _: 1
                                            })) : createCommentVNode("", true),
                                            !hasAnyPurpose.value ? (openBlock(), createBlock("span", {
                                              key: 4,
                                              class: "text-medium-emphasis"
                                            }, "-")) : createCommentVNode("", true)
                                          ])
                                        ]),
                                        createVNode("div", { class: "mb-4" }, [
                                          createVNode("div", { class: "text-subtitle-2 mb-2" }, "\u0E01\u0E32\u0E23\u0E14\u0E33\u0E40\u0E19\u0E34\u0E19\u0E01\u0E32\u0E23:"),
                                          createVNode("div", { class: "d-flex flex-wrap gap-2" }, [
                                            unref(memoStore).currentMemo.actions.follow ? (openBlock(), createBlock(VChip, {
                                              key: 0,
                                              size: "small"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode("\u0E1B\u0E0F\u0E34\u0E1A\u0E31\u0E15\u0E34\u0E15\u0E32\u0E21")
                                              ]),
                                              _: 1
                                            })) : createCommentVNode("", true),
                                            unref(memoStore).currentMemo.actions.considerReturn ? (openBlock(), createBlock(VChip, {
                                              key: 1,
                                              size: "small"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(" \u0E1E\u0E34\u0E08\u0E32\u0E23\u0E13\u0E32\u0E41\u0E25\u0E49\u0E27\u0E2A\u0E48\u0E07\u0E04\u0E37\u0E19")
                                              ]),
                                              _: 1
                                            })) : createCommentVNode("", true),
                                            unref(memoStore).currentMemo.actions.copyStores ? (openBlock(), createBlock(VChip, {
                                              key: 2,
                                              size: "small"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode("\u0E16\u0E48\u0E32\u0E22\u0E2A\u0E33\u0E40\u0E19\u0E32\u0E40\u0E01\u0E47\u0E1A\u0E44\u0E27\u0E49 ")
                                              ]),
                                              _: 1
                                            })) : createCommentVNode("", true),
                                            unref(memoStore).currentMemo.actions.returnCopies ? (openBlock(), createBlock(VChip, {
                                              key: 3,
                                              size: "small"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode("\u0E2A\u0E48\u0E07\u0E2A\u0E33\u0E40\u0E19\u0E32\u0E04\u0E37\u0E19 ")
                                              ]),
                                              _: 1
                                            })) : createCommentVNode("", true),
                                            unref(memoStore).currentMemo.actions.forApproval ? (openBlock(), createBlock(VChip, {
                                              key: 4,
                                              size: "small"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode("\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E2D\u0E19\u0E38\u0E21\u0E31\u0E15\u0E34 ")
                                              ]),
                                              _: 1
                                            })) : createCommentVNode("", true),
                                            unref(memoStore).currentMemo.actions.toConsider ? (openBlock(), createBlock(VChip, {
                                              key: 5,
                                              size: "small"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode("\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E1E\u0E34\u0E08\u0E32\u0E23\u0E13\u0E32 ")
                                              ]),
                                              _: 1
                                            })) : createCommentVNode("", true),
                                            unref(memoStore).currentMemo.actions.toKnow ? (openBlock(), createBlock(VChip, {
                                              key: 6,
                                              size: "small"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode("\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E17\u0E23\u0E32\u0E1A")
                                              ]),
                                              _: 1
                                            })) : createCommentVNode("", true),
                                            unref(memoStore).currentMemo.actions.other ? (openBlock(), createBlock(VChip, {
                                              key: 7,
                                              size: "small"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(" \u0E2D\u0E37\u0E48\u0E19\u0E46: " + toDisplayString(unref(memoStore).currentMemo.otherAction), 1)
                                              ]),
                                              _: 1
                                            })) : createCommentVNode("", true),
                                            !hasAnyAction.value ? (openBlock(), createBlock("span", {
                                              key: 8,
                                              class: "text-medium-emphasis"
                                            }, "-")) : createCommentVNode("", true)
                                          ])
                                        ]),
                                        createVNode(VDivider, { class: "my-4" }),
                                        createVNode(VRow, null, {
                                          default: withCtx(() => [
                                            createVNode(VCol, { cols: "12" }, {
                                              default: withCtx(() => [
                                                createVNode("div", { class: "mb-4" }, [
                                                  createVNode("div", { class: "text-caption text-medium-emphasis" }, "\u0E40\u0E23\u0E37\u0E48\u0E2D\u0E07"),
                                                  createVNode("div", { class: "text-body-1" }, toDisplayString(unref(memoStore).currentMemo.subject || "-"), 1)
                                                ])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, { cols: "12" }, {
                                              default: withCtx(() => [
                                                createVNode("div", { class: "mb-4" }, [
                                                  createVNode("div", { class: "text-caption text-medium-emphasis" }, "\u0E23\u0E32\u0E22\u0E25\u0E30\u0E40\u0E2D\u0E35\u0E22\u0E14"),
                                                  createVNode("div", { class: "text-body-1" }, toDisplayString(unref(memoStore).currentMemo.details || "-"), 1)
                                                ])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, { cols: "12" }, {
                                              default: withCtx(() => [
                                                createVNode("div", { class: "mb-4" }, [
                                                  createVNode("div", { class: "text-caption text-medium-emphasis" }, "\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21/\u0E40\u0E19\u0E37\u0E49\u0E2D\u0E2B\u0E32"),
                                                  createVNode("div", {
                                                    class: "text-body-1",
                                                    style: { "white-space": "pre-wrap" }
                                                  }, toDisplayString(unref(memoStore).currentMemo.message || "-"), 1)
                                                ])
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VDivider, { class: "my-4" }),
                                        createVNode("div", { class: "d-flex gap-2" }, [
                                          createVNode(VBtn, {
                                            color: "success",
                                            onClick: handleExportPdf
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VIcon, { start: "" }, {
                                                default: withCtx(() => [
                                                  createTextVNode(" mdi-file-pdf-box ")
                                                ]),
                                                _: 1
                                              }),
                                              createTextVNode(" Export PDF ")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VBtn, {
                                            color: "primary",
                                            variant: "outlined",
                                            onClick: toggleEditMode
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VIcon, { start: "" }, {
                                                default: withCtx(() => [
                                                  createTextVNode(" mdi-pencil ")
                                                ]),
                                                _: 1
                                              }),
                                              createTextVNode(" \u0E41\u0E01\u0E49\u0E44\u0E02 ")
                                            ]),
                                            _: 1
                                          })
                                        ])
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(VCardText, null, {
                                    default: withCtx(() => [
                                      createVNode(VRow, null, {
                                        default: withCtx(() => [
                                          createVNode(VCol, {
                                            cols: "12",
                                            md: "6"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode("div", { class: "mb-4" }, [
                                                createVNode("div", { class: "text-caption text-medium-emphasis" }, "\u0E08\u0E32\u0E01 (From)"),
                                                createVNode("div", { class: "text-body-1" }, toDisplayString(unref(memoStore).currentMemo.from || "-"), 1)
                                              ])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, {
                                            cols: "12",
                                            md: "6"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode("div", { class: "mb-4" }, [
                                                createVNode("div", { class: "text-caption text-medium-emphasis" }, "\u0E16\u0E36\u0E07 (To)"),
                                                createVNode("div", { class: "text-body-1" }, toDisplayString(unref(memoStore).currentMemo.to || "-"), 1)
                                              ])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, {
                                            cols: "12",
                                            md: "6"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode("div", { class: "mb-4" }, [
                                                createVNode("div", { class: "text-caption text-medium-emphasis" }, "\u0E2A\u0E33\u0E40\u0E19\u0E32 (CC)"),
                                                createVNode("div", { class: "text-body-1" }, toDisplayString(unref(memoStore).currentMemo.cc || "-"), 1)
                                              ])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, {
                                            cols: "12",
                                            md: "3"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode("div", { class: "mb-4" }, [
                                                createVNode("div", { class: "text-caption text-medium-emphasis" }, "\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48"),
                                                createVNode("div", { class: "text-body-1" }, toDisplayString(formatDate(unref(memoStore).currentMemo.date)), 1)
                                              ])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, {
                                            cols: "12",
                                            md: "3"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode("div", { class: "mb-4" }, [
                                                createVNode("div", { class: "text-caption text-medium-emphasis" }, "\u0E40\u0E25\u0E02\u0E17\u0E35\u0E48\u0E40\u0E2D\u0E01\u0E2A\u0E32\u0E23"),
                                                createVNode("div", { class: "text-body-1" }, toDisplayString(unref(memoStore).currentMemo.documentNumber || "-"), 1)
                                              ])
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VDivider, { class: "my-4" }),
                                      createVNode("div", { class: "mb-4" }, [
                                        createVNode("div", { class: "text-subtitle-2 mb-2" }, "\u0E27\u0E31\u0E15\u0E16\u0E38\u0E1B\u0E23\u0E30\u0E2A\u0E07\u0E04\u0E4C:"),
                                        createVNode("div", { class: "d-flex flex-wrap gap-2" }, [
                                          unref(memoStore).currentMemo.purposes.consider ? (openBlock(), createBlock(VChip, {
                                            key: 0,
                                            color: "primary",
                                            size: "small"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" \u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E1E\u0E34\u0E08\u0E32\u0E23\u0E13\u0E32 ")
                                            ]),
                                            _: 1
                                          })) : createCommentVNode("", true),
                                          unref(memoStore).currentMemo.purposes.know ? (openBlock(), createBlock(VChip, {
                                            key: 1,
                                            color: "info",
                                            size: "small"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" \u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E17\u0E23\u0E32\u0E1A ")
                                            ]),
                                            _: 1
                                          })) : createCommentVNode("", true),
                                          unref(memoStore).currentMemo.purposes.issueCommand ? (openBlock(), createBlock(VChip, {
                                            key: 2,
                                            color: "warning",
                                            size: "small"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" \u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E2D\u0E2D\u0E01\u0E04\u0E33\u0E2A\u0E31\u0E48\u0E07 ")
                                            ]),
                                            _: 1
                                          })) : createCommentVNode("", true),
                                          unref(memoStore).currentMemo.purposes.continue ? (openBlock(), createBlock(VChip, {
                                            key: 3,
                                            color: "success",
                                            size: "small"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" \u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E14\u0E33\u0E40\u0E19\u0E34\u0E19\u0E01\u0E32\u0E23 ")
                                            ]),
                                            _: 1
                                          })) : createCommentVNode("", true),
                                          !hasAnyPurpose.value ? (openBlock(), createBlock("span", {
                                            key: 4,
                                            class: "text-medium-emphasis"
                                          }, "-")) : createCommentVNode("", true)
                                        ])
                                      ]),
                                      createVNode("div", { class: "mb-4" }, [
                                        createVNode("div", { class: "text-subtitle-2 mb-2" }, "\u0E01\u0E32\u0E23\u0E14\u0E33\u0E40\u0E19\u0E34\u0E19\u0E01\u0E32\u0E23:"),
                                        createVNode("div", { class: "d-flex flex-wrap gap-2" }, [
                                          unref(memoStore).currentMemo.actions.follow ? (openBlock(), createBlock(VChip, {
                                            key: 0,
                                            size: "small"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode("\u0E1B\u0E0F\u0E34\u0E1A\u0E31\u0E15\u0E34\u0E15\u0E32\u0E21")
                                            ]),
                                            _: 1
                                          })) : createCommentVNode("", true),
                                          unref(memoStore).currentMemo.actions.considerReturn ? (openBlock(), createBlock(VChip, {
                                            key: 1,
                                            size: "small"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" \u0E1E\u0E34\u0E08\u0E32\u0E23\u0E13\u0E32\u0E41\u0E25\u0E49\u0E27\u0E2A\u0E48\u0E07\u0E04\u0E37\u0E19")
                                            ]),
                                            _: 1
                                          })) : createCommentVNode("", true),
                                          unref(memoStore).currentMemo.actions.copyStores ? (openBlock(), createBlock(VChip, {
                                            key: 2,
                                            size: "small"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode("\u0E16\u0E48\u0E32\u0E22\u0E2A\u0E33\u0E40\u0E19\u0E32\u0E40\u0E01\u0E47\u0E1A\u0E44\u0E27\u0E49 ")
                                            ]),
                                            _: 1
                                          })) : createCommentVNode("", true),
                                          unref(memoStore).currentMemo.actions.returnCopies ? (openBlock(), createBlock(VChip, {
                                            key: 3,
                                            size: "small"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode("\u0E2A\u0E48\u0E07\u0E2A\u0E33\u0E40\u0E19\u0E32\u0E04\u0E37\u0E19 ")
                                            ]),
                                            _: 1
                                          })) : createCommentVNode("", true),
                                          unref(memoStore).currentMemo.actions.forApproval ? (openBlock(), createBlock(VChip, {
                                            key: 4,
                                            size: "small"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode("\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E2D\u0E19\u0E38\u0E21\u0E31\u0E15\u0E34 ")
                                            ]),
                                            _: 1
                                          })) : createCommentVNode("", true),
                                          unref(memoStore).currentMemo.actions.toConsider ? (openBlock(), createBlock(VChip, {
                                            key: 5,
                                            size: "small"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode("\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E1E\u0E34\u0E08\u0E32\u0E23\u0E13\u0E32 ")
                                            ]),
                                            _: 1
                                          })) : createCommentVNode("", true),
                                          unref(memoStore).currentMemo.actions.toKnow ? (openBlock(), createBlock(VChip, {
                                            key: 6,
                                            size: "small"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode("\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E17\u0E23\u0E32\u0E1A")
                                            ]),
                                            _: 1
                                          })) : createCommentVNode("", true),
                                          unref(memoStore).currentMemo.actions.other ? (openBlock(), createBlock(VChip, {
                                            key: 7,
                                            size: "small"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" \u0E2D\u0E37\u0E48\u0E19\u0E46: " + toDisplayString(unref(memoStore).currentMemo.otherAction), 1)
                                            ]),
                                            _: 1
                                          })) : createCommentVNode("", true),
                                          !hasAnyAction.value ? (openBlock(), createBlock("span", {
                                            key: 8,
                                            class: "text-medium-emphasis"
                                          }, "-")) : createCommentVNode("", true)
                                        ])
                                      ]),
                                      createVNode(VDivider, { class: "my-4" }),
                                      createVNode(VRow, null, {
                                        default: withCtx(() => [
                                          createVNode(VCol, { cols: "12" }, {
                                            default: withCtx(() => [
                                              createVNode("div", { class: "mb-4" }, [
                                                createVNode("div", { class: "text-caption text-medium-emphasis" }, "\u0E40\u0E23\u0E37\u0E48\u0E2D\u0E07"),
                                                createVNode("div", { class: "text-body-1" }, toDisplayString(unref(memoStore).currentMemo.subject || "-"), 1)
                                              ])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, { cols: "12" }, {
                                            default: withCtx(() => [
                                              createVNode("div", { class: "mb-4" }, [
                                                createVNode("div", { class: "text-caption text-medium-emphasis" }, "\u0E23\u0E32\u0E22\u0E25\u0E30\u0E40\u0E2D\u0E35\u0E22\u0E14"),
                                                createVNode("div", { class: "text-body-1" }, toDisplayString(unref(memoStore).currentMemo.details || "-"), 1)
                                              ])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, { cols: "12" }, {
                                            default: withCtx(() => [
                                              createVNode("div", { class: "mb-4" }, [
                                                createVNode("div", { class: "text-caption text-medium-emphasis" }, "\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21/\u0E40\u0E19\u0E37\u0E49\u0E2D\u0E2B\u0E32"),
                                                createVNode("div", {
                                                  class: "text-body-1",
                                                  style: { "white-space": "pre-wrap" }
                                                }, toDisplayString(unref(memoStore).currentMemo.message || "-"), 1)
                                              ])
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VDivider, { class: "my-4" }),
                                      createVNode("div", { class: "d-flex gap-2" }, [
                                        createVNode(VBtn, {
                                          color: "success",
                                          onClick: handleExportPdf
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VIcon, { start: "" }, {
                                              default: withCtx(() => [
                                                createTextVNode(" mdi-file-pdf-box ")
                                              ]),
                                              _: 1
                                            }),
                                            createTextVNode(" Export PDF ")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VBtn, {
                                          color: "primary",
                                          variant: "outlined",
                                          onClick: toggleEditMode
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VIcon, { start: "" }, {
                                              default: withCtx(() => [
                                                createTextVNode(" mdi-pencil ")
                                              ]),
                                              _: 1
                                            }),
                                            createTextVNode(" \u0E41\u0E01\u0E49\u0E44\u0E02 ")
                                          ]),
                                          _: 1
                                        })
                                      ])
                                    ]),
                                    _: 1
                                  })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(VCard, null, {
                              default: withCtx(() => [
                                createVNode(VCardText, null, {
                                  default: withCtx(() => [
                                    createVNode(VRow, null, {
                                      default: withCtx(() => [
                                        createVNode(VCol, {
                                          cols: "12",
                                          md: "6"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode("div", { class: "mb-4" }, [
                                              createVNode("div", { class: "text-caption text-medium-emphasis" }, "\u0E08\u0E32\u0E01 (From)"),
                                              createVNode("div", { class: "text-body-1" }, toDisplayString(unref(memoStore).currentMemo.from || "-"), 1)
                                            ])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, {
                                          cols: "12",
                                          md: "6"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode("div", { class: "mb-4" }, [
                                              createVNode("div", { class: "text-caption text-medium-emphasis" }, "\u0E16\u0E36\u0E07 (To)"),
                                              createVNode("div", { class: "text-body-1" }, toDisplayString(unref(memoStore).currentMemo.to || "-"), 1)
                                            ])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, {
                                          cols: "12",
                                          md: "6"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode("div", { class: "mb-4" }, [
                                              createVNode("div", { class: "text-caption text-medium-emphasis" }, "\u0E2A\u0E33\u0E40\u0E19\u0E32 (CC)"),
                                              createVNode("div", { class: "text-body-1" }, toDisplayString(unref(memoStore).currentMemo.cc || "-"), 1)
                                            ])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, {
                                          cols: "12",
                                          md: "3"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode("div", { class: "mb-4" }, [
                                              createVNode("div", { class: "text-caption text-medium-emphasis" }, "\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48"),
                                              createVNode("div", { class: "text-body-1" }, toDisplayString(formatDate(unref(memoStore).currentMemo.date)), 1)
                                            ])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, {
                                          cols: "12",
                                          md: "3"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode("div", { class: "mb-4" }, [
                                              createVNode("div", { class: "text-caption text-medium-emphasis" }, "\u0E40\u0E25\u0E02\u0E17\u0E35\u0E48\u0E40\u0E2D\u0E01\u0E2A\u0E32\u0E23"),
                                              createVNode("div", { class: "text-body-1" }, toDisplayString(unref(memoStore).currentMemo.documentNumber || "-"), 1)
                                            ])
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VDivider, { class: "my-4" }),
                                    createVNode("div", { class: "mb-4" }, [
                                      createVNode("div", { class: "text-subtitle-2 mb-2" }, "\u0E27\u0E31\u0E15\u0E16\u0E38\u0E1B\u0E23\u0E30\u0E2A\u0E07\u0E04\u0E4C:"),
                                      createVNode("div", { class: "d-flex flex-wrap gap-2" }, [
                                        unref(memoStore).currentMemo.purposes.consider ? (openBlock(), createBlock(VChip, {
                                          key: 0,
                                          color: "primary",
                                          size: "small"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" \u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E1E\u0E34\u0E08\u0E32\u0E23\u0E13\u0E32 ")
                                          ]),
                                          _: 1
                                        })) : createCommentVNode("", true),
                                        unref(memoStore).currentMemo.purposes.know ? (openBlock(), createBlock(VChip, {
                                          key: 1,
                                          color: "info",
                                          size: "small"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" \u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E17\u0E23\u0E32\u0E1A ")
                                          ]),
                                          _: 1
                                        })) : createCommentVNode("", true),
                                        unref(memoStore).currentMemo.purposes.issueCommand ? (openBlock(), createBlock(VChip, {
                                          key: 2,
                                          color: "warning",
                                          size: "small"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" \u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E2D\u0E2D\u0E01\u0E04\u0E33\u0E2A\u0E31\u0E48\u0E07 ")
                                          ]),
                                          _: 1
                                        })) : createCommentVNode("", true),
                                        unref(memoStore).currentMemo.purposes.continue ? (openBlock(), createBlock(VChip, {
                                          key: 3,
                                          color: "success",
                                          size: "small"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" \u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E14\u0E33\u0E40\u0E19\u0E34\u0E19\u0E01\u0E32\u0E23 ")
                                          ]),
                                          _: 1
                                        })) : createCommentVNode("", true),
                                        !hasAnyPurpose.value ? (openBlock(), createBlock("span", {
                                          key: 4,
                                          class: "text-medium-emphasis"
                                        }, "-")) : createCommentVNode("", true)
                                      ])
                                    ]),
                                    createVNode("div", { class: "mb-4" }, [
                                      createVNode("div", { class: "text-subtitle-2 mb-2" }, "\u0E01\u0E32\u0E23\u0E14\u0E33\u0E40\u0E19\u0E34\u0E19\u0E01\u0E32\u0E23:"),
                                      createVNode("div", { class: "d-flex flex-wrap gap-2" }, [
                                        unref(memoStore).currentMemo.actions.follow ? (openBlock(), createBlock(VChip, {
                                          key: 0,
                                          size: "small"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode("\u0E1B\u0E0F\u0E34\u0E1A\u0E31\u0E15\u0E34\u0E15\u0E32\u0E21")
                                          ]),
                                          _: 1
                                        })) : createCommentVNode("", true),
                                        unref(memoStore).currentMemo.actions.considerReturn ? (openBlock(), createBlock(VChip, {
                                          key: 1,
                                          size: "small"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" \u0E1E\u0E34\u0E08\u0E32\u0E23\u0E13\u0E32\u0E41\u0E25\u0E49\u0E27\u0E2A\u0E48\u0E07\u0E04\u0E37\u0E19")
                                          ]),
                                          _: 1
                                        })) : createCommentVNode("", true),
                                        unref(memoStore).currentMemo.actions.copyStores ? (openBlock(), createBlock(VChip, {
                                          key: 2,
                                          size: "small"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode("\u0E16\u0E48\u0E32\u0E22\u0E2A\u0E33\u0E40\u0E19\u0E32\u0E40\u0E01\u0E47\u0E1A\u0E44\u0E27\u0E49 ")
                                          ]),
                                          _: 1
                                        })) : createCommentVNode("", true),
                                        unref(memoStore).currentMemo.actions.returnCopies ? (openBlock(), createBlock(VChip, {
                                          key: 3,
                                          size: "small"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode("\u0E2A\u0E48\u0E07\u0E2A\u0E33\u0E40\u0E19\u0E32\u0E04\u0E37\u0E19 ")
                                          ]),
                                          _: 1
                                        })) : createCommentVNode("", true),
                                        unref(memoStore).currentMemo.actions.forApproval ? (openBlock(), createBlock(VChip, {
                                          key: 4,
                                          size: "small"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode("\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E2D\u0E19\u0E38\u0E21\u0E31\u0E15\u0E34 ")
                                          ]),
                                          _: 1
                                        })) : createCommentVNode("", true),
                                        unref(memoStore).currentMemo.actions.toConsider ? (openBlock(), createBlock(VChip, {
                                          key: 5,
                                          size: "small"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode("\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E1E\u0E34\u0E08\u0E32\u0E23\u0E13\u0E32 ")
                                          ]),
                                          _: 1
                                        })) : createCommentVNode("", true),
                                        unref(memoStore).currentMemo.actions.toKnow ? (openBlock(), createBlock(VChip, {
                                          key: 6,
                                          size: "small"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode("\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E17\u0E23\u0E32\u0E1A")
                                          ]),
                                          _: 1
                                        })) : createCommentVNode("", true),
                                        unref(memoStore).currentMemo.actions.other ? (openBlock(), createBlock(VChip, {
                                          key: 7,
                                          size: "small"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" \u0E2D\u0E37\u0E48\u0E19\u0E46: " + toDisplayString(unref(memoStore).currentMemo.otherAction), 1)
                                          ]),
                                          _: 1
                                        })) : createCommentVNode("", true),
                                        !hasAnyAction.value ? (openBlock(), createBlock("span", {
                                          key: 8,
                                          class: "text-medium-emphasis"
                                        }, "-")) : createCommentVNode("", true)
                                      ])
                                    ]),
                                    createVNode(VDivider, { class: "my-4" }),
                                    createVNode(VRow, null, {
                                      default: withCtx(() => [
                                        createVNode(VCol, { cols: "12" }, {
                                          default: withCtx(() => [
                                            createVNode("div", { class: "mb-4" }, [
                                              createVNode("div", { class: "text-caption text-medium-emphasis" }, "\u0E40\u0E23\u0E37\u0E48\u0E2D\u0E07"),
                                              createVNode("div", { class: "text-body-1" }, toDisplayString(unref(memoStore).currentMemo.subject || "-"), 1)
                                            ])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, { cols: "12" }, {
                                          default: withCtx(() => [
                                            createVNode("div", { class: "mb-4" }, [
                                              createVNode("div", { class: "text-caption text-medium-emphasis" }, "\u0E23\u0E32\u0E22\u0E25\u0E30\u0E40\u0E2D\u0E35\u0E22\u0E14"),
                                              createVNode("div", { class: "text-body-1" }, toDisplayString(unref(memoStore).currentMemo.details || "-"), 1)
                                            ])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, { cols: "12" }, {
                                          default: withCtx(() => [
                                            createVNode("div", { class: "mb-4" }, [
                                              createVNode("div", { class: "text-caption text-medium-emphasis" }, "\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21/\u0E40\u0E19\u0E37\u0E49\u0E2D\u0E2B\u0E32"),
                                              createVNode("div", {
                                                class: "text-body-1",
                                                style: { "white-space": "pre-wrap" }
                                              }, toDisplayString(unref(memoStore).currentMemo.message || "-"), 1)
                                            ])
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VDivider, { class: "my-4" }),
                                    createVNode("div", { class: "d-flex gap-2" }, [
                                      createVNode(VBtn, {
                                        color: "success",
                                        onClick: handleExportPdf
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VIcon, { start: "" }, {
                                            default: withCtx(() => [
                                              createTextVNode(" mdi-file-pdf-box ")
                                            ]),
                                            _: 1
                                          }),
                                          createTextVNode(" Export PDF ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VBtn, {
                                        color: "primary",
                                        variant: "outlined",
                                        onClick: toggleEditMode
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VIcon, { start: "" }, {
                                            default: withCtx(() => [
                                              createTextVNode(" mdi-pencil ")
                                            ]),
                                            _: 1
                                          }),
                                          createTextVNode(" \u0E41\u0E01\u0E49\u0E44\u0E02 ")
                                        ]),
                                        _: 1
                                      })
                                    ])
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
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(VCol, { cols: "12" }, {
                        default: withCtx(() => [
                          createVNode(VCard, null, {
                            default: withCtx(() => [
                              createVNode(VCardText, null, {
                                default: withCtx(() => [
                                  createVNode(VRow, null, {
                                    default: withCtx(() => [
                                      createVNode(VCol, {
                                        cols: "12",
                                        md: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "mb-4" }, [
                                            createVNode("div", { class: "text-caption text-medium-emphasis" }, "\u0E08\u0E32\u0E01 (From)"),
                                            createVNode("div", { class: "text-body-1" }, toDisplayString(unref(memoStore).currentMemo.from || "-"), 1)
                                          ])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        md: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "mb-4" }, [
                                            createVNode("div", { class: "text-caption text-medium-emphasis" }, "\u0E16\u0E36\u0E07 (To)"),
                                            createVNode("div", { class: "text-body-1" }, toDisplayString(unref(memoStore).currentMemo.to || "-"), 1)
                                          ])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        md: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "mb-4" }, [
                                            createVNode("div", { class: "text-caption text-medium-emphasis" }, "\u0E2A\u0E33\u0E40\u0E19\u0E32 (CC)"),
                                            createVNode("div", { class: "text-body-1" }, toDisplayString(unref(memoStore).currentMemo.cc || "-"), 1)
                                          ])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        md: "3"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "mb-4" }, [
                                            createVNode("div", { class: "text-caption text-medium-emphasis" }, "\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48"),
                                            createVNode("div", { class: "text-body-1" }, toDisplayString(formatDate(unref(memoStore).currentMemo.date)), 1)
                                          ])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        md: "3"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "mb-4" }, [
                                            createVNode("div", { class: "text-caption text-medium-emphasis" }, "\u0E40\u0E25\u0E02\u0E17\u0E35\u0E48\u0E40\u0E2D\u0E01\u0E2A\u0E32\u0E23"),
                                            createVNode("div", { class: "text-body-1" }, toDisplayString(unref(memoStore).currentMemo.documentNumber || "-"), 1)
                                          ])
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VDivider, { class: "my-4" }),
                                  createVNode("div", { class: "mb-4" }, [
                                    createVNode("div", { class: "text-subtitle-2 mb-2" }, "\u0E27\u0E31\u0E15\u0E16\u0E38\u0E1B\u0E23\u0E30\u0E2A\u0E07\u0E04\u0E4C:"),
                                    createVNode("div", { class: "d-flex flex-wrap gap-2" }, [
                                      unref(memoStore).currentMemo.purposes.consider ? (openBlock(), createBlock(VChip, {
                                        key: 0,
                                        color: "primary",
                                        size: "small"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" \u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E1E\u0E34\u0E08\u0E32\u0E23\u0E13\u0E32 ")
                                        ]),
                                        _: 1
                                      })) : createCommentVNode("", true),
                                      unref(memoStore).currentMemo.purposes.know ? (openBlock(), createBlock(VChip, {
                                        key: 1,
                                        color: "info",
                                        size: "small"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" \u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E17\u0E23\u0E32\u0E1A ")
                                        ]),
                                        _: 1
                                      })) : createCommentVNode("", true),
                                      unref(memoStore).currentMemo.purposes.issueCommand ? (openBlock(), createBlock(VChip, {
                                        key: 2,
                                        color: "warning",
                                        size: "small"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" \u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E2D\u0E2D\u0E01\u0E04\u0E33\u0E2A\u0E31\u0E48\u0E07 ")
                                        ]),
                                        _: 1
                                      })) : createCommentVNode("", true),
                                      unref(memoStore).currentMemo.purposes.continue ? (openBlock(), createBlock(VChip, {
                                        key: 3,
                                        color: "success",
                                        size: "small"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" \u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E14\u0E33\u0E40\u0E19\u0E34\u0E19\u0E01\u0E32\u0E23 ")
                                        ]),
                                        _: 1
                                      })) : createCommentVNode("", true),
                                      !hasAnyPurpose.value ? (openBlock(), createBlock("span", {
                                        key: 4,
                                        class: "text-medium-emphasis"
                                      }, "-")) : createCommentVNode("", true)
                                    ])
                                  ]),
                                  createVNode("div", { class: "mb-4" }, [
                                    createVNode("div", { class: "text-subtitle-2 mb-2" }, "\u0E01\u0E32\u0E23\u0E14\u0E33\u0E40\u0E19\u0E34\u0E19\u0E01\u0E32\u0E23:"),
                                    createVNode("div", { class: "d-flex flex-wrap gap-2" }, [
                                      unref(memoStore).currentMemo.actions.follow ? (openBlock(), createBlock(VChip, {
                                        key: 0,
                                        size: "small"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("\u0E1B\u0E0F\u0E34\u0E1A\u0E31\u0E15\u0E34\u0E15\u0E32\u0E21")
                                        ]),
                                        _: 1
                                      })) : createCommentVNode("", true),
                                      unref(memoStore).currentMemo.actions.considerReturn ? (openBlock(), createBlock(VChip, {
                                        key: 1,
                                        size: "small"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" \u0E1E\u0E34\u0E08\u0E32\u0E23\u0E13\u0E32\u0E41\u0E25\u0E49\u0E27\u0E2A\u0E48\u0E07\u0E04\u0E37\u0E19")
                                        ]),
                                        _: 1
                                      })) : createCommentVNode("", true),
                                      unref(memoStore).currentMemo.actions.copyStores ? (openBlock(), createBlock(VChip, {
                                        key: 2,
                                        size: "small"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("\u0E16\u0E48\u0E32\u0E22\u0E2A\u0E33\u0E40\u0E19\u0E32\u0E40\u0E01\u0E47\u0E1A\u0E44\u0E27\u0E49 ")
                                        ]),
                                        _: 1
                                      })) : createCommentVNode("", true),
                                      unref(memoStore).currentMemo.actions.returnCopies ? (openBlock(), createBlock(VChip, {
                                        key: 3,
                                        size: "small"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("\u0E2A\u0E48\u0E07\u0E2A\u0E33\u0E40\u0E19\u0E32\u0E04\u0E37\u0E19 ")
                                        ]),
                                        _: 1
                                      })) : createCommentVNode("", true),
                                      unref(memoStore).currentMemo.actions.forApproval ? (openBlock(), createBlock(VChip, {
                                        key: 4,
                                        size: "small"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E2D\u0E19\u0E38\u0E21\u0E31\u0E15\u0E34 ")
                                        ]),
                                        _: 1
                                      })) : createCommentVNode("", true),
                                      unref(memoStore).currentMemo.actions.toConsider ? (openBlock(), createBlock(VChip, {
                                        key: 5,
                                        size: "small"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E1E\u0E34\u0E08\u0E32\u0E23\u0E13\u0E32 ")
                                        ]),
                                        _: 1
                                      })) : createCommentVNode("", true),
                                      unref(memoStore).currentMemo.actions.toKnow ? (openBlock(), createBlock(VChip, {
                                        key: 6,
                                        size: "small"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E17\u0E23\u0E32\u0E1A")
                                        ]),
                                        _: 1
                                      })) : createCommentVNode("", true),
                                      unref(memoStore).currentMemo.actions.other ? (openBlock(), createBlock(VChip, {
                                        key: 7,
                                        size: "small"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" \u0E2D\u0E37\u0E48\u0E19\u0E46: " + toDisplayString(unref(memoStore).currentMemo.otherAction), 1)
                                        ]),
                                        _: 1
                                      })) : createCommentVNode("", true),
                                      !hasAnyAction.value ? (openBlock(), createBlock("span", {
                                        key: 8,
                                        class: "text-medium-emphasis"
                                      }, "-")) : createCommentVNode("", true)
                                    ])
                                  ]),
                                  createVNode(VDivider, { class: "my-4" }),
                                  createVNode(VRow, null, {
                                    default: withCtx(() => [
                                      createVNode(VCol, { cols: "12" }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "mb-4" }, [
                                            createVNode("div", { class: "text-caption text-medium-emphasis" }, "\u0E40\u0E23\u0E37\u0E48\u0E2D\u0E07"),
                                            createVNode("div", { class: "text-body-1" }, toDisplayString(unref(memoStore).currentMemo.subject || "-"), 1)
                                          ])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, { cols: "12" }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "mb-4" }, [
                                            createVNode("div", { class: "text-caption text-medium-emphasis" }, "\u0E23\u0E32\u0E22\u0E25\u0E30\u0E40\u0E2D\u0E35\u0E22\u0E14"),
                                            createVNode("div", { class: "text-body-1" }, toDisplayString(unref(memoStore).currentMemo.details || "-"), 1)
                                          ])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, { cols: "12" }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "mb-4" }, [
                                            createVNode("div", { class: "text-caption text-medium-emphasis" }, "\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21/\u0E40\u0E19\u0E37\u0E49\u0E2D\u0E2B\u0E32"),
                                            createVNode("div", {
                                              class: "text-body-1",
                                              style: { "white-space": "pre-wrap" }
                                            }, toDisplayString(unref(memoStore).currentMemo.message || "-"), 1)
                                          ])
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VDivider, { class: "my-4" }),
                                  createVNode("div", { class: "d-flex gap-2" }, [
                                    createVNode(VBtn, {
                                      color: "success",
                                      onClick: handleExportPdf
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VIcon, { start: "" }, {
                                          default: withCtx(() => [
                                            createTextVNode(" mdi-file-pdf-box ")
                                          ]),
                                          _: 1
                                        }),
                                        createTextVNode(" Export PDF ")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VBtn, {
                                      color: "primary",
                                      variant: "outlined",
                                      onClick: toggleEditMode
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VIcon, { start: "" }, {
                                          default: withCtx(() => [
                                            createTextVNode(" mdi-pencil ")
                                          ]),
                                          _: 1
                                        }),
                                        createTextVNode(" \u0E41\u0E01\u0E49\u0E44\u0E02 ")
                                      ]),
                                      _: 1
                                    })
                                  ])
                                ]),
                                _: 1
                              })
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
              }, _parent2, _scopeId));
            } else {
              _push2(ssrRenderComponent(VRow, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(VCol, { cols: "12" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_sfc_main$1, {
                            memo: unref(memoStore).currentMemo,
                            "is-saved": true,
                            onSave: handleSave,
                            onExportPdf: handleExportPdf,
                            onReset: handleReset
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_sfc_main$1, {
                              memo: unref(memoStore).currentMemo,
                              "is-saved": true,
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
                            "is-saved": true,
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
            }
          } else {
            return [
              createVNode(_component_Breadcrumbs, {
                items: [
                  { text: "\u0E43\u0E1A\u0E02\u0E2D\u0E0B\u0E37\u0E49\u0E2D", to: "/memo", icon: "bx-file" },
                  { text: isViewMode.value ? "\u0E14\u0E39\u0E43\u0E1A\u0E02\u0E2D\u0E0B\u0E37\u0E49\u0E2D" : "\u0E41\u0E01\u0E49\u0E44\u0E02\u0E43\u0E1A\u0E02\u0E2D\u0E0B\u0E37\u0E49\u0E2D", icon: isViewMode.value ? "bx-show" : "bx-edit" }
                ],
                "show-home": true
              }, null, 8, ["items"]),
              createVNode(VRow, null, {
                default: withCtx(() => [
                  createVNode(VCol, { cols: "12" }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "d-flex justify-space-between align-center mb-4" }, [
                        createVNode("div", null, [
                          createVNode("h1", { class: "text-h4 font-weight-bold" }, toDisplayString(isViewMode.value ? "\u0E14\u0E39\u0E43\u0E1A\u0E02\u0E2D\u0E0B\u0E37\u0E49\u0E2D" : "\u0E41\u0E01\u0E49\u0E44\u0E02\u0E43\u0E1A\u0E02\u0E2D\u0E0B\u0E37\u0E49\u0E2D"), 1),
                          createVNode("p", { class: "text-subtitle-1 text-medium-emphasis" }, toDisplayString(unref(memoStore).currentMemo.subject || "\u0E44\u0E21\u0E48\u0E21\u0E35\u0E2B\u0E31\u0E27\u0E02\u0E49\u0E2D"), 1)
                        ]),
                        createVNode("div", { class: "d-flex gap-2" }, [
                          isViewMode.value ? (openBlock(), createBlock(VBtn, {
                            key: 0,
                            color: "primary",
                            onClick: toggleEditMode
                          }, {
                            default: withCtx(() => [
                              createVNode(VIcon, { start: "" }, {
                                default: withCtx(() => [
                                  createTextVNode(" bx-edit ")
                                ]),
                                _: 1
                              }),
                              createTextVNode(" \u0E41\u0E01\u0E49\u0E44\u0E02 ")
                            ]),
                            _: 1
                          })) : createCommentVNode("", true),
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
                      ])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              isViewMode.value ? (openBlock(), createBlock(VRow, { key: 0 }, {
                default: withCtx(() => [
                  createVNode(VCol, { cols: "12" }, {
                    default: withCtx(() => [
                      createVNode(VCard, null, {
                        default: withCtx(() => [
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createVNode(VRow, null, {
                                default: withCtx(() => [
                                  createVNode(VCol, {
                                    cols: "12",
                                    md: "6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "mb-4" }, [
                                        createVNode("div", { class: "text-caption text-medium-emphasis" }, "\u0E08\u0E32\u0E01 (From)"),
                                        createVNode("div", { class: "text-body-1" }, toDisplayString(unref(memoStore).currentMemo.from || "-"), 1)
                                      ])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    md: "6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "mb-4" }, [
                                        createVNode("div", { class: "text-caption text-medium-emphasis" }, "\u0E16\u0E36\u0E07 (To)"),
                                        createVNode("div", { class: "text-body-1" }, toDisplayString(unref(memoStore).currentMemo.to || "-"), 1)
                                      ])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    md: "6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "mb-4" }, [
                                        createVNode("div", { class: "text-caption text-medium-emphasis" }, "\u0E2A\u0E33\u0E40\u0E19\u0E32 (CC)"),
                                        createVNode("div", { class: "text-body-1" }, toDisplayString(unref(memoStore).currentMemo.cc || "-"), 1)
                                      ])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    md: "3"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "mb-4" }, [
                                        createVNode("div", { class: "text-caption text-medium-emphasis" }, "\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48"),
                                        createVNode("div", { class: "text-body-1" }, toDisplayString(formatDate(unref(memoStore).currentMemo.date)), 1)
                                      ])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    md: "3"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "mb-4" }, [
                                        createVNode("div", { class: "text-caption text-medium-emphasis" }, "\u0E40\u0E25\u0E02\u0E17\u0E35\u0E48\u0E40\u0E2D\u0E01\u0E2A\u0E32\u0E23"),
                                        createVNode("div", { class: "text-body-1" }, toDisplayString(unref(memoStore).currentMemo.documentNumber || "-"), 1)
                                      ])
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(VDivider, { class: "my-4" }),
                              createVNode("div", { class: "mb-4" }, [
                                createVNode("div", { class: "text-subtitle-2 mb-2" }, "\u0E27\u0E31\u0E15\u0E16\u0E38\u0E1B\u0E23\u0E30\u0E2A\u0E07\u0E04\u0E4C:"),
                                createVNode("div", { class: "d-flex flex-wrap gap-2" }, [
                                  unref(memoStore).currentMemo.purposes.consider ? (openBlock(), createBlock(VChip, {
                                    key: 0,
                                    color: "primary",
                                    size: "small"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" \u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E1E\u0E34\u0E08\u0E32\u0E23\u0E13\u0E32 ")
                                    ]),
                                    _: 1
                                  })) : createCommentVNode("", true),
                                  unref(memoStore).currentMemo.purposes.know ? (openBlock(), createBlock(VChip, {
                                    key: 1,
                                    color: "info",
                                    size: "small"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" \u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E17\u0E23\u0E32\u0E1A ")
                                    ]),
                                    _: 1
                                  })) : createCommentVNode("", true),
                                  unref(memoStore).currentMemo.purposes.issueCommand ? (openBlock(), createBlock(VChip, {
                                    key: 2,
                                    color: "warning",
                                    size: "small"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" \u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E2D\u0E2D\u0E01\u0E04\u0E33\u0E2A\u0E31\u0E48\u0E07 ")
                                    ]),
                                    _: 1
                                  })) : createCommentVNode("", true),
                                  unref(memoStore).currentMemo.purposes.continue ? (openBlock(), createBlock(VChip, {
                                    key: 3,
                                    color: "success",
                                    size: "small"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" \u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E14\u0E33\u0E40\u0E19\u0E34\u0E19\u0E01\u0E32\u0E23 ")
                                    ]),
                                    _: 1
                                  })) : createCommentVNode("", true),
                                  !hasAnyPurpose.value ? (openBlock(), createBlock("span", {
                                    key: 4,
                                    class: "text-medium-emphasis"
                                  }, "-")) : createCommentVNode("", true)
                                ])
                              ]),
                              createVNode("div", { class: "mb-4" }, [
                                createVNode("div", { class: "text-subtitle-2 mb-2" }, "\u0E01\u0E32\u0E23\u0E14\u0E33\u0E40\u0E19\u0E34\u0E19\u0E01\u0E32\u0E23:"),
                                createVNode("div", { class: "d-flex flex-wrap gap-2" }, [
                                  unref(memoStore).currentMemo.actions.follow ? (openBlock(), createBlock(VChip, {
                                    key: 0,
                                    size: "small"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u0E1B\u0E0F\u0E34\u0E1A\u0E31\u0E15\u0E34\u0E15\u0E32\u0E21")
                                    ]),
                                    _: 1
                                  })) : createCommentVNode("", true),
                                  unref(memoStore).currentMemo.actions.considerReturn ? (openBlock(), createBlock(VChip, {
                                    key: 1,
                                    size: "small"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" \u0E1E\u0E34\u0E08\u0E32\u0E23\u0E13\u0E32\u0E41\u0E25\u0E49\u0E27\u0E2A\u0E48\u0E07\u0E04\u0E37\u0E19")
                                    ]),
                                    _: 1
                                  })) : createCommentVNode("", true),
                                  unref(memoStore).currentMemo.actions.copyStores ? (openBlock(), createBlock(VChip, {
                                    key: 2,
                                    size: "small"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u0E16\u0E48\u0E32\u0E22\u0E2A\u0E33\u0E40\u0E19\u0E32\u0E40\u0E01\u0E47\u0E1A\u0E44\u0E27\u0E49 ")
                                    ]),
                                    _: 1
                                  })) : createCommentVNode("", true),
                                  unref(memoStore).currentMemo.actions.returnCopies ? (openBlock(), createBlock(VChip, {
                                    key: 3,
                                    size: "small"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u0E2A\u0E48\u0E07\u0E2A\u0E33\u0E40\u0E19\u0E32\u0E04\u0E37\u0E19 ")
                                    ]),
                                    _: 1
                                  })) : createCommentVNode("", true),
                                  unref(memoStore).currentMemo.actions.forApproval ? (openBlock(), createBlock(VChip, {
                                    key: 4,
                                    size: "small"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E2D\u0E19\u0E38\u0E21\u0E31\u0E15\u0E34 ")
                                    ]),
                                    _: 1
                                  })) : createCommentVNode("", true),
                                  unref(memoStore).currentMemo.actions.toConsider ? (openBlock(), createBlock(VChip, {
                                    key: 5,
                                    size: "small"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E1E\u0E34\u0E08\u0E32\u0E23\u0E13\u0E32 ")
                                    ]),
                                    _: 1
                                  })) : createCommentVNode("", true),
                                  unref(memoStore).currentMemo.actions.toKnow ? (openBlock(), createBlock(VChip, {
                                    key: 6,
                                    size: "small"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E17\u0E23\u0E32\u0E1A")
                                    ]),
                                    _: 1
                                  })) : createCommentVNode("", true),
                                  unref(memoStore).currentMemo.actions.other ? (openBlock(), createBlock(VChip, {
                                    key: 7,
                                    size: "small"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" \u0E2D\u0E37\u0E48\u0E19\u0E46: " + toDisplayString(unref(memoStore).currentMemo.otherAction), 1)
                                    ]),
                                    _: 1
                                  })) : createCommentVNode("", true),
                                  !hasAnyAction.value ? (openBlock(), createBlock("span", {
                                    key: 8,
                                    class: "text-medium-emphasis"
                                  }, "-")) : createCommentVNode("", true)
                                ])
                              ]),
                              createVNode(VDivider, { class: "my-4" }),
                              createVNode(VRow, null, {
                                default: withCtx(() => [
                                  createVNode(VCol, { cols: "12" }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "mb-4" }, [
                                        createVNode("div", { class: "text-caption text-medium-emphasis" }, "\u0E40\u0E23\u0E37\u0E48\u0E2D\u0E07"),
                                        createVNode("div", { class: "text-body-1" }, toDisplayString(unref(memoStore).currentMemo.subject || "-"), 1)
                                      ])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, { cols: "12" }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "mb-4" }, [
                                        createVNode("div", { class: "text-caption text-medium-emphasis" }, "\u0E23\u0E32\u0E22\u0E25\u0E30\u0E40\u0E2D\u0E35\u0E22\u0E14"),
                                        createVNode("div", { class: "text-body-1" }, toDisplayString(unref(memoStore).currentMemo.details || "-"), 1)
                                      ])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, { cols: "12" }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "mb-4" }, [
                                        createVNode("div", { class: "text-caption text-medium-emphasis" }, "\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21/\u0E40\u0E19\u0E37\u0E49\u0E2D\u0E2B\u0E32"),
                                        createVNode("div", {
                                          class: "text-body-1",
                                          style: { "white-space": "pre-wrap" }
                                        }, toDisplayString(unref(memoStore).currentMemo.message || "-"), 1)
                                      ])
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(VDivider, { class: "my-4" }),
                              createVNode("div", { class: "d-flex gap-2" }, [
                                createVNode(VBtn, {
                                  color: "success",
                                  onClick: handleExportPdf
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VIcon, { start: "" }, {
                                      default: withCtx(() => [
                                        createTextVNode(" mdi-file-pdf-box ")
                                      ]),
                                      _: 1
                                    }),
                                    createTextVNode(" Export PDF ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VBtn, {
                                  color: "primary",
                                  variant: "outlined",
                                  onClick: toggleEditMode
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VIcon, { start: "" }, {
                                      default: withCtx(() => [
                                        createTextVNode(" mdi-pencil ")
                                      ]),
                                      _: 1
                                    }),
                                    createTextVNode(" \u0E41\u0E01\u0E49\u0E44\u0E02 ")
                                  ]),
                                  _: 1
                                })
                              ])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })) : (openBlock(), createBlock(VRow, { key: 1 }, {
                default: withCtx(() => [
                  createVNode(VCol, { cols: "12" }, {
                    default: withCtx(() => [
                      createVNode(_sfc_main$1, {
                        memo: unref(memoStore).currentMemo,
                        "is-saved": true,
                        onSave: handleSave,
                        onExportPdf: handleExportPdf,
                        onReset: handleReset
                      }, null, 8, ["memo"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/memo/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
