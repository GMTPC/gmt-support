import { _ as __nuxt_component_0 } from './Breadcrumbs-CblUXPow.mjs';
import { a as VBtn, a4 as navigateTo, V as VIcon } from './server.mjs';
import { defineComponent, ref, withCtx, unref, createTextVNode, createVNode, toDisplayString, openBlock, createBlock, createCommentVNode, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { u as useMemoStore, V as VContainer, M as MemoPdfExport } from './memo-C_jS_Qbz.mjs';
import { V as VRow, a as VCol } from './VRow-zuLeAiTc.mjs';
import { V as VCard, a as VCardText, c as VCardTitle, e as VCardActions } from './VCard-CSiTQXcr.mjs';
import { V as VDataTable } from './VDataTable-BCjfAJbm.mjs';
import { V as VChip } from './VChip-DBW6TD_X.mjs';
import { V as VTooltip } from './VTooltip-CRp9Z0Ps.mjs';
import { V as VDialog } from './VDialog-5Q-6dk5F.mjs';
import { V as VSpacer } from './VSpacer-DFw6v9aV.mjs';
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
import './client-only-CW16b6V6.mjs';
import 'html2canvas';
import 'jspdf';
import './VAvatar-BWioJSAV.mjs';
import './VSelect-Cr6Di2uC.mjs';
import './VTextField-BBb08qcq.mjs';
import './index-DUS45q6U.mjs';
import './forwardRefs-Oip3fNRq.mjs';
import './VList-DCeFvVa6.mjs';
import './ssrBoot-BtvJZs44.mjs';
import './VDivider-LYYZi4vy.mjs';
import './VMenu-CLtX8H-Q.mjs';
import './VOverlay-B9V9YqYJ.mjs';
import './scopeId-b3c5ZUEe.mjs';
import './VCheckboxBtn-DiqOHInw.mjs';
import './VTable-BXhkfgy8.mjs';
import './VSlideGroup-C5ipntF0.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const memoStore = useMemoStore();
    const pdfExportRef = ref();
    const deleteDialog = ref(false);
    const memoToDelete = ref("");
    const snackbar = ref({
      show: false,
      message: "",
      color: "success"
    });
    const headers = [
      { title: "\u0E40\u0E25\u0E02\u0E17\u0E35\u0E48\u0E40\u0E2D\u0E01\u0E2A\u0E32\u0E23", key: "documentNumber", sortable: true },
      { title: "\u0E40\u0E23\u0E37\u0E48\u0E2D\u0E07", key: "subject", sortable: true },
      { title: "\u0E08\u0E32\u0E01", key: "from", sortable: true },
      { title: "\u0E16\u0E36\u0E07", key: "to", sortable: true },
      { title: "\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48", key: "date", sortable: true },
      { title: "\u0E27\u0E31\u0E15\u0E16\u0E38\u0E1B\u0E23\u0E30\u0E2A\u0E07\u0E04\u0E4C", key: "purposes", sortable: false },
      { title: "\u0E2D\u0E31\u0E1E\u0E40\u0E14\u0E17\u0E25\u0E48\u0E32\u0E2A\u0E38\u0E14", key: "updatedAt", sortable: true },
      { title: "\u0E08\u0E31\u0E14\u0E01\u0E32\u0E23", key: "actions", sortable: false, align: "center" }
    ];
    const formatDate = (dateString) => {
      if (!dateString) return "";
      const date = new Date(dateString);
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear() + 543;
      return `${day}/${month}/${year}`;
    };
    const formatDateTime = (dateString) => {
      if (!dateString) return "";
      const date = new Date(dateString);
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear() + 543;
      const hours = date.getHours().toString().padStart(2, "0");
      const minutes = date.getMinutes().toString().padStart(2, "0");
      return `${day}/${month}/${year} ${hours}:${minutes}`;
    };
    const showSnackbar = (message, color = "success") => {
      snackbar.value = {
        show: true,
        message,
        color
      };
    };
    const viewMemo = (id) => {
      navigateTo(`/memo/${id}?mode=view`);
    };
    const editMemo = (id) => {
      navigateTo(`/memo/${id}`);
    };
    const exportMemo = async (id) => {
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
    const confirmDelete = (id) => {
      memoToDelete.value = id;
      deleteDialog.value = true;
    };
    const handleDelete = () => {
      try {
        memoStore.deleteMemo(memoToDelete.value);
        deleteDialog.value = false;
        showSnackbar("\u0E25\u0E1A\u0E43\u0E1A\u0E02\u0E2D\u0E0B\u0E37\u0E49\u0E2D\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08", "success");
      } catch (error) {
        console.error("Error deleting memo:", error);
        showSnackbar("\u0E40\u0E01\u0E34\u0E14\u0E02\u0E49\u0E2D\u0E1C\u0E34\u0E14\u0E1E\u0E25\u0E32\u0E14\u0E43\u0E19\u0E01\u0E32\u0E23\u0E25\u0E1A", "error");
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Breadcrumbs = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(VContainer, { fluid: "" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Breadcrumbs, {
              items: [{ text: "\u0E43\u0E1A\u0E02\u0E2D\u0E0B\u0E37\u0E49\u0E2D", icon: "bx-file" }],
              "show-home": true
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(VRow, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCol, { cols: "12" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="d-flex justify-space-between align-center mb-4"${_scopeId3}><div${_scopeId3}><h1 class="text-h4 font-weight-bold"${_scopeId3}> \u0E43\u0E1A\u0E02\u0E2D\u0E0B\u0E37\u0E49\u0E2D (Purchase Request Memo) </h1><p class="text-subtitle-1 text-medium-emphasis"${_scopeId3}> \u0E23\u0E32\u0E22\u0E01\u0E32\u0E23\u0E43\u0E1A\u0E02\u0E2D\u0E0B\u0E37\u0E49\u0E2D\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14 </p></div>`);
                        _push4(ssrRenderComponent(VBtn, {
                          color: "primary",
                          size: "large",
                          onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))("/memo/create")
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VIcon, { start: "" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` bx-plus `);
                                  } else {
                                    return [
                                      createTextVNode(" bx-plus ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(` \u0E2A\u0E23\u0E49\u0E32\u0E07\u0E43\u0E1A\u0E02\u0E2D\u0E0B\u0E37\u0E49\u0E2D\u0E43\u0E2B\u0E21\u0E48 `);
                            } else {
                              return [
                                createVNode(VIcon, { start: "" }, {
                                  default: withCtx(() => [
                                    createTextVNode(" bx-plus ")
                                  ]),
                                  _: 1
                                }),
                                createTextVNode(" \u0E2A\u0E23\u0E49\u0E32\u0E07\u0E43\u0E1A\u0E02\u0E2D\u0E0B\u0E37\u0E49\u0E2D\u0E43\u0E2B\u0E21\u0E48 ")
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
                              createVNode("h1", { class: "text-h4 font-weight-bold" }, " \u0E43\u0E1A\u0E02\u0E2D\u0E0B\u0E37\u0E49\u0E2D (Purchase Request Memo) "),
                              createVNode("p", { class: "text-subtitle-1 text-medium-emphasis" }, " \u0E23\u0E32\u0E22\u0E01\u0E32\u0E23\u0E43\u0E1A\u0E02\u0E2D\u0E0B\u0E37\u0E49\u0E2D\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14 ")
                            ]),
                            createVNode(VBtn, {
                              color: "primary",
                              size: "large",
                              onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))("/memo/create")
                            }, {
                              default: withCtx(() => [
                                createVNode(VIcon, { start: "" }, {
                                  default: withCtx(() => [
                                    createTextVNode(" bx-plus ")
                                  ]),
                                  _: 1
                                }),
                                createTextVNode(" \u0E2A\u0E23\u0E49\u0E32\u0E07\u0E43\u0E1A\u0E02\u0E2D\u0E0B\u0E37\u0E49\u0E2D\u0E43\u0E2B\u0E21\u0E48 ")
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
                            createVNode("h1", { class: "text-h4 font-weight-bold" }, " \u0E43\u0E1A\u0E02\u0E2D\u0E0B\u0E37\u0E49\u0E2D (Purchase Request Memo) "),
                            createVNode("p", { class: "text-subtitle-1 text-medium-emphasis" }, " \u0E23\u0E32\u0E22\u0E01\u0E32\u0E23\u0E43\u0E1A\u0E02\u0E2D\u0E0B\u0E37\u0E49\u0E2D\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14 ")
                          ]),
                          createVNode(VBtn, {
                            color: "primary",
                            size: "large",
                            onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))("/memo/create")
                          }, {
                            default: withCtx(() => [
                              createVNode(VIcon, { start: "" }, {
                                default: withCtx(() => [
                                  createTextVNode(" bx-plus ")
                                ]),
                                _: 1
                              }),
                              createTextVNode(" \u0E2A\u0E23\u0E49\u0E32\u0E07\u0E43\u0E1A\u0E02\u0E2D\u0E0B\u0E37\u0E49\u0E2D\u0E43\u0E2B\u0E21\u0E48 ")
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
                        _push4(ssrRenderComponent(VCard, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCardText, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    if (unref(memoStore).savedMemos.length === 0) {
                                      _push6(`<div class="text-center py-16"${_scopeId5}>`);
                                      _push6(ssrRenderComponent(VIcon, {
                                        size: "80",
                                        color: "grey-lighten-1"
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(` bx-file `);
                                          } else {
                                            return [
                                              createTextVNode(" bx-file ")
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(`<p class="text-h6 mt-4 text-medium-emphasis"${_scopeId5}> \u0E22\u0E31\u0E07\u0E44\u0E21\u0E48\u0E21\u0E35\u0E43\u0E1A\u0E02\u0E2D\u0E0B\u0E37\u0E49\u0E2D </p><p class="text-body-2 text-medium-emphasis mb-4"${_scopeId5}> \u0E40\u0E23\u0E34\u0E48\u0E21\u0E15\u0E49\u0E19\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E43\u0E1A\u0E02\u0E2D\u0E0B\u0E37\u0E49\u0E2D\u0E41\u0E23\u0E01\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13 </p>`);
                                      _push6(ssrRenderComponent(VBtn, {
                                        color: "primary",
                                        onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))("/memo/create")
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(VIcon, { start: "" }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(` bx-plus `);
                                                } else {
                                                  return [
                                                    createTextVNode(" bx-plus ")
                                                  ];
                                                }
                                              }),
                                              _: 1
                                            }, _parent7, _scopeId6));
                                            _push7(` \u0E2A\u0E23\u0E49\u0E32\u0E07\u0E43\u0E1A\u0E02\u0E2D\u0E0B\u0E37\u0E49\u0E2D\u0E43\u0E2B\u0E21\u0E48 `);
                                          } else {
                                            return [
                                              createVNode(VIcon, { start: "" }, {
                                                default: withCtx(() => [
                                                  createTextVNode(" bx-plus ")
                                                ]),
                                                _: 1
                                              }),
                                              createTextVNode(" \u0E2A\u0E23\u0E49\u0E32\u0E07\u0E43\u0E1A\u0E02\u0E2D\u0E0B\u0E37\u0E49\u0E2D\u0E43\u0E2B\u0E21\u0E48 ")
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(`</div>`);
                                    } else {
                                      _push6(ssrRenderComponent(VDataTable, {
                                        headers,
                                        items: unref(memoStore).savedMemos,
                                        "items-per-page": 10,
                                        class: "elevation-0"
                                      }, {
                                        "item.date": withCtx(({ item }, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(formatDate(item.date))}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(formatDate(item.date)), 1)
                                            ];
                                          }
                                        }),
                                        "item.purposes": withCtx(({ item }, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            if (item.purposes.consider) {
                                              _push7(ssrRenderComponent(VChip, {
                                                size: "small",
                                                color: "primary",
                                                class: "mr-1"
                                              }, {
                                                default: withCtx((_6, _push8, _parent8, _scopeId7) => {
                                                  if (_push8) {
                                                    _push8(` \u0E1E\u0E34\u0E08\u0E32\u0E23\u0E13\u0E32 `);
                                                  } else {
                                                    return [
                                                      createTextVNode(" \u0E1E\u0E34\u0E08\u0E32\u0E23\u0E13\u0E32 ")
                                                    ];
                                                  }
                                                }),
                                                _: 2
                                              }, _parent7, _scopeId6));
                                            } else {
                                              _push7(`<!---->`);
                                            }
                                            if (item.purposes.know) {
                                              _push7(ssrRenderComponent(VChip, {
                                                size: "small",
                                                color: "info",
                                                class: "mr-1"
                                              }, {
                                                default: withCtx((_6, _push8, _parent8, _scopeId7) => {
                                                  if (_push8) {
                                                    _push8(` \u0E17\u0E23\u0E32\u0E1A `);
                                                  } else {
                                                    return [
                                                      createTextVNode(" \u0E17\u0E23\u0E32\u0E1A ")
                                                    ];
                                                  }
                                                }),
                                                _: 2
                                              }, _parent7, _scopeId6));
                                            } else {
                                              _push7(`<!---->`);
                                            }
                                            if (item.purposes.issueCommand) {
                                              _push7(ssrRenderComponent(VChip, {
                                                size: "small",
                                                color: "warning",
                                                class: "mr-1"
                                              }, {
                                                default: withCtx((_6, _push8, _parent8, _scopeId7) => {
                                                  if (_push8) {
                                                    _push8(` \u0E2D\u0E2D\u0E01\u0E04\u0E33\u0E2A\u0E31\u0E48\u0E07 `);
                                                  } else {
                                                    return [
                                                      createTextVNode(" \u0E2D\u0E2D\u0E01\u0E04\u0E33\u0E2A\u0E31\u0E48\u0E07 ")
                                                    ];
                                                  }
                                                }),
                                                _: 2
                                              }, _parent7, _scopeId6));
                                            } else {
                                              _push7(`<!---->`);
                                            }
                                            if (item.purposes.continue) {
                                              _push7(ssrRenderComponent(VChip, {
                                                size: "small",
                                                color: "success",
                                                class: "mr-1"
                                              }, {
                                                default: withCtx((_6, _push8, _parent8, _scopeId7) => {
                                                  if (_push8) {
                                                    _push8(` \u0E14\u0E33\u0E40\u0E19\u0E34\u0E19\u0E01\u0E32\u0E23 `);
                                                  } else {
                                                    return [
                                                      createTextVNode(" \u0E14\u0E33\u0E40\u0E19\u0E34\u0E19\u0E01\u0E32\u0E23 ")
                                                    ];
                                                  }
                                                }),
                                                _: 2
                                              }, _parent7, _scopeId6));
                                            } else {
                                              _push7(`<!---->`);
                                            }
                                          } else {
                                            return [
                                              item.purposes.consider ? (openBlock(), createBlock(VChip, {
                                                key: 0,
                                                size: "small",
                                                color: "primary",
                                                class: "mr-1"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(" \u0E1E\u0E34\u0E08\u0E32\u0E23\u0E13\u0E32 ")
                                                ]),
                                                _: 1
                                              })) : createCommentVNode("", true),
                                              item.purposes.know ? (openBlock(), createBlock(VChip, {
                                                key: 1,
                                                size: "small",
                                                color: "info",
                                                class: "mr-1"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(" \u0E17\u0E23\u0E32\u0E1A ")
                                                ]),
                                                _: 1
                                              })) : createCommentVNode("", true),
                                              item.purposes.issueCommand ? (openBlock(), createBlock(VChip, {
                                                key: 2,
                                                size: "small",
                                                color: "warning",
                                                class: "mr-1"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(" \u0E2D\u0E2D\u0E01\u0E04\u0E33\u0E2A\u0E31\u0E48\u0E07 ")
                                                ]),
                                                _: 1
                                              })) : createCommentVNode("", true),
                                              item.purposes.continue ? (openBlock(), createBlock(VChip, {
                                                key: 3,
                                                size: "small",
                                                color: "success",
                                                class: "mr-1"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(" \u0E14\u0E33\u0E40\u0E19\u0E34\u0E19\u0E01\u0E32\u0E23 ")
                                                ]),
                                                _: 1
                                              })) : createCommentVNode("", true)
                                            ];
                                          }
                                        }),
                                        "item.updatedAt": withCtx(({ item }, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(formatDateTime(item.updatedAt))}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(formatDateTime(item.updatedAt)), 1)
                                            ];
                                          }
                                        }),
                                        "item.actions": withCtx(({ item }, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`<div class="d-flex gap-1"${_scopeId6}>`);
                                            _push7(ssrRenderComponent(VTooltip, {
                                              text: "\u0E14\u0E39",
                                              location: "top"
                                            }, {
                                              activator: withCtx(({ props }, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(ssrRenderComponent(VBtn, mergeProps(props, {
                                                    icon: "",
                                                    size: "small",
                                                    variant: "text",
                                                    color: "primary",
                                                    onClick: ($event) => viewMemo(item.id)
                                                  }), {
                                                    default: withCtx((_6, _push9, _parent9, _scopeId8) => {
                                                      if (_push9) {
                                                        _push9(ssrRenderComponent(VIcon, { size: "20" }, {
                                                          default: withCtx((_7, _push10, _parent10, _scopeId9) => {
                                                            if (_push10) {
                                                              _push10(`bx-show`);
                                                            } else {
                                                              return [
                                                                createTextVNode("bx-show")
                                                              ];
                                                            }
                                                          }),
                                                          _: 2
                                                        }, _parent9, _scopeId8));
                                                      } else {
                                                        return [
                                                          createVNode(VIcon, { size: "20" }, {
                                                            default: withCtx(() => [
                                                              createTextVNode("bx-show")
                                                            ]),
                                                            _: 1
                                                          })
                                                        ];
                                                      }
                                                    }),
                                                    _: 2
                                                  }, _parent8, _scopeId7));
                                                } else {
                                                  return [
                                                    createVNode(VBtn, mergeProps(props, {
                                                      icon: "",
                                                      size: "small",
                                                      variant: "text",
                                                      color: "primary",
                                                      onClick: ($event) => viewMemo(item.id)
                                                    }), {
                                                      default: withCtx(() => [
                                                        createVNode(VIcon, { size: "20" }, {
                                                          default: withCtx(() => [
                                                            createTextVNode("bx-show")
                                                          ]),
                                                          _: 1
                                                        })
                                                      ]),
                                                      _: 1
                                                    }, 16, ["onClick"])
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                            _push7(ssrRenderComponent(VTooltip, {
                                              text: "\u0E41\u0E01\u0E49\u0E44\u0E02",
                                              location: "top"
                                            }, {
                                              activator: withCtx(({ props }, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(ssrRenderComponent(VBtn, mergeProps(props, {
                                                    icon: "",
                                                    size: "small",
                                                    variant: "text",
                                                    color: "info",
                                                    onClick: ($event) => editMemo(item.id)
                                                  }), {
                                                    default: withCtx((_6, _push9, _parent9, _scopeId8) => {
                                                      if (_push9) {
                                                        _push9(ssrRenderComponent(VIcon, { size: "20" }, {
                                                          default: withCtx((_7, _push10, _parent10, _scopeId9) => {
                                                            if (_push10) {
                                                              _push10(`bx-edit`);
                                                            } else {
                                                              return [
                                                                createTextVNode("bx-edit")
                                                              ];
                                                            }
                                                          }),
                                                          _: 2
                                                        }, _parent9, _scopeId8));
                                                      } else {
                                                        return [
                                                          createVNode(VIcon, { size: "20" }, {
                                                            default: withCtx(() => [
                                                              createTextVNode("bx-edit")
                                                            ]),
                                                            _: 1
                                                          })
                                                        ];
                                                      }
                                                    }),
                                                    _: 2
                                                  }, _parent8, _scopeId7));
                                                } else {
                                                  return [
                                                    createVNode(VBtn, mergeProps(props, {
                                                      icon: "",
                                                      size: "small",
                                                      variant: "text",
                                                      color: "info",
                                                      onClick: ($event) => editMemo(item.id)
                                                    }), {
                                                      default: withCtx(() => [
                                                        createVNode(VIcon, { size: "20" }, {
                                                          default: withCtx(() => [
                                                            createTextVNode("bx-edit")
                                                          ]),
                                                          _: 1
                                                        })
                                                      ]),
                                                      _: 1
                                                    }, 16, ["onClick"])
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                            _push7(ssrRenderComponent(VTooltip, {
                                              text: "Export PDF",
                                              location: "top"
                                            }, {
                                              activator: withCtx(({ props }, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(ssrRenderComponent(VBtn, mergeProps(props, {
                                                    icon: "",
                                                    size: "small",
                                                    variant: "text",
                                                    color: "success",
                                                    onClick: ($event) => exportMemo(item.id)
                                                  }), {
                                                    default: withCtx((_6, _push9, _parent9, _scopeId8) => {
                                                      if (_push9) {
                                                        _push9(ssrRenderComponent(VIcon, { size: "20" }, {
                                                          default: withCtx((_7, _push10, _parent10, _scopeId9) => {
                                                            if (_push10) {
                                                              _push10(`bxs-file-pdf`);
                                                            } else {
                                                              return [
                                                                createTextVNode("bxs-file-pdf")
                                                              ];
                                                            }
                                                          }),
                                                          _: 2
                                                        }, _parent9, _scopeId8));
                                                      } else {
                                                        return [
                                                          createVNode(VIcon, { size: "20" }, {
                                                            default: withCtx(() => [
                                                              createTextVNode("bxs-file-pdf")
                                                            ]),
                                                            _: 1
                                                          })
                                                        ];
                                                      }
                                                    }),
                                                    _: 2
                                                  }, _parent8, _scopeId7));
                                                } else {
                                                  return [
                                                    createVNode(VBtn, mergeProps(props, {
                                                      icon: "",
                                                      size: "small",
                                                      variant: "text",
                                                      color: "success",
                                                      onClick: ($event) => exportMemo(item.id)
                                                    }), {
                                                      default: withCtx(() => [
                                                        createVNode(VIcon, { size: "20" }, {
                                                          default: withCtx(() => [
                                                            createTextVNode("bxs-file-pdf")
                                                          ]),
                                                          _: 1
                                                        })
                                                      ]),
                                                      _: 1
                                                    }, 16, ["onClick"])
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                            _push7(ssrRenderComponent(VTooltip, {
                                              text: "\u0E25\u0E1A",
                                              location: "top"
                                            }, {
                                              activator: withCtx(({ props }, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(ssrRenderComponent(VBtn, mergeProps(props, {
                                                    icon: "",
                                                    size: "small",
                                                    variant: "text",
                                                    color: "error",
                                                    onClick: ($event) => confirmDelete(item.id)
                                                  }), {
                                                    default: withCtx((_6, _push9, _parent9, _scopeId8) => {
                                                      if (_push9) {
                                                        _push9(ssrRenderComponent(VIcon, { size: "20" }, {
                                                          default: withCtx((_7, _push10, _parent10, _scopeId9) => {
                                                            if (_push10) {
                                                              _push10(`bx-trash`);
                                                            } else {
                                                              return [
                                                                createTextVNode("bx-trash")
                                                              ];
                                                            }
                                                          }),
                                                          _: 2
                                                        }, _parent9, _scopeId8));
                                                      } else {
                                                        return [
                                                          createVNode(VIcon, { size: "20" }, {
                                                            default: withCtx(() => [
                                                              createTextVNode("bx-trash")
                                                            ]),
                                                            _: 1
                                                          })
                                                        ];
                                                      }
                                                    }),
                                                    _: 2
                                                  }, _parent8, _scopeId7));
                                                } else {
                                                  return [
                                                    createVNode(VBtn, mergeProps(props, {
                                                      icon: "",
                                                      size: "small",
                                                      variant: "text",
                                                      color: "error",
                                                      onClick: ($event) => confirmDelete(item.id)
                                                    }), {
                                                      default: withCtx(() => [
                                                        createVNode(VIcon, { size: "20" }, {
                                                          default: withCtx(() => [
                                                            createTextVNode("bx-trash")
                                                          ]),
                                                          _: 1
                                                        })
                                                      ]),
                                                      _: 1
                                                    }, 16, ["onClick"])
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                            _push7(`</div>`);
                                          } else {
                                            return [
                                              createVNode("div", { class: "d-flex gap-1" }, [
                                                createVNode(VTooltip, {
                                                  text: "\u0E14\u0E39",
                                                  location: "top"
                                                }, {
                                                  activator: withCtx(({ props }) => [
                                                    createVNode(VBtn, mergeProps(props, {
                                                      icon: "",
                                                      size: "small",
                                                      variant: "text",
                                                      color: "primary",
                                                      onClick: ($event) => viewMemo(item.id)
                                                    }), {
                                                      default: withCtx(() => [
                                                        createVNode(VIcon, { size: "20" }, {
                                                          default: withCtx(() => [
                                                            createTextVNode("bx-show")
                                                          ]),
                                                          _: 1
                                                        })
                                                      ]),
                                                      _: 1
                                                    }, 16, ["onClick"])
                                                  ]),
                                                  _: 2
                                                }, 1024),
                                                createVNode(VTooltip, {
                                                  text: "\u0E41\u0E01\u0E49\u0E44\u0E02",
                                                  location: "top"
                                                }, {
                                                  activator: withCtx(({ props }) => [
                                                    createVNode(VBtn, mergeProps(props, {
                                                      icon: "",
                                                      size: "small",
                                                      variant: "text",
                                                      color: "info",
                                                      onClick: ($event) => editMemo(item.id)
                                                    }), {
                                                      default: withCtx(() => [
                                                        createVNode(VIcon, { size: "20" }, {
                                                          default: withCtx(() => [
                                                            createTextVNode("bx-edit")
                                                          ]),
                                                          _: 1
                                                        })
                                                      ]),
                                                      _: 1
                                                    }, 16, ["onClick"])
                                                  ]),
                                                  _: 2
                                                }, 1024),
                                                createVNode(VTooltip, {
                                                  text: "Export PDF",
                                                  location: "top"
                                                }, {
                                                  activator: withCtx(({ props }) => [
                                                    createVNode(VBtn, mergeProps(props, {
                                                      icon: "",
                                                      size: "small",
                                                      variant: "text",
                                                      color: "success",
                                                      onClick: ($event) => exportMemo(item.id)
                                                    }), {
                                                      default: withCtx(() => [
                                                        createVNode(VIcon, { size: "20" }, {
                                                          default: withCtx(() => [
                                                            createTextVNode("bxs-file-pdf")
                                                          ]),
                                                          _: 1
                                                        })
                                                      ]),
                                                      _: 1
                                                    }, 16, ["onClick"])
                                                  ]),
                                                  _: 2
                                                }, 1024),
                                                createVNode(VTooltip, {
                                                  text: "\u0E25\u0E1A",
                                                  location: "top"
                                                }, {
                                                  activator: withCtx(({ props }) => [
                                                    createVNode(VBtn, mergeProps(props, {
                                                      icon: "",
                                                      size: "small",
                                                      variant: "text",
                                                      color: "error",
                                                      onClick: ($event) => confirmDelete(item.id)
                                                    }), {
                                                      default: withCtx(() => [
                                                        createVNode(VIcon, { size: "20" }, {
                                                          default: withCtx(() => [
                                                            createTextVNode("bx-trash")
                                                          ]),
                                                          _: 1
                                                        })
                                                      ]),
                                                      _: 1
                                                    }, 16, ["onClick"])
                                                  ]),
                                                  _: 2
                                                }, 1024)
                                              ])
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
                                        class: "text-center py-16"
                                      }, [
                                        createVNode(VIcon, {
                                          size: "80",
                                          color: "grey-lighten-1"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" bx-file ")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode("p", { class: "text-h6 mt-4 text-medium-emphasis" }, " \u0E22\u0E31\u0E07\u0E44\u0E21\u0E48\u0E21\u0E35\u0E43\u0E1A\u0E02\u0E2D\u0E0B\u0E37\u0E49\u0E2D "),
                                        createVNode("p", { class: "text-body-2 text-medium-emphasis mb-4" }, " \u0E40\u0E23\u0E34\u0E48\u0E21\u0E15\u0E49\u0E19\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E43\u0E1A\u0E02\u0E2D\u0E0B\u0E37\u0E49\u0E2D\u0E41\u0E23\u0E01\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13 "),
                                        createVNode(VBtn, {
                                          color: "primary",
                                          onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))("/memo/create")
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VIcon, { start: "" }, {
                                              default: withCtx(() => [
                                                createTextVNode(" bx-plus ")
                                              ]),
                                              _: 1
                                            }),
                                            createTextVNode(" \u0E2A\u0E23\u0E49\u0E32\u0E07\u0E43\u0E1A\u0E02\u0E2D\u0E0B\u0E37\u0E49\u0E2D\u0E43\u0E2B\u0E21\u0E48 ")
                                          ]),
                                          _: 1
                                        }, 8, ["onClick"])
                                      ])) : (openBlock(), createBlock(VDataTable, {
                                        key: 1,
                                        headers,
                                        items: unref(memoStore).savedMemos,
                                        "items-per-page": 10,
                                        class: "elevation-0"
                                      }, {
                                        "item.date": withCtx(({ item }) => [
                                          createTextVNode(toDisplayString(formatDate(item.date)), 1)
                                        ]),
                                        "item.purposes": withCtx(({ item }) => [
                                          item.purposes.consider ? (openBlock(), createBlock(VChip, {
                                            key: 0,
                                            size: "small",
                                            color: "primary",
                                            class: "mr-1"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" \u0E1E\u0E34\u0E08\u0E32\u0E23\u0E13\u0E32 ")
                                            ]),
                                            _: 1
                                          })) : createCommentVNode("", true),
                                          item.purposes.know ? (openBlock(), createBlock(VChip, {
                                            key: 1,
                                            size: "small",
                                            color: "info",
                                            class: "mr-1"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" \u0E17\u0E23\u0E32\u0E1A ")
                                            ]),
                                            _: 1
                                          })) : createCommentVNode("", true),
                                          item.purposes.issueCommand ? (openBlock(), createBlock(VChip, {
                                            key: 2,
                                            size: "small",
                                            color: "warning",
                                            class: "mr-1"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" \u0E2D\u0E2D\u0E01\u0E04\u0E33\u0E2A\u0E31\u0E48\u0E07 ")
                                            ]),
                                            _: 1
                                          })) : createCommentVNode("", true),
                                          item.purposes.continue ? (openBlock(), createBlock(VChip, {
                                            key: 3,
                                            size: "small",
                                            color: "success",
                                            class: "mr-1"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" \u0E14\u0E33\u0E40\u0E19\u0E34\u0E19\u0E01\u0E32\u0E23 ")
                                            ]),
                                            _: 1
                                          })) : createCommentVNode("", true)
                                        ]),
                                        "item.updatedAt": withCtx(({ item }) => [
                                          createTextVNode(toDisplayString(formatDateTime(item.updatedAt)), 1)
                                        ]),
                                        "item.actions": withCtx(({ item }) => [
                                          createVNode("div", { class: "d-flex gap-1" }, [
                                            createVNode(VTooltip, {
                                              text: "\u0E14\u0E39",
                                              location: "top"
                                            }, {
                                              activator: withCtx(({ props }) => [
                                                createVNode(VBtn, mergeProps(props, {
                                                  icon: "",
                                                  size: "small",
                                                  variant: "text",
                                                  color: "primary",
                                                  onClick: ($event) => viewMemo(item.id)
                                                }), {
                                                  default: withCtx(() => [
                                                    createVNode(VIcon, { size: "20" }, {
                                                      default: withCtx(() => [
                                                        createTextVNode("bx-show")
                                                      ]),
                                                      _: 1
                                                    })
                                                  ]),
                                                  _: 1
                                                }, 16, ["onClick"])
                                              ]),
                                              _: 2
                                            }, 1024),
                                            createVNode(VTooltip, {
                                              text: "\u0E41\u0E01\u0E49\u0E44\u0E02",
                                              location: "top"
                                            }, {
                                              activator: withCtx(({ props }) => [
                                                createVNode(VBtn, mergeProps(props, {
                                                  icon: "",
                                                  size: "small",
                                                  variant: "text",
                                                  color: "info",
                                                  onClick: ($event) => editMemo(item.id)
                                                }), {
                                                  default: withCtx(() => [
                                                    createVNode(VIcon, { size: "20" }, {
                                                      default: withCtx(() => [
                                                        createTextVNode("bx-edit")
                                                      ]),
                                                      _: 1
                                                    })
                                                  ]),
                                                  _: 1
                                                }, 16, ["onClick"])
                                              ]),
                                              _: 2
                                            }, 1024),
                                            createVNode(VTooltip, {
                                              text: "Export PDF",
                                              location: "top"
                                            }, {
                                              activator: withCtx(({ props }) => [
                                                createVNode(VBtn, mergeProps(props, {
                                                  icon: "",
                                                  size: "small",
                                                  variant: "text",
                                                  color: "success",
                                                  onClick: ($event) => exportMemo(item.id)
                                                }), {
                                                  default: withCtx(() => [
                                                    createVNode(VIcon, { size: "20" }, {
                                                      default: withCtx(() => [
                                                        createTextVNode("bxs-file-pdf")
                                                      ]),
                                                      _: 1
                                                    })
                                                  ]),
                                                  _: 1
                                                }, 16, ["onClick"])
                                              ]),
                                              _: 2
                                            }, 1024),
                                            createVNode(VTooltip, {
                                              text: "\u0E25\u0E1A",
                                              location: "top"
                                            }, {
                                              activator: withCtx(({ props }) => [
                                                createVNode(VBtn, mergeProps(props, {
                                                  icon: "",
                                                  size: "small",
                                                  variant: "text",
                                                  color: "error",
                                                  onClick: ($event) => confirmDelete(item.id)
                                                }), {
                                                  default: withCtx(() => [
                                                    createVNode(VIcon, { size: "20" }, {
                                                      default: withCtx(() => [
                                                        createTextVNode("bx-trash")
                                                      ]),
                                                      _: 1
                                                    })
                                                  ]),
                                                  _: 1
                                                }, 16, ["onClick"])
                                              ]),
                                              _: 2
                                            }, 1024)
                                          ])
                                        ]),
                                        _: 1
                                      }, 8, ["items"]))
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VCardText, null, {
                                  default: withCtx(() => [
                                    unref(memoStore).savedMemos.length === 0 ? (openBlock(), createBlock("div", {
                                      key: 0,
                                      class: "text-center py-16"
                                    }, [
                                      createVNode(VIcon, {
                                        size: "80",
                                        color: "grey-lighten-1"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" bx-file ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode("p", { class: "text-h6 mt-4 text-medium-emphasis" }, " \u0E22\u0E31\u0E07\u0E44\u0E21\u0E48\u0E21\u0E35\u0E43\u0E1A\u0E02\u0E2D\u0E0B\u0E37\u0E49\u0E2D "),
                                      createVNode("p", { class: "text-body-2 text-medium-emphasis mb-4" }, " \u0E40\u0E23\u0E34\u0E48\u0E21\u0E15\u0E49\u0E19\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E43\u0E1A\u0E02\u0E2D\u0E0B\u0E37\u0E49\u0E2D\u0E41\u0E23\u0E01\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13 "),
                                      createVNode(VBtn, {
                                        color: "primary",
                                        onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))("/memo/create")
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VIcon, { start: "" }, {
                                            default: withCtx(() => [
                                              createTextVNode(" bx-plus ")
                                            ]),
                                            _: 1
                                          }),
                                          createTextVNode(" \u0E2A\u0E23\u0E49\u0E32\u0E07\u0E43\u0E1A\u0E02\u0E2D\u0E0B\u0E37\u0E49\u0E2D\u0E43\u0E2B\u0E21\u0E48 ")
                                        ]),
                                        _: 1
                                      }, 8, ["onClick"])
                                    ])) : (openBlock(), createBlock(VDataTable, {
                                      key: 1,
                                      headers,
                                      items: unref(memoStore).savedMemos,
                                      "items-per-page": 10,
                                      class: "elevation-0"
                                    }, {
                                      "item.date": withCtx(({ item }) => [
                                        createTextVNode(toDisplayString(formatDate(item.date)), 1)
                                      ]),
                                      "item.purposes": withCtx(({ item }) => [
                                        item.purposes.consider ? (openBlock(), createBlock(VChip, {
                                          key: 0,
                                          size: "small",
                                          color: "primary",
                                          class: "mr-1"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" \u0E1E\u0E34\u0E08\u0E32\u0E23\u0E13\u0E32 ")
                                          ]),
                                          _: 1
                                        })) : createCommentVNode("", true),
                                        item.purposes.know ? (openBlock(), createBlock(VChip, {
                                          key: 1,
                                          size: "small",
                                          color: "info",
                                          class: "mr-1"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" \u0E17\u0E23\u0E32\u0E1A ")
                                          ]),
                                          _: 1
                                        })) : createCommentVNode("", true),
                                        item.purposes.issueCommand ? (openBlock(), createBlock(VChip, {
                                          key: 2,
                                          size: "small",
                                          color: "warning",
                                          class: "mr-1"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" \u0E2D\u0E2D\u0E01\u0E04\u0E33\u0E2A\u0E31\u0E48\u0E07 ")
                                          ]),
                                          _: 1
                                        })) : createCommentVNode("", true),
                                        item.purposes.continue ? (openBlock(), createBlock(VChip, {
                                          key: 3,
                                          size: "small",
                                          color: "success",
                                          class: "mr-1"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" \u0E14\u0E33\u0E40\u0E19\u0E34\u0E19\u0E01\u0E32\u0E23 ")
                                          ]),
                                          _: 1
                                        })) : createCommentVNode("", true)
                                      ]),
                                      "item.updatedAt": withCtx(({ item }) => [
                                        createTextVNode(toDisplayString(formatDateTime(item.updatedAt)), 1)
                                      ]),
                                      "item.actions": withCtx(({ item }) => [
                                        createVNode("div", { class: "d-flex gap-1" }, [
                                          createVNode(VTooltip, {
                                            text: "\u0E14\u0E39",
                                            location: "top"
                                          }, {
                                            activator: withCtx(({ props }) => [
                                              createVNode(VBtn, mergeProps(props, {
                                                icon: "",
                                                size: "small",
                                                variant: "text",
                                                color: "primary",
                                                onClick: ($event) => viewMemo(item.id)
                                              }), {
                                                default: withCtx(() => [
                                                  createVNode(VIcon, { size: "20" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode("bx-show")
                                                    ]),
                                                    _: 1
                                                  })
                                                ]),
                                                _: 1
                                              }, 16, ["onClick"])
                                            ]),
                                            _: 2
                                          }, 1024),
                                          createVNode(VTooltip, {
                                            text: "\u0E41\u0E01\u0E49\u0E44\u0E02",
                                            location: "top"
                                          }, {
                                            activator: withCtx(({ props }) => [
                                              createVNode(VBtn, mergeProps(props, {
                                                icon: "",
                                                size: "small",
                                                variant: "text",
                                                color: "info",
                                                onClick: ($event) => editMemo(item.id)
                                              }), {
                                                default: withCtx(() => [
                                                  createVNode(VIcon, { size: "20" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode("bx-edit")
                                                    ]),
                                                    _: 1
                                                  })
                                                ]),
                                                _: 1
                                              }, 16, ["onClick"])
                                            ]),
                                            _: 2
                                          }, 1024),
                                          createVNode(VTooltip, {
                                            text: "Export PDF",
                                            location: "top"
                                          }, {
                                            activator: withCtx(({ props }) => [
                                              createVNode(VBtn, mergeProps(props, {
                                                icon: "",
                                                size: "small",
                                                variant: "text",
                                                color: "success",
                                                onClick: ($event) => exportMemo(item.id)
                                              }), {
                                                default: withCtx(() => [
                                                  createVNode(VIcon, { size: "20" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode("bxs-file-pdf")
                                                    ]),
                                                    _: 1
                                                  })
                                                ]),
                                                _: 1
                                              }, 16, ["onClick"])
                                            ]),
                                            _: 2
                                          }, 1024),
                                          createVNode(VTooltip, {
                                            text: "\u0E25\u0E1A",
                                            location: "top"
                                          }, {
                                            activator: withCtx(({ props }) => [
                                              createVNode(VBtn, mergeProps(props, {
                                                icon: "",
                                                size: "small",
                                                variant: "text",
                                                color: "error",
                                                onClick: ($event) => confirmDelete(item.id)
                                              }), {
                                                default: withCtx(() => [
                                                  createVNode(VIcon, { size: "20" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode("bx-trash")
                                                    ]),
                                                    _: 1
                                                  })
                                                ]),
                                                _: 1
                                              }, 16, ["onClick"])
                                            ]),
                                            _: 2
                                          }, 1024)
                                        ])
                                      ]),
                                      _: 1
                                    }, 8, ["items"]))
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
                                  unref(memoStore).savedMemos.length === 0 ? (openBlock(), createBlock("div", {
                                    key: 0,
                                    class: "text-center py-16"
                                  }, [
                                    createVNode(VIcon, {
                                      size: "80",
                                      color: "grey-lighten-1"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" bx-file ")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode("p", { class: "text-h6 mt-4 text-medium-emphasis" }, " \u0E22\u0E31\u0E07\u0E44\u0E21\u0E48\u0E21\u0E35\u0E43\u0E1A\u0E02\u0E2D\u0E0B\u0E37\u0E49\u0E2D "),
                                    createVNode("p", { class: "text-body-2 text-medium-emphasis mb-4" }, " \u0E40\u0E23\u0E34\u0E48\u0E21\u0E15\u0E49\u0E19\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E43\u0E1A\u0E02\u0E2D\u0E0B\u0E37\u0E49\u0E2D\u0E41\u0E23\u0E01\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13 "),
                                    createVNode(VBtn, {
                                      color: "primary",
                                      onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))("/memo/create")
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VIcon, { start: "" }, {
                                          default: withCtx(() => [
                                            createTextVNode(" bx-plus ")
                                          ]),
                                          _: 1
                                        }),
                                        createTextVNode(" \u0E2A\u0E23\u0E49\u0E32\u0E07\u0E43\u0E1A\u0E02\u0E2D\u0E0B\u0E37\u0E49\u0E2D\u0E43\u0E2B\u0E21\u0E48 ")
                                      ]),
                                      _: 1
                                    }, 8, ["onClick"])
                                  ])) : (openBlock(), createBlock(VDataTable, {
                                    key: 1,
                                    headers,
                                    items: unref(memoStore).savedMemos,
                                    "items-per-page": 10,
                                    class: "elevation-0"
                                  }, {
                                    "item.date": withCtx(({ item }) => [
                                      createTextVNode(toDisplayString(formatDate(item.date)), 1)
                                    ]),
                                    "item.purposes": withCtx(({ item }) => [
                                      item.purposes.consider ? (openBlock(), createBlock(VChip, {
                                        key: 0,
                                        size: "small",
                                        color: "primary",
                                        class: "mr-1"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" \u0E1E\u0E34\u0E08\u0E32\u0E23\u0E13\u0E32 ")
                                        ]),
                                        _: 1
                                      })) : createCommentVNode("", true),
                                      item.purposes.know ? (openBlock(), createBlock(VChip, {
                                        key: 1,
                                        size: "small",
                                        color: "info",
                                        class: "mr-1"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" \u0E17\u0E23\u0E32\u0E1A ")
                                        ]),
                                        _: 1
                                      })) : createCommentVNode("", true),
                                      item.purposes.issueCommand ? (openBlock(), createBlock(VChip, {
                                        key: 2,
                                        size: "small",
                                        color: "warning",
                                        class: "mr-1"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" \u0E2D\u0E2D\u0E01\u0E04\u0E33\u0E2A\u0E31\u0E48\u0E07 ")
                                        ]),
                                        _: 1
                                      })) : createCommentVNode("", true),
                                      item.purposes.continue ? (openBlock(), createBlock(VChip, {
                                        key: 3,
                                        size: "small",
                                        color: "success",
                                        class: "mr-1"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" \u0E14\u0E33\u0E40\u0E19\u0E34\u0E19\u0E01\u0E32\u0E23 ")
                                        ]),
                                        _: 1
                                      })) : createCommentVNode("", true)
                                    ]),
                                    "item.updatedAt": withCtx(({ item }) => [
                                      createTextVNode(toDisplayString(formatDateTime(item.updatedAt)), 1)
                                    ]),
                                    "item.actions": withCtx(({ item }) => [
                                      createVNode("div", { class: "d-flex gap-1" }, [
                                        createVNode(VTooltip, {
                                          text: "\u0E14\u0E39",
                                          location: "top"
                                        }, {
                                          activator: withCtx(({ props }) => [
                                            createVNode(VBtn, mergeProps(props, {
                                              icon: "",
                                              size: "small",
                                              variant: "text",
                                              color: "primary",
                                              onClick: ($event) => viewMemo(item.id)
                                            }), {
                                              default: withCtx(() => [
                                                createVNode(VIcon, { size: "20" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode("bx-show")
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            }, 16, ["onClick"])
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(VTooltip, {
                                          text: "\u0E41\u0E01\u0E49\u0E44\u0E02",
                                          location: "top"
                                        }, {
                                          activator: withCtx(({ props }) => [
                                            createVNode(VBtn, mergeProps(props, {
                                              icon: "",
                                              size: "small",
                                              variant: "text",
                                              color: "info",
                                              onClick: ($event) => editMemo(item.id)
                                            }), {
                                              default: withCtx(() => [
                                                createVNode(VIcon, { size: "20" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode("bx-edit")
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            }, 16, ["onClick"])
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(VTooltip, {
                                          text: "Export PDF",
                                          location: "top"
                                        }, {
                                          activator: withCtx(({ props }) => [
                                            createVNode(VBtn, mergeProps(props, {
                                              icon: "",
                                              size: "small",
                                              variant: "text",
                                              color: "success",
                                              onClick: ($event) => exportMemo(item.id)
                                            }), {
                                              default: withCtx(() => [
                                                createVNode(VIcon, { size: "20" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode("bxs-file-pdf")
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            }, 16, ["onClick"])
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(VTooltip, {
                                          text: "\u0E25\u0E1A",
                                          location: "top"
                                        }, {
                                          activator: withCtx(({ props }) => [
                                            createVNode(VBtn, mergeProps(props, {
                                              icon: "",
                                              size: "small",
                                              variant: "text",
                                              color: "error",
                                              onClick: ($event) => confirmDelete(item.id)
                                            }), {
                                              default: withCtx(() => [
                                                createVNode(VIcon, { size: "20" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode("bx-trash")
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            }, 16, ["onClick"])
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ])
                                    ]),
                                    _: 1
                                  }, 8, ["items"]))
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
                                unref(memoStore).savedMemos.length === 0 ? (openBlock(), createBlock("div", {
                                  key: 0,
                                  class: "text-center py-16"
                                }, [
                                  createVNode(VIcon, {
                                    size: "80",
                                    color: "grey-lighten-1"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" bx-file ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode("p", { class: "text-h6 mt-4 text-medium-emphasis" }, " \u0E22\u0E31\u0E07\u0E44\u0E21\u0E48\u0E21\u0E35\u0E43\u0E1A\u0E02\u0E2D\u0E0B\u0E37\u0E49\u0E2D "),
                                  createVNode("p", { class: "text-body-2 text-medium-emphasis mb-4" }, " \u0E40\u0E23\u0E34\u0E48\u0E21\u0E15\u0E49\u0E19\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E43\u0E1A\u0E02\u0E2D\u0E0B\u0E37\u0E49\u0E2D\u0E41\u0E23\u0E01\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13 "),
                                  createVNode(VBtn, {
                                    color: "primary",
                                    onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))("/memo/create")
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VIcon, { start: "" }, {
                                        default: withCtx(() => [
                                          createTextVNode(" bx-plus ")
                                        ]),
                                        _: 1
                                      }),
                                      createTextVNode(" \u0E2A\u0E23\u0E49\u0E32\u0E07\u0E43\u0E1A\u0E02\u0E2D\u0E0B\u0E37\u0E49\u0E2D\u0E43\u0E2B\u0E21\u0E48 ")
                                    ]),
                                    _: 1
                                  }, 8, ["onClick"])
                                ])) : (openBlock(), createBlock(VDataTable, {
                                  key: 1,
                                  headers,
                                  items: unref(memoStore).savedMemos,
                                  "items-per-page": 10,
                                  class: "elevation-0"
                                }, {
                                  "item.date": withCtx(({ item }) => [
                                    createTextVNode(toDisplayString(formatDate(item.date)), 1)
                                  ]),
                                  "item.purposes": withCtx(({ item }) => [
                                    item.purposes.consider ? (openBlock(), createBlock(VChip, {
                                      key: 0,
                                      size: "small",
                                      color: "primary",
                                      class: "mr-1"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" \u0E1E\u0E34\u0E08\u0E32\u0E23\u0E13\u0E32 ")
                                      ]),
                                      _: 1
                                    })) : createCommentVNode("", true),
                                    item.purposes.know ? (openBlock(), createBlock(VChip, {
                                      key: 1,
                                      size: "small",
                                      color: "info",
                                      class: "mr-1"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" \u0E17\u0E23\u0E32\u0E1A ")
                                      ]),
                                      _: 1
                                    })) : createCommentVNode("", true),
                                    item.purposes.issueCommand ? (openBlock(), createBlock(VChip, {
                                      key: 2,
                                      size: "small",
                                      color: "warning",
                                      class: "mr-1"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" \u0E2D\u0E2D\u0E01\u0E04\u0E33\u0E2A\u0E31\u0E48\u0E07 ")
                                      ]),
                                      _: 1
                                    })) : createCommentVNode("", true),
                                    item.purposes.continue ? (openBlock(), createBlock(VChip, {
                                      key: 3,
                                      size: "small",
                                      color: "success",
                                      class: "mr-1"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" \u0E14\u0E33\u0E40\u0E19\u0E34\u0E19\u0E01\u0E32\u0E23 ")
                                      ]),
                                      _: 1
                                    })) : createCommentVNode("", true)
                                  ]),
                                  "item.updatedAt": withCtx(({ item }) => [
                                    createTextVNode(toDisplayString(formatDateTime(item.updatedAt)), 1)
                                  ]),
                                  "item.actions": withCtx(({ item }) => [
                                    createVNode("div", { class: "d-flex gap-1" }, [
                                      createVNode(VTooltip, {
                                        text: "\u0E14\u0E39",
                                        location: "top"
                                      }, {
                                        activator: withCtx(({ props }) => [
                                          createVNode(VBtn, mergeProps(props, {
                                            icon: "",
                                            size: "small",
                                            variant: "text",
                                            color: "primary",
                                            onClick: ($event) => viewMemo(item.id)
                                          }), {
                                            default: withCtx(() => [
                                              createVNode(VIcon, { size: "20" }, {
                                                default: withCtx(() => [
                                                  createTextVNode("bx-show")
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          }, 16, ["onClick"])
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(VTooltip, {
                                        text: "\u0E41\u0E01\u0E49\u0E44\u0E02",
                                        location: "top"
                                      }, {
                                        activator: withCtx(({ props }) => [
                                          createVNode(VBtn, mergeProps(props, {
                                            icon: "",
                                            size: "small",
                                            variant: "text",
                                            color: "info",
                                            onClick: ($event) => editMemo(item.id)
                                          }), {
                                            default: withCtx(() => [
                                              createVNode(VIcon, { size: "20" }, {
                                                default: withCtx(() => [
                                                  createTextVNode("bx-edit")
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          }, 16, ["onClick"])
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(VTooltip, {
                                        text: "Export PDF",
                                        location: "top"
                                      }, {
                                        activator: withCtx(({ props }) => [
                                          createVNode(VBtn, mergeProps(props, {
                                            icon: "",
                                            size: "small",
                                            variant: "text",
                                            color: "success",
                                            onClick: ($event) => exportMemo(item.id)
                                          }), {
                                            default: withCtx(() => [
                                              createVNode(VIcon, { size: "20" }, {
                                                default: withCtx(() => [
                                                  createTextVNode("bxs-file-pdf")
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          }, 16, ["onClick"])
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(VTooltip, {
                                        text: "\u0E25\u0E1A",
                                        location: "top"
                                      }, {
                                        activator: withCtx(({ props }) => [
                                          createVNode(VBtn, mergeProps(props, {
                                            icon: "",
                                            size: "small",
                                            variant: "text",
                                            color: "error",
                                            onClick: ($event) => confirmDelete(item.id)
                                          }), {
                                            default: withCtx(() => [
                                              createVNode(VIcon, { size: "20" }, {
                                                default: withCtx(() => [
                                                  createTextVNode("bx-trash")
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          }, 16, ["onClick"])
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ])
                                  ]),
                                  _: 1
                                }, 8, ["items"]))
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
              createVNode(_component_Breadcrumbs, {
                items: [{ text: "\u0E43\u0E1A\u0E02\u0E2D\u0E0B\u0E37\u0E49\u0E2D", icon: "bx-file" }],
                "show-home": true
              }),
              createVNode(VRow, null, {
                default: withCtx(() => [
                  createVNode(VCol, { cols: "12" }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "d-flex justify-space-between align-center mb-4" }, [
                        createVNode("div", null, [
                          createVNode("h1", { class: "text-h4 font-weight-bold" }, " \u0E43\u0E1A\u0E02\u0E2D\u0E0B\u0E37\u0E49\u0E2D (Purchase Request Memo) "),
                          createVNode("p", { class: "text-subtitle-1 text-medium-emphasis" }, " \u0E23\u0E32\u0E22\u0E01\u0E32\u0E23\u0E43\u0E1A\u0E02\u0E2D\u0E0B\u0E37\u0E49\u0E2D\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14 ")
                        ]),
                        createVNode(VBtn, {
                          color: "primary",
                          size: "large",
                          onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))("/memo/create")
                        }, {
                          default: withCtx(() => [
                            createVNode(VIcon, { start: "" }, {
                              default: withCtx(() => [
                                createTextVNode(" bx-plus ")
                              ]),
                              _: 1
                            }),
                            createTextVNode(" \u0E2A\u0E23\u0E49\u0E32\u0E07\u0E43\u0E1A\u0E02\u0E2D\u0E0B\u0E37\u0E49\u0E2D\u0E43\u0E2B\u0E21\u0E48 ")
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
                      createVNode(VCard, null, {
                        default: withCtx(() => [
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              unref(memoStore).savedMemos.length === 0 ? (openBlock(), createBlock("div", {
                                key: 0,
                                class: "text-center py-16"
                              }, [
                                createVNode(VIcon, {
                                  size: "80",
                                  color: "grey-lighten-1"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" bx-file ")
                                  ]),
                                  _: 1
                                }),
                                createVNode("p", { class: "text-h6 mt-4 text-medium-emphasis" }, " \u0E22\u0E31\u0E07\u0E44\u0E21\u0E48\u0E21\u0E35\u0E43\u0E1A\u0E02\u0E2D\u0E0B\u0E37\u0E49\u0E2D "),
                                createVNode("p", { class: "text-body-2 text-medium-emphasis mb-4" }, " \u0E40\u0E23\u0E34\u0E48\u0E21\u0E15\u0E49\u0E19\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E43\u0E1A\u0E02\u0E2D\u0E0B\u0E37\u0E49\u0E2D\u0E41\u0E23\u0E01\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13 "),
                                createVNode(VBtn, {
                                  color: "primary",
                                  onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))("/memo/create")
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VIcon, { start: "" }, {
                                      default: withCtx(() => [
                                        createTextVNode(" bx-plus ")
                                      ]),
                                      _: 1
                                    }),
                                    createTextVNode(" \u0E2A\u0E23\u0E49\u0E32\u0E07\u0E43\u0E1A\u0E02\u0E2D\u0E0B\u0E37\u0E49\u0E2D\u0E43\u0E2B\u0E21\u0E48 ")
                                  ]),
                                  _: 1
                                }, 8, ["onClick"])
                              ])) : (openBlock(), createBlock(VDataTable, {
                                key: 1,
                                headers,
                                items: unref(memoStore).savedMemos,
                                "items-per-page": 10,
                                class: "elevation-0"
                              }, {
                                "item.date": withCtx(({ item }) => [
                                  createTextVNode(toDisplayString(formatDate(item.date)), 1)
                                ]),
                                "item.purposes": withCtx(({ item }) => [
                                  item.purposes.consider ? (openBlock(), createBlock(VChip, {
                                    key: 0,
                                    size: "small",
                                    color: "primary",
                                    class: "mr-1"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" \u0E1E\u0E34\u0E08\u0E32\u0E23\u0E13\u0E32 ")
                                    ]),
                                    _: 1
                                  })) : createCommentVNode("", true),
                                  item.purposes.know ? (openBlock(), createBlock(VChip, {
                                    key: 1,
                                    size: "small",
                                    color: "info",
                                    class: "mr-1"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" \u0E17\u0E23\u0E32\u0E1A ")
                                    ]),
                                    _: 1
                                  })) : createCommentVNode("", true),
                                  item.purposes.issueCommand ? (openBlock(), createBlock(VChip, {
                                    key: 2,
                                    size: "small",
                                    color: "warning",
                                    class: "mr-1"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" \u0E2D\u0E2D\u0E01\u0E04\u0E33\u0E2A\u0E31\u0E48\u0E07 ")
                                    ]),
                                    _: 1
                                  })) : createCommentVNode("", true),
                                  item.purposes.continue ? (openBlock(), createBlock(VChip, {
                                    key: 3,
                                    size: "small",
                                    color: "success",
                                    class: "mr-1"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" \u0E14\u0E33\u0E40\u0E19\u0E34\u0E19\u0E01\u0E32\u0E23 ")
                                    ]),
                                    _: 1
                                  })) : createCommentVNode("", true)
                                ]),
                                "item.updatedAt": withCtx(({ item }) => [
                                  createTextVNode(toDisplayString(formatDateTime(item.updatedAt)), 1)
                                ]),
                                "item.actions": withCtx(({ item }) => [
                                  createVNode("div", { class: "d-flex gap-1" }, [
                                    createVNode(VTooltip, {
                                      text: "\u0E14\u0E39",
                                      location: "top"
                                    }, {
                                      activator: withCtx(({ props }) => [
                                        createVNode(VBtn, mergeProps(props, {
                                          icon: "",
                                          size: "small",
                                          variant: "text",
                                          color: "primary",
                                          onClick: ($event) => viewMemo(item.id)
                                        }), {
                                          default: withCtx(() => [
                                            createVNode(VIcon, { size: "20" }, {
                                              default: withCtx(() => [
                                                createTextVNode("bx-show")
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }, 16, ["onClick"])
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(VTooltip, {
                                      text: "\u0E41\u0E01\u0E49\u0E44\u0E02",
                                      location: "top"
                                    }, {
                                      activator: withCtx(({ props }) => [
                                        createVNode(VBtn, mergeProps(props, {
                                          icon: "",
                                          size: "small",
                                          variant: "text",
                                          color: "info",
                                          onClick: ($event) => editMemo(item.id)
                                        }), {
                                          default: withCtx(() => [
                                            createVNode(VIcon, { size: "20" }, {
                                              default: withCtx(() => [
                                                createTextVNode("bx-edit")
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }, 16, ["onClick"])
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(VTooltip, {
                                      text: "Export PDF",
                                      location: "top"
                                    }, {
                                      activator: withCtx(({ props }) => [
                                        createVNode(VBtn, mergeProps(props, {
                                          icon: "",
                                          size: "small",
                                          variant: "text",
                                          color: "success",
                                          onClick: ($event) => exportMemo(item.id)
                                        }), {
                                          default: withCtx(() => [
                                            createVNode(VIcon, { size: "20" }, {
                                              default: withCtx(() => [
                                                createTextVNode("bxs-file-pdf")
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }, 16, ["onClick"])
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(VTooltip, {
                                      text: "\u0E25\u0E1A",
                                      location: "top"
                                    }, {
                                      activator: withCtx(({ props }) => [
                                        createVNode(VBtn, mergeProps(props, {
                                          icon: "",
                                          size: "small",
                                          variant: "text",
                                          color: "error",
                                          onClick: ($event) => confirmDelete(item.id)
                                        }), {
                                          default: withCtx(() => [
                                            createVNode(VIcon, { size: "20" }, {
                                              default: withCtx(() => [
                                                createTextVNode("bx-trash")
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }, 16, ["onClick"])
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ])
                                ]),
                                _: 1
                              }, 8, ["items"]))
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
      _push(ssrRenderComponent(VDialog, {
        modelValue: deleteDialog.value,
        "onUpdate:modelValue": ($event) => deleteDialog.value = $event,
        "max-width": "400"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCard, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCardTitle, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u0E22\u0E37\u0E19\u0E22\u0E31\u0E19\u0E01\u0E32\u0E23\u0E25\u0E1A`);
                      } else {
                        return [
                          createTextVNode("\u0E22\u0E37\u0E19\u0E22\u0E31\u0E19\u0E01\u0E32\u0E23\u0E25\u0E1A")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCardText, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \u0E04\u0E38\u0E13\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E25\u0E1A\u0E43\u0E1A\u0E02\u0E2D\u0E0B\u0E37\u0E49\u0E2D\u0E19\u0E35\u0E49\u0E2B\u0E23\u0E37\u0E2D\u0E44\u0E21\u0E48? \u0E01\u0E32\u0E23\u0E14\u0E33\u0E40\u0E19\u0E34\u0E19\u0E01\u0E32\u0E23\u0E19\u0E35\u0E49\u0E44\u0E21\u0E48\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E22\u0E49\u0E2D\u0E19\u0E01\u0E25\u0E31\u0E1A\u0E44\u0E14\u0E49 `);
                      } else {
                        return [
                          createTextVNode(" \u0E04\u0E38\u0E13\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E25\u0E1A\u0E43\u0E1A\u0E02\u0E2D\u0E0B\u0E37\u0E49\u0E2D\u0E19\u0E35\u0E49\u0E2B\u0E23\u0E37\u0E2D\u0E44\u0E21\u0E48? \u0E01\u0E32\u0E23\u0E14\u0E33\u0E40\u0E19\u0E34\u0E19\u0E01\u0E32\u0E23\u0E19\u0E35\u0E49\u0E44\u0E21\u0E48\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E22\u0E49\u0E2D\u0E19\u0E01\u0E25\u0E31\u0E1A\u0E44\u0E14\u0E49 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCardActions, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VSpacer, null, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VBtn, {
                          variant: "text",
                          onClick: ($event) => deleteDialog.value = false
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` \u0E22\u0E01\u0E40\u0E25\u0E34\u0E01 `);
                            } else {
                              return [
                                createTextVNode(" \u0E22\u0E01\u0E40\u0E25\u0E34\u0E01 ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VBtn, {
                          color: "error",
                          variant: "flat",
                          onClick: handleDelete
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` \u0E25\u0E1A `);
                            } else {
                              return [
                                createTextVNode(" \u0E25\u0E1A ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VSpacer),
                          createVNode(VBtn, {
                            variant: "text",
                            onClick: ($event) => deleteDialog.value = false
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" \u0E22\u0E01\u0E40\u0E25\u0E34\u0E01 ")
                            ]),
                            _: 1
                          }, 8, ["onClick"]),
                          createVNode(VBtn, {
                            color: "error",
                            variant: "flat",
                            onClick: handleDelete
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" \u0E25\u0E1A ")
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
                    createVNode(VCardTitle, null, {
                      default: withCtx(() => [
                        createTextVNode("\u0E22\u0E37\u0E19\u0E22\u0E31\u0E19\u0E01\u0E32\u0E23\u0E25\u0E1A")
                      ]),
                      _: 1
                    }),
                    createVNode(VCardText, null, {
                      default: withCtx(() => [
                        createTextVNode(" \u0E04\u0E38\u0E13\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E25\u0E1A\u0E43\u0E1A\u0E02\u0E2D\u0E0B\u0E37\u0E49\u0E2D\u0E19\u0E35\u0E49\u0E2B\u0E23\u0E37\u0E2D\u0E44\u0E21\u0E48? \u0E01\u0E32\u0E23\u0E14\u0E33\u0E40\u0E19\u0E34\u0E19\u0E01\u0E32\u0E23\u0E19\u0E35\u0E49\u0E44\u0E21\u0E48\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E22\u0E49\u0E2D\u0E19\u0E01\u0E25\u0E31\u0E1A\u0E44\u0E14\u0E49 ")
                      ]),
                      _: 1
                    }),
                    createVNode(VCardActions, null, {
                      default: withCtx(() => [
                        createVNode(VSpacer),
                        createVNode(VBtn, {
                          variant: "text",
                          onClick: ($event) => deleteDialog.value = false
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u0E22\u0E01\u0E40\u0E25\u0E34\u0E01 ")
                          ]),
                          _: 1
                        }, 8, ["onClick"]),
                        createVNode(VBtn, {
                          color: "error",
                          variant: "flat",
                          onClick: handleDelete
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u0E25\u0E1A ")
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
              createVNode(VCard, null, {
                default: withCtx(() => [
                  createVNode(VCardTitle, null, {
                    default: withCtx(() => [
                      createTextVNode("\u0E22\u0E37\u0E19\u0E22\u0E31\u0E19\u0E01\u0E32\u0E23\u0E25\u0E1A")
                    ]),
                    _: 1
                  }),
                  createVNode(VCardText, null, {
                    default: withCtx(() => [
                      createTextVNode(" \u0E04\u0E38\u0E13\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E25\u0E1A\u0E43\u0E1A\u0E02\u0E2D\u0E0B\u0E37\u0E49\u0E2D\u0E19\u0E35\u0E49\u0E2B\u0E23\u0E37\u0E2D\u0E44\u0E21\u0E48? \u0E01\u0E32\u0E23\u0E14\u0E33\u0E40\u0E19\u0E34\u0E19\u0E01\u0E32\u0E23\u0E19\u0E35\u0E49\u0E44\u0E21\u0E48\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E22\u0E49\u0E2D\u0E19\u0E01\u0E25\u0E31\u0E1A\u0E44\u0E14\u0E49 ")
                    ]),
                    _: 1
                  }),
                  createVNode(VCardActions, null, {
                    default: withCtx(() => [
                      createVNode(VSpacer),
                      createVNode(VBtn, {
                        variant: "text",
                        onClick: ($event) => deleteDialog.value = false
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" \u0E22\u0E01\u0E40\u0E25\u0E34\u0E01 ")
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode(VBtn, {
                        color: "error",
                        variant: "flat",
                        onClick: handleDelete
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" \u0E25\u0E1A ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/memo/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
