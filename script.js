let selectedYears = 5;

document.querySelectorAll(".period button").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".period button").forEach((b) => b.classList.remove("active"));
    button.classList.add("active");
    selectedYears = Number(button.dataset.years);
  });
});

function saveContact() {
  const vCard = `BEGIN:VCARD
VERSION:3.0
FN:김민규
N:김민규;;;;
ORG:BYD Auto bundang Showroom
TITLE:주임
TEL;TYPE=CELL:01027833820
EMAIL;TYPE=INTERNET:mingyu.kim01@dtnetworks.co.kr
ADR:;;경기 성남시 분당구 대왕판교로 322 1층;;;;
URL:https://blog.naver.com/min-_2628
END:VCARD`;

  const blob = new Blob([vCard], { type: "text/vcard;charset=utf-8" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "kim-mingyu-contact.vcf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function copyAddress() {
  const address = "경기 성남시 분당구 대왕판교로 322 1층";

  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(address)
      .then(() => alert("주소가 복사되었습니다."))
      .catch(() => fallbackCopy(address));
  } else {
    fallbackCopy(address);
  }
}

function fallbackCopy(text) {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.style.position = "fixed";
  textarea.style.left = "-9999px";
  document.body.appendChild(textarea);
  textarea.focus();
  textarea.select();

  try {
    document.execCommand("copy");
    alert("주소가 복사되었습니다.");
  } catch (err) {
    alert("주소 복사에 실패했습니다. 주소: " + text);
  }

  document.body.removeChild(textarea);
}

function formatWon(num) {
  return Math.round(num).toLocaleString("ko-KR") + "원";
}

function calculateSaving() {
  const fuelPrice = Number(document.getElementById("fuelPrice").value);
  const hybridEff = Number(document.getElementById("hybridEff").value);
  const yearKm = Number(document.getElementById("yearKm").value);
  const model = document.getElementById("model").value;

  if (!fuelPrice || !hybridEff || !yearKm) {
    alert("값을 모두 입력해주세요.");
    return;
  }

  const chargingPrice = 160; // 원/kWh, 계산용 기본값
  const evEfficiencyByModel = {
    "DOLPHIN": 6.2,
    "ATTO 3": 5.4,
    "SEAL": 5.8,
    "SEALION 7": 5.1,
    "SEALION 6": 5.0
  };

  const evEff = evEfficiencyByModel[model];
  const annualHybridFuelCost = (yearKm / hybridEff) * fuelPrice;
  const annualEvChargingCost = (yearKm / evEff) * chargingPrice;
  const annualMaintenanceSaving = 250000;
  const annualEtcBenefit = 150000;

  const annualSaving =
    (annualHybridFuelCost - annualEvChargingCost) +
    annualMaintenanceSaving +
    annualEtcBenefit;

  const totalSaving = annualSaving * selectedYears;

  document.getElementById("resultBox").innerHTML = `
    <strong>${selectedYears}년 기준 예상 절감액</strong><br><br>
    · 하이브리드 예상 연간 연료비: ${formatWon(annualHybridFuelCost)}<br>
    · ${model} 예상 연간 충전비: ${formatWon(annualEvChargingCost)}<br>
    · 정비/기타 혜택 연간 추정: ${formatWon(annualMaintenanceSaving + annualEtcBenefit)}<br><br>
    <strong>총 예상 절감액: ${formatWon(totalSaving)}</strong><br>
    <small>※ 단순 상담용 계산값이며 실제 비용은 주행 조건, 충전 단가, 보험/세금 등에 따라 달라질 수 있습니다.</small>
  `;
}

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js").catch(() => {});
  });
}
