import { useSSRContext, defineComponent, ref, withCtx, createVNode, unref, createTextVNode, toDisplayString, withModifiers, openBlock, createBlock, Fragment, renderList } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { _ as _sfc_main$1 } from './MemoForm-OFhb7Eer.mjs';
import { u as useMemoStore, V as VContainer, M as MemoPdfExport } from './memo-C_jS_Qbz.mjs';
import { V as VRow, a as VCol } from './VRow-zuLeAiTc.mjs';
import { V as VCard, c as VCardTitle, a as VCardText } from './VCard-CSiTQXcr.mjs';
import { V as VChip } from './VChip-DBW6TD_X.mjs';
import { V as VDivider } from './VDivider-LYYZi4vy.mjs';
import { _ as _export_sfc, V as VIcon, a as VBtn } from './server.mjs';
import { V as VList, a as VListItem, b as VListItemTitle, c as VListItemSubtitle } from './VList-DCeFvVa6.mjs';
import { V as VTooltip } from './VTooltip-CRp9Z0Ps.mjs';
import { V as VSnackbar } from './VSnackbar-DZIKnoSv.mjs';
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
import 'pinia';
import './VAvatar-BWioJSAV.mjs';
import './VSlideGroup-C5ipntF0.mjs';
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
import 'vue-router';
import './ssrBoot-BtvJZs44.mjs';
import './VOverlay-B9V9YqYJ.mjs';
import './scopeId-b3c5ZUEe.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "purchase-request",
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
    const formatDate = (dateString) => {
      if (!dateString) return "";
      const date = new Date(dateString);
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear() + 543;
      return `${day}/${month}/${year}`;
    };
    const handleSave = () => {
      try {
        const memoId = memoStore.saveMemo();
        showSnackbar("\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08!", "success");
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
      if (confirm("\u0E04\u0E38\u0E13\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E23\u0E35\u0E40\u0E0B\u0E47\u0E15\u0E1F\u0E2D\u0E23\u0E4C\u0E21\u0E2B\u0E23\u0E37\u0E2D\u0E44\u0E21\u0E48?")) {
        memoStore.resetCurrentMemo();
        showSnackbar("\u0E23\u0E35\u0E40\u0E0B\u0E47\u0E15\u0E1F\u0E2D\u0E23\u0E4C\u0E21\u0E41\u0E25\u0E49\u0E27", "info");
      }
    };
    const handleLoadMemo = (id) => {
      memoStore.loadMemo(id);
      showSnackbar("\u0E42\u0E2B\u0E25\u0E14\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01\u0E41\u0E25\u0E49\u0E27", "info");
    };
    const handleExportMemo = async (id) => {
      var _a;
      try {
        const currentId = memoStore.currentMemo.id;
        memoStore.loadMemo(id);
        await ((_a = pdfExportRef.value) == null ? void 0 : _a.exportToPdf());
        if (currentId !== id && currentId) {
          memoStore.loadMemo(currentId);
        }
        showSnackbar("Export PDF \u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08!", "success");
      } catch (error) {
        console.error("Error exporting memo:", error);
        showSnackbar("\u0E40\u0E01\u0E34\u0E14\u0E02\u0E49\u0E2D\u0E1C\u0E34\u0E14\u0E1E\u0E25\u0E32\u0E14\u0E43\u0E19\u0E01\u0E32\u0E23 Export PDF", "error");
      }
    };
    const handleDeleteMemo = (id) => {
      if (confirm("\u0E04\u0E38\u0E13\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E25\u0E1A\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01\u0E19\u0E35\u0E49\u0E2B\u0E23\u0E37\u0E2D\u0E44\u0E21\u0E48?")) {
        memoStore.deleteMemo(id);
        if (memoStore.currentMemo.id === id) {
          memoStore.resetCurrentMemo();
        }
        showSnackbar("\u0E25\u0E1A\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01\u0E41\u0E25\u0E49\u0E27", "warning");
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-9249c969>`);
      _push(ssrRenderComponent(VContainer, { fluid: "" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VRow, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCol, { cols: "12" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="d-flex justify-space-between align-center mb-4" data-v-9249c969${_scopeId3}><div data-v-9249c969${_scopeId3}><h1 class="text-h4 font-weight-bold" data-v-9249c969${_scopeId3}> \u0E43\u0E1A\u0E02\u0E2D\u0E0B\u0E37\u0E49\u0E2D (Purchase Request Memo) </h1><p class="text-subtitle-1 text-medium-emphasis" data-v-9249c969${_scopeId3}> \u0E2A\u0E23\u0E49\u0E32\u0E07\u0E41\u0E25\u0E30\u0E08\u0E31\u0E14\u0E01\u0E32\u0E23\u0E43\u0E1A\u0E02\u0E2D\u0E0B\u0E37\u0E49\u0E2D\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13 </p></div></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "d-flex justify-space-between align-center mb-4" }, [
                            createVNode("div", null, [
                              createVNode("h1", { class: "text-h4 font-weight-bold" }, " \u0E43\u0E1A\u0E02\u0E2D\u0E0B\u0E37\u0E49\u0E2D (Purchase Request Memo) "),
                              createVNode("p", { class: "text-subtitle-1 text-medium-emphasis" }, " \u0E2A\u0E23\u0E49\u0E32\u0E07\u0E41\u0E25\u0E30\u0E08\u0E31\u0E14\u0E01\u0E32\u0E23\u0E43\u0E1A\u0E02\u0E2D\u0E0B\u0E37\u0E49\u0E2D\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13 ")
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
                            createVNode("h1", { class: "text-h4 font-weight-bold" }, " \u0E43\u0E1A\u0E02\u0E2D\u0E0B\u0E37\u0E49\u0E2D (Purchase Request Memo) "),
                            createVNode("p", { class: "text-subtitle-1 text-medium-emphasis" }, " \u0E2A\u0E23\u0E49\u0E32\u0E07\u0E41\u0E25\u0E30\u0E08\u0E31\u0E14\u0E01\u0E32\u0E23\u0E43\u0E1A\u0E02\u0E2D\u0E0B\u0E37\u0E49\u0E2D\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13 ")
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
            _push2(ssrRenderComponent(VRow, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    lg: "8"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_sfc_main$1, {
                          memo: unref(memoStore).currentMemo,
                          "is-saved": !!unref(memoStore).currentMemo.id,
                          onSave: handleSave,
                          onExportPdf: handleExportPdf,
                          onReset: handleReset
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_sfc_main$1, {
                            memo: unref(memoStore).currentMemo,
                            "is-saved": !!unref(memoStore).currentMemo.id,
                            onSave: handleSave,
                            onExportPdf: handleExportPdf,
                            onReset: handleReset
                          }, null, 8, ["memo", "is-saved"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    lg: "4"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCard, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCardTitle, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<div class="d-flex justify-space-between align-center" data-v-9249c969${_scopeId5}><span data-v-9249c969${_scopeId5}>\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01\u0E17\u0E35\u0E48\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01\u0E44\u0E27\u0E49</span>`);
                                    _push6(ssrRenderComponent(VChip, {
                                      color: "primary",
                                      size: "small"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`${ssrInterpolate(unref(memoStore).savedMemos.length)}`);
                                        } else {
                                          return [
                                            createTextVNode(toDisplayString(unref(memoStore).savedMemos.length), 1)
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(`</div>`);
                                  } else {
                                    return [
                                      createVNode("div", { class: "d-flex justify-space-between align-center" }, [
                                        createVNode("span", null, "\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01\u0E17\u0E35\u0E48\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01\u0E44\u0E27\u0E49"),
                                        createVNode(VChip, {
                                          color: "primary",
                                          size: "small"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(unref(memoStore).savedMemos.length), 1)
                                          ]),
                                          _: 1
                                        })
                                      ])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VDivider, null, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VCardText, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    if (unref(memoStore).savedMemos.length === 0) {
                                      _push6(`<div class="text-center text-medium-emphasis py-8" data-v-9249c969${_scopeId5}>`);
                                      _push6(ssrRenderComponent(VIcon, {
                                        size: "48",
                                        color: "grey-lighten-1"
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(` mdi-file-document-outline `);
                                          } else {
                                            return [
                                              createTextVNode(" mdi-file-document-outline ")
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(`<p class="mt-2" data-v-9249c969${_scopeId5}> \u0E22\u0E31\u0E07\u0E44\u0E21\u0E48\u0E21\u0E35\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01\u0E17\u0E35\u0E48\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01\u0E44\u0E27\u0E49 </p></div>`);
                                    } else {
                                      _push6(ssrRenderComponent(VList, { density: "compact" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`<!--[-->`);
                                            ssrRenderList(unref(memoStore).savedMemos, (memo) => {
                                              _push7(ssrRenderComponent(VListItem, {
                                                key: memo.id,
                                                class: { "bg-primary-lighten-5": memo.id === unref(memoStore).currentMemo.id },
                                                onClick: ($event) => handleLoadMemo(memo.id)
                                              }, {
                                                prepend: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                  if (_push8) {
                                                    _push8(ssrRenderComponent(VIcon, { color: "primary" }, {
                                                      default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                        if (_push9) {
                                                          _push9(` mdi-file-document `);
                                                        } else {
                                                          return [
                                                            createTextVNode(" mdi-file-document ")
                                                          ];
                                                        }
                                                      }),
                                                      _: 2
                                                    }, _parent8, _scopeId7));
                                                  } else {
                                                    return [
                                                      createVNode(VIcon, { color: "primary" }, {
                                                        default: withCtx(() => [
                                                          createTextVNode(" mdi-file-document ")
                                                        ]),
                                                        _: 1
                                                      })
                                                    ];
                                                  }
                                                }),
                                                append: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                  if (_push8) {
                                                    _push8(`<div class="d-flex gap-1" data-v-9249c969${_scopeId7}>`);
                                                    _push8(ssrRenderComponent(VBtn, {
                                                      icon: "",
                                                      size: "small",
                                                      variant: "text",
                                                      onClick: ($event) => handleExportMemo(memo.id)
                                                    }, {
                                                      default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                        if (_push9) {
                                                          _push9(ssrRenderComponent(VIcon, { size: "20" }, {
                                                            default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                              if (_push10) {
                                                                _push10(` mdi-file-pdf-box `);
                                                              } else {
                                                                return [
                                                                  createTextVNode(" mdi-file-pdf-box ")
                                                                ];
                                                              }
                                                            }),
                                                            _: 2
                                                          }, _parent9, _scopeId8));
                                                          _push9(ssrRenderComponent(VTooltip, {
                                                            activator: "parent",
                                                            location: "top"
                                                          }, {
                                                            default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                              if (_push10) {
                                                                _push10(` Export PDF `);
                                                              } else {
                                                                return [
                                                                  createTextVNode(" Export PDF ")
                                                                ];
                                                              }
                                                            }),
                                                            _: 2
                                                          }, _parent9, _scopeId8));
                                                        } else {
                                                          return [
                                                            createVNode(VIcon, { size: "20" }, {
                                                              default: withCtx(() => [
                                                                createTextVNode(" mdi-file-pdf-box ")
                                                              ]),
                                                              _: 1
                                                            }),
                                                            createVNode(VTooltip, {
                                                              activator: "parent",
                                                              location: "top"
                                                            }, {
                                                              default: withCtx(() => [
                                                                createTextVNode(" Export PDF ")
                                                              ]),
                                                              _: 1
                                                            })
                                                          ];
                                                        }
                                                      }),
                                                      _: 2
                                                    }, _parent8, _scopeId7));
                                                    _push8(ssrRenderComponent(VBtn, {
                                                      icon: "",
                                                      size: "small",
                                                      variant: "text",
                                                      color: "error",
                                                      onClick: ($event) => handleDeleteMemo(memo.id)
                                                    }, {
                                                      default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                        if (_push9) {
                                                          _push9(ssrRenderComponent(VIcon, { size: "20" }, {
                                                            default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                              if (_push10) {
                                                                _push10(` mdi-delete `);
                                                              } else {
                                                                return [
                                                                  createTextVNode(" mdi-delete ")
                                                                ];
                                                              }
                                                            }),
                                                            _: 2
                                                          }, _parent9, _scopeId8));
                                                          _push9(ssrRenderComponent(VTooltip, {
                                                            activator: "parent",
                                                            location: "top"
                                                          }, {
                                                            default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                              if (_push10) {
                                                                _push10(` \u0E25\u0E1A `);
                                                              } else {
                                                                return [
                                                                  createTextVNode(" \u0E25\u0E1A ")
                                                                ];
                                                              }
                                                            }),
                                                            _: 2
                                                          }, _parent9, _scopeId8));
                                                        } else {
                                                          return [
                                                            createVNode(VIcon, { size: "20" }, {
                                                              default: withCtx(() => [
                                                                createTextVNode(" mdi-delete ")
                                                              ]),
                                                              _: 1
                                                            }),
                                                            createVNode(VTooltip, {
                                                              activator: "parent",
                                                              location: "top"
                                                            }, {
                                                              default: withCtx(() => [
                                                                createTextVNode(" \u0E25\u0E1A ")
                                                              ]),
                                                              _: 1
                                                            })
                                                          ];
                                                        }
                                                      }),
                                                      _: 2
                                                    }, _parent8, _scopeId7));
                                                    _push8(`</div>`);
                                                  } else {
                                                    return [
                                                      createVNode("div", { class: "d-flex gap-1" }, [
                                                        createVNode(VBtn, {
                                                          icon: "",
                                                          size: "small",
                                                          variant: "text",
                                                          onClick: withModifiers(($event) => handleExportMemo(memo.id), ["stop"])
                                                        }, {
                                                          default: withCtx(() => [
                                                            createVNode(VIcon, { size: "20" }, {
                                                              default: withCtx(() => [
                                                                createTextVNode(" mdi-file-pdf-box ")
                                                              ]),
                                                              _: 1
                                                            }),
                                                            createVNode(VTooltip, {
                                                              activator: "parent",
                                                              location: "top"
                                                            }, {
                                                              default: withCtx(() => [
                                                                createTextVNode(" Export PDF ")
                                                              ]),
                                                              _: 1
                                                            })
                                                          ]),
                                                          _: 1
                                                        }, 8, ["onClick"]),
                                                        createVNode(VBtn, {
                                                          icon: "",
                                                          size: "small",
                                                          variant: "text",
                                                          color: "error",
                                                          onClick: withModifiers(($event) => handleDeleteMemo(memo.id), ["stop"])
                                                        }, {
                                                          default: withCtx(() => [
                                                            createVNode(VIcon, { size: "20" }, {
                                                              default: withCtx(() => [
                                                                createTextVNode(" mdi-delete ")
                                                              ]),
                                                              _: 1
                                                            }),
                                                            createVNode(VTooltip, {
                                                              activator: "parent",
                                                              location: "top"
                                                            }, {
                                                              default: withCtx(() => [
                                                                createTextVNode(" \u0E25\u0E1A ")
                                                              ]),
                                                              _: 1
                                                            })
                                                          ]),
                                                          _: 1
                                                        }, 8, ["onClick"])
                                                      ])
                                                    ];
                                                  }
                                                }),
                                                default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                  if (_push8) {
                                                    _push8(ssrRenderComponent(VListItemTitle, null, {
                                                      default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                        if (_push9) {
                                                          _push9(`${ssrInterpolate(memo.subject || "\u0E44\u0E21\u0E48\u0E21\u0E35\u0E2B\u0E31\u0E27\u0E02\u0E49\u0E2D")}`);
                                                        } else {
                                                          return [
                                                            createTextVNode(toDisplayString(memo.subject || "\u0E44\u0E21\u0E48\u0E21\u0E35\u0E2B\u0E31\u0E27\u0E02\u0E49\u0E2D"), 1)
                                                          ];
                                                        }
                                                      }),
                                                      _: 2
                                                    }, _parent8, _scopeId7));
                                                    _push8(ssrRenderComponent(VListItemSubtitle, null, {
                                                      default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                        if (_push9) {
                                                          _push9(`${ssrInterpolate(formatDate(memo.date))} - ${ssrInterpolate(memo.documentNumber || "\u0E44\u0E21\u0E48\u0E21\u0E35\u0E40\u0E25\u0E02\u0E17\u0E35\u0E48")}`);
                                                        } else {
                                                          return [
                                                            createTextVNode(toDisplayString(formatDate(memo.date)) + " - " + toDisplayString(memo.documentNumber || "\u0E44\u0E21\u0E48\u0E21\u0E35\u0E40\u0E25\u0E02\u0E17\u0E35\u0E48"), 1)
                                                          ];
                                                        }
                                                      }),
                                                      _: 2
                                                    }, _parent8, _scopeId7));
                                                  } else {
                                                    return [
                                                      createVNode(VListItemTitle, null, {
                                                        default: withCtx(() => [
                                                          createTextVNode(toDisplayString(memo.subject || "\u0E44\u0E21\u0E48\u0E21\u0E35\u0E2B\u0E31\u0E27\u0E02\u0E49\u0E2D"), 1)
                                                        ]),
                                                        _: 2
                                                      }, 1024),
                                                      createVNode(VListItemSubtitle, null, {
                                                        default: withCtx(() => [
                                                          createTextVNode(toDisplayString(formatDate(memo.date)) + " - " + toDisplayString(memo.documentNumber || "\u0E44\u0E21\u0E48\u0E21\u0E35\u0E40\u0E25\u0E02\u0E17\u0E35\u0E48"), 1)
                                                        ]),
                                                        _: 2
                                                      }, 1024)
                                                    ];
                                                  }
                                                }),
                                                _: 2
                                              }, _parent7, _scopeId6));
                                            });
                                            _push7(`<!--]-->`);
                                          } else {
                                            return [
                                              (openBlock(true), createBlock(Fragment, null, renderList(unref(memoStore).savedMemos, (memo) => {
                                                return openBlock(), createBlock(VListItem, {
                                                  key: memo.id,
                                                  class: { "bg-primary-lighten-5": memo.id === unref(memoStore).currentMemo.id },
                                                  onClick: ($event) => handleLoadMemo(memo.id)
                                                }, {
                                                  prepend: withCtx(() => [
                                                    createVNode(VIcon, { color: "primary" }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(" mdi-file-document ")
                                                      ]),
                                                      _: 1
                                                    })
                                                  ]),
                                                  append: withCtx(() => [
                                                    createVNode("div", { class: "d-flex gap-1" }, [
                                                      createVNode(VBtn, {
                                                        icon: "",
                                                        size: "small",
                                                        variant: "text",
                                                        onClick: withModifiers(($event) => handleExportMemo(memo.id), ["stop"])
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode(VIcon, { size: "20" }, {
                                                            default: withCtx(() => [
                                                              createTextVNode(" mdi-file-pdf-box ")
                                                            ]),
                                                            _: 1
                                                          }),
                                                          createVNode(VTooltip, {
                                                            activator: "parent",
                                                            location: "top"
                                                          }, {
                                                            default: withCtx(() => [
                                                              createTextVNode(" Export PDF ")
                                                            ]),
                                                            _: 1
                                                          })
                                                        ]),
                                                        _: 1
                                                      }, 8, ["onClick"]),
                                                      createVNode(VBtn, {
                                                        icon: "",
                                                        size: "small",
                                                        variant: "text",
                                                        color: "error",
                                                        onClick: withModifiers(($event) => handleDeleteMemo(memo.id), ["stop"])
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode(VIcon, { size: "20" }, {
                                                            default: withCtx(() => [
                                                              createTextVNode(" mdi-delete ")
                                                            ]),
                                                            _: 1
                                                          }),
                                                          createVNode(VTooltip, {
                                                            activator: "parent",
                                                            location: "top"
                                                          }, {
                                                            default: withCtx(() => [
                                                              createTextVNode(" \u0E25\u0E1A ")
                                                            ]),
                                                            _: 1
                                                          })
                                                        ]),
                                                        _: 1
                                                      }, 8, ["onClick"])
                                                    ])
                                                  ]),
                                                  default: withCtx(() => [
                                                    createVNode(VListItemTitle, null, {
                                                      default: withCtx(() => [
                                                        createTextVNode(toDisplayString(memo.subject || "\u0E44\u0E21\u0E48\u0E21\u0E35\u0E2B\u0E31\u0E27\u0E02\u0E49\u0E2D"), 1)
                                                      ]),
                                                      _: 2
                                                    }, 1024),
                                                    createVNode(VListItemSubtitle, null, {
                                                      default: withCtx(() => [
                                                        createTextVNode(toDisplayString(formatDate(memo.date)) + " - " + toDisplayString(memo.documentNumber || "\u0E44\u0E21\u0E48\u0E21\u0E35\u0E40\u0E25\u0E02\u0E17\u0E35\u0E48"), 1)
                                                      ]),
                                                      _: 2
                                                    }, 1024)
                                                  ]),
                                                  _: 2
                                                }, 1032, ["class", "onClick"]);
                                              }), 128))
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                    }
                                  } else {
                                    return [
                                      unref(memoStore).savedMemos.length === 0 ? (openBlock(), createBlock("div", {
                                        key: 0,
                                        class: "text-center text-medium-emphasis py-8"
                                      }, [
                                        createVNode(VIcon, {
                                          size: "48",
                                          color: "grey-lighten-1"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" mdi-file-document-outline ")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode("p", { class: "mt-2" }, " \u0E22\u0E31\u0E07\u0E44\u0E21\u0E48\u0E21\u0E35\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01\u0E17\u0E35\u0E48\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01\u0E44\u0E27\u0E49 ")
                                      ])) : (openBlock(), createBlock(VList, {
                                        key: 1,
                                        density: "compact"
                                      }, {
                                        default: withCtx(() => [
                                          (openBlock(true), createBlock(Fragment, null, renderList(unref(memoStore).savedMemos, (memo) => {
                                            return openBlock(), createBlock(VListItem, {
                                              key: memo.id,
                                              class: { "bg-primary-lighten-5": memo.id === unref(memoStore).currentMemo.id },
                                              onClick: ($event) => handleLoadMemo(memo.id)
                                            }, {
                                              prepend: withCtx(() => [
                                                createVNode(VIcon, { color: "primary" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(" mdi-file-document ")
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              append: withCtx(() => [
                                                createVNode("div", { class: "d-flex gap-1" }, [
                                                  createVNode(VBtn, {
                                                    icon: "",
                                                    size: "small",
                                                    variant: "text",
                                                    onClick: withModifiers(($event) => handleExportMemo(memo.id), ["stop"])
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(VIcon, { size: "20" }, {
                                                        default: withCtx(() => [
                                                          createTextVNode(" mdi-file-pdf-box ")
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(VTooltip, {
                                                        activator: "parent",
                                                        location: "top"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createTextVNode(" Export PDF ")
                                                        ]),
                                                        _: 1
                                                      })
                                                    ]),
                                                    _: 1
                                                  }, 8, ["onClick"]),
                                                  createVNode(VBtn, {
                                                    icon: "",
                                                    size: "small",
                                                    variant: "text",
                                                    color: "error",
                                                    onClick: withModifiers(($event) => handleDeleteMemo(memo.id), ["stop"])
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(VIcon, { size: "20" }, {
                                                        default: withCtx(() => [
                                                          createTextVNode(" mdi-delete ")
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(VTooltip, {
                                                        activator: "parent",
                                                        location: "top"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createTextVNode(" \u0E25\u0E1A ")
                                                        ]),
                                                        _: 1
                                                      })
                                                    ]),
                                                    _: 1
                                                  }, 8, ["onClick"])
                                                ])
                                              ]),
                                              default: withCtx(() => [
                                                createVNode(VListItemTitle, null, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(memo.subject || "\u0E44\u0E21\u0E48\u0E21\u0E35\u0E2B\u0E31\u0E27\u0E02\u0E49\u0E2D"), 1)
                                                  ]),
                                                  _: 2
                                                }, 1024),
                                                createVNode(VListItemSubtitle, null, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(formatDate(memo.date)) + " - " + toDisplayString(memo.documentNumber || "\u0E44\u0E21\u0E48\u0E21\u0E35\u0E40\u0E25\u0E02\u0E17\u0E35\u0E48"), 1)
                                                  ]),
                                                  _: 2
                                                }, 1024)
                                              ]),
                                              _: 2
                                            }, 1032, ["class", "onClick"]);
                                          }), 128))
                                        ]),
                                        _: 1
                                      }))
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VCardTitle, null, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "d-flex justify-space-between align-center" }, [
                                      createVNode("span", null, "\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01\u0E17\u0E35\u0E48\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01\u0E44\u0E27\u0E49"),
                                      createVNode(VChip, {
                                        color: "primary",
                                        size: "small"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(unref(memoStore).savedMemos.length), 1)
                                        ]),
                                        _: 1
                                      })
                                    ])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VDivider),
                                createVNode(VCardText, null, {
                                  default: withCtx(() => [
                                    unref(memoStore).savedMemos.length === 0 ? (openBlock(), createBlock("div", {
                                      key: 0,
                                      class: "text-center text-medium-emphasis py-8"
                                    }, [
                                      createVNode(VIcon, {
                                        size: "48",
                                        color: "grey-lighten-1"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" mdi-file-document-outline ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode("p", { class: "mt-2" }, " \u0E22\u0E31\u0E07\u0E44\u0E21\u0E48\u0E21\u0E35\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01\u0E17\u0E35\u0E48\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01\u0E44\u0E27\u0E49 ")
                                    ])) : (openBlock(), createBlock(VList, {
                                      key: 1,
                                      density: "compact"
                                    }, {
                                      default: withCtx(() => [
                                        (openBlock(true), createBlock(Fragment, null, renderList(unref(memoStore).savedMemos, (memo) => {
                                          return openBlock(), createBlock(VListItem, {
                                            key: memo.id,
                                            class: { "bg-primary-lighten-5": memo.id === unref(memoStore).currentMemo.id },
                                            onClick: ($event) => handleLoadMemo(memo.id)
                                          }, {
                                            prepend: withCtx(() => [
                                              createVNode(VIcon, { color: "primary" }, {
                                                default: withCtx(() => [
                                                  createTextVNode(" mdi-file-document ")
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            append: withCtx(() => [
                                              createVNode("div", { class: "d-flex gap-1" }, [
                                                createVNode(VBtn, {
                                                  icon: "",
                                                  size: "small",
                                                  variant: "text",
                                                  onClick: withModifiers(($event) => handleExportMemo(memo.id), ["stop"])
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(VIcon, { size: "20" }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(" mdi-file-pdf-box ")
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(VTooltip, {
                                                      activator: "parent",
                                                      location: "top"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(" Export PDF ")
                                                      ]),
                                                      _: 1
                                                    })
                                                  ]),
                                                  _: 1
                                                }, 8, ["onClick"]),
                                                createVNode(VBtn, {
                                                  icon: "",
                                                  size: "small",
                                                  variant: "text",
                                                  color: "error",
                                                  onClick: withModifiers(($event) => handleDeleteMemo(memo.id), ["stop"])
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(VIcon, { size: "20" }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(" mdi-delete ")
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(VTooltip, {
                                                      activator: "parent",
                                                      location: "top"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(" \u0E25\u0E1A ")
                                                      ]),
                                                      _: 1
                                                    })
                                                  ]),
                                                  _: 1
                                                }, 8, ["onClick"])
                                              ])
                                            ]),
                                            default: withCtx(() => [
                                              createVNode(VListItemTitle, null, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(memo.subject || "\u0E44\u0E21\u0E48\u0E21\u0E35\u0E2B\u0E31\u0E27\u0E02\u0E49\u0E2D"), 1)
                                                ]),
                                                _: 2
                                              }, 1024),
                                              createVNode(VListItemSubtitle, null, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(formatDate(memo.date)) + " - " + toDisplayString(memo.documentNumber || "\u0E44\u0E21\u0E48\u0E21\u0E35\u0E40\u0E25\u0E02\u0E17\u0E35\u0E48"), 1)
                                                ]),
                                                _: 2
                                              }, 1024)
                                            ]),
                                            _: 2
                                          }, 1032, ["class", "onClick"]);
                                        }), 128))
                                      ]),
                                      _: 1
                                    }))
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
                              createVNode(VCardTitle, null, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "d-flex justify-space-between align-center" }, [
                                    createVNode("span", null, "\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01\u0E17\u0E35\u0E48\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01\u0E44\u0E27\u0E49"),
                                    createVNode(VChip, {
                                      color: "primary",
                                      size: "small"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(unref(memoStore).savedMemos.length), 1)
                                      ]),
                                      _: 1
                                    })
                                  ])
                                ]),
                                _: 1
                              }),
                              createVNode(VDivider),
                              createVNode(VCardText, null, {
                                default: withCtx(() => [
                                  unref(memoStore).savedMemos.length === 0 ? (openBlock(), createBlock("div", {
                                    key: 0,
                                    class: "text-center text-medium-emphasis py-8"
                                  }, [
                                    createVNode(VIcon, {
                                      size: "48",
                                      color: "grey-lighten-1"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" mdi-file-document-outline ")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode("p", { class: "mt-2" }, " \u0E22\u0E31\u0E07\u0E44\u0E21\u0E48\u0E21\u0E35\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01\u0E17\u0E35\u0E48\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01\u0E44\u0E27\u0E49 ")
                                  ])) : (openBlock(), createBlock(VList, {
                                    key: 1,
                                    density: "compact"
                                  }, {
                                    default: withCtx(() => [
                                      (openBlock(true), createBlock(Fragment, null, renderList(unref(memoStore).savedMemos, (memo) => {
                                        return openBlock(), createBlock(VListItem, {
                                          key: memo.id,
                                          class: { "bg-primary-lighten-5": memo.id === unref(memoStore).currentMemo.id },
                                          onClick: ($event) => handleLoadMemo(memo.id)
                                        }, {
                                          prepend: withCtx(() => [
                                            createVNode(VIcon, { color: "primary" }, {
                                              default: withCtx(() => [
                                                createTextVNode(" mdi-file-document ")
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          append: withCtx(() => [
                                            createVNode("div", { class: "d-flex gap-1" }, [
                                              createVNode(VBtn, {
                                                icon: "",
                                                size: "small",
                                                variant: "text",
                                                onClick: withModifiers(($event) => handleExportMemo(memo.id), ["stop"])
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(VIcon, { size: "20" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(" mdi-file-pdf-box ")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(VTooltip, {
                                                    activator: "parent",
                                                    location: "top"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(" Export PDF ")
                                                    ]),
                                                    _: 1
                                                  })
                                                ]),
                                                _: 1
                                              }, 8, ["onClick"]),
                                              createVNode(VBtn, {
                                                icon: "",
                                                size: "small",
                                                variant: "text",
                                                color: "error",
                                                onClick: withModifiers(($event) => handleDeleteMemo(memo.id), ["stop"])
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(VIcon, { size: "20" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(" mdi-delete ")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(VTooltip, {
                                                    activator: "parent",
                                                    location: "top"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(" \u0E25\u0E1A ")
                                                    ]),
                                                    _: 1
                                                  })
                                                ]),
                                                _: 1
                                              }, 8, ["onClick"])
                                            ])
                                          ]),
                                          default: withCtx(() => [
                                            createVNode(VListItemTitle, null, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(memo.subject || "\u0E44\u0E21\u0E48\u0E21\u0E35\u0E2B\u0E31\u0E27\u0E02\u0E49\u0E2D"), 1)
                                              ]),
                                              _: 2
                                            }, 1024),
                                            createVNode(VListItemSubtitle, null, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(formatDate(memo.date)) + " - " + toDisplayString(memo.documentNumber || "\u0E44\u0E21\u0E48\u0E21\u0E35\u0E40\u0E25\u0E02\u0E17\u0E35\u0E48"), 1)
                                              ]),
                                              _: 2
                                            }, 1024)
                                          ]),
                                          _: 2
                                        }, 1032, ["class", "onClick"]);
                                      }), 128))
                                    ]),
                                    _: 1
                                  }))
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
                    createVNode(VCol, {
                      cols: "12",
                      lg: "8"
                    }, {
                      default: withCtx(() => [
                        createVNode(_sfc_main$1, {
                          memo: unref(memoStore).currentMemo,
                          "is-saved": !!unref(memoStore).currentMemo.id,
                          onSave: handleSave,
                          onExportPdf: handleExportPdf,
                          onReset: handleReset
                        }, null, 8, ["memo", "is-saved"])
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      lg: "4"
                    }, {
                      default: withCtx(() => [
                        createVNode(VCard, null, {
                          default: withCtx(() => [
                            createVNode(VCardTitle, null, {
                              default: withCtx(() => [
                                createVNode("div", { class: "d-flex justify-space-between align-center" }, [
                                  createVNode("span", null, "\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01\u0E17\u0E35\u0E48\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01\u0E44\u0E27\u0E49"),
                                  createVNode(VChip, {
                                    color: "primary",
                                    size: "small"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(unref(memoStore).savedMemos.length), 1)
                                    ]),
                                    _: 1
                                  })
                                ])
                              ]),
                              _: 1
                            }),
                            createVNode(VDivider),
                            createVNode(VCardText, null, {
                              default: withCtx(() => [
                                unref(memoStore).savedMemos.length === 0 ? (openBlock(), createBlock("div", {
                                  key: 0,
                                  class: "text-center text-medium-emphasis py-8"
                                }, [
                                  createVNode(VIcon, {
                                    size: "48",
                                    color: "grey-lighten-1"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" mdi-file-document-outline ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode("p", { class: "mt-2" }, " \u0E22\u0E31\u0E07\u0E44\u0E21\u0E48\u0E21\u0E35\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01\u0E17\u0E35\u0E48\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01\u0E44\u0E27\u0E49 ")
                                ])) : (openBlock(), createBlock(VList, {
                                  key: 1,
                                  density: "compact"
                                }, {
                                  default: withCtx(() => [
                                    (openBlock(true), createBlock(Fragment, null, renderList(unref(memoStore).savedMemos, (memo) => {
                                      return openBlock(), createBlock(VListItem, {
                                        key: memo.id,
                                        class: { "bg-primary-lighten-5": memo.id === unref(memoStore).currentMemo.id },
                                        onClick: ($event) => handleLoadMemo(memo.id)
                                      }, {
                                        prepend: withCtx(() => [
                                          createVNode(VIcon, { color: "primary" }, {
                                            default: withCtx(() => [
                                              createTextVNode(" mdi-file-document ")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        append: withCtx(() => [
                                          createVNode("div", { class: "d-flex gap-1" }, [
                                            createVNode(VBtn, {
                                              icon: "",
                                              size: "small",
                                              variant: "text",
                                              onClick: withModifiers(($event) => handleExportMemo(memo.id), ["stop"])
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VIcon, { size: "20" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(" mdi-file-pdf-box ")
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(VTooltip, {
                                                  activator: "parent",
                                                  location: "top"
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(" Export PDF ")
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            }, 8, ["onClick"]),
                                            createVNode(VBtn, {
                                              icon: "",
                                              size: "small",
                                              variant: "text",
                                              color: "error",
                                              onClick: withModifiers(($event) => handleDeleteMemo(memo.id), ["stop"])
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VIcon, { size: "20" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(" mdi-delete ")
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(VTooltip, {
                                                  activator: "parent",
                                                  location: "top"
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(" \u0E25\u0E1A ")
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            }, 8, ["onClick"])
                                          ])
                                        ]),
                                        default: withCtx(() => [
                                          createVNode(VListItemTitle, null, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(memo.subject || "\u0E44\u0E21\u0E48\u0E21\u0E35\u0E2B\u0E31\u0E27\u0E02\u0E49\u0E2D"), 1)
                                            ]),
                                            _: 2
                                          }, 1024),
                                          createVNode(VListItemSubtitle, null, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(formatDate(memo.date)) + " - " + toDisplayString(memo.documentNumber || "\u0E44\u0E21\u0E48\u0E21\u0E35\u0E40\u0E25\u0E02\u0E17\u0E35\u0E48"), 1)
                                            ]),
                                            _: 2
                                          }, 1024)
                                        ]),
                                        _: 2
                                      }, 1032, ["class", "onClick"]);
                                    }), 128))
                                  ]),
                                  _: 1
                                }))
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
            return [
              createVNode(VRow, null, {
                default: withCtx(() => [
                  createVNode(VCol, { cols: "12" }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "d-flex justify-space-between align-center mb-4" }, [
                        createVNode("div", null, [
                          createVNode("h1", { class: "text-h4 font-weight-bold" }, " \u0E43\u0E1A\u0E02\u0E2D\u0E0B\u0E37\u0E49\u0E2D (Purchase Request Memo) "),
                          createVNode("p", { class: "text-subtitle-1 text-medium-emphasis" }, " \u0E2A\u0E23\u0E49\u0E32\u0E07\u0E41\u0E25\u0E30\u0E08\u0E31\u0E14\u0E01\u0E32\u0E23\u0E43\u0E1A\u0E02\u0E2D\u0E0B\u0E37\u0E49\u0E2D\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13 ")
                        ])
                      ])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(VRow, null, {
                default: withCtx(() => [
                  createVNode(VCol, {
                    cols: "12",
                    lg: "8"
                  }, {
                    default: withCtx(() => [
                      createVNode(_sfc_main$1, {
                        memo: unref(memoStore).currentMemo,
                        "is-saved": !!unref(memoStore).currentMemo.id,
                        onSave: handleSave,
                        onExportPdf: handleExportPdf,
                        onReset: handleReset
                      }, null, 8, ["memo", "is-saved"])
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    cols: "12",
                    lg: "4"
                  }, {
                    default: withCtx(() => [
                      createVNode(VCard, null, {
                        default: withCtx(() => [
                          createVNode(VCardTitle, null, {
                            default: withCtx(() => [
                              createVNode("div", { class: "d-flex justify-space-between align-center" }, [
                                createVNode("span", null, "\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01\u0E17\u0E35\u0E48\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01\u0E44\u0E27\u0E49"),
                                createVNode(VChip, {
                                  color: "primary",
                                  size: "small"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(unref(memoStore).savedMemos.length), 1)
                                  ]),
                                  _: 1
                                })
                              ])
                            ]),
                            _: 1
                          }),
                          createVNode(VDivider),
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              unref(memoStore).savedMemos.length === 0 ? (openBlock(), createBlock("div", {
                                key: 0,
                                class: "text-center text-medium-emphasis py-8"
                              }, [
                                createVNode(VIcon, {
                                  size: "48",
                                  color: "grey-lighten-1"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" mdi-file-document-outline ")
                                  ]),
                                  _: 1
                                }),
                                createVNode("p", { class: "mt-2" }, " \u0E22\u0E31\u0E07\u0E44\u0E21\u0E48\u0E21\u0E35\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01\u0E17\u0E35\u0E48\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01\u0E44\u0E27\u0E49 ")
                              ])) : (openBlock(), createBlock(VList, {
                                key: 1,
                                density: "compact"
                              }, {
                                default: withCtx(() => [
                                  (openBlock(true), createBlock(Fragment, null, renderList(unref(memoStore).savedMemos, (memo) => {
                                    return openBlock(), createBlock(VListItem, {
                                      key: memo.id,
                                      class: { "bg-primary-lighten-5": memo.id === unref(memoStore).currentMemo.id },
                                      onClick: ($event) => handleLoadMemo(memo.id)
                                    }, {
                                      prepend: withCtx(() => [
                                        createVNode(VIcon, { color: "primary" }, {
                                          default: withCtx(() => [
                                            createTextVNode(" mdi-file-document ")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      append: withCtx(() => [
                                        createVNode("div", { class: "d-flex gap-1" }, [
                                          createVNode(VBtn, {
                                            icon: "",
                                            size: "small",
                                            variant: "text",
                                            onClick: withModifiers(($event) => handleExportMemo(memo.id), ["stop"])
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VIcon, { size: "20" }, {
                                                default: withCtx(() => [
                                                  createTextVNode(" mdi-file-pdf-box ")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(VTooltip, {
                                                activator: "parent",
                                                location: "top"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(" Export PDF ")
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          }, 8, ["onClick"]),
                                          createVNode(VBtn, {
                                            icon: "",
                                            size: "small",
                                            variant: "text",
                                            color: "error",
                                            onClick: withModifiers(($event) => handleDeleteMemo(memo.id), ["stop"])
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VIcon, { size: "20" }, {
                                                default: withCtx(() => [
                                                  createTextVNode(" mdi-delete ")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(VTooltip, {
                                                activator: "parent",
                                                location: "top"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(" \u0E25\u0E1A ")
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          }, 8, ["onClick"])
                                        ])
                                      ]),
                                      default: withCtx(() => [
                                        createVNode(VListItemTitle, null, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(memo.subject || "\u0E44\u0E21\u0E48\u0E21\u0E35\u0E2B\u0E31\u0E27\u0E02\u0E49\u0E2D"), 1)
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(VListItemSubtitle, null, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(formatDate(memo.date)) + " - " + toDisplayString(memo.documentNumber || "\u0E44\u0E21\u0E48\u0E21\u0E35\u0E40\u0E25\u0E02\u0E17\u0E35\u0E48"), 1)
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ]),
                                      _: 2
                                    }, 1032, ["class", "onClick"]);
                                  }), 128))
                                ]),
                                _: 1
                              }))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/purchase-request.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const purchaseRequest = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-9249c969"]]);

export { purchaseRequest as default };
