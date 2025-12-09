import { _ as __nuxt_component_0 } from './Breadcrumbs-CblUXPow.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-wKVHBGBj.mjs';
import { a as getStatusLabel } from './ticketStatuses-3ttXUEsr.mjs';
import { ref, watchEffect, mergeProps, withCtx, createTextVNode, toDisplayString, createVNode, unref, openBlock, createBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { u as useFixAssets } from './useFixAssets-Dbk6r4-p.mjs';
import { _ as _export_sfc, u as useRoute$1, H as useRouter$1, a as VBtn } from './server.mjs';
import { u as useHead } from './vue.-sixQ7xP-7crsJuN5.mjs';
import { V as VRow, a as VCol } from './VRow-zuLeAiTc.mjs';
import { V as VCard, c as VCardTitle, a as VCardText, e as VCardActions } from './VCard-CSiTQXcr.mjs';
import { V as VChip } from './VChip-DBW6TD_X.mjs';
import { V as VMenu } from './VMenu-CLtX8H-Q.mjs';
import { V as VList, a as VListItem, b as VListItemTitle } from './VList-DCeFvVa6.mjs';
import { V as VForm } from './VForm-wpOva5dg.mjs';
import { V as VTextField } from './VTextField-BBb08qcq.mjs';
import { V as VTextarea } from './VTextarea-C1Baibx1.mjs';
import { V as VSelect } from './VSelect-Cr6Di2uC.mjs';
import { V as VFileInput } from './VFileInput-DLZed_SR.mjs';
import { V as VDivider } from './VDivider-LYYZi4vy.mjs';
import { V as VDialog } from './VDialog-5Q-6dk5F.mjs';
import { V as VSnackbar } from './VSnackbar-DZIKnoSv.mjs';
import 'pinia';
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
import './VAvatar-BWioJSAV.mjs';
import './index-DUS45q6U.mjs';
import './VSlideGroup-C5ipntF0.mjs';
import './VOverlay-B9V9YqYJ.mjs';
import './forwardRefs-Oip3fNRq.mjs';
import './scopeId-b3c5ZUEe.mjs';
import './ssrBoot-BtvJZs44.mjs';
import './VCheckboxBtn-DiqOHInw.mjs';

const _sfc_main = {
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute$1();
    const router = useRouter$1();
    const { getTicket, updateTicket, removeTicket } = useFixAssets();
    const id = route.params.id;
    const ticket = ref(null);
    watchEffect(() => {
      if (!id) return;
      ticket.value = getTicket(id);
    });
    useHead({ title: ticket.value ? `${ticket.value.title} - GMT SUPPORT` : "\u0E41\u0E01\u0E49\u0E44\u0E02\u0E41\u0E08\u0E49\u0E07\u0E0B\u0E48\u0E2D\u0E21 - GMT SUPPORT" });
    const formRef = ref(null);
    const title = ref("");
    const description = ref("");
    const priority = ref("Normal");
    const file = ref(null);
    const titleRules = [(v) => !!v || "\u0E01\u0E23\u0E38\u0E13\u0E32\u0E01\u0E23\u0E2D\u0E01\u0E2B\u0E31\u0E27\u0E02\u0E49\u0E2D"];
    watchEffect(() => {
      if (!ticket.value) return;
      title.value = ticket.value.title;
      description.value = ticket.value.description;
      priority.value = ticket.value.priority || "Normal";
      file.value = ticket.value.fileName ? { name: ticket.value.fileName } : null;
    });
    async function save() {
      var _a;
      if (!ticket.value) return;
      const valid = formRef.value ? await formRef.value.validate() : true;
      if (!valid) return;
      updateTicket(ticket.value.id, { title: title.value, description: description.value, priority: priority.value, fileName: ((_a = file.value) == null ? void 0 : _a.name) || null });
      snackbarMessage.value = "\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01\u0E40\u0E23\u0E35\u0E22\u0E1A\u0E23\u0E49\u0E2D\u0E22";
      snackbar.value = true;
    }
    const transitions = {
      draft: ["pending_approval", "submitted_it", "cancelled"],
      pending_approval: ["approved", "rejected", "revised", "cancelled"],
      submitted_it: ["it_received", "cancelled"],
      it_received: ["in_queue", "assigned", "cancelled"],
      in_queue: ["assigned", "cancelled"],
      assigned: ["in_progress", "on_hold", "cancelled"],
      in_progress: ["waiting_user", "waiting_parts", "completed", "cancelled"],
      waiting_user: ["in_progress", "cancelled"],
      waiting_parts: ["in_progress", "cancelled"],
      completed: ["user_confirmation", "closed", "replaced"],
      user_confirmation: ["closed", "revised"],
      default: ["cancelled"]
    };
    function getAllowedTransitions(code) {
      return transitions[code] || transitions.default;
    }
    async function changeStatus(code) {
      if (!ticket.value) return;
      try {
        await updateTicket(ticket.value.id, { status: code });
        snackbarMessage.value = `\u0E2A\u0E16\u0E32\u0E19\u0E30\u0E40\u0E1B\u0E25\u0E35\u0E48\u0E22\u0E19\u0E40\u0E1B\u0E47\u0E19: ${getStatusLabel(code)}`;
        snackbar.value = true;
      } catch (e) {
        console.error("Failed to change status", e);
      }
    }
    const deleteDialog = ref(false);
    const deleting = ref(false);
    const snackbar = ref(false);
    const snackbarMessage = ref("");
    function removeSelf() {
      if (!ticket.value) return;
      deleteDialog.value = true;
    }
    async function confirmDelete() {
      if (!ticket.value) return;
      deleting.value = true;
      try {
        await removeTicket(ticket.value.id);
        router.push("/it-service-request");
      } catch (e) {
        console.error("Delete failed", e);
      } finally {
        deleting.value = false;
        deleteDialog.value = false;
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Breadcrumbs = __nuxt_component_0;
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "pa-4" }, _attrs))} data-v-20ecb7f3>`);
      _push(ssrRenderComponent(VRow, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCol, { cols: "12" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Breadcrumbs, {
                    showHome: true,
                    items: [{ text: "\u0E41\u0E08\u0E49\u0E07\u0E0B\u0E48\u0E2D\u0E21", to: "/it-service-request" }, { text: ticket.value ? ticket.value.title : "\u0E41\u0E01\u0E49\u0E44\u0E02\u0E41\u0E08\u0E49\u0E07\u0E0B\u0E48\u0E2D\u0E21" }]
                  }, null, _parent3, _scopeId2));
                  if (ticket.value) {
                    _push3(ssrRenderComponent(VCard, { class: "card-form" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(VCardTitle, { class: "d-flex align-center justify-space-between" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<div data-v-20ecb7f3${_scopeId4}><div class="h5" data-v-20ecb7f3${_scopeId4}>\u0E41\u0E01\u0E49\u0E44\u0E02\u0E41\u0E08\u0E49\u0E07\u0E0B\u0E48\u0E2D\u0E21</div><div class="text-muted" data-v-20ecb7f3${_scopeId4}>\u0E41\u0E01\u0E49\u0E44\u0E02\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E04\u0E33\u0E02\u0E2D\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13</div></div><div class="d-flex align-center gap-3" data-v-20ecb7f3${_scopeId4}><div class="text-muted small" data-v-20ecb7f3${_scopeId4}>${ssrInterpolate(ticket.value.createdAt)}</div>`);
                                _push5(ssrRenderComponent(VChip, {
                                  size: "small",
                                  color: priority.value === "Urgent" ? "error" : priority.value === "High" ? "warning" : priority.value === "Low" ? "info" : "secondary",
                                  "text-color": "white"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`${ssrInterpolate(priority.value)}`);
                                    } else {
                                      return [
                                        createTextVNode(toDisplayString(priority.value), 1)
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(VMenu, null, {
                                  activator: withCtx(({ props }, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(VBtn, mergeProps(props, {
                                        variant: "outlined",
                                        size: "small"
                                      }), {
                                        default: withCtx((_5, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`\u0E01\u0E32\u0E23\u0E14\u0E33\u0E40\u0E19\u0E34\u0E19\u0E01\u0E32\u0E23`);
                                          } else {
                                            return [
                                              createTextVNode("\u0E01\u0E32\u0E23\u0E14\u0E33\u0E40\u0E19\u0E34\u0E19\u0E01\u0E32\u0E23")
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(VBtn, mergeProps(props, {
                                          variant: "outlined",
                                          size: "small"
                                        }), {
                                          default: withCtx(() => [
                                            createTextVNode("\u0E01\u0E32\u0E23\u0E14\u0E33\u0E40\u0E19\u0E34\u0E19\u0E01\u0E32\u0E23")
                                          ]),
                                          _: 1
                                        }, 16)
                                      ];
                                    }
                                  }),
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(VList, null, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`<!--[-->`);
                                            ssrRenderList(getAllowedTransitions(ticket.value.status), (code) => {
                                              _push7(ssrRenderComponent(VListItem, {
                                                key: code,
                                                onClick: ($event) => changeStatus(code)
                                              }, {
                                                default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                  if (_push8) {
                                                    _push8(ssrRenderComponent(VListItemTitle, null, {
                                                      default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                        if (_push9) {
                                                          _push9(`${ssrInterpolate(("getStatusLabel" in _ctx ? _ctx.getStatusLabel : unref(getStatusLabel))(code))}`);
                                                        } else {
                                                          return [
                                                            createTextVNode(toDisplayString(("getStatusLabel" in _ctx ? _ctx.getStatusLabel : unref(getStatusLabel))(code)), 1)
                                                          ];
                                                        }
                                                      }),
                                                      _: 2
                                                    }, _parent8, _scopeId7));
                                                  } else {
                                                    return [
                                                      createVNode(VListItemTitle, null, {
                                                        default: withCtx(() => [
                                                          createTextVNode(toDisplayString(("getStatusLabel" in _ctx ? _ctx.getStatusLabel : unref(getStatusLabel))(code)), 1)
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
                                              (openBlock(true), createBlock(Fragment, null, renderList(getAllowedTransitions(ticket.value.status), (code) => {
                                                return openBlock(), createBlock(VListItem, {
                                                  key: code,
                                                  onClick: ($event) => changeStatus(code)
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(VListItemTitle, null, {
                                                      default: withCtx(() => [
                                                        createTextVNode(toDisplayString(("getStatusLabel" in _ctx ? _ctx.getStatusLabel : unref(getStatusLabel))(code)), 1)
                                                      ]),
                                                      _: 2
                                                    }, 1024)
                                                  ]),
                                                  _: 2
                                                }, 1032, ["onClick"]);
                                              }), 128))
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(VList, null, {
                                          default: withCtx(() => [
                                            (openBlock(true), createBlock(Fragment, null, renderList(getAllowedTransitions(ticket.value.status), (code) => {
                                              return openBlock(), createBlock(VListItem, {
                                                key: code,
                                                onClick: ($event) => changeStatus(code)
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(VListItemTitle, null, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(("getStatusLabel" in _ctx ? _ctx.getStatusLabel : unref(getStatusLabel))(code)), 1)
                                                    ]),
                                                    _: 2
                                                  }, 1024)
                                                ]),
                                                _: 2
                                              }, 1032, ["onClick"]);
                                            }), 128))
                                          ]),
                                          _: 1
                                        })
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                                _push5(`</div>`);
                              } else {
                                return [
                                  createVNode("div", null, [
                                    createVNode("div", { class: "h5" }, "\u0E41\u0E01\u0E49\u0E44\u0E02\u0E41\u0E08\u0E49\u0E07\u0E0B\u0E48\u0E2D\u0E21"),
                                    createVNode("div", { class: "text-muted" }, "\u0E41\u0E01\u0E49\u0E44\u0E02\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E04\u0E33\u0E02\u0E2D\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13")
                                  ]),
                                  createVNode("div", { class: "d-flex align-center gap-3" }, [
                                    createVNode("div", { class: "text-muted small" }, toDisplayString(ticket.value.createdAt), 1),
                                    createVNode(VChip, {
                                      size: "small",
                                      color: priority.value === "Urgent" ? "error" : priority.value === "High" ? "warning" : priority.value === "Low" ? "info" : "secondary",
                                      "text-color": "white"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(priority.value), 1)
                                      ]),
                                      _: 1
                                    }, 8, ["color"]),
                                    createVNode(VMenu, null, {
                                      activator: withCtx(({ props }) => [
                                        createVNode(VBtn, mergeProps(props, {
                                          variant: "outlined",
                                          size: "small"
                                        }), {
                                          default: withCtx(() => [
                                            createTextVNode("\u0E01\u0E32\u0E23\u0E14\u0E33\u0E40\u0E19\u0E34\u0E19\u0E01\u0E32\u0E23")
                                          ]),
                                          _: 1
                                        }, 16)
                                      ]),
                                      default: withCtx(() => [
                                        createVNode(VList, null, {
                                          default: withCtx(() => [
                                            (openBlock(true), createBlock(Fragment, null, renderList(getAllowedTransitions(ticket.value.status), (code) => {
                                              return openBlock(), createBlock(VListItem, {
                                                key: code,
                                                onClick: ($event) => changeStatus(code)
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(VListItemTitle, null, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(("getStatusLabel" in _ctx ? _ctx.getStatusLabel : unref(getStatusLabel))(code)), 1)
                                                    ]),
                                                    _: 2
                                                  }, 1024)
                                                ]),
                                                _: 2
                                              }, 1032, ["onClick"]);
                                            }), 128))
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(VCardText, { class: "card-body" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(VForm, {
                                  ref_key: "formRef",
                                  ref: formRef
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(VRow, null, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(VCol, { cols: "12" }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(ssrRenderComponent(VTextField, {
                                                    modelValue: title.value,
                                                    "onUpdate:modelValue": ($event) => title.value = $event,
                                                    label: "\u0E2B\u0E31\u0E27\u0E02\u0E49\u0E2D",
                                                    rules: titleRules,
                                                    required: ""
                                                  }, null, _parent8, _scopeId7));
                                                } else {
                                                  return [
                                                    createVNode(VTextField, {
                                                      modelValue: title.value,
                                                      "onUpdate:modelValue": ($event) => title.value = $event,
                                                      label: "\u0E2B\u0E31\u0E27\u0E02\u0E49\u0E2D",
                                                      rules: titleRules,
                                                      required: ""
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                  ];
                                                }
                                              }),
                                              _: 1
                                            }, _parent7, _scopeId6));
                                            _push7(ssrRenderComponent(VCol, { cols: "12" }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(ssrRenderComponent(VTextarea, {
                                                    modelValue: description.value,
                                                    "onUpdate:modelValue": ($event) => description.value = $event,
                                                    label: "\u0E23\u0E32\u0E22\u0E25\u0E30\u0E40\u0E2D\u0E35\u0E22\u0E14",
                                                    rows: "6"
                                                  }, null, _parent8, _scopeId7));
                                                } else {
                                                  return [
                                                    createVNode(VTextarea, {
                                                      modelValue: description.value,
                                                      "onUpdate:modelValue": ($event) => description.value = $event,
                                                      label: "\u0E23\u0E32\u0E22\u0E25\u0E30\u0E40\u0E2D\u0E35\u0E22\u0E14",
                                                      rows: "6"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                                                  _push8(ssrRenderComponent(VSelect, {
                                                    modelValue: priority.value,
                                                    "onUpdate:modelValue": ($event) => priority.value = $event,
                                                    items: ["Low", "Normal", "High", "Urgent"],
                                                    label: "\u0E04\u0E27\u0E32\u0E21\u0E2A\u0E33\u0E04\u0E31\u0E0D"
                                                  }, null, _parent8, _scopeId7));
                                                } else {
                                                  return [
                                                    createVNode(VSelect, {
                                                      modelValue: priority.value,
                                                      "onUpdate:modelValue": ($event) => priority.value = $event,
                                                      items: ["Low", "Normal", "High", "Urgent"],
                                                      label: "\u0E04\u0E27\u0E32\u0E21\u0E2A\u0E33\u0E04\u0E31\u0E0D"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                                                  _push8(ssrRenderComponent(VFileInput, {
                                                    modelValue: file.value,
                                                    "onUpdate:modelValue": ($event) => file.value = $event,
                                                    label: "\u0E41\u0E19\u0E1A\u0E44\u0E1F\u0E25\u0E4C (\u0E16\u0E49\u0E32\u0E21\u0E35)",
                                                    "show-size": ""
                                                  }, null, _parent8, _scopeId7));
                                                } else {
                                                  return [
                                                    createVNode(VFileInput, {
                                                      modelValue: file.value,
                                                      "onUpdate:modelValue": ($event) => file.value = $event,
                                                      label: "\u0E41\u0E19\u0E1A\u0E44\u0E1F\u0E25\u0E4C (\u0E16\u0E49\u0E32\u0E21\u0E35)",
                                                      "show-size": ""
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                  ];
                                                }
                                              }),
                                              _: 1
                                            }, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(VCol, { cols: "12" }, {
                                                default: withCtx(() => [
                                                  createVNode(VTextField, {
                                                    modelValue: title.value,
                                                    "onUpdate:modelValue": ($event) => title.value = $event,
                                                    label: "\u0E2B\u0E31\u0E27\u0E02\u0E49\u0E2D",
                                                    rules: titleRules,
                                                    required: ""
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(VCol, { cols: "12" }, {
                                                default: withCtx(() => [
                                                  createVNode(VTextarea, {
                                                    modelValue: description.value,
                                                    "onUpdate:modelValue": ($event) => description.value = $event,
                                                    label: "\u0E23\u0E32\u0E22\u0E25\u0E30\u0E40\u0E2D\u0E35\u0E22\u0E14",
                                                    rows: "6"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(VCol, {
                                                cols: "12",
                                                md: "6"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(VSelect, {
                                                    modelValue: priority.value,
                                                    "onUpdate:modelValue": ($event) => priority.value = $event,
                                                    items: ["Low", "Normal", "High", "Urgent"],
                                                    label: "\u0E04\u0E27\u0E32\u0E21\u0E2A\u0E33\u0E04\u0E31\u0E0D"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(VCol, {
                                                cols: "12",
                                                md: "6"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(VFileInput, {
                                                    modelValue: file.value,
                                                    "onUpdate:modelValue": ($event) => file.value = $event,
                                                    label: "\u0E41\u0E19\u0E1A\u0E44\u0E1F\u0E25\u0E4C (\u0E16\u0E49\u0E32\u0E21\u0E35)",
                                                    "show-size": ""
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ]),
                                                _: 1
                                              })
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(VRow, null, {
                                          default: withCtx(() => [
                                            createVNode(VCol, { cols: "12" }, {
                                              default: withCtx(() => [
                                                createVNode(VTextField, {
                                                  modelValue: title.value,
                                                  "onUpdate:modelValue": ($event) => title.value = $event,
                                                  label: "\u0E2B\u0E31\u0E27\u0E02\u0E49\u0E2D",
                                                  rules: titleRules,
                                                  required: ""
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, { cols: "12" }, {
                                              default: withCtx(() => [
                                                createVNode(VTextarea, {
                                                  modelValue: description.value,
                                                  "onUpdate:modelValue": ($event) => description.value = $event,
                                                  label: "\u0E23\u0E32\u0E22\u0E25\u0E30\u0E40\u0E2D\u0E35\u0E22\u0E14",
                                                  rows: "6"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              cols: "12",
                                              md: "6"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VSelect, {
                                                  modelValue: priority.value,
                                                  "onUpdate:modelValue": ($event) => priority.value = $event,
                                                  items: ["Low", "Normal", "High", "Urgent"],
                                                  label: "\u0E04\u0E27\u0E32\u0E21\u0E2A\u0E33\u0E04\u0E31\u0E0D"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              cols: "12",
                                              md: "6"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VFileInput, {
                                                  modelValue: file.value,
                                                  "onUpdate:modelValue": ($event) => file.value = $event,
                                                  label: "\u0E41\u0E19\u0E1A\u0E44\u0E1F\u0E25\u0E4C (\u0E16\u0E49\u0E32\u0E21\u0E35)",
                                                  "show-size": ""
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(VForm, {
                                    ref_key: "formRef",
                                    ref: formRef
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VRow, null, {
                                        default: withCtx(() => [
                                          createVNode(VCol, { cols: "12" }, {
                                            default: withCtx(() => [
                                              createVNode(VTextField, {
                                                modelValue: title.value,
                                                "onUpdate:modelValue": ($event) => title.value = $event,
                                                label: "\u0E2B\u0E31\u0E27\u0E02\u0E49\u0E2D",
                                                rules: titleRules,
                                                required: ""
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, { cols: "12" }, {
                                            default: withCtx(() => [
                                              createVNode(VTextarea, {
                                                modelValue: description.value,
                                                "onUpdate:modelValue": ($event) => description.value = $event,
                                                label: "\u0E23\u0E32\u0E22\u0E25\u0E30\u0E40\u0E2D\u0E35\u0E22\u0E14",
                                                rows: "6"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, {
                                            cols: "12",
                                            md: "6"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VSelect, {
                                                modelValue: priority.value,
                                                "onUpdate:modelValue": ($event) => priority.value = $event,
                                                items: ["Low", "Normal", "High", "Urgent"],
                                                label: "\u0E04\u0E27\u0E32\u0E21\u0E2A\u0E33\u0E04\u0E31\u0E0D"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, {
                                            cols: "12",
                                            md: "6"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VFileInput, {
                                                modelValue: file.value,
                                                "onUpdate:modelValue": ($event) => file.value = $event,
                                                label: "\u0E41\u0E19\u0E1A\u0E44\u0E1F\u0E25\u0E4C (\u0E16\u0E49\u0E32\u0E21\u0E35)",
                                                "show-size": ""
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }, 512)
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(VDivider, null, null, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(VCardActions, { class: "justify-space-between" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<div data-v-20ecb7f3${_scopeId4}>`);
                                _push5(ssrRenderComponent(_component_NuxtLink, { to: "/it-service-request" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(VBtn, { variant: "text" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`\u0E22\u0E01\u0E40\u0E25\u0E34\u0E01`);
                                          } else {
                                            return [
                                              createTextVNode("\u0E22\u0E01\u0E40\u0E25\u0E34\u0E01")
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(VBtn, { variant: "text" }, {
                                          default: withCtx(() => [
                                            createTextVNode("\u0E22\u0E01\u0E40\u0E25\u0E34\u0E01")
                                          ]),
                                          _: 1
                                        })
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                                _push5(`</div><div data-v-20ecb7f3${_scopeId4}>`);
                                _push5(ssrRenderComponent(VBtn, {
                                  color: "error",
                                  variant: "outlined",
                                  class: "me-2",
                                  onClick: removeSelf
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`\u0E25\u0E1A`);
                                    } else {
                                      return [
                                        createTextVNode("\u0E25\u0E1A")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(VBtn, {
                                  color: "primary",
                                  elevation: "2",
                                  onClick: save
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01`);
                                    } else {
                                      return [
                                        createTextVNode("\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                                _push5(`</div>`);
                              } else {
                                return [
                                  createVNode("div", null, [
                                    createVNode(_component_NuxtLink, { to: "/it-service-request" }, {
                                      default: withCtx(() => [
                                        createVNode(VBtn, { variant: "text" }, {
                                          default: withCtx(() => [
                                            createTextVNode("\u0E22\u0E01\u0E40\u0E25\u0E34\u0E01")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  createVNode("div", null, [
                                    createVNode(VBtn, {
                                      color: "error",
                                      variant: "outlined",
                                      class: "me-2",
                                      onClick: removeSelf
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("\u0E25\u0E1A")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VBtn, {
                                      color: "primary",
                                      elevation: "2",
                                      onClick: save
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01")
                                      ]),
                                      _: 1
                                    })
                                  ])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(VCardTitle, { class: "d-flex align-center justify-space-between" }, {
                              default: withCtx(() => [
                                createVNode("div", null, [
                                  createVNode("div", { class: "h5" }, "\u0E41\u0E01\u0E49\u0E44\u0E02\u0E41\u0E08\u0E49\u0E07\u0E0B\u0E48\u0E2D\u0E21"),
                                  createVNode("div", { class: "text-muted" }, "\u0E41\u0E01\u0E49\u0E44\u0E02\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E04\u0E33\u0E02\u0E2D\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13")
                                ]),
                                createVNode("div", { class: "d-flex align-center gap-3" }, [
                                  createVNode("div", { class: "text-muted small" }, toDisplayString(ticket.value.createdAt), 1),
                                  createVNode(VChip, {
                                    size: "small",
                                    color: priority.value === "Urgent" ? "error" : priority.value === "High" ? "warning" : priority.value === "Low" ? "info" : "secondary",
                                    "text-color": "white"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(priority.value), 1)
                                    ]),
                                    _: 1
                                  }, 8, ["color"]),
                                  createVNode(VMenu, null, {
                                    activator: withCtx(({ props }) => [
                                      createVNode(VBtn, mergeProps(props, {
                                        variant: "outlined",
                                        size: "small"
                                      }), {
                                        default: withCtx(() => [
                                          createTextVNode("\u0E01\u0E32\u0E23\u0E14\u0E33\u0E40\u0E19\u0E34\u0E19\u0E01\u0E32\u0E23")
                                        ]),
                                        _: 1
                                      }, 16)
                                    ]),
                                    default: withCtx(() => [
                                      createVNode(VList, null, {
                                        default: withCtx(() => [
                                          (openBlock(true), createBlock(Fragment, null, renderList(getAllowedTransitions(ticket.value.status), (code) => {
                                            return openBlock(), createBlock(VListItem, {
                                              key: code,
                                              onClick: ($event) => changeStatus(code)
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VListItemTitle, null, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(("getStatusLabel" in _ctx ? _ctx.getStatusLabel : unref(getStatusLabel))(code)), 1)
                                                  ]),
                                                  _: 2
                                                }, 1024)
                                              ]),
                                              _: 2
                                            }, 1032, ["onClick"]);
                                          }), 128))
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ])
                              ]),
                              _: 1
                            }),
                            createVNode(VCardText, { class: "card-body" }, {
                              default: withCtx(() => [
                                createVNode(VForm, {
                                  ref_key: "formRef",
                                  ref: formRef
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VRow, null, {
                                      default: withCtx(() => [
                                        createVNode(VCol, { cols: "12" }, {
                                          default: withCtx(() => [
                                            createVNode(VTextField, {
                                              modelValue: title.value,
                                              "onUpdate:modelValue": ($event) => title.value = $event,
                                              label: "\u0E2B\u0E31\u0E27\u0E02\u0E49\u0E2D",
                                              rules: titleRules,
                                              required: ""
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, { cols: "12" }, {
                                          default: withCtx(() => [
                                            createVNode(VTextarea, {
                                              modelValue: description.value,
                                              "onUpdate:modelValue": ($event) => description.value = $event,
                                              label: "\u0E23\u0E32\u0E22\u0E25\u0E30\u0E40\u0E2D\u0E35\u0E22\u0E14",
                                              rows: "6"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, {
                                          cols: "12",
                                          md: "6"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VSelect, {
                                              modelValue: priority.value,
                                              "onUpdate:modelValue": ($event) => priority.value = $event,
                                              items: ["Low", "Normal", "High", "Urgent"],
                                              label: "\u0E04\u0E27\u0E32\u0E21\u0E2A\u0E33\u0E04\u0E31\u0E0D"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, {
                                          cols: "12",
                                          md: "6"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VFileInput, {
                                              modelValue: file.value,
                                              "onUpdate:modelValue": ($event) => file.value = $event,
                                              label: "\u0E41\u0E19\u0E1A\u0E44\u0E1F\u0E25\u0E4C (\u0E16\u0E49\u0E32\u0E21\u0E35)",
                                              "show-size": ""
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }, 512)
                              ]),
                              _: 1
                            }),
                            createVNode(VDivider),
                            createVNode(VCardActions, { class: "justify-space-between" }, {
                              default: withCtx(() => [
                                createVNode("div", null, [
                                  createVNode(_component_NuxtLink, { to: "/it-service-request" }, {
                                    default: withCtx(() => [
                                      createVNode(VBtn, { variant: "text" }, {
                                        default: withCtx(() => [
                                          createTextVNode("\u0E22\u0E01\u0E40\u0E25\u0E34\u0E01")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                createVNode("div", null, [
                                  createVNode(VBtn, {
                                    color: "error",
                                    variant: "outlined",
                                    class: "me-2",
                                    onClick: removeSelf
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u0E25\u0E1A")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VBtn, {
                                    color: "primary",
                                    elevation: "2",
                                    onClick: save
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01")
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
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<div data-v-20ecb7f3${_scopeId2}>`);
                    _push3(ssrRenderComponent(VCard, { style: { "width": "100%" } }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(VCardText, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`\u0E44\u0E21\u0E48\u0E1E\u0E1A\u0E04\u0E33\u0E02\u0E2D\u0E19\u0E35\u0E49`);
                              } else {
                                return [
                                  createTextVNode("\u0E44\u0E21\u0E48\u0E1E\u0E1A\u0E04\u0E33\u0E02\u0E2D\u0E19\u0E35\u0E49")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(VCardActions, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_NuxtLink, { to: "/it-service-request" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(VBtn, { variant: "text" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`\u0E01\u0E25\u0E31\u0E1A\u0E44\u0E1B\u0E22\u0E31\u0E07\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23`);
                                          } else {
                                            return [
                                              createTextVNode("\u0E01\u0E25\u0E31\u0E1A\u0E44\u0E1B\u0E22\u0E31\u0E07\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23")
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(VBtn, { variant: "text" }, {
                                          default: withCtx(() => [
                                            createTextVNode("\u0E01\u0E25\u0E31\u0E1A\u0E44\u0E1B\u0E22\u0E31\u0E07\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23")
                                          ]),
                                          _: 1
                                        })
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_NuxtLink, { to: "/it-service-request" }, {
                                    default: withCtx(() => [
                                      createVNode(VBtn, { variant: "text" }, {
                                        default: withCtx(() => [
                                          createTextVNode("\u0E01\u0E25\u0E31\u0E1A\u0E44\u0E1B\u0E22\u0E31\u0E07\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23")
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
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(VCardText, null, {
                              default: withCtx(() => [
                                createTextVNode("\u0E44\u0E21\u0E48\u0E1E\u0E1A\u0E04\u0E33\u0E02\u0E2D\u0E19\u0E35\u0E49")
                              ]),
                              _: 1
                            }),
                            createVNode(VCardActions, null, {
                              default: withCtx(() => [
                                createVNode(_component_NuxtLink, { to: "/it-service-request" }, {
                                  default: withCtx(() => [
                                    createVNode(VBtn, { variant: "text" }, {
                                      default: withCtx(() => [
                                        createTextVNode("\u0E01\u0E25\u0E31\u0E1A\u0E44\u0E1B\u0E22\u0E31\u0E07\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23")
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
                    }, _parent3, _scopeId2));
                    _push3(`</div>`);
                  }
                } else {
                  return [
                    createVNode(_component_Breadcrumbs, {
                      showHome: true,
                      items: [{ text: "\u0E41\u0E08\u0E49\u0E07\u0E0B\u0E48\u0E2D\u0E21", to: "/it-service-request" }, { text: ticket.value ? ticket.value.title : "\u0E41\u0E01\u0E49\u0E44\u0E02\u0E41\u0E08\u0E49\u0E07\u0E0B\u0E48\u0E2D\u0E21" }]
                    }, null, 8, ["items"]),
                    ticket.value ? (openBlock(), createBlock(VCard, {
                      key: 0,
                      class: "card-form"
                    }, {
                      default: withCtx(() => [
                        createVNode(VCardTitle, { class: "d-flex align-center justify-space-between" }, {
                          default: withCtx(() => [
                            createVNode("div", null, [
                              createVNode("div", { class: "h5" }, "\u0E41\u0E01\u0E49\u0E44\u0E02\u0E41\u0E08\u0E49\u0E07\u0E0B\u0E48\u0E2D\u0E21"),
                              createVNode("div", { class: "text-muted" }, "\u0E41\u0E01\u0E49\u0E44\u0E02\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E04\u0E33\u0E02\u0E2D\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13")
                            ]),
                            createVNode("div", { class: "d-flex align-center gap-3" }, [
                              createVNode("div", { class: "text-muted small" }, toDisplayString(ticket.value.createdAt), 1),
                              createVNode(VChip, {
                                size: "small",
                                color: priority.value === "Urgent" ? "error" : priority.value === "High" ? "warning" : priority.value === "Low" ? "info" : "secondary",
                                "text-color": "white"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(priority.value), 1)
                                ]),
                                _: 1
                              }, 8, ["color"]),
                              createVNode(VMenu, null, {
                                activator: withCtx(({ props }) => [
                                  createVNode(VBtn, mergeProps(props, {
                                    variant: "outlined",
                                    size: "small"
                                  }), {
                                    default: withCtx(() => [
                                      createTextVNode("\u0E01\u0E32\u0E23\u0E14\u0E33\u0E40\u0E19\u0E34\u0E19\u0E01\u0E32\u0E23")
                                    ]),
                                    _: 1
                                  }, 16)
                                ]),
                                default: withCtx(() => [
                                  createVNode(VList, null, {
                                    default: withCtx(() => [
                                      (openBlock(true), createBlock(Fragment, null, renderList(getAllowedTransitions(ticket.value.status), (code) => {
                                        return openBlock(), createBlock(VListItem, {
                                          key: code,
                                          onClick: ($event) => changeStatus(code)
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VListItemTitle, null, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(("getStatusLabel" in _ctx ? _ctx.getStatusLabel : unref(getStatusLabel))(code)), 1)
                                              ]),
                                              _: 2
                                            }, 1024)
                                          ]),
                                          _: 2
                                        }, 1032, ["onClick"]);
                                      }), 128))
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ])
                          ]),
                          _: 1
                        }),
                        createVNode(VCardText, { class: "card-body" }, {
                          default: withCtx(() => [
                            createVNode(VForm, {
                              ref_key: "formRef",
                              ref: formRef
                            }, {
                              default: withCtx(() => [
                                createVNode(VRow, null, {
                                  default: withCtx(() => [
                                    createVNode(VCol, { cols: "12" }, {
                                      default: withCtx(() => [
                                        createVNode(VTextField, {
                                          modelValue: title.value,
                                          "onUpdate:modelValue": ($event) => title.value = $event,
                                          label: "\u0E2B\u0E31\u0E27\u0E02\u0E49\u0E2D",
                                          rules: titleRules,
                                          required: ""
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, { cols: "12" }, {
                                      default: withCtx(() => [
                                        createVNode(VTextarea, {
                                          modelValue: description.value,
                                          "onUpdate:modelValue": ($event) => description.value = $event,
                                          label: "\u0E23\u0E32\u0E22\u0E25\u0E30\u0E40\u0E2D\u0E35\u0E22\u0E14",
                                          rows: "6"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      md: "6"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VSelect, {
                                          modelValue: priority.value,
                                          "onUpdate:modelValue": ($event) => priority.value = $event,
                                          items: ["Low", "Normal", "High", "Urgent"],
                                          label: "\u0E04\u0E27\u0E32\u0E21\u0E2A\u0E33\u0E04\u0E31\u0E0D"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      md: "6"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VFileInput, {
                                          modelValue: file.value,
                                          "onUpdate:modelValue": ($event) => file.value = $event,
                                          label: "\u0E41\u0E19\u0E1A\u0E44\u0E1F\u0E25\u0E4C (\u0E16\u0E49\u0E32\u0E21\u0E35)",
                                          "show-size": ""
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }, 512)
                          ]),
                          _: 1
                        }),
                        createVNode(VDivider),
                        createVNode(VCardActions, { class: "justify-space-between" }, {
                          default: withCtx(() => [
                            createVNode("div", null, [
                              createVNode(_component_NuxtLink, { to: "/it-service-request" }, {
                                default: withCtx(() => [
                                  createVNode(VBtn, { variant: "text" }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u0E22\u0E01\u0E40\u0E25\u0E34\u0E01")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            createVNode("div", null, [
                              createVNode(VBtn, {
                                color: "error",
                                variant: "outlined",
                                class: "me-2",
                                onClick: removeSelf
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("\u0E25\u0E1A")
                                ]),
                                _: 1
                              }),
                              createVNode(VBtn, {
                                color: "primary",
                                elevation: "2",
                                onClick: save
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01")
                                ]),
                                _: 1
                              })
                            ])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })) : (openBlock(), createBlock("div", { key: 1 }, [
                      createVNode(VCard, { style: { "width": "100%" } }, {
                        default: withCtx(() => [
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createTextVNode("\u0E44\u0E21\u0E48\u0E1E\u0E1A\u0E04\u0E33\u0E02\u0E2D\u0E19\u0E35\u0E49")
                            ]),
                            _: 1
                          }),
                          createVNode(VCardActions, null, {
                            default: withCtx(() => [
                              createVNode(_component_NuxtLink, { to: "/it-service-request" }, {
                                default: withCtx(() => [
                                  createVNode(VBtn, { variant: "text" }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u0E01\u0E25\u0E31\u0E1A\u0E44\u0E1B\u0E22\u0E31\u0E07\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23")
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
                    ]))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCol, { cols: "12" }, {
                default: withCtx(() => [
                  createVNode(_component_Breadcrumbs, {
                    showHome: true,
                    items: [{ text: "\u0E41\u0E08\u0E49\u0E07\u0E0B\u0E48\u0E2D\u0E21", to: "/it-service-request" }, { text: ticket.value ? ticket.value.title : "\u0E41\u0E01\u0E49\u0E44\u0E02\u0E41\u0E08\u0E49\u0E07\u0E0B\u0E48\u0E2D\u0E21" }]
                  }, null, 8, ["items"]),
                  ticket.value ? (openBlock(), createBlock(VCard, {
                    key: 0,
                    class: "card-form"
                  }, {
                    default: withCtx(() => [
                      createVNode(VCardTitle, { class: "d-flex align-center justify-space-between" }, {
                        default: withCtx(() => [
                          createVNode("div", null, [
                            createVNode("div", { class: "h5" }, "\u0E41\u0E01\u0E49\u0E44\u0E02\u0E41\u0E08\u0E49\u0E07\u0E0B\u0E48\u0E2D\u0E21"),
                            createVNode("div", { class: "text-muted" }, "\u0E41\u0E01\u0E49\u0E44\u0E02\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E04\u0E33\u0E02\u0E2D\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13")
                          ]),
                          createVNode("div", { class: "d-flex align-center gap-3" }, [
                            createVNode("div", { class: "text-muted small" }, toDisplayString(ticket.value.createdAt), 1),
                            createVNode(VChip, {
                              size: "small",
                              color: priority.value === "Urgent" ? "error" : priority.value === "High" ? "warning" : priority.value === "Low" ? "info" : "secondary",
                              "text-color": "white"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(priority.value), 1)
                              ]),
                              _: 1
                            }, 8, ["color"]),
                            createVNode(VMenu, null, {
                              activator: withCtx(({ props }) => [
                                createVNode(VBtn, mergeProps(props, {
                                  variant: "outlined",
                                  size: "small"
                                }), {
                                  default: withCtx(() => [
                                    createTextVNode("\u0E01\u0E32\u0E23\u0E14\u0E33\u0E40\u0E19\u0E34\u0E19\u0E01\u0E32\u0E23")
                                  ]),
                                  _: 1
                                }, 16)
                              ]),
                              default: withCtx(() => [
                                createVNode(VList, null, {
                                  default: withCtx(() => [
                                    (openBlock(true), createBlock(Fragment, null, renderList(getAllowedTransitions(ticket.value.status), (code) => {
                                      return openBlock(), createBlock(VListItem, {
                                        key: code,
                                        onClick: ($event) => changeStatus(code)
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VListItemTitle, null, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(("getStatusLabel" in _ctx ? _ctx.getStatusLabel : unref(getStatusLabel))(code)), 1)
                                            ]),
                                            _: 2
                                          }, 1024)
                                        ]),
                                        _: 2
                                      }, 1032, ["onClick"]);
                                    }), 128))
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ])
                        ]),
                        _: 1
                      }),
                      createVNode(VCardText, { class: "card-body" }, {
                        default: withCtx(() => [
                          createVNode(VForm, {
                            ref_key: "formRef",
                            ref: formRef
                          }, {
                            default: withCtx(() => [
                              createVNode(VRow, null, {
                                default: withCtx(() => [
                                  createVNode(VCol, { cols: "12" }, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        modelValue: title.value,
                                        "onUpdate:modelValue": ($event) => title.value = $event,
                                        label: "\u0E2B\u0E31\u0E27\u0E02\u0E49\u0E2D",
                                        rules: titleRules,
                                        required: ""
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, { cols: "12" }, {
                                    default: withCtx(() => [
                                      createVNode(VTextarea, {
                                        modelValue: description.value,
                                        "onUpdate:modelValue": ($event) => description.value = $event,
                                        label: "\u0E23\u0E32\u0E22\u0E25\u0E30\u0E40\u0E2D\u0E35\u0E22\u0E14",
                                        rows: "6"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    md: "6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VSelect, {
                                        modelValue: priority.value,
                                        "onUpdate:modelValue": ($event) => priority.value = $event,
                                        items: ["Low", "Normal", "High", "Urgent"],
                                        label: "\u0E04\u0E27\u0E32\u0E21\u0E2A\u0E33\u0E04\u0E31\u0E0D"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    md: "6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VFileInput, {
                                        modelValue: file.value,
                                        "onUpdate:modelValue": ($event) => file.value = $event,
                                        label: "\u0E41\u0E19\u0E1A\u0E44\u0E1F\u0E25\u0E4C (\u0E16\u0E49\u0E32\u0E21\u0E35)",
                                        "show-size": ""
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 512)
                        ]),
                        _: 1
                      }),
                      createVNode(VDivider),
                      createVNode(VCardActions, { class: "justify-space-between" }, {
                        default: withCtx(() => [
                          createVNode("div", null, [
                            createVNode(_component_NuxtLink, { to: "/it-service-request" }, {
                              default: withCtx(() => [
                                createVNode(VBtn, { variant: "text" }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u0E22\u0E01\u0E40\u0E25\u0E34\u0E01")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          createVNode("div", null, [
                            createVNode(VBtn, {
                              color: "error",
                              variant: "outlined",
                              class: "me-2",
                              onClick: removeSelf
                            }, {
                              default: withCtx(() => [
                                createTextVNode("\u0E25\u0E1A")
                              ]),
                              _: 1
                            }),
                            createVNode(VBtn, {
                              color: "primary",
                              elevation: "2",
                              onClick: save
                            }, {
                              default: withCtx(() => [
                                createTextVNode("\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01")
                              ]),
                              _: 1
                            })
                          ])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })) : (openBlock(), createBlock("div", { key: 1 }, [
                    createVNode(VCard, { style: { "width": "100%" } }, {
                      default: withCtx(() => [
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createTextVNode("\u0E44\u0E21\u0E48\u0E1E\u0E1A\u0E04\u0E33\u0E02\u0E2D\u0E19\u0E35\u0E49")
                          ]),
                          _: 1
                        }),
                        createVNode(VCardActions, null, {
                          default: withCtx(() => [
                            createVNode(_component_NuxtLink, { to: "/it-service-request" }, {
                              default: withCtx(() => [
                                createVNode(VBtn, { variant: "text" }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u0E01\u0E25\u0E31\u0E1A\u0E44\u0E1B\u0E22\u0E31\u0E07\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23")
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
                  ]))
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VDialog, {
        modelValue: deleteDialog.value,
        "onUpdate:modelValue": ($event) => deleteDialog.value = $event,
        "max-width": "480"
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
                        _push4(`\u0E04\u0E38\u0E13\u0E41\u0E19\u0E48\u0E43\u0E08\u0E27\u0E48\u0E32\u0E08\u0E30\u0E25\u0E1A\u0E04\u0E33\u0E02\u0E2D\u0E19\u0E35\u0E49: <strong data-v-20ecb7f3${_scopeId3}>${ssrInterpolate(ticket.value ? ticket.value.title : "")}</strong> ?`);
                      } else {
                        return [
                          createTextVNode("\u0E04\u0E38\u0E13\u0E41\u0E19\u0E48\u0E43\u0E08\u0E27\u0E48\u0E32\u0E08\u0E30\u0E25\u0E1A\u0E04\u0E33\u0E02\u0E2D\u0E19\u0E35\u0E49: "),
                          createVNode("strong", null, toDisplayString(ticket.value ? ticket.value.title : ""), 1),
                          createTextVNode(" ?")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCardActions, { class: "justify-end" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VBtn, {
                          variant: "text",
                          onClick: ($event) => deleteDialog.value = false
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`\u0E22\u0E01\u0E40\u0E25\u0E34\u0E01`);
                            } else {
                              return [
                                createTextVNode("\u0E22\u0E01\u0E40\u0E25\u0E34\u0E01")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VBtn, {
                          color: "error",
                          loading: deleting.value,
                          onClick: confirmDelete
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`\u0E25\u0E1A`);
                            } else {
                              return [
                                createTextVNode("\u0E25\u0E1A")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VBtn, {
                            variant: "text",
                            onClick: ($event) => deleteDialog.value = false
                          }, {
                            default: withCtx(() => [
                              createTextVNode("\u0E22\u0E01\u0E40\u0E25\u0E34\u0E01")
                            ]),
                            _: 1
                          }, 8, ["onClick"]),
                          createVNode(VBtn, {
                            color: "error",
                            loading: deleting.value,
                            onClick: confirmDelete
                          }, {
                            default: withCtx(() => [
                              createTextVNode("\u0E25\u0E1A")
                            ]),
                            _: 1
                          }, 8, ["loading"])
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
                        createTextVNode("\u0E04\u0E38\u0E13\u0E41\u0E19\u0E48\u0E43\u0E08\u0E27\u0E48\u0E32\u0E08\u0E30\u0E25\u0E1A\u0E04\u0E33\u0E02\u0E2D\u0E19\u0E35\u0E49: "),
                        createVNode("strong", null, toDisplayString(ticket.value ? ticket.value.title : ""), 1),
                        createTextVNode(" ?")
                      ]),
                      _: 1
                    }),
                    createVNode(VCardActions, { class: "justify-end" }, {
                      default: withCtx(() => [
                        createVNode(VBtn, {
                          variant: "text",
                          onClick: ($event) => deleteDialog.value = false
                        }, {
                          default: withCtx(() => [
                            createTextVNode("\u0E22\u0E01\u0E40\u0E25\u0E34\u0E01")
                          ]),
                          _: 1
                        }, 8, ["onClick"]),
                        createVNode(VBtn, {
                          color: "error",
                          loading: deleting.value,
                          onClick: confirmDelete
                        }, {
                          default: withCtx(() => [
                            createTextVNode("\u0E25\u0E1A")
                          ]),
                          _: 1
                        }, 8, ["loading"])
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
                      createTextVNode("\u0E04\u0E38\u0E13\u0E41\u0E19\u0E48\u0E43\u0E08\u0E27\u0E48\u0E32\u0E08\u0E30\u0E25\u0E1A\u0E04\u0E33\u0E02\u0E2D\u0E19\u0E35\u0E49: "),
                      createVNode("strong", null, toDisplayString(ticket.value ? ticket.value.title : ""), 1),
                      createTextVNode(" ?")
                    ]),
                    _: 1
                  }),
                  createVNode(VCardActions, { class: "justify-end" }, {
                    default: withCtx(() => [
                      createVNode(VBtn, {
                        variant: "text",
                        onClick: ($event) => deleteDialog.value = false
                      }, {
                        default: withCtx(() => [
                          createTextVNode("\u0E22\u0E01\u0E40\u0E25\u0E34\u0E01")
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode(VBtn, {
                        color: "error",
                        loading: deleting.value,
                        onClick: confirmDelete
                      }, {
                        default: withCtx(() => [
                          createTextVNode("\u0E25\u0E1A")
                        ]),
                        _: 1
                      }, 8, ["loading"])
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
        modelValue: snackbar.value,
        "onUpdate:modelValue": ($event) => snackbar.value = $event,
        timeout: "3000"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(snackbarMessage.value)}`);
          } else {
            return [
              createTextVNode(toDisplayString(snackbarMessage.value), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/it-service-request/update/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-20ecb7f3"]]);

export { _id_ as default };
