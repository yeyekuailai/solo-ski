const SCHEDULES = {
  parkCity: { firstUp: "6:50 AM*", lastDown: "11:20 PM*", confidence: "prior", basis: "Latest published reference · 26/27 pending", url: "https://www.parkcity.org/departments/transit-bus" },
  summitBreck: { firstUp: "6:15 AM", lastDown: "11:45 PM", confidence: "verified", basis: "Official 2026–27 schedule", validFrom: "2026-11-15", validTo: "2027-04-17", url: "https://www.summitcountyco.gov/services/transit_summit_stage/bus_schedule/winter_bus_schedule.php" },
  summitCopper: { firstUp: "6:15 AM", lastDown: "12:00 AM", confidence: "verified", basis: "Official 2026–27 schedule", validFrom: "2026-11-15", validTo: "2027-04-17", url: "https://www.summitcountyco.gov/services/transit_summit_stage/bus_schedule/winter_bus_schedule.php" },
  summitKeystone: { firstUp: "6:15 AM", lastDown: "12:15 AM", confidence: "verified", basis: "Official 2026–27 schedule", validFrom: "2026-11-15", validTo: "2027-04-17", url: "https://www.summitcountyco.gov/services/transit_summit_stage/bus_schedule/winter_bus_schedule.php" },
  denverBreck: { firstUp: "6:00 AM", lastDown: "7:45 PM", confidence: "current", basis: "Current Bustang + 2026–27 Summit Stage", url: "https://ridebustang.com/routes/west-line/" },
  denverCopper: { firstUp: "6:00 AM", lastDown: "8:00 PM", confidence: "current", basis: "Current Bustang + 2026–27 Summit Stage", url: "https://ridebustang.com/routes/west-line/" },
  denverKeystone: { firstUp: "6:00 AM", lastDown: "7:15 PM", confidence: "current", basis: "Current Bustang + 2026–27 Summit Stage", url: "https://ridebustang.com/routes/west-line/" },
  uta994: { firstUp: "6:01 AM*", lastDown: "6:54 PM*", confidence: "prior", basis: "2025–26 reference · 26/27 pending", url: "https://www.rideuta.com/Rider-Tools/Schedules-and-Maps/994-Historic-Sandy-Station-to-Snowbird-Alta" },
  uta972: { firstUp: "6:15 AM*", lastDown: "8:22 PM*", confidence: "prior", basis: "2025–26 reference · 26/27 pending", url: "https://www.rideuta.com/Rider-Tools/Schedules-and-Maps/972-Midvale-Ft-Union-Station-to-Solitude-Brighton" },
  mammoth: { firstUp: "7:00 AM", lastDown: "5:30 PM", confidence: "current", basis: "Current published winter service window", url: "https://www.visitmammoth.com/travel-info/getting-around/winter-transit/" },
  bachelor: { firstUp: "6:40 AM*", lastDown: "5:30 PM*", confidence: "prior", basis: "Prior service window · 26/27 pending", url: "https://cascadeseasttransit.com/ride/mt-bachelor-winter/" },
  jackson: { firstUp: "5:10 AM*", lastDown: "11:20 PM*", confidence: "prior", basis: "2025–26 reference · 26/27 pending", url: "https://www.jacksonwy.gov/404/Maps-Schedules" },
};

const routes = [
  {
    name: "Park City Mountain", pass: "Epic", state: "UT",
    sources: [["Park City routes & schedules", SCHEDULES.parkCity.url], ["Fare-free transit overview", "https://www.parkcity.org/departments/transportation-planning/ride-on-park-city/commuter-resources/transit"]],
    note: "Park City Transit is fare-free. The starred service window is a prior published reference; confirm the 2026–27 winter route before booking.",
    lodgings: [{ name: "Park City Hostel", baseCity: "Park City", price: 55, dailyTransit: 0, fareNote: "Free", priceNote: "Past dorm sample · taxes and availability excluded", booking: "https://www.booking.com/hotel/us/park-city-hostel.html", expedia: "https://www.expedia.com/Park-City-Hostels.d602285-aaHostels.Travel-Guide-Accommodation", transfers: 0, totalTime: 20, schedule: SCHEDULES.parkCity, steps: [["Hostel → nearest Park City Transit stop", "Walk", 5], ["Transit stop → Mountain Village", "Park City Transit", 15, "Free"]] }],
  },
  {
    name: "Breckenridge", pass: "Epic", state: "CO",
    sources: [["Summit Stage 2026–27 timetables", SCHEDULES.summitBreck.url], ["Bustang West Line timetable", "https://ridebustang.com/routes/west-line/"]],
    note: "Silverthorne is the practical daily base. Denver is cheaper in the static bed sample, but its $24 round trip and long I-70 commute reduce the overall plan score.",
    lodgings: [
      { name: "The Block Hotel & Commons", baseCity: "Silverthorne", price: 59, dailyTransit: 0, fareNote: "Free", priceNote: "Past dorm target · formerly The Pad", booking: "https://www.booking.com/hotel/us/the-pad-silverthorne.html", expedia: "https://www.expedia.com/Silverthorne-Hotels-The-Block-Hotel-Commons.h73255177.Hotel-Information", transfers: 1, totalTime: 65, schedule: SCHEDULES.summitBreck, steps: [["The Block → Silverthorne Station", "Walk", 5], ["Silverthorne → Frisco", "Summit Stage", 15, "Free"], ["Frisco → Breckenridge", "Summit Stage", 35, "Free"]] },
      { name: "Hostel Fish", baseCity: "Denver", price: 50, dailyTransit: 24, fareNote: "$24 estimate", priceNote: "Past Booking dorm sample · taxes excluded", booking: "https://www.booking.com/hotel/us/hostel-fish-denver2.html", expedia: "https://www.expedia.com/Denver-Hotels-Hostel-Fish.h11918121.Hotel-Information", transfers: 1, totalTime: 155, schedule: SCHEDULES.denverBreck, steps: [["Hostel Fish → Union Station", "Walk", 11], ["Union Station → Frisco", "Bustang West Line", 105, "$12 each way"], ["Frisco → Breckenridge", "Summit Stage", 35, "Free"]] },
    ],
  },
  {
    name: "Keystone", pass: "Epic", state: "CO",
    sources: [["Summit Stage 2026–27 timetables", SCHEDULES.summitKeystone.url], ["Bustang West Line timetable", "https://ridebustang.com/routes/west-line/"]],
    note: "The Silverthorne–Keystone route is direct. From Denver, the Bustang connection requires two transfers and arrives after first chair.",
    lodgings: [
      { name: "The Block Hotel & Commons", baseCity: "Silverthorne", price: 59, dailyTransit: 0, fareNote: "Free", priceNote: "Past dorm target · formerly The Pad", booking: "https://www.booking.com/hotel/us/the-pad-silverthorne.html", expedia: "https://www.expedia.com/Silverthorne-Hotels-The-Block-Hotel-Commons.h73255177.Hotel-Information", transfers: 0, totalTime: 60, schedule: SCHEDULES.summitKeystone, steps: [["The Block → Silverthorne Station", "Walk", 5], ["Silverthorne → Keystone River Run", "Summit Stage · direct", 55, "Free"]] },
      { name: "Hostel Fish", baseCity: "Denver", price: 50, dailyTransit: 24, fareNote: "$24 estimate", priceNote: "Past Booking dorm sample · taxes excluded", booking: "https://www.booking.com/hotel/us/hostel-fish-denver2.html", expedia: "https://www.expedia.com/Denver-Hotels-Hostel-Fish.h11918121.Hotel-Information", transfers: 2, totalTime: 180, schedule: SCHEDULES.denverKeystone, steps: [["Hostel Fish → Union Station", "Walk", 11], ["Union Station → Frisco", "Bustang West Line", 105, "$12 each way"], ["Frisco → Silverthorne", "Summit Stage", 15, "Free"], ["Silverthorne → Keystone", "Summit Stage", 55, "Free"]] },
    ],
  },
  {
    name: "Copper Mountain", pass: "Ikon", state: "CO",
    sources: [["Summit Stage 2026–27 timetables", SCHEDULES.summitCopper.url], ["Bustang West Line timetable", "https://ridebustang.com/routes/west-line/"]],
    note: "Both bases transfer at Frisco. The Silverthorne option is usually the stronger daily ski plan even when its reference bed price is higher.",
    lodgings: [
      { name: "The Block Hotel & Commons", baseCity: "Silverthorne", price: 59, dailyTransit: 0, fareNote: "Free", priceNote: "Past dorm target · formerly The Pad", booking: "https://www.booking.com/hotel/us/the-pad-silverthorne.html", expedia: "https://www.expedia.com/Silverthorne-Hotels-The-Block-Hotel-Commons.h73255177.Hotel-Information", transfers: 1, totalTime: 45, schedule: SCHEDULES.summitCopper, steps: [["The Block → Silverthorne Station", "Walk", 5], ["Silverthorne → Frisco", "Summit Stage", 15, "Free"], ["Frisco → Copper Mountain", "Summit Stage", 30, "Free"]] },
      { name: "Hostel Fish", baseCity: "Denver", price: 50, dailyTransit: 24, fareNote: "$24 estimate", priceNote: "Past Booking dorm sample · taxes excluded", booking: "https://www.booking.com/hotel/us/hostel-fish-denver2.html", expedia: "https://www.expedia.com/Denver-Hotels-Hostel-Fish.h11918121.Hotel-Information", transfers: 1, totalTime: 146, schedule: SCHEDULES.denverCopper, steps: [["Hostel Fish → Union Station", "Walk", 11], ["Union Station → Frisco", "Bustang West Line", 105, "$12 each way"], ["Frisco → Copper Mountain", "Summit Stage", 30, "Free"]] },
    ],
  },
  ...[
    ["Alta Ski Area", SCHEDULES.uta994, 87, "UTA 994 / Canyon Service"],
    ["Snowbird", SCHEDULES.uta994, 82, "UTA 994 / Canyon Service"],
    ["Brighton", SCHEDULES.uta972, 92, "UTA 972"],
    ["Solitude", SCHEDULES.uta972, 82, "UTA 972"],
  ].map(([name, schedule, totalTime, bus]) => ({
    name, pass: "Ikon", state: "UT",
    sources: [[`${bus} official timetable`, schedule.url], ["UTA Ski Service & fares", "https://www.rideuta.com/Rider-Info/Ski-Service"]],
    note: "The daily transit estimate assumes an eligible Ikon Pass covers the ski bus and budgets $5 round trip for local UTA/TRAX. Without eligible pass fare, budget about $15 total per ski day.",
    lodgings: [{ name: "Bposhtels SLC", baseCity: "Salt Lake City", price: 54, dailyTransit: 5, fareNote: "$5 with eligible Ikon · ~$15 cash", priceNote: "Past dorm sample · taxes excluded", booking: "https://www.booking.com/hotel/us/bposhtels-slc.html", expedia: "https://www.expedia.com/Salt-Lake-City-Hotels-Bposhtels-SLC.h100559796.Hotel-Information", transfers: 1, totalTime, schedule, steps: [["Bposhtels → 900 South Station", "Walk", 12], ["900 South → canyon transfer", "TRAX / UTA", 30, "$2.50 each way"], [`Transfer point → ${name}`, bus, Math.max(40, totalTime - 42), "$5 each way · eligible Ikon included"]] }],
  })),
  {
    name: "Mammoth Mountain", pass: "Ikon", state: "CA",
    sources: [["Mammoth winter transit timetable", SCHEDULES.mammoth.url], ["Regional transportation", "https://www.visitmammoth.com/travel-info/regional-transportation-and-mammoth-lakes/"]],
    note: "The Red Line is one of the cleanest hostel-to-lift combinations. The 5:30 PM time is the last departure from Main Lodge; winter operating dates still require confirmation.",
    lodgings: [{ name: "Moderne Hostel", baseCity: "Mammoth Lakes", price: 58, dailyTransit: 0, fareNote: "Free", priceNote: "Past Booking dorm sample · Expedia often higher", booking: "https://www.booking.com/hotel/us/moderne-hostel.html", expedia: "https://www.expedia.com/Mammoth-Lakes-Hotels-Moderne-Hostel.h11745889.Hotel-Information", transfers: 0, totalTime: 30, schedule: SCHEDULES.mammoth, steps: [["Moderne Hostel → Main Street stop", "Walk", 5], ["Main Street → Main Lodge", "Red Line", 25, "Free"]] }],
  },
  {
    name: "Mt. Bachelor", pass: "Ikon", state: "OR",
    sources: [["CET Mt. Bachelor Ski Bus", SCHEDULES.bachelor.url]],
    note: "CET has not posted the 2026–27 timetable yet. The starred times are the prior service window and do not validate your selected dates.",
    lodgings: [{ name: "Bunk + Brew Historic Lucas House", baseCity: "Bend", price: 58, dailyTransit: 12, fareNote: "$12 round trip", priceNote: "Past dorm target · taxes excluded", booking: "https://www.booking.com/hotel/us/bunk-brew-historic-lucas-house.html", expedia: "https://www.expedia.com/Bend-Hotels-Bunk-Brew-Historic-Lucas-House.h20065990.Hotel-Information", transfers: 0, totalTime: 42, schedule: SCHEDULES.bachelor, steps: [["Bunk + Brew → Hawthorne Station", "Walk", 2], ["Hawthorne Station → Mt. Bachelor", "CET Ski Bus · direct", 40, "$7 one way · $12 round trip"]] }],
  },
  {
    name: "Jackson Hole Mountain Resort", pass: "Ikon", state: "WY",
    sources: [["START Bus maps & schedules", SCHEDULES.jackson.url], ["START fares", "https://www.jacksonwy.gov/396/Fares"]],
    note: "The starred times use the latest published winter schedule. Winter traffic can lengthen the ride, and the 2026–27 timetable must be checked before booking.",
    lodgings: [{ name: "Cache House", baseCity: "Jackson", price: 57, dailyTransit: 6, fareNote: "$6 round trip", priceNote: "Past dorm sample · property fee excluded", booking: "https://www.booking.com/hotel/us/cache-house.html", expedia: "https://www.expedia.com/Jackson-Hole-Hotels-Cache-House.h45027224.Hotel-Information", transfers: 0, totalTime: 45, schedule: SCHEDULES.jackson, steps: [["Cache House → Miller Park / downtown stop", "Walk", 5], ["Downtown Jackson → Teton Village", "START Bus · direct", 40, "$3 each way"]] }],
  },
];

const stateNames = { UT: "Utah", CO: "Colorado", CA: "California", OR: "Oregon", WY: "Wyoming" };
const quickFilters = new Set();
const els = {
  results: document.querySelector("#results"), template: document.querySelector("#cardTemplate"), count: document.querySelector("#resultCount"),
  empty: document.querySelector("#emptyState"), search: document.querySelector("#search"), sort: document.querySelector("#sortBy"),
  checkin: document.querySelector("#checkin"), checkout: document.querySelector("#checkout"), tripContext: document.querySelector("#tripContext"),
};
const clamp = (value, min, max) => Math.min(max, Math.max(min, value));
const combinedDaily = lodging => lodging.price + lodging.dailyTransit;
const schedulePoints = { verified: 8, current: 6, prior: 3, pending: 0 };

function planScore(lodging) {
  const cost = clamp(45 - (combinedDaily(lodging) - 45) * 1.15, 5, 45);
  const commute = clamp(35 - Math.max(0, lodging.totalTime - 20) * 0.28, 0, 35);
  const transfers = [12, 8, 4][Math.min(lodging.transfers, 2)];
  return Math.round(cost + commute + transfers + schedulePoints[lodging.schedule.confidence]);
}

function nightsSelected() {
  const start = new Date(`${els.checkin.value}T12:00:00`);
  const end = new Date(`${els.checkout.value}T12:00:00`);
  return Math.max(1, Math.round((end - start) / 86400000));
}

function lodgingUrl(base, provider) {
  const url = new URL(base);
  if (provider === "booking") {
    url.searchParams.set("checkin", els.checkin.value);
    url.searchParams.set("checkout", els.checkout.value);
    url.searchParams.set("group_adults", "1");
    url.searchParams.set("no_rooms", "1");
  } else {
    url.searchParams.set("chkin", els.checkin.value);
    url.searchParams.set("chkout", els.checkout.value);
    url.searchParams.set("useRewards", "false");
    url.searchParams.set("rm1", "a1");
  }
  return url.toString();
}

function dateMessage(schedule) {
  if (schedule.confidence === "verified") {
    const inside = els.checkin.value >= schedule.validFrom && els.checkout.value <= schedule.validTo;
    return inside
      ? { text: `Selected dates fall inside published service (${schedule.validFrom}–${schedule.validTo}).`, tone: "ok" }
      : { text: `Date warning: published service runs ${schedule.validFrom}–${schedule.validTo}.`, tone: "warn" };
  }
  if (schedule.confidence === "current") return { text: "Operating times are published; confirm winter service dates before booking.", tone: "neutral" };
  return { text: "2026–27 timetable not posted. Starred times are prior-season references.", tone: "warn" };
}

function applyLodging(card, lodging) {
  const score = planScore(lodging);
  const nights = nightsSelected();
  const schedule = lodging.schedule;
  const dateInfo = dateMessage(schedule);
  card.querySelector(".city-line").textContent = `Base: ${lodging.baseCity}`;
  card.querySelector(".plan-score").textContent = score;
  card.querySelector(".price").textContent = `$${lodging.price}`;
  card.querySelector(".transit-cost").textContent = lodging.dailyTransit === 0 ? "Free" : `$${lodging.dailyTransit}`;
  card.querySelector(".transit-note").textContent = lodging.dailyTransit === 0 ? "" : lodging.fareNote;
  card.querySelector(".combined-cost").textContent = `$${combinedDaily(lodging)}`;
  card.querySelector(".commute-time").textContent = `${lodging.totalTime} min`;
  card.querySelector(".transfer-count").textContent = lodging.transfers === 0 ? "Direct" : String(lodging.transfers);
  card.querySelector(".first-up").textContent = schedule.firstUp;
  card.querySelector(".last-down").textContent = schedule.lastDown;
  const status = card.querySelector(".schedule-status");
  status.textContent = schedule.basis;
  status.dataset.confidence = schedule.confidence;
  card.querySelector(".timetable-link").href = schedule.url;
  const alert = card.querySelector(".date-alert");
  alert.textContent = dateInfo.text;
  alert.dataset.tone = dateInfo.tone;
  card.querySelector(".hostel-note").textContent = `${lodging.priceNote}. Reference only—not live inventory.`;
  card.querySelector(".booking-link").href = lodgingUrl(lodging.booking, "booking");
  card.querySelector(".expedia-link").href = lodgingUrl(lodging.expedia, "expedia");
  card.querySelector(".trip-total").innerHTML = `<strong>Selected-trip reference:</strong> $${lodging.price * nights + lodging.dailyTransit * nights} = $${lodging.price} × ${nights} night${nights === 1 ? "" : "s"} + $${lodging.dailyTransit} × ${nights} ski-day commute${nights === 1 ? "" : "s"}. This is a comparison model, not a quote.`;
  const rail = card.querySelector(".route-rail");
  rail.replaceChildren();
  lodging.steps.forEach(([label, mode, minutes, fare]) => {
    const step = document.createElement("div");
    step.className = "route-step";
    step.innerHTML = `<span class="dot"></span><strong>${label}</strong><small>${mode} · ${minutes} min${fare ? ` <b class="fare-tag">${fare}</b>` : ""}</small>`;
    rail.append(step);
  });
}

const sortedLodgings = item => [...item.lodgings].sort((a, b) => planScore(b) - planScore(a) || combinedDaily(a) - combinedDaily(b));
function passesQuickFilters(lodging) {
  if (quickFilters.has("direct") && lodging.transfers !== 0) return false;
  if (quickFilters.has("free") && lodging.dailyTransit !== 0) return false;
  if (quickFilters.has("short") && lodging.totalTime > 60) return false;
  if (quickFilters.has("verified") && lodging.schedule.confidence !== "verified") return false;
  return true;
}

function render() {
  const term = els.search.value.trim().toLowerCase();
  const passes = [...document.querySelectorAll('input[name="pass"]:checked')].map(el => el.value);
  const states = [...document.querySelectorAll('input[name="state"]:checked')].map(el => el.value);
  let data = routes.map(item => ({ ...item, visibleLodgings: sortedLodgings(item).filter(passesQuickFilters) })).filter(item => {
    const haystack = `${item.name} ${item.state} ${stateNames[item.state]}`.toLowerCase();
    return passes.includes(item.pass) && states.includes(item.state) && item.visibleLodgings.length && (!term || haystack.includes(term));
  });
  data.sort((a, b) => {
    const left = a.visibleLodgings[0];
    const right = b.visibleLodgings[0];
    if (els.sort.value === "combined") return combinedDaily(left) - combinedDaily(right) || planScore(right) - planScore(left);
    if (els.sort.value === "time") return left.totalTime - right.totalTime || combinedDaily(left) - combinedDaily(right);
    if (els.sort.value === "transfer") return left.transfers - right.transfers || left.totalTime - right.totalTime;
    return planScore(right) - planScore(left) || combinedDaily(left) - combinedDaily(right);
  });
  els.results.replaceChildren();
  data.forEach(item => {
    const node = els.template.content.cloneNode(true);
    const card = node.querySelector(".resort-card");
    const lodgings = item.visibleLodgings;
    const pass = card.querySelector(".pass-badge");
    pass.textContent = item.pass;
    pass.classList.add(item.pass.toLowerCase());
    card.querySelector(".state-badge").textContent = item.state;
    card.querySelector(".resort-name").textContent = item.name;
    card.querySelector(".detail-note").textContent = item.note;
    const name = card.querySelector(".hostel-name");
    const select = card.querySelector(".hostel-select");
    card.querySelector(".stay-label").textContent = lodgings.length > 1 ? `Stay here · ${lodgings.length} options` : "Stay here";
    if (lodgings.length > 1) {
      name.hidden = true;
      select.hidden = false;
      lodgings.forEach((lodging, index) => select.add(new Option(`${lodging.name} · score ${planScore(lodging)} · $${combinedDaily(lodging)}/day`, String(index))));
      select.addEventListener("change", () => applyLodging(card, lodgings[Number(select.value)]));
    } else name.textContent = lodgings[0].name;
    const sources = card.querySelector(".source-links");
    item.sources.forEach(([label, url]) => {
      const link = document.createElement("a");
      link.href = url;
      link.target = "_blank";
      link.rel = "noreferrer";
      link.textContent = `${label} ↗`;
      sources.append(link);
    });
    applyLodging(card, lodgings[0]);
    els.results.append(node);
  });
  const nights = nightsSelected();
  els.count.textContent = data.length;
  els.tripContext.textContent = `${nights} night${nights === 1 ? "" : "s"} selected · card prices remain static references`;
  els.empty.hidden = data.length > 0;
}

document.querySelectorAll('input[name="pass"], input[name="state"]').forEach(el => el.addEventListener("change", render));
document.querySelectorAll(".quick-chip").forEach(button => button.addEventListener("click", () => {
  const key = button.dataset.quick;
  if (quickFilters.has(key)) quickFilters.delete(key); else quickFilters.add(key);
  button.setAttribute("aria-pressed", String(quickFilters.has(key)));
  render();
}));
els.search.addEventListener("input", render);
[els.sort, els.checkout].forEach(el => el.addEventListener("change", render));
els.checkin.addEventListener("change", () => {
  const nextDay = new Date(`${els.checkin.value}T12:00:00`);
  nextDay.setDate(nextDay.getDate() + 1);
  const nextValue = nextDay.toISOString().slice(0, 10);
  els.checkout.min = nextValue;
  if (els.checkout.value <= els.checkin.value) els.checkout.value = nextValue;
  render();
});
document.querySelector("#searchButton").addEventListener("click", () => {
  render();
  document.querySelector(".results-panel").scrollIntoView({ behavior: "smooth", block: "start" });
});
document.querySelector("#resetFilters").addEventListener("click", () => {
  els.search.value = "";
  els.sort.value = "score";
  quickFilters.clear();
  document.querySelectorAll(".quick-chip").forEach(button => button.setAttribute("aria-pressed", "false"));
  document.querySelectorAll('input[name="pass"], input[name="state"]').forEach(el => el.checked = true);
  render();
});
document.addEventListener("keydown", event => {
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
    event.preventDefault();
    els.search.focus();
  }
});
render();
