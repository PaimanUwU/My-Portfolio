import { useState } from "react";

const SidebarBranding = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      class="z-50 bg-base-100 rounded-main w-full mt-2 aspect-square  flex item-center justify-center text-accent cursor-pointer transition-all ease-in-out duration-[0.3s] hover:scale-125"
      onClick={() => setExpanded(!expanded)}
    >
      <img src="/Hamburger.svg" alt="menu" class="w-6" />
    </div>
  );
};

export default SidebarBranding;