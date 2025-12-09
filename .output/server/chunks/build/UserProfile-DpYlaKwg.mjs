import { toRef, createVNode, mergeProps, withDirectives, vShow, withCtx, unref, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { p as propsFactory, I as IconValue, m as makeComponentProps, R as makeLocationProps, T as makeRoundedProps, d as makeTagProps, e as makeThemeProps, am as makeTransitionProps, g as genericComponent, C as useBackgroundColor, a0 as useRounded, f as useLocale, w as useTextColor, q as useTheme, Z as useLocation, n as useRender, b3 as pickWithRest, M as MaybeTransition, V as VIcon, a3 as useAuthStore, o as VImg } from './server.mjs';
import { a as avatar1 } from './avatar-1-BLwzgS8N.mjs';
import { useRouter } from 'vue-router';
import { V as VAvatar } from './VAvatar-BWioJSAV.mjs';
import { V as VMenu } from './VMenu-CLtX8H-Q.mjs';
import { V as VList, a as VListItem, b as VListItemTitle, c as VListItemSubtitle } from './VList-DCeFvVa6.mjs';
import { V as VListItemAction } from './VListItemAction-HStnLId_.mjs';
import { V as VDivider } from './VDivider-LYYZi4vy.mjs';
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
import './VOverlay-B9V9YqYJ.mjs';
import './forwardRefs-Oip3fNRq.mjs';
import './scopeId-b3c5ZUEe.mjs';
import './index-DUS45q6U.mjs';
import './ssrBoot-BtvJZs44.mjs';

const makeVBadgeProps = propsFactory({
  bordered: Boolean,
  color: String,
  content: [Number, String],
  dot: Boolean,
  floating: Boolean,
  icon: IconValue,
  inline: Boolean,
  label: {
    type: String,
    default: "$vuetify.badge"
  },
  max: [Number, String],
  modelValue: {
    type: Boolean,
    default: true
  },
  offsetX: [Number, String],
  offsetY: [Number, String],
  textColor: String,
  ...makeComponentProps(),
  ...makeLocationProps({
    location: "top end"
  }),
  ...makeRoundedProps(),
  ...makeTagProps(),
  ...makeThemeProps(),
  ...makeTransitionProps({
    transition: "scale-rotate-transition"
  })
}, "VBadge");
const VBadge = genericComponent()({
  name: "VBadge",
  inheritAttrs: false,
  props: makeVBadgeProps(),
  setup(props, ctx) {
    const {
      backgroundColorClasses,
      backgroundColorStyles
    } = useBackgroundColor(toRef(props, "color"));
    const {
      roundedClasses
    } = useRounded(props);
    const {
      t
    } = useLocale();
    const {
      textColorClasses,
      textColorStyles
    } = useTextColor(toRef(props, "textColor"));
    const {
      themeClasses
    } = useTheme();
    const {
      locationStyles
    } = useLocation(props, true, (side) => {
      var _a, _b;
      const base = props.floating ? props.dot ? 2 : 4 : props.dot ? 8 : 12;
      return base + (["top", "bottom"].includes(side) ? +((_a = props.offsetY) != null ? _a : 0) : ["left", "right"].includes(side) ? +((_b = props.offsetX) != null ? _b : 0) : 0);
    });
    useRender(() => {
      const value = Number(props.content);
      const content = !props.max || isNaN(value) ? props.content : value <= +props.max ? value : `${props.max}+`;
      const [badgeAttrs, attrs] = pickWithRest(ctx.attrs, ["aria-atomic", "aria-label", "aria-live", "role", "title"]);
      return createVNode(props.tag, mergeProps({
        "class": ["v-badge", {
          "v-badge--bordered": props.bordered,
          "v-badge--dot": props.dot,
          "v-badge--floating": props.floating,
          "v-badge--inline": props.inline
        }, props.class]
      }, attrs, {
        "style": props.style
      }), {
        default: () => {
          var _a, _b;
          return [createVNode("div", {
            "class": "v-badge__wrapper"
          }, [(_b = (_a = ctx.slots).default) == null ? void 0 : _b.call(_a), createVNode(MaybeTransition, {
            "transition": props.transition
          }, {
            default: () => {
              var _a2, _b2;
              return [withDirectives(createVNode("span", mergeProps({
                "class": ["v-badge__badge", themeClasses.value, backgroundColorClasses.value, roundedClasses.value, textColorClasses.value],
                "style": [backgroundColorStyles.value, textColorStyles.value, props.inline ? {} : locationStyles.value],
                "aria-atomic": "true",
                "aria-label": t(props.label, value),
                "aria-live": "polite",
                "role": "status"
              }, badgeAttrs), [props.dot ? void 0 : ctx.slots.badge ? (_b2 = (_a2 = ctx.slots).badge) == null ? void 0 : _b2.call(_a2) : props.icon ? createVNode(VIcon, {
                "icon": props.icon
              }, null) : content]), [[vShow, props.modelValue]])];
            }
          })])];
        }
      });
    });
    return {};
  }
});
const _sfc_main = {
  __name: "UserProfile",
  __ssrInlineRender: true,
  setup(__props) {
    const authStore = useAuthStore();
    const router = useRouter();
    const handleLogout = () => {
      authStore.logout();
      router.push("/login");
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VBadge, mergeProps({
        dot: "",
        location: "bottom right",
        "offset-x": "3",
        "offset-y": "3",
        color: "success",
        bordered: ""
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VAvatar, {
              class: "cursor-pointer",
              color: "primary",
              variant: "tonal"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VImg, { src: unref(avatar1) }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VMenu, {
                    activator: "parent",
                    width: "230",
                    location: "bottom end",
                    offset: "14px"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VList, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VListItem, null, {
                                prepend: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VListItemAction, { start: "" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VBadge, {
                                            dot: "",
                                            location: "bottom right",
                                            "offset-x": "3",
                                            "offset-y": "3",
                                            color: "success"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VAvatar, {
                                                  color: "primary",
                                                  variant: "tonal"
                                                }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(VImg, { src: unref(avatar1) }, null, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode(VImg, { src: unref(avatar1) }, null, 8, ["src"])
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VAvatar, {
                                                    color: "primary",
                                                    variant: "tonal"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(VImg, { src: unref(avatar1) }, null, 8, ["src"])
                                                    ]),
                                                    _: 1
                                                  })
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VBadge, {
                                              dot: "",
                                              location: "bottom right",
                                              "offset-x": "3",
                                              "offset-y": "3",
                                              color: "success"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VAvatar, {
                                                  color: "primary",
                                                  variant: "tonal"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(VImg, { src: unref(avatar1) }, null, 8, ["src"])
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
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VListItemAction, { start: "" }, {
                                        default: withCtx(() => [
                                          createVNode(VBadge, {
                                            dot: "",
                                            location: "bottom right",
                                            "offset-x": "3",
                                            "offset-y": "3",
                                            color: "success"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VAvatar, {
                                                color: "primary",
                                                variant: "tonal"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(VImg, { src: unref(avatar1) }, null, 8, ["src"])
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
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VListItemTitle, { class: "font-weight-semibold" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        var _a, _b;
                                        if (_push7) {
                                          _push7(`${ssrInterpolate(((_a = unref(authStore).user) == null ? void 0 : _a.name) || "Guest")}`);
                                        } else {
                                          return [
                                            createTextVNode(toDisplayString(((_b = unref(authStore).user) == null ? void 0 : _b.name) || "Guest"), 1)
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VListItemSubtitle, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        var _a, _b;
                                        if (_push7) {
                                          _push7(`${ssrInterpolate(((_a = unref(authStore).user) == null ? void 0 : _a.username) || "Guest")}`);
                                        } else {
                                          return [
                                            createTextVNode(toDisplayString(((_b = unref(authStore).user) == null ? void 0 : _b.username) || "Guest"), 1)
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VListItemTitle, { class: "font-weight-semibold" }, {
                                        default: withCtx(() => {
                                          var _a;
                                          return [
                                            createTextVNode(toDisplayString(((_a = unref(authStore).user) == null ? void 0 : _a.name) || "Guest"), 1)
                                          ];
                                        }),
                                        _: 1
                                      }),
                                      createVNode(VListItemSubtitle, null, {
                                        default: withCtx(() => {
                                          var _a;
                                          return [
                                            createTextVNode(toDisplayString(((_a = unref(authStore).user) == null ? void 0 : _a.username) || "Guest"), 1)
                                          ];
                                        }),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VDivider, { class: "my-2" }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VListItem, { link: "" }, {
                                prepend: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VIcon, {
                                      class: "me-2",
                                      icon: "bx-user",
                                      size: "22"
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VIcon, {
                                        class: "me-2",
                                        icon: "bx-user",
                                        size: "22"
                                      })
                                    ];
                                  }
                                }),
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VListItemTitle, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`Profile`);
                                        } else {
                                          return [
                                            createTextVNode("Profile")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VListItemTitle, null, {
                                        default: withCtx(() => [
                                          createTextVNode("Profile")
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VListItem, { link: "" }, {
                                prepend: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VIcon, {
                                      class: "me-2",
                                      icon: "bx-cog",
                                      size: "22"
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VIcon, {
                                        class: "me-2",
                                        icon: "bx-cog",
                                        size: "22"
                                      })
                                    ];
                                  }
                                }),
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VListItemTitle, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`Settings`);
                                        } else {
                                          return [
                                            createTextVNode("Settings")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VListItemTitle, null, {
                                        default: withCtx(() => [
                                          createTextVNode("Settings")
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VListItem, { link: "" }, {
                                prepend: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VIcon, {
                                      class: "me-2",
                                      icon: "bx-dollar",
                                      size: "22"
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VIcon, {
                                        class: "me-2",
                                        icon: "bx-dollar",
                                        size: "22"
                                      })
                                    ];
                                  }
                                }),
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VListItemTitle, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`Pricing`);
                                        } else {
                                          return [
                                            createTextVNode("Pricing")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VListItemTitle, null, {
                                        default: withCtx(() => [
                                          createTextVNode("Pricing")
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VListItem, { link: "" }, {
                                prepend: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VIcon, {
                                      class: "me-2",
                                      icon: "bx-help-circle",
                                      size: "22"
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VIcon, {
                                        class: "me-2",
                                        icon: "bx-help-circle",
                                        size: "22"
                                      })
                                    ];
                                  }
                                }),
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VListItemTitle, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`FAQ`);
                                        } else {
                                          return [
                                            createTextVNode("FAQ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VListItemTitle, null, {
                                        default: withCtx(() => [
                                          createTextVNode("FAQ")
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VDivider, { class: "my-2" }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VListItem, { onClick: handleLogout }, {
                                prepend: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VIcon, {
                                      class: "me-2",
                                      icon: "bx-log-out",
                                      size: "22"
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VIcon, {
                                        class: "me-2",
                                        icon: "bx-log-out",
                                        size: "22"
                                      })
                                    ];
                                  }
                                }),
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VListItemTitle, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`Logout`);
                                        } else {
                                          return [
                                            createTextVNode("Logout")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VListItemTitle, null, {
                                        default: withCtx(() => [
                                          createTextVNode("Logout")
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
                                createVNode(VListItem, null, {
                                  prepend: withCtx(() => [
                                    createVNode(VListItemAction, { start: "" }, {
                                      default: withCtx(() => [
                                        createVNode(VBadge, {
                                          dot: "",
                                          location: "bottom right",
                                          "offset-x": "3",
                                          "offset-y": "3",
                                          color: "success"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VAvatar, {
                                              color: "primary",
                                              variant: "tonal"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VImg, { src: unref(avatar1) }, null, 8, ["src"])
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
                                  default: withCtx(() => [
                                    createVNode(VListItemTitle, { class: "font-weight-semibold" }, {
                                      default: withCtx(() => {
                                        var _a;
                                        return [
                                          createTextVNode(toDisplayString(((_a = unref(authStore).user) == null ? void 0 : _a.name) || "Guest"), 1)
                                        ];
                                      }),
                                      _: 1
                                    }),
                                    createVNode(VListItemSubtitle, null, {
                                      default: withCtx(() => {
                                        var _a;
                                        return [
                                          createTextVNode(toDisplayString(((_a = unref(authStore).user) == null ? void 0 : _a.username) || "Guest"), 1)
                                        ];
                                      }),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(VDivider, { class: "my-2" }),
                                createVNode(VListItem, { link: "" }, {
                                  prepend: withCtx(() => [
                                    createVNode(VIcon, {
                                      class: "me-2",
                                      icon: "bx-user",
                                      size: "22"
                                    })
                                  ]),
                                  default: withCtx(() => [
                                    createVNode(VListItemTitle, null, {
                                      default: withCtx(() => [
                                        createTextVNode("Profile")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(VListItem, { link: "" }, {
                                  prepend: withCtx(() => [
                                    createVNode(VIcon, {
                                      class: "me-2",
                                      icon: "bx-cog",
                                      size: "22"
                                    })
                                  ]),
                                  default: withCtx(() => [
                                    createVNode(VListItemTitle, null, {
                                      default: withCtx(() => [
                                        createTextVNode("Settings")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(VListItem, { link: "" }, {
                                  prepend: withCtx(() => [
                                    createVNode(VIcon, {
                                      class: "me-2",
                                      icon: "bx-dollar",
                                      size: "22"
                                    })
                                  ]),
                                  default: withCtx(() => [
                                    createVNode(VListItemTitle, null, {
                                      default: withCtx(() => [
                                        createTextVNode("Pricing")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(VListItem, { link: "" }, {
                                  prepend: withCtx(() => [
                                    createVNode(VIcon, {
                                      class: "me-2",
                                      icon: "bx-help-circle",
                                      size: "22"
                                    })
                                  ]),
                                  default: withCtx(() => [
                                    createVNode(VListItemTitle, null, {
                                      default: withCtx(() => [
                                        createTextVNode("FAQ")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(VDivider, { class: "my-2" }),
                                createVNode(VListItem, { onClick: handleLogout }, {
                                  prepend: withCtx(() => [
                                    createVNode(VIcon, {
                                      class: "me-2",
                                      icon: "bx-log-out",
                                      size: "22"
                                    })
                                  ]),
                                  default: withCtx(() => [
                                    createVNode(VListItemTitle, null, {
                                      default: withCtx(() => [
                                        createTextVNode("Logout")
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
                          createVNode(VList, null, {
                            default: withCtx(() => [
                              createVNode(VListItem, null, {
                                prepend: withCtx(() => [
                                  createVNode(VListItemAction, { start: "" }, {
                                    default: withCtx(() => [
                                      createVNode(VBadge, {
                                        dot: "",
                                        location: "bottom right",
                                        "offset-x": "3",
                                        "offset-y": "3",
                                        color: "success"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VAvatar, {
                                            color: "primary",
                                            variant: "tonal"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VImg, { src: unref(avatar1) }, null, 8, ["src"])
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
                                default: withCtx(() => [
                                  createVNode(VListItemTitle, { class: "font-weight-semibold" }, {
                                    default: withCtx(() => {
                                      var _a;
                                      return [
                                        createTextVNode(toDisplayString(((_a = unref(authStore).user) == null ? void 0 : _a.name) || "Guest"), 1)
                                      ];
                                    }),
                                    _: 1
                                  }),
                                  createVNode(VListItemSubtitle, null, {
                                    default: withCtx(() => {
                                      var _a;
                                      return [
                                        createTextVNode(toDisplayString(((_a = unref(authStore).user) == null ? void 0 : _a.username) || "Guest"), 1)
                                      ];
                                    }),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(VDivider, { class: "my-2" }),
                              createVNode(VListItem, { link: "" }, {
                                prepend: withCtx(() => [
                                  createVNode(VIcon, {
                                    class: "me-2",
                                    icon: "bx-user",
                                    size: "22"
                                  })
                                ]),
                                default: withCtx(() => [
                                  createVNode(VListItemTitle, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Profile")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(VListItem, { link: "" }, {
                                prepend: withCtx(() => [
                                  createVNode(VIcon, {
                                    class: "me-2",
                                    icon: "bx-cog",
                                    size: "22"
                                  })
                                ]),
                                default: withCtx(() => [
                                  createVNode(VListItemTitle, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Settings")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(VListItem, { link: "" }, {
                                prepend: withCtx(() => [
                                  createVNode(VIcon, {
                                    class: "me-2",
                                    icon: "bx-dollar",
                                    size: "22"
                                  })
                                ]),
                                default: withCtx(() => [
                                  createVNode(VListItemTitle, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Pricing")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(VListItem, { link: "" }, {
                                prepend: withCtx(() => [
                                  createVNode(VIcon, {
                                    class: "me-2",
                                    icon: "bx-help-circle",
                                    size: "22"
                                  })
                                ]),
                                default: withCtx(() => [
                                  createVNode(VListItemTitle, null, {
                                    default: withCtx(() => [
                                      createTextVNode("FAQ")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(VDivider, { class: "my-2" }),
                              createVNode(VListItem, { onClick: handleLogout }, {
                                prepend: withCtx(() => [
                                  createVNode(VIcon, {
                                    class: "me-2",
                                    icon: "bx-log-out",
                                    size: "22"
                                  })
                                ]),
                                default: withCtx(() => [
                                  createVNode(VListItemTitle, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Logout")
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
                    createVNode(VImg, { src: unref(avatar1) }, null, 8, ["src"]),
                    createVNode(VMenu, {
                      activator: "parent",
                      width: "230",
                      location: "bottom end",
                      offset: "14px"
                    }, {
                      default: withCtx(() => [
                        createVNode(VList, null, {
                          default: withCtx(() => [
                            createVNode(VListItem, null, {
                              prepend: withCtx(() => [
                                createVNode(VListItemAction, { start: "" }, {
                                  default: withCtx(() => [
                                    createVNode(VBadge, {
                                      dot: "",
                                      location: "bottom right",
                                      "offset-x": "3",
                                      "offset-y": "3",
                                      color: "success"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VAvatar, {
                                          color: "primary",
                                          variant: "tonal"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VImg, { src: unref(avatar1) }, null, 8, ["src"])
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
                              default: withCtx(() => [
                                createVNode(VListItemTitle, { class: "font-weight-semibold" }, {
                                  default: withCtx(() => {
                                    var _a;
                                    return [
                                      createTextVNode(toDisplayString(((_a = unref(authStore).user) == null ? void 0 : _a.name) || "Guest"), 1)
                                    ];
                                  }),
                                  _: 1
                                }),
                                createVNode(VListItemSubtitle, null, {
                                  default: withCtx(() => {
                                    var _a;
                                    return [
                                      createTextVNode(toDisplayString(((_a = unref(authStore).user) == null ? void 0 : _a.username) || "Guest"), 1)
                                    ];
                                  }),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(VDivider, { class: "my-2" }),
                            createVNode(VListItem, { link: "" }, {
                              prepend: withCtx(() => [
                                createVNode(VIcon, {
                                  class: "me-2",
                                  icon: "bx-user",
                                  size: "22"
                                })
                              ]),
                              default: withCtx(() => [
                                createVNode(VListItemTitle, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Profile")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(VListItem, { link: "" }, {
                              prepend: withCtx(() => [
                                createVNode(VIcon, {
                                  class: "me-2",
                                  icon: "bx-cog",
                                  size: "22"
                                })
                              ]),
                              default: withCtx(() => [
                                createVNode(VListItemTitle, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Settings")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(VListItem, { link: "" }, {
                              prepend: withCtx(() => [
                                createVNode(VIcon, {
                                  class: "me-2",
                                  icon: "bx-dollar",
                                  size: "22"
                                })
                              ]),
                              default: withCtx(() => [
                                createVNode(VListItemTitle, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Pricing")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(VListItem, { link: "" }, {
                              prepend: withCtx(() => [
                                createVNode(VIcon, {
                                  class: "me-2",
                                  icon: "bx-help-circle",
                                  size: "22"
                                })
                              ]),
                              default: withCtx(() => [
                                createVNode(VListItemTitle, null, {
                                  default: withCtx(() => [
                                    createTextVNode("FAQ")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(VDivider, { class: "my-2" }),
                            createVNode(VListItem, { onClick: handleLogout }, {
                              prepend: withCtx(() => [
                                createVNode(VIcon, {
                                  class: "me-2",
                                  icon: "bx-log-out",
                                  size: "22"
                                })
                              ]),
                              default: withCtx(() => [
                                createVNode(VListItemTitle, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Logout")
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
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VAvatar, {
                class: "cursor-pointer",
                color: "primary",
                variant: "tonal"
              }, {
                default: withCtx(() => [
                  createVNode(VImg, { src: unref(avatar1) }, null, 8, ["src"]),
                  createVNode(VMenu, {
                    activator: "parent",
                    width: "230",
                    location: "bottom end",
                    offset: "14px"
                  }, {
                    default: withCtx(() => [
                      createVNode(VList, null, {
                        default: withCtx(() => [
                          createVNode(VListItem, null, {
                            prepend: withCtx(() => [
                              createVNode(VListItemAction, { start: "" }, {
                                default: withCtx(() => [
                                  createVNode(VBadge, {
                                    dot: "",
                                    location: "bottom right",
                                    "offset-x": "3",
                                    "offset-y": "3",
                                    color: "success"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VAvatar, {
                                        color: "primary",
                                        variant: "tonal"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VImg, { src: unref(avatar1) }, null, 8, ["src"])
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
                            default: withCtx(() => [
                              createVNode(VListItemTitle, { class: "font-weight-semibold" }, {
                                default: withCtx(() => {
                                  var _a;
                                  return [
                                    createTextVNode(toDisplayString(((_a = unref(authStore).user) == null ? void 0 : _a.name) || "Guest"), 1)
                                  ];
                                }),
                                _: 1
                              }),
                              createVNode(VListItemSubtitle, null, {
                                default: withCtx(() => {
                                  var _a;
                                  return [
                                    createTextVNode(toDisplayString(((_a = unref(authStore).user) == null ? void 0 : _a.username) || "Guest"), 1)
                                  ];
                                }),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(VDivider, { class: "my-2" }),
                          createVNode(VListItem, { link: "" }, {
                            prepend: withCtx(() => [
                              createVNode(VIcon, {
                                class: "me-2",
                                icon: "bx-user",
                                size: "22"
                              })
                            ]),
                            default: withCtx(() => [
                              createVNode(VListItemTitle, null, {
                                default: withCtx(() => [
                                  createTextVNode("Profile")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(VListItem, { link: "" }, {
                            prepend: withCtx(() => [
                              createVNode(VIcon, {
                                class: "me-2",
                                icon: "bx-cog",
                                size: "22"
                              })
                            ]),
                            default: withCtx(() => [
                              createVNode(VListItemTitle, null, {
                                default: withCtx(() => [
                                  createTextVNode("Settings")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(VListItem, { link: "" }, {
                            prepend: withCtx(() => [
                              createVNode(VIcon, {
                                class: "me-2",
                                icon: "bx-dollar",
                                size: "22"
                              })
                            ]),
                            default: withCtx(() => [
                              createVNode(VListItemTitle, null, {
                                default: withCtx(() => [
                                  createTextVNode("Pricing")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(VListItem, { link: "" }, {
                            prepend: withCtx(() => [
                              createVNode(VIcon, {
                                class: "me-2",
                                icon: "bx-help-circle",
                                size: "22"
                              })
                            ]),
                            default: withCtx(() => [
                              createVNode(VListItemTitle, null, {
                                default: withCtx(() => [
                                  createTextVNode("FAQ")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(VDivider, { class: "my-2" }),
                          createVNode(VListItem, { onClick: handleLogout }, {
                            prepend: withCtx(() => [
                              createVNode(VIcon, {
                                class: "me-2",
                                icon: "bx-log-out",
                                size: "22"
                              })
                            ]),
                            default: withCtx(() => [
                              createVNode(VListItemTitle, null, {
                                default: withCtx(() => [
                                  createTextVNode("Logout")
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
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/components/UserProfile.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
