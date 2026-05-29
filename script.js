const cars = {
  "DOLPHIN": {
    image: "assets/dolphin.png",
    title: "DOLPHIN",
    desc: "감각적인 디자인과 실용성을 겸비한 소형 해치백"
  },
  "ATTO 3": {
    image: "assets/atto3.png",
    title: "ATTO 3",
    desc: "실용성과 공간 활용성이 돋보이는 전기 SUV"
  },
  "SEAL": {
    image: "assets/seal.png",
    title: "SEAL",
    desc: "세련된 퍼포먼스와 디자인을 갖춘 전기 세단"
  },
  "SEALION 7": {
    image: "assets/sealion7.png",
    title: "SEALION 7",
    desc: "넓은 공간감과 미래지향적 스타일의 전기 SUV"
  },
  "SEALION 6": {
    image: "assets/sealion6.webp",
    title: "SEALION 6",
    desc: "균형 잡힌 주행감과 실용성을 갖춘 SUV"
  }
};

let selectedYears = 5;

function showCar(model) {
  const car = cars[model];
  if (!car) return;

  const img = document.getElementById("carImage");
  img.src = car.image;
  img.alt = "BYD " + car.title;

  document.getElementById("carTitle").textContent = car.title;
  document.getElementById("carDesc").textContent = car.desc;

  document.querySelectorAll(".model-button").forEach((button) => {
    button.classList.toggle("active", button.dataset.model === model);
  });

  const select = document.getElementById("modelSelect");
  if (select) select.value = model;
}

document.querySelectorAll(".model-button").forEach((button) => {
  button.addEventListener("click", () => {
    showCar(button.dataset.model);
    document.querySelector(".car-section").scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

document.getElementById("modelSelect").addEventListener("change", (event) => {
  showCar(event.target.value);
});

document.querySelectorAll(".period button").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".period button").forEach((b) => b.classList.remove("active"));
    button.classList.add("active");
    selectedYears = Number(button.dataset.years);
  });
});

function saveContact() {
  const vCard =
`BEGIN:VCARD
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
  navigator.clipboard.writeText(address)
    .then(() => alert("주소가 복사되었습니다."))
    .catch(() => alert(address));
}

function formatWon(value) {
  return Math.round(value).toLocaleString("ko-KR") + "원";
}

function calculateSaving() {
  const fuelPrice = Number(document.getElementById("fuelPrice").value);
  const hybridEff = Number(document.getElementById("hybridEff").value);
  const yearKm = Number(document.getElementById("yearKm").value);
  const model = document.getElementById("modelSelect").value;

  if (!fuelPrice || !hybridEff || !yearKm) {
    alert("값을 모두 입력해주세요.");
    return;
  }

  const chargingPrice = 160;
  const evEfficiency = {
    "DOLPHIN": 6.2,
    "ATTO 3": 5.4,
    "SEAL": 5.8,
    "SEALION 7": 5.1,
    "SEALION 6": 5.0
  };

  const annualHybridFuelCost = (yearKm / hybridEff) * fuelPrice;
  const annualEvChargingCost = (yearKm / evEfficiency[model]) * chargingPrice;
  const annualExtraSaving = 400000;
  const totalSaving = (annualHybridFuelCost - annualEvChargingCost + annualExtraSaving) * selectedYears;

  document.getElementById("result").innerHTML =
    `<strong>${selectedYears}년 기준 예상 절감액</strong><br><br>
    · 하이브리드 예상 연간 연료비: ${formatWon(annualHybridFuelCost)}<br>
    · ${model} 예상 연간 충전비: ${formatWon(annualEvChargingCost)}<br>
    · 정비/기타 혜택 연간 추정: ${formatWon(annualExtraSaving)}<br><br>
    <strong>총 예상 절감액: ${formatWon(totalSaving)}</strong><br>
    <small>※ 단순 상담용 계산값이며 실제 비용은 조건에 따라 달라질 수 있습니다.</small>`;
}

showCar("DOLPHIN");
