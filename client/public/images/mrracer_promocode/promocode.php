<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Promo Code</title>
  <link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
  <style>
    body {
      background-color: #000;
      color: #fff;
    }
    .container {
      margin-top: 50px;
    }
    .promo-container {
      background-color: #141414;
      padding: 50px 0px 50px 0px;
      /* border: 2px solid #666; */
      border-radius: 5px;
      text-align: center;
    }
    .promo-code {
      font-size: 20px;
      margin-bottom: 20px;
    }
    .copy-btn {
      cursor: pointer;
    }

    #promo{
      border: 2px dotted #fff;
      border-radius: 10px;
      padding: 5px;
      font-weight: bolder;
    }
    hr{
      border-bottom: 1px solid #333;
    }
  </style>
</head>
<body>
  <div class="container">

    <div class="row">
      <div class="col-md-6 offset-md-3">
        <div class="promo-container">
          <div class="row">
            <div class="col-12" align="center">
              <img src="mrracer_logo.png" width="300"/>
            </div>
          </div>
          <hr/>
          <div class="promo-code">Your Promo Code: <br/><br/><span id="promo"></span> </div>
          <button class="btn btn-outline-warning copy-btn" onclick="copyPromo()"><i class="fas fa-copy copy-btn" onclick="copyPromo()"></i> Copy Code</button>
          <br/>
          <br/>
          <br/>
          <h4>DOWNLOAD HERE</h4>
          <a href='https://play.google.com/store/apps/details?id=com.chennaigames.mrracer.premium&utm_source=UMAGINE2024&utm_campaign=UMAGINE2024&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'><img alt='Get it on Google Play' src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png' width="200"/></a>
          <!-- <button class="btn btn-outline-warning copy-btn" onclick="copyPromo()">I Applied</button> -->
        </div>
      </div>
    </div>
  </div>

  <?php
	// Include PHPExcel library

	session_start();
	$promoCode = "";
// Generate a session ID if it doesn't already exist
if (!isset($_SESSION['session_id'])) {
    $_SESSION['session_id'] = generateRandomId();

	error_reporting(E_ERROR | E_PARSE);
	require 'PHPExcel/PHPExcel.php';
	 
	// Load the Excel file
	$excelFile = "promo_codes_final.xlsx";
	$excelReader = PHPExcel_IOFactory::createReaderForFile($excelFile);

	$excelObj = $excelReader->load($excelFile);
	// Get the active sheet
	$sheet = $excelObj->getActiveSheet();
	 
	// Find an unused promo code
	$promoCode = "";
	foreach ($sheet->getRowIterator() as $row) {
		$cellIterator = $row->getCellIterator();
		$cellIterator->setIterateOnlyExistingCells(false);

		foreach ($cellIterator as $cell) {
		
			if (!empty($cell->getValue())) {
				$statusCell = $sheet->getCellByColumnAndRow($cell->getColumn() + 1, $cell->getRow());
    
				if ($cell->getValue() != 'used' && $statusCell->getValue() == '') {
					$promoCode = $cell->getValue();
					// Mark the promo code as used
					$statusCell->setValue('used');
					$excelWriter = PHPExcel_IOFactory::createWriter($excelObj, 'Excel2007');
					$excelWriter->save($excelFile);
					break 2;
				}
			}
		}
	}
	
	if (!empty($promoCode)) {
    echo $promoCode;
	} else {
		echo "Sorry, no promo codes available.";
	}
}
	function generateRandomId($length = 10) {
		return substr(uniqid(), 0, $length);
	}
	?>

  <script>
    function copyPromo() {
      var promoText = document.getElementById("promo");
      var range = document.createRange();
      range.selectNode(promoText);
      window.getSelection().removeAllRanges();
      window.getSelection().addRange(range);
      document.execCommand("copy");
      window.getSelection().removeAllRanges();
      alert("Promo code copied!");
    }

		let promocode = "<?php echo  $promoCode ?>";
    let session_id = "<?php echo  $_SESSION['session_id']; ?>"

    var storedValue = localStorage.getItem(session_id);
    console.log("Promo Code :::",promocode);
    console.log("Session Id :::",session_id);
    // Check if the value exists
    if (storedValue !== null) {
      
    document.getElementById("promo").textContent =storedValue;
    } else {
      document.getElementById("promo").textContent =promocode;
   
    localStorage.setItem(session_id,promocode);
    }
	</script>
</body>
</html>
