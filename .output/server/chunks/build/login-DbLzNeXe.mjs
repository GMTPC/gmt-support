import { computed, toRef, createVNode, mergeProps, useSSRContext, defineComponent, ref, withCtx, createTextVNode, toDisplayString, openBlock, createBlock, createCommentVNode, withModifiers } from 'vue';
import { ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { p as propsFactory, I as IconValue, m as makeComponentProps, b as makeDensityProps, P as makeDimensionProps, Q as makeElevationProps, R as makeLocationProps, S as makePositionProps, T as makeRoundedProps, d as makeTagProps, e as makeThemeProps, U as makeVariantProps, g as genericComponent, i as useProxiedModel, h as provideTheme, W as useVariant, B as useDensity, X as useDimension, Y as useElevation, Z as useLocation, $ as usePosition, a0 as useRounded, w as useTextColor, f as useLocale, a1 as genOverlays, V as VIcon, a2 as VDefaultsProvider, a as VBtn, _ as _export_sfc, a3 as useAuthStore } from './server.mjs';
import { useRouter } from 'vue-router';
import { V as VCard, c as VCardTitle, a as VCardText } from './VCard-CSiTQXcr.mjs';
import { V as VForm } from './VForm-wpOva5dg.mjs';
import { V as VTextField } from './VTextField-BBb08qcq.mjs';
import { c as createSimpleFunctional } from './VAvatar-BWioJSAV.mjs';
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
import './forwardRefs-Oip3fNRq.mjs';
import './index-DUS45q6U.mjs';

const VAlertTitle = createSimpleFunctional("v-alert-title");
const allowedTypes = ["success", "info", "warning", "error"];
const makeVAlertProps = propsFactory({
  border: {
    type: [Boolean, String],
    validator: (val) => {
      return typeof val === "boolean" || ["top", "end", "bottom", "start"].includes(val);
    }
  },
  borderColor: String,
  closable: Boolean,
  closeIcon: {
    type: IconValue,
    default: "$close"
  },
  closeLabel: {
    type: String,
    default: "$vuetify.close"
  },
  icon: {
    type: [Boolean, String, Function, Object],
    default: null
  },
  modelValue: {
    type: Boolean,
    default: true
  },
  prominent: Boolean,
  title: String,
  text: String,
  type: {
    type: String,
    validator: (val) => allowedTypes.includes(val)
  },
  ...makeComponentProps(),
  ...makeDensityProps(),
  ...makeDimensionProps(),
  ...makeElevationProps(),
  ...makeLocationProps(),
  ...makePositionProps(),
  ...makeRoundedProps(),
  ...makeTagProps(),
  ...makeThemeProps(),
  ...makeVariantProps({
    variant: "flat"
  })
}, "VAlert");
const VAlert = genericComponent()({
  name: "VAlert",
  props: makeVAlertProps(),
  emits: {
    "click:close": (e) => true,
    "update:modelValue": (value) => true
  },
  setup(props, _ref) {
    let {
      emit,
      slots
    } = _ref;
    const isActive = useProxiedModel(props, "modelValue");
    const icon = computed(() => {
      var _a;
      if (props.icon === false) return void 0;
      if (!props.type) return props.icon;
      return (_a = props.icon) != null ? _a : `$${props.type}`;
    });
    const variantProps = computed(() => {
      var _a;
      return {
        color: (_a = props.color) != null ? _a : props.type,
        variant: props.variant
      };
    });
    const {
      themeClasses
    } = provideTheme(props);
    const {
      colorClasses,
      colorStyles,
      variantClasses
    } = useVariant(variantProps);
    const {
      densityClasses
    } = useDensity(props);
    const {
      dimensionStyles
    } = useDimension(props);
    const {
      elevationClasses
    } = useElevation(props);
    const {
      locationStyles
    } = useLocation(props);
    const {
      positionClasses
    } = usePosition(props);
    const {
      roundedClasses
    } = useRounded(props);
    const {
      textColorClasses,
      textColorStyles
    } = useTextColor(toRef(props, "borderColor"));
    const {
      t
    } = useLocale();
    const closeProps = computed(() => ({
      "aria-label": t(props.closeLabel),
      onClick(e) {
        isActive.value = false;
        emit("click:close", e);
      }
    }));
    return () => {
      const hasPrepend = !!(slots.prepend || icon.value);
      const hasTitle = !!(slots.title || props.title);
      const hasClose = !!(slots.close || props.closable);
      return isActive.value && createVNode(props.tag, {
        "class": ["v-alert", props.border && {
          "v-alert--border": !!props.border,
          [`v-alert--border-${props.border === true ? "start" : props.border}`]: true
        }, {
          "v-alert--prominent": props.prominent
        }, themeClasses.value, colorClasses.value, densityClasses.value, elevationClasses.value, positionClasses.value, roundedClasses.value, variantClasses.value, props.class],
        "style": [colorStyles.value, dimensionStyles.value, locationStyles.value, props.style],
        "role": "alert"
      }, {
        default: () => {
          var _a2;
          var _a, _b;
          return [genOverlays(false, "v-alert"), props.border && createVNode("div", {
            "key": "border",
            "class": ["v-alert__border", textColorClasses.value],
            "style": textColorStyles.value
          }, null), hasPrepend && createVNode("div", {
            "key": "prepend",
            "class": "v-alert__prepend"
          }, [!slots.prepend ? createVNode(VIcon, {
            "key": "prepend-icon",
            "density": props.density,
            "icon": icon.value,
            "size": props.prominent ? 44 : 28
          }, null) : createVNode(VDefaultsProvider, {
            "key": "prepend-defaults",
            "disabled": !icon.value,
            "defaults": {
              VIcon: {
                density: props.density,
                icon: icon.value,
                size: props.prominent ? 44 : 28
              }
            }
          }, slots.prepend)]), createVNode("div", {
            "class": "v-alert__content"
          }, [hasTitle && createVNode(VAlertTitle, {
            "key": "title"
          }, {
            default: () => {
              var _a3;
              var _a22;
              return [(_a3 = (_a22 = slots.title) == null ? void 0 : _a22.call(slots)) != null ? _a3 : props.title];
            }
          }), (_a2 = (_a = slots.text) == null ? void 0 : _a.call(slots)) != null ? _a2 : props.text, (_b = slots.default) == null ? void 0 : _b.call(slots)]), slots.append && createVNode("div", {
            "key": "append",
            "class": "v-alert__append"
          }, [slots.append()]), hasClose && createVNode("div", {
            "key": "close",
            "class": "v-alert__close"
          }, [!slots.close ? createVNode(VBtn, mergeProps({
            "key": "close-btn",
            "icon": props.closeIcon,
            "size": "x-small",
            "variant": "text"
          }, closeProps.value), null) : createVNode(VDefaultsProvider, {
            "key": "close-defaults",
            "defaults": {
              VBtn: {
                icon: props.closeIcon,
                size: "x-small",
                variant: "text"
              }
            }
          }, {
            default: () => {
              var _a22;
              return [(_a22 = slots.close) == null ? void 0 : _a22.call(slots, {
                props: closeProps.value
              })];
            }
          })])];
        }
      });
    };
  }
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "login",
  __ssrInlineRender: true,
  setup(__props) {
    const form = ref({
      username: "",
      password: ""
    });
    const authStore = useAuthStore();
    const router = useRouter();
    const error = ref("");
    const loading = ref(false);
    const handleLogin = async () => {
      loading.value = true;
      error.value = "";
      try {
        const success = await authStore.login(form.value);
        if (success) {
          router.push("/");
        } else {
          error.value = "Login failed. Please try again.";
        }
      } catch (e) {
        error.value = "An error occurred.";
      } finally {
        loading.value = false;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VCard, mergeProps({
        class: "auth-card pa-4",
        width: "400",
        elevation: "10"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCardTitle, { class: "text-h5 text-center mb-6 font-weight-bold text-primary" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Welcome Back `);
                } else {
                  return [
                    createTextVNode(" Welcome Back ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCardText, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VForm, { onSubmit: handleLogin }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VTextField, {
                          modelValue: form.value.username,
                          "onUpdate:modelValue": ($event) => form.value.username = $event,
                          label: "Username",
                          "prepend-inner-icon": "bx-user",
                          variant: "outlined",
                          class: "mb-4",
                          placeholder: "Enter your username"
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VTextField, {
                          modelValue: form.value.password,
                          "onUpdate:modelValue": ($event) => form.value.password = $event,
                          label: "Password",
                          "prepend-inner-icon": "bx-lock-alt",
                          variant: "outlined",
                          type: "password",
                          class: "mb-6",
                          placeholder: "Enter your password"
                        }, null, _parent4, _scopeId3));
                        if (error.value) {
                          _push4(ssrRenderComponent(VAlert, {
                            type: "error",
                            variant: "tonal",
                            class: "mb-4",
                            closable: ""
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(error.value)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(error.value), 1)
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          _push4(`<!---->`);
                        }
                        _push4(ssrRenderComponent(VBtn, {
                          block: "",
                          type: "submit",
                          color: "primary",
                          size: "large",
                          loading: loading.value,
                          class: "text-capitalize font-weight-bold"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Login `);
                            } else {
                              return [
                                createTextVNode(" Login ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VTextField, {
                            modelValue: form.value.username,
                            "onUpdate:modelValue": ($event) => form.value.username = $event,
                            label: "Username",
                            "prepend-inner-icon": "bx-user",
                            variant: "outlined",
                            class: "mb-4",
                            placeholder: "Enter your username"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(VTextField, {
                            modelValue: form.value.password,
                            "onUpdate:modelValue": ($event) => form.value.password = $event,
                            label: "Password",
                            "prepend-inner-icon": "bx-lock-alt",
                            variant: "outlined",
                            type: "password",
                            class: "mb-6",
                            placeholder: "Enter your password"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          error.value ? (openBlock(), createBlock(VAlert, {
                            key: 0,
                            type: "error",
                            variant: "tonal",
                            class: "mb-4",
                            closable: ""
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(error.value), 1)
                            ]),
                            _: 1
                          })) : createCommentVNode("", true),
                          createVNode(VBtn, {
                            block: "",
                            type: "submit",
                            color: "primary",
                            size: "large",
                            loading: loading.value,
                            class: "text-capitalize font-weight-bold"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Login ")
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
                    createVNode(VForm, {
                      onSubmit: withModifiers(handleLogin, ["prevent"])
                    }, {
                      default: withCtx(() => [
                        createVNode(VTextField, {
                          modelValue: form.value.username,
                          "onUpdate:modelValue": ($event) => form.value.username = $event,
                          label: "Username",
                          "prepend-inner-icon": "bx-user",
                          variant: "outlined",
                          class: "mb-4",
                          placeholder: "Enter your username"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                        createVNode(VTextField, {
                          modelValue: form.value.password,
                          "onUpdate:modelValue": ($event) => form.value.password = $event,
                          label: "Password",
                          "prepend-inner-icon": "bx-lock-alt",
                          variant: "outlined",
                          type: "password",
                          class: "mb-6",
                          placeholder: "Enter your password"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                        error.value ? (openBlock(), createBlock(VAlert, {
                          key: 0,
                          type: "error",
                          variant: "tonal",
                          class: "mb-4",
                          closable: ""
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(error.value), 1)
                          ]),
                          _: 1
                        })) : createCommentVNode("", true),
                        createVNode(VBtn, {
                          block: "",
                          type: "submit",
                          color: "primary",
                          size: "large",
                          loading: loading.value,
                          class: "text-capitalize font-weight-bold"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Login ")
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
              createVNode(VCardTitle, { class: "text-h5 text-center mb-6 font-weight-bold text-primary" }, {
                default: withCtx(() => [
                  createTextVNode(" Welcome Back ")
                ]),
                _: 1
              }),
              createVNode(VCardText, null, {
                default: withCtx(() => [
                  createVNode(VForm, {
                    onSubmit: withModifiers(handleLogin, ["prevent"])
                  }, {
                    default: withCtx(() => [
                      createVNode(VTextField, {
                        modelValue: form.value.username,
                        "onUpdate:modelValue": ($event) => form.value.username = $event,
                        label: "Username",
                        "prepend-inner-icon": "bx-user",
                        variant: "outlined",
                        class: "mb-4",
                        placeholder: "Enter your username"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode(VTextField, {
                        modelValue: form.value.password,
                        "onUpdate:modelValue": ($event) => form.value.password = $event,
                        label: "Password",
                        "prepend-inner-icon": "bx-lock-alt",
                        variant: "outlined",
                        type: "password",
                        class: "mb-6",
                        placeholder: "Enter your password"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      error.value ? (openBlock(), createBlock(VAlert, {
                        key: 0,
                        type: "error",
                        variant: "tonal",
                        class: "mb-4",
                        closable: ""
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(error.value), 1)
                        ]),
                        _: 1
                      })) : createCommentVNode("", true),
                      createVNode(VBtn, {
                        block: "",
                        type: "submit",
                        color: "primary",
                        size: "large",
                        loading: loading.value,
                        class: "text-capitalize font-weight-bold"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Login ")
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
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const login = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-dcc5346f"]]);

export { login as default };
