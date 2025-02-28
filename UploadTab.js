import { useState } from 'react';
import { analyzeImage } from '../utils/tfHelper';

export default function UploadTab() {
  const [image, setImage] = useState(null);
  const [analysisResult, setAnalysisResult] = useState(null);

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const img = URL.createObjectURL(file);
      setImage(img);
      const result = await analyzeImage(file);
      setAnalysisResult(result);
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      {image && <img src={image} alt="Uploaded" width="300" />}
      {analysisResult && <pre>{JSON.stringify(analysisResult, null, 2)}</pre>}
    </div>
  );
}
