import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Link from "@tiptap/extension-link";
import TextAlign from "@tiptap/extension-text-align";
import Placeholder from "@tiptap/extension-placeholder";
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import { createLowlight } from "lowlight";
import { Button } from "@nextui-org/button";
import AlignLeftIcon from "@/components/editor/icons/AlignLeft";
import AlignRightIcon from "@/components/editor/icons/AlignRight";
import AlignCenterIcon from "@/components/editor/icons/AlignCenter";
import BoldIcon from "@/components/editor/icons/Bold";
import ItalicIcon from "@/components/editor/icons/Italic";
import StrikeIcon from "@/components/editor/icons/Strike";
import CodeIcon from "@/components/editor/icons/Code";
import LinkIcon from "@/components/editor/icons/Links";

export const TiptapEditor = ({
  onChange,
}: {
  onChange: (content: string) => void;
}) => {
  const lowlight = createLowlight();
  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      StarterKit.configure({
        // Disable the default CodeBlock as we'll use CodeBlockLowlight
        codeBlock: false,
      }),
      Link.configure({
        openOnClick: false,
      }),
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      Placeholder.configure({
        placeholder: "Write something...",
      }),
      CodeBlockLowlight.configure({
        lowlight,
      }),
    ],
    editorProps: {
      attributes: {
        class:
          "prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto focus:outline-none h-60 bg-white text-black placeholder:text-black rounded-md overflow-hidden p-4",
      },
    },
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
  });

  return (
    <div className="w-full">
      <div className="flex gap-4 py-2 w-full">
        {/* Text alignment controls */}
        <button
          onClick={() => editor?.chain().focus().setTextAlign("left").run()}
          className={`${
            editor?.isActive({ textAlign: "left" })
              ? " bg-primario300"
              : " bg-slate-300 "
          } w-8 h-8 p-2 flex justify-center items-center rounded-lg`}
        >
          <AlignLeftIcon />
        </button>
        <button
          onClick={() => editor?.chain().focus().setTextAlign("center").run()}
          className={`${
            editor?.isActive({ textAlign: "center" })
              ? "bg-primario300"
              : "bg-slate-300"
          } w-8 h-8 p-2 flex justify-center items-center rounded-lg`}
        >
          <AlignCenterIcon />
        </button>
        <button
          onClick={() => editor?.chain().focus().setTextAlign("right").run()}
          className={`${
            editor?.isActive({ textAlign: "right" })
              ? "bg-primario300"
              : "bg-slate-300"
          } w-8 h-8 p-2 flex justify-center items-center rounded-lg`}
        >
          <AlignRightIcon />
        </button>
        <button
          onClick={() => editor?.chain().focus().toggleBold().run()}
          disabled={!editor?.can().chain().focus().toggleBold().run()}
          className={`${
            editor?.isActive("bold") ? "bg-primario200" : "bg-slate-300"
          } w-8 h-8 p-2 flex justify-center items-center rounded-lg`}
        >
          <BoldIcon />
        </button>
        <button
          onClick={() => editor?.chain().focus().toggleItalic().run()}
          disabled={!editor?.can().chain().focus().toggleItalic().run()}
          className={`${
            editor?.isActive("italic") ? "bg-primario200" : " bg-slate-300"
          } w-8 h-8 p-2 flex justify-center items-center rounded-lg`}
        >
          <ItalicIcon />
        </button>
        <button
          onClick={() => editor?.chain().focus().toggleStrike().run()}
          disabled={!editor?.can().chain().focus().toggleStrike().run()}
          className={`${
            editor?.isActive("strike")
              ? "bg-primario200 w-5 h-5"
              : "bg-slate-300"
          } w-8 h-8 p-2 flex justify-center items-center rounded-lg`}
        >
          <StrikeIcon />
        </button>
        {/* Code block button */}
        <button
          onClick={() => editor?.chain().focus().toggleCodeBlock().run()}
          className={`${
            editor?.isActive("codeBlock")
              ? "bg-primario200 w-5 h-5"
              : "rounded-lg bg-slate-300"
          } w-8 h-8 p-2 flex justify-center items-center rounded-lg`}
        >
          <CodeIcon />
        </button>

        {/* Link button */}
        <button
          onClick={() => {
            const url = window.prompt("Enter the URL");
            if (url) {
              editor?.chain().focus().setLink({ href: url }).run();
            }
          }}
          className={`${
            editor?.isActive("link")
              ? "bg-primario200 w-5 h-5"
              : " bg-slate-300"
          } w-8 h-8 p-2 flex justify-center items-center rounded-lg`}
        >
          <LinkIcon />
        </button>
      </div>

      <EditorContent className="w-full h-60" editor={editor} />
    </div>
  );
};
