<?php
 $filename = 1;
 if(isset($_REQUEST['id']))
 {
     $filename = $_REQUEST['id'];
 }

 $file = 'CHENNAIGAMES_DIGITAL_BROCHURE_'.$filename.'.pdf';

if (file_exists($file)) {
    header('Content-Description: File Transfer');
    header('Content-Type: application/octet-stream');
    header('Content-Disposition: attachment; filename="' . basename($file) . '"');
    header('Expires: 0');
    header('Cache-Control: must-revalidate');
    header('Pragma: public');
    header('Content-Length: ' . filesize($file));
    readfile($file);
    exit;
} else {
    // File not found error handling
    echo "File not found.";
}
?>
