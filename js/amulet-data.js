// ======================== amulet-data.js ========================
// ฐานข้อมูลพระเครื่องทั้งหมด (77 จังหวัด + พระเกจิ + พระป่า + พระโบราณ)

const amulets = [
  // ------------------------- 🏺 พระเครื่องรายจังหวัด (77 จังหวัด) -------------------------
  { name: "พระเครื่องกระบี่", category: "region", url: "", keywords: ["กระบี่"], img: "" },
  { name: "พระเครื่องกรุงเทพมหานคร (กทม)", category: "region", url: "https://photos.app.goo.gl/GcmfNfKeiCzaTsFH8", keywords: ["กรุงเทพ"], img: "" },
  { name: "พระเครื่องกาญจนบุรี", category: "region", url: "", keywords: ["กาญจนบุรี"], img: "" },
  { name: "พระเครื่องกาฬสินธุ์", category: "region", url: "", keywords: ["กาฬสินธุ์"], img: "" },
  { name: "พระเครื่องกำแพงเพชร", category: "region", url: "", keywords: ["กำแพงเพชร"], img: "" },
  { name: "พระเครื่องขอนแก่น", category: "region", url: "", keywords: ["ขอนแก่น"], img: "" },
  { name: "พระเครื่องจันทบุรี", category: "region", url: "", keywords: ["จันทบุรี"], img: "" },
  { name: "พระเครื่องฉะเชิงเทรา", category: "region", url: "", keywords: ["ฉะเชิงเทรา"], img: "" },
  { name: "พระเครื่องชลบุรี", category: "region", url: "", keywords: ["ชลบุรี"], img: "" },
  { name: "พระเครื่องชัยนาท", category: "region", url: "", keywords: ["ชัยนาท"], img: "" },
  { name: "พระเครื่องชัยภูมิ", category: "region", url: "", keywords: ["ชัยภูมิ"], img: "" },
  { name: "พระเครื่องชุมพร", category: "region", url: "", keywords: ["ชุมพร"], img: "" },
  { name: "พระเครื่องเชียงราย", category: "region", url: "", keywords: ["เชียงราย"], img: "" },
  { name: "พระเครื่องเชียงใหม่", category: "region", url: "https://photos.app.goo.gl/NdjgmtvmYvhDnP1v7", keywords: ["เชียงใหม่"], img: "" },
  { name: "พระเครื่องตรัง", category: "region", url: "https://photos.app.goo.gl/BnHAyBYBLhnTxndCA", keywords: ["ตรัง"], img: "" },
  { name: "พระเครื่องตราด", category: "region", url: "", keywords: ["ตราด"], img: "" },
  { name: "พระเครื่องตาก", category: "region", url: "", keywords: ["ตาก"], img: "" },
  { name: "พระเครื่องนครนายก", category: "region", url: "", keywords: ["นครนายก"], img: "" },
  { name: "พระเครื่องนครปฐม", category: "region", url: "https://photos.app.goo.gl/UQ2cR1LrqMvJePWVA", keywords: ["นครปฐม"], img: "" },
  { name: "พระเครื่องนครพนม", category: "region", url: "", keywords: ["นครพนม"], img: "" },
  { name: "พระเครื่องนครราชสีมา", category: "region", url: "https://icedrive.net/s/gzwvv6ARBjA5Q3DP8gyTSAVDSWtu", keywords: ["นครราชสีมา"], img: "" },
  { name: "พระเครื่องนครศรีธรรมราช", category: "region", url: "", keywords: ["นครศรีธรรมราช"], img: "" },
  { name: "พระเครื่องนครสวรรค์", category: "region", url: "", keywords: ["นครสวรรค์"], img: "" },
  { name: "พระเครื่องนนทบุรี", category: "region", url: "", keywords: ["นนทบุรี"], img: "" },
  { name: "พระเครื่องนราธิวาส", category: "region", url: "", keywords: ["นราธิวาส"], img: "" },
  { name: "พระเครื่องน่าน", category: "region", url: "", keywords: ["น่าน"], img: "" },
  { name: "พระเครื่องบึงกาฬ", category: "region", url: "", keywords: ["บึงกาฬ"], img: "" },
  { name: "พระเครื่องบุรีรัมย์", category: "region", url: "", keywords: ["บุรีรัมย์"], img: "" },
  { name: "พระเครื่องปทุมธานี", category: "region", url: "", keywords: ["ปทุมธานี"], img: "" },
  { name: "พระเครื่องประจวบคีรีขันธ์", category: "region", url: "", keywords: ["ประจวบคีรีขันธ์"], img: "" },
  { name: "พระเครื่องปราจีนบุรี", category: "region", url: "", keywords: ["ปราจีนบุรี"], img: "" },
  { name: "พระเครื่องปัตตานี", category: "region", url: "", keywords: ["ปัตตานี"], img: "" },
  { name: "พระเครื่องพระนครศรีอยุธยา", category: "region", url: "https://photos.app.goo.gl/4XQMKJAjMaJmFzZAA", keywords: ["อยุธยา","พระนครศรีอยุธยา"], img: "" },
  { name: "พระเครื่องพะเยา", category: "region", url: "", keywords: ["พะเยา"], img: "" },
  { name: "พระเครื่องพังงา", category: "region", url: "", keywords: ["พังงา"], img: "" },
  { name: "พระเครื่องพัทลุง", category: "region", url: "", keywords: ["พัทลุง"], img: "" },
  { name: "พระเครื่องพิจิตร", category: "region", url: "", keywords: ["พิจิตร"], img: "" },
  { name: "พระเครื่องพิษณุโลก", category: "region", url: "", keywords: ["พิษณุโลก"], img: "" },
  { name: "พระเครื่องเพชรบุรี", category: "region", url: "https://icedrive.net/s/3i8uCCFhB2Z5F4xv1tx2uikikYTa", keywords: ["เพชรบุรี"], img: "" },
  { name: "พระเครื่องเพชรบูรณ์", category: "region", url: "", keywords: ["เพชรบูรณ์"], img: "" },
  { name: "พระเครื่องแพร่", category: "region", url: "", keywords: ["แพร่"], img: "" },
  { name: "พระเครื่องภูเก็ต", category: "region", url: "", keywords: ["ภูเก็ต"], img: "" },
  { name: "พระเครื่องมหาสารคาม", category: "region", url: "", keywords: ["มหาสารคาม"], img: "" },
  { name: "พระเครื่องมุกดาหาร", category: "region", url: "", keywords: ["มุกดาหาร"], img: "" },
  { name: "พระเครื่องแม่ฮ่องสอน", category: "region", url: "", keywords: ["แม่ฮ่องสอน"], img: "" },
  { name: "พระเครื่องยโสธร", category: "region", url: "", keywords: ["ยโสธร"], img: "" },
  { name: "พระเครื่องยะลา", category: "region", url: "", keywords: ["ยะลา"], img: "" },
  { name: "พระเครื่องร้อยเอ็ด", category: "region", url: "", keywords: ["ร้อยเอ็ด"], img: "" },
  { name: "พระเครื่องระนอง", category: "region", url: "", keywords: ["ระนอง"], img: "" },
  { name: "พระเครื่องระยอง", category: "region", url: "", keywords: ["ระยอง"], img: "" },
  { name: "พระเครื่องราชบุรี", category: "region", url: "", keywords: ["ราชบุรี"], img: "" },
  { name: "พระเครื่องลพบุรี", category: "region", url: "", keywords: ["ลพบุรี"], img: "" },
  { name: "พระเครื่องลำปาง", category: "region", url: "", keywords: ["ลำปาง"], img: "" },
  { name: "พระเครื่องลำพูน", category: "region", url: "https://photos.app.goo.gl/WQLyGwurT1kKj5Kn9", keywords: ["ลำพูน"], img: "" },
  { name: "พระเครื่องเลย", category: "region", url: "", keywords: ["เลย"], img: "" },
  { name: "พระเครื่องศรีสะเกษ", category: "region", url: "", keywords: ["ศรีสะเกษ"], img: "" },
  { name: "พระเครื่องสกลนคร", category: "region", url: "", keywords: ["สกลนคร"], img: "" },
  { name: "พระเครื่องสงขลา", category: "region", url: "", keywords: ["สงขลา"], img: "" },
  { name: "พระเครื่องสตูล", category: "region", url: "", keywords: ["สตูล"], img: "" },
  { name: "พระเครื่องสมุทรปราการ", category: "region", url: "", keywords: ["สมุทรปราการ"], img: "" },
  { name: "พระเครื่องสมุทรสงคราม", category: "region", url: "", keywords: ["สมุทรสงคราม"], img: "" },
  { name: "พระเครื่องสมุทรสาคร", category: "region", url: "", keywords: ["สมุทรสาคร"], img: "" },
  { name: "พระเครื่องสระแก้ว", category: "region", url: "", keywords: ["สระแก้ว"], img: "" },
  { name: "พระเครื่องสระบุรี", category: "region", url: "", keywords: ["สระบุรี"], img: "" },
  { name: "พระเครื่องสิงห์บุรี", category: "region", url: "", keywords: ["สิงห์บุรี"], img: "" },
  { name: "พระเครื่องสุโขทัย", category: "region", url: "", keywords: ["สุโขทัย"], img: "" },
  { name: "พระเครื่องสุพรรณบุรี", category: "region", url: "https://photos.app.goo.gl/yEmxTfQwAXW33bAw7", keywords: ["สุพรรณบุรี"], img: "" },
  { name: "พระเครื่องสุราษฎร์ธานี", category: "region", url: "", keywords: ["สุราษฎร์ธานี"], img: "" },
  { name: "พระเครื่องสุรินทร์", category: "region", url: "", keywords: ["สุรินทร์"], img: "" },
  { name: "พระเครื่องหนองคาย", category: "region", url: "", keywords: ["หนองคาย"], img: "" },
  { name: "พระเครื่องหนองบัวลำภู", category: "region", url: "", keywords: ["หนองบัวลำภู"], img: "" },
  { name: "พระเครื่องอ่างทอง", category: "region", url: "https://icedrive.net/s/PyBFvCxv6ybz4iT4G8YjZTkwGB3R", keywords: ["อ่างทอง"], img: "https://k1823.wordpress.com/%E0%B8%A3%E0%B8%B9%E0%B9%89%E0%B8%88%E0%B8%B1%E0%B8%81%E0%B8%81%E0%B8%B1%E0%B8%9A%E0%B8%AD%E0%B9%88%E0%B8%B2%E0%B8%87%E0%B8%97%E0%B8%AD%E0%B8%87/" },
  { name: "พระเครื่องอำนาจเจริญ", category: "region", url: "", keywords: ["อำนาจเจริญ"], img: "" },
  { name: "พระเครื่องอุดรธานี", category: "region", url: "", keywords: ["อุดรธานี"], img: "" },
  { name: "พระเครื่องอุตรดิตถ์", category: "region", url: "https://photos.app.goo.gl/ghfZLTKCveMozpgk7", keywords: ["อุตรดิตถ์"], img: "" },
  { name: "พระเครื่องอุทัยธานี", category: "region", url: "", keywords: ["อุทัยธานี"], img: "" },
  { name: "พระเครื่องอุบลราชธานี", category: "region", url: "", keywords: ["อุบลราชธานี"], img: "" },

  // ------------------------- ✨ พระเครื่องพิเศษ (เพิ่มเติม) -------------------------
  { name: "พระสามกรุเวียงท่ากานเชียงใหม่", category: "region", url: "https://photos.app.goo.gl/NdjgmtvmYvhDnP1v7", keywords: ["สามกรุ","เวียงท่ากาน","เชียงใหม่"], img: "" },
  { name: "หลวงปู่ฝั้น อาจาโร วัดป่าอุดมสมพร จ.สกลนคร", category: "forest", url: "https://icedrive.net/s/YTVRj2Q2F5C7jw7iVATySXz12t4D", keywords: ["หลวงปู่ฝั้น","ฝั้น","อาจาโร","สกลนคร"], img: "" },
  { name: "หลวงปู่ไข่วัดเชิงเลน กทม", category: "monk", url: "https://icedrive.net/s/Q5S1Yi6twu4xQTwf58gR3DPRY3uy", keywords: ["หลวงปู่ไข่","วัดเชิงเลน","กทม"], img: "" },
  { name: "พระผงสุพรรณ", category: "ancient", url: "https://photos.app.goo.gl/yEmxTfQwAXW33bAw7", keywords: ["ผงสุพรรณ","สุพรรณ"], img: "" },
  { name: "พระเปิมลำพูน", category: "ancient", url: "https://photos.app.goo.gl/WQLyGwurT1kKj5Kn9", keywords: ["พระเปิม","ลำพูน"], img: "" },
  { name: "พระรอดมหาวันพิมพ์กลาง", category: "ancient", url: "https://photos.app.goo.gl/SHUqBow99Rx5Ar1R6", keywords: ["รอดมหาวัน","พิมพ์กลาง"], img: "" },
  { name: "พระรอดมหาวันพิมพ์ใหญ่", category: "ancient", url: "https://icedrive.net/s/fhBkPzfWzVVVGSPSgYkt3AvR3NyF", keywords: ["รอดมหาวัน","พิมพ์ใหญ่"], img: "" },
  { name: "พระพุทโธน้อยแม่ชีบุญเรือน", category: "monk", url: "https://icedrive.net/s/vYkgSS3vTYAvVbkA97vSTki4tfXF", keywords: ["พุทโธน้อย","แม่ชีบุญเรือน"], img: "" },
  { name: "หลวงพ่อเกษรวัดท่าพระ", category: "monk", url: "https://icedrive.net/s/jb992PRiWg2htBuxaB4bZ1f6R7i8", keywords: ["หลวงพ่อเกษร","วัดท่าพระ"], img: "" },
  { name: "หลวงพ่อเงินวัดบางคลาน", category: "monk", url: "https://icedrive.net/s/S1bx3jv7Sfi96415gzaxQ5jiCtGV", keywords: ["หลวงพ่อเงิน","วัดบางคลาน"], img: "" },
  { name: "หลวงปู่ฝั้น อาจาโร", category: "forest", url: "https://icedrive.net/s/x6GVaxSRgGuDyxvNAYPVVNZQ6DbN", keywords: ["หลวงปู่ฝั้น","อาจาโร"], img: "" },
  { name: "หลวงพ่อเนียม (วัดน้อย)", category: "forest", url: "https://mega.nz/folder/bK4yjIaA#iLp1GuhiwRVVpPshQ1YpXQ", keywords: ["หลวงพ่อเนียม","สุพรรณ"], img: "" },
  { name: "หลวงพ่อเนียม (เศียรแหลม)", category: "ancient", url: "https://mega.nz/folder/GGRmEajK#0fctrh7UpyNlGaZU5Yftwg", keywords: ["หลวงพ่อเนียม","เศียรแหลม"], img: "" },

  // ------------------------- ☁ พระเกจิเก่า (ตัวอย่าง) -------------------------
  { name: "หลวงปู่มั่น ภูริทัตโต", category: "old-monk", url: "detail/lp-mun.html", keywords: ["หลวงปู่มั่น","มั่น","ภูริทัตโต"], img: "img/monks/lp-mun.jpg" },
  { name: "หลวงปู่ศุข วัดปากคลองมะขามเฒ่า", category: "old-monk", url: "detail/lp-suk.html", keywords: ["หลวงปู่ศุข","ศุข"], img: "img/monks/lp-suk.jpg" },
  { name: "หลวงปู่ทิม วัดละหารไร่", category: "old-monk", url: "detail/lp-tim.html", keywords: ["หลวงปู่ทิม","ทิม ละหารไร่"], img: "img/monks/lp-tim.jpg" },

  // ------------------------- 🌲 พระป่าสายกรรมฐาน -------------------------
  { name: "พระเครื่องสายหลวงปู่ชอบ ฐานสโม", category: "forest", url: "detail/lp-chob.html", keywords: ["หลวงปู่ชอบ","ชอบ ฐานสโม"], img: "img/forest/lp-chob.jpg" },
  { name: "พระเครื่องสายพระอาจารย์ฝั้น อาจาโร", category: "forest", url: "detail/phra-fan.html", keywords: ["อาจารย์ฝั้น","ฝั้น"], img: "img/forest/phra-fan.jpg" }
];

// ======================== ฟังก์ชันค้นหาหลัก (ใช้ใน main.js) ========================
function searchAmulets(keyword) {
  if (!keyword) return [];
  const q = keyword.toLowerCase().trim();
  const words = q.split(/\s+/);
  return amulets.filter(item => {
    const nameMatch = words.some(w => item.name.toLowerCase().includes(w));
    const keywordMatch = item.keywords ? words.some(w => item.keywords.some(kw => kw.includes(w))) : false;
    return nameMatch || keywordMatch;
  });
}