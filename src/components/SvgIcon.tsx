import { defineComponent } from "vue";

export default defineComponent({
  name: "SvgIcon",
  inheritAttrs: false,
  props: {
    prefix: {
      type: String,
      default: "icon"
    },
    name: {
      type: String,
      required: true
    },
    color: {
      type: String,
      default: "#333"
    },
    className: {
      type: String,
      default: ""
    }
  },
  setup({ color, prefix, name, className }) {
    let hasH = false;
    let hasW = false;
    const defaultClass = "svg-icon inline-block";
    const splitDefaultClass = defaultClass.split(" ");
    const splitClassName = className.split(" ");

    /* 判断外部是否有传高度和宽度进来 ( 基于：tailwindcss ) */
    splitClassName.forEach((name) => {
      const firstClass = name.split("-")[0];
      if (firstClass === "h") hasH = true;
      if (firstClass === "w") hasW = true;
    });

    /* 过滤无效的 css类名 */
    const filterClassName = [
      ...splitDefaultClass,
      ...splitClassName,
      hasH ? "" : "h-10",
      hasW ? "" : "w-10"
    ].filter((name) => !!name);

    /* 去掉重复的 css类名 */
    const setClass = new Set(filterClassName);
    /* 拼接字符串 */
    const uniqueClass = [...setClass].join(" ");

    return () => (
      <svg aria-hidden="true" class={uniqueClass}>
        <use xlinkHref={`#${prefix}-${name}`} fill={color} />
      </svg>
    );
  }
});
