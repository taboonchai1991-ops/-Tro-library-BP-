/* =========================================
   AMULET DATA (UPGRADE VERSION)
   - Includes all 77 provinces
   - Placeholder URLs – replace with real ones
========================================= */

const amulets = [

  // ========== ORIGINAL ENTRIES (KEPT) ==========
  // 🌲 สายกรรมฐาน
  {
    name: "หลวงปู่ฝั้น อาจาโร วัดป่าอุดมสมพร",
    category: "forest",
    url: "https://icedrive.net/s/YTVRj2Q2F5C7jw7iVATySXz12t4D",
    keywords: ["หลวงปู่ฝั้น", "ฝั้น", "วัดป่า", "กรรมฐาน", "สกลนคร"]
  },

  // 🏺 พระกรุ / โบราณ
  {
    name: "พระสามกรุเวียงท่ากานเชียงใหม่",
    category: "ancient",
    url: "https://photos.app.goo.gl/NdjgmtvmYvhDnP1v7",
    keywords: ["เวียงท่ากาน", "สามกรุ", "เชียงใหม่"]
  },
  {
    name: "พระผงสุพรรณ",
    category: "ancient",
    url: "https://photos.app.goo.gl/yEmxTfQwAXW33bAw7",
    keywords: ["สุพรรณ"]
  },
  {
    name: "พระเปิมลำพูน",
    category: "ancient",
    url: "https://photos.app.goo.gl/WQLyGwurT1kKj5Kn9",
    keywords: ["ลำพูน", "พระเปิม"]
  },
  {
    name: "พระรอดมหาวันพิมพ์กลาง",
    category: "ancient",
    url: "https://photos.app.goo.gl/SHUqBow99Rx5Ar1R6",
    keywords: ["พระรอด", "มหาวัน", "พิมพ์กลาง"]
  },
  {
    name: "พระรอดมหาวันพิมพ์ใหญ่",
    category: "ancient",
    url: "https://icedrive.net/s/fhBkPzfWzVVVGSPSgYkt3AvR3NyF",
    keywords: ["พระรอด", "พิมพ์ใหญ่"]
  },
  {
    name: "พระกรุวังบัว เพชรบุรี",
    category: "ancient",
    url: "https://icedrive.net/s/3i8uCCFhB2Z5F4xv1tx2uikikYTa",
    keywords: ["กรุวังบัว", "เพชรบุรี"]
  },

  // 🧘 พระเกจิ
  {
    name: "หลวงปู่ไข่ วัดเชิงเลน",
    category: "monk",
    url: "https://icedrive.net/s/Q5S1Yi6twu4xQTwf58gR3DPRY3uy",
    keywords: ["หลวงปู่ไข่", "วัดเชิงเลน"]
  },
  {
    name: "หลวงพ่อเกษร วัดท่าพระ",
    category: "monk",
    url: "https://icedrive.net/s/jb992PRiWg2htBuxaB4bZ1f6R7i8",
    keywords: ["หลวงพ่อเกษร"]
  },
  {
    name: "หลวงพ่อแก้ว พิมพ์ปั่น",
    category: "monk",
    url: "https://icedrive.net/s/kB2a6552k1QyT4bzhaGYtB1F5fT7",
    keywords: ["หลวงพ่อแก้ว"]
  },
  {
    name: "หลวงพ่อวงษ์ วัดทุ่งผักกูด",
    category: "monk",
    url: "https://icedrive.net/s/kB2a6552k1QyT4bzhaGYtB1F5fT7",
    keywords: ["หลวงพ่อวงษ์"]
  },
  {
    name: "หลวงปู่พริ้ง วัดบางปะกอก",
    category: "monk",
    url: "https://icedrive.net/s/1Bjz968YDNt3YaiQ8tBR1FTW3gX8",
    keywords: ["หลวงปู่พริ้ง"]
  },

  // 🏙 จังหวัด (original region entries)
  {
    name: "พระเครื่องกรุงเทพมหานคร",
    category: "region",
    url: "https://photos.app.goo.gl/GcmfNfKeiCzaTsFH8",
    keywords: ["กรุงเทพ", "กทม"]
  },
  {
    name: "พระเครื่องเมืองอยุธยา",
    category: "region",
    url: "https://photos.app.goo.gl/4XQMKJAjMaJmFzZAA",
    keywords: ["อยุธยา"]
  },
  {
    name: "พระเครื่องเมืองอุตรดิตถ์",
    category: "region",
    url: "https://photos.app.goo.gl/ghfZLTKCveMozpgk7",
    keywords: ["อุตรดิตถ์"]
  },
  {
    name: "พระเครื่องนครนายกและปทุมธานี",
    category: "region",
    url: "https://photos.app.goo.gl/jJDwJFZQPw72Wsr6A",
    keywords: ["นครนายก", "ปทุม"]
  },
  {
    name: "พระเครื่องเมืองตรัง",
    category: "region",
    url: "https://photos.app.goo.gl/BnHAyBYBLhnTxndCA",
    keywords: ["ตรัง"]
  },
  {
    name: "พระเครื่องอ่างทอง",
    category: "region",
    url: "https://photos.app.goo.gl/nw9RMNeWse2gnxgk7",
    keywords: ["อ่างทอง"]
  },
  {
    name: "พระเครื่องนครปฐม",
    category: "region",
    url: "https://photos.app.goo.gl/UQ2cR1LrqMvJePWVA",
    keywords: ["นครปฐม"]
  },

  // 🔥 พิเศษ
  {
    name: "พระพุทโธน้อย แม่ชีบุญเรือน",
    category: "special",
    url: "https://icedrive.net/s/vYkgSS3vTYAvVbkA97vSTki4tfXF",
    keywords: ["พุทโธน้อย", "แม่ชีบุญเรือน"]
  },
  {
    name: "พระปรุหนัง หลวงพ่อเนียม",
    category: "special",
    url: "https://mega.nz/folder/bK4yjIaA#iLp1GuhiwRVVpPshQ1YpXQ",
    keywords: ["ปรุหนัง", "เนียม"]
  },
  {
    name: "พระพิมพ์เศียรแหลม หลวงพ่อเนียม",
    category: "special",
    url: "https://mega.nz/folder/GGRmEajK#0fctrh7UpyNlGaZU5Yftwg",
    keywords: ["เศียรแหลม"]
  },
  {
    name: "พระเชตุพน หลวงพ่อเนียม",
    category: "special",
    url: "https://icedrive.net/s/9f4SPuf1Yvg5C8D4Q3u9vg1YBNW4",
    keywords: ["เชตุพน"]
  },

  // ========== NEW: ALL 77 PROVINCES ==========
  // (Placeholder URLs – please replace with actual links)
  // We list every province of Thailand as a separate "region" entry.
  // Duplicates with original entries are intentional for completeness.

  { name: "พระเครื่องกระบี่", category: "region", url: "", keywords: ["กระบี่"] },
  { name: "พระเครื่องกรุงเทพมหานคร", category: "region", url: "", keywords: ["กรุงเทพ"] },
  { name: "พระเครื่องกาญจนบุรี", category: "region", url: "", keywords: ["กาญจนบุรี"] },
  { name: "พระเครื่องกาฬสินธุ์", category: "region", url: "", keywords: ["กาฬสินธุ์"] },
  { name: "พระเครื่องกำแพงเพชร", category: "region", url: "", keywords: ["กำแพงเพชร"] },
  { name: "พระเครื่องขอนแก่น", category: "region", url: "", keywords: ["ขอนแก่น"] },
  { name: "พระเครื่องจันทบุรี", category: "region", url: "", keywords: ["จันทบุรี"] },
  { name: "พระเครื่องฉะเชิงเทรา", category: "region", url: "", keywords: ["ฉะเชิงเทรา"] },
  { name: "พระเครื่องชลบุรี", category: "region", url: "", keywords: ["ชลบุรี"] },
  { name: "พระเครื่องชัยนาท", category: "region", url: "", keywords: ["ชัยนาท"] },
  { name: "พระเครื่องชัยภูมิ", category: "region", url: "", keywords: ["ชัยภูมิ"] },
  { name: "พระเครื่องชุมพร", category: "region", url: "", keywords: ["ชุมพร"] },
  { name: "พระเครื่องเชียงราย", category: "region", url: "", keywords: ["เชียงราย"] },
  { name: "พระเครื่องเชียงใหม่", category: "region", url: "", keywords: ["เชียงใหม่"] },
  { name: "พระเครื่องตรัง", category: "region", url: "", keywords: ["ตรัง"] },
  { name: "พระเครื่องตราด", category: "region", url: "", keywords: ["ตราด"] },
  { name: "พระเครื่องตาก", category: "region", url: "", keywords: ["ตาก"] },
  { name: "พระเครื่องนครนายก", category: "region", url: "", keywords: ["นครนายก"] },
  { name: "พระเครื่องนครปฐม", category: "region", url: "", keywords: ["นครปฐม"] },
  { name: "พระเครื่องนครพนม", category: "region", url: "", keywords: ["นครพนม"] },
  { name: "พระเครื่องนครราชสีมา", category: "region", url: "", keywords: ["นครราชสีมา"] },
  { name: "พระเครื่องนครศรีธรรมราช", category: "region", url: "", keywords: ["นครศรีธรรมราช"] },
  { name: "พระเครื่องนครสวรรค์", category: "region", url: "", keywords: ["นครสวรรค์"] },
  { name: "พระเครื่องนนทบุรี", category: "region", url: "", keywords: ["นนทบุรี"] },
  { name: "พระเครื่องนราธิวาส", category: "region", url: "", keywords: ["นราธิวาส"] },
  { name: "พระเครื่องน่าน", category: "region", url: "", keywords: ["น่าน"] },
  { name: "พระเครื่องบึงกาฬ", category: "region", url: "", keywords: ["บึงกาฬ"] },
  { name: "พระเครื่องบุรีรัมย์", category: "region", url: "", keywords: ["บุรีรัมย์"] },
  { name: "พระเครื่องปทุมธานี", category: "region", url: "", keywords: ["ปทุมธานี"] },
  { name: "พระเครื่องประจวบคีรีขันธ์", category: "region", url: "", keywords: ["ประจวบคีรีขันธ์"] },
  { name: "พระเครื่องปราจีนบุรี", category: "region", url: "", keywords: ["ปราจีนบุรี"] },
  { name: "พระเครื่องปัตตานี", category: "region", url: "", keywords: ["ปัตตานี"] },
  { name: "พระเครื่องพระนครศรีอยุธยา", category: "region", url: "", keywords: ["พระนครศรีอยุธยา", "อยุธยา"] },
  { name: "พระเครื่องพะเยา", category: "region", url: "", keywords: ["พะเยา"] },
  { name: "พระเครื่องพังงา", category: "region", url: "", keywords: ["พังงา"] },
  { name: "พระเครื่องพัทลุง", category: "region", url: "", keywords: ["พัทลุง"] },
  { name: "พระเครื่องพิจิตร", category: "region", url: "", keywords: ["พิจิตร"] },
  { name: "พระเครื่องพิษณุโลก", category: "region", url: "", keywords: ["พิษณุโลก"] },
  { name: "พระเครื่องเพชรบุรี", category: "region", url: "", keywords: ["เพชรบุรี"] },
  { name: "พระเครื่องเพชรบูรณ์", category: "region", url: "", keywords: ["เพชรบูรณ์"] },
  { name: "พระเครื่องแพร่", category: "region", url: "", keywords: ["แพร่"] },
  { name: "พระเครื่องภูเก็ต", category: "region", url: "", keywords: ["ภูเก็ต"] },
  { name: "พระเครื่องมหาสารคาม", category: "region", url: "", keywords: ["มหาสารคาม"] },
  { name: "พระเครื่องมุกดาหาร", category: "region", url: "", keywords: ["มุกดาหาร"] },
  { name: "พระเครื่องแม่ฮ่องสอน", category: "region", url: "", keywords: ["แม่ฮ่องสอน"] },
  { name: "พระเครื่องยโสธร", category: "region", url: "", keywords: ["ยโสธร"] },
  { name: "พระเครื่องยะลา", category: "region", url: "", keywords: ["ยะลา"] },
  { name: "พระเครื่องร้อยเอ็ด", category: "region", url: "", keywords: ["ร้อยเอ็ด"] },
  { name: "พระเครื่องระนอง", category: "region", url: "", keywords: ["ระนอง"] },
  { name: "พระเครื่องระยอง", category: "region", url: "", keywords: ["ระยอง"] },
  { name: "พระเครื่องราชบุรี", category: "region", url: "", keywords: ["ราชบุรี"] },
  { name: "พระเครื่องลพบุรี", category: "region", url: "", keywords: ["ลพบุรี"] },
  { name: "พระเครื่องลำปาง", category: "region", url: "", keywords: ["ลำปาง"] },
  { name: "พระเครื่องลำพูน", category: "region", url: "", keywords: ["ลำพูน"] },
  { name: "พระเครื่องเลย", category: "region", url: "", keywords: ["เลย"] },
  { name: "พระเครื่องศรีสะเกษ", category: "region", url: "", keywords: ["ศรีสะเกษ"] },
  { name: "พระเครื่องสกลนคร", category: "region", url: "", keywords: ["สกลนคร"] },
  { name: "พระเครื่องสงขลา", category: "region", url: "", keywords: ["สงขลา"] },
  { name: "พระเครื่องสตูล", category: "region", url: "", keywords: ["สตูล"] },
  { name: "พระเครื่องสมุทรปราการ", category: "region", url: "", keywords: ["สมุทรปราการ"] },
  { name: "พระเครื่องสมุทรสงคราม", category: "region", url: "", keywords: ["สมุทรสงคราม"] },
  { name: "พระเครื่องสมุทรสาคร", category: "region", url: "", keywords: ["สมุทรสาคร"] },
  { name: "พระเครื่องสระแก้ว", category: "region", url: "", keywords: ["สระแก้ว"] },
  { name: "พระเครื่องสระบุรี", category: "region", url: "", keywords: ["สระบุรี"] },
  { name: "พระเครื่องสิงห์บุรี", category: "region", url: "", keywords: ["สิงห์บุรี"] },
  { name: "พระเครื่องสุโขทัย", category: "region", url: "", keywords: ["สุโขทัย"] },
  { name: "พระเครื่องสุพรรณบุรี", category: "region", url: "", keywords: ["สุพรรณบุรี"] },
  { name: "พระเครื่องสุราษฎร์ธานี", category: "region", url: "", keywords: ["สุราษฎร์ธานี"] },
  { name: "พระเครื่องสุรินทร์", category: "region", url: "", keywords: ["สุรินทร์"] },
  { name: "พระเครื่องหนองคาย", category: "region", url: "", keywords: ["หนองคาย"] },
  { name: "พระเครื่องหนองบัวลำภู", category: "region", url: "", keywords: ["หนองบัวลำภู"] },
  { name: "พระเครื่องอ่างทอง", category: "region", url: "", keywords: ["อ่างทอง"] },
  { name: "พระเครื่องอำนาจเจริญ", category: "region", url: "", keywords: ["อำนาจเจริญ"] },
  { name: "พระเครื่องอุดรธานี", category: "region", url: "", keywords: ["อุดรธานี"] },
  { name: "พระเครื่องอุตรดิตถ์", category: "region", url: "", keywords: ["อุตรดิตถ์"] },
  { name: "พระเครื่องอุทัยธานี", category: "region", url: "", keywords: ["อุทัยธานี"] },
  { name: "พระเครื่องอุบลราชธานี", category: "region", url: "", keywords: ["อุบลราชธานี"] }
];