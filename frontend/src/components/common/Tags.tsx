import { Chip, ChipProps } from "@nextui-org/react"
import { FC } from "react"

interface TagsProps extends ChipProps {
  tags: String[]
}

const Tags: FC<TagsProps> = ({ tags, variant, ...rest }) => {
  return (
    <div className="flex gap-3">
      {
        tags.map((tag, index) => (
          <Chip
            key={index}
            variant={variant || "solid"}
            {...rest}
            className={"text-purple-700 bg-purple-200 flex items-center cursor-pointer"}
          >
            <span className="font-semibold">
              {tag}
            </span>
          </Chip>
        ))
      }
    </div>)
}

export default Tags