import { defineComponent, ref, withCtx, createVNode, createTextVNode, openBlock, createBlock, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { V as VCard, a as VCardText } from './VCard-CSiTQXcr.mjs';
import { V as VForm } from './VForm-wpOva5dg.mjs';
import { V as VRow, a as VCol } from './VRow-zuLeAiTc.mjs';
import { V as VTextField } from './VTextField-BBb08qcq.mjs';
import { V as VCheckbox } from './VCheckbox-B6hYyIfB.mjs';
import { V as VTextarea } from './VTextarea-C1Baibx1.mjs';
import { a as VBtn, V as VIcon } from './server.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "MemoForm",
  __ssrInlineRender: true,
  props: {
    memo: {},
    isSaved: { type: Boolean }
  },
  emits: ["save", "exportPdf", "reset"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const formRef = ref();
    const requiredRule = (v) => !!v || "\u0E1F\u0E34\u0E25\u0E14\u0E4C\u0E19\u0E35\u0E49\u0E08\u0E33\u0E40\u0E1B\u0E47\u0E19\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E23\u0E2D\u0E01";
    const handleSave = async () => {
      const { valid } = await formRef.value.validate();
      if (valid) {
        emit("save");
      }
    };
    const handleExportPdf = () => {
      emit("exportPdf");
    };
    const handleReset = () => {
      var _a;
      emit("reset");
      (_a = formRef.value) == null ? void 0 : _a.resetValidation();
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VCard, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCardText, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VForm, {
                    ref_key: "formRef",
                    ref: formRef
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VRow, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCol, {
                                cols: "12",
                                md: "6"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VTextField, {
                                      modelValue: __props.memo.from,
                                      "onUpdate:modelValue": ($event) => __props.memo.from = $event,
                                      label: "\u0E08\u0E32\u0E01 (From)",
                                      density: "comfortable",
                                      rules: [requiredRule]
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VTextField, {
                                        modelValue: __props.memo.from,
                                        "onUpdate:modelValue": ($event) => __props.memo.from = $event,
                                        label: "\u0E08\u0E32\u0E01 (From)",
                                        density: "comfortable",
                                        rules: [requiredRule]
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VCol, {
                                cols: "12",
                                md: "6"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VTextField, {
                                      modelValue: __props.memo.to,
                                      "onUpdate:modelValue": ($event) => __props.memo.to = $event,
                                      label: "\u0E16\u0E36\u0E07 (To)",
                                      density: "comfortable",
                                      rules: [requiredRule]
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VTextField, {
                                        modelValue: __props.memo.to,
                                        "onUpdate:modelValue": ($event) => __props.memo.to = $event,
                                        label: "\u0E16\u0E36\u0E07 (To)",
                                        density: "comfortable",
                                        rules: [requiredRule]
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VCol, {
                                  cols: "12",
                                  md: "6"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VTextField, {
                                      modelValue: __props.memo.from,
                                      "onUpdate:modelValue": ($event) => __props.memo.from = $event,
                                      label: "\u0E08\u0E32\u0E01 (From)",
                                      density: "comfortable",
                                      rules: [requiredRule]
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, {
                                  cols: "12",
                                  md: "6"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VTextField, {
                                      modelValue: __props.memo.to,
                                      "onUpdate:modelValue": ($event) => __props.memo.to = $event,
                                      label: "\u0E16\u0E36\u0E07 (To)",
                                      density: "comfortable",
                                      rules: [requiredRule]
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VRow, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCol, {
                                cols: "12",
                                md: "6"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VTextField, {
                                      modelValue: __props.memo.cc,
                                      "onUpdate:modelValue": ($event) => __props.memo.cc = $event,
                                      label: "\u0E2A\u0E33\u0E40\u0E19\u0E32 (CC)",
                                      density: "comfortable"
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VTextField, {
                                        modelValue: __props.memo.cc,
                                        "onUpdate:modelValue": ($event) => __props.memo.cc = $event,
                                        label: "\u0E2A\u0E33\u0E40\u0E19\u0E32 (CC)",
                                        density: "comfortable"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VCol, {
                                cols: "12",
                                md: "3"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VTextField, {
                                      modelValue: __props.memo.date,
                                      "onUpdate:modelValue": ($event) => __props.memo.date = $event,
                                      label: "\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48 (Date)",
                                      type: "date",
                                      density: "comfortable",
                                      rules: [requiredRule]
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VTextField, {
                                        modelValue: __props.memo.date,
                                        "onUpdate:modelValue": ($event) => __props.memo.date = $event,
                                        label: "\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48 (Date)",
                                        type: "date",
                                        density: "comfortable",
                                        rules: [requiredRule]
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VCol, {
                                cols: "12",
                                md: "3"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VTextField, {
                                      modelValue: __props.memo.documentNumber,
                                      "onUpdate:modelValue": ($event) => __props.memo.documentNumber = $event,
                                      label: "\u0E40\u0E25\u0E02\u0E17\u0E35\u0E48\u0E40\u0E2D\u0E01\u0E2A\u0E32\u0E23",
                                      density: "comfortable"
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VTextField, {
                                        modelValue: __props.memo.documentNumber,
                                        "onUpdate:modelValue": ($event) => __props.memo.documentNumber = $event,
                                        label: "\u0E40\u0E25\u0E02\u0E17\u0E35\u0E48\u0E40\u0E2D\u0E01\u0E2A\u0E32\u0E23",
                                        density: "comfortable"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VCol, {
                                  cols: "12",
                                  md: "6"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VTextField, {
                                      modelValue: __props.memo.cc,
                                      "onUpdate:modelValue": ($event) => __props.memo.cc = $event,
                                      label: "\u0E2A\u0E33\u0E40\u0E19\u0E32 (CC)",
                                      density: "comfortable"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, {
                                  cols: "12",
                                  md: "3"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VTextField, {
                                      modelValue: __props.memo.date,
                                      "onUpdate:modelValue": ($event) => __props.memo.date = $event,
                                      label: "\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48 (Date)",
                                      type: "date",
                                      density: "comfortable",
                                      rules: [requiredRule]
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, {
                                  cols: "12",
                                  md: "3"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VTextField, {
                                      modelValue: __props.memo.documentNumber,
                                      "onUpdate:modelValue": ($event) => __props.memo.documentNumber = $event,
                                      label: "\u0E40\u0E25\u0E02\u0E17\u0E35\u0E48\u0E40\u0E2D\u0E01\u0E2A\u0E32\u0E23",
                                      density: "comfortable"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VRow, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCol, { cols: "12" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<div class="text-subtitle-2 mb-2"${_scopeId5}> \u0E40\u0E1E\u0E37\u0E48\u0E2D (Purpose): </div>`);
                                    _push6(ssrRenderComponent(VRow, { dense: "" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VCol, {
                                            cols: "12",
                                            sm: "6",
                                            md: "3"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VCheckbox, {
                                                  modelValue: __props.memo.purposes.consider,
                                                  "onUpdate:modelValue": ($event) => __props.memo.purposes.consider = $event,
                                                  label: "\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E1E\u0E34\u0E08\u0E32\u0E23\u0E13\u0E32 (To consider)",
                                                  density: "compact",
                                                  "hide-details": ""
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VCheckbox, {
                                                    modelValue: __props.memo.purposes.consider,
                                                    "onUpdate:modelValue": ($event) => __props.memo.purposes.consider = $event,
                                                    label: "\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E1E\u0E34\u0E08\u0E32\u0E23\u0E13\u0E32 (To consider)",
                                                    density: "compact",
                                                    "hide-details": ""
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, {
                                            cols: "12",
                                            sm: "6",
                                            md: "3"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VCheckbox, {
                                                  modelValue: __props.memo.purposes.know,
                                                  "onUpdate:modelValue": ($event) => __props.memo.purposes.know = $event,
                                                  label: "\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E17\u0E23\u0E32\u0E1A (To know)",
                                                  density: "compact",
                                                  "hide-details": ""
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VCheckbox, {
                                                    modelValue: __props.memo.purposes.know,
                                                    "onUpdate:modelValue": ($event) => __props.memo.purposes.know = $event,
                                                    label: "\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E17\u0E23\u0E32\u0E1A (To know)",
                                                    density: "compact",
                                                    "hide-details": ""
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, {
                                            cols: "12",
                                            sm: "6",
                                            md: "3"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VCheckbox, {
                                                  modelValue: __props.memo.purposes.issueCommand,
                                                  "onUpdate:modelValue": ($event) => __props.memo.purposes.issueCommand = $event,
                                                  label: "\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E2D\u0E2D\u0E01\u0E04\u0E33\u0E2A\u0E31\u0E48\u0E07 (Issue command)",
                                                  density: "compact",
                                                  "hide-details": ""
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VCheckbox, {
                                                    modelValue: __props.memo.purposes.issueCommand,
                                                    "onUpdate:modelValue": ($event) => __props.memo.purposes.issueCommand = $event,
                                                    label: "\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E2D\u0E2D\u0E01\u0E04\u0E33\u0E2A\u0E31\u0E48\u0E07 (Issue command)",
                                                    density: "compact",
                                                    "hide-details": ""
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, {
                                            cols: "12",
                                            sm: "6",
                                            md: "3"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VCheckbox, {
                                                  modelValue: __props.memo.purposes.continue,
                                                  "onUpdate:modelValue": ($event) => __props.memo.purposes.continue = $event,
                                                  label: "\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E14\u0E33\u0E40\u0E19\u0E34\u0E19\u0E01\u0E32\u0E23 (To continue)",
                                                  density: "compact",
                                                  "hide-details": ""
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VCheckbox, {
                                                    modelValue: __props.memo.purposes.continue,
                                                    "onUpdate:modelValue": ($event) => __props.memo.purposes.continue = $event,
                                                    label: "\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E14\u0E33\u0E40\u0E19\u0E34\u0E19\u0E01\u0E32\u0E23 (To continue)",
                                                    density: "compact",
                                                    "hide-details": ""
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VCol, {
                                              cols: "12",
                                              sm: "6",
                                              md: "3"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VCheckbox, {
                                                  modelValue: __props.memo.purposes.consider,
                                                  "onUpdate:modelValue": ($event) => __props.memo.purposes.consider = $event,
                                                  label: "\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E1E\u0E34\u0E08\u0E32\u0E23\u0E13\u0E32 (To consider)",
                                                  density: "compact",
                                                  "hide-details": ""
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              cols: "12",
                                              sm: "6",
                                              md: "3"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VCheckbox, {
                                                  modelValue: __props.memo.purposes.know,
                                                  "onUpdate:modelValue": ($event) => __props.memo.purposes.know = $event,
                                                  label: "\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E17\u0E23\u0E32\u0E1A (To know)",
                                                  density: "compact",
                                                  "hide-details": ""
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              cols: "12",
                                              sm: "6",
                                              md: "3"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VCheckbox, {
                                                  modelValue: __props.memo.purposes.issueCommand,
                                                  "onUpdate:modelValue": ($event) => __props.memo.purposes.issueCommand = $event,
                                                  label: "\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E2D\u0E2D\u0E01\u0E04\u0E33\u0E2A\u0E31\u0E48\u0E07 (Issue command)",
                                                  density: "compact",
                                                  "hide-details": ""
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              cols: "12",
                                              sm: "6",
                                              md: "3"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VCheckbox, {
                                                  modelValue: __props.memo.purposes.continue,
                                                  "onUpdate:modelValue": ($event) => __props.memo.purposes.continue = $event,
                                                  label: "\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E14\u0E33\u0E40\u0E19\u0E34\u0E19\u0E01\u0E32\u0E23 (To continue)",
                                                  density: "compact",
                                                  "hide-details": ""
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
                                      createVNode("div", { class: "text-subtitle-2 mb-2" }, " \u0E40\u0E1E\u0E37\u0E48\u0E2D (Purpose): "),
                                      createVNode(VRow, { dense: "" }, {
                                        default: withCtx(() => [
                                          createVNode(VCol, {
                                            cols: "12",
                                            sm: "6",
                                            md: "3"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VCheckbox, {
                                                modelValue: __props.memo.purposes.consider,
                                                "onUpdate:modelValue": ($event) => __props.memo.purposes.consider = $event,
                                                label: "\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E1E\u0E34\u0E08\u0E32\u0E23\u0E13\u0E32 (To consider)",
                                                density: "compact",
                                                "hide-details": ""
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, {
                                            cols: "12",
                                            sm: "6",
                                            md: "3"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VCheckbox, {
                                                modelValue: __props.memo.purposes.know,
                                                "onUpdate:modelValue": ($event) => __props.memo.purposes.know = $event,
                                                label: "\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E17\u0E23\u0E32\u0E1A (To know)",
                                                density: "compact",
                                                "hide-details": ""
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, {
                                            cols: "12",
                                            sm: "6",
                                            md: "3"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VCheckbox, {
                                                modelValue: __props.memo.purposes.issueCommand,
                                                "onUpdate:modelValue": ($event) => __props.memo.purposes.issueCommand = $event,
                                                label: "\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E2D\u0E2D\u0E01\u0E04\u0E33\u0E2A\u0E31\u0E48\u0E07 (Issue command)",
                                                density: "compact",
                                                "hide-details": ""
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, {
                                            cols: "12",
                                            sm: "6",
                                            md: "3"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VCheckbox, {
                                                modelValue: __props.memo.purposes.continue,
                                                "onUpdate:modelValue": ($event) => __props.memo.purposes.continue = $event,
                                                label: "\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E14\u0E33\u0E40\u0E19\u0E34\u0E19\u0E01\u0E32\u0E23 (To continue)",
                                                density: "compact",
                                                "hide-details": ""
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
                                createVNode(VCol, { cols: "12" }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "text-subtitle-2 mb-2" }, " \u0E40\u0E1E\u0E37\u0E48\u0E2D (Purpose): "),
                                    createVNode(VRow, { dense: "" }, {
                                      default: withCtx(() => [
                                        createVNode(VCol, {
                                          cols: "12",
                                          sm: "6",
                                          md: "3"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VCheckbox, {
                                              modelValue: __props.memo.purposes.consider,
                                              "onUpdate:modelValue": ($event) => __props.memo.purposes.consider = $event,
                                              label: "\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E1E\u0E34\u0E08\u0E32\u0E23\u0E13\u0E32 (To consider)",
                                              density: "compact",
                                              "hide-details": ""
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, {
                                          cols: "12",
                                          sm: "6",
                                          md: "3"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VCheckbox, {
                                              modelValue: __props.memo.purposes.know,
                                              "onUpdate:modelValue": ($event) => __props.memo.purposes.know = $event,
                                              label: "\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E17\u0E23\u0E32\u0E1A (To know)",
                                              density: "compact",
                                              "hide-details": ""
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, {
                                          cols: "12",
                                          sm: "6",
                                          md: "3"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VCheckbox, {
                                              modelValue: __props.memo.purposes.issueCommand,
                                              "onUpdate:modelValue": ($event) => __props.memo.purposes.issueCommand = $event,
                                              label: "\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E2D\u0E2D\u0E01\u0E04\u0E33\u0E2A\u0E31\u0E48\u0E07 (Issue command)",
                                              density: "compact",
                                              "hide-details": ""
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, {
                                          cols: "12",
                                          sm: "6",
                                          md: "3"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VCheckbox, {
                                              modelValue: __props.memo.purposes.continue,
                                              "onUpdate:modelValue": ($event) => __props.memo.purposes.continue = $event,
                                              label: "\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E14\u0E33\u0E40\u0E19\u0E34\u0E19\u0E01\u0E32\u0E23 (To continue)",
                                              density: "compact",
                                              "hide-details": ""
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VRow, { class: "mt-2" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCol, { cols: "12" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<div class="text-subtitle-2 mb-2"${_scopeId5}> \u0E01\u0E32\u0E23\u0E14\u0E33\u0E40\u0E19\u0E34\u0E19\u0E01\u0E32\u0E23 (Actions): </div>`);
                                    _push6(ssrRenderComponent(VRow, { dense: "" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VCol, {
                                            cols: "12",
                                            sm: "6",
                                            md: "3"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VCheckbox, {
                                                  modelValue: __props.memo.actions.follow,
                                                  "onUpdate:modelValue": ($event) => __props.memo.actions.follow = $event,
                                                  label: "\u0E1B\u0E0F\u0E34\u0E1A\u0E31\u0E15\u0E34\u0E15\u0E32\u0E21 (Please keep)",
                                                  density: "compact",
                                                  "hide-details": ""
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VCheckbox, {
                                                    modelValue: __props.memo.actions.follow,
                                                    "onUpdate:modelValue": ($event) => __props.memo.actions.follow = $event,
                                                    label: "\u0E1B\u0E0F\u0E34\u0E1A\u0E31\u0E15\u0E34\u0E15\u0E32\u0E21 (Please keep)",
                                                    density: "compact",
                                                    "hide-details": ""
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, {
                                            cols: "12",
                                            sm: "6",
                                            md: "3"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VCheckbox, {
                                                  modelValue: __props.memo.actions.considerReturn,
                                                  "onUpdate:modelValue": ($event) => __props.memo.actions.considerReturn = $event,
                                                  label: "\u0E1E\u0E34\u0E08\u0E32\u0E23\u0E13\u0E32\u0E41\u0E25\u0E49\u0E27\u0E2A\u0E48\u0E07\u0E04\u0E37\u0E19 (Please return)",
                                                  density: "compact",
                                                  "hide-details": ""
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VCheckbox, {
                                                    modelValue: __props.memo.actions.considerReturn,
                                                    "onUpdate:modelValue": ($event) => __props.memo.actions.considerReturn = $event,
                                                    label: "\u0E1E\u0E34\u0E08\u0E32\u0E23\u0E13\u0E32\u0E41\u0E25\u0E49\u0E27\u0E2A\u0E48\u0E07\u0E04\u0E37\u0E19 (Please return)",
                                                    density: "compact",
                                                    "hide-details": ""
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, {
                                            cols: "12",
                                            sm: "6",
                                            md: "3"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VCheckbox, {
                                                  modelValue: __props.memo.actions.copyStores,
                                                  "onUpdate:modelValue": ($event) => __props.memo.actions.copyStores = $event,
                                                  label: "\u0E16\u0E48\u0E32\u0E22\u0E2A\u0E33\u0E40\u0E19\u0E32\u0E40\u0E01\u0E47\u0E1A\u0E44\u0E27\u0E49 (Copy stores)",
                                                  density: "compact",
                                                  "hide-details": ""
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VCheckbox, {
                                                    modelValue: __props.memo.actions.copyStores,
                                                    "onUpdate:modelValue": ($event) => __props.memo.actions.copyStores = $event,
                                                    label: "\u0E16\u0E48\u0E32\u0E22\u0E2A\u0E33\u0E40\u0E19\u0E32\u0E40\u0E01\u0E47\u0E1A\u0E44\u0E27\u0E49 (Copy stores)",
                                                    density: "compact",
                                                    "hide-details": ""
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, {
                                            cols: "12",
                                            sm: "6",
                                            md: "3"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VCheckbox, {
                                                  modelValue: __props.memo.actions.returnCopies,
                                                  "onUpdate:modelValue": ($event) => __props.memo.actions.returnCopies = $event,
                                                  label: "\u0E2A\u0E48\u0E07\u0E2A\u0E33\u0E40\u0E19\u0E32\u0E04\u0E37\u0E19 (Return copies)",
                                                  density: "compact",
                                                  "hide-details": ""
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VCheckbox, {
                                                    modelValue: __props.memo.actions.returnCopies,
                                                    "onUpdate:modelValue": ($event) => __props.memo.actions.returnCopies = $event,
                                                    label: "\u0E2A\u0E48\u0E07\u0E2A\u0E33\u0E40\u0E19\u0E32\u0E04\u0E37\u0E19 (Return copies)",
                                                    density: "compact",
                                                    "hide-details": ""
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, {
                                            cols: "12",
                                            sm: "6",
                                            md: "3"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VCheckbox, {
                                                  modelValue: __props.memo.actions.forApproval,
                                                  "onUpdate:modelValue": ($event) => __props.memo.actions.forApproval = $event,
                                                  label: "\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E2D\u0E19\u0E38\u0E21\u0E31\u0E15\u0E34 (For approval)",
                                                  density: "compact",
                                                  "hide-details": ""
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VCheckbox, {
                                                    modelValue: __props.memo.actions.forApproval,
                                                    "onUpdate:modelValue": ($event) => __props.memo.actions.forApproval = $event,
                                                    label: "\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E2D\u0E19\u0E38\u0E21\u0E31\u0E15\u0E34 (For approval)",
                                                    density: "compact",
                                                    "hide-details": ""
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, {
                                            cols: "12",
                                            sm: "6",
                                            md: "3"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VCheckbox, {
                                                  modelValue: __props.memo.actions.toConsider,
                                                  "onUpdate:modelValue": ($event) => __props.memo.actions.toConsider = $event,
                                                  label: "\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E1E\u0E34\u0E08\u0E32\u0E23\u0E13\u0E32 (To consider)",
                                                  density: "compact",
                                                  "hide-details": ""
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VCheckbox, {
                                                    modelValue: __props.memo.actions.toConsider,
                                                    "onUpdate:modelValue": ($event) => __props.memo.actions.toConsider = $event,
                                                    label: "\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E1E\u0E34\u0E08\u0E32\u0E23\u0E13\u0E32 (To consider)",
                                                    density: "compact",
                                                    "hide-details": ""
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, {
                                            cols: "12",
                                            sm: "6",
                                            md: "3"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VCheckbox, {
                                                  modelValue: __props.memo.actions.toKnow,
                                                  "onUpdate:modelValue": ($event) => __props.memo.actions.toKnow = $event,
                                                  label: "\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E17\u0E23\u0E32\u0E1A (To know)",
                                                  density: "compact",
                                                  "hide-details": ""
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VCheckbox, {
                                                    modelValue: __props.memo.actions.toKnow,
                                                    "onUpdate:modelValue": ($event) => __props.memo.actions.toKnow = $event,
                                                    label: "\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E17\u0E23\u0E32\u0E1A (To know)",
                                                    density: "compact",
                                                    "hide-details": ""
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, {
                                            cols: "12",
                                            sm: "6",
                                            md: "3"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VCheckbox, {
                                                  modelValue: __props.memo.actions.other,
                                                  "onUpdate:modelValue": ($event) => __props.memo.actions.other = $event,
                                                  label: "\u0E2D\u0E37\u0E48\u0E19\u0E46 (Other)",
                                                  density: "compact",
                                                  "hide-details": ""
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VCheckbox, {
                                                    modelValue: __props.memo.actions.other,
                                                    "onUpdate:modelValue": ($event) => __props.memo.actions.other = $event,
                                                    label: "\u0E2D\u0E37\u0E48\u0E19\u0E46 (Other)",
                                                    density: "compact",
                                                    "hide-details": ""
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VCol, {
                                              cols: "12",
                                              sm: "6",
                                              md: "3"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VCheckbox, {
                                                  modelValue: __props.memo.actions.follow,
                                                  "onUpdate:modelValue": ($event) => __props.memo.actions.follow = $event,
                                                  label: "\u0E1B\u0E0F\u0E34\u0E1A\u0E31\u0E15\u0E34\u0E15\u0E32\u0E21 (Please keep)",
                                                  density: "compact",
                                                  "hide-details": ""
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              cols: "12",
                                              sm: "6",
                                              md: "3"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VCheckbox, {
                                                  modelValue: __props.memo.actions.considerReturn,
                                                  "onUpdate:modelValue": ($event) => __props.memo.actions.considerReturn = $event,
                                                  label: "\u0E1E\u0E34\u0E08\u0E32\u0E23\u0E13\u0E32\u0E41\u0E25\u0E49\u0E27\u0E2A\u0E48\u0E07\u0E04\u0E37\u0E19 (Please return)",
                                                  density: "compact",
                                                  "hide-details": ""
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              cols: "12",
                                              sm: "6",
                                              md: "3"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VCheckbox, {
                                                  modelValue: __props.memo.actions.copyStores,
                                                  "onUpdate:modelValue": ($event) => __props.memo.actions.copyStores = $event,
                                                  label: "\u0E16\u0E48\u0E32\u0E22\u0E2A\u0E33\u0E40\u0E19\u0E32\u0E40\u0E01\u0E47\u0E1A\u0E44\u0E27\u0E49 (Copy stores)",
                                                  density: "compact",
                                                  "hide-details": ""
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              cols: "12",
                                              sm: "6",
                                              md: "3"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VCheckbox, {
                                                  modelValue: __props.memo.actions.returnCopies,
                                                  "onUpdate:modelValue": ($event) => __props.memo.actions.returnCopies = $event,
                                                  label: "\u0E2A\u0E48\u0E07\u0E2A\u0E33\u0E40\u0E19\u0E32\u0E04\u0E37\u0E19 (Return copies)",
                                                  density: "compact",
                                                  "hide-details": ""
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              cols: "12",
                                              sm: "6",
                                              md: "3"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VCheckbox, {
                                                  modelValue: __props.memo.actions.forApproval,
                                                  "onUpdate:modelValue": ($event) => __props.memo.actions.forApproval = $event,
                                                  label: "\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E2D\u0E19\u0E38\u0E21\u0E31\u0E15\u0E34 (For approval)",
                                                  density: "compact",
                                                  "hide-details": ""
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              cols: "12",
                                              sm: "6",
                                              md: "3"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VCheckbox, {
                                                  modelValue: __props.memo.actions.toConsider,
                                                  "onUpdate:modelValue": ($event) => __props.memo.actions.toConsider = $event,
                                                  label: "\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E1E\u0E34\u0E08\u0E32\u0E23\u0E13\u0E32 (To consider)",
                                                  density: "compact",
                                                  "hide-details": ""
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              cols: "12",
                                              sm: "6",
                                              md: "3"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VCheckbox, {
                                                  modelValue: __props.memo.actions.toKnow,
                                                  "onUpdate:modelValue": ($event) => __props.memo.actions.toKnow = $event,
                                                  label: "\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E17\u0E23\u0E32\u0E1A (To know)",
                                                  density: "compact",
                                                  "hide-details": ""
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              cols: "12",
                                              sm: "6",
                                              md: "3"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VCheckbox, {
                                                  modelValue: __props.memo.actions.other,
                                                  "onUpdate:modelValue": ($event) => __props.memo.actions.other = $event,
                                                  label: "\u0E2D\u0E37\u0E48\u0E19\u0E46 (Other)",
                                                  density: "compact",
                                                  "hide-details": ""
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
                                      createVNode("div", { class: "text-subtitle-2 mb-2" }, " \u0E01\u0E32\u0E23\u0E14\u0E33\u0E40\u0E19\u0E34\u0E19\u0E01\u0E32\u0E23 (Actions): "),
                                      createVNode(VRow, { dense: "" }, {
                                        default: withCtx(() => [
                                          createVNode(VCol, {
                                            cols: "12",
                                            sm: "6",
                                            md: "3"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VCheckbox, {
                                                modelValue: __props.memo.actions.follow,
                                                "onUpdate:modelValue": ($event) => __props.memo.actions.follow = $event,
                                                label: "\u0E1B\u0E0F\u0E34\u0E1A\u0E31\u0E15\u0E34\u0E15\u0E32\u0E21 (Please keep)",
                                                density: "compact",
                                                "hide-details": ""
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, {
                                            cols: "12",
                                            sm: "6",
                                            md: "3"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VCheckbox, {
                                                modelValue: __props.memo.actions.considerReturn,
                                                "onUpdate:modelValue": ($event) => __props.memo.actions.considerReturn = $event,
                                                label: "\u0E1E\u0E34\u0E08\u0E32\u0E23\u0E13\u0E32\u0E41\u0E25\u0E49\u0E27\u0E2A\u0E48\u0E07\u0E04\u0E37\u0E19 (Please return)",
                                                density: "compact",
                                                "hide-details": ""
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, {
                                            cols: "12",
                                            sm: "6",
                                            md: "3"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VCheckbox, {
                                                modelValue: __props.memo.actions.copyStores,
                                                "onUpdate:modelValue": ($event) => __props.memo.actions.copyStores = $event,
                                                label: "\u0E16\u0E48\u0E32\u0E22\u0E2A\u0E33\u0E40\u0E19\u0E32\u0E40\u0E01\u0E47\u0E1A\u0E44\u0E27\u0E49 (Copy stores)",
                                                density: "compact",
                                                "hide-details": ""
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, {
                                            cols: "12",
                                            sm: "6",
                                            md: "3"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VCheckbox, {
                                                modelValue: __props.memo.actions.returnCopies,
                                                "onUpdate:modelValue": ($event) => __props.memo.actions.returnCopies = $event,
                                                label: "\u0E2A\u0E48\u0E07\u0E2A\u0E33\u0E40\u0E19\u0E32\u0E04\u0E37\u0E19 (Return copies)",
                                                density: "compact",
                                                "hide-details": ""
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, {
                                            cols: "12",
                                            sm: "6",
                                            md: "3"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VCheckbox, {
                                                modelValue: __props.memo.actions.forApproval,
                                                "onUpdate:modelValue": ($event) => __props.memo.actions.forApproval = $event,
                                                label: "\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E2D\u0E19\u0E38\u0E21\u0E31\u0E15\u0E34 (For approval)",
                                                density: "compact",
                                                "hide-details": ""
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, {
                                            cols: "12",
                                            sm: "6",
                                            md: "3"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VCheckbox, {
                                                modelValue: __props.memo.actions.toConsider,
                                                "onUpdate:modelValue": ($event) => __props.memo.actions.toConsider = $event,
                                                label: "\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E1E\u0E34\u0E08\u0E32\u0E23\u0E13\u0E32 (To consider)",
                                                density: "compact",
                                                "hide-details": ""
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, {
                                            cols: "12",
                                            sm: "6",
                                            md: "3"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VCheckbox, {
                                                modelValue: __props.memo.actions.toKnow,
                                                "onUpdate:modelValue": ($event) => __props.memo.actions.toKnow = $event,
                                                label: "\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E17\u0E23\u0E32\u0E1A (To know)",
                                                density: "compact",
                                                "hide-details": ""
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, {
                                            cols: "12",
                                            sm: "6",
                                            md: "3"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VCheckbox, {
                                                modelValue: __props.memo.actions.other,
                                                "onUpdate:modelValue": ($event) => __props.memo.actions.other = $event,
                                                label: "\u0E2D\u0E37\u0E48\u0E19\u0E46 (Other)",
                                                density: "compact",
                                                "hide-details": ""
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
                                createVNode(VCol, { cols: "12" }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "text-subtitle-2 mb-2" }, " \u0E01\u0E32\u0E23\u0E14\u0E33\u0E40\u0E19\u0E34\u0E19\u0E01\u0E32\u0E23 (Actions): "),
                                    createVNode(VRow, { dense: "" }, {
                                      default: withCtx(() => [
                                        createVNode(VCol, {
                                          cols: "12",
                                          sm: "6",
                                          md: "3"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VCheckbox, {
                                              modelValue: __props.memo.actions.follow,
                                              "onUpdate:modelValue": ($event) => __props.memo.actions.follow = $event,
                                              label: "\u0E1B\u0E0F\u0E34\u0E1A\u0E31\u0E15\u0E34\u0E15\u0E32\u0E21 (Please keep)",
                                              density: "compact",
                                              "hide-details": ""
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, {
                                          cols: "12",
                                          sm: "6",
                                          md: "3"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VCheckbox, {
                                              modelValue: __props.memo.actions.considerReturn,
                                              "onUpdate:modelValue": ($event) => __props.memo.actions.considerReturn = $event,
                                              label: "\u0E1E\u0E34\u0E08\u0E32\u0E23\u0E13\u0E32\u0E41\u0E25\u0E49\u0E27\u0E2A\u0E48\u0E07\u0E04\u0E37\u0E19 (Please return)",
                                              density: "compact",
                                              "hide-details": ""
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, {
                                          cols: "12",
                                          sm: "6",
                                          md: "3"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VCheckbox, {
                                              modelValue: __props.memo.actions.copyStores,
                                              "onUpdate:modelValue": ($event) => __props.memo.actions.copyStores = $event,
                                              label: "\u0E16\u0E48\u0E32\u0E22\u0E2A\u0E33\u0E40\u0E19\u0E32\u0E40\u0E01\u0E47\u0E1A\u0E44\u0E27\u0E49 (Copy stores)",
                                              density: "compact",
                                              "hide-details": ""
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, {
                                          cols: "12",
                                          sm: "6",
                                          md: "3"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VCheckbox, {
                                              modelValue: __props.memo.actions.returnCopies,
                                              "onUpdate:modelValue": ($event) => __props.memo.actions.returnCopies = $event,
                                              label: "\u0E2A\u0E48\u0E07\u0E2A\u0E33\u0E40\u0E19\u0E32\u0E04\u0E37\u0E19 (Return copies)",
                                              density: "compact",
                                              "hide-details": ""
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, {
                                          cols: "12",
                                          sm: "6",
                                          md: "3"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VCheckbox, {
                                              modelValue: __props.memo.actions.forApproval,
                                              "onUpdate:modelValue": ($event) => __props.memo.actions.forApproval = $event,
                                              label: "\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E2D\u0E19\u0E38\u0E21\u0E31\u0E15\u0E34 (For approval)",
                                              density: "compact",
                                              "hide-details": ""
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, {
                                          cols: "12",
                                          sm: "6",
                                          md: "3"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VCheckbox, {
                                              modelValue: __props.memo.actions.toConsider,
                                              "onUpdate:modelValue": ($event) => __props.memo.actions.toConsider = $event,
                                              label: "\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E1E\u0E34\u0E08\u0E32\u0E23\u0E13\u0E32 (To consider)",
                                              density: "compact",
                                              "hide-details": ""
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, {
                                          cols: "12",
                                          sm: "6",
                                          md: "3"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VCheckbox, {
                                              modelValue: __props.memo.actions.toKnow,
                                              "onUpdate:modelValue": ($event) => __props.memo.actions.toKnow = $event,
                                              label: "\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E17\u0E23\u0E32\u0E1A (To know)",
                                              density: "compact",
                                              "hide-details": ""
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, {
                                          cols: "12",
                                          sm: "6",
                                          md: "3"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VCheckbox, {
                                              modelValue: __props.memo.actions.other,
                                              "onUpdate:modelValue": ($event) => __props.memo.actions.other = $event,
                                              label: "\u0E2D\u0E37\u0E48\u0E19\u0E46 (Other)",
                                              density: "compact",
                                              "hide-details": ""
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                        }, _parent4, _scopeId3));
                        if (__props.memo.actions.other) {
                          _push4(ssrRenderComponent(VRow, { class: "mt-2" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(VCol, { cols: "12" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(VTextField, {
                                        modelValue: __props.memo.otherAction,
                                        "onUpdate:modelValue": ($event) => __props.memo.otherAction = $event,
                                        label: "\u0E23\u0E30\u0E1A\u0E38\u0E01\u0E32\u0E23\u0E14\u0E33\u0E40\u0E19\u0E34\u0E19\u0E01\u0E32\u0E23\u0E2D\u0E37\u0E48\u0E19\u0E46",
                                        density: "comfortable"
                                      }, null, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(VTextField, {
                                          modelValue: __props.memo.otherAction,
                                          "onUpdate:modelValue": ($event) => __props.memo.otherAction = $event,
                                          label: "\u0E23\u0E30\u0E1A\u0E38\u0E01\u0E32\u0E23\u0E14\u0E33\u0E40\u0E19\u0E34\u0E19\u0E01\u0E32\u0E23\u0E2D\u0E37\u0E48\u0E19\u0E46",
                                          density: "comfortable"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(VCol, { cols: "12" }, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        modelValue: __props.memo.otherAction,
                                        "onUpdate:modelValue": ($event) => __props.memo.otherAction = $event,
                                        label: "\u0E23\u0E30\u0E1A\u0E38\u0E01\u0E32\u0E23\u0E14\u0E33\u0E40\u0E19\u0E34\u0E19\u0E01\u0E32\u0E23\u0E2D\u0E37\u0E48\u0E19\u0E46",
                                        density: "comfortable"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          _push4(`<!---->`);
                        }
                        _push4(ssrRenderComponent(VRow, { class: "mt-4" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCol, { cols: "12" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VTextField, {
                                      modelValue: __props.memo.subject,
                                      "onUpdate:modelValue": ($event) => __props.memo.subject = $event,
                                      label: "\u0E40\u0E23\u0E37\u0E48\u0E2D\u0E07 (Subject)",
                                      density: "comfortable",
                                      rules: [requiredRule]
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VTextField, {
                                        modelValue: __props.memo.subject,
                                        "onUpdate:modelValue": ($event) => __props.memo.subject = $event,
                                        label: "\u0E40\u0E23\u0E37\u0E48\u0E2D\u0E07 (Subject)",
                                        density: "comfortable",
                                        rules: [requiredRule]
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VCol, { cols: "12" }, {
                                  default: withCtx(() => [
                                    createVNode(VTextField, {
                                      modelValue: __props.memo.subject,
                                      "onUpdate:modelValue": ($event) => __props.memo.subject = $event,
                                      label: "\u0E40\u0E23\u0E37\u0E48\u0E2D\u0E07 (Subject)",
                                      density: "comfortable",
                                      rules: [requiredRule]
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VRow, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCol, { cols: "12" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VTextField, {
                                      modelValue: __props.memo.details,
                                      "onUpdate:modelValue": ($event) => __props.memo.details = $event,
                                      label: "\u0E23\u0E32\u0E22\u0E25\u0E30\u0E40\u0E2D\u0E35\u0E22\u0E14 (Details)",
                                      density: "comfortable"
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VTextField, {
                                        modelValue: __props.memo.details,
                                        "onUpdate:modelValue": ($event) => __props.memo.details = $event,
                                        label: "\u0E23\u0E32\u0E22\u0E25\u0E30\u0E40\u0E2D\u0E35\u0E22\u0E14 (Details)",
                                        density: "comfortable"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VCol, { cols: "12" }, {
                                  default: withCtx(() => [
                                    createVNode(VTextField, {
                                      modelValue: __props.memo.details,
                                      "onUpdate:modelValue": ($event) => __props.memo.details = $event,
                                      label: "\u0E23\u0E32\u0E22\u0E25\u0E30\u0E40\u0E2D\u0E35\u0E22\u0E14 (Details)",
                                      density: "comfortable"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VRow, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCol, { cols: "12" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VTextarea, {
                                      modelValue: __props.memo.message,
                                      "onUpdate:modelValue": ($event) => __props.memo.message = $event,
                                      label: "\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21/\u0E40\u0E19\u0E37\u0E49\u0E2D\u0E2B\u0E32 (Message/Content)",
                                      rows: "8",
                                      rules: [requiredRule]
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VTextarea, {
                                        modelValue: __props.memo.message,
                                        "onUpdate:modelValue": ($event) => __props.memo.message = $event,
                                        label: "\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21/\u0E40\u0E19\u0E37\u0E49\u0E2D\u0E2B\u0E32 (Message/Content)",
                                        rows: "8",
                                        rules: [requiredRule]
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VCol, { cols: "12" }, {
                                  default: withCtx(() => [
                                    createVNode(VTextarea, {
                                      modelValue: __props.memo.message,
                                      "onUpdate:modelValue": ($event) => __props.memo.message = $event,
                                      label: "\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21/\u0E40\u0E19\u0E37\u0E49\u0E2D\u0E2B\u0E32 (Message/Content)",
                                      rows: "8",
                                      rules: [requiredRule]
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VRow, { class: "mt-4" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCol, {
                                cols: "12",
                                class: "d-flex gap-2"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VBtn, {
                                      color: "primary",
                                      size: "large",
                                      onClick: handleSave
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VIcon, {
                                            start: "",
                                            icon: "bx-save"
                                          }, null, _parent7, _scopeId6));
                                          _push7(` \u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01 (Save) `);
                                        } else {
                                          return [
                                            createVNode(VIcon, {
                                              start: "",
                                              icon: "bx-save"
                                            }),
                                            createTextVNode(" \u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01 (Save) ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VBtn, {
                                      color: "success",
                                      size: "large",
                                      disabled: !__props.isSaved,
                                      onClick: handleExportPdf
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VIcon, {
                                            start: "",
                                            icon: "bxs-file-pdf"
                                          }, null, _parent7, _scopeId6));
                                          _push7(` Export PDF `);
                                        } else {
                                          return [
                                            createVNode(VIcon, {
                                              start: "",
                                              icon: "bxs-file-pdf"
                                            }),
                                            createTextVNode(" Export PDF ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VBtn, {
                                      color: "secondary",
                                      size: "large",
                                      variant: "outlined",
                                      onClick: handleReset
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VIcon, {
                                            start: "",
                                            icon: "bx-reset"
                                          }, null, _parent7, _scopeId6));
                                          _push7(` \u0E23\u0E35\u0E40\u0E0B\u0E47\u0E15 (Reset) `);
                                        } else {
                                          return [
                                            createVNode(VIcon, {
                                              start: "",
                                              icon: "bx-reset"
                                            }),
                                            createTextVNode(" \u0E23\u0E35\u0E40\u0E0B\u0E47\u0E15 (Reset) ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VBtn, {
                                        color: "primary",
                                        size: "large",
                                        onClick: handleSave
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VIcon, {
                                            start: "",
                                            icon: "bx-save"
                                          }),
                                          createTextVNode(" \u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01 (Save) ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VBtn, {
                                        color: "success",
                                        size: "large",
                                        disabled: !__props.isSaved,
                                        onClick: handleExportPdf
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VIcon, {
                                            start: "",
                                            icon: "bxs-file-pdf"
                                          }),
                                          createTextVNode(" Export PDF ")
                                        ]),
                                        _: 1
                                      }, 8, ["disabled"]),
                                      createVNode(VBtn, {
                                        color: "secondary",
                                        size: "large",
                                        variant: "outlined",
                                        onClick: handleReset
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VIcon, {
                                            start: "",
                                            icon: "bx-reset"
                                          }),
                                          createTextVNode(" \u0E23\u0E35\u0E40\u0E0B\u0E47\u0E15 (Reset) ")
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
                                createVNode(VCol, {
                                  cols: "12",
                                  class: "d-flex gap-2"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VBtn, {
                                      color: "primary",
                                      size: "large",
                                      onClick: handleSave
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VIcon, {
                                          start: "",
                                          icon: "bx-save"
                                        }),
                                        createTextVNode(" \u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01 (Save) ")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VBtn, {
                                      color: "success",
                                      size: "large",
                                      disabled: !__props.isSaved,
                                      onClick: handleExportPdf
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VIcon, {
                                          start: "",
                                          icon: "bxs-file-pdf"
                                        }),
                                        createTextVNode(" Export PDF ")
                                      ]),
                                      _: 1
                                    }, 8, ["disabled"]),
                                    createVNode(VBtn, {
                                      color: "secondary",
                                      size: "large",
                                      variant: "outlined",
                                      onClick: handleReset
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VIcon, {
                                          start: "",
                                          icon: "bx-reset"
                                        }),
                                        createTextVNode(" \u0E23\u0E35\u0E40\u0E0B\u0E47\u0E15 (Reset) ")
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
                          createVNode(VRow, null, {
                            default: withCtx(() => [
                              createVNode(VCol, {
                                cols: "12",
                                md: "6"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VTextField, {
                                    modelValue: __props.memo.from,
                                    "onUpdate:modelValue": ($event) => __props.memo.from = $event,
                                    label: "\u0E08\u0E32\u0E01 (From)",
                                    density: "comfortable",
                                    rules: [requiredRule]
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, {
                                cols: "12",
                                md: "6"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VTextField, {
                                    modelValue: __props.memo.to,
                                    "onUpdate:modelValue": ($event) => __props.memo.to = $event,
                                    label: "\u0E16\u0E36\u0E07 (To)",
                                    density: "comfortable",
                                    rules: [requiredRule]
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
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
                                md: "6"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VTextField, {
                                    modelValue: __props.memo.cc,
                                    "onUpdate:modelValue": ($event) => __props.memo.cc = $event,
                                    label: "\u0E2A\u0E33\u0E40\u0E19\u0E32 (CC)",
                                    density: "comfortable"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, {
                                cols: "12",
                                md: "3"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VTextField, {
                                    modelValue: __props.memo.date,
                                    "onUpdate:modelValue": ($event) => __props.memo.date = $event,
                                    label: "\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48 (Date)",
                                    type: "date",
                                    density: "comfortable",
                                    rules: [requiredRule]
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, {
                                cols: "12",
                                md: "3"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VTextField, {
                                    modelValue: __props.memo.documentNumber,
                                    "onUpdate:modelValue": ($event) => __props.memo.documentNumber = $event,
                                    label: "\u0E40\u0E25\u0E02\u0E17\u0E35\u0E48\u0E40\u0E2D\u0E01\u0E2A\u0E32\u0E23",
                                    density: "comfortable"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                                  createVNode("div", { class: "text-subtitle-2 mb-2" }, " \u0E40\u0E1E\u0E37\u0E48\u0E2D (Purpose): "),
                                  createVNode(VRow, { dense: "" }, {
                                    default: withCtx(() => [
                                      createVNode(VCol, {
                                        cols: "12",
                                        sm: "6",
                                        md: "3"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VCheckbox, {
                                            modelValue: __props.memo.purposes.consider,
                                            "onUpdate:modelValue": ($event) => __props.memo.purposes.consider = $event,
                                            label: "\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E1E\u0E34\u0E08\u0E32\u0E23\u0E13\u0E32 (To consider)",
                                            density: "compact",
                                            "hide-details": ""
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        sm: "6",
                                        md: "3"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VCheckbox, {
                                            modelValue: __props.memo.purposes.know,
                                            "onUpdate:modelValue": ($event) => __props.memo.purposes.know = $event,
                                            label: "\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E17\u0E23\u0E32\u0E1A (To know)",
                                            density: "compact",
                                            "hide-details": ""
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        sm: "6",
                                        md: "3"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VCheckbox, {
                                            modelValue: __props.memo.purposes.issueCommand,
                                            "onUpdate:modelValue": ($event) => __props.memo.purposes.issueCommand = $event,
                                            label: "\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E2D\u0E2D\u0E01\u0E04\u0E33\u0E2A\u0E31\u0E48\u0E07 (Issue command)",
                                            density: "compact",
                                            "hide-details": ""
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        sm: "6",
                                        md: "3"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VCheckbox, {
                                            modelValue: __props.memo.purposes.continue,
                                            "onUpdate:modelValue": ($event) => __props.memo.purposes.continue = $event,
                                            label: "\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E14\u0E33\u0E40\u0E19\u0E34\u0E19\u0E01\u0E32\u0E23 (To continue)",
                                            density: "compact",
                                            "hide-details": ""
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                          }),
                          createVNode(VRow, { class: "mt-2" }, {
                            default: withCtx(() => [
                              createVNode(VCol, { cols: "12" }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "text-subtitle-2 mb-2" }, " \u0E01\u0E32\u0E23\u0E14\u0E33\u0E40\u0E19\u0E34\u0E19\u0E01\u0E32\u0E23 (Actions): "),
                                  createVNode(VRow, { dense: "" }, {
                                    default: withCtx(() => [
                                      createVNode(VCol, {
                                        cols: "12",
                                        sm: "6",
                                        md: "3"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VCheckbox, {
                                            modelValue: __props.memo.actions.follow,
                                            "onUpdate:modelValue": ($event) => __props.memo.actions.follow = $event,
                                            label: "\u0E1B\u0E0F\u0E34\u0E1A\u0E31\u0E15\u0E34\u0E15\u0E32\u0E21 (Please keep)",
                                            density: "compact",
                                            "hide-details": ""
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        sm: "6",
                                        md: "3"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VCheckbox, {
                                            modelValue: __props.memo.actions.considerReturn,
                                            "onUpdate:modelValue": ($event) => __props.memo.actions.considerReturn = $event,
                                            label: "\u0E1E\u0E34\u0E08\u0E32\u0E23\u0E13\u0E32\u0E41\u0E25\u0E49\u0E27\u0E2A\u0E48\u0E07\u0E04\u0E37\u0E19 (Please return)",
                                            density: "compact",
                                            "hide-details": ""
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        sm: "6",
                                        md: "3"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VCheckbox, {
                                            modelValue: __props.memo.actions.copyStores,
                                            "onUpdate:modelValue": ($event) => __props.memo.actions.copyStores = $event,
                                            label: "\u0E16\u0E48\u0E32\u0E22\u0E2A\u0E33\u0E40\u0E19\u0E32\u0E40\u0E01\u0E47\u0E1A\u0E44\u0E27\u0E49 (Copy stores)",
                                            density: "compact",
                                            "hide-details": ""
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        sm: "6",
                                        md: "3"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VCheckbox, {
                                            modelValue: __props.memo.actions.returnCopies,
                                            "onUpdate:modelValue": ($event) => __props.memo.actions.returnCopies = $event,
                                            label: "\u0E2A\u0E48\u0E07\u0E2A\u0E33\u0E40\u0E19\u0E32\u0E04\u0E37\u0E19 (Return copies)",
                                            density: "compact",
                                            "hide-details": ""
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        sm: "6",
                                        md: "3"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VCheckbox, {
                                            modelValue: __props.memo.actions.forApproval,
                                            "onUpdate:modelValue": ($event) => __props.memo.actions.forApproval = $event,
                                            label: "\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E2D\u0E19\u0E38\u0E21\u0E31\u0E15\u0E34 (For approval)",
                                            density: "compact",
                                            "hide-details": ""
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        sm: "6",
                                        md: "3"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VCheckbox, {
                                            modelValue: __props.memo.actions.toConsider,
                                            "onUpdate:modelValue": ($event) => __props.memo.actions.toConsider = $event,
                                            label: "\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E1E\u0E34\u0E08\u0E32\u0E23\u0E13\u0E32 (To consider)",
                                            density: "compact",
                                            "hide-details": ""
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        sm: "6",
                                        md: "3"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VCheckbox, {
                                            modelValue: __props.memo.actions.toKnow,
                                            "onUpdate:modelValue": ($event) => __props.memo.actions.toKnow = $event,
                                            label: "\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E17\u0E23\u0E32\u0E1A (To know)",
                                            density: "compact",
                                            "hide-details": ""
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        sm: "6",
                                        md: "3"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VCheckbox, {
                                            modelValue: __props.memo.actions.other,
                                            "onUpdate:modelValue": ($event) => __props.memo.actions.other = $event,
                                            label: "\u0E2D\u0E37\u0E48\u0E19\u0E46 (Other)",
                                            density: "compact",
                                            "hide-details": ""
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                          }),
                          __props.memo.actions.other ? (openBlock(), createBlock(VRow, {
                            key: 0,
                            class: "mt-2"
                          }, {
                            default: withCtx(() => [
                              createVNode(VCol, { cols: "12" }, {
                                default: withCtx(() => [
                                  createVNode(VTextField, {
                                    modelValue: __props.memo.otherAction,
                                    "onUpdate:modelValue": ($event) => __props.memo.otherAction = $event,
                                    label: "\u0E23\u0E30\u0E1A\u0E38\u0E01\u0E32\u0E23\u0E14\u0E33\u0E40\u0E19\u0E34\u0E19\u0E01\u0E32\u0E23\u0E2D\u0E37\u0E48\u0E19\u0E46",
                                    density: "comfortable"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })) : createCommentVNode("", true),
                          createVNode(VRow, { class: "mt-4" }, {
                            default: withCtx(() => [
                              createVNode(VCol, { cols: "12" }, {
                                default: withCtx(() => [
                                  createVNode(VTextField, {
                                    modelValue: __props.memo.subject,
                                    "onUpdate:modelValue": ($event) => __props.memo.subject = $event,
                                    label: "\u0E40\u0E23\u0E37\u0E48\u0E2D\u0E07 (Subject)",
                                    density: "comfortable",
                                    rules: [requiredRule]
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
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
                                  createVNode(VTextField, {
                                    modelValue: __props.memo.details,
                                    "onUpdate:modelValue": ($event) => __props.memo.details = $event,
                                    label: "\u0E23\u0E32\u0E22\u0E25\u0E30\u0E40\u0E2D\u0E35\u0E22\u0E14 (Details)",
                                    density: "comfortable"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                                  createVNode(VTextarea, {
                                    modelValue: __props.memo.message,
                                    "onUpdate:modelValue": ($event) => __props.memo.message = $event,
                                    label: "\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21/\u0E40\u0E19\u0E37\u0E49\u0E2D\u0E2B\u0E32 (Message/Content)",
                                    rows: "8",
                                    rules: [requiredRule]
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(VRow, { class: "mt-4" }, {
                            default: withCtx(() => [
                              createVNode(VCol, {
                                cols: "12",
                                class: "d-flex gap-2"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VBtn, {
                                    color: "primary",
                                    size: "large",
                                    onClick: handleSave
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VIcon, {
                                        start: "",
                                        icon: "bx-save"
                                      }),
                                      createTextVNode(" \u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01 (Save) ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VBtn, {
                                    color: "success",
                                    size: "large",
                                    disabled: !__props.isSaved,
                                    onClick: handleExportPdf
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VIcon, {
                                        start: "",
                                        icon: "bxs-file-pdf"
                                      }),
                                      createTextVNode(" Export PDF ")
                                    ]),
                                    _: 1
                                  }, 8, ["disabled"]),
                                  createVNode(VBtn, {
                                    color: "secondary",
                                    size: "large",
                                    variant: "outlined",
                                    onClick: handleReset
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VIcon, {
                                        start: "",
                                        icon: "bx-reset"
                                      }),
                                      createTextVNode(" \u0E23\u0E35\u0E40\u0E0B\u0E47\u0E15 (Reset) ")
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
                } else {
                  return [
                    createVNode(VForm, {
                      ref_key: "formRef",
                      ref: formRef
                    }, {
                      default: withCtx(() => [
                        createVNode(VRow, null, {
                          default: withCtx(() => [
                            createVNode(VCol, {
                              cols: "12",
                              md: "6"
                            }, {
                              default: withCtx(() => [
                                createVNode(VTextField, {
                                  modelValue: __props.memo.from,
                                  "onUpdate:modelValue": ($event) => __props.memo.from = $event,
                                  label: "\u0E08\u0E32\u0E01 (From)",
                                  density: "comfortable",
                                  rules: [requiredRule]
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, {
                              cols: "12",
                              md: "6"
                            }, {
                              default: withCtx(() => [
                                createVNode(VTextField, {
                                  modelValue: __props.memo.to,
                                  "onUpdate:modelValue": ($event) => __props.memo.to = $event,
                                  label: "\u0E16\u0E36\u0E07 (To)",
                                  density: "comfortable",
                                  rules: [requiredRule]
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
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
                              md: "6"
                            }, {
                              default: withCtx(() => [
                                createVNode(VTextField, {
                                  modelValue: __props.memo.cc,
                                  "onUpdate:modelValue": ($event) => __props.memo.cc = $event,
                                  label: "\u0E2A\u0E33\u0E40\u0E19\u0E32 (CC)",
                                  density: "comfortable"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, {
                              cols: "12",
                              md: "3"
                            }, {
                              default: withCtx(() => [
                                createVNode(VTextField, {
                                  modelValue: __props.memo.date,
                                  "onUpdate:modelValue": ($event) => __props.memo.date = $event,
                                  label: "\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48 (Date)",
                                  type: "date",
                                  density: "comfortable",
                                  rules: [requiredRule]
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, {
                              cols: "12",
                              md: "3"
                            }, {
                              default: withCtx(() => [
                                createVNode(VTextField, {
                                  modelValue: __props.memo.documentNumber,
                                  "onUpdate:modelValue": ($event) => __props.memo.documentNumber = $event,
                                  label: "\u0E40\u0E25\u0E02\u0E17\u0E35\u0E48\u0E40\u0E2D\u0E01\u0E2A\u0E32\u0E23",
                                  density: "comfortable"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                                createVNode("div", { class: "text-subtitle-2 mb-2" }, " \u0E40\u0E1E\u0E37\u0E48\u0E2D (Purpose): "),
                                createVNode(VRow, { dense: "" }, {
                                  default: withCtx(() => [
                                    createVNode(VCol, {
                                      cols: "12",
                                      sm: "6",
                                      md: "3"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VCheckbox, {
                                          modelValue: __props.memo.purposes.consider,
                                          "onUpdate:modelValue": ($event) => __props.memo.purposes.consider = $event,
                                          label: "\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E1E\u0E34\u0E08\u0E32\u0E23\u0E13\u0E32 (To consider)",
                                          density: "compact",
                                          "hide-details": ""
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      sm: "6",
                                      md: "3"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VCheckbox, {
                                          modelValue: __props.memo.purposes.know,
                                          "onUpdate:modelValue": ($event) => __props.memo.purposes.know = $event,
                                          label: "\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E17\u0E23\u0E32\u0E1A (To know)",
                                          density: "compact",
                                          "hide-details": ""
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      sm: "6",
                                      md: "3"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VCheckbox, {
                                          modelValue: __props.memo.purposes.issueCommand,
                                          "onUpdate:modelValue": ($event) => __props.memo.purposes.issueCommand = $event,
                                          label: "\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E2D\u0E2D\u0E01\u0E04\u0E33\u0E2A\u0E31\u0E48\u0E07 (Issue command)",
                                          density: "compact",
                                          "hide-details": ""
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      sm: "6",
                                      md: "3"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VCheckbox, {
                                          modelValue: __props.memo.purposes.continue,
                                          "onUpdate:modelValue": ($event) => __props.memo.purposes.continue = $event,
                                          label: "\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E14\u0E33\u0E40\u0E19\u0E34\u0E19\u0E01\u0E32\u0E23 (To continue)",
                                          density: "compact",
                                          "hide-details": ""
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                        }),
                        createVNode(VRow, { class: "mt-2" }, {
                          default: withCtx(() => [
                            createVNode(VCol, { cols: "12" }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "text-subtitle-2 mb-2" }, " \u0E01\u0E32\u0E23\u0E14\u0E33\u0E40\u0E19\u0E34\u0E19\u0E01\u0E32\u0E23 (Actions): "),
                                createVNode(VRow, { dense: "" }, {
                                  default: withCtx(() => [
                                    createVNode(VCol, {
                                      cols: "12",
                                      sm: "6",
                                      md: "3"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VCheckbox, {
                                          modelValue: __props.memo.actions.follow,
                                          "onUpdate:modelValue": ($event) => __props.memo.actions.follow = $event,
                                          label: "\u0E1B\u0E0F\u0E34\u0E1A\u0E31\u0E15\u0E34\u0E15\u0E32\u0E21 (Please keep)",
                                          density: "compact",
                                          "hide-details": ""
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      sm: "6",
                                      md: "3"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VCheckbox, {
                                          modelValue: __props.memo.actions.considerReturn,
                                          "onUpdate:modelValue": ($event) => __props.memo.actions.considerReturn = $event,
                                          label: "\u0E1E\u0E34\u0E08\u0E32\u0E23\u0E13\u0E32\u0E41\u0E25\u0E49\u0E27\u0E2A\u0E48\u0E07\u0E04\u0E37\u0E19 (Please return)",
                                          density: "compact",
                                          "hide-details": ""
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      sm: "6",
                                      md: "3"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VCheckbox, {
                                          modelValue: __props.memo.actions.copyStores,
                                          "onUpdate:modelValue": ($event) => __props.memo.actions.copyStores = $event,
                                          label: "\u0E16\u0E48\u0E32\u0E22\u0E2A\u0E33\u0E40\u0E19\u0E32\u0E40\u0E01\u0E47\u0E1A\u0E44\u0E27\u0E49 (Copy stores)",
                                          density: "compact",
                                          "hide-details": ""
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      sm: "6",
                                      md: "3"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VCheckbox, {
                                          modelValue: __props.memo.actions.returnCopies,
                                          "onUpdate:modelValue": ($event) => __props.memo.actions.returnCopies = $event,
                                          label: "\u0E2A\u0E48\u0E07\u0E2A\u0E33\u0E40\u0E19\u0E32\u0E04\u0E37\u0E19 (Return copies)",
                                          density: "compact",
                                          "hide-details": ""
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      sm: "6",
                                      md: "3"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VCheckbox, {
                                          modelValue: __props.memo.actions.forApproval,
                                          "onUpdate:modelValue": ($event) => __props.memo.actions.forApproval = $event,
                                          label: "\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E2D\u0E19\u0E38\u0E21\u0E31\u0E15\u0E34 (For approval)",
                                          density: "compact",
                                          "hide-details": ""
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      sm: "6",
                                      md: "3"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VCheckbox, {
                                          modelValue: __props.memo.actions.toConsider,
                                          "onUpdate:modelValue": ($event) => __props.memo.actions.toConsider = $event,
                                          label: "\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E1E\u0E34\u0E08\u0E32\u0E23\u0E13\u0E32 (To consider)",
                                          density: "compact",
                                          "hide-details": ""
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      sm: "6",
                                      md: "3"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VCheckbox, {
                                          modelValue: __props.memo.actions.toKnow,
                                          "onUpdate:modelValue": ($event) => __props.memo.actions.toKnow = $event,
                                          label: "\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E17\u0E23\u0E32\u0E1A (To know)",
                                          density: "compact",
                                          "hide-details": ""
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      sm: "6",
                                      md: "3"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VCheckbox, {
                                          modelValue: __props.memo.actions.other,
                                          "onUpdate:modelValue": ($event) => __props.memo.actions.other = $event,
                                          label: "\u0E2D\u0E37\u0E48\u0E19\u0E46 (Other)",
                                          density: "compact",
                                          "hide-details": ""
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                        }),
                        __props.memo.actions.other ? (openBlock(), createBlock(VRow, {
                          key: 0,
                          class: "mt-2"
                        }, {
                          default: withCtx(() => [
                            createVNode(VCol, { cols: "12" }, {
                              default: withCtx(() => [
                                createVNode(VTextField, {
                                  modelValue: __props.memo.otherAction,
                                  "onUpdate:modelValue": ($event) => __props.memo.otherAction = $event,
                                  label: "\u0E23\u0E30\u0E1A\u0E38\u0E01\u0E32\u0E23\u0E14\u0E33\u0E40\u0E19\u0E34\u0E19\u0E01\u0E32\u0E23\u0E2D\u0E37\u0E48\u0E19\u0E46",
                                  density: "comfortable"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })) : createCommentVNode("", true),
                        createVNode(VRow, { class: "mt-4" }, {
                          default: withCtx(() => [
                            createVNode(VCol, { cols: "12" }, {
                              default: withCtx(() => [
                                createVNode(VTextField, {
                                  modelValue: __props.memo.subject,
                                  "onUpdate:modelValue": ($event) => __props.memo.subject = $event,
                                  label: "\u0E40\u0E23\u0E37\u0E48\u0E2D\u0E07 (Subject)",
                                  density: "comfortable",
                                  rules: [requiredRule]
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
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
                                createVNode(VTextField, {
                                  modelValue: __props.memo.details,
                                  "onUpdate:modelValue": ($event) => __props.memo.details = $event,
                                  label: "\u0E23\u0E32\u0E22\u0E25\u0E30\u0E40\u0E2D\u0E35\u0E22\u0E14 (Details)",
                                  density: "comfortable"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                                createVNode(VTextarea, {
                                  modelValue: __props.memo.message,
                                  "onUpdate:modelValue": ($event) => __props.memo.message = $event,
                                  label: "\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21/\u0E40\u0E19\u0E37\u0E49\u0E2D\u0E2B\u0E32 (Message/Content)",
                                  rows: "8",
                                  rules: [requiredRule]
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(VRow, { class: "mt-4" }, {
                          default: withCtx(() => [
                            createVNode(VCol, {
                              cols: "12",
                              class: "d-flex gap-2"
                            }, {
                              default: withCtx(() => [
                                createVNode(VBtn, {
                                  color: "primary",
                                  size: "large",
                                  onClick: handleSave
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VIcon, {
                                      start: "",
                                      icon: "bx-save"
                                    }),
                                    createTextVNode(" \u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01 (Save) ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VBtn, {
                                  color: "success",
                                  size: "large",
                                  disabled: !__props.isSaved,
                                  onClick: handleExportPdf
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VIcon, {
                                      start: "",
                                      icon: "bxs-file-pdf"
                                    }),
                                    createTextVNode(" Export PDF ")
                                  ]),
                                  _: 1
                                }, 8, ["disabled"]),
                                createVNode(VBtn, {
                                  color: "secondary",
                                  size: "large",
                                  variant: "outlined",
                                  onClick: handleReset
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VIcon, {
                                      start: "",
                                      icon: "bx-reset"
                                    }),
                                    createTextVNode(" \u0E23\u0E35\u0E40\u0E0B\u0E47\u0E15 (Reset) ")
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
                    }, 512)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCardText, null, {
                default: withCtx(() => [
                  createVNode(VForm, {
                    ref_key: "formRef",
                    ref: formRef
                  }, {
                    default: withCtx(() => [
                      createVNode(VRow, null, {
                        default: withCtx(() => [
                          createVNode(VCol, {
                            cols: "12",
                            md: "6"
                          }, {
                            default: withCtx(() => [
                              createVNode(VTextField, {
                                modelValue: __props.memo.from,
                                "onUpdate:modelValue": ($event) => __props.memo.from = $event,
                                label: "\u0E08\u0E32\u0E01 (From)",
                                density: "comfortable",
                                rules: [requiredRule]
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "12",
                            md: "6"
                          }, {
                            default: withCtx(() => [
                              createVNode(VTextField, {
                                modelValue: __props.memo.to,
                                "onUpdate:modelValue": ($event) => __props.memo.to = $event,
                                label: "\u0E16\u0E36\u0E07 (To)",
                                density: "comfortable",
                                rules: [requiredRule]
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
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
                            md: "6"
                          }, {
                            default: withCtx(() => [
                              createVNode(VTextField, {
                                modelValue: __props.memo.cc,
                                "onUpdate:modelValue": ($event) => __props.memo.cc = $event,
                                label: "\u0E2A\u0E33\u0E40\u0E19\u0E32 (CC)",
                                density: "comfortable"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "12",
                            md: "3"
                          }, {
                            default: withCtx(() => [
                              createVNode(VTextField, {
                                modelValue: __props.memo.date,
                                "onUpdate:modelValue": ($event) => __props.memo.date = $event,
                                label: "\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48 (Date)",
                                type: "date",
                                density: "comfortable",
                                rules: [requiredRule]
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "12",
                            md: "3"
                          }, {
                            default: withCtx(() => [
                              createVNode(VTextField, {
                                modelValue: __props.memo.documentNumber,
                                "onUpdate:modelValue": ($event) => __props.memo.documentNumber = $event,
                                label: "\u0E40\u0E25\u0E02\u0E17\u0E35\u0E48\u0E40\u0E2D\u0E01\u0E2A\u0E32\u0E23",
                                density: "comfortable"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                              createVNode("div", { class: "text-subtitle-2 mb-2" }, " \u0E40\u0E1E\u0E37\u0E48\u0E2D (Purpose): "),
                              createVNode(VRow, { dense: "" }, {
                                default: withCtx(() => [
                                  createVNode(VCol, {
                                    cols: "12",
                                    sm: "6",
                                    md: "3"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VCheckbox, {
                                        modelValue: __props.memo.purposes.consider,
                                        "onUpdate:modelValue": ($event) => __props.memo.purposes.consider = $event,
                                        label: "\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E1E\u0E34\u0E08\u0E32\u0E23\u0E13\u0E32 (To consider)",
                                        density: "compact",
                                        "hide-details": ""
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    sm: "6",
                                    md: "3"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VCheckbox, {
                                        modelValue: __props.memo.purposes.know,
                                        "onUpdate:modelValue": ($event) => __props.memo.purposes.know = $event,
                                        label: "\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E17\u0E23\u0E32\u0E1A (To know)",
                                        density: "compact",
                                        "hide-details": ""
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    sm: "6",
                                    md: "3"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VCheckbox, {
                                        modelValue: __props.memo.purposes.issueCommand,
                                        "onUpdate:modelValue": ($event) => __props.memo.purposes.issueCommand = $event,
                                        label: "\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E2D\u0E2D\u0E01\u0E04\u0E33\u0E2A\u0E31\u0E48\u0E07 (Issue command)",
                                        density: "compact",
                                        "hide-details": ""
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    sm: "6",
                                    md: "3"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VCheckbox, {
                                        modelValue: __props.memo.purposes.continue,
                                        "onUpdate:modelValue": ($event) => __props.memo.purposes.continue = $event,
                                        label: "\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E14\u0E33\u0E40\u0E19\u0E34\u0E19\u0E01\u0E32\u0E23 (To continue)",
                                        density: "compact",
                                        "hide-details": ""
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                      }),
                      createVNode(VRow, { class: "mt-2" }, {
                        default: withCtx(() => [
                          createVNode(VCol, { cols: "12" }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "text-subtitle-2 mb-2" }, " \u0E01\u0E32\u0E23\u0E14\u0E33\u0E40\u0E19\u0E34\u0E19\u0E01\u0E32\u0E23 (Actions): "),
                              createVNode(VRow, { dense: "" }, {
                                default: withCtx(() => [
                                  createVNode(VCol, {
                                    cols: "12",
                                    sm: "6",
                                    md: "3"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VCheckbox, {
                                        modelValue: __props.memo.actions.follow,
                                        "onUpdate:modelValue": ($event) => __props.memo.actions.follow = $event,
                                        label: "\u0E1B\u0E0F\u0E34\u0E1A\u0E31\u0E15\u0E34\u0E15\u0E32\u0E21 (Please keep)",
                                        density: "compact",
                                        "hide-details": ""
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    sm: "6",
                                    md: "3"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VCheckbox, {
                                        modelValue: __props.memo.actions.considerReturn,
                                        "onUpdate:modelValue": ($event) => __props.memo.actions.considerReturn = $event,
                                        label: "\u0E1E\u0E34\u0E08\u0E32\u0E23\u0E13\u0E32\u0E41\u0E25\u0E49\u0E27\u0E2A\u0E48\u0E07\u0E04\u0E37\u0E19 (Please return)",
                                        density: "compact",
                                        "hide-details": ""
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    sm: "6",
                                    md: "3"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VCheckbox, {
                                        modelValue: __props.memo.actions.copyStores,
                                        "onUpdate:modelValue": ($event) => __props.memo.actions.copyStores = $event,
                                        label: "\u0E16\u0E48\u0E32\u0E22\u0E2A\u0E33\u0E40\u0E19\u0E32\u0E40\u0E01\u0E47\u0E1A\u0E44\u0E27\u0E49 (Copy stores)",
                                        density: "compact",
                                        "hide-details": ""
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    sm: "6",
                                    md: "3"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VCheckbox, {
                                        modelValue: __props.memo.actions.returnCopies,
                                        "onUpdate:modelValue": ($event) => __props.memo.actions.returnCopies = $event,
                                        label: "\u0E2A\u0E48\u0E07\u0E2A\u0E33\u0E40\u0E19\u0E32\u0E04\u0E37\u0E19 (Return copies)",
                                        density: "compact",
                                        "hide-details": ""
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    sm: "6",
                                    md: "3"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VCheckbox, {
                                        modelValue: __props.memo.actions.forApproval,
                                        "onUpdate:modelValue": ($event) => __props.memo.actions.forApproval = $event,
                                        label: "\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E2D\u0E19\u0E38\u0E21\u0E31\u0E15\u0E34 (For approval)",
                                        density: "compact",
                                        "hide-details": ""
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    sm: "6",
                                    md: "3"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VCheckbox, {
                                        modelValue: __props.memo.actions.toConsider,
                                        "onUpdate:modelValue": ($event) => __props.memo.actions.toConsider = $event,
                                        label: "\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E1E\u0E34\u0E08\u0E32\u0E23\u0E13\u0E32 (To consider)",
                                        density: "compact",
                                        "hide-details": ""
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    sm: "6",
                                    md: "3"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VCheckbox, {
                                        modelValue: __props.memo.actions.toKnow,
                                        "onUpdate:modelValue": ($event) => __props.memo.actions.toKnow = $event,
                                        label: "\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E17\u0E23\u0E32\u0E1A (To know)",
                                        density: "compact",
                                        "hide-details": ""
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    sm: "6",
                                    md: "3"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VCheckbox, {
                                        modelValue: __props.memo.actions.other,
                                        "onUpdate:modelValue": ($event) => __props.memo.actions.other = $event,
                                        label: "\u0E2D\u0E37\u0E48\u0E19\u0E46 (Other)",
                                        density: "compact",
                                        "hide-details": ""
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                      }),
                      __props.memo.actions.other ? (openBlock(), createBlock(VRow, {
                        key: 0,
                        class: "mt-2"
                      }, {
                        default: withCtx(() => [
                          createVNode(VCol, { cols: "12" }, {
                            default: withCtx(() => [
                              createVNode(VTextField, {
                                modelValue: __props.memo.otherAction,
                                "onUpdate:modelValue": ($event) => __props.memo.otherAction = $event,
                                label: "\u0E23\u0E30\u0E1A\u0E38\u0E01\u0E32\u0E23\u0E14\u0E33\u0E40\u0E19\u0E34\u0E19\u0E01\u0E32\u0E23\u0E2D\u0E37\u0E48\u0E19\u0E46",
                                density: "comfortable"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })) : createCommentVNode("", true),
                      createVNode(VRow, { class: "mt-4" }, {
                        default: withCtx(() => [
                          createVNode(VCol, { cols: "12" }, {
                            default: withCtx(() => [
                              createVNode(VTextField, {
                                modelValue: __props.memo.subject,
                                "onUpdate:modelValue": ($event) => __props.memo.subject = $event,
                                label: "\u0E40\u0E23\u0E37\u0E48\u0E2D\u0E07 (Subject)",
                                density: "comfortable",
                                rules: [requiredRule]
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
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
                              createVNode(VTextField, {
                                modelValue: __props.memo.details,
                                "onUpdate:modelValue": ($event) => __props.memo.details = $event,
                                label: "\u0E23\u0E32\u0E22\u0E25\u0E30\u0E40\u0E2D\u0E35\u0E22\u0E14 (Details)",
                                density: "comfortable"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                              createVNode(VTextarea, {
                                modelValue: __props.memo.message,
                                "onUpdate:modelValue": ($event) => __props.memo.message = $event,
                                label: "\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21/\u0E40\u0E19\u0E37\u0E49\u0E2D\u0E2B\u0E32 (Message/Content)",
                                rows: "8",
                                rules: [requiredRule]
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(VRow, { class: "mt-4" }, {
                        default: withCtx(() => [
                          createVNode(VCol, {
                            cols: "12",
                            class: "d-flex gap-2"
                          }, {
                            default: withCtx(() => [
                              createVNode(VBtn, {
                                color: "primary",
                                size: "large",
                                onClick: handleSave
                              }, {
                                default: withCtx(() => [
                                  createVNode(VIcon, {
                                    start: "",
                                    icon: "bx-save"
                                  }),
                                  createTextVNode(" \u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01 (Save) ")
                                ]),
                                _: 1
                              }),
                              createVNode(VBtn, {
                                color: "success",
                                size: "large",
                                disabled: !__props.isSaved,
                                onClick: handleExportPdf
                              }, {
                                default: withCtx(() => [
                                  createVNode(VIcon, {
                                    start: "",
                                    icon: "bxs-file-pdf"
                                  }),
                                  createTextVNode(" Export PDF ")
                                ]),
                                _: 1
                              }, 8, ["disabled"]),
                              createVNode(VBtn, {
                                color: "secondary",
                                size: "large",
                                variant: "outlined",
                                onClick: handleReset
                              }, {
                                default: withCtx(() => [
                                  createVNode(VIcon, {
                                    start: "",
                                    icon: "bx-reset"
                                  }),
                                  createTextVNode(" \u0E23\u0E35\u0E40\u0E0B\u0E47\u0E15 (Reset) ")
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
                  }, 512)
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/MemoForm.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
