import { ref, unref, isRef, withCtx, createVNode, createTextVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, useSSRContext, useId, withModifiers, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { a as avatar1 } from './avatar-1-BLwzgS8N.mjs';
import { V as VRow, a as VCol } from './VRow-zuLeAiTc.mjs';
import { V as VCard, a as VCardText } from './VCard-CSiTQXcr.mjs';
import { V as VAvatar } from './VAvatar-BWioJSAV.mjs';
import { u as useRoute$1, V as VIcon, a as VBtn, _ as _export_sfc } from './server.mjs';
import { V as VDivider } from './VDivider-LYYZi4vy.mjs';
import { V as VForm } from './VForm-wpOva5dg.mjs';
import { V as VTextField } from './VTextField-BBb08qcq.mjs';
import { V as VSelect } from './VSelect-Cr6Di2uC.mjs';
import { V as VCheckbox } from './VCheckbox-B6hYyIfB.mjs';
import { V as VTable } from './VTable-BXhkfgy8.mjs';
import { V as VChip } from './VChip-DBW6TD_X.mjs';
import { V as VDataTable } from './VDataTable-BCjfAJbm.mjs';
import { V as VTabs, a as VTab, b as VWindow, c as VWindowItem } from './VTabs-D-jwyX0F.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:url';
import 'node:path';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import '../_/index.mjs';
import 'pinia';
import 'vue-router';
import './forwardRefs-Oip3fNRq.mjs';
import './index-DUS45q6U.mjs';
import './VList-DCeFvVa6.mjs';
import './ssrBoot-BtvJZs44.mjs';
import './VMenu-CLtX8H-Q.mjs';
import './VOverlay-B9V9YqYJ.mjs';
import './scopeId-b3c5ZUEe.mjs';
import './VCheckboxBtn-DiqOHInw.mjs';
import './VSlideGroup-C5ipntF0.mjs';

const _sfc_main$3 = {
  __name: "AccountSettingsAccount",
  __ssrInlineRender: true,
  setup(__props) {
    const accountData = {
      avatarImg: avatar1,
      firstName: "john",
      lastName: "Doe",
      email: "johnDoe@example.com",
      org: "ThemeSelection",
      phone: "+1 (917) 543-9876",
      address: "123 Main St, New York, NY 10001",
      state: "New York",
      zip: "10001",
      country: "USA",
      language: "English",
      timezone: "(GMT-11:00) International Date Line West",
      currency: "USD"
    };
    const refInputEl = ref();
    const accountDataLocal = ref(structuredClone(accountData));
    const isAccountDeactivated = ref(false);
    const resetForm = () => {
      accountDataLocal.value = structuredClone(accountData);
    };
    const changeAvatar = (file) => {
      const fileReader = new FileReader();
      const { files } = file.target;
      if (files && files.length) {
        fileReader.readAsDataURL(files[0]);
        fileReader.onload = () => {
          if (typeof fileReader.result === "string")
            accountDataLocal.value.avatarImg = fileReader.result;
        };
      }
    };
    const resetAvatar = () => {
      accountDataLocal.value.avatarImg = accountData.avatarImg;
    };
    const timezones = [
      "(GMT-11:00) International Date Line West",
      "(GMT-11:00) Midway Island",
      "(GMT-10:00) Hawaii",
      "(GMT-09:00) Alaska",
      "(GMT-08:00) Pacific Time (US & Canada)",
      "(GMT-08:00) Tijuana",
      "(GMT-07:00) Arizona",
      "(GMT-07:00) Chihuahua",
      "(GMT-07:00) La Paz",
      "(GMT-07:00) Mazatlan",
      "(GMT-07:00) Mountain Time (US & Canada)",
      "(GMT-06:00) Central America",
      "(GMT-06:00) Central Time (US & Canada)",
      "(GMT-06:00) Guadalajara",
      "(GMT-06:00) Mexico City",
      "(GMT-06:00) Monterrey",
      "(GMT-06:00) Saskatchewan",
      "(GMT-05:00) Bogota",
      "(GMT-05:00) Eastern Time (US & Canada)",
      "(GMT-05:00) Indiana (East)",
      "(GMT-05:00) Lima",
      "(GMT-05:00) Quito",
      "(GMT-04:00) Atlantic Time (Canada)",
      "(GMT-04:00) Caracas",
      "(GMT-04:00) La Paz",
      "(GMT-04:00) Santiago",
      "(GMT-03:30) Newfoundland",
      "(GMT-03:00) Brasilia",
      "(GMT-03:00) Buenos Aires",
      "(GMT-03:00) Georgetown",
      "(GMT-03:00) Greenland",
      "(GMT-02:00) Mid-Atlantic",
      "(GMT-01:00) Azores",
      "(GMT-01:00) Cape Verde Is.",
      "(GMT+00:00) Casablanca",
      "(GMT+00:00) Dublin",
      "(GMT+00:00) Edinburgh",
      "(GMT+00:00) Lisbon",
      "(GMT+00:00) London"
    ];
    const currencies = [
      "USD",
      "EUR",
      "GBP",
      "AUD",
      "BRL",
      "CAD",
      "CNY",
      "CZK",
      "DKK",
      "HKD",
      "HUF",
      "INR"
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VRow, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCol, { cols: "12" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCard, { title: "Account Details" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCardText, { class: "d-flex" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VAvatar, {
                                rounded: "lg",
                                size: "100",
                                class: "me-6",
                                image: unref(accountDataLocal).avatarImg
                              }, null, _parent5, _scopeId4));
                              _push5(`<form class="d-flex flex-column justify-center gap-5"${_scopeId4}><div class="d-flex flex-wrap gap-2"${_scopeId4}>`);
                              _push5(ssrRenderComponent(VBtn, {
                                color: "primary",
                                onClick: ($event) => {
                                  var _a;
                                  return (_a = unref(refInputEl)) == null ? void 0 : _a.click();
                                }
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VIcon, {
                                      icon: "bx-cloud-upload",
                                      class: "d-sm-none"
                                    }, null, _parent6, _scopeId5));
                                    _push6(`<span class="d-none d-sm-block"${_scopeId5}>Upload new photo</span>`);
                                  } else {
                                    return [
                                      createVNode(VIcon, {
                                        icon: "bx-cloud-upload",
                                        class: "d-sm-none"
                                      }),
                                      createVNode("span", { class: "d-none d-sm-block" }, "Upload new photo")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`<input type="file" name="file" accept=".jpeg,.png,.jpg,GIF" hidden${_scopeId4}>`);
                              _push5(ssrRenderComponent(VBtn, {
                                type: "reset",
                                color: "error",
                                variant: "tonal",
                                onClick: resetAvatar
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<span class="d-none d-sm-block"${_scopeId5}>Reset</span>`);
                                    _push6(ssrRenderComponent(VIcon, {
                                      icon: "bx-refresh",
                                      class: "d-sm-none"
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode("span", { class: "d-none d-sm-block" }, "Reset"),
                                      createVNode(VIcon, {
                                        icon: "bx-refresh",
                                        class: "d-sm-none"
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`</div><p class="text-body-1 mb-0"${_scopeId4}> Allowed JPG, GIF or PNG. Max size of 800K </p></form>`);
                            } else {
                              return [
                                createVNode(VAvatar, {
                                  rounded: "lg",
                                  size: "100",
                                  class: "me-6",
                                  image: unref(accountDataLocal).avatarImg
                                }, null, 8, ["image"]),
                                createVNode("form", { class: "d-flex flex-column justify-center gap-5" }, [
                                  createVNode("div", { class: "d-flex flex-wrap gap-2" }, [
                                    createVNode(VBtn, {
                                      color: "primary",
                                      onClick: ($event) => {
                                        var _a;
                                        return (_a = unref(refInputEl)) == null ? void 0 : _a.click();
                                      }
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VIcon, {
                                          icon: "bx-cloud-upload",
                                          class: "d-sm-none"
                                        }),
                                        createVNode("span", { class: "d-none d-sm-block" }, "Upload new photo")
                                      ]),
                                      _: 1
                                    }, 8, ["onClick"]),
                                    createVNode("input", {
                                      ref_key: "refInputEl",
                                      ref: refInputEl,
                                      type: "file",
                                      name: "file",
                                      accept: ".jpeg,.png,.jpg,GIF",
                                      hidden: "",
                                      onInput: changeAvatar
                                    }, null, 544),
                                    createVNode(VBtn, {
                                      type: "reset",
                                      color: "error",
                                      variant: "tonal",
                                      onClick: resetAvatar
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("span", { class: "d-none d-sm-block" }, "Reset"),
                                        createVNode(VIcon, {
                                          icon: "bx-refresh",
                                          class: "d-sm-none"
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  createVNode("p", { class: "text-body-1 mb-0" }, " Allowed JPG, GIF or PNG. Max size of 800K ")
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VDivider, null, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCardText, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VForm, { class: "mt-6" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VRow, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VCol, {
                                            md: "6",
                                            cols: "12"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VTextField, {
                                                  id: ("useId" in _ctx ? _ctx.useId : unref(useId))(),
                                                  modelValue: unref(accountDataLocal).firstName,
                                                  "onUpdate:modelValue": ($event) => unref(accountDataLocal).firstName = $event,
                                                  placeholder: "John",
                                                  label: "First Name"
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextField, {
                                                    id: ("useId" in _ctx ? _ctx.useId : unref(useId))(),
                                                    modelValue: unref(accountDataLocal).firstName,
                                                    "onUpdate:modelValue": ($event) => unref(accountDataLocal).firstName = $event,
                                                    placeholder: "John",
                                                    label: "First Name"
                                                  }, null, 8, ["id", "modelValue", "onUpdate:modelValue"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, {
                                            md: "6",
                                            cols: "12"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VTextField, {
                                                  id: ("useId" in _ctx ? _ctx.useId : unref(useId))(),
                                                  modelValue: unref(accountDataLocal).lastName,
                                                  "onUpdate:modelValue": ($event) => unref(accountDataLocal).lastName = $event,
                                                  placeholder: "Doe",
                                                  label: "Last Name"
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextField, {
                                                    id: ("useId" in _ctx ? _ctx.useId : unref(useId))(),
                                                    modelValue: unref(accountDataLocal).lastName,
                                                    "onUpdate:modelValue": ($event) => unref(accountDataLocal).lastName = $event,
                                                    placeholder: "Doe",
                                                    label: "Last Name"
                                                  }, null, 8, ["id", "modelValue", "onUpdate:modelValue"])
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
                                                _push8(ssrRenderComponent(VTextField, {
                                                  id: ("useId" in _ctx ? _ctx.useId : unref(useId))(),
                                                  modelValue: unref(accountDataLocal).email,
                                                  "onUpdate:modelValue": ($event) => unref(accountDataLocal).email = $event,
                                                  label: "E-mail",
                                                  placeholder: "johndoe@gmail.com",
                                                  type: "email"
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextField, {
                                                    id: ("useId" in _ctx ? _ctx.useId : unref(useId))(),
                                                    modelValue: unref(accountDataLocal).email,
                                                    "onUpdate:modelValue": ($event) => unref(accountDataLocal).email = $event,
                                                    label: "E-mail",
                                                    placeholder: "johndoe@gmail.com",
                                                    type: "email"
                                                  }, null, 8, ["id", "modelValue", "onUpdate:modelValue"])
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
                                                _push8(ssrRenderComponent(VTextField, {
                                                  id: ("useId" in _ctx ? _ctx.useId : unref(useId))(),
                                                  modelValue: unref(accountDataLocal).org,
                                                  "onUpdate:modelValue": ($event) => unref(accountDataLocal).org = $event,
                                                  label: "Organization",
                                                  placeholder: "ThemeSelection"
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextField, {
                                                    id: ("useId" in _ctx ? _ctx.useId : unref(useId))(),
                                                    modelValue: unref(accountDataLocal).org,
                                                    "onUpdate:modelValue": ($event) => unref(accountDataLocal).org = $event,
                                                    label: "Organization",
                                                    placeholder: "ThemeSelection"
                                                  }, null, 8, ["id", "modelValue", "onUpdate:modelValue"])
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
                                                _push8(ssrRenderComponent(VTextField, {
                                                  id: ("useId" in _ctx ? _ctx.useId : unref(useId))(),
                                                  modelValue: unref(accountDataLocal).phone,
                                                  "onUpdate:modelValue": ($event) => unref(accountDataLocal).phone = $event,
                                                  label: "Phone Number",
                                                  placeholder: "+1 (917) 543-9876"
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextField, {
                                                    id: ("useId" in _ctx ? _ctx.useId : unref(useId))(),
                                                    modelValue: unref(accountDataLocal).phone,
                                                    "onUpdate:modelValue": ($event) => unref(accountDataLocal).phone = $event,
                                                    label: "Phone Number",
                                                    placeholder: "+1 (917) 543-9876"
                                                  }, null, 8, ["id", "modelValue", "onUpdate:modelValue"])
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
                                                _push8(ssrRenderComponent(VTextField, {
                                                  id: ("useId" in _ctx ? _ctx.useId : unref(useId))(),
                                                  modelValue: unref(accountDataLocal).address,
                                                  "onUpdate:modelValue": ($event) => unref(accountDataLocal).address = $event,
                                                  label: "Address",
                                                  placeholder: "123 Main St, New York, NY 10001"
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextField, {
                                                    id: ("useId" in _ctx ? _ctx.useId : unref(useId))(),
                                                    modelValue: unref(accountDataLocal).address,
                                                    "onUpdate:modelValue": ($event) => unref(accountDataLocal).address = $event,
                                                    label: "Address",
                                                    placeholder: "123 Main St, New York, NY 10001"
                                                  }, null, 8, ["id", "modelValue", "onUpdate:modelValue"])
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
                                                _push8(ssrRenderComponent(VTextField, {
                                                  id: ("useId" in _ctx ? _ctx.useId : unref(useId))(),
                                                  modelValue: unref(accountDataLocal).state,
                                                  "onUpdate:modelValue": ($event) => unref(accountDataLocal).state = $event,
                                                  label: "State",
                                                  placeholder: "New York"
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextField, {
                                                    id: ("useId" in _ctx ? _ctx.useId : unref(useId))(),
                                                    modelValue: unref(accountDataLocal).state,
                                                    "onUpdate:modelValue": ($event) => unref(accountDataLocal).state = $event,
                                                    label: "State",
                                                    placeholder: "New York"
                                                  }, null, 8, ["id", "modelValue", "onUpdate:modelValue"])
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
                                                _push8(ssrRenderComponent(VTextField, {
                                                  id: ("useId" in _ctx ? _ctx.useId : unref(useId))(),
                                                  modelValue: unref(accountDataLocal).zip,
                                                  "onUpdate:modelValue": ($event) => unref(accountDataLocal).zip = $event,
                                                  label: "Zip Code",
                                                  placeholder: "10001"
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextField, {
                                                    id: ("useId" in _ctx ? _ctx.useId : unref(useId))(),
                                                    modelValue: unref(accountDataLocal).zip,
                                                    "onUpdate:modelValue": ($event) => unref(accountDataLocal).zip = $event,
                                                    label: "Zip Code",
                                                    placeholder: "10001"
                                                  }, null, 8, ["id", "modelValue", "onUpdate:modelValue"])
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
                                                  id: ("useId" in _ctx ? _ctx.useId : unref(useId))(),
                                                  modelValue: unref(accountDataLocal).country,
                                                  "onUpdate:modelValue": ($event) => unref(accountDataLocal).country = $event,
                                                  label: "Country",
                                                  items: ["USA", "Canada", "UK", "India", "Australia"],
                                                  placeholder: "Select Country"
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VSelect, {
                                                    id: ("useId" in _ctx ? _ctx.useId : unref(useId))(),
                                                    modelValue: unref(accountDataLocal).country,
                                                    "onUpdate:modelValue": ($event) => unref(accountDataLocal).country = $event,
                                                    label: "Country",
                                                    items: ["USA", "Canada", "UK", "India", "Australia"],
                                                    placeholder: "Select Country"
                                                  }, null, 8, ["id", "modelValue", "onUpdate:modelValue"])
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
                                                  id: ("useId" in _ctx ? _ctx.useId : unref(useId))(),
                                                  modelValue: unref(accountDataLocal).language,
                                                  "onUpdate:modelValue": ($event) => unref(accountDataLocal).language = $event,
                                                  label: "Language",
                                                  placeholder: "Select Language",
                                                  items: ["English", "Spanish", "Arabic", "Hindi", "Urdu"]
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VSelect, {
                                                    id: ("useId" in _ctx ? _ctx.useId : unref(useId))(),
                                                    modelValue: unref(accountDataLocal).language,
                                                    "onUpdate:modelValue": ($event) => unref(accountDataLocal).language = $event,
                                                    label: "Language",
                                                    placeholder: "Select Language",
                                                    items: ["English", "Spanish", "Arabic", "Hindi", "Urdu"]
                                                  }, null, 8, ["id", "modelValue", "onUpdate:modelValue"])
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
                                                  id: ("useId" in _ctx ? _ctx.useId : unref(useId))(),
                                                  modelValue: unref(accountDataLocal).timezone,
                                                  "onUpdate:modelValue": ($event) => unref(accountDataLocal).timezone = $event,
                                                  label: "Timezone",
                                                  placeholder: "Select Timezone",
                                                  items: timezones,
                                                  "menu-props": { maxHeight: 200 }
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VSelect, {
                                                    id: ("useId" in _ctx ? _ctx.useId : unref(useId))(),
                                                    modelValue: unref(accountDataLocal).timezone,
                                                    "onUpdate:modelValue": ($event) => unref(accountDataLocal).timezone = $event,
                                                    label: "Timezone",
                                                    placeholder: "Select Timezone",
                                                    items: timezones,
                                                    "menu-props": { maxHeight: 200 }
                                                  }, null, 8, ["id", "modelValue", "onUpdate:modelValue"])
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
                                                  id: ("useId" in _ctx ? _ctx.useId : unref(useId))(),
                                                  modelValue: unref(accountDataLocal).currency,
                                                  "onUpdate:modelValue": ($event) => unref(accountDataLocal).currency = $event,
                                                  label: "Currency",
                                                  placeholder: "Select Currency",
                                                  items: currencies,
                                                  "menu-props": { maxHeight: 200 }
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VSelect, {
                                                    id: ("useId" in _ctx ? _ctx.useId : unref(useId))(),
                                                    modelValue: unref(accountDataLocal).currency,
                                                    "onUpdate:modelValue": ($event) => unref(accountDataLocal).currency = $event,
                                                    label: "Currency",
                                                    placeholder: "Select Currency",
                                                    items: currencies,
                                                    "menu-props": { maxHeight: 200 }
                                                  }, null, 8, ["id", "modelValue", "onUpdate:modelValue"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, {
                                            cols: "12",
                                            class: "d-flex flex-wrap gap-4"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VBtn, null, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`Save changes`);
                                                    } else {
                                                      return [
                                                        createTextVNode("Save changes")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(VBtn, {
                                                  color: "secondary",
                                                  variant: "tonal",
                                                  type: "reset",
                                                  onClick: resetForm
                                                }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(` Reset `);
                                                    } else {
                                                      return [
                                                        createTextVNode(" Reset ")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VBtn, null, {
                                                    default: withCtx(() => [
                                                      createTextVNode("Save changes")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(VBtn, {
                                                    color: "secondary",
                                                    variant: "tonal",
                                                    type: "reset",
                                                    onClick: withModifiers(resetForm, ["prevent"])
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(" Reset ")
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
                                            createVNode(VCol, {
                                              md: "6",
                                              cols: "12"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VTextField, {
                                                  id: ("useId" in _ctx ? _ctx.useId : unref(useId))(),
                                                  modelValue: unref(accountDataLocal).firstName,
                                                  "onUpdate:modelValue": ($event) => unref(accountDataLocal).firstName = $event,
                                                  placeholder: "John",
                                                  label: "First Name"
                                                }, null, 8, ["id", "modelValue", "onUpdate:modelValue"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              md: "6",
                                              cols: "12"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VTextField, {
                                                  id: ("useId" in _ctx ? _ctx.useId : unref(useId))(),
                                                  modelValue: unref(accountDataLocal).lastName,
                                                  "onUpdate:modelValue": ($event) => unref(accountDataLocal).lastName = $event,
                                                  placeholder: "Doe",
                                                  label: "Last Name"
                                                }, null, 8, ["id", "modelValue", "onUpdate:modelValue"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              cols: "12",
                                              md: "6"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VTextField, {
                                                  id: ("useId" in _ctx ? _ctx.useId : unref(useId))(),
                                                  modelValue: unref(accountDataLocal).email,
                                                  "onUpdate:modelValue": ($event) => unref(accountDataLocal).email = $event,
                                                  label: "E-mail",
                                                  placeholder: "johndoe@gmail.com",
                                                  type: "email"
                                                }, null, 8, ["id", "modelValue", "onUpdate:modelValue"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              cols: "12",
                                              md: "6"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VTextField, {
                                                  id: ("useId" in _ctx ? _ctx.useId : unref(useId))(),
                                                  modelValue: unref(accountDataLocal).org,
                                                  "onUpdate:modelValue": ($event) => unref(accountDataLocal).org = $event,
                                                  label: "Organization",
                                                  placeholder: "ThemeSelection"
                                                }, null, 8, ["id", "modelValue", "onUpdate:modelValue"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              cols: "12",
                                              md: "6"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VTextField, {
                                                  id: ("useId" in _ctx ? _ctx.useId : unref(useId))(),
                                                  modelValue: unref(accountDataLocal).phone,
                                                  "onUpdate:modelValue": ($event) => unref(accountDataLocal).phone = $event,
                                                  label: "Phone Number",
                                                  placeholder: "+1 (917) 543-9876"
                                                }, null, 8, ["id", "modelValue", "onUpdate:modelValue"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              cols: "12",
                                              md: "6"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VTextField, {
                                                  id: ("useId" in _ctx ? _ctx.useId : unref(useId))(),
                                                  modelValue: unref(accountDataLocal).address,
                                                  "onUpdate:modelValue": ($event) => unref(accountDataLocal).address = $event,
                                                  label: "Address",
                                                  placeholder: "123 Main St, New York, NY 10001"
                                                }, null, 8, ["id", "modelValue", "onUpdate:modelValue"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              cols: "12",
                                              md: "6"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VTextField, {
                                                  id: ("useId" in _ctx ? _ctx.useId : unref(useId))(),
                                                  modelValue: unref(accountDataLocal).state,
                                                  "onUpdate:modelValue": ($event) => unref(accountDataLocal).state = $event,
                                                  label: "State",
                                                  placeholder: "New York"
                                                }, null, 8, ["id", "modelValue", "onUpdate:modelValue"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              cols: "12",
                                              md: "6"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VTextField, {
                                                  id: ("useId" in _ctx ? _ctx.useId : unref(useId))(),
                                                  modelValue: unref(accountDataLocal).zip,
                                                  "onUpdate:modelValue": ($event) => unref(accountDataLocal).zip = $event,
                                                  label: "Zip Code",
                                                  placeholder: "10001"
                                                }, null, 8, ["id", "modelValue", "onUpdate:modelValue"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              cols: "12",
                                              md: "6"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VSelect, {
                                                  id: ("useId" in _ctx ? _ctx.useId : unref(useId))(),
                                                  modelValue: unref(accountDataLocal).country,
                                                  "onUpdate:modelValue": ($event) => unref(accountDataLocal).country = $event,
                                                  label: "Country",
                                                  items: ["USA", "Canada", "UK", "India", "Australia"],
                                                  placeholder: "Select Country"
                                                }, null, 8, ["id", "modelValue", "onUpdate:modelValue"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              cols: "12",
                                              md: "6"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VSelect, {
                                                  id: ("useId" in _ctx ? _ctx.useId : unref(useId))(),
                                                  modelValue: unref(accountDataLocal).language,
                                                  "onUpdate:modelValue": ($event) => unref(accountDataLocal).language = $event,
                                                  label: "Language",
                                                  placeholder: "Select Language",
                                                  items: ["English", "Spanish", "Arabic", "Hindi", "Urdu"]
                                                }, null, 8, ["id", "modelValue", "onUpdate:modelValue"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              cols: "12",
                                              md: "6"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VSelect, {
                                                  id: ("useId" in _ctx ? _ctx.useId : unref(useId))(),
                                                  modelValue: unref(accountDataLocal).timezone,
                                                  "onUpdate:modelValue": ($event) => unref(accountDataLocal).timezone = $event,
                                                  label: "Timezone",
                                                  placeholder: "Select Timezone",
                                                  items: timezones,
                                                  "menu-props": { maxHeight: 200 }
                                                }, null, 8, ["id", "modelValue", "onUpdate:modelValue"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              cols: "12",
                                              md: "6"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VSelect, {
                                                  id: ("useId" in _ctx ? _ctx.useId : unref(useId))(),
                                                  modelValue: unref(accountDataLocal).currency,
                                                  "onUpdate:modelValue": ($event) => unref(accountDataLocal).currency = $event,
                                                  label: "Currency",
                                                  placeholder: "Select Currency",
                                                  items: currencies,
                                                  "menu-props": { maxHeight: 200 }
                                                }, null, 8, ["id", "modelValue", "onUpdate:modelValue"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              cols: "12",
                                              class: "d-flex flex-wrap gap-4"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VBtn, null, {
                                                  default: withCtx(() => [
                                                    createTextVNode("Save changes")
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(VBtn, {
                                                  color: "secondary",
                                                  variant: "tonal",
                                                  type: "reset",
                                                  onClick: withModifiers(resetForm, ["prevent"])
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(" Reset ")
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
                                      createVNode(VRow, null, {
                                        default: withCtx(() => [
                                          createVNode(VCol, {
                                            md: "6",
                                            cols: "12"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VTextField, {
                                                id: ("useId" in _ctx ? _ctx.useId : unref(useId))(),
                                                modelValue: unref(accountDataLocal).firstName,
                                                "onUpdate:modelValue": ($event) => unref(accountDataLocal).firstName = $event,
                                                placeholder: "John",
                                                label: "First Name"
                                              }, null, 8, ["id", "modelValue", "onUpdate:modelValue"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, {
                                            md: "6",
                                            cols: "12"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VTextField, {
                                                id: ("useId" in _ctx ? _ctx.useId : unref(useId))(),
                                                modelValue: unref(accountDataLocal).lastName,
                                                "onUpdate:modelValue": ($event) => unref(accountDataLocal).lastName = $event,
                                                placeholder: "Doe",
                                                label: "Last Name"
                                              }, null, 8, ["id", "modelValue", "onUpdate:modelValue"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, {
                                            cols: "12",
                                            md: "6"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VTextField, {
                                                id: ("useId" in _ctx ? _ctx.useId : unref(useId))(),
                                                modelValue: unref(accountDataLocal).email,
                                                "onUpdate:modelValue": ($event) => unref(accountDataLocal).email = $event,
                                                label: "E-mail",
                                                placeholder: "johndoe@gmail.com",
                                                type: "email"
                                              }, null, 8, ["id", "modelValue", "onUpdate:modelValue"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, {
                                            cols: "12",
                                            md: "6"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VTextField, {
                                                id: ("useId" in _ctx ? _ctx.useId : unref(useId))(),
                                                modelValue: unref(accountDataLocal).org,
                                                "onUpdate:modelValue": ($event) => unref(accountDataLocal).org = $event,
                                                label: "Organization",
                                                placeholder: "ThemeSelection"
                                              }, null, 8, ["id", "modelValue", "onUpdate:modelValue"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, {
                                            cols: "12",
                                            md: "6"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VTextField, {
                                                id: ("useId" in _ctx ? _ctx.useId : unref(useId))(),
                                                modelValue: unref(accountDataLocal).phone,
                                                "onUpdate:modelValue": ($event) => unref(accountDataLocal).phone = $event,
                                                label: "Phone Number",
                                                placeholder: "+1 (917) 543-9876"
                                              }, null, 8, ["id", "modelValue", "onUpdate:modelValue"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, {
                                            cols: "12",
                                            md: "6"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VTextField, {
                                                id: ("useId" in _ctx ? _ctx.useId : unref(useId))(),
                                                modelValue: unref(accountDataLocal).address,
                                                "onUpdate:modelValue": ($event) => unref(accountDataLocal).address = $event,
                                                label: "Address",
                                                placeholder: "123 Main St, New York, NY 10001"
                                              }, null, 8, ["id", "modelValue", "onUpdate:modelValue"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, {
                                            cols: "12",
                                            md: "6"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VTextField, {
                                                id: ("useId" in _ctx ? _ctx.useId : unref(useId))(),
                                                modelValue: unref(accountDataLocal).state,
                                                "onUpdate:modelValue": ($event) => unref(accountDataLocal).state = $event,
                                                label: "State",
                                                placeholder: "New York"
                                              }, null, 8, ["id", "modelValue", "onUpdate:modelValue"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, {
                                            cols: "12",
                                            md: "6"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VTextField, {
                                                id: ("useId" in _ctx ? _ctx.useId : unref(useId))(),
                                                modelValue: unref(accountDataLocal).zip,
                                                "onUpdate:modelValue": ($event) => unref(accountDataLocal).zip = $event,
                                                label: "Zip Code",
                                                placeholder: "10001"
                                              }, null, 8, ["id", "modelValue", "onUpdate:modelValue"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, {
                                            cols: "12",
                                            md: "6"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VSelect, {
                                                id: ("useId" in _ctx ? _ctx.useId : unref(useId))(),
                                                modelValue: unref(accountDataLocal).country,
                                                "onUpdate:modelValue": ($event) => unref(accountDataLocal).country = $event,
                                                label: "Country",
                                                items: ["USA", "Canada", "UK", "India", "Australia"],
                                                placeholder: "Select Country"
                                              }, null, 8, ["id", "modelValue", "onUpdate:modelValue"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, {
                                            cols: "12",
                                            md: "6"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VSelect, {
                                                id: ("useId" in _ctx ? _ctx.useId : unref(useId))(),
                                                modelValue: unref(accountDataLocal).language,
                                                "onUpdate:modelValue": ($event) => unref(accountDataLocal).language = $event,
                                                label: "Language",
                                                placeholder: "Select Language",
                                                items: ["English", "Spanish", "Arabic", "Hindi", "Urdu"]
                                              }, null, 8, ["id", "modelValue", "onUpdate:modelValue"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, {
                                            cols: "12",
                                            md: "6"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VSelect, {
                                                id: ("useId" in _ctx ? _ctx.useId : unref(useId))(),
                                                modelValue: unref(accountDataLocal).timezone,
                                                "onUpdate:modelValue": ($event) => unref(accountDataLocal).timezone = $event,
                                                label: "Timezone",
                                                placeholder: "Select Timezone",
                                                items: timezones,
                                                "menu-props": { maxHeight: 200 }
                                              }, null, 8, ["id", "modelValue", "onUpdate:modelValue"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, {
                                            cols: "12",
                                            md: "6"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VSelect, {
                                                id: ("useId" in _ctx ? _ctx.useId : unref(useId))(),
                                                modelValue: unref(accountDataLocal).currency,
                                                "onUpdate:modelValue": ($event) => unref(accountDataLocal).currency = $event,
                                                label: "Currency",
                                                placeholder: "Select Currency",
                                                items: currencies,
                                                "menu-props": { maxHeight: 200 }
                                              }, null, 8, ["id", "modelValue", "onUpdate:modelValue"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, {
                                            cols: "12",
                                            class: "d-flex flex-wrap gap-4"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VBtn, null, {
                                                default: withCtx(() => [
                                                  createTextVNode("Save changes")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(VBtn, {
                                                color: "secondary",
                                                variant: "tonal",
                                                type: "reset",
                                                onClick: withModifiers(resetForm, ["prevent"])
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(" Reset ")
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
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VForm, { class: "mt-6" }, {
                                  default: withCtx(() => [
                                    createVNode(VRow, null, {
                                      default: withCtx(() => [
                                        createVNode(VCol, {
                                          md: "6",
                                          cols: "12"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VTextField, {
                                              id: ("useId" in _ctx ? _ctx.useId : unref(useId))(),
                                              modelValue: unref(accountDataLocal).firstName,
                                              "onUpdate:modelValue": ($event) => unref(accountDataLocal).firstName = $event,
                                              placeholder: "John",
                                              label: "First Name"
                                            }, null, 8, ["id", "modelValue", "onUpdate:modelValue"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, {
                                          md: "6",
                                          cols: "12"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VTextField, {
                                              id: ("useId" in _ctx ? _ctx.useId : unref(useId))(),
                                              modelValue: unref(accountDataLocal).lastName,
                                              "onUpdate:modelValue": ($event) => unref(accountDataLocal).lastName = $event,
                                              placeholder: "Doe",
                                              label: "Last Name"
                                            }, null, 8, ["id", "modelValue", "onUpdate:modelValue"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, {
                                          cols: "12",
                                          md: "6"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VTextField, {
                                              id: ("useId" in _ctx ? _ctx.useId : unref(useId))(),
                                              modelValue: unref(accountDataLocal).email,
                                              "onUpdate:modelValue": ($event) => unref(accountDataLocal).email = $event,
                                              label: "E-mail",
                                              placeholder: "johndoe@gmail.com",
                                              type: "email"
                                            }, null, 8, ["id", "modelValue", "onUpdate:modelValue"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, {
                                          cols: "12",
                                          md: "6"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VTextField, {
                                              id: ("useId" in _ctx ? _ctx.useId : unref(useId))(),
                                              modelValue: unref(accountDataLocal).org,
                                              "onUpdate:modelValue": ($event) => unref(accountDataLocal).org = $event,
                                              label: "Organization",
                                              placeholder: "ThemeSelection"
                                            }, null, 8, ["id", "modelValue", "onUpdate:modelValue"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, {
                                          cols: "12",
                                          md: "6"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VTextField, {
                                              id: ("useId" in _ctx ? _ctx.useId : unref(useId))(),
                                              modelValue: unref(accountDataLocal).phone,
                                              "onUpdate:modelValue": ($event) => unref(accountDataLocal).phone = $event,
                                              label: "Phone Number",
                                              placeholder: "+1 (917) 543-9876"
                                            }, null, 8, ["id", "modelValue", "onUpdate:modelValue"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, {
                                          cols: "12",
                                          md: "6"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VTextField, {
                                              id: ("useId" in _ctx ? _ctx.useId : unref(useId))(),
                                              modelValue: unref(accountDataLocal).address,
                                              "onUpdate:modelValue": ($event) => unref(accountDataLocal).address = $event,
                                              label: "Address",
                                              placeholder: "123 Main St, New York, NY 10001"
                                            }, null, 8, ["id", "modelValue", "onUpdate:modelValue"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, {
                                          cols: "12",
                                          md: "6"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VTextField, {
                                              id: ("useId" in _ctx ? _ctx.useId : unref(useId))(),
                                              modelValue: unref(accountDataLocal).state,
                                              "onUpdate:modelValue": ($event) => unref(accountDataLocal).state = $event,
                                              label: "State",
                                              placeholder: "New York"
                                            }, null, 8, ["id", "modelValue", "onUpdate:modelValue"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, {
                                          cols: "12",
                                          md: "6"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VTextField, {
                                              id: ("useId" in _ctx ? _ctx.useId : unref(useId))(),
                                              modelValue: unref(accountDataLocal).zip,
                                              "onUpdate:modelValue": ($event) => unref(accountDataLocal).zip = $event,
                                              label: "Zip Code",
                                              placeholder: "10001"
                                            }, null, 8, ["id", "modelValue", "onUpdate:modelValue"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, {
                                          cols: "12",
                                          md: "6"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VSelect, {
                                              id: ("useId" in _ctx ? _ctx.useId : unref(useId))(),
                                              modelValue: unref(accountDataLocal).country,
                                              "onUpdate:modelValue": ($event) => unref(accountDataLocal).country = $event,
                                              label: "Country",
                                              items: ["USA", "Canada", "UK", "India", "Australia"],
                                              placeholder: "Select Country"
                                            }, null, 8, ["id", "modelValue", "onUpdate:modelValue"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, {
                                          cols: "12",
                                          md: "6"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VSelect, {
                                              id: ("useId" in _ctx ? _ctx.useId : unref(useId))(),
                                              modelValue: unref(accountDataLocal).language,
                                              "onUpdate:modelValue": ($event) => unref(accountDataLocal).language = $event,
                                              label: "Language",
                                              placeholder: "Select Language",
                                              items: ["English", "Spanish", "Arabic", "Hindi", "Urdu"]
                                            }, null, 8, ["id", "modelValue", "onUpdate:modelValue"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, {
                                          cols: "12",
                                          md: "6"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VSelect, {
                                              id: ("useId" in _ctx ? _ctx.useId : unref(useId))(),
                                              modelValue: unref(accountDataLocal).timezone,
                                              "onUpdate:modelValue": ($event) => unref(accountDataLocal).timezone = $event,
                                              label: "Timezone",
                                              placeholder: "Select Timezone",
                                              items: timezones,
                                              "menu-props": { maxHeight: 200 }
                                            }, null, 8, ["id", "modelValue", "onUpdate:modelValue"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, {
                                          cols: "12",
                                          md: "6"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VSelect, {
                                              id: ("useId" in _ctx ? _ctx.useId : unref(useId))(),
                                              modelValue: unref(accountDataLocal).currency,
                                              "onUpdate:modelValue": ($event) => unref(accountDataLocal).currency = $event,
                                              label: "Currency",
                                              placeholder: "Select Currency",
                                              items: currencies,
                                              "menu-props": { maxHeight: 200 }
                                            }, null, 8, ["id", "modelValue", "onUpdate:modelValue"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, {
                                          cols: "12",
                                          class: "d-flex flex-wrap gap-4"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VBtn, null, {
                                              default: withCtx(() => [
                                                createTextVNode("Save changes")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VBtn, {
                                              color: "secondary",
                                              variant: "tonal",
                                              type: "reset",
                                              onClick: withModifiers(resetForm, ["prevent"])
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(" Reset ")
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
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCardText, { class: "d-flex" }, {
                            default: withCtx(() => [
                              createVNode(VAvatar, {
                                rounded: "lg",
                                size: "100",
                                class: "me-6",
                                image: unref(accountDataLocal).avatarImg
                              }, null, 8, ["image"]),
                              createVNode("form", { class: "d-flex flex-column justify-center gap-5" }, [
                                createVNode("div", { class: "d-flex flex-wrap gap-2" }, [
                                  createVNode(VBtn, {
                                    color: "primary",
                                    onClick: ($event) => {
                                      var _a;
                                      return (_a = unref(refInputEl)) == null ? void 0 : _a.click();
                                    }
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VIcon, {
                                        icon: "bx-cloud-upload",
                                        class: "d-sm-none"
                                      }),
                                      createVNode("span", { class: "d-none d-sm-block" }, "Upload new photo")
                                    ]),
                                    _: 1
                                  }, 8, ["onClick"]),
                                  createVNode("input", {
                                    ref_key: "refInputEl",
                                    ref: refInputEl,
                                    type: "file",
                                    name: "file",
                                    accept: ".jpeg,.png,.jpg,GIF",
                                    hidden: "",
                                    onInput: changeAvatar
                                  }, null, 544),
                                  createVNode(VBtn, {
                                    type: "reset",
                                    color: "error",
                                    variant: "tonal",
                                    onClick: resetAvatar
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("span", { class: "d-none d-sm-block" }, "Reset"),
                                      createVNode(VIcon, {
                                        icon: "bx-refresh",
                                        class: "d-sm-none"
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                createVNode("p", { class: "text-body-1 mb-0" }, " Allowed JPG, GIF or PNG. Max size of 800K ")
                              ])
                            ]),
                            _: 1
                          }),
                          createVNode(VDivider),
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createVNode(VForm, { class: "mt-6" }, {
                                default: withCtx(() => [
                                  createVNode(VRow, null, {
                                    default: withCtx(() => [
                                      createVNode(VCol, {
                                        md: "6",
                                        cols: "12"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            id: ("useId" in _ctx ? _ctx.useId : unref(useId))(),
                                            modelValue: unref(accountDataLocal).firstName,
                                            "onUpdate:modelValue": ($event) => unref(accountDataLocal).firstName = $event,
                                            placeholder: "John",
                                            label: "First Name"
                                          }, null, 8, ["id", "modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        md: "6",
                                        cols: "12"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            id: ("useId" in _ctx ? _ctx.useId : unref(useId))(),
                                            modelValue: unref(accountDataLocal).lastName,
                                            "onUpdate:modelValue": ($event) => unref(accountDataLocal).lastName = $event,
                                            placeholder: "Doe",
                                            label: "Last Name"
                                          }, null, 8, ["id", "modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        md: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            id: ("useId" in _ctx ? _ctx.useId : unref(useId))(),
                                            modelValue: unref(accountDataLocal).email,
                                            "onUpdate:modelValue": ($event) => unref(accountDataLocal).email = $event,
                                            label: "E-mail",
                                            placeholder: "johndoe@gmail.com",
                                            type: "email"
                                          }, null, 8, ["id", "modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        md: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            id: ("useId" in _ctx ? _ctx.useId : unref(useId))(),
                                            modelValue: unref(accountDataLocal).org,
                                            "onUpdate:modelValue": ($event) => unref(accountDataLocal).org = $event,
                                            label: "Organization",
                                            placeholder: "ThemeSelection"
                                          }, null, 8, ["id", "modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        md: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            id: ("useId" in _ctx ? _ctx.useId : unref(useId))(),
                                            modelValue: unref(accountDataLocal).phone,
                                            "onUpdate:modelValue": ($event) => unref(accountDataLocal).phone = $event,
                                            label: "Phone Number",
                                            placeholder: "+1 (917) 543-9876"
                                          }, null, 8, ["id", "modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        md: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            id: ("useId" in _ctx ? _ctx.useId : unref(useId))(),
                                            modelValue: unref(accountDataLocal).address,
                                            "onUpdate:modelValue": ($event) => unref(accountDataLocal).address = $event,
                                            label: "Address",
                                            placeholder: "123 Main St, New York, NY 10001"
                                          }, null, 8, ["id", "modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        md: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            id: ("useId" in _ctx ? _ctx.useId : unref(useId))(),
                                            modelValue: unref(accountDataLocal).state,
                                            "onUpdate:modelValue": ($event) => unref(accountDataLocal).state = $event,
                                            label: "State",
                                            placeholder: "New York"
                                          }, null, 8, ["id", "modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        md: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            id: ("useId" in _ctx ? _ctx.useId : unref(useId))(),
                                            modelValue: unref(accountDataLocal).zip,
                                            "onUpdate:modelValue": ($event) => unref(accountDataLocal).zip = $event,
                                            label: "Zip Code",
                                            placeholder: "10001"
                                          }, null, 8, ["id", "modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        md: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VSelect, {
                                            id: ("useId" in _ctx ? _ctx.useId : unref(useId))(),
                                            modelValue: unref(accountDataLocal).country,
                                            "onUpdate:modelValue": ($event) => unref(accountDataLocal).country = $event,
                                            label: "Country",
                                            items: ["USA", "Canada", "UK", "India", "Australia"],
                                            placeholder: "Select Country"
                                          }, null, 8, ["id", "modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        md: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VSelect, {
                                            id: ("useId" in _ctx ? _ctx.useId : unref(useId))(),
                                            modelValue: unref(accountDataLocal).language,
                                            "onUpdate:modelValue": ($event) => unref(accountDataLocal).language = $event,
                                            label: "Language",
                                            placeholder: "Select Language",
                                            items: ["English", "Spanish", "Arabic", "Hindi", "Urdu"]
                                          }, null, 8, ["id", "modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        md: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VSelect, {
                                            id: ("useId" in _ctx ? _ctx.useId : unref(useId))(),
                                            modelValue: unref(accountDataLocal).timezone,
                                            "onUpdate:modelValue": ($event) => unref(accountDataLocal).timezone = $event,
                                            label: "Timezone",
                                            placeholder: "Select Timezone",
                                            items: timezones,
                                            "menu-props": { maxHeight: 200 }
                                          }, null, 8, ["id", "modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        md: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VSelect, {
                                            id: ("useId" in _ctx ? _ctx.useId : unref(useId))(),
                                            modelValue: unref(accountDataLocal).currency,
                                            "onUpdate:modelValue": ($event) => unref(accountDataLocal).currency = $event,
                                            label: "Currency",
                                            placeholder: "Select Currency",
                                            items: currencies,
                                            "menu-props": { maxHeight: 200 }
                                          }, null, 8, ["id", "modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        class: "d-flex flex-wrap gap-4"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VBtn, null, {
                                            default: withCtx(() => [
                                              createTextVNode("Save changes")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VBtn, {
                                            color: "secondary",
                                            variant: "tonal",
                                            type: "reset",
                                            onClick: withModifiers(resetForm, ["prevent"])
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" Reset ")
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
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCard, { title: "Account Details" }, {
                      default: withCtx(() => [
                        createVNode(VCardText, { class: "d-flex" }, {
                          default: withCtx(() => [
                            createVNode(VAvatar, {
                              rounded: "lg",
                              size: "100",
                              class: "me-6",
                              image: unref(accountDataLocal).avatarImg
                            }, null, 8, ["image"]),
                            createVNode("form", { class: "d-flex flex-column justify-center gap-5" }, [
                              createVNode("div", { class: "d-flex flex-wrap gap-2" }, [
                                createVNode(VBtn, {
                                  color: "primary",
                                  onClick: ($event) => {
                                    var _a;
                                    return (_a = unref(refInputEl)) == null ? void 0 : _a.click();
                                  }
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VIcon, {
                                      icon: "bx-cloud-upload",
                                      class: "d-sm-none"
                                    }),
                                    createVNode("span", { class: "d-none d-sm-block" }, "Upload new photo")
                                  ]),
                                  _: 1
                                }, 8, ["onClick"]),
                                createVNode("input", {
                                  ref_key: "refInputEl",
                                  ref: refInputEl,
                                  type: "file",
                                  name: "file",
                                  accept: ".jpeg,.png,.jpg,GIF",
                                  hidden: "",
                                  onInput: changeAvatar
                                }, null, 544),
                                createVNode(VBtn, {
                                  type: "reset",
                                  color: "error",
                                  variant: "tonal",
                                  onClick: resetAvatar
                                }, {
                                  default: withCtx(() => [
                                    createVNode("span", { class: "d-none d-sm-block" }, "Reset"),
                                    createVNode(VIcon, {
                                      icon: "bx-refresh",
                                      class: "d-sm-none"
                                    })
                                  ]),
                                  _: 1
                                })
                              ]),
                              createVNode("p", { class: "text-body-1 mb-0" }, " Allowed JPG, GIF or PNG. Max size of 800K ")
                            ])
                          ]),
                          _: 1
                        }),
                        createVNode(VDivider),
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createVNode(VForm, { class: "mt-6" }, {
                              default: withCtx(() => [
                                createVNode(VRow, null, {
                                  default: withCtx(() => [
                                    createVNode(VCol, {
                                      md: "6",
                                      cols: "12"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VTextField, {
                                          id: ("useId" in _ctx ? _ctx.useId : unref(useId))(),
                                          modelValue: unref(accountDataLocal).firstName,
                                          "onUpdate:modelValue": ($event) => unref(accountDataLocal).firstName = $event,
                                          placeholder: "John",
                                          label: "First Name"
                                        }, null, 8, ["id", "modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      md: "6",
                                      cols: "12"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VTextField, {
                                          id: ("useId" in _ctx ? _ctx.useId : unref(useId))(),
                                          modelValue: unref(accountDataLocal).lastName,
                                          "onUpdate:modelValue": ($event) => unref(accountDataLocal).lastName = $event,
                                          placeholder: "Doe",
                                          label: "Last Name"
                                        }, null, 8, ["id", "modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      md: "6"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VTextField, {
                                          id: ("useId" in _ctx ? _ctx.useId : unref(useId))(),
                                          modelValue: unref(accountDataLocal).email,
                                          "onUpdate:modelValue": ($event) => unref(accountDataLocal).email = $event,
                                          label: "E-mail",
                                          placeholder: "johndoe@gmail.com",
                                          type: "email"
                                        }, null, 8, ["id", "modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      md: "6"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VTextField, {
                                          id: ("useId" in _ctx ? _ctx.useId : unref(useId))(),
                                          modelValue: unref(accountDataLocal).org,
                                          "onUpdate:modelValue": ($event) => unref(accountDataLocal).org = $event,
                                          label: "Organization",
                                          placeholder: "ThemeSelection"
                                        }, null, 8, ["id", "modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      md: "6"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VTextField, {
                                          id: ("useId" in _ctx ? _ctx.useId : unref(useId))(),
                                          modelValue: unref(accountDataLocal).phone,
                                          "onUpdate:modelValue": ($event) => unref(accountDataLocal).phone = $event,
                                          label: "Phone Number",
                                          placeholder: "+1 (917) 543-9876"
                                        }, null, 8, ["id", "modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      md: "6"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VTextField, {
                                          id: ("useId" in _ctx ? _ctx.useId : unref(useId))(),
                                          modelValue: unref(accountDataLocal).address,
                                          "onUpdate:modelValue": ($event) => unref(accountDataLocal).address = $event,
                                          label: "Address",
                                          placeholder: "123 Main St, New York, NY 10001"
                                        }, null, 8, ["id", "modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      md: "6"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VTextField, {
                                          id: ("useId" in _ctx ? _ctx.useId : unref(useId))(),
                                          modelValue: unref(accountDataLocal).state,
                                          "onUpdate:modelValue": ($event) => unref(accountDataLocal).state = $event,
                                          label: "State",
                                          placeholder: "New York"
                                        }, null, 8, ["id", "modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      md: "6"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VTextField, {
                                          id: ("useId" in _ctx ? _ctx.useId : unref(useId))(),
                                          modelValue: unref(accountDataLocal).zip,
                                          "onUpdate:modelValue": ($event) => unref(accountDataLocal).zip = $event,
                                          label: "Zip Code",
                                          placeholder: "10001"
                                        }, null, 8, ["id", "modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      md: "6"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VSelect, {
                                          id: ("useId" in _ctx ? _ctx.useId : unref(useId))(),
                                          modelValue: unref(accountDataLocal).country,
                                          "onUpdate:modelValue": ($event) => unref(accountDataLocal).country = $event,
                                          label: "Country",
                                          items: ["USA", "Canada", "UK", "India", "Australia"],
                                          placeholder: "Select Country"
                                        }, null, 8, ["id", "modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      md: "6"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VSelect, {
                                          id: ("useId" in _ctx ? _ctx.useId : unref(useId))(),
                                          modelValue: unref(accountDataLocal).language,
                                          "onUpdate:modelValue": ($event) => unref(accountDataLocal).language = $event,
                                          label: "Language",
                                          placeholder: "Select Language",
                                          items: ["English", "Spanish", "Arabic", "Hindi", "Urdu"]
                                        }, null, 8, ["id", "modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      md: "6"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VSelect, {
                                          id: ("useId" in _ctx ? _ctx.useId : unref(useId))(),
                                          modelValue: unref(accountDataLocal).timezone,
                                          "onUpdate:modelValue": ($event) => unref(accountDataLocal).timezone = $event,
                                          label: "Timezone",
                                          placeholder: "Select Timezone",
                                          items: timezones,
                                          "menu-props": { maxHeight: 200 }
                                        }, null, 8, ["id", "modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      md: "6"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VSelect, {
                                          id: ("useId" in _ctx ? _ctx.useId : unref(useId))(),
                                          modelValue: unref(accountDataLocal).currency,
                                          "onUpdate:modelValue": ($event) => unref(accountDataLocal).currency = $event,
                                          label: "Currency",
                                          placeholder: "Select Currency",
                                          items: currencies,
                                          "menu-props": { maxHeight: 200 }
                                        }, null, 8, ["id", "modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      class: "d-flex flex-wrap gap-4"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VBtn, null, {
                                          default: withCtx(() => [
                                            createTextVNode("Save changes")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VBtn, {
                                          color: "secondary",
                                          variant: "tonal",
                                          type: "reset",
                                          onClick: withModifiers(resetForm, ["prevent"])
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Reset ")
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
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, { cols: "12" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCard, { title: "Deactivate Account" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCardText, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div${_scopeId4}>`);
                              _push5(ssrRenderComponent(VCheckbox, {
                                id: ("useId" in _ctx ? _ctx.useId : unref(useId))(),
                                modelValue: unref(isAccountDeactivated),
                                "onUpdate:modelValue": ($event) => isRef(isAccountDeactivated) ? isAccountDeactivated.value = $event : null,
                                label: "I confirm my account deactivation"
                              }, null, _parent5, _scopeId4));
                              _push5(`</div>`);
                              _push5(ssrRenderComponent(VBtn, {
                                disabled: !unref(isAccountDeactivated),
                                color: "error",
                                class: "mt-3"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` Deactivate Account `);
                                  } else {
                                    return [
                                      createTextVNode(" Deactivate Account ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode("div", null, [
                                  createVNode(VCheckbox, {
                                    id: ("useId" in _ctx ? _ctx.useId : unref(useId))(),
                                    modelValue: unref(isAccountDeactivated),
                                    "onUpdate:modelValue": ($event) => isRef(isAccountDeactivated) ? isAccountDeactivated.value = $event : null,
                                    label: "I confirm my account deactivation"
                                  }, null, 8, ["id", "modelValue", "onUpdate:modelValue"])
                                ]),
                                createVNode(VBtn, {
                                  disabled: !unref(isAccountDeactivated),
                                  color: "error",
                                  class: "mt-3"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Deactivate Account ")
                                  ]),
                                  _: 1
                                }, 8, ["disabled"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createVNode("div", null, [
                                createVNode(VCheckbox, {
                                  id: ("useId" in _ctx ? _ctx.useId : unref(useId))(),
                                  modelValue: unref(isAccountDeactivated),
                                  "onUpdate:modelValue": ($event) => isRef(isAccountDeactivated) ? isAccountDeactivated.value = $event : null,
                                  label: "I confirm my account deactivation"
                                }, null, 8, ["id", "modelValue", "onUpdate:modelValue"])
                              ]),
                              createVNode(VBtn, {
                                disabled: !unref(isAccountDeactivated),
                                color: "error",
                                class: "mt-3"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Deactivate Account ")
                                ]),
                                _: 1
                              }, 8, ["disabled"])
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
                    createVNode(VCard, { title: "Deactivate Account" }, {
                      default: withCtx(() => [
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createVNode("div", null, [
                              createVNode(VCheckbox, {
                                id: ("useId" in _ctx ? _ctx.useId : unref(useId))(),
                                modelValue: unref(isAccountDeactivated),
                                "onUpdate:modelValue": ($event) => isRef(isAccountDeactivated) ? isAccountDeactivated.value = $event : null,
                                label: "I confirm my account deactivation"
                              }, null, 8, ["id", "modelValue", "onUpdate:modelValue"])
                            ]),
                            createVNode(VBtn, {
                              disabled: !unref(isAccountDeactivated),
                              color: "error",
                              class: "mt-3"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Deactivate Account ")
                              ]),
                              _: 1
                            }, 8, ["disabled"])
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
                  createVNode(VCard, { title: "Account Details" }, {
                    default: withCtx(() => [
                      createVNode(VCardText, { class: "d-flex" }, {
                        default: withCtx(() => [
                          createVNode(VAvatar, {
                            rounded: "lg",
                            size: "100",
                            class: "me-6",
                            image: unref(accountDataLocal).avatarImg
                          }, null, 8, ["image"]),
                          createVNode("form", { class: "d-flex flex-column justify-center gap-5" }, [
                            createVNode("div", { class: "d-flex flex-wrap gap-2" }, [
                              createVNode(VBtn, {
                                color: "primary",
                                onClick: ($event) => {
                                  var _a;
                                  return (_a = unref(refInputEl)) == null ? void 0 : _a.click();
                                }
                              }, {
                                default: withCtx(() => [
                                  createVNode(VIcon, {
                                    icon: "bx-cloud-upload",
                                    class: "d-sm-none"
                                  }),
                                  createVNode("span", { class: "d-none d-sm-block" }, "Upload new photo")
                                ]),
                                _: 1
                              }, 8, ["onClick"]),
                              createVNode("input", {
                                ref_key: "refInputEl",
                                ref: refInputEl,
                                type: "file",
                                name: "file",
                                accept: ".jpeg,.png,.jpg,GIF",
                                hidden: "",
                                onInput: changeAvatar
                              }, null, 544),
                              createVNode(VBtn, {
                                type: "reset",
                                color: "error",
                                variant: "tonal",
                                onClick: resetAvatar
                              }, {
                                default: withCtx(() => [
                                  createVNode("span", { class: "d-none d-sm-block" }, "Reset"),
                                  createVNode(VIcon, {
                                    icon: "bx-refresh",
                                    class: "d-sm-none"
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            createVNode("p", { class: "text-body-1 mb-0" }, " Allowed JPG, GIF or PNG. Max size of 800K ")
                          ])
                        ]),
                        _: 1
                      }),
                      createVNode(VDivider),
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createVNode(VForm, { class: "mt-6" }, {
                            default: withCtx(() => [
                              createVNode(VRow, null, {
                                default: withCtx(() => [
                                  createVNode(VCol, {
                                    md: "6",
                                    cols: "12"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        id: ("useId" in _ctx ? _ctx.useId : unref(useId))(),
                                        modelValue: unref(accountDataLocal).firstName,
                                        "onUpdate:modelValue": ($event) => unref(accountDataLocal).firstName = $event,
                                        placeholder: "John",
                                        label: "First Name"
                                      }, null, 8, ["id", "modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    md: "6",
                                    cols: "12"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        id: ("useId" in _ctx ? _ctx.useId : unref(useId))(),
                                        modelValue: unref(accountDataLocal).lastName,
                                        "onUpdate:modelValue": ($event) => unref(accountDataLocal).lastName = $event,
                                        placeholder: "Doe",
                                        label: "Last Name"
                                      }, null, 8, ["id", "modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    md: "6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        id: ("useId" in _ctx ? _ctx.useId : unref(useId))(),
                                        modelValue: unref(accountDataLocal).email,
                                        "onUpdate:modelValue": ($event) => unref(accountDataLocal).email = $event,
                                        label: "E-mail",
                                        placeholder: "johndoe@gmail.com",
                                        type: "email"
                                      }, null, 8, ["id", "modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    md: "6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        id: ("useId" in _ctx ? _ctx.useId : unref(useId))(),
                                        modelValue: unref(accountDataLocal).org,
                                        "onUpdate:modelValue": ($event) => unref(accountDataLocal).org = $event,
                                        label: "Organization",
                                        placeholder: "ThemeSelection"
                                      }, null, 8, ["id", "modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    md: "6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        id: ("useId" in _ctx ? _ctx.useId : unref(useId))(),
                                        modelValue: unref(accountDataLocal).phone,
                                        "onUpdate:modelValue": ($event) => unref(accountDataLocal).phone = $event,
                                        label: "Phone Number",
                                        placeholder: "+1 (917) 543-9876"
                                      }, null, 8, ["id", "modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    md: "6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        id: ("useId" in _ctx ? _ctx.useId : unref(useId))(),
                                        modelValue: unref(accountDataLocal).address,
                                        "onUpdate:modelValue": ($event) => unref(accountDataLocal).address = $event,
                                        label: "Address",
                                        placeholder: "123 Main St, New York, NY 10001"
                                      }, null, 8, ["id", "modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    md: "6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        id: ("useId" in _ctx ? _ctx.useId : unref(useId))(),
                                        modelValue: unref(accountDataLocal).state,
                                        "onUpdate:modelValue": ($event) => unref(accountDataLocal).state = $event,
                                        label: "State",
                                        placeholder: "New York"
                                      }, null, 8, ["id", "modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    md: "6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        id: ("useId" in _ctx ? _ctx.useId : unref(useId))(),
                                        modelValue: unref(accountDataLocal).zip,
                                        "onUpdate:modelValue": ($event) => unref(accountDataLocal).zip = $event,
                                        label: "Zip Code",
                                        placeholder: "10001"
                                      }, null, 8, ["id", "modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    md: "6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VSelect, {
                                        id: ("useId" in _ctx ? _ctx.useId : unref(useId))(),
                                        modelValue: unref(accountDataLocal).country,
                                        "onUpdate:modelValue": ($event) => unref(accountDataLocal).country = $event,
                                        label: "Country",
                                        items: ["USA", "Canada", "UK", "India", "Australia"],
                                        placeholder: "Select Country"
                                      }, null, 8, ["id", "modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    md: "6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VSelect, {
                                        id: ("useId" in _ctx ? _ctx.useId : unref(useId))(),
                                        modelValue: unref(accountDataLocal).language,
                                        "onUpdate:modelValue": ($event) => unref(accountDataLocal).language = $event,
                                        label: "Language",
                                        placeholder: "Select Language",
                                        items: ["English", "Spanish", "Arabic", "Hindi", "Urdu"]
                                      }, null, 8, ["id", "modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    md: "6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VSelect, {
                                        id: ("useId" in _ctx ? _ctx.useId : unref(useId))(),
                                        modelValue: unref(accountDataLocal).timezone,
                                        "onUpdate:modelValue": ($event) => unref(accountDataLocal).timezone = $event,
                                        label: "Timezone",
                                        placeholder: "Select Timezone",
                                        items: timezones,
                                        "menu-props": { maxHeight: 200 }
                                      }, null, 8, ["id", "modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    md: "6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VSelect, {
                                        id: ("useId" in _ctx ? _ctx.useId : unref(useId))(),
                                        modelValue: unref(accountDataLocal).currency,
                                        "onUpdate:modelValue": ($event) => unref(accountDataLocal).currency = $event,
                                        label: "Currency",
                                        placeholder: "Select Currency",
                                        items: currencies,
                                        "menu-props": { maxHeight: 200 }
                                      }, null, 8, ["id", "modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    class: "d-flex flex-wrap gap-4"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VBtn, null, {
                                        default: withCtx(() => [
                                          createTextVNode("Save changes")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VBtn, {
                                        color: "secondary",
                                        variant: "tonal",
                                        type: "reset",
                                        onClick: withModifiers(resetForm, ["prevent"])
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Reset ")
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
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(VCol, { cols: "12" }, {
                default: withCtx(() => [
                  createVNode(VCard, { title: "Deactivate Account" }, {
                    default: withCtx(() => [
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createVNode("div", null, [
                            createVNode(VCheckbox, {
                              id: ("useId" in _ctx ? _ctx.useId : unref(useId))(),
                              modelValue: unref(isAccountDeactivated),
                              "onUpdate:modelValue": ($event) => isRef(isAccountDeactivated) ? isAccountDeactivated.value = $event : null,
                              label: "I confirm my account deactivation"
                            }, null, 8, ["id", "modelValue", "onUpdate:modelValue"])
                          ]),
                          createVNode(VBtn, {
                            disabled: !unref(isAccountDeactivated),
                            color: "error",
                            class: "mt-3"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Deactivate Account ")
                            ]),
                            _: 1
                          }, 8, ["disabled"])
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
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("views/pages/account-settings/AccountSettingsAccount.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  __name: "AccountSettingsNotification",
  __ssrInlineRender: true,
  setup(__props) {
    const recentDevices = ref([
      {
        type: "New for you",
        email: true,
        browser: true,
        app: true
      },
      {
        type: "Account activity",
        email: true,
        browser: true,
        app: true
      },
      {
        type: "A new browser used to sign in",
        email: true,
        browser: true,
        app: false
      },
      {
        type: "A new device is linked",
        email: true,
        browser: false,
        app: false
      }
    ]);
    const selectedNotification = ref("Only when I'm online");
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VCard, mergeProps({ title: "Recent Devices" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCardText, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` We need permission from your browser to show notifications. <a href="javascript:void(0)" data-v-cb914344${_scopeId2}>Request Permission</a>`);
                } else {
                  return [
                    createTextVNode(" We need permission from your browser to show notifications. "),
                    createVNode("a", { href: "javascript:void(0)" }, "Request Permission")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VTable, { class: "text-no-wrap" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<thead data-v-cb914344${_scopeId2}><tr data-v-cb914344${_scopeId2}><th scope="col" data-v-cb914344${_scopeId2}> Type </th><th scope="col" data-v-cb914344${_scopeId2}> EMAIL </th><th scope="col" data-v-cb914344${_scopeId2}> BROWSER </th><th scope="col" data-v-cb914344${_scopeId2}> App </th></tr></thead><tbody data-v-cb914344${_scopeId2}><!--[-->`);
                  ssrRenderList(unref(recentDevices), (device) => {
                    _push3(`<tr data-v-cb914344${_scopeId2}><td data-v-cb914344${_scopeId2}>${ssrInterpolate(device.type)}</td><td data-v-cb914344${_scopeId2}>`);
                    _push3(ssrRenderComponent(VCheckbox, {
                      id: ("useId" in _ctx ? _ctx.useId : unref(useId))(),
                      modelValue: device.email,
                      "onUpdate:modelValue": ($event) => device.email = $event
                    }, null, _parent3, _scopeId2));
                    _push3(`</td><td data-v-cb914344${_scopeId2}>`);
                    _push3(ssrRenderComponent(VCheckbox, {
                      id: ("useId" in _ctx ? _ctx.useId : unref(useId))(),
                      modelValue: device.browser,
                      "onUpdate:modelValue": ($event) => device.browser = $event
                    }, null, _parent3, _scopeId2));
                    _push3(`</td><td data-v-cb914344${_scopeId2}>`);
                    _push3(ssrRenderComponent(VCheckbox, {
                      id: ("useId" in _ctx ? _ctx.useId : unref(useId))(),
                      modelValue: device.app,
                      "onUpdate:modelValue": ($event) => device.app = $event
                    }, null, _parent3, _scopeId2));
                    _push3(`</td></tr>`);
                  });
                  _push3(`<!--]--></tbody>`);
                } else {
                  return [
                    createVNode("thead", null, [
                      createVNode("tr", null, [
                        createVNode("th", { scope: "col" }, " Type "),
                        createVNode("th", { scope: "col" }, " EMAIL "),
                        createVNode("th", { scope: "col" }, " BROWSER "),
                        createVNode("th", { scope: "col" }, " App ")
                      ])
                    ]),
                    createVNode("tbody", null, [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(recentDevices), (device) => {
                        return openBlock(), createBlock("tr", {
                          key: device.type
                        }, [
                          createVNode("td", null, toDisplayString(device.type), 1),
                          createVNode("td", null, [
                            createVNode(VCheckbox, {
                              id: ("useId" in _ctx ? _ctx.useId : unref(useId))(),
                              modelValue: device.email,
                              "onUpdate:modelValue": ($event) => device.email = $event
                            }, null, 8, ["id", "modelValue", "onUpdate:modelValue"])
                          ]),
                          createVNode("td", null, [
                            createVNode(VCheckbox, {
                              id: ("useId" in _ctx ? _ctx.useId : unref(useId))(),
                              modelValue: device.browser,
                              "onUpdate:modelValue": ($event) => device.browser = $event
                            }, null, 8, ["id", "modelValue", "onUpdate:modelValue"])
                          ]),
                          createVNode("td", null, [
                            createVNode(VCheckbox, {
                              id: ("useId" in _ctx ? _ctx.useId : unref(useId))(),
                              modelValue: device.app,
                              "onUpdate:modelValue": ($event) => device.app = $event
                            }, null, 8, ["id", "modelValue", "onUpdate:modelValue"])
                          ])
                        ]);
                      }), 128))
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VDivider, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCardText, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VForm, { onSubmit: () => {
                  } }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p class="text-base font-weight-medium" data-v-cb914344${_scopeId3}> When should we send you notifications? </p>`);
                        _push4(ssrRenderComponent(VRow, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCol, {
                                cols: "12",
                                sm: "6"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VSelect, {
                                      id: ("useId" in _ctx ? _ctx.useId : unref(useId))(),
                                      modelValue: unref(selectedNotification),
                                      "onUpdate:modelValue": ($event) => isRef(selectedNotification) ? selectedNotification.value = $event : null,
                                      mandatory: "",
                                      items: ["Only when I'm online", "Anytime"]
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VSelect, {
                                        id: ("useId" in _ctx ? _ctx.useId : unref(useId))(),
                                        modelValue: unref(selectedNotification),
                                        "onUpdate:modelValue": ($event) => isRef(selectedNotification) ? selectedNotification.value = $event : null,
                                        mandatory: "",
                                        items: ["Only when I'm online", "Anytime"]
                                      }, null, 8, ["id", "modelValue", "onUpdate:modelValue"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VCol, {
                                  cols: "12",
                                  sm: "6"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VSelect, {
                                      id: ("useId" in _ctx ? _ctx.useId : unref(useId))(),
                                      modelValue: unref(selectedNotification),
                                      "onUpdate:modelValue": ($event) => isRef(selectedNotification) ? selectedNotification.value = $event : null,
                                      mandatory: "",
                                      items: ["Only when I'm online", "Anytime"]
                                    }, null, 8, ["id", "modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<div class="d-flex flex-wrap gap-4 mt-4" data-v-cb914344${_scopeId3}>`);
                        _push4(ssrRenderComponent(VBtn, { type: "submit" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Save Changes `);
                            } else {
                              return [
                                createTextVNode(" Save Changes ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VBtn, {
                          color: "secondary",
                          variant: "tonal",
                          type: "reset"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Reset `);
                            } else {
                              return [
                                createTextVNode(" Reset ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("p", { class: "text-base font-weight-medium" }, " When should we send you notifications? "),
                          createVNode(VRow, null, {
                            default: withCtx(() => [
                              createVNode(VCol, {
                                cols: "12",
                                sm: "6"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VSelect, {
                                    id: ("useId" in _ctx ? _ctx.useId : unref(useId))(),
                                    modelValue: unref(selectedNotification),
                                    "onUpdate:modelValue": ($event) => isRef(selectedNotification) ? selectedNotification.value = $event : null,
                                    mandatory: "",
                                    items: ["Only when I'm online", "Anytime"]
                                  }, null, 8, ["id", "modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode("div", { class: "d-flex flex-wrap gap-4 mt-4" }, [
                            createVNode(VBtn, { type: "submit" }, {
                              default: withCtx(() => [
                                createTextVNode(" Save Changes ")
                              ]),
                              _: 1
                            }),
                            createVNode(VBtn, {
                              color: "secondary",
                              variant: "tonal",
                              type: "reset"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Reset ")
                              ]),
                              _: 1
                            })
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VForm, {
                      onSubmit: withModifiers(() => {
                      }, ["prevent"])
                    }, {
                      default: withCtx(() => [
                        createVNode("p", { class: "text-base font-weight-medium" }, " When should we send you notifications? "),
                        createVNode(VRow, null, {
                          default: withCtx(() => [
                            createVNode(VCol, {
                              cols: "12",
                              sm: "6"
                            }, {
                              default: withCtx(() => [
                                createVNode(VSelect, {
                                  id: ("useId" in _ctx ? _ctx.useId : unref(useId))(),
                                  modelValue: unref(selectedNotification),
                                  "onUpdate:modelValue": ($event) => isRef(selectedNotification) ? selectedNotification.value = $event : null,
                                  mandatory: "",
                                  items: ["Only when I'm online", "Anytime"]
                                }, null, 8, ["id", "modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode("div", { class: "d-flex flex-wrap gap-4 mt-4" }, [
                          createVNode(VBtn, { type: "submit" }, {
                            default: withCtx(() => [
                              createTextVNode(" Save Changes ")
                            ]),
                            _: 1
                          }),
                          createVNode(VBtn, {
                            color: "secondary",
                            variant: "tonal",
                            type: "reset"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Reset ")
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
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCardText, null, {
                default: withCtx(() => [
                  createTextVNode(" We need permission from your browser to show notifications. "),
                  createVNode("a", { href: "javascript:void(0)" }, "Request Permission")
                ]),
                _: 1
              }),
              createVNode(VTable, { class: "text-no-wrap" }, {
                default: withCtx(() => [
                  createVNode("thead", null, [
                    createVNode("tr", null, [
                      createVNode("th", { scope: "col" }, " Type "),
                      createVNode("th", { scope: "col" }, " EMAIL "),
                      createVNode("th", { scope: "col" }, " BROWSER "),
                      createVNode("th", { scope: "col" }, " App ")
                    ])
                  ]),
                  createVNode("tbody", null, [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(recentDevices), (device) => {
                      return openBlock(), createBlock("tr", {
                        key: device.type
                      }, [
                        createVNode("td", null, toDisplayString(device.type), 1),
                        createVNode("td", null, [
                          createVNode(VCheckbox, {
                            id: ("useId" in _ctx ? _ctx.useId : unref(useId))(),
                            modelValue: device.email,
                            "onUpdate:modelValue": ($event) => device.email = $event
                          }, null, 8, ["id", "modelValue", "onUpdate:modelValue"])
                        ]),
                        createVNode("td", null, [
                          createVNode(VCheckbox, {
                            id: ("useId" in _ctx ? _ctx.useId : unref(useId))(),
                            modelValue: device.browser,
                            "onUpdate:modelValue": ($event) => device.browser = $event
                          }, null, 8, ["id", "modelValue", "onUpdate:modelValue"])
                        ]),
                        createVNode("td", null, [
                          createVNode(VCheckbox, {
                            id: ("useId" in _ctx ? _ctx.useId : unref(useId))(),
                            modelValue: device.app,
                            "onUpdate:modelValue": ($event) => device.app = $event
                          }, null, 8, ["id", "modelValue", "onUpdate:modelValue"])
                        ])
                      ]);
                    }), 128))
                  ])
                ]),
                _: 1
              }),
              createVNode(VDivider),
              createVNode(VCardText, null, {
                default: withCtx(() => [
                  createVNode(VForm, {
                    onSubmit: withModifiers(() => {
                    }, ["prevent"])
                  }, {
                    default: withCtx(() => [
                      createVNode("p", { class: "text-base font-weight-medium" }, " When should we send you notifications? "),
                      createVNode(VRow, null, {
                        default: withCtx(() => [
                          createVNode(VCol, {
                            cols: "12",
                            sm: "6"
                          }, {
                            default: withCtx(() => [
                              createVNode(VSelect, {
                                id: ("useId" in _ctx ? _ctx.useId : unref(useId))(),
                                modelValue: unref(selectedNotification),
                                "onUpdate:modelValue": ($event) => isRef(selectedNotification) ? selectedNotification.value = $event : null,
                                mandatory: "",
                                items: ["Only when I'm online", "Anytime"]
                              }, null, 8, ["id", "modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode("div", { class: "d-flex flex-wrap gap-4 mt-4" }, [
                        createVNode(VBtn, { type: "submit" }, {
                          default: withCtx(() => [
                            createTextVNode(" Save Changes ")
                          ]),
                          _: 1
                        }),
                        createVNode(VBtn, {
                          color: "secondary",
                          variant: "tonal",
                          type: "reset"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Reset ")
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
      }, _parent));
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("views/pages/account-settings/AccountSettingsNotification.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const AccountSettingsNotification = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-cb914344"]]);
const _sfc_main$1 = {
  __name: "AccountSettingsSecurity",
  __ssrInlineRender: true,
  setup(__props) {
    const isCurrentPasswordVisible = ref(false);
    const isNewPasswordVisible = ref(false);
    const isConfirmPasswordVisible = ref(false);
    const currentPassword = ref("12345678");
    const newPassword = ref("87654321");
    const confirmPassword = ref("87654321");
    const passwordRequirements = [
      "Minimum 8 characters long - the more, the better",
      "At least one lowercase character",
      "At least one number, symbol, or whitespace character"
    ];
    const serverKeys = [
      {
        name: "Server Key 1",
        key: "23eaf7f0-f4f7-495e-8b86-fad3261282ac",
        createdOn: "28 Apr 2021, 18:20 GTM+4:10",
        permission: "Full Access"
      },
      {
        name: "Server Key 2",
        key: "bb98e571-a2e2-4de8-90a9-2e231b5e99",
        createdOn: "12 Feb 2021, 10:30 GTM+2:30",
        permission: "Read Only"
      },
      {
        name: "Server Key 3",
        key: "2e915e59-3105-47f2-8838-6e46bf83b711",
        createdOn: "28 Dec 2020, 12:21 GTM+4:10",
        permission: "Full Access"
      }
    ];
    const recentDevicesHeaders = [
      {
        title: "BROWSER",
        key: "browser"
      },
      {
        title: "DEVICE",
        key: "device"
      },
      {
        title: "LOCATION",
        key: "location"
      },
      {
        title: "RECENT ACTIVITY",
        key: "recentActivity"
      }
    ];
    const recentDevices = [
      {
        browser: "Chrome on Windows",
        device: "HP Spectre 360",
        location: "New York, NY",
        recentActivity: "28 Apr 2022, 18:20",
        deviceIcon: {
          icon: "bxl-windows",
          color: "primary"
        }
      },
      {
        browser: "Chrome on iPhone",
        device: "iPhone 12x",
        location: "Los Angeles, CA",
        recentActivity: "20 Apr 2022, 10:20",
        deviceIcon: {
          icon: "bx-mobile",
          color: "error"
        }
      },
      {
        browser: "Chrome on Android",
        device: "Oneplus 9 Pro",
        location: "San Francisco, CA",
        recentActivity: "16 Apr 2022, 04:20",
        deviceIcon: {
          icon: "bxl-android",
          color: "success"
        }
      },
      {
        browser: "Chrome on macOS",
        device: "Apple iMac",
        location: "New York, NY",
        recentActivity: "28 Apr 2022, 18:20",
        deviceIcon: {
          icon: "bxl-apple",
          color: "secondary"
        }
      },
      {
        browser: "Chrome on Windows",
        device: "HP Spectre 360",
        location: "Los Angeles, CA",
        recentActivity: "20 Apr 2022, 10:20",
        deviceIcon: {
          icon: "bxl-windows",
          color: "primary"
        }
      },
      {
        browser: "Chrome on Android",
        device: "Oneplus 9 Pro",
        location: "San Francisco, CA",
        recentActivity: "16 Apr 2022, 04:20",
        deviceIcon: {
          icon: "bxl-android",
          color: "success"
        }
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VRow, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCol, { cols: "12" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCard, { title: "Change Password" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VForm, null, {
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
                                                _push8(ssrRenderComponent(VTextField, {
                                                  id: ("useId" in _ctx ? _ctx.useId : unref(useId))(),
                                                  modelValue: unref(currentPassword),
                                                  "onUpdate:modelValue": ($event) => isRef(currentPassword) ? currentPassword.value = $event : null,
                                                  type: unref(isCurrentPasswordVisible) ? "text" : "password",
                                                  "append-inner-icon": unref(isCurrentPasswordVisible) ? "bx-hide" : "bx-show",
                                                  label: "Current Password",
                                                  placeholder: "\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7",
                                                  "onClick:appendInner": ($event) => isCurrentPasswordVisible.value = !unref(isCurrentPasswordVisible)
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextField, {
                                                    id: ("useId" in _ctx ? _ctx.useId : unref(useId))(),
                                                    modelValue: unref(currentPassword),
                                                    "onUpdate:modelValue": ($event) => isRef(currentPassword) ? currentPassword.value = $event : null,
                                                    type: unref(isCurrentPasswordVisible) ? "text" : "password",
                                                    "append-inner-icon": unref(isCurrentPasswordVisible) ? "bx-hide" : "bx-show",
                                                    label: "Current Password",
                                                    placeholder: "\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7",
                                                    "onClick:appendInner": ($event) => isCurrentPasswordVisible.value = !unref(isCurrentPasswordVisible)
                                                  }, null, 8, ["id", "modelValue", "onUpdate:modelValue", "type", "append-inner-icon", "onClick:appendInner"])
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
                                                createVNode(VTextField, {
                                                  id: ("useId" in _ctx ? _ctx.useId : unref(useId))(),
                                                  modelValue: unref(currentPassword),
                                                  "onUpdate:modelValue": ($event) => isRef(currentPassword) ? currentPassword.value = $event : null,
                                                  type: unref(isCurrentPasswordVisible) ? "text" : "password",
                                                  "append-inner-icon": unref(isCurrentPasswordVisible) ? "bx-hide" : "bx-show",
                                                  label: "Current Password",
                                                  placeholder: "\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7",
                                                  "onClick:appendInner": ($event) => isCurrentPasswordVisible.value = !unref(isCurrentPasswordVisible)
                                                }, null, 8, ["id", "modelValue", "onUpdate:modelValue", "type", "append-inner-icon", "onClick:appendInner"])
                                              ]),
                                              _: 1
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VRow, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VCol, {
                                            cols: "12",
                                            md: "6"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VTextField, {
                                                  id: ("useId" in _ctx ? _ctx.useId : unref(useId))(),
                                                  modelValue: unref(newPassword),
                                                  "onUpdate:modelValue": ($event) => isRef(newPassword) ? newPassword.value = $event : null,
                                                  type: unref(isNewPasswordVisible) ? "text" : "password",
                                                  "append-inner-icon": unref(isNewPasswordVisible) ? "bx-hide" : "bx-show",
                                                  label: "New Password",
                                                  autocomplete: "on",
                                                  placeholder: "\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7",
                                                  "onClick:appendInner": ($event) => isNewPasswordVisible.value = !unref(isNewPasswordVisible)
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextField, {
                                                    id: ("useId" in _ctx ? _ctx.useId : unref(useId))(),
                                                    modelValue: unref(newPassword),
                                                    "onUpdate:modelValue": ($event) => isRef(newPassword) ? newPassword.value = $event : null,
                                                    type: unref(isNewPasswordVisible) ? "text" : "password",
                                                    "append-inner-icon": unref(isNewPasswordVisible) ? "bx-hide" : "bx-show",
                                                    label: "New Password",
                                                    autocomplete: "on",
                                                    placeholder: "\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7",
                                                    "onClick:appendInner": ($event) => isNewPasswordVisible.value = !unref(isNewPasswordVisible)
                                                  }, null, 8, ["id", "modelValue", "onUpdate:modelValue", "type", "append-inner-icon", "onClick:appendInner"])
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
                                                _push8(ssrRenderComponent(VTextField, {
                                                  id: ("useId" in _ctx ? _ctx.useId : unref(useId))(),
                                                  modelValue: unref(confirmPassword),
                                                  "onUpdate:modelValue": ($event) => isRef(confirmPassword) ? confirmPassword.value = $event : null,
                                                  type: unref(isConfirmPasswordVisible) ? "text" : "password",
                                                  "append-inner-icon": unref(isConfirmPasswordVisible) ? "bx-hide" : "bx-show",
                                                  label: "Confirm New Password",
                                                  placeholder: "\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7",
                                                  "onClick:appendInner": ($event) => isConfirmPasswordVisible.value = !unref(isConfirmPasswordVisible)
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextField, {
                                                    id: ("useId" in _ctx ? _ctx.useId : unref(useId))(),
                                                    modelValue: unref(confirmPassword),
                                                    "onUpdate:modelValue": ($event) => isRef(confirmPassword) ? confirmPassword.value = $event : null,
                                                    type: unref(isConfirmPasswordVisible) ? "text" : "password",
                                                    "append-inner-icon": unref(isConfirmPasswordVisible) ? "bx-hide" : "bx-show",
                                                    label: "Confirm New Password",
                                                    placeholder: "\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7",
                                                    "onClick:appendInner": ($event) => isConfirmPasswordVisible.value = !unref(isConfirmPasswordVisible)
                                                  }, null, 8, ["id", "modelValue", "onUpdate:modelValue", "type", "append-inner-icon", "onClick:appendInner"])
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
                                                createVNode(VTextField, {
                                                  id: ("useId" in _ctx ? _ctx.useId : unref(useId))(),
                                                  modelValue: unref(newPassword),
                                                  "onUpdate:modelValue": ($event) => isRef(newPassword) ? newPassword.value = $event : null,
                                                  type: unref(isNewPasswordVisible) ? "text" : "password",
                                                  "append-inner-icon": unref(isNewPasswordVisible) ? "bx-hide" : "bx-show",
                                                  label: "New Password",
                                                  autocomplete: "on",
                                                  placeholder: "\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7",
                                                  "onClick:appendInner": ($event) => isNewPasswordVisible.value = !unref(isNewPasswordVisible)
                                                }, null, 8, ["id", "modelValue", "onUpdate:modelValue", "type", "append-inner-icon", "onClick:appendInner"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              cols: "12",
                                              md: "6"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VTextField, {
                                                  id: ("useId" in _ctx ? _ctx.useId : unref(useId))(),
                                                  modelValue: unref(confirmPassword),
                                                  "onUpdate:modelValue": ($event) => isRef(confirmPassword) ? confirmPassword.value = $event : null,
                                                  type: unref(isConfirmPasswordVisible) ? "text" : "password",
                                                  "append-inner-icon": unref(isConfirmPasswordVisible) ? "bx-hide" : "bx-show",
                                                  label: "Confirm New Password",
                                                  placeholder: "\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7",
                                                  "onClick:appendInner": ($event) => isConfirmPasswordVisible.value = !unref(isConfirmPasswordVisible)
                                                }, null, 8, ["id", "modelValue", "onUpdate:modelValue", "type", "append-inner-icon", "onClick:appendInner"])
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
                                          createVNode(VCol, {
                                            cols: "12",
                                            md: "6"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VTextField, {
                                                id: ("useId" in _ctx ? _ctx.useId : unref(useId))(),
                                                modelValue: unref(currentPassword),
                                                "onUpdate:modelValue": ($event) => isRef(currentPassword) ? currentPassword.value = $event : null,
                                                type: unref(isCurrentPasswordVisible) ? "text" : "password",
                                                "append-inner-icon": unref(isCurrentPasswordVisible) ? "bx-hide" : "bx-show",
                                                label: "Current Password",
                                                placeholder: "\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7",
                                                "onClick:appendInner": ($event) => isCurrentPasswordVisible.value = !unref(isCurrentPasswordVisible)
                                              }, null, 8, ["id", "modelValue", "onUpdate:modelValue", "type", "append-inner-icon", "onClick:appendInner"])
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
                                                id: ("useId" in _ctx ? _ctx.useId : unref(useId))(),
                                                modelValue: unref(newPassword),
                                                "onUpdate:modelValue": ($event) => isRef(newPassword) ? newPassword.value = $event : null,
                                                type: unref(isNewPasswordVisible) ? "text" : "password",
                                                "append-inner-icon": unref(isNewPasswordVisible) ? "bx-hide" : "bx-show",
                                                label: "New Password",
                                                autocomplete: "on",
                                                placeholder: "\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7",
                                                "onClick:appendInner": ($event) => isNewPasswordVisible.value = !unref(isNewPasswordVisible)
                                              }, null, 8, ["id", "modelValue", "onUpdate:modelValue", "type", "append-inner-icon", "onClick:appendInner"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, {
                                            cols: "12",
                                            md: "6"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VTextField, {
                                                id: ("useId" in _ctx ? _ctx.useId : unref(useId))(),
                                                modelValue: unref(confirmPassword),
                                                "onUpdate:modelValue": ($event) => isRef(confirmPassword) ? confirmPassword.value = $event : null,
                                                type: unref(isConfirmPasswordVisible) ? "text" : "password",
                                                "append-inner-icon": unref(isConfirmPasswordVisible) ? "bx-hide" : "bx-show",
                                                label: "Confirm New Password",
                                                placeholder: "\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7",
                                                "onClick:appendInner": ($event) => isConfirmPasswordVisible.value = !unref(isConfirmPasswordVisible)
                                              }, null, 8, ["id", "modelValue", "onUpdate:modelValue", "type", "append-inner-icon", "onClick:appendInner"])
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
                              _push5(ssrRenderComponent(VCardText, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<p class="text-base font-weight-medium mt-2"${_scopeId5}> Password Requirements: </p><ul class="d-flex flex-column gap-y-3"${_scopeId5}><!--[-->`);
                                    ssrRenderList(passwordRequirements, (item) => {
                                      _push6(`<li class="d-flex"${_scopeId5}><div${_scopeId5}>`);
                                      _push6(ssrRenderComponent(VIcon, {
                                        size: "7",
                                        icon: "bxs-circle",
                                        class: "me-3"
                                      }, null, _parent6, _scopeId5));
                                      _push6(`</div><span class="font-weight-medium"${_scopeId5}>${ssrInterpolate(item)}</span></li>`);
                                    });
                                    _push6(`<!--]--></ul>`);
                                  } else {
                                    return [
                                      createVNode("p", { class: "text-base font-weight-medium mt-2" }, " Password Requirements: "),
                                      createVNode("ul", { class: "d-flex flex-column gap-y-3" }, [
                                        (openBlock(), createBlock(Fragment, null, renderList(passwordRequirements, (item) => {
                                          return createVNode("li", {
                                            key: item,
                                            class: "d-flex"
                                          }, [
                                            createVNode("div", null, [
                                              createVNode(VIcon, {
                                                size: "7",
                                                icon: "bxs-circle",
                                                class: "me-3"
                                              })
                                            ]),
                                            createVNode("span", { class: "font-weight-medium" }, toDisplayString(item), 1)
                                          ]);
                                        }), 64))
                                      ])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VCardText, { class: "d-flex flex-wrap gap-4" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VBtn, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`Save changes`);
                                        } else {
                                          return [
                                            createTextVNode("Save changes")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VBtn, {
                                      type: "reset",
                                      color: "secondary",
                                      variant: "tonal"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(` Reset `);
                                        } else {
                                          return [
                                            createTextVNode(" Reset ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VBtn, null, {
                                        default: withCtx(() => [
                                          createTextVNode("Save changes")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VBtn, {
                                        type: "reset",
                                        color: "secondary",
                                        variant: "tonal"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Reset ")
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
                                createVNode(VCardText, null, {
                                  default: withCtx(() => [
                                    createVNode(VRow, null, {
                                      default: withCtx(() => [
                                        createVNode(VCol, {
                                          cols: "12",
                                          md: "6"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VTextField, {
                                              id: ("useId" in _ctx ? _ctx.useId : unref(useId))(),
                                              modelValue: unref(currentPassword),
                                              "onUpdate:modelValue": ($event) => isRef(currentPassword) ? currentPassword.value = $event : null,
                                              type: unref(isCurrentPasswordVisible) ? "text" : "password",
                                              "append-inner-icon": unref(isCurrentPasswordVisible) ? "bx-hide" : "bx-show",
                                              label: "Current Password",
                                              placeholder: "\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7",
                                              "onClick:appendInner": ($event) => isCurrentPasswordVisible.value = !unref(isCurrentPasswordVisible)
                                            }, null, 8, ["id", "modelValue", "onUpdate:modelValue", "type", "append-inner-icon", "onClick:appendInner"])
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
                                              id: ("useId" in _ctx ? _ctx.useId : unref(useId))(),
                                              modelValue: unref(newPassword),
                                              "onUpdate:modelValue": ($event) => isRef(newPassword) ? newPassword.value = $event : null,
                                              type: unref(isNewPasswordVisible) ? "text" : "password",
                                              "append-inner-icon": unref(isNewPasswordVisible) ? "bx-hide" : "bx-show",
                                              label: "New Password",
                                              autocomplete: "on",
                                              placeholder: "\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7",
                                              "onClick:appendInner": ($event) => isNewPasswordVisible.value = !unref(isNewPasswordVisible)
                                            }, null, 8, ["id", "modelValue", "onUpdate:modelValue", "type", "append-inner-icon", "onClick:appendInner"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, {
                                          cols: "12",
                                          md: "6"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VTextField, {
                                              id: ("useId" in _ctx ? _ctx.useId : unref(useId))(),
                                              modelValue: unref(confirmPassword),
                                              "onUpdate:modelValue": ($event) => isRef(confirmPassword) ? confirmPassword.value = $event : null,
                                              type: unref(isConfirmPasswordVisible) ? "text" : "password",
                                              "append-inner-icon": unref(isConfirmPasswordVisible) ? "bx-hide" : "bx-show",
                                              label: "Confirm New Password",
                                              placeholder: "\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7",
                                              "onClick:appendInner": ($event) => isConfirmPasswordVisible.value = !unref(isConfirmPasswordVisible)
                                            }, null, 8, ["id", "modelValue", "onUpdate:modelValue", "type", "append-inner-icon", "onClick:appendInner"])
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCardText, null, {
                                  default: withCtx(() => [
                                    createVNode("p", { class: "text-base font-weight-medium mt-2" }, " Password Requirements: "),
                                    createVNode("ul", { class: "d-flex flex-column gap-y-3" }, [
                                      (openBlock(), createBlock(Fragment, null, renderList(passwordRequirements, (item) => {
                                        return createVNode("li", {
                                          key: item,
                                          class: "d-flex"
                                        }, [
                                          createVNode("div", null, [
                                            createVNode(VIcon, {
                                              size: "7",
                                              icon: "bxs-circle",
                                              class: "me-3"
                                            })
                                          ]),
                                          createVNode("span", { class: "font-weight-medium" }, toDisplayString(item), 1)
                                        ]);
                                      }), 64))
                                    ])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCardText, { class: "d-flex flex-wrap gap-4" }, {
                                  default: withCtx(() => [
                                    createVNode(VBtn, null, {
                                      default: withCtx(() => [
                                        createTextVNode("Save changes")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VBtn, {
                                      type: "reset",
                                      color: "secondary",
                                      variant: "tonal"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Reset ")
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
                          createVNode(VForm, null, {
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
                                          createVNode(VTextField, {
                                            id: ("useId" in _ctx ? _ctx.useId : unref(useId))(),
                                            modelValue: unref(currentPassword),
                                            "onUpdate:modelValue": ($event) => isRef(currentPassword) ? currentPassword.value = $event : null,
                                            type: unref(isCurrentPasswordVisible) ? "text" : "password",
                                            "append-inner-icon": unref(isCurrentPasswordVisible) ? "bx-hide" : "bx-show",
                                            label: "Current Password",
                                            placeholder: "\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7",
                                            "onClick:appendInner": ($event) => isCurrentPasswordVisible.value = !unref(isCurrentPasswordVisible)
                                          }, null, 8, ["id", "modelValue", "onUpdate:modelValue", "type", "append-inner-icon", "onClick:appendInner"])
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
                                            id: ("useId" in _ctx ? _ctx.useId : unref(useId))(),
                                            modelValue: unref(newPassword),
                                            "onUpdate:modelValue": ($event) => isRef(newPassword) ? newPassword.value = $event : null,
                                            type: unref(isNewPasswordVisible) ? "text" : "password",
                                            "append-inner-icon": unref(isNewPasswordVisible) ? "bx-hide" : "bx-show",
                                            label: "New Password",
                                            autocomplete: "on",
                                            placeholder: "\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7",
                                            "onClick:appendInner": ($event) => isNewPasswordVisible.value = !unref(isNewPasswordVisible)
                                          }, null, 8, ["id", "modelValue", "onUpdate:modelValue", "type", "append-inner-icon", "onClick:appendInner"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        md: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            id: ("useId" in _ctx ? _ctx.useId : unref(useId))(),
                                            modelValue: unref(confirmPassword),
                                            "onUpdate:modelValue": ($event) => isRef(confirmPassword) ? confirmPassword.value = $event : null,
                                            type: unref(isConfirmPasswordVisible) ? "text" : "password",
                                            "append-inner-icon": unref(isConfirmPasswordVisible) ? "bx-hide" : "bx-show",
                                            label: "Confirm New Password",
                                            placeholder: "\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7",
                                            "onClick:appendInner": ($event) => isConfirmPasswordVisible.value = !unref(isConfirmPasswordVisible)
                                          }, null, 8, ["id", "modelValue", "onUpdate:modelValue", "type", "append-inner-icon", "onClick:appendInner"])
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(VCardText, null, {
                                default: withCtx(() => [
                                  createVNode("p", { class: "text-base font-weight-medium mt-2" }, " Password Requirements: "),
                                  createVNode("ul", { class: "d-flex flex-column gap-y-3" }, [
                                    (openBlock(), createBlock(Fragment, null, renderList(passwordRequirements, (item) => {
                                      return createVNode("li", {
                                        key: item,
                                        class: "d-flex"
                                      }, [
                                        createVNode("div", null, [
                                          createVNode(VIcon, {
                                            size: "7",
                                            icon: "bxs-circle",
                                            class: "me-3"
                                          })
                                        ]),
                                        createVNode("span", { class: "font-weight-medium" }, toDisplayString(item), 1)
                                      ]);
                                    }), 64))
                                  ])
                                ]),
                                _: 1
                              }),
                              createVNode(VCardText, { class: "d-flex flex-wrap gap-4" }, {
                                default: withCtx(() => [
                                  createVNode(VBtn, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Save changes")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VBtn, {
                                    type: "reset",
                                    color: "secondary",
                                    variant: "tonal"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Reset ")
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
                    createVNode(VCard, { title: "Change Password" }, {
                      default: withCtx(() => [
                        createVNode(VForm, null, {
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
                                        createVNode(VTextField, {
                                          id: ("useId" in _ctx ? _ctx.useId : unref(useId))(),
                                          modelValue: unref(currentPassword),
                                          "onUpdate:modelValue": ($event) => isRef(currentPassword) ? currentPassword.value = $event : null,
                                          type: unref(isCurrentPasswordVisible) ? "text" : "password",
                                          "append-inner-icon": unref(isCurrentPasswordVisible) ? "bx-hide" : "bx-show",
                                          label: "Current Password",
                                          placeholder: "\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7",
                                          "onClick:appendInner": ($event) => isCurrentPasswordVisible.value = !unref(isCurrentPasswordVisible)
                                        }, null, 8, ["id", "modelValue", "onUpdate:modelValue", "type", "append-inner-icon", "onClick:appendInner"])
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
                                          id: ("useId" in _ctx ? _ctx.useId : unref(useId))(),
                                          modelValue: unref(newPassword),
                                          "onUpdate:modelValue": ($event) => isRef(newPassword) ? newPassword.value = $event : null,
                                          type: unref(isNewPasswordVisible) ? "text" : "password",
                                          "append-inner-icon": unref(isNewPasswordVisible) ? "bx-hide" : "bx-show",
                                          label: "New Password",
                                          autocomplete: "on",
                                          placeholder: "\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7",
                                          "onClick:appendInner": ($event) => isNewPasswordVisible.value = !unref(isNewPasswordVisible)
                                        }, null, 8, ["id", "modelValue", "onUpdate:modelValue", "type", "append-inner-icon", "onClick:appendInner"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      md: "6"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VTextField, {
                                          id: ("useId" in _ctx ? _ctx.useId : unref(useId))(),
                                          modelValue: unref(confirmPassword),
                                          "onUpdate:modelValue": ($event) => isRef(confirmPassword) ? confirmPassword.value = $event : null,
                                          type: unref(isConfirmPasswordVisible) ? "text" : "password",
                                          "append-inner-icon": unref(isConfirmPasswordVisible) ? "bx-hide" : "bx-show",
                                          label: "Confirm New Password",
                                          placeholder: "\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7",
                                          "onClick:appendInner": ($event) => isConfirmPasswordVisible.value = !unref(isConfirmPasswordVisible)
                                        }, null, 8, ["id", "modelValue", "onUpdate:modelValue", "type", "append-inner-icon", "onClick:appendInner"])
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(VCardText, null, {
                              default: withCtx(() => [
                                createVNode("p", { class: "text-base font-weight-medium mt-2" }, " Password Requirements: "),
                                createVNode("ul", { class: "d-flex flex-column gap-y-3" }, [
                                  (openBlock(), createBlock(Fragment, null, renderList(passwordRequirements, (item) => {
                                    return createVNode("li", {
                                      key: item,
                                      class: "d-flex"
                                    }, [
                                      createVNode("div", null, [
                                        createVNode(VIcon, {
                                          size: "7",
                                          icon: "bxs-circle",
                                          class: "me-3"
                                        })
                                      ]),
                                      createVNode("span", { class: "font-weight-medium" }, toDisplayString(item), 1)
                                    ]);
                                  }), 64))
                                ])
                              ]),
                              _: 1
                            }),
                            createVNode(VCardText, { class: "d-flex flex-wrap gap-4" }, {
                              default: withCtx(() => [
                                createVNode(VBtn, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Save changes")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VBtn, {
                                  type: "reset",
                                  color: "secondary",
                                  variant: "tonal"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Reset ")
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
            _push2(ssrRenderComponent(VCol, { cols: "12" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCard, { title: "Two-steps verification" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCardText, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<p class="font-weight-semibold"${_scopeId4}> Two factor authentication is not enabled yet. </p><p${_scopeId4}> Two-factor authentication adds an additional layer of security to your account by requiring more than just a password to log in. <a href="javascript:void(0)" class="text-decoration-none"${_scopeId4}>Learn more.</a></p>`);
                              _push5(ssrRenderComponent(VBtn, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` Enable 2FA `);
                                  } else {
                                    return [
                                      createTextVNode(" Enable 2FA ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode("p", { class: "font-weight-semibold" }, " Two factor authentication is not enabled yet. "),
                                createVNode("p", null, [
                                  createTextVNode(" Two-factor authentication adds an additional layer of security to your account by requiring more than just a password to log in. "),
                                  createVNode("a", {
                                    href: "javascript:void(0)",
                                    class: "text-decoration-none"
                                  }, "Learn more.")
                                ]),
                                createVNode(VBtn, null, {
                                  default: withCtx(() => [
                                    createTextVNode(" Enable 2FA ")
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
                              createVNode("p", { class: "font-weight-semibold" }, " Two factor authentication is not enabled yet. "),
                              createVNode("p", null, [
                                createTextVNode(" Two-factor authentication adds an additional layer of security to your account by requiring more than just a password to log in. "),
                                createVNode("a", {
                                  href: "javascript:void(0)",
                                  class: "text-decoration-none"
                                }, "Learn more.")
                              ]),
                              createVNode(VBtn, null, {
                                default: withCtx(() => [
                                  createTextVNode(" Enable 2FA ")
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
                    createVNode(VCard, { title: "Two-steps verification" }, {
                      default: withCtx(() => [
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createVNode("p", { class: "font-weight-semibold" }, " Two factor authentication is not enabled yet. "),
                            createVNode("p", null, [
                              createTextVNode(" Two-factor authentication adds an additional layer of security to your account by requiring more than just a password to log in. "),
                              createVNode("a", {
                                href: "javascript:void(0)",
                                class: "text-decoration-none"
                              }, "Learn more.")
                            ]),
                            createVNode(VBtn, null, {
                              default: withCtx(() => [
                                createTextVNode(" Enable 2FA ")
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
            _push2(ssrRenderComponent(VCol, { cols: "12" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCard, { title: "Create an API key" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VRow, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCol, {
                                cols: "12",
                                md: "5",
                                "order-md": "0",
                                order: "1"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VCardText, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VForm, { onSubmit: () => {
                                          } }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VRow, null, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(VCol, { cols: "12" }, {
                                                        default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(ssrRenderComponent(VSelect, {
                                                              id: ("useId" in _ctx ? _ctx.useId : unref(useId))(),
                                                              label: "Choose the API key type you want to create",
                                                              placeholder: "Select API key type",
                                                              items: ["Full Control", "Modify", "Read & Execute", "List Folder Contents", "Read Only", "Read & Write"]
                                                            }, null, _parent10, _scopeId9));
                                                          } else {
                                                            return [
                                                              createVNode(VSelect, {
                                                                id: ("useId" in _ctx ? _ctx.useId : unref(useId))(),
                                                                label: "Choose the API key type you want to create",
                                                                placeholder: "Select API key type",
                                                                items: ["Full Control", "Modify", "Read & Execute", "List Folder Contents", "Read Only", "Read & Write"]
                                                              }, null, 8, ["id"])
                                                            ];
                                                          }
                                                        }),
                                                        _: 1
                                                      }, _parent9, _scopeId8));
                                                      _push9(ssrRenderComponent(VCol, { cols: "12" }, {
                                                        default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(ssrRenderComponent(VTextField, {
                                                              id: ("useId" in _ctx ? _ctx.useId : unref(useId))(),
                                                              label: "Name the API key",
                                                              placeholder: "Name the API key"
                                                            }, null, _parent10, _scopeId9));
                                                          } else {
                                                            return [
                                                              createVNode(VTextField, {
                                                                id: ("useId" in _ctx ? _ctx.useId : unref(useId))(),
                                                                label: "Name the API key",
                                                                placeholder: "Name the API key"
                                                              }, null, 8, ["id"])
                                                            ];
                                                          }
                                                        }),
                                                        _: 1
                                                      }, _parent9, _scopeId8));
                                                      _push9(ssrRenderComponent(VCol, { cols: "12" }, {
                                                        default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(ssrRenderComponent(VBtn, {
                                                              type: "submit",
                                                              block: ""
                                                            }, {
                                                              default: withCtx((_10, _push11, _parent11, _scopeId10) => {
                                                                if (_push11) {
                                                                  _push11(` Create Key `);
                                                                } else {
                                                                  return [
                                                                    createTextVNode(" Create Key ")
                                                                  ];
                                                                }
                                                              }),
                                                              _: 1
                                                            }, _parent10, _scopeId9));
                                                          } else {
                                                            return [
                                                              createVNode(VBtn, {
                                                                type: "submit",
                                                                block: ""
                                                              }, {
                                                                default: withCtx(() => [
                                                                  createTextVNode(" Create Key ")
                                                                ]),
                                                                _: 1
                                                              })
                                                            ];
                                                          }
                                                        }),
                                                        _: 1
                                                      }, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode(VCol, { cols: "12" }, {
                                                          default: withCtx(() => [
                                                            createVNode(VSelect, {
                                                              id: ("useId" in _ctx ? _ctx.useId : unref(useId))(),
                                                              label: "Choose the API key type you want to create",
                                                              placeholder: "Select API key type",
                                                              items: ["Full Control", "Modify", "Read & Execute", "List Folder Contents", "Read Only", "Read & Write"]
                                                            }, null, 8, ["id"])
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createVNode(VCol, { cols: "12" }, {
                                                          default: withCtx(() => [
                                                            createVNode(VTextField, {
                                                              id: ("useId" in _ctx ? _ctx.useId : unref(useId))(),
                                                              label: "Name the API key",
                                                              placeholder: "Name the API key"
                                                            }, null, 8, ["id"])
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createVNode(VCol, { cols: "12" }, {
                                                          default: withCtx(() => [
                                                            createVNode(VBtn, {
                                                              type: "submit",
                                                              block: ""
                                                            }, {
                                                              default: withCtx(() => [
                                                                createTextVNode(" Create Key ")
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
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VRow, null, {
                                                    default: withCtx(() => [
                                                      createVNode(VCol, { cols: "12" }, {
                                                        default: withCtx(() => [
                                                          createVNode(VSelect, {
                                                            id: ("useId" in _ctx ? _ctx.useId : unref(useId))(),
                                                            label: "Choose the API key type you want to create",
                                                            placeholder: "Select API key type",
                                                            items: ["Full Control", "Modify", "Read & Execute", "List Folder Contents", "Read Only", "Read & Write"]
                                                          }, null, 8, ["id"])
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(VCol, { cols: "12" }, {
                                                        default: withCtx(() => [
                                                          createVNode(VTextField, {
                                                            id: ("useId" in _ctx ? _ctx.useId : unref(useId))(),
                                                            label: "Name the API key",
                                                            placeholder: "Name the API key"
                                                          }, null, 8, ["id"])
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(VCol, { cols: "12" }, {
                                                        default: withCtx(() => [
                                                          createVNode(VBtn, {
                                                            type: "submit",
                                                            block: ""
                                                          }, {
                                                            default: withCtx(() => [
                                                              createTextVNode(" Create Key ")
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
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VForm, {
                                              onSubmit: withModifiers(() => {
                                              }, ["prevent"])
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VRow, null, {
                                                  default: withCtx(() => [
                                                    createVNode(VCol, { cols: "12" }, {
                                                      default: withCtx(() => [
                                                        createVNode(VSelect, {
                                                          id: ("useId" in _ctx ? _ctx.useId : unref(useId))(),
                                                          label: "Choose the API key type you want to create",
                                                          placeholder: "Select API key type",
                                                          items: ["Full Control", "Modify", "Read & Execute", "List Folder Contents", "Read Only", "Read & Write"]
                                                        }, null, 8, ["id"])
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(VCol, { cols: "12" }, {
                                                      default: withCtx(() => [
                                                        createVNode(VTextField, {
                                                          id: ("useId" in _ctx ? _ctx.useId : unref(useId))(),
                                                          label: "Name the API key",
                                                          placeholder: "Name the API key"
                                                        }, null, 8, ["id"])
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(VCol, { cols: "12" }, {
                                                      default: withCtx(() => [
                                                        createVNode(VBtn, {
                                                          type: "submit",
                                                          block: ""
                                                        }, {
                                                          default: withCtx(() => [
                                                            createTextVNode(" Create Key ")
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
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VCardText, null, {
                                        default: withCtx(() => [
                                          createVNode(VForm, {
                                            onSubmit: withModifiers(() => {
                                            }, ["prevent"])
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VRow, null, {
                                                default: withCtx(() => [
                                                  createVNode(VCol, { cols: "12" }, {
                                                    default: withCtx(() => [
                                                      createVNode(VSelect, {
                                                        id: ("useId" in _ctx ? _ctx.useId : unref(useId))(),
                                                        label: "Choose the API key type you want to create",
                                                        placeholder: "Select API key type",
                                                        items: ["Full Control", "Modify", "Read & Execute", "List Folder Contents", "Read Only", "Read & Write"]
                                                      }, null, 8, ["id"])
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(VCol, { cols: "12" }, {
                                                    default: withCtx(() => [
                                                      createVNode(VTextField, {
                                                        id: ("useId" in _ctx ? _ctx.useId : unref(useId))(),
                                                        label: "Name the API key",
                                                        placeholder: "Name the API key"
                                                      }, null, 8, ["id"])
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(VCol, { cols: "12" }, {
                                                    default: withCtx(() => [
                                                      createVNode(VBtn, {
                                                        type: "submit",
                                                        block: ""
                                                      }, {
                                                        default: withCtx(() => [
                                                          createTextVNode(" Create Key ")
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
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VCol, {
                                  cols: "12",
                                  md: "5",
                                  "order-md": "0",
                                  order: "1"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VCardText, null, {
                                      default: withCtx(() => [
                                        createVNode(VForm, {
                                          onSubmit: withModifiers(() => {
                                          }, ["prevent"])
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VRow, null, {
                                              default: withCtx(() => [
                                                createVNode(VCol, { cols: "12" }, {
                                                  default: withCtx(() => [
                                                    createVNode(VSelect, {
                                                      id: ("useId" in _ctx ? _ctx.useId : unref(useId))(),
                                                      label: "Choose the API key type you want to create",
                                                      placeholder: "Select API key type",
                                                      items: ["Full Control", "Modify", "Read & Execute", "List Folder Contents", "Read Only", "Read & Write"]
                                                    }, null, 8, ["id"])
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(VCol, { cols: "12" }, {
                                                  default: withCtx(() => [
                                                    createVNode(VTextField, {
                                                      id: ("useId" in _ctx ? _ctx.useId : unref(useId))(),
                                                      label: "Name the API key",
                                                      placeholder: "Name the API key"
                                                    }, null, 8, ["id"])
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(VCol, { cols: "12" }, {
                                                  default: withCtx(() => [
                                                    createVNode(VBtn, {
                                                      type: "submit",
                                                      block: ""
                                                    }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(" Create Key ")
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
                                md: "5",
                                "order-md": "0",
                                order: "1"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VCardText, null, {
                                    default: withCtx(() => [
                                      createVNode(VForm, {
                                        onSubmit: withModifiers(() => {
                                        }, ["prevent"])
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VRow, null, {
                                            default: withCtx(() => [
                                              createVNode(VCol, { cols: "12" }, {
                                                default: withCtx(() => [
                                                  createVNode(VSelect, {
                                                    id: ("useId" in _ctx ? _ctx.useId : unref(useId))(),
                                                    label: "Choose the API key type you want to create",
                                                    placeholder: "Select API key type",
                                                    items: ["Full Control", "Modify", "Read & Execute", "List Folder Contents", "Read Only", "Read & Write"]
                                                  }, null, 8, ["id"])
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(VCol, { cols: "12" }, {
                                                default: withCtx(() => [
                                                  createVNode(VTextField, {
                                                    id: ("useId" in _ctx ? _ctx.useId : unref(useId))(),
                                                    label: "Name the API key",
                                                    placeholder: "Name the API key"
                                                  }, null, 8, ["id"])
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(VCol, { cols: "12" }, {
                                                default: withCtx(() => [
                                                  createVNode(VBtn, {
                                                    type: "submit",
                                                    block: ""
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(" Create Key ")
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
                    createVNode(VCard, { title: "Create an API key" }, {
                      default: withCtx(() => [
                        createVNode(VRow, null, {
                          default: withCtx(() => [
                            createVNode(VCol, {
                              cols: "12",
                              md: "5",
                              "order-md": "0",
                              order: "1"
                            }, {
                              default: withCtx(() => [
                                createVNode(VCardText, null, {
                                  default: withCtx(() => [
                                    createVNode(VForm, {
                                      onSubmit: withModifiers(() => {
                                      }, ["prevent"])
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VRow, null, {
                                          default: withCtx(() => [
                                            createVNode(VCol, { cols: "12" }, {
                                              default: withCtx(() => [
                                                createVNode(VSelect, {
                                                  id: ("useId" in _ctx ? _ctx.useId : unref(useId))(),
                                                  label: "Choose the API key type you want to create",
                                                  placeholder: "Select API key type",
                                                  items: ["Full Control", "Modify", "Read & Execute", "List Folder Contents", "Read Only", "Read & Write"]
                                                }, null, 8, ["id"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, { cols: "12" }, {
                                              default: withCtx(() => [
                                                createVNode(VTextField, {
                                                  id: ("useId" in _ctx ? _ctx.useId : unref(useId))(),
                                                  label: "Name the API key",
                                                  placeholder: "Name the API key"
                                                }, null, 8, ["id"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, { cols: "12" }, {
                                              default: withCtx(() => [
                                                createVNode(VBtn, {
                                                  type: "submit",
                                                  block: ""
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(" Create Key ")
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
            _push2(ssrRenderComponent(VCol, { cols: "12" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCard, { title: "API Key List & Access" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCardText, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` An API key is a simple encrypted string that identifies an application without any principal. They are useful for accessing public data anonymously, and are used to associate API requests with your project for quota and billing. `);
                            } else {
                              return [
                                createTextVNode(" An API key is a simple encrypted string that identifies an application without any principal. They are useful for accessing public data anonymously, and are used to associate API requests with your project for quota and billing. ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCardText, { class: "d-flex flex-column gap-y-4" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<!--[-->`);
                              ssrRenderList(serverKeys, (serverKey) => {
                                _push5(`<div class="bg-var-theme-background pa-4"${_scopeId4}><div class="d-flex align-center flex-wrap mb-3"${_scopeId4}><h6 class="text-h6 mb-0 me-3"${_scopeId4}>${ssrInterpolate(serverKey.name)}</h6>`);
                                _push5(ssrRenderComponent(VChip, {
                                  label: "",
                                  color: "primary",
                                  size: "small"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`${ssrInterpolate(serverKey.permission)}`);
                                    } else {
                                      return [
                                        createTextVNode(toDisplayString(serverKey.permission), 1)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                                _push5(`</div><p class="text-base font-weight-medium"${_scopeId4}><span class="me-3"${_scopeId4}>${ssrInterpolate(serverKey.key)}</span>`);
                                _push5(ssrRenderComponent(VIcon, {
                                  size: 18,
                                  icon: "bx-copy",
                                  class: "cursor-pointer"
                                }, null, _parent5, _scopeId4));
                                _push5(`</p><span${_scopeId4}>Created on ${ssrInterpolate(serverKey.createdOn)}</span></div>`);
                              });
                              _push5(`<!--]-->`);
                            } else {
                              return [
                                (openBlock(), createBlock(Fragment, null, renderList(serverKeys, (serverKey) => {
                                  return createVNode("div", {
                                    key: serverKey.key,
                                    class: "bg-var-theme-background pa-4"
                                  }, [
                                    createVNode("div", { class: "d-flex align-center flex-wrap mb-3" }, [
                                      createVNode("h6", { class: "text-h6 mb-0 me-3" }, toDisplayString(serverKey.name), 1),
                                      createVNode(VChip, {
                                        label: "",
                                        color: "primary",
                                        size: "small"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(serverKey.permission), 1)
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    createVNode("p", { class: "text-base font-weight-medium" }, [
                                      createVNode("span", { class: "me-3" }, toDisplayString(serverKey.key), 1),
                                      createVNode(VIcon, {
                                        size: 18,
                                        icon: "bx-copy",
                                        class: "cursor-pointer"
                                      })
                                    ]),
                                    createVNode("span", null, "Created on " + toDisplayString(serverKey.createdOn), 1)
                                  ]);
                                }), 64))
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createTextVNode(" An API key is a simple encrypted string that identifies an application without any principal. They are useful for accessing public data anonymously, and are used to associate API requests with your project for quota and billing. ")
                            ]),
                            _: 1
                          }),
                          createVNode(VCardText, { class: "d-flex flex-column gap-y-4" }, {
                            default: withCtx(() => [
                              (openBlock(), createBlock(Fragment, null, renderList(serverKeys, (serverKey) => {
                                return createVNode("div", {
                                  key: serverKey.key,
                                  class: "bg-var-theme-background pa-4"
                                }, [
                                  createVNode("div", { class: "d-flex align-center flex-wrap mb-3" }, [
                                    createVNode("h6", { class: "text-h6 mb-0 me-3" }, toDisplayString(serverKey.name), 1),
                                    createVNode(VChip, {
                                      label: "",
                                      color: "primary",
                                      size: "small"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(serverKey.permission), 1)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  createVNode("p", { class: "text-base font-weight-medium" }, [
                                    createVNode("span", { class: "me-3" }, toDisplayString(serverKey.key), 1),
                                    createVNode(VIcon, {
                                      size: 18,
                                      icon: "bx-copy",
                                      class: "cursor-pointer"
                                    })
                                  ]),
                                  createVNode("span", null, "Created on " + toDisplayString(serverKey.createdOn), 1)
                                ]);
                              }), 64))
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
                    createVNode(VCard, { title: "API Key List & Access" }, {
                      default: withCtx(() => [
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createTextVNode(" An API key is a simple encrypted string that identifies an application without any principal. They are useful for accessing public data anonymously, and are used to associate API requests with your project for quota and billing. ")
                          ]),
                          _: 1
                        }),
                        createVNode(VCardText, { class: "d-flex flex-column gap-y-4" }, {
                          default: withCtx(() => [
                            (openBlock(), createBlock(Fragment, null, renderList(serverKeys, (serverKey) => {
                              return createVNode("div", {
                                key: serverKey.key,
                                class: "bg-var-theme-background pa-4"
                              }, [
                                createVNode("div", { class: "d-flex align-center flex-wrap mb-3" }, [
                                  createVNode("h6", { class: "text-h6 mb-0 me-3" }, toDisplayString(serverKey.name), 1),
                                  createVNode(VChip, {
                                    label: "",
                                    color: "primary",
                                    size: "small"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(serverKey.permission), 1)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                createVNode("p", { class: "text-base font-weight-medium" }, [
                                  createVNode("span", { class: "me-3" }, toDisplayString(serverKey.key), 1),
                                  createVNode(VIcon, {
                                    size: 18,
                                    icon: "bx-copy",
                                    class: "cursor-pointer"
                                  })
                                ]),
                                createVNode("span", null, "Created on " + toDisplayString(serverKey.createdOn), 1)
                              ]);
                            }), 64))
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
            _push2(ssrRenderComponent(VCol, { cols: "12" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCard, { title: "Recent Devices" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VDataTable, {
                          headers: recentDevicesHeaders,
                          items: recentDevices,
                          class: "text-no-wrap rounded-0 text-sm"
                        }, {
                          "item.browser": withCtx(({ item }, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="d-flex"${_scopeId4}>`);
                              _push5(ssrRenderComponent(VIcon, {
                                start: "",
                                icon: item.deviceIcon.icon,
                                color: item.deviceIcon.color
                              }, null, _parent5, _scopeId4));
                              _push5(`<span class="text-high-emphasis text-base"${_scopeId4}>${ssrInterpolate(item.browser)}</span></div>`);
                            } else {
                              return [
                                createVNode("div", { class: "d-flex" }, [
                                  createVNode(VIcon, {
                                    start: "",
                                    icon: item.deviceIcon.icon,
                                    color: item.deviceIcon.color
                                  }, null, 8, ["icon", "color"]),
                                  createVNode("span", { class: "text-high-emphasis text-base" }, toDisplayString(item.browser), 1)
                                ])
                              ];
                            }
                          }),
                          bottom: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) ;
                            else {
                              return [];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VDataTable, {
                            headers: recentDevicesHeaders,
                            items: recentDevices,
                            class: "text-no-wrap rounded-0 text-sm"
                          }, {
                            "item.browser": withCtx(({ item }) => [
                              createVNode("div", { class: "d-flex" }, [
                                createVNode(VIcon, {
                                  start: "",
                                  icon: item.deviceIcon.icon,
                                  color: item.deviceIcon.color
                                }, null, 8, ["icon", "color"]),
                                createVNode("span", { class: "text-high-emphasis text-base" }, toDisplayString(item.browser), 1)
                              ])
                            ]),
                            bottom: withCtx(() => []),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCard, { title: "Recent Devices" }, {
                      default: withCtx(() => [
                        createVNode(VDataTable, {
                          headers: recentDevicesHeaders,
                          items: recentDevices,
                          class: "text-no-wrap rounded-0 text-sm"
                        }, {
                          "item.browser": withCtx(({ item }) => [
                            createVNode("div", { class: "d-flex" }, [
                              createVNode(VIcon, {
                                start: "",
                                icon: item.deviceIcon.icon,
                                color: item.deviceIcon.color
                              }, null, 8, ["icon", "color"]),
                              createVNode("span", { class: "text-high-emphasis text-base" }, toDisplayString(item.browser), 1)
                            ])
                          ]),
                          bottom: withCtx(() => []),
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
                  createVNode(VCard, { title: "Change Password" }, {
                    default: withCtx(() => [
                      createVNode(VForm, null, {
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
                                      createVNode(VTextField, {
                                        id: ("useId" in _ctx ? _ctx.useId : unref(useId))(),
                                        modelValue: unref(currentPassword),
                                        "onUpdate:modelValue": ($event) => isRef(currentPassword) ? currentPassword.value = $event : null,
                                        type: unref(isCurrentPasswordVisible) ? "text" : "password",
                                        "append-inner-icon": unref(isCurrentPasswordVisible) ? "bx-hide" : "bx-show",
                                        label: "Current Password",
                                        placeholder: "\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7",
                                        "onClick:appendInner": ($event) => isCurrentPasswordVisible.value = !unref(isCurrentPasswordVisible)
                                      }, null, 8, ["id", "modelValue", "onUpdate:modelValue", "type", "append-inner-icon", "onClick:appendInner"])
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
                                        id: ("useId" in _ctx ? _ctx.useId : unref(useId))(),
                                        modelValue: unref(newPassword),
                                        "onUpdate:modelValue": ($event) => isRef(newPassword) ? newPassword.value = $event : null,
                                        type: unref(isNewPasswordVisible) ? "text" : "password",
                                        "append-inner-icon": unref(isNewPasswordVisible) ? "bx-hide" : "bx-show",
                                        label: "New Password",
                                        autocomplete: "on",
                                        placeholder: "\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7",
                                        "onClick:appendInner": ($event) => isNewPasswordVisible.value = !unref(isNewPasswordVisible)
                                      }, null, 8, ["id", "modelValue", "onUpdate:modelValue", "type", "append-inner-icon", "onClick:appendInner"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    md: "6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        id: ("useId" in _ctx ? _ctx.useId : unref(useId))(),
                                        modelValue: unref(confirmPassword),
                                        "onUpdate:modelValue": ($event) => isRef(confirmPassword) ? confirmPassword.value = $event : null,
                                        type: unref(isConfirmPasswordVisible) ? "text" : "password",
                                        "append-inner-icon": unref(isConfirmPasswordVisible) ? "bx-hide" : "bx-show",
                                        label: "Confirm New Password",
                                        placeholder: "\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7",
                                        "onClick:appendInner": ($event) => isConfirmPasswordVisible.value = !unref(isConfirmPasswordVisible)
                                      }, null, 8, ["id", "modelValue", "onUpdate:modelValue", "type", "append-inner-icon", "onClick:appendInner"])
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createVNode("p", { class: "text-base font-weight-medium mt-2" }, " Password Requirements: "),
                              createVNode("ul", { class: "d-flex flex-column gap-y-3" }, [
                                (openBlock(), createBlock(Fragment, null, renderList(passwordRequirements, (item) => {
                                  return createVNode("li", {
                                    key: item,
                                    class: "d-flex"
                                  }, [
                                    createVNode("div", null, [
                                      createVNode(VIcon, {
                                        size: "7",
                                        icon: "bxs-circle",
                                        class: "me-3"
                                      })
                                    ]),
                                    createVNode("span", { class: "font-weight-medium" }, toDisplayString(item), 1)
                                  ]);
                                }), 64))
                              ])
                            ]),
                            _: 1
                          }),
                          createVNode(VCardText, { class: "d-flex flex-wrap gap-4" }, {
                            default: withCtx(() => [
                              createVNode(VBtn, null, {
                                default: withCtx(() => [
                                  createTextVNode("Save changes")
                                ]),
                                _: 1
                              }),
                              createVNode(VBtn, {
                                type: "reset",
                                color: "secondary",
                                variant: "tonal"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Reset ")
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
              }),
              createVNode(VCol, { cols: "12" }, {
                default: withCtx(() => [
                  createVNode(VCard, { title: "Two-steps verification" }, {
                    default: withCtx(() => [
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createVNode("p", { class: "font-weight-semibold" }, " Two factor authentication is not enabled yet. "),
                          createVNode("p", null, [
                            createTextVNode(" Two-factor authentication adds an additional layer of security to your account by requiring more than just a password to log in. "),
                            createVNode("a", {
                              href: "javascript:void(0)",
                              class: "text-decoration-none"
                            }, "Learn more.")
                          ]),
                          createVNode(VBtn, null, {
                            default: withCtx(() => [
                              createTextVNode(" Enable 2FA ")
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
              createVNode(VCol, { cols: "12" }, {
                default: withCtx(() => [
                  createVNode(VCard, { title: "Create an API key" }, {
                    default: withCtx(() => [
                      createVNode(VRow, null, {
                        default: withCtx(() => [
                          createVNode(VCol, {
                            cols: "12",
                            md: "5",
                            "order-md": "0",
                            order: "1"
                          }, {
                            default: withCtx(() => [
                              createVNode(VCardText, null, {
                                default: withCtx(() => [
                                  createVNode(VForm, {
                                    onSubmit: withModifiers(() => {
                                    }, ["prevent"])
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VRow, null, {
                                        default: withCtx(() => [
                                          createVNode(VCol, { cols: "12" }, {
                                            default: withCtx(() => [
                                              createVNode(VSelect, {
                                                id: ("useId" in _ctx ? _ctx.useId : unref(useId))(),
                                                label: "Choose the API key type you want to create",
                                                placeholder: "Select API key type",
                                                items: ["Full Control", "Modify", "Read & Execute", "List Folder Contents", "Read Only", "Read & Write"]
                                              }, null, 8, ["id"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, { cols: "12" }, {
                                            default: withCtx(() => [
                                              createVNode(VTextField, {
                                                id: ("useId" in _ctx ? _ctx.useId : unref(useId))(),
                                                label: "Name the API key",
                                                placeholder: "Name the API key"
                                              }, null, 8, ["id"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, { cols: "12" }, {
                                            default: withCtx(() => [
                                              createVNode(VBtn, {
                                                type: "submit",
                                                block: ""
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(" Create Key ")
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
              createVNode(VCol, { cols: "12" }, {
                default: withCtx(() => [
                  createVNode(VCard, { title: "API Key List & Access" }, {
                    default: withCtx(() => [
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createTextVNode(" An API key is a simple encrypted string that identifies an application without any principal. They are useful for accessing public data anonymously, and are used to associate API requests with your project for quota and billing. ")
                        ]),
                        _: 1
                      }),
                      createVNode(VCardText, { class: "d-flex flex-column gap-y-4" }, {
                        default: withCtx(() => [
                          (openBlock(), createBlock(Fragment, null, renderList(serverKeys, (serverKey) => {
                            return createVNode("div", {
                              key: serverKey.key,
                              class: "bg-var-theme-background pa-4"
                            }, [
                              createVNode("div", { class: "d-flex align-center flex-wrap mb-3" }, [
                                createVNode("h6", { class: "text-h6 mb-0 me-3" }, toDisplayString(serverKey.name), 1),
                                createVNode(VChip, {
                                  label: "",
                                  color: "primary",
                                  size: "small"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(serverKey.permission), 1)
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              createVNode("p", { class: "text-base font-weight-medium" }, [
                                createVNode("span", { class: "me-3" }, toDisplayString(serverKey.key), 1),
                                createVNode(VIcon, {
                                  size: 18,
                                  icon: "bx-copy",
                                  class: "cursor-pointer"
                                })
                              ]),
                              createVNode("span", null, "Created on " + toDisplayString(serverKey.createdOn), 1)
                            ]);
                          }), 64))
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(VCol, { cols: "12" }, {
                default: withCtx(() => [
                  createVNode(VCard, { title: "Recent Devices" }, {
                    default: withCtx(() => [
                      createVNode(VDataTable, {
                        headers: recentDevicesHeaders,
                        items: recentDevices,
                        class: "text-no-wrap rounded-0 text-sm"
                      }, {
                        "item.browser": withCtx(({ item }) => [
                          createVNode("div", { class: "d-flex" }, [
                            createVNode(VIcon, {
                              start: "",
                              icon: item.deviceIcon.icon,
                              color: item.deviceIcon.color
                            }, null, 8, ["icon", "color"]),
                            createVNode("span", { class: "text-high-emphasis text-base" }, toDisplayString(item.browser), 1)
                          ])
                        ]),
                        bottom: withCtx(() => []),
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("views/pages/account-settings/AccountSettingsSecurity.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "account-settings",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute$1();
    const activeTab = ref(route.params.tab);
    const tabs = [
      {
        title: "Account",
        icon: "bx-user",
        tab: "account"
      },
      {
        title: "Security",
        icon: "bx-lock-open",
        tab: "security"
      },
      {
        title: "Notifications",
        icon: "bx-bell",
        tab: "notification"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(VTabs, {
        modelValue: unref(activeTab),
        "onUpdate:modelValue": ($event) => isRef(activeTab) ? activeTab.value = $event : null,
        "show-arrows": "",
        class: "v-tabs-pill"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(tabs, (item) => {
              _push2(ssrRenderComponent(VTab, {
                key: item.icon,
                value: item.tab
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(VIcon, {
                      size: "20",
                      start: "",
                      icon: item.icon
                    }, null, _parent3, _scopeId2));
                    _push3(` ${ssrInterpolate(item.title)}`);
                  } else {
                    return [
                      createVNode(VIcon, {
                        size: "20",
                        start: "",
                        icon: item.icon
                      }, null, 8, ["icon"]),
                      createTextVNode(" " + toDisplayString(item.title), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(), createBlock(Fragment, null, renderList(tabs, (item) => {
                return createVNode(VTab, {
                  key: item.icon,
                  value: item.tab
                }, {
                  default: withCtx(() => [
                    createVNode(VIcon, {
                      size: "20",
                      start: "",
                      icon: item.icon
                    }, null, 8, ["icon"]),
                    createTextVNode(" " + toDisplayString(item.title), 1)
                  ]),
                  _: 2
                }, 1032, ["value"]);
              }), 64))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VWindow, {
        modelValue: unref(activeTab),
        "onUpdate:modelValue": ($event) => isRef(activeTab) ? activeTab.value = $event : null,
        class: "mt-5 disable-tab-transition"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VWindowItem, { value: "account" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$3, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$3)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VWindowItem, { value: "security" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$1, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VWindowItem, { value: "notification" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(AccountSettingsNotification, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(AccountSettingsNotification)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VWindowItem, { value: "account" }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$3)
                ]),
                _: 1
              }),
              createVNode(VWindowItem, { value: "security" }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$1)
                ]),
                _: 1
              }),
              createVNode(VWindowItem, { value: "notification" }, {
                default: withCtx(() => [
                  createVNode(AccountSettingsNotification)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/account-settings.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
