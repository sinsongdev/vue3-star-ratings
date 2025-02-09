import { defineComponent, openBlock, createBlock, createVNode, pushScopeId, popScopeId, resolveComponent, createCommentVNode, Fragment, renderList, withScopeId } from 'vue';

var script$1 = defineComponent({
  name: "StarIcon"
});

const _hoisted_1$1 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 512.002 512.002"
};

const _hoisted_2$1 = /*#__PURE__*/createVNode("path", {
  d: "M511.267 197.258a14.995 14.995 0 00-12.107-10.209l-158.723-23.065-70.985-143.827a14.998 14.998 0 00-26.901 0l-70.988 143.827-158.72 23.065a14.998 14.998 0 00-8.312 25.585l114.848 111.954-27.108 158.083a14.999 14.999 0 0021.763 15.812l141.967-74.638 141.961 74.637a15 15 0 0021.766-15.813l-27.117-158.081 114.861-111.955a14.994 14.994 0 003.795-15.375z"
}, null, -1);

function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$1, [_hoisted_2$1]);
}

script$1.render = render$1;

var script = defineComponent({
  components: {
    StarIcon: script$1
  },
  name: "Vue3StarRatings",
  props: {
    starColor: {
      type: String,
      default: "#ff9800"
    },
    inactiveColor: {
      type: String,
      default: "#333"
    },
    starSize: {
      type: String,
      default: "32"
    },
    controlBg: {
      type: String,
      default: "#2e5090"
    },
    controlColor: {
      type: String,
      default: "#fff"
    },
    controlSize: {
      type: String,
      default: "24"
    },
    numberOfStars: {
      type: Number,
      default: 5
    },
    showControl: {
      type: Boolean,
      default: true
    },
    modelValue: {
      type: Number
    },
    disableClick: {
      type: Boolean,
      default: false
    },
    step: {
      type: Number,
      default: 0.5
    }
  },

  data() {
    return {
      rating: this.modelValue || 0
    };
  },

  watch: {
    roundedRating() {
      this.$emit("update:modelValue", this.roundedRating);
    }

  },
  computed: {
    roundedRating() {
      return this.rounded(this.rating, 0);
    },

    percent() {
      return this.roundedRating / this.numberOfStars * 100 + "%";
    }

  },
  methods: {
    increaseRating() {
      if (this.rating < this.numberOfStars) {
        this.rating += this.step;
      } else if (this.rating > this.numberOfStars) {
        this.rating = this.numberOfStars;
      }

      if (this.rating > this.numberOfStars) {
        this.rating = this.numberOfStars;
      }
    },

    decreaseRating() {
      if (this.rating <= 0) {
        return;
      } else {
        this.rating -= this.step;
      }

      if (this.rating < 0) {
        this.rating = 0;
      }
    },

    rounded(value, decimalPlaces) {
      const power = 10 ** decimalPlaces;
      return Math.round(value * power) / power;
    },

    numberMinusFifteenPercent(value) {
      const num = +value;
      return this.rounded(num - num * 0.15, 0);
    },

    generateSameWidthAndHeight(size) {
      return {
        width: size + "px",
        height: size + "px"
      };
    }

  },

  mounted() {
    const starsCont = this.$refs["starsContainer"];
    const self = this;
    starsCont.addEventListener("click", function (e) {
      var relativeX = e.pageX - this.offsetLeft;

      if (this.offsetParent != null) {
        relativeX -= this.offsetParent.offsetLeft;
      }

      self.rating = Math.ceil(relativeX / this.offsetWidth * self.numberOfStars);
    });
  }

});

const _withId = /*#__PURE__*/withScopeId("data-v-fc78e576");

pushScopeId("data-v-fc78e576");

const _hoisted_1 = {
  class: "vue3-star-ratings__wrapper"
};
const _hoisted_2 = {
  class: "vue3-star-ratings"
};

const _hoisted_3 = /*#__PURE__*/createVNode("path", {
  d: "M317.896 396.024l304.749-276.467c27.36-27.36 27.36-71.677 0-99.037s-71.677-27.36-99.036 0L169.11 342.161c-14.783 14.783-21.302 34.538-20.084 53.897-1.218 19.359 5.301 39.114 20.084 53.897l354.531 321.606c27.36 27.36 71.677 27.36 99.037 0s27.36-71.677 0-99.036L317.896 396.024z"
}, null, -1);

const _hoisted_4 = /*#__PURE__*/createVNode("path", {
  d: "M622.955 342.127L268.424 20.521c-27.36-27.36-71.677-27.36-99.037 0s-27.36 71.676 0 99.037l304.749 276.468-304.749 276.466c-27.36 27.359-27.36 71.676 0 99.036s71.677 27.36 99.037 0l354.531-321.606c14.783-14.783 21.302-34.538 20.084-53.897 1.186-19.36-5.301-39.114-20.084-53.898z"
}, null, -1);

popScopeId();

const render = /*#__PURE__*/_withId((_ctx, _cache, $props, $setup, $data, $options) => {
  const _component_star_icon = resolveComponent("star-icon");

  return openBlock(), createBlock("div", _hoisted_1, [createVNode("div", _hoisted_2, [_ctx.showControl ? (openBlock(), createBlock("button", {
    key: 0,
    onClick: _cache[1] || (_cache[1] = (...args) => _ctx.decreaseRating && _ctx.decreaseRating(...args)),
    style: { ..._ctx.generateSameWidthAndHeight(_ctx.controlSize),
      backgroundColor: _ctx.controlBg,
      color: _ctx.controlColor
    }
  }, [(openBlock(), createBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 792.082 792.082",
    style: { ..._ctx.generateSameWidthAndHeight(_ctx.numberMinusFifteenPercent(_ctx.controlSize))
    }
  }, [_hoisted_3], 4))], 4)) : createCommentVNode("", true), createVNode("div", {
    class: "stars",
    ref: "starsContainer",
    style: {
      pointerEvents: _ctx.disableClick ? 'none' : 'auto'
    }
  }, [createVNode("div", {
    class: "stars-outer",
    style: {
      color: _ctx.inactiveColor
    }
  }, [(openBlock(true), createBlock(Fragment, null, renderList(_ctx.numberOfStars, i => {
    return openBlock(), createBlock(_component_star_icon, {
      key: i,
      style: { ..._ctx.generateSameWidthAndHeight(_ctx.starSize)
      }
    }, null, 8, ["style"]);
  }), 128))], 4), createVNode("div", {
    class: "stars-inner",
    style: {
      width: _ctx.percent,
      color: _ctx.starColor
    }
  }, [(openBlock(true), createBlock(Fragment, null, renderList(Math.round(_ctx.rating), i => {
    return openBlock(), createBlock(_component_star_icon, {
      key: i,
      style: { ..._ctx.generateSameWidthAndHeight(_ctx.starSize)
      }
    }, null, 8, ["style"]);
  }), 128))], 4)], 4), _ctx.showControl ? (openBlock(), createBlock("button", {
    key: 1,
    onClick: _cache[2] || (_cache[2] = (...args) => _ctx.increaseRating && _ctx.increaseRating(...args)),
    style: { ..._ctx.generateSameWidthAndHeight(_ctx.starSize),
      backgroundColor: _ctx.controlBg,
      color: _ctx.controlColor
    }
  }, [(openBlock(), createBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 792.082 792.082",
    style: { ..._ctx.generateSameWidthAndHeight(_ctx.numberMinusFifteenPercent(_ctx.controlSize))
    }
  }, [_hoisted_4], 4))], 4)) : createCommentVNode("", true)])]);
});

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = "\n.vue3-star-ratings__wrapper[data-v-fc78e576] {\r\n  display: block;\r\n  margin: 25px auto;\r\n  text-align: center;\r\n  padding: 25px;\n}\n.vue3-star-ratings[data-v-fc78e576] {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\n}\n.vue3-star-ratings button[data-v-fc78e576] {\r\n  border: 0;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  border-radius: 50%;\r\n  cursor: pointer;\n}\n.vue3-star-ratings button svg[data-v-fc78e576] {\r\n  fill: currentColor;\n}\n.stars[data-v-fc78e576] {\r\n  display: inline-block;\r\n  position: relative;\r\n  overflow: hidden;\r\n  margin: 0 auto;\n}\n.stars-outer[data-v-fc78e576],\r\n.stars-inner[data-v-fc78e576] {\r\n  height: inherit;\n}\n.stars-inner[data-v-fc78e576] {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 0;\r\n  max-width: 100%;\r\n  min-width: 0;\r\n  white-space: nowrap;\r\n  transition: 320ms cubic-bezier(0.075, 0.82, 0.165, 1);\r\n  overflow: hidden;\n}\n.stars svg[data-v-fc78e576] {\r\n  display: inline-block;\r\n  fill: currentColor;\r\n  cursor: pointer;\n}\r\n";
styleInject(css_248z);

script.render = render;
script.__scopeId = "data-v-fc78e576";

// Import vue component

// Default export is installable instance of component.
// IIFE injects install function into component, allowing component
// to be registered via Vue.use() as well as Vue.component(),
var entry_esm = /*#__PURE__*/(() => {
  // Assign InstallableComponent type
  const installable = script; // Attach install function executed by Vue.use()

  installable.install = app => {
    app.component('Vue3StarRatings', installable);
  };

  return installable;
})(); // It's possible to expose named exports when writing components that can
// also be used as directives, etc. - eg. import { RollupDemoDirective } from 'rollup-demo';
// export const RollupDemoDirective = directive;

export default entry_esm;
