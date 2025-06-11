"use client";

export default function Button({
  onClick,
  label,
  color,
  layout = "right",
}: {
  onClick?: () => void;
  label: string;
  color: string;
  layout?: "left" | "right";
}) {
  const isRight = layout === "right";

  return (
    <button
      onMouseDown={onClick ?? undefined}
      className={`group flex items-center justify-start cursor-pointer relative ${
        isRight ? "pr-4" : "pl-4"
      }`}
    >
      {layout === "left" ? (
        <ButtonGraphic color={color} layout={layout} />
      ) : null}
      <span className="uppercase tracking-[0.25em] font-semibold text-xs">
        {label}
      </span>
      {layout === "right" ? (
        <ButtonGraphic color={color} layout={layout} />
      ) : null}
    </button>
  );
}

const ButtonGraphic = ({
  color,
  layout = "right",
}: {
  color: string;
  layout?: "left" | "right";
}) => {
  const isRight = layout === "right";

  return (
    <span
      className={`absolute top-1/2 ${
        isRight ? "left-full" : "right-full"
      } flex -translate-y-1/2 items-center justify-center`}
    >
      <div className="relative flex items-center justify-center w-full h-full">
        <div
          id="arrow"
          className="flex relative transition-all duration-500 group-hover:w-12 w-9 h-2 items-center z-10"
        >
          <div
            className="w-full h-px absolute top-1/2 left-0 -translate-y-1/2"
            style={{
              backgroundColor: color,
            }}
          />
          <div
            className={`h-[5px] w-[5px] aspect-square border-t-[1px] absolute top-1/2 -translate-y-1/2 ${
              isRight ? "rotate-45 right-0" : "-rotate-45 left-0"
            }`}
            style={{
              borderTop: "1px solid",
              borderLeft: isRight ? "" : "1px solid",
              borderRight: isRight ? "1px solid" : "",
              borderColor: color,
            }}
          />
        </div>
        <div
          id="circle"
          className={`z-0 w-6 h-6 aspect-square origin-center group-hover:scale-150 transition-all duration-500 rounded-full bg-gold absolute top-1/2 -translate-y-1/2 ${
            isRight ? "right-0 translate-x-1/2" : "left-0 -translate-x-1/2"
          }`}
        ></div>
      </div>
    </span>
  );
};
