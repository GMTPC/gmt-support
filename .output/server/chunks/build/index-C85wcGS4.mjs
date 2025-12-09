import { inject, ref, resolveComponent, withCtx, createTextVNode, unref, openBlock, createBlock, createVNode, toDisplayString, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { _ as _export_sfc, a as VBtn } from './server.mjs';
import { u as useHead } from './vue.-sixQ7xP-7crsJuN5.mjs';
import { V as VCard, c as VCardTitle, a as VCardText } from './VCard-CSiTQXcr.mjs';
import { V as VTextField } from './VTextField-BBb08qcq.mjs';
import { V as VTextarea } from './VTextarea-C1Baibx1.mjs';
import { V as VList, a as VListItem, b as VListItemTitle, c as VListItemSubtitle } from './VList-DCeFvVa6.mjs';
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
import './VAvatar-BWioJSAV.mjs';
import './index-DUS45q6U.mjs';
import './forwardRefs-Oip3fNRq.mjs';
import './ssrBoot-BtvJZs44.mjs';
import './VDivider-LYYZi4vy.mjs';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({ title: "Projects - GMT SUPPORT" });
    const projects = inject("projects");
    const selected = inject("selectedProject");
    ref("");
    const desc = ref("");
    function saveDetails() {
      if (!selected || !selected.value) return;
      selected.value.description = desc.value;
      alert("\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01\u0E40\u0E23\u0E35\u0E22\u0E1A\u0E23\u0E49\u0E2D\u0E22");
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_VListItemContent = resolveComponent("VListItemContent");
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-4cad020b>`);
      _push(ssrRenderComponent(VCard, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCardTitle, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E42\u0E1B\u0E23\u0E40\u0E08\u0E01\u0E15\u0E4C`);
                } else {
                  return [
                    createTextVNode("\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E42\u0E1B\u0E23\u0E40\u0E08\u0E01\u0E15\u0E4C")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCardText, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (!unref(selected) || !unref(selected).value) {
                    _push3(`<div data-v-4cad020b${_scopeId2}>\u0E42\u0E1B\u0E23\u0E14\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E42\u0E1B\u0E23\u0E40\u0E08\u0E01\u0E15\u0E4C\u0E08\u0E32\u0E01\u0E40\u0E21\u0E19\u0E39\u0E14\u0E49\u0E32\u0E19\u0E0B\u0E49\u0E32\u0E22</div>`);
                  } else {
                    _push3(`<div data-v-4cad020b${_scopeId2}><div class="mb-2" data-v-4cad020b${_scopeId2}><strong data-v-4cad020b${_scopeId2}>\u0E0A\u0E37\u0E48\u0E2D:</strong> ${ssrInterpolate(unref(selected).value.name)}</div>`);
                    _push3(ssrRenderComponent(VTextField, {
                      modelValue: unref(selected).value.name,
                      "onUpdate:modelValue": ($event) => unref(selected).value.name = $event,
                      label: "\u0E0A\u0E37\u0E48\u0E2D\u0E42\u0E1B\u0E23\u0E40\u0E08\u0E01\u0E15\u0E4C"
                    }, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(VTextarea, {
                      modelValue: desc.value,
                      "onUpdate:modelValue": ($event) => desc.value = $event,
                      label: "\u0E23\u0E32\u0E22\u0E25\u0E30\u0E40\u0E2D\u0E35\u0E22\u0E14\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E40\u0E15\u0E34\u0E21",
                      rows: "4",
                      placeholder: unref(selected).value.description || ""
                    }, null, _parent3, _scopeId2));
                    _push3(`<div class="mt-3" data-v-4cad020b${_scopeId2}>`);
                    _push3(ssrRenderComponent(VBtn, {
                      color: "primary",
                      onClick: saveDetails
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01`);
                        } else {
                          return [
                            createTextVNode("\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`</div></div>`);
                  }
                } else {
                  return [
                    !unref(selected) || !unref(selected).value ? (openBlock(), createBlock("div", { key: 0 }, "\u0E42\u0E1B\u0E23\u0E14\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E42\u0E1B\u0E23\u0E40\u0E08\u0E01\u0E15\u0E4C\u0E08\u0E32\u0E01\u0E40\u0E21\u0E19\u0E39\u0E14\u0E49\u0E32\u0E19\u0E0B\u0E49\u0E32\u0E22")) : (openBlock(), createBlock("div", { key: 1 }, [
                      createVNode("div", { class: "mb-2" }, [
                        createVNode("strong", null, "\u0E0A\u0E37\u0E48\u0E2D:"),
                        createTextVNode(" " + toDisplayString(unref(selected).value.name), 1)
                      ]),
                      createVNode(VTextField, {
                        modelValue: unref(selected).value.name,
                        "onUpdate:modelValue": ($event) => unref(selected).value.name = $event,
                        label: "\u0E0A\u0E37\u0E48\u0E2D\u0E42\u0E1B\u0E23\u0E40\u0E08\u0E01\u0E15\u0E4C"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode(VTextarea, {
                        modelValue: desc.value,
                        "onUpdate:modelValue": ($event) => desc.value = $event,
                        label: "\u0E23\u0E32\u0E22\u0E25\u0E30\u0E40\u0E2D\u0E35\u0E22\u0E14\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E40\u0E15\u0E34\u0E21",
                        rows: "4",
                        placeholder: unref(selected).value.description || ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"]),
                      createVNode("div", { class: "mt-3" }, [
                        createVNode(VBtn, {
                          color: "primary",
                          onClick: saveDetails
                        }, {
                          default: withCtx(() => [
                            createTextVNode("\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01")
                          ]),
                          _: 1
                        })
                      ])
                    ]))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCardTitle, null, {
                default: withCtx(() => [
                  createTextVNode("\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E42\u0E1B\u0E23\u0E40\u0E08\u0E01\u0E15\u0E4C")
                ]),
                _: 1
              }),
              createVNode(VCardText, null, {
                default: withCtx(() => [
                  !unref(selected) || !unref(selected).value ? (openBlock(), createBlock("div", { key: 0 }, "\u0E42\u0E1B\u0E23\u0E14\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E42\u0E1B\u0E23\u0E40\u0E08\u0E01\u0E15\u0E4C\u0E08\u0E32\u0E01\u0E40\u0E21\u0E19\u0E39\u0E14\u0E49\u0E32\u0E19\u0E0B\u0E49\u0E32\u0E22")) : (openBlock(), createBlock("div", { key: 1 }, [
                    createVNode("div", { class: "mb-2" }, [
                      createVNode("strong", null, "\u0E0A\u0E37\u0E48\u0E2D:"),
                      createTextVNode(" " + toDisplayString(unref(selected).value.name), 1)
                    ]),
                    createVNode(VTextField, {
                      modelValue: unref(selected).value.name,
                      "onUpdate:modelValue": ($event) => unref(selected).value.name = $event,
                      label: "\u0E0A\u0E37\u0E48\u0E2D\u0E42\u0E1B\u0E23\u0E40\u0E08\u0E01\u0E15\u0E4C"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(VTextarea, {
                      modelValue: desc.value,
                      "onUpdate:modelValue": ($event) => desc.value = $event,
                      label: "\u0E23\u0E32\u0E22\u0E25\u0E30\u0E40\u0E2D\u0E35\u0E22\u0E14\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E40\u0E15\u0E34\u0E21",
                      rows: "4",
                      placeholder: unref(selected).value.description || ""
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"]),
                    createVNode("div", { class: "mt-3" }, [
                      createVNode(VBtn, {
                        color: "primary",
                        onClick: saveDetails
                      }, {
                        default: withCtx(() => [
                          createTextVNode("\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01")
                        ]),
                        _: 1
                      })
                    ])
                  ]))
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="mt-4" data-v-4cad020b>`);
      _push(ssrRenderComponent(VCard, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCardTitle, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23\u0E42\u0E1B\u0E23\u0E40\u0E08\u0E01\u0E15\u0E4C`);
                } else {
                  return [
                    createTextVNode("\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23\u0E42\u0E1B\u0E23\u0E40\u0E08\u0E01\u0E15\u0E4C")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCardText, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (unref(projects) && unref(projects).value.length) {
                    _push3(ssrRenderComponent(VList, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<!--[-->`);
                          ssrRenderList(unref(projects).value, (p) => {
                            _push4(ssrRenderComponent(VListItem, {
                              key: p.id
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(_component_VListItemContent, null, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(ssrRenderComponent(VListItemTitle, null, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(`${ssrInterpolate(p.name)}`);
                                            } else {
                                              return [
                                                createTextVNode(toDisplayString(p.name), 1)
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent6, _scopeId5));
                                        _push6(ssrRenderComponent(VListItemSubtitle, null, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(`${ssrInterpolate(p.status)}`);
                                            } else {
                                              return [
                                                createTextVNode(toDisplayString(p.status), 1)
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent6, _scopeId5));
                                      } else {
                                        return [
                                          createVNode(VListItemTitle, null, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(p.name), 1)
                                            ]),
                                            _: 2
                                          }, 1024),
                                          createVNode(VListItemSubtitle, null, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(p.status), 1)
                                            ]),
                                            _: 2
                                          }, 1024)
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                } else {
                                  return [
                                    createVNode(_component_VListItemContent, null, {
                                      default: withCtx(() => [
                                        createVNode(VListItemTitle, null, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(p.name), 1)
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(VListItemSubtitle, null, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(p.status), 1)
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          });
                          _push4(`<!--]-->`);
                        } else {
                          return [
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(projects).value, (p) => {
                              return openBlock(), createBlock(VListItem, {
                                key: p.id
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_VListItemContent, null, {
                                    default: withCtx(() => [
                                      createVNode(VListItemTitle, null, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(p.name), 1)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(VListItemSubtitle, null, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(p.status), 1)
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1024);
                            }), 128))
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<div data-v-4cad020b${_scopeId2}>\u0E22\u0E31\u0E07\u0E44\u0E21\u0E48\u0E21\u0E35\u0E42\u0E1B\u0E23\u0E40\u0E08\u0E01\u0E15\u0E4C</div>`);
                  }
                } else {
                  return [
                    unref(projects) && unref(projects).value.length ? (openBlock(), createBlock(VList, { key: 0 }, {
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(projects).value, (p) => {
                          return openBlock(), createBlock(VListItem, {
                            key: p.id
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_VListItemContent, null, {
                                default: withCtx(() => [
                                  createVNode(VListItemTitle, null, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(p.name), 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(VListItemSubtitle, null, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(p.status), 1)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1024);
                        }), 128))
                      ]),
                      _: 1
                    })) : (openBlock(), createBlock("div", { key: 1 }, "\u0E22\u0E31\u0E07\u0E44\u0E21\u0E48\u0E21\u0E35\u0E42\u0E1B\u0E23\u0E40\u0E08\u0E01\u0E15\u0E4C"))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCardTitle, null, {
                default: withCtx(() => [
                  createTextVNode("\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23\u0E42\u0E1B\u0E23\u0E40\u0E08\u0E01\u0E15\u0E4C")
                ]),
                _: 1
              }),
              createVNode(VCardText, null, {
                default: withCtx(() => [
                  unref(projects) && unref(projects).value.length ? (openBlock(), createBlock(VList, { key: 0 }, {
                    default: withCtx(() => [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(projects).value, (p) => {
                        return openBlock(), createBlock(VListItem, {
                          key: p.id
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_VListItemContent, null, {
                              default: withCtx(() => [
                                createVNode(VListItemTitle, null, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(p.name), 1)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(VListItemSubtitle, null, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(p.status), 1)
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1024);
                      }), 128))
                    ]),
                    _: 1
                  })) : (openBlock(), createBlock("div", { key: 1 }, "\u0E22\u0E31\u0E07\u0E44\u0E21\u0E48\u0E21\u0E35\u0E42\u0E1B\u0E23\u0E40\u0E08\u0E01\u0E15\u0E4C"))
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/projects/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-4cad020b"]]);

export { index as default };
