"use client"; // Mark this as a Client Component

import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

const DownloadButton = () => {
  // Function to handle CV download
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/assets/DaudResume.pdf"; // Path to your CV file in the public folder
    link.download = "DaudResume.pdf"; // Name of the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Button
      variant="outline"
      size="lg"
      className="uppercase flex items-center gap-2"
      onClick={handleDownloadCV} // Add onClick handler
    >
      <span>Download CV</span>
      <FiDownload className="text-xl" />
    </Button>
  );
};

export default DownloadButton;