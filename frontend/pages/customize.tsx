import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import CursorGlow from "../components/CursorGlow";
import Header from "../components/Header";

type PackagingType = "box" | "cylinder" | "wrapper";

export default function CustomizePage() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const productFileInputRef = useRef<HTMLInputElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Box dimensions
  const [boxLength, setBoxLength] = useState(20);
  const [boxWidth, setBoxWidth] = useState(15);
  const [boxHeight, setBoxHeight] = useState(10);

  // Packaging type
  const [packagingType, setPackagingType] = useState<PackagingType>("box");

  // Product scale
  const [productScale, setProductScale] = useState(1);

  // Images
  const [boxDesign, setBoxDesign] = useState<string | null>(null);
  const [productImage, setProductImage] = useState<string | null>(null);

  // Colors for packaging
  const [boxColor, setBoxColor] = useState("#ffffff");
  const [cylinderColor, setCylinderColor] = useState("#ffffff");
  const [wrapperColor, setWrapperColor] = useState("#ffffff");

  // Handle file uploads
  const handleBoxDesignUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setBoxDesign(event.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleProductImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setProductImage(event.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  // Draw box preview
  const drawBoxPreview = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;

    // Clear canvas
    ctx.fillStyle = "#f9fafb";
    ctx.fillRect(0, 0, width, height);

    // Scale factor for drawing
    const scale = Math.min(width / 100, height / 100) * 1.5;

    // Center position
    const centerX = width / 2;
    const centerY = height / 2;

    if (packagingType === "box") {
      // Draw 3D box (isometric view)
      ctx.fillStyle = boxColor;
      ctx.strokeStyle = "#333";
      ctx.lineWidth = 2;

      // Front face
      const frontX = centerX - (boxLength * scale) / 2;
      const frontY = centerY - (boxHeight * scale) / 2;
      const frontW = boxLength * scale;
      const frontH = boxHeight * scale;

      ctx.fillRect(frontX, frontY, frontW, frontH);
      ctx.strokeRect(frontX, frontY, frontW, frontH);

      // Top face (isometric)
      ctx.fillStyle = "rgba(" + hexToRgb(boxColor).join(",") + ", 0.8)";
      const topPts = [
        [frontX, frontY],
        [frontX + frontW * 0.2, frontY - frontW * 0.1],
        [frontX + frontW + frontW * 0.2, frontY - frontW * 0.1],
        [frontX + frontW, frontY],
      ];
      ctx.beginPath();
      ctx.moveTo(topPts[0][0], topPts[0][1]);
      topPts.forEach((pt) => ctx.lineTo(pt[0], pt[1]));
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // Right face
      ctx.fillStyle = "rgba(" + hexToRgb(boxColor).join(",") + ", 0.6)";
      const rightPts = [
        [frontX + frontW, frontY],
        [frontX + frontW + frontW * 0.2, frontY - frontW * 0.1],
        [frontX + frontW + frontW * 0.2, frontY + frontH - frontW * 0.1],
        [frontX + frontW, frontY + frontH],
      ];
      ctx.beginPath();
      ctx.moveTo(rightPts[0][0], rightPts[0][1]);
      rightPts.forEach((pt) => ctx.lineTo(pt[0], pt[1]));
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // Draw product image on front if available (fixed size, inside box)
      if (productImage) {
        const img = new (window as any).Image();
        img.onload = () => {
          const imgWidth = 60 * productScale; // Scalable size
          const imgHeight = 60 * productScale;
          // Draw with opacity so the box color shows through and blends
          ctx.globalAlpha = 0.85;
          ctx.drawImage(
            img,
            frontX + (frontW - imgWidth) / 2,
            frontY + (frontH - imgHeight) / 2 + 10,
            imgWidth,
            imgHeight
          );
          ctx.globalAlpha = 1;
        };
        img.src = productImage;
      }

      // Draw box design if available
      if (boxDesign) {
        const img = new (window.Image as any)();
        img.onload = () => {
          ctx.globalAlpha = 0.3;
          ctx.drawImage(img, frontX, frontY, frontW, frontH);
          ctx.globalAlpha = 1;
        };
        img.src = boxDesign;
      }
    } else if (packagingType === "cylinder") {
      // Draw cylinder
      const radius = boxWidth * scale;
      const cylinderHeight = boxHeight * scale;

      // Draw ellipse top
      ctx.fillStyle = cylinderColor;
      ctx.strokeStyle = "#333";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.ellipse(centerX, centerY - cylinderHeight / 2, radius, radius * 0.3, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();

      // Draw body
      ctx.fillRect(centerX - radius, centerY - cylinderHeight / 2, radius * 2, cylinderHeight);

      // Draw bottom ellipse
      ctx.beginPath();
      ctx.ellipse(centerX, centerY + cylinderHeight / 2, radius, radius * 0.3, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();

      // Draw product image in the center (fixed size, inside cylinder)
      if (productImage) {
        const img = new (window as any).Image();
        img.onload = () => {
          const imgWidth = 60 * productScale; // Scalable size
          const imgHeight = 60 * productScale;
          // Draw with opacity so the cylinder color shows through and blends
          ctx.globalAlpha = 0.85;
          ctx.drawImage(
            img,
            centerX - imgWidth / 2,
            centerY - imgHeight / 2,
            imgWidth,
            imgHeight
          );
          ctx.globalAlpha = 1;
        };
        img.src = productImage;
      }
    } else if (packagingType === "wrapper") {
      // Draw wrapper
      const wrapperW = boxLength * scale * 1.5;
      const wrapperH = boxHeight * scale;

      ctx.fillStyle = wrapperColor;
      ctx.strokeStyle = "#333";
      ctx.lineWidth = 2;

      // Wrapper with wavy edges
      ctx.beginPath();
      ctx.moveTo(centerX - wrapperW / 2, centerY - wrapperH / 2);
      // Top edge
      for (let i = 0; i <= 1; i += 0.1) {
        const y = centerY - wrapperH / 2 + Math.sin(i * Math.PI) * 5;
        ctx.lineTo(centerX - wrapperW / 2 + i * wrapperW, y);
      }
      // Right edge
      ctx.lineTo(centerX + wrapperW / 2, centerY + wrapperH / 2);
      // Bottom edge
      for (let i = 1; i >= 0; i -= 0.1) {
        const y = centerY + wrapperH / 2 - Math.sin(i * Math.PI) * 5;
        ctx.lineTo(centerX - wrapperW / 2 + i * wrapperW, y);
      }
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // Draw product in center (fixed size, inside wrapper)
      if (productImage) {
        const img = new (window as any).Image();
        img.onload = () => {
          const imgWidth = 60 * productScale; // Scalable size
          const imgHeight = 60 * productScale;
          // Draw with opacity so the wrapper color shows through and blends
          ctx.globalAlpha = 0.85;
          ctx.drawImage(
            img,
            centerX - imgWidth / 2,
            centerY - imgHeight / 2,
            imgWidth,
            imgHeight
          );
          ctx.globalAlpha = 1;
        };
        img.src = productImage;
      }
    }

    // Draw title
    ctx.fillStyle = "#333";
    ctx.font = "14px sans-serif";
    ctx.textAlign = "center";
    ctx.fillText(
      `${boxLength}cm × ${boxWidth}cm × ${boxHeight}cm`,
      centerX,
      height - 20
    );
  };

  // Redraw on state change
  const handleUpdateDimensions = (length: number, width: number, height: number) => {
    setBoxLength(length);
    setBoxWidth(width);
    setBoxHeight(height);
  };

  // Helper function to convert hex to RGB
  const hexToRgb = (hex: string): number[] => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? [parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16)]
      : [255, 255, 255];
  };

  // Redraw canvas when state changes
  useEffect(() => {
    drawBoxPreview();
  }, [boxLength, boxWidth, boxHeight, packagingType, boxColor, cylinderColor, wrapperColor, boxDesign, productImage, productScale]);

  return (
    <>
      <CursorGlow />

      <Header />

      <main className="bg-white text-gray-900 overflow-hidden">

        {/* Main Content */}
        <section className="min-h-screen py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl font-bold mb-4">Design Your Custom Package</h1>
              <p className="text-lg text-gray-600 mb-12">
                Create your perfect packaging solution. Choose dimensions, upload designs, and preview your package in real-time.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Left: Controls */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-1"
              >
                <div className="bg-white rounded-2xl shadow-lg p-8 space-y-8 sticky top-24">
                  {/* Packaging Type Selection */}
                  <div>
                    <h3 className="text-lg font-bold mb-4 text-gray-900">Packaging Type</h3>
                    <div className="space-y-3">
                      {["box", "cylinder", "wrapper"].map((type) => (
                        <label
                          key={type}
                          className="flex items-center p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition"
                        >
                          <input
                            type="radio"
                            name="packaging"
                            value={type}
                            checked={packagingType === type}
                            onChange={(e) => setPackagingType(e.target.value as PackagingType)}
                            className="w-4 h-4"
                          />
                          <span className="ml-3 font-medium capitalize text-gray-700">{type}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Dimensions */}
                  <div>
                    <h3 className="text-lg font-bold mb-4 text-gray-900">Dimensions (cm)</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Length: {boxLength}cm
                        </label>
                        <input
                          type="range"
                          min="5"
                          max="50"
                          value={boxLength}
                          onChange={(e) => setBoxLength(Number(e.target.value))}
                          className="w-full"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Width: {boxWidth}cm
                        </label>
                        <input
                          type="range"
                          min="5"
                          max="50"
                          value={boxWidth}
                          onChange={(e) => setBoxWidth(Number(e.target.value))}
                          className="w-full"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Height: {boxHeight}cm
                        </label>
                        <input
                          type="range"
                          min="5"
                          max="50"
                          value={boxHeight}
                          onChange={(e) => setBoxHeight(Number(e.target.value))}
                          className="w-full"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Color Selection */}
                  <div>
                    <h3 className="text-lg font-bold mb-4 text-gray-900">
                      {packagingType === "box" && "Box Color"}
                      {packagingType === "cylinder" && "Cylinder Color"}
                      {packagingType === "wrapper" && "Wrapper Color"}
                    </h3>
                    <div className="flex items-center gap-4">
                      <input
                        type="color"
                        value={
                          packagingType === "box"
                            ? boxColor
                            : packagingType === "cylinder"
                              ? cylinderColor
                              : wrapperColor
                        }
                        onChange={(e) => {
                          if (packagingType === "box") setBoxColor(e.target.value);
                          else if (packagingType === "cylinder") setCylinderColor(e.target.value);
                          else setWrapperColor(e.target.value);
                        }}
                        className="w-16 h-16 rounded cursor-pointer"
                      />
                      <div className="flex-1">
                        <p className="text-sm text-gray-600">Click to choose color</p>
                      </div>
                    </div>
                  </div>

                  {/* Product Scale */}
                  <div>
                    <h3 className="text-lg font-bold mb-4 text-gray-900">Product Scale</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Size: {Math.round(productScale * 100)}%
                        </label>
                        <input
                          type="range"
                          min="0.1"
                          max="10"
                          step="0.1"
                          value={productScale}
                          onChange={(e) => setProductScale(Number(e.target.value))}
                          className="w-full"
                        />
                        <p className="text-xs text-gray-500 mt-2">Adjust how large the product appears</p>
                      </div>
                    </div>
                  </div>

                  {/* Upload Sections */}
                  <div>
                    <h3 className="text-lg font-bold mb-4 text-gray-900">Upload Design</h3>
                    <button
                      onClick={() => fileInputRef.current?.click()}
                      className="w-full px-4 py-3 border-2 border-dashed border-blue-400 rounded-lg text-center cursor-pointer hover:bg-blue-50 transition"
                    >
                      <p className="text-blue-600 font-medium">
                        {boxDesign ? "Change Box Design" : "Upload Box Design"}
                      </p>
                      <p className="text-sm text-gray-500 mt-1">PNG, JPG (Optional)</p>
                    </button>
                    {boxDesign && (
                      <button
                        onClick={() => setBoxDesign(null)}
                        className="w-full mt-2 text-sm text-red-600 hover:text-red-700"
                      >
                        Remove Design
                      </button>
                    )}
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/png,image/jpeg"
                      onChange={handleBoxDesignUpload}
                      className="hidden"
                    />
                  </div>

                  <div>
                    <h3 className="text-lg font-bold mb-4 text-gray-900">Upload Product</h3>
                    <button
                      onClick={() => productFileInputRef.current?.click()}
                      className="w-full px-4 py-3 border-2 border-dashed border-green-400 rounded-lg text-center cursor-pointer hover:bg-green-50 transition"
                    >
                      <p className="text-green-600 font-medium">
                        {productImage ? "Change Product Image" : "Upload Product Image"}
                      </p>
                      <p className="text-sm text-gray-500 mt-1">PNG, JPG</p>
                    </button>
                    {productImage && (
                      <button
                        onClick={() => setProductImage(null)}
                        className="w-full mt-2 text-sm text-red-600 hover:text-red-700"
                      >
                        Remove Product
                      </button>
                    )}
                    <input
                      ref={productFileInputRef}
                      type="file"
                      accept="image/png,image/jpeg"
                      onChange={handleProductImageUpload}
                      className="hidden"
                    />
                  </div>

                  {/* Action Buttons */}
                  <button className="w-full px-6 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition shadow-md">
                    Add to Cart
                  </button>

                  <button className="w-full px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition">
                    Request Quote
                  </button>
                </div>
              </motion.div>

              {/* Right: Preview */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-2"
              >
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <h3 className="text-xl font-bold mb-6 text-gray-900">Live Preview</h3>

                  <div className="bg-gray-50 rounded-xl overflow-hidden border border-gray-200 flex items-center justify-center" style={{ height: "500px" }}>
                    <canvas
                      ref={canvasRef}
                      width={600}
                      height={500}
                      className="max-w-full max-h-full"
                    />
                  </div>

                  <div className="mt-8 grid grid-cols-2 gap-4 p-6 bg-gray-50 rounded-xl">
                    <div>
                      <p className="text-sm text-gray-600">Dimensions</p>
                      <p className="text-lg font-bold text-gray-900">
                        {boxLength} × {boxWidth} × {boxHeight} cm
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Packaging Type</p>
                      <p className="text-lg font-bold text-gray-900 capitalize">{packagingType}</p>
                    </div>
                  </div>

                  <div className="mt-6 p-6 bg-blue-50 rounded-xl border border-blue-200">
                    <h4 className="font-bold text-gray-900 mb-2">Design Tips</h4>
                    <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside">
                      <li>Upload PNG images for best quality</li>
                      <li>Product image will be centered on the packaging</li>
                      <li>You can adjust colors without uploading a design</li>
                      <li>Box designs are applied transparently over the color</li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
