// ========== AI INTENT DATABASE ==========
const aiDB = [
  { intent: "พระรอด", keywords: ["พระรอด","รอด","มหาวัน","ลำพูน","รอดมหาวัน"], reply: "🏺 กำลังแสดงพระรอดมหาวัน (กรุวัดมหาวัน จ.ลำพูน) พระเครื่องขึ้นชื่อแห่งล้านนา" },
  { intent: "หลวงพ่อเนียม", keywords: ["หลวงพ่อเนียม","เนียม","ปิดตา","เศียรแหลม","เชตุพน"], reply: "🔮 พบพระเครื่องหลวงพ่อเนียม วัดน้อย อินทรบุรี – พระปิดตาหลวงพ่อเนียมสุดยอดเมตตา" },
  { intent: "หลวงปู่ฝั้น", keywords: ["หลวงปู่ฝั้น","ฝั้น","อาจาโร","วัดป่าอุดมสมพร"], reply: "🌲 หลวงปู่ฝั้น อาจาโร สายพระป่ากรรมฐาน เครื่องเด่น: พระปิดตาหลวงปู่ฝั้น, เหรียญรุ่นแรก" },
  { intent: "หลวงปู่ทวด", keywords: ["หลวงปู่ทวด","ทวด","เหยียบน้ำทะเลจืด","พะโคะ","ช้างไห้"], reply: "🔱 หลวงปู่ทวด เหยียบน้ำทะเลจืด เครื่องดัง เช่น เนื้อว่าน เนื้อเงิน พิมพ์ใหญ่ พิมพ์เล็ก" },
  { intent: "สมเด็จโต", keywords: ["สมเด็จ","วัดระฆัง","สมเด็จโต","พระสมเด็จ","อมรินทร์"], reply: "📿 พระสมเด็จวัดระฆัง เนื้อผงเกสรดอกไม้ สร้างโดยสมเด็จพระพุฒาจารย์ (โต) พิมพ์เกศบัวตูม" }
];

// ฟังก์ชันค้นหาจาก amulets (ใช้ของเดิมที่มีใน amulet-data.js ได้ แต่เพื่อความมั่นใจให้ประกาศซ้ำก็ได้)
// แต่ถ้าใน amulet-data.js มีอยู่แล้ว ให้ลบส่วนนี้ทิ้ง แล้วใช้ searchAmulets ที่โหลดมาก่อนหน้า
// อย่างไรก็ตาม เราจะประกาศฟังก์ชันนี้ไว้เผื่อกรณีที่ amulet-data.js ยังไม่มี
function searchAmulets(keyword) {
  if (!keyword) return [];
  const q = keyword.toLowerCase().trim();
  const words = q.split(/\s+/);
  if (typeof amulets === 'undefined') { 
    console.warn("ยังไม่ได้โหลด amulets-data.js"); 
    return []; 
  }
  return amulets.filter(item => {
    const nameMatch = words.some(w => item.name.toLowerCase().includes(w));
    const keywordMatch = item.keywords ? words.some(w => item.keywords.some(kw => kw.includes(w))) : false;
    return nameMatch || keywordMatch;
  });
}

function getAIResponse(keyword) {
  if (!keyword) return null;
  const q = keyword.toLowerCase().trim();
  for (let intent of aiDB) {
    if (intent.keywords.some(kw => q.includes(kw))) return intent.reply;
  }
  return null;
}

// ค้นหาและแสดงผล (speakEnabled = true → พูดตอบ, false → ไม่พูด)
function globalSearch(speakEnabled = true) {
  const q = document.getElementById("searchInput").value.trim();
  const box = document.getElementById("searchResult");
  const aiDiv = document.getElementById("aiSuggest");
  box.innerHTML = "";
  aiDiv.innerHTML = "";
  if (!q) return;

  const found = searchAmulets(q);
  const aiReply = getAIResponse(q);

  if (found.length === 0) {
    if (speakEnabled) speak("เจ้านายครับ ไม่พบรายชื่อพระที่ท่านค้นหา");
    aiDiv.innerHTML = aiReply ? `🧠 ${aiReply}` : "🧠 ลองค้นด้วยชื่อจังหวัด หรือชื่อเกจิ เช่น 'เชียงใหม่', 'หลวงปู่มั่น', 'อยุธยา'";
    return;
  }

  found.forEach(item => {
    const card = document.createElement("div");
    card.className = "card";
    let badge = "";
    if (item.category === "region") badge = "📌 จังหวัด";
    else if (item.category === "old-monk") badge = "☁ เกจิเก่า";
    else if (item.category === "forest") badge = "🌲 พระป่า";
    else if (item.category === "ancient") badge = "🏺 โบราณ";
    else if (item.category === "monk") badge = "🔮 พระเกจิ";
    else badge = "✨ พระเครื่อง";

    const imgHtml = item.img ? `<img src="${item.img}" alt="${item.name}" loading="lazy">` : '<div class="no-img">📷 ไม่มีรูป</div>';
    card.innerHTML = `
      ${imgHtml}
      <div class="card-name"><strong>${item.name}</strong><br><small>${badge}</small></div>
      <a href="${item.url || '#'}" target="_blank" rel="noopener noreferrer">🔍 ดูรายละเอียด / อัลบั้ม</a>
    `;
    box.appendChild(card);
  });

  if (speakEnabled) speak(`พบ ${found.length} รายการ เช่น ${found[0].name}`);
  
  aiDiv.innerHTML = aiReply ? `🧠 ${aiReply}` : "🧠 AI แนะนำ: คลิกที่ชื่อพระเพื่อดูรายละเอียด หรือลองค้นหาด้วยเสียงครับ";
}

function speak(text) {
  if (!window.speechSynthesis) return;
  const msg = new SpeechSynthesisUtterance(text);
  msg.lang = "th-TH";
  msg.rate = 0.9;
  speechSynthesis.cancel();
  speechSynthesis.speak(msg);
}

function startVoice() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) { alert("เบราว์เซอร์ของคุณไม่รองรับการสั่งงานด้วยเสียง กรุณาใช้ Chrome, Edge หรือ Safari"); return; }
  const rec = new SpeechRecognition();
  rec.lang = "th-TH";
  rec.interimResults = false;
  rec.start();
  rec.onresult = (e) => {
    let text = e.results[0][0].transcript;
    text = text.replace(/ค้นหา|หาพระ|หา/g, "").trim();
    document.getElementById("searchInput").value = text;
    globalSearch(true);
  };
  rec.onerror = () => alert("ไม่สามารถฟังเสียงได้ ลองใหม่หรือพิมพ์เลยครับ");
}

function toggleMode() {
  document.body.classList.toggle("light");
  const btn = document.querySelector(".toggle-btn");
  btn.innerHTML = document.body.classList.contains("light") ? "🌙" : "☀️";
}

window.onload = () => {
  const welcome = document.getElementById("aiSuggest");
  if (welcome) welcome.innerHTML = "🧙‍♂️ ยินดีต้อนรับสู่ libraryพระลึกลับ พูดหรือพิมพ์ชื่อพระที่ต้องการได้เลยครับ";
};