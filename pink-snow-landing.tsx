import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="min-h-screen flex">
      {/* Left side - Pink Snow Image */}
      <div className="flex-1 relative">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image%20Placeholder-uVGF5Isaei43wjXeem9AWvzdhNwPtV.png"
          alt="Pink Snow landscape showing natural phenomenon with pink-colored snow formations"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Right side - Content */}
      <div className="flex-1 bg-gray-50 flex items-center justify-center p-8 lg:p-16">
        <div className="max-w-lg space-y-8">
          {/* Large "01" watermark */}
          <div className="absolute top-8 right-8 text-8xl font-bold text-gray-200 select-none">01</div>

          {/* Main heading */}
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">Pink Snow</h1>

          {/* Description */}
          <p className="text-gray-600 text-lg leading-relaxed">
            Explora las regiones protegidas y los efectos del cambio climático en el planeta. Descubre información
            detallada y visualizaciones dinámicas a través de nuestras aplicaciones especializadas de Google Earth
            Engine.
          </p>

          {/* Action buttons */}
          <div className="space-y-4">
            <Button
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg text-base font-medium"
              size="lg"
              asChild
            >
              <a
                href="https://ee-my-projectee.projects.earthengine.app/view/glaciaralgasapp"
                target="_blank"
                rel="noopener noreferrer"
              >
                Monitoreo Glaciar
              </a>
            </Button>

            <Button
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg text-base font-medium"
              size="lg"
              asChild
            >
              <a
                href="https://ee-my-projectee.projects.earthengine.app/view/albedoglaciarapp"
                target="_blank"
                rel="noopener noreferrer"
              >
                Monitoreo Del Albedo
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
