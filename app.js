const routes = [
  {
    name: "Park City Mountain", pass: "Epic", state: "UT", price: 55, ease: 5, transfers: 0, freeLocal: true,
    sources: [["HVT 107 timetable", "https://www.hvtutah.gov/bus-107-commuter-to-park-city"], ["Park City free transit", "https://www.visitparkcity.com/plan/free-bus-system/"]],
    note: "Park City Transit and High Valley Transit are fare-free. Times are typical; ski-day traffic can add delays.",
    lodgings: [{
      name: "Park City Hostel", baseCity: "Park City", price: 55, note: "Booking sample: $55 per bed before tax",
      booking: "https://www.booking.com/hotel/us/park-city-hostel.html", expedia: "https://www.expedia.com/Park-City-Hostels.d602285-aaHostels.Travel-Guide-Accommodation",
      transfers: 0, totalTime: 20,
      steps: [["Hostel → nearest Park City Transit stop", "Walk", 5], ["Transit stop → Mountain Village", "Park City Transit · free", 15]]
    }]
  },
  {
    name: "Breckenridge", pass: "Epic", state: "CO", price: 50, ease: 4, transfers: 2, freeLocal: true,
    sources: [["Bustang official", "https://www.codot.gov/travel/bustang"], ["Summit Stage schedules", "https://www.summitcountyco.gov/360/Bus-Schedule"]],
    note: "The Silverthorne option is the shorter daily commute. The Denver option is much longer but can be cheaper on selected dorm dates. I-70 delays are common on weekends.",
    lodgings: [
      { name: "The Block Hotel & Commons", baseCity: "Silverthorne", price: 59, note: "Formerly The Pad · dorm target ≤ $60", booking: "https://www.booking.com/hotel/us/the-pad-silverthorne.html", expedia: "https://www.expedia.com/Silverthorne-Hotels-The-Block-Hotel-Commons.h73255177.Hotel-Information", transfers: 2, totalTime: 65, steps: [["The Block → Silverthorne transit stop", "Walk", 5], ["Silverthorne → Frisco", "Summit Stage · free", 20], ["Frisco → Breckenridge", "Summit Stage · free", 40]] },
      { name: "Hostel Fish", baseCity: "Denver", price: 50, note: "Booking sampled $50 per dorm bed; Expedia varies", booking: "https://www.booking.com/hotel/us/hostel-fish-denver2.html", expedia: "https://www.expedia.com/Denver-Hotels-Hostel-Fish.h11918121.Hotel-Information", transfers: 2, totalTime: 146, steps: [["Hostel Fish → Union Station", "Walk", 11], ["Union Station → Frisco", "Bustang / Pegasus", 95], ["Frisco → Breckenridge", "Summit Stage · free", 40]] }
    ]
  },
  {
    name: "Keystone", pass: "Epic", state: "CO", price: 50, ease: 4, transfers: 1, freeLocal: true,
    sources: [["Bustang official", "https://www.codot.gov/travel/bustang"], ["Summit Stage schedules", "https://www.summitcountyco.gov/360/Bus-Schedule"], ["Keystone transportation", "https://www.keystoneresort.com/explore-the-resort/about-the-resort/getting-here.aspx"]],
    note: "Silverthorne gives the shortest commute. Seasonal Summit Stage times can change; confirm the last return bus.",
    lodgings: [
      { name: "The Block Hotel & Commons", baseCity: "Silverthorne", price: 59, note: "Formerly The Pad · dorm target ≤ $60", booking: "https://www.booking.com/hotel/us/the-pad-silverthorne.html", expedia: "https://www.expedia.com/Silverthorne-Hotels-The-Block-Hotel-Commons.h73255177.Hotel-Information", transfers: 1, totalTime: 55, steps: [["The Block → Silverthorne transit stop", "Walk", 5], ["Silverthorne → Dillon → Keystone", "Summit Stage · free", 50]] },
      { name: "Hostel Fish", baseCity: "Denver", price: 50, note: "Booking sampled $50 per dorm bed; Expedia varies", booking: "https://www.booking.com/hotel/us/hostel-fish-denver2.html", expedia: "https://www.expedia.com/Denver-Hotels-Hostel-Fish.h11918121.Hotel-Information", transfers: 2, totalTime: 156, steps: [["Hostel Fish → Union Station", "Walk", 11], ["Union Station → Frisco", "Bustang / Pegasus", 95], ["Frisco → Keystone", "Summit Stage · free", 50]] }
    ]
  },
  {
    name: "Copper Mountain", pass: "Ikon", state: "CO", price: 50, ease: 4, transfers: 2, freeLocal: true,
    sources: [["Bustang official", "https://www.codot.gov/travel/bustang"], ["Summit Stage schedules", "https://www.summitcountyco.gov/360/Bus-Schedule"], ["Ikon 26/27 access", "https://www.ikonpass.com/en/compare-passes"]],
    note: "Both options transfer at Frisco. The Silverthorne stay is far more practical for daily skiing.",
    lodgings: [
      { name: "The Block Hotel & Commons", baseCity: "Silverthorne", price: 59, note: "Formerly The Pad · dorm target ≤ $60", booking: "https://www.booking.com/hotel/us/the-pad-silverthorne.html", expedia: "https://www.expedia.com/Silverthorne-Hotels-The-Block-Hotel-Commons.h73255177.Hotel-Information", transfers: 2, totalTime: 50, steps: [["The Block → Silverthorne transit stop", "Walk", 5], ["Silverthorne → Frisco", "Summit Stage · free", 20], ["Frisco → Copper Mountain", "Summit Stage · free", 25]] },
      { name: "Hostel Fish", baseCity: "Denver", price: 50, note: "Booking sampled $50 per dorm bed; Expedia varies", booking: "https://www.booking.com/hotel/us/hostel-fish-denver2.html", expedia: "https://www.expedia.com/Denver-Hotels-Hostel-Fish.h11918121.Hotel-Information", transfers: 2, totalTime: 131, steps: [["Hostel Fish → Union Station", "Walk", 11], ["Union Station → Frisco", "Bustang / Pegasus", 95], ["Frisco → Copper Mountain", "Summit Stage · free", 25]] }
    ]
  },
  {
    name: "Alta Ski Area", pass: "Ikon", state: "UT", price: 54, ease: 4, transfers: 2, freeLocal: false,
    sources: [["UTA Ski Service", "https://www.rideuta.com/Rider-Info/Ski-Service"], ["Ikon Alta/Snowbird rules", "https://www.ikonpass.com/en/how-to-use-your-ikon-pass"]],
    note: "UTA Ski Bus costs $5 each way, or use an eligible Ikon Pass as fare. Alta requires the full Ikon Pass.",
    lodgings: [{ name: "Bposhtels SLC", baseCity: "Salt Lake City", price: 54, note: "Booking sample: $54 per bed before tax", booking: "https://www.booking.com/hotel/us/bposhtels-slc.html", expedia: "https://www.expedia.com/Salt-Lake-City-Hotels-Bposhtels-SLC.h100559796.Hotel-Information", transfers: 2, totalTime: 87, steps: [["Bposhtels → 900 South Station", "Walk", 12], ["900 South → canyon transfer", "TRAX / UTA", 30], ["Transfer point → Alta", "UTA 994 / Canyon Service", 45]] }]
  },
  {
    name: "Snowbird", pass: "Ikon", state: "UT", price: 54, ease: 4, transfers: 2, freeLocal: false,
    sources: [["UTA Ski Service", "https://www.rideuta.com/Rider-Info/Ski-Service"], ["Ikon 26/27 access", "https://www.ikonpass.com/en/compare-passes"]],
    note: "UTA 994 serves Snowbird and Alta for $5 each way. Eligible Ikon passes can be tapped as fare.",
    lodgings: [{ name: "Bposhtels SLC", baseCity: "Salt Lake City", price: 54, note: "Recent Expedia sample: $52 including tax", booking: "https://www.booking.com/hotel/us/bposhtels-slc.html", expedia: "https://www.expedia.com/Salt-Lake-City-Hotels-Bposhtels-SLC.h100559796.Hotel-Information", transfers: 2, totalTime: 82, steps: [["Bposhtels → 900 South Station", "Walk", 12], ["900 South → canyon transfer", "TRAX / UTA", 30], ["Transfer point → Snowbird", "UTA 994 / Canyon Service", 40]] }]
  },
  {
    name: "Brighton", pass: "Ikon", state: "UT", price: 54, ease: 4, transfers: 2, freeLocal: false,
    sources: [["UTA Ski Service", "https://www.rideuta.com/Rider-Info/Ski-Service"]],
    note: "UTA 972 serves Solitude and Brighton. Fare is $5 each way, or tap an eligible Ikon Pass.",
    lodgings: [{ name: "Bposhtels SLC", baseCity: "Salt Lake City", price: 54, note: "Booking sample: $54 per bed before tax", booking: "https://www.booking.com/hotel/us/bposhtels-slc.html", expedia: "https://www.expedia.com/Salt-Lake-City-Hotels-Bposhtels-SLC.h100559796.Hotel-Information", transfers: 2, totalTime: 92, steps: [["Bposhtels → 900 South Station", "Walk", 12], ["900 South → canyon transfer", "TRAX / UTA", 30], ["Transfer point → Brighton", "UTA 972", 50]] }]
  },
  {
    name: "Solitude", pass: "Ikon", state: "UT", price: 54, ease: 4, transfers: 2, freeLocal: false,
    sources: [["UTA Ski Service", "https://www.rideuta.com/Rider-Info/Ski-Service"], ["Ikon 26/27 access", "https://www.ikonpass.com/en/shop-passes/ikon-pass"]],
    note: "UTA 972 travels through Big Cottonwood Canyon. Verify blackout dates for your Ikon product.",
    lodgings: [{ name: "Bposhtels SLC", baseCity: "Salt Lake City", price: 54, note: "Recent Expedia sample: $52 including tax", booking: "https://www.booking.com/hotel/us/bposhtels-slc.html", expedia: "https://www.expedia.com/Salt-Lake-City-Hotels-Bposhtels-SLC.h100559796.Hotel-Information", transfers: 2, totalTime: 82, steps: [["Bposhtels → 900 South Station", "Walk", 12], ["900 South → canyon transfer", "TRAX / UTA", 30], ["Transfer point → Solitude", "UTA 972", 40]] }]
  },
  {
    name: "Mammoth Mountain", pass: "Ikon", state: "CA", price: 58, ease: 5, transfers: 0, freeLocal: true,
    sources: [["Mammoth winter transit", "https://www.visitmammoth.com/travel-info/getting-around/winter-transit/"], ["Regional transportation", "https://www.visitmammoth.com/travel-info/regional-transportation-and-mammoth-lakes/"]],
    note: "One of the cleanest hostel-plus-free-shuttle combinations. Regional arrival buses are infrequent, so lock in arrival and departure days first.",
    lodgings: [{ name: "Moderne Hostel", baseCity: "Mammoth Lakes", price: 58, note: "Booking sample: $58 per bed; Expedia often exceeds $60", booking: "https://www.booking.com/hotel/us/moderne-hostel.html", expedia: "https://www.expedia.com/Mammoth-Lakes-Hotels-Moderne-Hostel.h11745889.Hotel-Information", transfers: 0, totalTime: 30, steps: [["Moderne Hostel → Main Street stop", "Walk", 5], ["Main Street → Main Lodge", "Red Line · free", 25]] }]
  },
  {
    name: "Mt. Bachelor", pass: "Ikon", state: "OR", price: 58, ease: 5, transfers: 0, freeLocal: false,
    sources: [["CET Mt. Bachelor Ski Bus", "https://cascadeseasttransit.com/ride/mt-bachelor-winter/"]],
    note: "The hostel is almost across the street from Hawthorne Station. A separate CET ticket is required.",
    lodgings: [{ name: "Bunk + Brew Historic Lucas House", baseCity: "Bend", price: 58, note: "Listed on both platforms · dorm target ≤ $60", booking: "https://www.booking.com/hotel/us/bunk-brew-historic-lucas-house.html", expedia: "https://www.expedia.com/Bend-Hotels-Bunk-Brew-Historic-Lucas-House.h20065990.Hotel-Information", transfers: 0, totalTime: 42, steps: [["Bunk + Brew → Hawthorne Station", "Walk", 2], ["Hawthorne Station → Mt. Bachelor", "CET Ski Bus · direct", 40]] }]
  },
  {
    name: "Jackson Hole Mountain Resort", pass: "Ikon", state: "WY", price: 57, ease: 5, transfers: 0, freeLocal: false,
    sources: [["START Bus schedules", "https://www.jacksonwy.gov/404/Maps-Schedules"], ["Teton Village transit", "https://tetonvillagewy.gov/visitors/parking-shuttles-buses/"], ["Ikon destination", "https://www.ikonpass.com/en/destinations/jackson-hole-mountain-resort"]],
    note: "START Bus runs between downtown Jackson and Teton Village. Winter traffic can stretch the ride; confirm the current timetable and last return bus.",
    lodgings: [{ name: "Cache House", baseCity: "Jackson", price: 57, note: "Selected-date dorm target · highly variable; add the nightly property fee before comparing", booking: "https://www.booking.com/hotel/us/cache-house.html", expedia: "https://www.expedia.com/Jackson-Hole-Hotels-Cache-House.h45027224.Hotel-Information", transfers: 0, totalTime: 45, steps: [["Cache House → downtown START stop", "Walk", 5], ["Downtown Jackson → Teton Village", "START Bus · direct", 40]] }]
  }
];

const stateNames = { UT: "Utah", CO: "Colorado", CA: "California", OR: "Oregon", WY: "Wyoming" };

const els = {
  results: document.querySelector("#results"), template: document.querySelector("#cardTemplate"), count: document.querySelector("#resultCount"),
  empty: document.querySelector("#emptyState"), search: document.querySelector("#search"), sort: document.querySelector("#sortBy"),
  checkin: document.querySelector("#checkin"), checkout: document.querySelector("#checkout")
};

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

function applyLodging(card, lodging) {
  card.querySelector(".city-line").textContent = `Base: ${lodging.baseCity} · ${lodging.transfers === 0 ? "direct" : `${lodging.transfers} major transfer${lodging.transfers > 1 ? "s" : ""}`} · about ${lodging.totalTime} min`;
  card.querySelector(".price").textContent = `$${lodging.price}`;
  card.querySelector(".hostel-note").textContent = lodging.note;
  card.querySelector(".booking-link").href = lodgingUrl(lodging.booking, "booking");
  card.querySelector(".expedia-link").href = lodgingUrl(lodging.expedia, "expedia");
  const rail = card.querySelector(".route-rail");
  rail.replaceChildren();
  lodging.steps.forEach(([label, mode, minutes]) => {
    const step = document.createElement("div");
    step.className = "route-step";
    step.innerHTML = `<span class="dot"></span><strong>${label}</strong><small>${mode} · ${minutes} min</small>`;
    rail.append(step);
  });
}

function render() {
  const term = els.search.value.trim().toLowerCase();
  const budget = 60;
  const passes = [...document.querySelectorAll('input[name="pass"]:checked')].map(el => el.value);
  const states = [...document.querySelectorAll('input[name="state"]:checked')].map(el => el.value);
  let data = routes.filter(item => {
    const haystack = `${item.name} ${item.state} ${stateNames[item.state]}`.toLowerCase();
    return passes.includes(item.pass) && states.includes(item.state) && item.lodgings.some(lodging => lodging.price <= budget) && (!term || haystack.includes(term));
  });
  data.sort((a, b) => {
    if (els.sort.value === "price") return a.price - b.price || b.ease - a.ease;
    if (els.sort.value === "transfer") return a.transfers - b.transfers || a.price - b.price;
    return b.ease - a.ease || a.transfers - b.transfers;
  });

  els.results.replaceChildren();
  data.forEach(item => {
    const node = els.template.content.cloneNode(true);
    const card = node.querySelector(".resort-card");
    const eligible = item.lodgings.filter(lodging => lodging.price <= budget);
    const pass = card.querySelector(".pass-badge");
    pass.textContent = item.pass;
    pass.classList.add(item.pass.toLowerCase());
    card.querySelector(".state-badge").textContent = item.state;
    card.querySelector(".resort-name").textContent = item.name;
    card.querySelector(".detail-note").textContent = item.note;

    const name = card.querySelector(".hostel-name");
    const select = card.querySelector(".hostel-select");
    if (eligible.length > 1) {
      name.hidden = true;
      select.hidden = false;
      eligible.forEach((lodging, index) => select.add(new Option(`${lodging.name} · $${lodging.price}`, String(index))));
      select.addEventListener("change", () => applyLodging(card, eligible[Number(select.value)]));
    } else {
      name.textContent = eligible[0].name;
    }

    const sources = card.querySelector(".source-links");
    item.sources.forEach(([label, url]) => {
      const link = document.createElement("a");
      link.href = url;
      link.target = "_blank";
      link.rel = "noreferrer";
      link.textContent = `${label} ↗`;
      sources.append(link);
    });
    applyLodging(card, eligible[0]);
    els.results.append(node);
  });

  els.count.textContent = data.length;
  els.empty.hidden = data.length > 0;
}

document.querySelectorAll('input[name="pass"], input[name="state"]').forEach(el => el.addEventListener("change", render));
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
  els.sort.value = "ease";
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
