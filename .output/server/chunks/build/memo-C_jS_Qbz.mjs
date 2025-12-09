import { createVNode, useSSRContext, defineComponent, ref } from 'vue';
import { p as propsFactory, m as makeComponentProps, P as makeDimensionProps, d as makeTagProps, g as genericComponent, x as useRtl, X as useDimension, n as useRender, _ as _export_sfc } from './server.mjs';
import { _ as __nuxt_component_0 } from './client-only-CW16b6V6.mjs';
import { ssrRenderComponent } from 'vue/server-renderer';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { defineStore } from 'pinia';

const makeVContainerProps = propsFactory({
  fluid: {
    type: Boolean,
    default: false
  },
  ...makeComponentProps(),
  ...makeDimensionProps(),
  ...makeTagProps()
}, "VContainer");
const VContainer = genericComponent()({
  name: "VContainer",
  props: makeVContainerProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      rtlClasses
    } = useRtl();
    const {
      dimensionStyles
    } = useDimension(props);
    useRender(() => createVNode(props.tag, {
      "class": ["v-container", {
        "v-container--fluid": props.fluid
      }, rtlClasses.value, props.class],
      "style": [dimensionStyles.value, props.style]
    }, slots));
    return {};
  }
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "MemoPdfExport",
  __ssrInlineRender: true,
  props: {
    memo: {}
  },
  setup(__props, { expose: __expose }) {
    const props = __props;
    const pdfContent = ref();
    const exportToPdf = async () => {
      if (!pdfContent.value) {
        console.error("PDF content element not found");
        alert("\u0E44\u0E21\u0E48\u0E1E\u0E1A element \u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E2A\u0E23\u0E49\u0E32\u0E07 PDF \u0E01\u0E23\u0E38\u0E13\u0E32\u0E25\u0E2D\u0E07\u0E43\u0E2B\u0E21\u0E48\u0E2D\u0E35\u0E01\u0E04\u0E23\u0E31\u0E49\u0E07");
        return;
      }
      try {
        pdfContent.value.style.position = "static";
        pdfContent.value.style.left = "0";
        const canvas = await html2canvas(pdfContent.value, {
          scale: 2,
          useCORS: true,
          logging: false,
          allowTaint: true
        });
        pdfContent.value.style.position = "absolute";
        pdfContent.value.style.left = "-9999px";
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF({
          orientation: "portrait",
          unit: "mm",
          format: "a4"
        });
        const imgWidth = 210;
        const imgHeight = canvas.height * imgWidth / canvas.width;
        pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
        const docNumber = props.memo.documentNumber || props.memo.id || "MEMO";
        const timestamp = (/* @__PURE__ */ new Date()).toISOString().replace(/[:.]/g, "-").slice(0, -5);
        const fileName = `MEMO_${docNumber}_${timestamp}.pdf`;
        const pdfBlob = pdf.output("blob");
        const url = URL.createObjectURL(pdfBlob);
        const newWindow = (void 0).open(url, "_blank");
        if (!newWindow) {
          alert("\u0E01\u0E23\u0E38\u0E13\u0E32\u0E2D\u0E19\u0E38\u0E0D\u0E32\u0E15 popup \u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E40\u0E1B\u0E34\u0E14 PDF");
        }
        setTimeout(() => URL.revokeObjectURL(url), 6e4);
      } catch (error) {
        console.error("Error generating PDF:", error);
        alert(`\u0E40\u0E01\u0E34\u0E14\u0E02\u0E49\u0E2D\u0E1C\u0E34\u0E14\u0E1E\u0E25\u0E32\u0E14\u0E43\u0E19\u0E01\u0E32\u0E23\u0E2A\u0E23\u0E49\u0E32\u0E07 PDF: ${error}`);
      }
    };
    __expose({
      exportToPdf
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_0;
      _push(ssrRenderComponent(_component_ClientOnly, _attrs, {}, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/MemoPdfExport.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const MemoPdfExport = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-5455e543"]]);
const useMemoStore = defineStore("memo", {
  state: () => ({
    currentMemo: {
      id: "",
      from: "",
      to: "",
      cc: "",
      date: (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
      documentNumber: "",
      subject: "",
      details: "",
      message: "",
      purposes: {
        consider: false,
        know: false,
        issueCommand: false,
        continue: false
      },
      actions: {
        follow: false,
        considerReturn: false,
        copyStores: false,
        returnCopies: false,
        forApproval: false,
        toConsider: false,
        toKnow: false,
        other: false
      },
      otherAction: "",
      createdAt: "",
      updatedAt: ""
    },
    savedMemos: []
  }),
  actions: {
    saveMemo() {
      const now = (/* @__PURE__ */ new Date()).toISOString();
      if (!this.currentMemo.id) {
        this.currentMemo.id = `MEMO-${Date.now()}`;
        this.currentMemo.createdAt = now;
      }
      this.currentMemo.updatedAt = now;
      const existingIndex = this.savedMemos.findIndex((m) => m.id === this.currentMemo.id);
      if (existingIndex >= 0) {
        this.savedMemos[existingIndex] = { ...this.currentMemo };
      } else {
        this.savedMemos.push({ ...this.currentMemo });
      }
      this.persistToStorage();
      return this.currentMemo.id;
    },
    loadMemo(id) {
      const memo = this.savedMemos.find((m) => m.id === id);
      if (memo) {
        this.currentMemo = { ...memo };
      }
    },
    deleteMemo(id) {
      this.savedMemos = this.savedMemos.filter((m) => m.id !== id);
      this.persistToStorage();
    },
    resetCurrentMemo() {
      this.currentMemo = {
        id: "",
        from: "",
        to: "",
        cc: "",
        date: (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
        documentNumber: "",
        subject: "",
        details: "",
        message: "",
        purposes: {
          consider: false,
          know: false,
          issueCommand: false,
          continue: false
        },
        actions: {
          follow: false,
          considerReturn: false,
          copyStores: false,
          returnCopies: false,
          forApproval: false,
          toConsider: false,
          toKnow: false,
          other: false
        },
        otherAction: "",
        createdAt: "",
        updatedAt: ""
      };
    },
    persistToStorage() {
    },
    loadFromStorage() {
    }
  }
});

export { MemoPdfExport as M, VContainer as V, useMemoStore as u };
