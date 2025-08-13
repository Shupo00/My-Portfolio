"use client";

import { ShaderGradient, ShaderGradientCanvas } from "@shadergradient/react";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="bg-black h-screen w-screen overflow-hidden relative flex items-center justify-center">
      <Suspense fallback={null}>
        <ShaderGradientCanvas
          style={{
            position: 'absolute',
            top: 0,
            width: '100%',
            height: '100%',
            opacity: 0,
            animation: 'fadeIn 4s ease-in-out forwards',
          }}
        >
          <ShaderGradient
            control="query"
            urlString='https://www.shadergradient.co/customize?animate=on&axesHelper=off&bgColor1=%23000000&bgColor2=%23000000&brightness=1&cAzimuthAngle=180&cDistance=3.6&cPolarAngle=90&cameraZoom=1&color1=%2311243b&color2=%230b556c&color3=%230b95a1&destination=onCanvas&embedMode=off&envPreset=city&format=gif&fov=45&frameRate=10&gizmoHelper=hide&grain=on&lightType=3d&pixelDensity=1&positionX=-1.4&positionY=0&positionZ=0&range=enabled&rangeEnd=40&rangeStart=0&reflection=0.1&rotationX=0&rotationY=10&rotationZ=50&shader=defaults&type=plane&uAmplitude=0&uDensity=1.3&uFrequency=5.5&uSpeed=0.1&uStrength=4&uTime=0&wireframe=false'
          />
        </ShaderGradientCanvas>
      <div className="p-4 md:p-10 relative z-10 grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto min-h-[80vh] auto-rows-min md:grid-rows-3">
        {/* メインプロフィール - 大きなカード */}
        <div className="md:col-span-2 md:row-span-2 backdrop-blur-lg bg-gray-900/20 rounded-3xl border border-gray-700/50 p-6 md:p-8 flex flex-col justify-center items-center text-center order-1">
          <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-gray-600 to-gray-800 mb-4 md:mb-6 flex items-center justify-center text-white text-xl md:text-2xl font-bold">
          
          </div>
          <h1 className="text-white text-2xl md:text-3xl font-bold mb-3 md:mb-4">Shuji Miyake</h1>
          <p className="text-gray-300 text-base md:text-lg mb-3 md:mb-4">Vibe Corder</p>
          <p className="text-gray-400 text-xs md:text-sm leading-relaxed max-w-sm">
            Web開発のあれこれ学習中。
          </p>
        </div>

        {/* スキル */}
        <div className="backdrop-blur-lg bg-gray-900/20 rounded-3xl border border-gray-700/50 p-4 md:p-6 order-2">
          <h3 className="text-white text-lg md:text-xl font-semibold mb-3 md:mb-4">Skill</h3>
          <div className="space-y-1.5 md:space-y-2">
            <div className="text-gray-300 text-xs md:text-sm">HTML / CSS</div>
            <div className="text-gray-300 text-xs md:text-sm">React / Next.js</div>
            <div className="text-gray-300 text-xs md:text-sm">Python</div>
            <div className="text-gray-300 text-xs md:text-sm">Git / Docker</div>
          </div>
        </div>

        {/* 連絡先 */}
        <div className="backdrop-blur-lg bg-gray-900/20 rounded-3xl border border-gray-700/50 p-4 md:p-6 flex flex-col justify-center items-center order-3">
          <h3 className="text-white text-lg md:text-xl font-semibold mb-4"> Link </h3>
          <div className="flex space-x-6">
            <a href="mailto:su.op.0678@gmail.com" aria-label="Email">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor" className="text-gray-300 hover:text-white transition-colors">
                <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"></path>
              </svg>
            </a>
            <a href="https://x.com/Shupo00" aria-label="X profile">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor" className="text-gray-300 hover:text-white transition-colors">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
              </svg>
            </a>
            <a href="https://github.com/Shupo00" aria-label="GitHub profile">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor" className="text-gray-300 hover:text-white transition-colors">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* プロジェクト */}
        <div className="md:col-span-2 backdrop-blur-lg bg-gray-900/20 rounded-3xl border border-gray-700/50 p-4 md:p-6 order-4">
          <h3 className="text-white text-lg md:text-xl font-semibold mb-3 md:mb-4">Project</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
            <div className="bg-gray-800/50 rounded-xl p-3 md:p-4">
              <h4 className="text-white font-medium mb-1 md:mb-2 text-sm md:text-base">仮</h4>
              <p className="text-gray-400 text-xs">仮</p>
            </div>
            <div className="bg-gray-800/50 rounded-xl p-3 md:p-4">
              <h4 className="text-white font-medium mb-1 md:mb-2 text-sm md:text-base">仮</h4>
              <p className="text-gray-400 text-xs">仮</p>
            </div>
          </div>
        </div>
      </div>
      </Suspense>
    </div>
  );
}