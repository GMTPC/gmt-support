import { _ as __nuxt_component_0 } from './Breadcrumbs-CblUXPow.mjs';
import { ref, mergeProps, withCtx, createVNode, withModifiers, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { u as useFixAssets } from './useFixAssets-Dbk6r4-p.mjs';
import { _ as _export_sfc, H as useRouter$1, a as VBtn } from './server.mjs';
import { u as useHead } from './vue.-sixQ7xP-7crsJuN5.mjs';
import { V as VRow, a as VCol } from './VRow-zuLeAiTc.mjs';
import { V as VCard, c as VCardTitle, a as VCardText, e as VCardActions } from './VCard-CSiTQXcr.mjs';
import { V as VForm } from './VForm-wpOva5dg.mjs';
import { V as VTextField } from './VTextField-BBb08qcq.mjs';
import { V as VTextarea } from './VTextarea-C1Baibx1.mjs';
import { V as VSelect } from './VSelect-Cr6Di2uC.mjs';
import { V as VFileInput } from './VFileInput-DLZed_SR.mjs';
import { V as VDivider } from './VDivider-LYYZi4vy.mjs';
import './nuxt-link-wKVHBGBj.mjs';
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
import './forwardRefs-Oip3fNRq.mjs';
import './index-DUS45q6U.mjs';
import './VList-DCeFvVa6.mjs';
import './ssrBoot-BtvJZs44.mjs';
import './VMenu-CLtX8H-Q.mjs';
import './VOverlay-B9V9YqYJ.mjs';
import './scopeId-b3c5ZUEe.mjs';
import './VCheckboxBtn-DiqOHInw.mjs';
import './VChip-DBW6TD_X.mjs';
import './VSlideGroup-C5ipntF0.mjs';

const _sfc_main = {
  __name: "create",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({ title: "\u0E41\u0E08\u0E49\u0E07\u0E0B\u0E48\u0E2D\u0E21\u0E43\u0E2B\u0E21\u0E48 - GMT SUPPORT" });
    const { createTicket } = useFixAssets();
    const router = useRouter$1();
    const formRef = ref(null);
    const titleRules = [(v) => !!v || "\u0E01\u0E23\u0E38\u0E13\u0E32\u0E01\u0E23\u0E2D\u0E01\u0E2B\u0E31\u0E27\u0E02\u0E49\u0E2D"];
    const title = ref("");
    const description = ref("");
    const priority = ref("Normal");
    const file = ref(null);
    async function submit() {
      var _a;
      const valid = formRef.value ? await formRef.value.validate() : true;
      if (!valid) return;
      const payload = {
        title: title.value,
        description: description.value,
        priority: priority.value,
        fileName: ((_a = file.value) == null ? void 0 : _a.name) || null
      };
      const t = await createTicket(payload);
      if (t && t.id) {
        router.push("/it-service-request");
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Breadcrumbs = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "pa-4" }, _attrs))} data-v-e95575a6>`);
      _push(ssrRenderComponent(VRow, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCol, { cols: "12" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Breadcrumbs, {
                    showHome: true,
                    items: [{ text: "\u0E41\u0E08\u0E49\u0E07\u0E0B\u0E48\u0E2D\u0E21", to: "/it-service-request" }, { text: "\u0E41\u0E08\u0E49\u0E07\u0E0B\u0E48\u0E2D\u0E21\u0E43\u0E2B\u0E21\u0E48" }]
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCard, {
                    class: "card-form",
                    style: { "width": "100%" }
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCardTitle, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div data-v-e95575a6${_scopeId4}><div class="h5" data-v-e95575a6${_scopeId4}>\u0E41\u0E08\u0E49\u0E07\u0E0B\u0E48\u0E2D\u0E21\u0E43\u0E2B\u0E21\u0E48</div><div class="text-muted" data-v-e95575a6${_scopeId4}>\u0E01\u0E23\u0E38\u0E13\u0E32\u0E01\u0E23\u0E2D\u0E01\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E43\u0E2B\u0E49\u0E04\u0E23\u0E1A\u0E16\u0E49\u0E27\u0E19 \u0E17\u0E35\u0E21 IT \u0E08\u0E30\u0E15\u0E34\u0E14\u0E15\u0E48\u0E2D\u0E15\u0E2D\u0E1A\u0E01\u0E25\u0E31\u0E1A</div></div>`);
                            } else {
                              return [
                                createVNode("div", null, [
                                  createVNode("div", { class: "h5" }, "\u0E41\u0E08\u0E49\u0E07\u0E0B\u0E48\u0E2D\u0E21\u0E43\u0E2B\u0E21\u0E48"),
                                  createVNode("div", { class: "text-muted" }, "\u0E01\u0E23\u0E38\u0E13\u0E32\u0E01\u0E23\u0E2D\u0E01\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E43\u0E2B\u0E49\u0E04\u0E23\u0E1A\u0E16\u0E49\u0E27\u0E19 \u0E17\u0E35\u0E21 IT \u0E08\u0E30\u0E15\u0E34\u0E14\u0E15\u0E48\u0E2D\u0E15\u0E2D\u0E1A\u0E01\u0E25\u0E31\u0E1A")
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
                                ref: formRef,
                                onSubmit: submit
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
                                            md: "4"
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
                                            md: "4"
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
                                              md: "4"
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
                                              md: "4"
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
                                            md: "4"
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
                                            md: "4"
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
                                  ref: formRef,
                                  onSubmit: withModifiers(submit, ["prevent"])
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
                                          md: "4"
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
                                          md: "4"
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
                        _push4(ssrRenderComponent(VCardActions, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCol, { cols: "12" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VBtn, {
                                      type: "submit",
                                      color: "primary",
                                      class: "btn me-2"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(` \u0E2A\u0E48\u0E07\u0E04\u0E33\u0E02\u0E2D `);
                                        } else {
                                          return [
                                            createTextVNode(" \u0E2A\u0E48\u0E07\u0E04\u0E33\u0E02\u0E2D ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VBtn, {
                                      color: "secondary",
                                      type: "reset",
                                      variant: "tonal",
                                      onClick: ($event) => {
                                        title.value = "";
                                        description.value = "";
                                        priority.value = "Normal";
                                        file.value = null;
                                      }
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(` \u0E25\u0E49\u0E32\u0E07 `);
                                        } else {
                                          return [
                                            createTextVNode(" \u0E25\u0E49\u0E32\u0E07 ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VBtn, {
                                        type: "submit",
                                        color: "primary",
                                        class: "btn me-2"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" \u0E2A\u0E48\u0E07\u0E04\u0E33\u0E02\u0E2D ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VBtn, {
                                        color: "secondary",
                                        type: "reset",
                                        variant: "tonal",
                                        onClick: ($event) => {
                                          title.value = "";
                                          description.value = "";
                                          priority.value = "Normal";
                                          file.value = null;
                                        }
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" \u0E25\u0E49\u0E32\u0E07 ")
                                        ]),
                                        _: 1
                                      }, 8, ["onClick"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VCol, { cols: "12" }, {
                                  default: withCtx(() => [
                                    createVNode(VBtn, {
                                      type: "submit",
                                      color: "primary",
                                      class: "btn me-2"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" \u0E2A\u0E48\u0E07\u0E04\u0E33\u0E02\u0E2D ")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VBtn, {
                                      color: "secondary",
                                      type: "reset",
                                      variant: "tonal",
                                      onClick: ($event) => {
                                        title.value = "";
                                        description.value = "";
                                        priority.value = "Normal";
                                        file.value = null;
                                      }
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" \u0E25\u0E49\u0E32\u0E07 ")
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
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCardTitle, null, {
                            default: withCtx(() => [
                              createVNode("div", null, [
                                createVNode("div", { class: "h5" }, "\u0E41\u0E08\u0E49\u0E07\u0E0B\u0E48\u0E2D\u0E21\u0E43\u0E2B\u0E21\u0E48"),
                                createVNode("div", { class: "text-muted" }, "\u0E01\u0E23\u0E38\u0E13\u0E32\u0E01\u0E23\u0E2D\u0E01\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E43\u0E2B\u0E49\u0E04\u0E23\u0E1A\u0E16\u0E49\u0E27\u0E19 \u0E17\u0E35\u0E21 IT \u0E08\u0E30\u0E15\u0E34\u0E14\u0E15\u0E48\u0E2D\u0E15\u0E2D\u0E1A\u0E01\u0E25\u0E31\u0E1A")
                              ])
                            ]),
                            _: 1
                          }),
                          createVNode(VCardText, { class: "card-body" }, {
                            default: withCtx(() => [
                              createVNode(VForm, {
                                ref_key: "formRef",
                                ref: formRef,
                                onSubmit: withModifiers(submit, ["prevent"])
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
                                        md: "4"
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
                                        md: "4"
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
                          createVNode(VCardActions, null, {
                            default: withCtx(() => [
                              createVNode(VCol, { cols: "12" }, {
                                default: withCtx(() => [
                                  createVNode(VBtn, {
                                    type: "submit",
                                    color: "primary",
                                    class: "btn me-2"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" \u0E2A\u0E48\u0E07\u0E04\u0E33\u0E02\u0E2D ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VBtn, {
                                    color: "secondary",
                                    type: "reset",
                                    variant: "tonal",
                                    onClick: ($event) => {
                                      title.value = "";
                                      description.value = "";
                                      priority.value = "Normal";
                                      file.value = null;
                                    }
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" \u0E25\u0E49\u0E32\u0E07 ")
                                    ]),
                                    _: 1
                                  }, 8, ["onClick"])
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
                    createVNode(_component_Breadcrumbs, {
                      showHome: true,
                      items: [{ text: "\u0E41\u0E08\u0E49\u0E07\u0E0B\u0E48\u0E2D\u0E21", to: "/it-service-request" }, { text: "\u0E41\u0E08\u0E49\u0E07\u0E0B\u0E48\u0E2D\u0E21\u0E43\u0E2B\u0E21\u0E48" }]
                    }),
                    createVNode(VCard, {
                      class: "card-form",
                      style: { "width": "100%" }
                    }, {
                      default: withCtx(() => [
                        createVNode(VCardTitle, null, {
                          default: withCtx(() => [
                            createVNode("div", null, [
                              createVNode("div", { class: "h5" }, "\u0E41\u0E08\u0E49\u0E07\u0E0B\u0E48\u0E2D\u0E21\u0E43\u0E2B\u0E21\u0E48"),
                              createVNode("div", { class: "text-muted" }, "\u0E01\u0E23\u0E38\u0E13\u0E32\u0E01\u0E23\u0E2D\u0E01\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E43\u0E2B\u0E49\u0E04\u0E23\u0E1A\u0E16\u0E49\u0E27\u0E19 \u0E17\u0E35\u0E21 IT \u0E08\u0E30\u0E15\u0E34\u0E14\u0E15\u0E48\u0E2D\u0E15\u0E2D\u0E1A\u0E01\u0E25\u0E31\u0E1A")
                            ])
                          ]),
                          _: 1
                        }),
                        createVNode(VCardText, { class: "card-body" }, {
                          default: withCtx(() => [
                            createVNode(VForm, {
                              ref_key: "formRef",
                              ref: formRef,
                              onSubmit: withModifiers(submit, ["prevent"])
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
                                      md: "4"
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
                                      md: "4"
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
                        createVNode(VCardActions, null, {
                          default: withCtx(() => [
                            createVNode(VCol, { cols: "12" }, {
                              default: withCtx(() => [
                                createVNode(VBtn, {
                                  type: "submit",
                                  color: "primary",
                                  class: "btn me-2"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" \u0E2A\u0E48\u0E07\u0E04\u0E33\u0E02\u0E2D ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VBtn, {
                                  color: "secondary",
                                  type: "reset",
                                  variant: "tonal",
                                  onClick: ($event) => {
                                    title.value = "";
                                    description.value = "";
                                    priority.value = "Normal";
                                    file.value = null;
                                  }
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" \u0E25\u0E49\u0E32\u0E07 ")
                                  ]),
                                  _: 1
                                }, 8, ["onClick"])
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
              createVNode(VCol, { cols: "12" }, {
                default: withCtx(() => [
                  createVNode(_component_Breadcrumbs, {
                    showHome: true,
                    items: [{ text: "\u0E41\u0E08\u0E49\u0E07\u0E0B\u0E48\u0E2D\u0E21", to: "/it-service-request" }, { text: "\u0E41\u0E08\u0E49\u0E07\u0E0B\u0E48\u0E2D\u0E21\u0E43\u0E2B\u0E21\u0E48" }]
                  }),
                  createVNode(VCard, {
                    class: "card-form",
                    style: { "width": "100%" }
                  }, {
                    default: withCtx(() => [
                      createVNode(VCardTitle, null, {
                        default: withCtx(() => [
                          createVNode("div", null, [
                            createVNode("div", { class: "h5" }, "\u0E41\u0E08\u0E49\u0E07\u0E0B\u0E48\u0E2D\u0E21\u0E43\u0E2B\u0E21\u0E48"),
                            createVNode("div", { class: "text-muted" }, "\u0E01\u0E23\u0E38\u0E13\u0E32\u0E01\u0E23\u0E2D\u0E01\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E43\u0E2B\u0E49\u0E04\u0E23\u0E1A\u0E16\u0E49\u0E27\u0E19 \u0E17\u0E35\u0E21 IT \u0E08\u0E30\u0E15\u0E34\u0E14\u0E15\u0E48\u0E2D\u0E15\u0E2D\u0E1A\u0E01\u0E25\u0E31\u0E1A")
                          ])
                        ]),
                        _: 1
                      }),
                      createVNode(VCardText, { class: "card-body" }, {
                        default: withCtx(() => [
                          createVNode(VForm, {
                            ref_key: "formRef",
                            ref: formRef,
                            onSubmit: withModifiers(submit, ["prevent"])
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
                                    md: "4"
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
                                    md: "4"
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
                      createVNode(VCardActions, null, {
                        default: withCtx(() => [
                          createVNode(VCol, { cols: "12" }, {
                            default: withCtx(() => [
                              createVNode(VBtn, {
                                type: "submit",
                                color: "primary",
                                class: "btn me-2"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" \u0E2A\u0E48\u0E07\u0E04\u0E33\u0E02\u0E2D ")
                                ]),
                                _: 1
                              }),
                              createVNode(VBtn, {
                                color: "secondary",
                                type: "reset",
                                variant: "tonal",
                                onClick: ($event) => {
                                  title.value = "";
                                  description.value = "";
                                  priority.value = "Normal";
                                  file.value = null;
                                }
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" \u0E25\u0E49\u0E32\u0E07 ")
                                ]),
                                _: 1
                              }, 8, ["onClick"])
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
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/it-service-request/create.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const create = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e95575a6"]]);

export { create as default };
