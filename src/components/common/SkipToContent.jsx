function SkipToContent() {
  return (
    <a
      href="#main-content"
      className="
        fixed
        left-4
        top-3
        z-[300]
        -translate-y-24
        rounded-xl
        border
        border-blue-400/40
        bg-[#07142d]
        px-5
        py-3
        text-sm
        font-semibold
        text-white
        shadow-[0_12px_35px_rgba(37,99,235,.3)]
        transition-transform
        duration-200
        focus:translate-y-0
      "
    >
      Skip to main content
    </a>
  );
}

export default SkipToContent;