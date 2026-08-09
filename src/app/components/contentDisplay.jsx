"use client";

import { useState } from "react";

export default function ReadContent({
  courseName,
  moduleName,
  content = [],
}) {
  const [copiedIndex, setCopiedIndex] = useState(null);

  const copyCode = async (code, index) => {
    try {
      await navigator.clipboard.writeText(code);

      setCopiedIndex(index);

      setTimeout(() => {
        setCopiedIndex(null);
      }, 1800);
    } catch (error) {
      console.error("Failed to copy code:", error);
    }
  };

  return (
    <div className="w-full min-h-screen bg-white">
      <div className="w-full max-w-4xl mx-auto px-5 sm:px-8 lg:px-10 py-8 sm:py-10">

        {/* ================= HEADER ================= */}

        <div className="mb-10">
          <p className="text-[11px] sm:text-xs font-bold tracking-[1.5px] uppercase text-violet-600 mb-3">
            {courseName}
          </p>

          <h1 className="text-3xl sm:text-4xl lg:text-[42px] leading-tight font-bold tracking-tight text-slate-900">
            {moduleName}
          </h1>

          <div className="mt-7 h-px bg-slate-100" />
        </div>

        {/* ================= CONTENT ================= */}

        <article className="space-y-8">

          {content.map((block, index) => {

            /* ================= HEADING ================= */

            if (block.type === "heading") {
              return (
                <h2
                  key={index}
                  className="
                    text-2xl
                    sm:text-[26px]
                    font-bold
                    tracking-tight
                    text-slate-900
                    pt-3
                  "
                >
                  {block.text}
                </h2>
              );
            }

            /* ================= SUB HEADING ================= */

            if (block.type === "subheading") {
              return (
                <h3
                  key={index}
                  className="
                    text-xl
                    sm:text-[22px]
                    font-semibold
                    tracking-tight
                    text-slate-900
                    pt-2
                  "
                >
                  {block.text}
                </h3>
              );
            }

            /* ================= TEXT ================= */

            if (block.type === "text") {
              return (
                <p
                  key={index}
                  className="
                    text-[15px]
                    sm:text-base
                    leading-7
                    sm:leading-8
                    text-slate-600
                    max-w-3xl
                  "
                >
                  {block.text}
                </p>
              );
            }

            /* ================= LIST ================= */

            if (block.type === "list") {
              return (
                <ul
                  key={index}
                  className="space-y-3.5 pl-1"
                >
                  {block.items?.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="
                        flex
                        items-start
                        gap-3
                        text-[15px]
                        sm:text-base
                        leading-7
                        text-slate-600
                      "
                    >
                      <span
                        className="
                          mt-[11px]
                          w-1.5
                          h-1.5
                          rounded-full
                          bg-violet-500
                          shrink-0
                        "
                      />

                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              );
            }

            /* ================= NOTE ================= */

            if (block.type === "note") {
              return (
                <div
                  key={index}
                  className="
                    flex
                    gap-4
                    p-5
                    sm:p-6
                    rounded-2xl
                    bg-violet-50
                    border
                    border-violet-100
                  "
                >
                  <div
                    className="
                      w-10
                      h-10
                      rounded-xl
                      bg-violet-100
                      flex
                      items-center
                      justify-center
                      shrink-0
                      text-lg
                    "
                  >
                    💡
                  </div>

                  <div>
                    <p className="text-sm font-bold text-violet-900">
                      {block.title || "Important"}
                    </p>

                    <p className="mt-1.5 text-sm leading-6 text-violet-700">
                      {block.text}
                    </p>
                  </div>
                </div>
              );
            }

            {/* ================= CODE BLOCK ================= */}

            if (block.type === "code") {
            return (
                <div
                key={index}
                className="
                    my-8
                    w-full
                    overflow-hidden
                    rounded-2xl
                    border
                    border-slate-800
                    bg-[#0D1117]
                    shadow-[0_8px_30px_rgba(15,23,42,0.12)]
                "
                >
                {/* Code Header */}
                <div
                    className="
                    flex
                    items-center
                    justify-between
                    px-4
                    sm:px-5
                    py-3.5
                    bg-[#161B22]
                    border-b
                    border-white/10
                    "
                >
                    {/* Terminal dots + language */}
                    <div className="flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />

                    <span
                        className="
                        ml-2
                        text-[11px]
                        sm:text-xs
                        font-bold
                        uppercase
                        tracking-wider
                        text-slate-400
                        "
                    >
                        {block.language || "terminal"}
                    </span>
                    </div>

                    {/* Copy Button */}
                    <button
                    type="button"
                    onClick={() => copyCode(block.code, index)}
                    className="
                        flex
                        items-center
                        gap-2
                        px-3
                        py-1.5
                        rounded-lg
                        text-xs
                        font-semibold
                        text-slate-400
                        hover:text-white
                        hover:bg-white/10
                        transition-all
                    "
                    >
                    {copiedIndex === index ? (
                        <>
                        <span className="text-green-400">✓</span>
                        <span>Copied</span>
                        </>
                    ) : (
                        <>
                        <span className="text-sm">⧉</span>
                        <span>Copy</span>
                        </>
                    )}
                    </button>
                </div>

                {/* Code */}
                <div className="overflow-x-auto">
                    <pre
                    className="
                        m-0
                        px-5
                        sm:px-7
                        py-6
                        sm:py-7
                        bg-[#0D1117]
                        text-[13px]
                        sm:text-sm
                        leading-7
                        font-mono
                        text-slate-300
                        whitespace-pre
                    "
                    >
                    <code>{block.code}</code>
                    </pre>
                </div>
                </div>
            );
            }
            return null;
          })}

        </article>

      </div>
    </div>
  );
}