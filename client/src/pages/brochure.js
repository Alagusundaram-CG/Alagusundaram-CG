import React, { useEffect } from 'react';
import { Link, useLocation  } from 'react-router-dom';

const ChennaigamesBrochure = () => {
    let pathname = useLocation().pathname;
    
    useEffect(() => {
        let filePath = '/CHENNAIGAMES_DIGITAL_BROCHURE_2.pdf'; // Path to the PDF file in the public directory
        let filename = 'CHENNAIGAMES_DIGITAL_BROCHURE_2.pdf';
        if(pathname === "/chennaigames_brochure")
        {
            filePath = '/CHENNAIGAMES_DIGITAL_BROCHURE_1.pdf';
            filename = 'CHENNAIGAMES_DIGITAL_BROCHURE_1.pdf';
        }
        // Create an invisible link element
        const link = document.createElement('a');
        link.href = filePath;
        link.download = filename; // Default file name for download
        document.body.appendChild(link);
    
        // Programmatically click the link to trigger the download
        link.click();
    
        // Clean up
        document.body.removeChild(link);
      }, []);

  return (
    <div align="center">
      <h1>Downloading brochure...</h1>
      {/* <Link to={"/"}><p>Visit Website</p></Link> */}
    </div>
  );
};

export default ChennaigamesBrochure;
