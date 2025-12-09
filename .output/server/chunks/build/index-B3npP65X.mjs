import { _ as __nuxt_component_0 } from './Breadcrumbs-CblUXPow.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-wKVHBGBj.mjs';
import { withAsyncContext, ref, computed, unref, mergeProps, withCtx, createTextVNode, createVNode, toDisplayString, withModifiers, openBlock, createBlock, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { a as useFixAssetsStore, u as useFixAssets } from './useFixAssets-Dbk6r4-p.mjs';
import { t as ticketStatuses, g as getStatusGroup, a as getStatusLabel } from './ticketStatuses-3ttXUEsr.mjs';
import { _ as _export_sfc, J as VProgressLinear, a as VBtn } from './server.mjs';
import { u as useHead } from './vue.-sixQ7xP-7crsJuN5.mjs';
import { V as VRow, a as VCol } from './VRow-zuLeAiTc.mjs';
import { V as VCard, c as VCardTitle, a as VCardText, e as VCardActions } from './VCard-CSiTQXcr.mjs';
import { V as VTextField } from './VTextField-BBb08qcq.mjs';
import { V as VSelect } from './VSelect-Cr6Di2uC.mjs';
import { V as VDataTable } from './VDataTable-BCjfAJbm.mjs';
import { V as VChip } from './VChip-DBW6TD_X.mjs';
import { V as VDialog } from './VDialog-5Q-6dk5F.mjs';
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

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    useHead({ title: "\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23\u0E41\u0E08\u0E49\u0E07\u0E0B\u0E48\u0E2D\u0E21 - GMT SUPPORT" });
    const _store = useFixAssetsStore();
    if (!_store.loaded) [__temp, __restore] = withAsyncContext(() => _store.load()), await __temp, __restore();
    const { tickets, removeTicket, loaded } = useFixAssets();
    const search = ref("");
    const priorityFilter = ref("All");
    const priorities = ["All", "Low", "Normal", "High", "Urgent"];
    const statusFilter = ref("All");
    const statusOptions = [{ code: "All", label: "\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14" }, ...ticketStatuses.map((s) => ({ code: s.code, label: s.label }))];
    const filteredTickets = computed(() => {
      const list = unref(tickets) || [];
      const s = search.value.trim().toLowerCase();
      return list.filter((t) => {
        const matchesSearch = !s || [t.title, t.description, t.priority].filter(Boolean).join(" ").toLowerCase().includes(s);
        const matchesPriority = priorityFilter.value === "All" || t.priority === priorityFilter.value;
        const matchesStatus = statusFilter.value === "All" || t.status === statusFilter.value;
        return matchesSearch && matchesPriority && matchesStatus;
      });
    });
    const headers = [
      { title: "\u0E25\u0E33\u0E14\u0E31\u0E1A", value: "index", align: "center", width: 80 },
      { title: "\u0E2B\u0E31\u0E27\u0E02\u0E49\u0E2D", value: "title" },
      { title: "\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48", value: "createdAt" },
      { title: "\u0E2A\u0E16\u0E32\u0E19\u0E30", value: "status" },
      { title: "\u0E04\u0E27\u0E32\u0E21\u0E2A\u0E33\u0E04\u0E31\u0E0D", value: "priority" },
      { title: "\u0E01\u0E32\u0E23\u0E01\u0E23\u0E30\u0E17\u0E33", value: "actions", width: 180 }
    ];
    const priorityMap = {
      Low: { color: "info", textColor: "white" },
      Normal: { color: "secondary", textColor: "white" },
      High: { color: "warning", textColor: "white" },
      Urgent: { color: "error", textColor: "white" }
    };
    const statusMap = {
      requester: { color: "secondary", textColor: "white" },
      it: { color: "info", textColor: "white" },
      after_fix: { color: "success", textColor: "white" },
      exception: { color: "error", textColor: "white" }
    };
    function chipForPriority(p) {
      return priorityMap[p] || { color: "secondary", textColor: "white" };
    }
    function chipForStatus(code) {
      const group = getStatusGroup(code) || "requester";
      return statusMap[group] || { color: "secondary", textColor: "white" };
    }
    function getStatusLabelFromCode(code) {
      return getStatusLabel(code);
    }
    function pad(n) {
      return String(n).padStart(2, "0");
    }
    function formatIsoDate(iso) {
      if (!iso) return "";
      const d = new Date(iso);
      return `${d.getUTCFullYear()}-${pad(d.getUTCMonth() + 1)}-${pad(d.getUTCDate())} ${pad(d.getUTCHours())}:${pad(d.getUTCMinutes())}`;
    }
    const deleteDialog = ref(false);
    const deleting = ref(false);
    const toDelete = ref(null);
    function openDelete(item) {
      toDelete.value = item;
      deleteDialog.value = true;
    }
    async function confirmDelete() {
      if (!toDelete.value) return;
      deleting.value = true;
      try {
        await removeTicket(toDelete.value.id);
      } catch (e) {
        console.error("Delete failed", e);
      } finally {
        deleting.value = false;
        deleteDialog.value = false;
        toDelete.value = null;
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Breadcrumbs = __nuxt_component_0;
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "pa-4" }, _attrs))} data-v-236c36f9>`);
      _push(ssrRenderComponent(VRow, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCol, { cols: "12" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Breadcrumbs, {
                    showHome: true,
                    items: [{ text: "\u0E41\u0E08\u0E49\u0E07\u0E0B\u0E48\u0E2D\u0E21", to: "/it-service-request" }]
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCard, { class: "card-form" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        if (!unref(loaded)) {
                          _push4(ssrRenderComponent(VProgressLinear, {
                            indeterminate: "",
                            color: "primary",
                            height: "4",
                            class: "mb-3"
                          }, null, _parent4, _scopeId3));
                        } else {
                          _push4(`<!---->`);
                        }
                        _push4(ssrRenderComponent(VCardTitle, { class: "d-flex align-center justify-space-between" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div data-v-236c36f9${_scopeId4}>\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23\u0E41\u0E08\u0E49\u0E07\u0E0B\u0E48\u0E2D\u0E21</div><div data-v-236c36f9${_scopeId4}>`);
                              _push5(ssrRenderComponent(_component_NuxtLink, { to: "/it-service-request/create" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VBtn, {
                                      color: "primary",
                                      class: "me-2"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`\u0E41\u0E08\u0E49\u0E07\u0E0B\u0E48\u0E2D\u0E21\u0E43\u0E2B\u0E21\u0E48 IT New Request +`);
                                        } else {
                                          return [
                                            createTextVNode("\u0E41\u0E08\u0E49\u0E07\u0E0B\u0E48\u0E2D\u0E21\u0E43\u0E2B\u0E21\u0E48 IT New Request +")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VBtn, {
                                        color: "primary",
                                        class: "me-2"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("\u0E41\u0E08\u0E49\u0E07\u0E0B\u0E48\u0E2D\u0E21\u0E43\u0E2B\u0E21\u0E48 IT New Request +")
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
                                createVNode("div", null, "\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23\u0E41\u0E08\u0E49\u0E07\u0E0B\u0E48\u0E2D\u0E21"),
                                createVNode("div", null, [
                                  createVNode(_component_NuxtLink, { to: "/it-service-request/create" }, {
                                    default: withCtx(() => [
                                      createVNode(VBtn, {
                                        color: "primary",
                                        class: "me-2"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("\u0E41\u0E08\u0E49\u0E07\u0E0B\u0E48\u0E2D\u0E21\u0E43\u0E2B\u0E21\u0E48 IT New Request +")
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
                              _push5(ssrRenderComponent(VRow, {
                                class: "mb-4",
                                align: "center"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VCol, {
                                      cols: "12",
                                      md: "5"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VTextField, {
                                            modelValue: search.value,
                                            "onUpdate:modelValue": ($event) => search.value = $event,
                                            label: "\u0E04\u0E49\u0E19\u0E2B\u0E32 (\u0E2B\u0E31\u0E27\u0E02\u0E49\u0E2D, \u0E23\u0E32\u0E22\u0E25\u0E30\u0E40\u0E2D\u0E35\u0E22\u0E14)",
                                            clearable: "",
                                            "prepend-inner-icon": "bx-search"
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VTextField, {
                                              modelValue: search.value,
                                              "onUpdate:modelValue": ($event) => search.value = $event,
                                              label: "\u0E04\u0E49\u0E19\u0E2B\u0E32 (\u0E2B\u0E31\u0E27\u0E02\u0E49\u0E2D, \u0E23\u0E32\u0E22\u0E25\u0E30\u0E40\u0E2D\u0E35\u0E22\u0E14)",
                                              clearable: "",
                                              "prepend-inner-icon": "bx-search"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VCol, {
                                      cols: "12",
                                      md: "3"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VSelect, {
                                            modelValue: priorityFilter.value,
                                            "onUpdate:modelValue": ($event) => priorityFilter.value = $event,
                                            items: priorities,
                                            label: "\u0E04\u0E27\u0E32\u0E21\u0E2A\u0E33\u0E04\u0E31\u0E0D"
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VSelect, {
                                              modelValue: priorityFilter.value,
                                              "onUpdate:modelValue": ($event) => priorityFilter.value = $event,
                                              items: priorities,
                                              label: "\u0E04\u0E27\u0E32\u0E21\u0E2A\u0E33\u0E04\u0E31\u0E0D"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VCol, {
                                      cols: "12",
                                      md: "2"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VSelect, {
                                            modelValue: statusFilter.value,
                                            "onUpdate:modelValue": ($event) => statusFilter.value = $event,
                                            items: statusOptions,
                                            "item-title": "label",
                                            "item-value": "code",
                                            label: "\u0E2A\u0E16\u0E32\u0E19\u0E30"
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VSelect, {
                                              modelValue: statusFilter.value,
                                              "onUpdate:modelValue": ($event) => statusFilter.value = $event,
                                              items: statusOptions,
                                              "item-title": "label",
                                              "item-value": "code",
                                              label: "\u0E2A\u0E16\u0E32\u0E19\u0E30"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VCol, {
                                      cols: "12",
                                      md: "2",
                                      class: "text-end"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VBtn, {
                                            variant: "tonal",
                                            onClick: ($event) => {
                                              search.value = "";
                                              priorityFilter.value = "All";
                                              statusFilter.value = "All";
                                            }
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`\u0E23\u0E35\u0E40\u0E0B\u0E47\u0E15`);
                                              } else {
                                                return [
                                                  createTextVNode("\u0E23\u0E35\u0E40\u0E0B\u0E47\u0E15")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VBtn, {
                                              variant: "tonal",
                                              onClick: ($event) => {
                                                search.value = "";
                                                priorityFilter.value = "All";
                                                statusFilter.value = "All";
                                              }
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode("\u0E23\u0E35\u0E40\u0E0B\u0E47\u0E15")
                                              ]),
                                              _: 1
                                            }, 8, ["onClick"])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VCol, {
                                        cols: "12",
                                        md: "5"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            modelValue: search.value,
                                            "onUpdate:modelValue": ($event) => search.value = $event,
                                            label: "\u0E04\u0E49\u0E19\u0E2B\u0E32 (\u0E2B\u0E31\u0E27\u0E02\u0E49\u0E2D, \u0E23\u0E32\u0E22\u0E25\u0E30\u0E40\u0E2D\u0E35\u0E22\u0E14)",
                                            clearable: "",
                                            "prepend-inner-icon": "bx-search"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        md: "3"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VSelect, {
                                            modelValue: priorityFilter.value,
                                            "onUpdate:modelValue": ($event) => priorityFilter.value = $event,
                                            items: priorities,
                                            label: "\u0E04\u0E27\u0E32\u0E21\u0E2A\u0E33\u0E04\u0E31\u0E0D"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        md: "2"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VSelect, {
                                            modelValue: statusFilter.value,
                                            "onUpdate:modelValue": ($event) => statusFilter.value = $event,
                                            items: statusOptions,
                                            "item-title": "label",
                                            "item-value": "code",
                                            label: "\u0E2A\u0E16\u0E32\u0E19\u0E30"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        md: "2",
                                        class: "text-end"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VBtn, {
                                            variant: "tonal",
                                            onClick: ($event) => {
                                              search.value = "";
                                              priorityFilter.value = "All";
                                              statusFilter.value = "All";
                                            }
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode("\u0E23\u0E35\u0E40\u0E0B\u0E47\u0E15")
                                            ]),
                                            _: 1
                                          }, 8, ["onClick"])
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              if (!filteredTickets.value || filteredTickets.value.length === 0) {
                                _push5(`<div class="text-center py-6" data-v-236c36f9${_scopeId4}> \u0E22\u0E31\u0E07\u0E44\u0E21\u0E48\u0E21\u0E35\u0E04\u0E33\u0E02\u0E2D\u0E15\u0E32\u0E21\u0E40\u0E07\u0E37\u0E48\u0E2D\u0E19\u0E44\u0E02 </div>`);
                              } else {
                                _push5(ssrRenderComponent(VDataTable, {
                                  items: filteredTickets.value,
                                  headers,
                                  class: "my-data-table",
                                  density: "comfortable",
                                  sticky: ""
                                }, {
                                  "item.title": withCtx(({ item }, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`<div data-v-236c36f9${_scopeId5}><div class="fw-600" data-v-236c36f9${_scopeId5}>${ssrInterpolate(item.title)}</div><div class="text-muted small" data-v-236c36f9${_scopeId5}>${ssrInterpolate(item.description)}</div></div>`);
                                    } else {
                                      return [
                                        createVNode("div", null, [
                                          createVNode("div", { class: "fw-600" }, toDisplayString(item.title), 1),
                                          createVNode("div", { class: "text-muted small" }, toDisplayString(item.description), 1)
                                        ])
                                      ];
                                    }
                                  }),
                                  "item.index": withCtx(({ item }, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`<div class="text-center" data-v-236c36f9${_scopeId5}>${ssrInterpolate(filteredTickets.value.findIndex((i) => i.id === item.id) + 1)}</div>`);
                                    } else {
                                      return [
                                        createVNode("div", { class: "text-center" }, toDisplayString(filteredTickets.value.findIndex((i) => i.id === item.id) + 1), 1)
                                      ];
                                    }
                                  }),
                                  "item.createdAt": withCtx(({ item }, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`<div class="text-center small" data-v-236c36f9${_scopeId5}>${ssrInterpolate(formatIsoDate(item.createdAt))}</div>`);
                                    } else {
                                      return [
                                        createVNode("div", { class: "text-center small" }, toDisplayString(formatIsoDate(item.createdAt)), 1)
                                      ];
                                    }
                                  }),
                                  "item.status": withCtx(({ item }, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`<div class="text-center" data-v-236c36f9${_scopeId5}>`);
                                      _push6(ssrRenderComponent(VChip, {
                                        size: "small",
                                        color: chipForStatus(item.status).color,
                                        "text-color": chipForStatus(item.status).textColor
                                      }, {
                                        default: withCtx((_5, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(getStatusLabelFromCode(item.status))}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(getStatusLabelFromCode(item.status)), 1)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                      _push6(`</div>`);
                                    } else {
                                      return [
                                        createVNode("div", { class: "text-center" }, [
                                          createVNode(VChip, {
                                            size: "small",
                                            color: chipForStatus(item.status).color,
                                            "text-color": chipForStatus(item.status).textColor
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(getStatusLabelFromCode(item.status)), 1)
                                            ]),
                                            _: 2
                                          }, 1032, ["color", "text-color"])
                                        ])
                                      ];
                                    }
                                  }),
                                  "item.priority": withCtx(({ item }, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`<div data-v-236c36f9${_scopeId5}>`);
                                      _push6(ssrRenderComponent(VChip, {
                                        size: "small",
                                        color: chipForPriority(item.priority).color,
                                        "text-color": chipForPriority(item.priority).textColor
                                      }, {
                                        default: withCtx((_5, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(item.priority)}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(item.priority), 1)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                      _push6(`</div>`);
                                    } else {
                                      return [
                                        createVNode("div", null, [
                                          createVNode(VChip, {
                                            size: "small",
                                            color: chipForPriority(item.priority).color,
                                            "text-color": chipForPriority(item.priority).textColor
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(item.priority), 1)
                                            ]),
                                            _: 2
                                          }, 1032, ["color", "text-color"])
                                        ])
                                      ];
                                    }
                                  }),
                                  "item.actions": withCtx(({ item }, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_NuxtLink, {
                                        to: `/it-service-request/update/${item.id}`
                                      }, {
                                        default: withCtx((_5, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(VBtn, {
                                              variant: "outlined",
                                              size: "small",
                                              class: "me-2"
                                            }, {
                                              default: withCtx((_6, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`\u0E41\u0E01\u0E49\u0E44\u0E02`);
                                                } else {
                                                  return [
                                                    createTextVNode("\u0E41\u0E01\u0E49\u0E44\u0E02")
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(VBtn, {
                                                variant: "outlined",
                                                size: "small",
                                                class: "me-2"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode("\u0E41\u0E01\u0E49\u0E44\u0E02")
                                                ]),
                                                _: 1
                                              })
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(VBtn, {
                                        color: "error",
                                        variant: "text",
                                        size: "small",
                                        onClick: ($event) => openDelete(item)
                                      }, {
                                        default: withCtx((_5, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`\u0E25\u0E1A `);
                                          } else {
                                            return [
                                              createTextVNode("\u0E25\u0E1A ")
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_component_NuxtLink, {
                                          to: `/it-service-request/update/${item.id}`
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VBtn, {
                                              variant: "outlined",
                                              size: "small",
                                              class: "me-2"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode("\u0E41\u0E01\u0E49\u0E44\u0E02")
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }, 8, ["to"]),
                                        createVNode(VBtn, {
                                          color: "error",
                                          variant: "text",
                                          size: "small",
                                          onClick: withModifiers(($event) => openDelete(item), ["prevent"])
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode("\u0E25\u0E1A ")
                                          ]),
                                          _: 1
                                        }, 8, ["onClick"])
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              }
                              _push5(ssrRenderComponent(VDialog, {
                                modelValue: deleteDialog.value,
                                "onUpdate:modelValue": ($event) => deleteDialog.value = $event,
                                "max-width": "480"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VCard, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VCardTitle, null, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`\u0E22\u0E37\u0E19\u0E22\u0E31\u0E19\u0E01\u0E32\u0E23\u0E25\u0E1A`);
                                              } else {
                                                return [
                                                  createTextVNode("\u0E22\u0E37\u0E19\u0E22\u0E31\u0E19\u0E01\u0E32\u0E23\u0E25\u0E1A")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCardText, null, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`\u0E04\u0E38\u0E13\u0E41\u0E19\u0E48\u0E43\u0E08\u0E27\u0E48\u0E32\u0E08\u0E30\u0E25\u0E1A\u0E04\u0E33\u0E02\u0E2D\u0E19\u0E35\u0E49: <strong data-v-236c36f9${_scopeId7}>${ssrInterpolate(toDelete.value ? toDelete.value.title : "")}</strong> ?`);
                                              } else {
                                                return [
                                                  createTextVNode("\u0E04\u0E38\u0E13\u0E41\u0E19\u0E48\u0E43\u0E08\u0E27\u0E48\u0E32\u0E08\u0E30\u0E25\u0E1A\u0E04\u0E33\u0E02\u0E2D\u0E19\u0E35\u0E49: "),
                                                  createVNode("strong", null, toDisplayString(toDelete.value ? toDelete.value.title : ""), 1),
                                                  createTextVNode(" ?")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCardActions, { class: "justify-end" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VBtn, {
                                                  variant: "text",
                                                  onClick: ($event) => {
                                                    deleteDialog.value = false;
                                                    toDelete.value = null;
                                                  }
                                                }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`\u0E22\u0E01\u0E40\u0E25\u0E34\u0E01`);
                                                    } else {
                                                      return [
                                                        createTextVNode("\u0E22\u0E01\u0E40\u0E25\u0E34\u0E01")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(VBtn, {
                                                  color: "error",
                                                  loading: deleting.value,
                                                  onClick: confirmDelete
                                                }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`\u0E25\u0E1A`);
                                                    } else {
                                                      return [
                                                        createTextVNode("\u0E25\u0E1A")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VBtn, {
                                                    variant: "text",
                                                    onClick: ($event) => {
                                                      deleteDialog.value = false;
                                                      toDelete.value = null;
                                                    }
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
                                          }, _parent7, _scopeId6));
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
                                                createVNode("strong", null, toDisplayString(toDelete.value ? toDelete.value.title : ""), 1),
                                                createTextVNode(" ?")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCardActions, { class: "justify-end" }, {
                                              default: withCtx(() => [
                                                createVNode(VBtn, {
                                                  variant: "text",
                                                  onClick: ($event) => {
                                                    deleteDialog.value = false;
                                                    toDelete.value = null;
                                                  }
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
                                    }, _parent6, _scopeId5));
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
                                              createVNode("strong", null, toDisplayString(toDelete.value ? toDelete.value.title : ""), 1),
                                              createTextVNode(" ?")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCardActions, { class: "justify-end" }, {
                                            default: withCtx(() => [
                                              createVNode(VBtn, {
                                                variant: "text",
                                                onClick: ($event) => {
                                                  deleteDialog.value = false;
                                                  toDelete.value = null;
                                                }
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
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VRow, {
                                  class: "mb-4",
                                  align: "center"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VCol, {
                                      cols: "12",
                                      md: "5"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VTextField, {
                                          modelValue: search.value,
                                          "onUpdate:modelValue": ($event) => search.value = $event,
                                          label: "\u0E04\u0E49\u0E19\u0E2B\u0E32 (\u0E2B\u0E31\u0E27\u0E02\u0E49\u0E2D, \u0E23\u0E32\u0E22\u0E25\u0E30\u0E40\u0E2D\u0E35\u0E22\u0E14)",
                                          clearable: "",
                                          "prepend-inner-icon": "bx-search"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      md: "3"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VSelect, {
                                          modelValue: priorityFilter.value,
                                          "onUpdate:modelValue": ($event) => priorityFilter.value = $event,
                                          items: priorities,
                                          label: "\u0E04\u0E27\u0E32\u0E21\u0E2A\u0E33\u0E04\u0E31\u0E0D"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      md: "2"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VSelect, {
                                          modelValue: statusFilter.value,
                                          "onUpdate:modelValue": ($event) => statusFilter.value = $event,
                                          items: statusOptions,
                                          "item-title": "label",
                                          "item-value": "code",
                                          label: "\u0E2A\u0E16\u0E32\u0E19\u0E30"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      md: "2",
                                      class: "text-end"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VBtn, {
                                          variant: "tonal",
                                          onClick: ($event) => {
                                            search.value = "";
                                            priorityFilter.value = "All";
                                            statusFilter.value = "All";
                                          }
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode("\u0E23\u0E35\u0E40\u0E0B\u0E47\u0E15")
                                          ]),
                                          _: 1
                                        }, 8, ["onClick"])
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                !filteredTickets.value || filteredTickets.value.length === 0 ? (openBlock(), createBlock("div", {
                                  key: 0,
                                  class: "text-center py-6"
                                }, " \u0E22\u0E31\u0E07\u0E44\u0E21\u0E48\u0E21\u0E35\u0E04\u0E33\u0E02\u0E2D\u0E15\u0E32\u0E21\u0E40\u0E07\u0E37\u0E48\u0E2D\u0E19\u0E44\u0E02 ")) : (openBlock(), createBlock(VDataTable, {
                                  key: 1,
                                  items: filteredTickets.value,
                                  headers,
                                  class: "my-data-table",
                                  density: "comfortable",
                                  sticky: ""
                                }, {
                                  "item.title": withCtx(({ item }) => [
                                    createVNode("div", null, [
                                      createVNode("div", { class: "fw-600" }, toDisplayString(item.title), 1),
                                      createVNode("div", { class: "text-muted small" }, toDisplayString(item.description), 1)
                                    ])
                                  ]),
                                  "item.index": withCtx(({ item }) => [
                                    createVNode("div", { class: "text-center" }, toDisplayString(filteredTickets.value.findIndex((i) => i.id === item.id) + 1), 1)
                                  ]),
                                  "item.createdAt": withCtx(({ item }) => [
                                    createVNode("div", { class: "text-center small" }, toDisplayString(formatIsoDate(item.createdAt)), 1)
                                  ]),
                                  "item.status": withCtx(({ item }) => [
                                    createVNode("div", { class: "text-center" }, [
                                      createVNode(VChip, {
                                        size: "small",
                                        color: chipForStatus(item.status).color,
                                        "text-color": chipForStatus(item.status).textColor
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(getStatusLabelFromCode(item.status)), 1)
                                        ]),
                                        _: 2
                                      }, 1032, ["color", "text-color"])
                                    ])
                                  ]),
                                  "item.priority": withCtx(({ item }) => [
                                    createVNode("div", null, [
                                      createVNode(VChip, {
                                        size: "small",
                                        color: chipForPriority(item.priority).color,
                                        "text-color": chipForPriority(item.priority).textColor
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(item.priority), 1)
                                        ]),
                                        _: 2
                                      }, 1032, ["color", "text-color"])
                                    ])
                                  ]),
                                  "item.actions": withCtx(({ item }) => [
                                    createVNode(_component_NuxtLink, {
                                      to: `/it-service-request/update/${item.id}`
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VBtn, {
                                          variant: "outlined",
                                          size: "small",
                                          class: "me-2"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode("\u0E41\u0E01\u0E49\u0E44\u0E02")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }, 8, ["to"]),
                                    createVNode(VBtn, {
                                      color: "error",
                                      variant: "text",
                                      size: "small",
                                      onClick: withModifiers(($event) => openDelete(item), ["prevent"])
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("\u0E25\u0E1A ")
                                      ]),
                                      _: 1
                                    }, 8, ["onClick"])
                                  ]),
                                  _: 1
                                }, 8, ["items"])),
                                createVNode(VDialog, {
                                  modelValue: deleteDialog.value,
                                  "onUpdate:modelValue": ($event) => deleteDialog.value = $event,
                                  "max-width": "480"
                                }, {
                                  default: withCtx(() => [
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
                                            createVNode("strong", null, toDisplayString(toDelete.value ? toDelete.value.title : ""), 1),
                                            createTextVNode(" ?")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCardActions, { class: "justify-end" }, {
                                          default: withCtx(() => [
                                            createVNode(VBtn, {
                                              variant: "text",
                                              onClick: ($event) => {
                                                deleteDialog.value = false;
                                                toDelete.value = null;
                                              }
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
                                  ]),
                                  _: 1
                                }, 8, ["modelValue", "onUpdate:modelValue"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          !unref(loaded) ? (openBlock(), createBlock(VProgressLinear, {
                            key: 0,
                            indeterminate: "",
                            color: "primary",
                            height: "4",
                            class: "mb-3"
                          })) : createCommentVNode("", true),
                          createVNode(VCardTitle, { class: "d-flex align-center justify-space-between" }, {
                            default: withCtx(() => [
                              createVNode("div", null, "\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23\u0E41\u0E08\u0E49\u0E07\u0E0B\u0E48\u0E2D\u0E21"),
                              createVNode("div", null, [
                                createVNode(_component_NuxtLink, { to: "/it-service-request/create" }, {
                                  default: withCtx(() => [
                                    createVNode(VBtn, {
                                      color: "primary",
                                      class: "me-2"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("\u0E41\u0E08\u0E49\u0E07\u0E0B\u0E48\u0E2D\u0E21\u0E43\u0E2B\u0E21\u0E48 IT New Request +")
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
                              createVNode(VRow, {
                                class: "mb-4",
                                align: "center"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VCol, {
                                    cols: "12",
                                    md: "5"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        modelValue: search.value,
                                        "onUpdate:modelValue": ($event) => search.value = $event,
                                        label: "\u0E04\u0E49\u0E19\u0E2B\u0E32 (\u0E2B\u0E31\u0E27\u0E02\u0E49\u0E2D, \u0E23\u0E32\u0E22\u0E25\u0E30\u0E40\u0E2D\u0E35\u0E22\u0E14)",
                                        clearable: "",
                                        "prepend-inner-icon": "bx-search"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    md: "3"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VSelect, {
                                        modelValue: priorityFilter.value,
                                        "onUpdate:modelValue": ($event) => priorityFilter.value = $event,
                                        items: priorities,
                                        label: "\u0E04\u0E27\u0E32\u0E21\u0E2A\u0E33\u0E04\u0E31\u0E0D"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    md: "2"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VSelect, {
                                        modelValue: statusFilter.value,
                                        "onUpdate:modelValue": ($event) => statusFilter.value = $event,
                                        items: statusOptions,
                                        "item-title": "label",
                                        "item-value": "code",
                                        label: "\u0E2A\u0E16\u0E32\u0E19\u0E30"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    md: "2",
                                    class: "text-end"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VBtn, {
                                        variant: "tonal",
                                        onClick: ($event) => {
                                          search.value = "";
                                          priorityFilter.value = "All";
                                          statusFilter.value = "All";
                                        }
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("\u0E23\u0E35\u0E40\u0E0B\u0E47\u0E15")
                                        ]),
                                        _: 1
                                      }, 8, ["onClick"])
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              !filteredTickets.value || filteredTickets.value.length === 0 ? (openBlock(), createBlock("div", {
                                key: 0,
                                class: "text-center py-6"
                              }, " \u0E22\u0E31\u0E07\u0E44\u0E21\u0E48\u0E21\u0E35\u0E04\u0E33\u0E02\u0E2D\u0E15\u0E32\u0E21\u0E40\u0E07\u0E37\u0E48\u0E2D\u0E19\u0E44\u0E02 ")) : (openBlock(), createBlock(VDataTable, {
                                key: 1,
                                items: filteredTickets.value,
                                headers,
                                class: "my-data-table",
                                density: "comfortable",
                                sticky: ""
                              }, {
                                "item.title": withCtx(({ item }) => [
                                  createVNode("div", null, [
                                    createVNode("div", { class: "fw-600" }, toDisplayString(item.title), 1),
                                    createVNode("div", { class: "text-muted small" }, toDisplayString(item.description), 1)
                                  ])
                                ]),
                                "item.index": withCtx(({ item }) => [
                                  createVNode("div", { class: "text-center" }, toDisplayString(filteredTickets.value.findIndex((i) => i.id === item.id) + 1), 1)
                                ]),
                                "item.createdAt": withCtx(({ item }) => [
                                  createVNode("div", { class: "text-center small" }, toDisplayString(formatIsoDate(item.createdAt)), 1)
                                ]),
                                "item.status": withCtx(({ item }) => [
                                  createVNode("div", { class: "text-center" }, [
                                    createVNode(VChip, {
                                      size: "small",
                                      color: chipForStatus(item.status).color,
                                      "text-color": chipForStatus(item.status).textColor
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(getStatusLabelFromCode(item.status)), 1)
                                      ]),
                                      _: 2
                                    }, 1032, ["color", "text-color"])
                                  ])
                                ]),
                                "item.priority": withCtx(({ item }) => [
                                  createVNode("div", null, [
                                    createVNode(VChip, {
                                      size: "small",
                                      color: chipForPriority(item.priority).color,
                                      "text-color": chipForPriority(item.priority).textColor
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(item.priority), 1)
                                      ]),
                                      _: 2
                                    }, 1032, ["color", "text-color"])
                                  ])
                                ]),
                                "item.actions": withCtx(({ item }) => [
                                  createVNode(_component_NuxtLink, {
                                    to: `/it-service-request/update/${item.id}`
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VBtn, {
                                        variant: "outlined",
                                        size: "small",
                                        class: "me-2"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("\u0E41\u0E01\u0E49\u0E44\u0E02")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }, 8, ["to"]),
                                  createVNode(VBtn, {
                                    color: "error",
                                    variant: "text",
                                    size: "small",
                                    onClick: withModifiers(($event) => openDelete(item), ["prevent"])
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u0E25\u0E1A ")
                                    ]),
                                    _: 1
                                  }, 8, ["onClick"])
                                ]),
                                _: 1
                              }, 8, ["items"])),
                              createVNode(VDialog, {
                                modelValue: deleteDialog.value,
                                "onUpdate:modelValue": ($event) => deleteDialog.value = $event,
                                "max-width": "480"
                              }, {
                                default: withCtx(() => [
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
                                          createVNode("strong", null, toDisplayString(toDelete.value ? toDelete.value.title : ""), 1),
                                          createTextVNode(" ?")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCardActions, { class: "justify-end" }, {
                                        default: withCtx(() => [
                                          createVNode(VBtn, {
                                            variant: "text",
                                            onClick: ($event) => {
                                              deleteDialog.value = false;
                                              toDelete.value = null;
                                            }
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
                                ]),
                                _: 1
                              }, 8, ["modelValue", "onUpdate:modelValue"])
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
                    createVNode(_component_Breadcrumbs, {
                      showHome: true,
                      items: [{ text: "\u0E41\u0E08\u0E49\u0E07\u0E0B\u0E48\u0E2D\u0E21", to: "/it-service-request" }]
                    }),
                    createVNode(VCard, { class: "card-form" }, {
                      default: withCtx(() => [
                        !unref(loaded) ? (openBlock(), createBlock(VProgressLinear, {
                          key: 0,
                          indeterminate: "",
                          color: "primary",
                          height: "4",
                          class: "mb-3"
                        })) : createCommentVNode("", true),
                        createVNode(VCardTitle, { class: "d-flex align-center justify-space-between" }, {
                          default: withCtx(() => [
                            createVNode("div", null, "\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23\u0E41\u0E08\u0E49\u0E07\u0E0B\u0E48\u0E2D\u0E21"),
                            createVNode("div", null, [
                              createVNode(_component_NuxtLink, { to: "/it-service-request/create" }, {
                                default: withCtx(() => [
                                  createVNode(VBtn, {
                                    color: "primary",
                                    class: "me-2"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u0E41\u0E08\u0E49\u0E07\u0E0B\u0E48\u0E2D\u0E21\u0E43\u0E2B\u0E21\u0E48 IT New Request +")
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
                            createVNode(VRow, {
                              class: "mb-4",
                              align: "center"
                            }, {
                              default: withCtx(() => [
                                createVNode(VCol, {
                                  cols: "12",
                                  md: "5"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VTextField, {
                                      modelValue: search.value,
                                      "onUpdate:modelValue": ($event) => search.value = $event,
                                      label: "\u0E04\u0E49\u0E19\u0E2B\u0E32 (\u0E2B\u0E31\u0E27\u0E02\u0E49\u0E2D, \u0E23\u0E32\u0E22\u0E25\u0E30\u0E40\u0E2D\u0E35\u0E22\u0E14)",
                                      clearable: "",
                                      "prepend-inner-icon": "bx-search"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, {
                                  cols: "12",
                                  md: "3"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VSelect, {
                                      modelValue: priorityFilter.value,
                                      "onUpdate:modelValue": ($event) => priorityFilter.value = $event,
                                      items: priorities,
                                      label: "\u0E04\u0E27\u0E32\u0E21\u0E2A\u0E33\u0E04\u0E31\u0E0D"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, {
                                  cols: "12",
                                  md: "2"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VSelect, {
                                      modelValue: statusFilter.value,
                                      "onUpdate:modelValue": ($event) => statusFilter.value = $event,
                                      items: statusOptions,
                                      "item-title": "label",
                                      "item-value": "code",
                                      label: "\u0E2A\u0E16\u0E32\u0E19\u0E30"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, {
                                  cols: "12",
                                  md: "2",
                                  class: "text-end"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VBtn, {
                                      variant: "tonal",
                                      onClick: ($event) => {
                                        search.value = "";
                                        priorityFilter.value = "All";
                                        statusFilter.value = "All";
                                      }
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("\u0E23\u0E35\u0E40\u0E0B\u0E47\u0E15")
                                      ]),
                                      _: 1
                                    }, 8, ["onClick"])
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            !filteredTickets.value || filteredTickets.value.length === 0 ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "text-center py-6"
                            }, " \u0E22\u0E31\u0E07\u0E44\u0E21\u0E48\u0E21\u0E35\u0E04\u0E33\u0E02\u0E2D\u0E15\u0E32\u0E21\u0E40\u0E07\u0E37\u0E48\u0E2D\u0E19\u0E44\u0E02 ")) : (openBlock(), createBlock(VDataTable, {
                              key: 1,
                              items: filteredTickets.value,
                              headers,
                              class: "my-data-table",
                              density: "comfortable",
                              sticky: ""
                            }, {
                              "item.title": withCtx(({ item }) => [
                                createVNode("div", null, [
                                  createVNode("div", { class: "fw-600" }, toDisplayString(item.title), 1),
                                  createVNode("div", { class: "text-muted small" }, toDisplayString(item.description), 1)
                                ])
                              ]),
                              "item.index": withCtx(({ item }) => [
                                createVNode("div", { class: "text-center" }, toDisplayString(filteredTickets.value.findIndex((i) => i.id === item.id) + 1), 1)
                              ]),
                              "item.createdAt": withCtx(({ item }) => [
                                createVNode("div", { class: "text-center small" }, toDisplayString(formatIsoDate(item.createdAt)), 1)
                              ]),
                              "item.status": withCtx(({ item }) => [
                                createVNode("div", { class: "text-center" }, [
                                  createVNode(VChip, {
                                    size: "small",
                                    color: chipForStatus(item.status).color,
                                    "text-color": chipForStatus(item.status).textColor
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(getStatusLabelFromCode(item.status)), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["color", "text-color"])
                                ])
                              ]),
                              "item.priority": withCtx(({ item }) => [
                                createVNode("div", null, [
                                  createVNode(VChip, {
                                    size: "small",
                                    color: chipForPriority(item.priority).color,
                                    "text-color": chipForPriority(item.priority).textColor
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(item.priority), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["color", "text-color"])
                                ])
                              ]),
                              "item.actions": withCtx(({ item }) => [
                                createVNode(_component_NuxtLink, {
                                  to: `/it-service-request/update/${item.id}`
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VBtn, {
                                      variant: "outlined",
                                      size: "small",
                                      class: "me-2"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("\u0E41\u0E01\u0E49\u0E44\u0E02")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }, 8, ["to"]),
                                createVNode(VBtn, {
                                  color: "error",
                                  variant: "text",
                                  size: "small",
                                  onClick: withModifiers(($event) => openDelete(item), ["prevent"])
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u0E25\u0E1A ")
                                  ]),
                                  _: 1
                                }, 8, ["onClick"])
                              ]),
                              _: 1
                            }, 8, ["items"])),
                            createVNode(VDialog, {
                              modelValue: deleteDialog.value,
                              "onUpdate:modelValue": ($event) => deleteDialog.value = $event,
                              "max-width": "480"
                            }, {
                              default: withCtx(() => [
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
                                        createVNode("strong", null, toDisplayString(toDelete.value ? toDelete.value.title : ""), 1),
                                        createTextVNode(" ?")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCardActions, { class: "justify-end" }, {
                                      default: withCtx(() => [
                                        createVNode(VBtn, {
                                          variant: "text",
                                          onClick: ($event) => {
                                            deleteDialog.value = false;
                                            toDelete.value = null;
                                          }
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
                              ]),
                              _: 1
                            }, 8, ["modelValue", "onUpdate:modelValue"])
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
              createVNode(VCol, { cols: "12" }, {
                default: withCtx(() => [
                  createVNode(_component_Breadcrumbs, {
                    showHome: true,
                    items: [{ text: "\u0E41\u0E08\u0E49\u0E07\u0E0B\u0E48\u0E2D\u0E21", to: "/it-service-request" }]
                  }),
                  createVNode(VCard, { class: "card-form" }, {
                    default: withCtx(() => [
                      !unref(loaded) ? (openBlock(), createBlock(VProgressLinear, {
                        key: 0,
                        indeterminate: "",
                        color: "primary",
                        height: "4",
                        class: "mb-3"
                      })) : createCommentVNode("", true),
                      createVNode(VCardTitle, { class: "d-flex align-center justify-space-between" }, {
                        default: withCtx(() => [
                          createVNode("div", null, "\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23\u0E41\u0E08\u0E49\u0E07\u0E0B\u0E48\u0E2D\u0E21"),
                          createVNode("div", null, [
                            createVNode(_component_NuxtLink, { to: "/it-service-request/create" }, {
                              default: withCtx(() => [
                                createVNode(VBtn, {
                                  color: "primary",
                                  class: "me-2"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u0E41\u0E08\u0E49\u0E07\u0E0B\u0E48\u0E2D\u0E21\u0E43\u0E2B\u0E21\u0E48 IT New Request +")
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
                          createVNode(VRow, {
                            class: "mb-4",
                            align: "center"
                          }, {
                            default: withCtx(() => [
                              createVNode(VCol, {
                                cols: "12",
                                md: "5"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VTextField, {
                                    modelValue: search.value,
                                    "onUpdate:modelValue": ($event) => search.value = $event,
                                    label: "\u0E04\u0E49\u0E19\u0E2B\u0E32 (\u0E2B\u0E31\u0E27\u0E02\u0E49\u0E2D, \u0E23\u0E32\u0E22\u0E25\u0E30\u0E40\u0E2D\u0E35\u0E22\u0E14)",
                                    clearable: "",
                                    "prepend-inner-icon": "bx-search"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, {
                                cols: "12",
                                md: "3"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VSelect, {
                                    modelValue: priorityFilter.value,
                                    "onUpdate:modelValue": ($event) => priorityFilter.value = $event,
                                    items: priorities,
                                    label: "\u0E04\u0E27\u0E32\u0E21\u0E2A\u0E33\u0E04\u0E31\u0E0D"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, {
                                cols: "12",
                                md: "2"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VSelect, {
                                    modelValue: statusFilter.value,
                                    "onUpdate:modelValue": ($event) => statusFilter.value = $event,
                                    items: statusOptions,
                                    "item-title": "label",
                                    "item-value": "code",
                                    label: "\u0E2A\u0E16\u0E32\u0E19\u0E30"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, {
                                cols: "12",
                                md: "2",
                                class: "text-end"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VBtn, {
                                    variant: "tonal",
                                    onClick: ($event) => {
                                      search.value = "";
                                      priorityFilter.value = "All";
                                      statusFilter.value = "All";
                                    }
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u0E23\u0E35\u0E40\u0E0B\u0E47\u0E15")
                                    ]),
                                    _: 1
                                  }, 8, ["onClick"])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          !filteredTickets.value || filteredTickets.value.length === 0 ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "text-center py-6"
                          }, " \u0E22\u0E31\u0E07\u0E44\u0E21\u0E48\u0E21\u0E35\u0E04\u0E33\u0E02\u0E2D\u0E15\u0E32\u0E21\u0E40\u0E07\u0E37\u0E48\u0E2D\u0E19\u0E44\u0E02 ")) : (openBlock(), createBlock(VDataTable, {
                            key: 1,
                            items: filteredTickets.value,
                            headers,
                            class: "my-data-table",
                            density: "comfortable",
                            sticky: ""
                          }, {
                            "item.title": withCtx(({ item }) => [
                              createVNode("div", null, [
                                createVNode("div", { class: "fw-600" }, toDisplayString(item.title), 1),
                                createVNode("div", { class: "text-muted small" }, toDisplayString(item.description), 1)
                              ])
                            ]),
                            "item.index": withCtx(({ item }) => [
                              createVNode("div", { class: "text-center" }, toDisplayString(filteredTickets.value.findIndex((i) => i.id === item.id) + 1), 1)
                            ]),
                            "item.createdAt": withCtx(({ item }) => [
                              createVNode("div", { class: "text-center small" }, toDisplayString(formatIsoDate(item.createdAt)), 1)
                            ]),
                            "item.status": withCtx(({ item }) => [
                              createVNode("div", { class: "text-center" }, [
                                createVNode(VChip, {
                                  size: "small",
                                  color: chipForStatus(item.status).color,
                                  "text-color": chipForStatus(item.status).textColor
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(getStatusLabelFromCode(item.status)), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["color", "text-color"])
                              ])
                            ]),
                            "item.priority": withCtx(({ item }) => [
                              createVNode("div", null, [
                                createVNode(VChip, {
                                  size: "small",
                                  color: chipForPriority(item.priority).color,
                                  "text-color": chipForPriority(item.priority).textColor
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(item.priority), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["color", "text-color"])
                              ])
                            ]),
                            "item.actions": withCtx(({ item }) => [
                              createVNode(_component_NuxtLink, {
                                to: `/it-service-request/update/${item.id}`
                              }, {
                                default: withCtx(() => [
                                  createVNode(VBtn, {
                                    variant: "outlined",
                                    size: "small",
                                    class: "me-2"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u0E41\u0E01\u0E49\u0E44\u0E02")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }, 8, ["to"]),
                              createVNode(VBtn, {
                                color: "error",
                                variant: "text",
                                size: "small",
                                onClick: withModifiers(($event) => openDelete(item), ["prevent"])
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("\u0E25\u0E1A ")
                                ]),
                                _: 1
                              }, 8, ["onClick"])
                            ]),
                            _: 1
                          }, 8, ["items"])),
                          createVNode(VDialog, {
                            modelValue: deleteDialog.value,
                            "onUpdate:modelValue": ($event) => deleteDialog.value = $event,
                            "max-width": "480"
                          }, {
                            default: withCtx(() => [
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
                                      createVNode("strong", null, toDisplayString(toDelete.value ? toDelete.value.title : ""), 1),
                                      createTextVNode(" ?")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCardActions, { class: "justify-end" }, {
                                    default: withCtx(() => [
                                      createVNode(VBtn, {
                                        variant: "text",
                                        onClick: ($event) => {
                                          deleteDialog.value = false;
                                          toDelete.value = null;
                                        }
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
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue"])
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
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/it-service-request/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-236c36f9"]]);

export { index as default };
