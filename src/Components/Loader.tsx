import { IconHexagon } from "@tabler/icons-react"
import IconCloud from "./magicui/icon-cloud"
import { Slugs } from "./User"

const Loader = () => {
  return (
    <div className="relative h-full w-full animate-[ping_1.5s_ease-in-out_1_4.5s] flex justify-center items-center px-20 pt-8">
        <IconCloud iconSlugs={Slugs} />
        <IconHexagon className="absolute -z-10 animate-[spin_5s_linear_infinite]" size={140} color="#64FFDA" stroke={1.25} />
        <div className="absolute font-mono text-primaryColor font-semibold text-6xl -z-10">SKS</div>
    </div>
  )
}

export default Loader