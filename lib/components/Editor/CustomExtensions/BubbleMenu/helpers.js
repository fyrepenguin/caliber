import {
  RiBold,
  RiItalic,
  RiUnderline,
  RiStrikethrough,
  RiLink,
  RiCodeSSlashFill,
  RiMarkPenLine,
  RiAlignCenter,
  RiAlignLeft,
  RiAlignRight,
  RiComputerLine,
  RiEdit2Line,
} from "react-icons/ri";

export const getTextMenuOptions = ({ editor, setIsLinkOptionActive }) => [
  {
    Icon: RiBold,
    command: () => editor.chain().focus().toggleBold().run(),
    active: editor.isActive("bold"),
    optionName: "bold",
  },
  {
    Icon: RiItalic,
    command: () => editor.chain().focus().toggleItalic().run(),
    active: editor.isActive("italic"),
    optionName: "italic",
  },
  {
    Icon: RiUnderline,
    command: () => editor.chain().focus().toggleUnderline().run(),
    active: editor.isActive("underline"),
    optionName: "underline",
  },
  {
    Icon: RiStrikethrough,
    command: () => editor.chain().focus().toggleStrike().run(),
    active: editor.isActive("strike"),
    optionName: "strike",
  },
  {
    Icon: RiLink,
    command: () => setIsLinkOptionActive(true),
    active: editor.isActive("link"),
    optionName: "link",
  },
  {
    Icon: RiCodeSSlashFill,
    command: () => editor.chain().focus().toggleCode().run(),
    active: editor.isActive("code"),
    optionName: "code-block",
  },
  {
    Icon: RiMarkPenLine,
    command: () => editor.chain().focus().toggleHighlight().run(),
    active: editor.isActive("highlight"),
    optionName: "highlight",
  },
];

export const getImageMenuOptions = ({
  editor,
  isImageEditorModalOpen,
  setIsImageEditorModalOpen,
}) => [
    {
      Icon: RiAlignLeft,
      command: () =>
        editor
          .chain()
          .focus()
          .setImageAttributes({
            size: "small",
            float: "left",
            align: "none",
          })
          .run(),
      active: editor.isActive("image", {
        size: "small",
        float: "left",
        align: "none",
      }),
      optionName: "Float Left",
    },
    {
      Icon: RiAlignCenter,
      command: () =>
        editor
          .chain()
          .focus()
          .setImageAttributes({
            size: "small",
            float: "none",
            align: "center",
          })
          .run(),
      active: editor.isActive("image", {
        size: "small",
        float: "none",
        align: "center",
      }),
      optionName: "Align Center",
    },
    {
      Icon: RiComputerLine,
      command: () =>
        editor
          .chain()
          .focus()
          .setImageAttributes({
            size: "large",
            float: "none",
            align: "center",
          })
          .run(),
      active: editor.isActive("image", {
        size: "large",
        float: "none",
        align: "center",
      }),
      optionName: "Banner",
    },
    {
      Icon: RiAlignRight,
      command: () =>
        editor
          .chain()
          .focus()
          .setImageAttributes({
            size: "small",
            float: "right",
            align: "none",
          })
          .run(),
      active: editor.isActive("image", {
        size: "small",
        float: "right",
        align: "center",
      }),
      optionName: "Float Right",
    },
    {
      Icon: RiEdit2Line,
      command: () => setIsImageEditorModalOpen(true),
      active: isImageEditorModalOpen,
      optionName: "Alt Text",
    },
  ];
