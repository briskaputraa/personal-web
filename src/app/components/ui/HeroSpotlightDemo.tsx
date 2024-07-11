import { Spotlight } from "@/app/components/ui/Spotlight";
import BlurInDemo from "./BlurInDemo";
import { GradualSpacingDemo } from "./GradualSpacingDemo";
import { IconCloudDemo } from "./IconCloudDemo";

export function SpotlightPreview() {
  return (
    <div className="h-[100vh] w-full flex items-center justify-center bg-slate-900 antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        className="top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="p-5 md:p-10 max-w-7xl relative z-10 items-center flex flex-col md:flex-row justify-center w-full md:pt-0">
      
      <div className="flex flex-col">
      <GradualSpacingDemo/>
      <BlurInDemo/>
      </div>

      <IconCloudDemo/>

      </div>
    </div>
  );
}
