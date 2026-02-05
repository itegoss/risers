// Set year in footer
document.querySelectorAll("#year").forEach((el) => {
  el.textContent = new Date().getFullYear();
});

// COUNTDOWN TIMERS
function initCountdowns() {
  const cds = document.querySelectorAll(".countdown");
  if (!cds.length) return;

  function update() {
    const now = new Date().getTime();
    cds.forEach((cd) => {
      const deadlineStr = cd.getAttribute("data-deadline");
      if (!deadlineStr) return;
      const deadline = new Date(deadlineStr).getTime();
      const diff = deadline - now;
      const timeEl = cd.querySelector(".cd-time");
      if (!timeEl) return;

      if (diff <= 0) {
        timeEl.textContent = "Event Started";
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

      timeEl.textContent = `${String(days).padStart(2, "0")}d : ${String(
        hours
      ).padStart(2, "0")}h : ${String(mins).padStart(2, "0")}m`;
    });
  }

  update();
  setInterval(update, 60000); // 1 minute interval is enough
}

// TIPS & FACTS MODAL

const INFO_CONTENT = {
  swimming: {
    title: "Altitude Swim Intel ",
    tag: "Swim Brief",
    description: "Cold water acclimatization, sighting drills, and safety cues for the Ladakh swim convoy.",
    sections: [
      {
        id: "tourney-info",
        label: "Tourney Info",
        heading: "Risers Presents Navneet Athletics Championship 2025 – Register Now!",
        kicker: "About The Tournament",
        paragraphs: [
          "Risers Presents Navneet Athletics Championship 2025 debuts on 28 December at the Eklavya Complex, Somaiya Grounds, Vidyavihar, Mumbai.",
          "Expect a full slate of high-energy Track & Field showdowns — registrations are open across every age group, from juniors to veterans.",
        ],
        table: {
          headers: ["Category", "Line-up"],
          rows: [
            {
              label: "Track Events",
              items: [
                "100m Dash",
                "200m Sprint",
                "400m Race",
                "800m Run",
                "1500m Run",
                "4x100m Relay (village-wise entry)",
              ],
            },
            {
              label: "Field Events",
              items: ["Long Jump", "Shot Put", "Javelin Throw", "Discus Throw"],
            },
            {
              label: "Age Categories",
              items: [
                "Under 9",
                "Under 12",
                "Under 15",
                "Under 18",
                "19–35 Years",
                "36–550+",
                "60+",
              ],
            },
          ],
        },
        chips: ["Somaiya Grounds", "All age groups", "Limited slots"],
      },
      {
        id: "track-rules",
        label: "Rules & Regulations",
        heading: "Swimming Rules & Regulations",
        kicker: "Stroke-specific handbook",
        paragraphs: [
          "Events: Freestyle | Backstroke | Breaststroke | Butterfly | Relay (team entries only).",
          "Tournament format: Knock-out time trials in every age group, followed by direct finals.",
          "Swimmers may choose any two individual strokes in addition to Relay.",
        ],
        lists: [
          {
            title: "Freestyle – Age Splits",
            items: [
              "5–8, 9–12, 61+ race 25 m",
              "50 m bracket: 13–15, 16–20, 21–30, 31–40, 41–50, 51–60",
            ],
          },
          {
            title: "Backstroke – Age Splits",
            items: [
              "5–8, 9–12, 61+ race 25 m",
              "50 m bracket: 13–15, 16–20, 21–30, 31–40, 41–50, 51–60",
            ],
          },
          {
            title: "Breaststroke – Age Splits",
            items: [
              "5–8, 9–12, 61+ race 25 m",
              "50 m bracket: 13–15, 16–20, 21–30, 31–40, 41–50, 51–60",
            ],
          },
          {
            title: "Butterfly – Age Splits",
            items: [
              "5–8, 9–12, 61+ race 25 m",
              "50 m bracket: 13–15, 16–20, 21–30, 31–40, 41–50, 51–60",
            ],
          },
          {
            title: "Relay",
            items: [
              "Village-wise team of 4 + 4 shortlisted athletes",
              "Expression of Interest due 30 Nov with minimum 4 and maximum 8 names",
              "Only four swimmers will start on race day",
            ],
          },
          {
            title: "Rules for Start",
            items: [
              "Race begins on clapper or whistle",
              "False start equals direct disqualification — no retries",
            ],
          },
          {
            title: "Qualification & Winners",
            items: [
              "Top eight times progress to finals",
              "Qualifiers decided purely on time-trial results",
            ],
          },
          {
            title: "Stroke & Lane Rules",
            items: [
              "No swimmer may stay underwater beyond 15 m from the start; surface before that mark",
              "Complete the race in the same lane; standing is allowed but walking is not",
              "Make physical contact with the wall at every finish and turn",
              "Pulling on lane ropes or obstructing another swimmer leads to disqualification",
            ],
          },
          {
            title: "Speeding Aids & Disqualification",
            items: [
              "No equipment that aids speed, buoyancy, or endurance (fins, webbed gloves, etc.)",
              "Entering the pool before all swimmers finish results in disqualification from your next race",
            ],
          },
          {
            title: "Qualifying Rounds",
            items: [
              "Events with over eight entries will hold qualifying heats",
              "Finalists determined by the fastest qualifying times",
            ],
          },
          {
            title: "Relay Logistics",
            items: [
              "Village representative submits EOI by 30 Nov",
              "Only one team per village per category",
              "Final relay roster locks at four starters",
            ],
          },
          {
            title: "Gear",
            items: [
              "Swimming caps and goggles are compulsory for all swimmers",
            ],
          },
        ],
        paragraphsAfter: [
          "Medical note: Swimmers with skin infections or open cuts must skip the race.",
          "Important: Under no circumstances will video recordings be accepted to challenge decisions; referees’ calls are final and binding.",
          "Organisers are not responsible for injuries or damages sustained during competition.",
        ],
      },
      {
        id: "track-terms",
        label: "Terms & Conditions",
        heading: "Championship Terms & Conditions",
        paragraphs: [
          "Review these event-wide terms before locking your slot; they apply to both athletics and swimming entries.",
        ],
        lists: [
          {
            title: "Registration & Slots",
            items: [
              "Registration closes automatically when bracket capacity is reached.",
              "Late or on-the-spot entries may be refused at the organiser’s discretion.",
            ],
          },
          {
            title: "Participation Limits",
            items: [
              "Each athlete may register for up to three athletics events and two swimming events.",
              "Any misconduct, indiscipline, or cheating results in immediate disqualification.",
            ],
          },
          {
            title: "Safety & Liability",
            items: [
              "Basic first aid will be available, but organisers are not liable for injuries or accidents.",
              "Participants are responsible for ensuring they are medically fit to compete.",
              "Personal belongings remain the sole responsibility of athletes; organisers are not liable for loss or damage.",
            ],
          },
          {
            title: "Code of Conduct",
            items: [
              "Maintain sportsmanship and discipline on and off the field.",
              "Consumption of alcohol, drugs, or banned substances is strictly prohibited.",
              "Organisers’ and officials’ decisions are final and binding.",
            ],
          },
          {
            title: "Rights & Media",
            items: [
              "Organisers may use event photos and videos for promotion without additional consent.",
              "Participants cannot claim rights over official media coverage.",
            ],
          },
          {
            title: "Cancellation / Postponement",
            items: [
              "Events may be rescheduled or canceled due to weather, government advisories, or other unavoidable situations.",
              "Any applicable refund policy for such scenarios will be communicated later.",
            ],
          },
        ],
        paragraphsAfter: [
          "By registering, you declare that you are medically fit and understand the inherent risks of athletics and swimming competitions.",
          "You release and hold harmless organisers, sponsors, venue owners, volunteers, and partners from any claims arising from participation.",
          "You agree to indemnify the organisers against third-party claims caused by your acts or omissions, and confirm you have read and accepted these terms.",
        ],
      },
    ],
  },
  athletics: {
    title: "Power Meet Gameplan",
    tag: "Track Intel",
    description: "Dial explosive efforts with micro rests, footwear swaps, and form cues for the Power Meet schedule.",
    sections: [
      {
        id: "track-info",
        label: "Tourney Info",
        heading: "Risers Presents Navneet Athletics Championship 2025 – Register Now!",
        kicker: "About The Tournament",
        paragraphs: [
          "Risers Presents Navneet Athletics Championship 2025 debuts on 28 December at the Eklavya Complex, Somaiya Grounds, Vidyavihar, Mumbai.",
          "Expect a full slate of high-energy Track & Field showdowns — registrations are open across every age group, from juniors to veterans.",
        ],
        table: {
          headers: ["Category", "Line-up"],
          rows: [
            {
              label: "Track Events",
              items: [
                "100m Dash",
                "200m Sprint",
                "400m Race",
                "800m Run",
                "1500m Run",
                "4x100m Relay (village-wise entry)",
              ],
            },
            {
              label: "Field Events",
              items: ["Long Jump", "Shot Put", "Javelin Throw", "Discus Throw"],
            },
            {
              label: "Age Categories",
              items: [
                "Under 9",
                "Under 12",
                "Under 15",
                "Under 18",
                "19–35 Years",
                "36–550+",
                "60+",
              ],
            },
          ],
        },
        chips: ["Somaiya Grounds", "All age groups", "Limited slots"],
      },
      {
        id: "track-rules",
        label: "Rules & Regulations",
        heading: "Athletics Rules & Regulations",
        kicker: "Competition handbook",
        paragraphs: [
          "Track events on deck: 100m | 200m | 400m | 800m | 1500m | Relay ( Only Village Wise) ",
          "Tournament format follows time-trial knockouts — the quickest eight from trials move to finals, while events with fewer than eight start directly at the medal race.",
          "Footwear can be shoes or barefoot, but barefoot runners risk blisters on the synthetic track; kit up in a T-shirt with shorts or track pants.",
          "Starts trigger on gun shot, clapper, or whistle; a false start means instant disqualification. Lane switching in 100m, 200m, and 400m is not allowed.",
          "Relay squads must submit a village Expression of Interest with 4–8 names by 30 November — only one team per village per category, with four athletes racing on the day.",
          "Qualifications and winners: heats rank runners by time to pick the top eight, then finals decide medals purely on finish positions. Heat timings never carry into finals.",
          "Heats, media, and eligibility: athletes get lane assignments in advance and must comply; no video evidence is accepted, referees’ calls are final, organisers aren’t liable for injuries, categories require five participants, and the meet remains KVO-only (female KVO members married outside KVO become ineligible).",
        ],
        lists: [
          {
            title: "Baton Rules for Relays",
            items: [
              "Pass only within the 20 m exchange zone after the standing point.",
              "If the baton is dropped, the runner who dropped it must recover it without shortening the distance or impeding neighbors.",
              "Keep the baton in hand — no gloves or sticky substances for grip.",
              "Runners must stay in their lanes after the pass to avoid blocking others.",
              "Exchanges outside the zone trigger a disqualification, and passes must respect the lane boundaries.",
            ],
          },
          {
            title: "Track Events Age Categories – 100m",
            items: ["5–8", "9–12", "13–15", "16–20", "21–30", "31–40", "41–50", "51–60", "61+"],
          },
          {
            title: "Track Events Age Categories – 200m",
            items: ["5–8", "9–12", "13–15", "16–20", "21–30", "31–40", "41–50", "51–60", "61+"],
          },
          {
            title: "Track Events Age Categories – 400m",
            items: ["13–15", "16–20", "21–30", "31–40", "41–50", "51–60", "61+"],
          },
          {
            title: "Track Events Age Categories – 800m",
            items: ["16–20", "21–30", "31–40", "41–50", "51–60", "61+"],
          },
          {
            title: "Track Events Age Categories – 1500m",
            items: ["16–20", "21–30", "31–40", "41–50", "51–60"],
          },
          {
            title: "Field Events Age Categories",
            items: [
              "Shot Put: 9–12, 13–15, 16–20, 21–30, 31–40, 41–50, 51–60, 61+",
              "Discus: 16–20, 21–30, 31–40, 41–50, 51–60",
              "Javelin: 16–20, 21–30, 31–40, 41–50, 51–60",
              "Long Jump: 5–8, 9–12, 13–15, 16–20, 21–30, 31–40, 41–50, 51–60, 61+",
              "Relay: 4+4 team, village wise",
            ],
          },
          {
            title: "Track Race Protocols",
            items: [
              "Race begins only on the starter’s command; false starts equal direct disqualification.",
              "Lane discipline is mandatory in 100m, 200m, and 400m.",
              "Relay EOI due 30 November with up to eight shortlisted athletes (only four can start).",
              "Top eight by time advance; events with fewer than eight go straight to finals.",
            ],
          },
          {
            title: "Jump Events – Knockout Format",
            items: [
              "Two attempts in qualification; measurements count only after the minimum mark is hit.",
              "Top eight progress to finals for three more attempts.",
              "Best legal jump decides medals; all attempts (2 + 3) count toward podium tally.",
              "Faults occur if any part of the foot crosses the board on take-off.",
              "In ties, compare next-best jumps to rank athletes.",
            ],
          },
          {
            title: "Jump Events – Additional Notes",
            items: [
              "Format is knockout via measurement trials; footwear can be shoes or barefoot.",
              "Apparel: T-shirt with shorts or track pants.",
              "Landing distance is measured to the first contact point if an athlete falls back.",
            ],
          },
          {
            title: "Javelin Throw – Format & Rules",
            items: [
              "Knockout progression with two attempts for qualification and three in finals.",
              "Footwear is compulsory; clothing follows T-shirt + shorts/track pants.",
              "Implements weigh 600 g (men) and 400 g (women) across age groups.",
              "Hold the grip and throw overhand without turning fully around; stay within the runway until the javelin lands.",
              "A throw is legal only if the tip lands first inside the sector; measure from arc to landing point.",
              "Organisers are not responsible for injury or fractures during competition.",
            ],
          },
          {
            title: "Javelin Throw – Ranking",
            items: [
              "Two attempts in qualification, top eight advance.",
              "Three throws in finals; medals decided on best distance across all attempts.",
              "Use next-best throw to break ties; if still tied, all affected athletes take a sixth attempt.",
            ],
          },
          {
            title: "Discus Throw – Format & Rules",
            items: [
              "Knockout measurement trials with two attempts plus three in finals for qualifiers.",
              "Footwear may be shoes or barefoot; clothing remains T-shirt with shorts/track pants.",
              "Implements weigh 2 kg (men 16–50), 0.75 kg (women 16–50 and 51–60), and 1 kg (men 51–60).",
              "Discus must land within the legal sector; organisers not liable for injuries.",
              "Best distances after finals determine medals; next-best throws break ties, with a sixth attempt if still deadlocked.",
            ],
          },
          {
            title: "Shot Put – Format & Rules",
            items: [
              "Knockout measurement trials; two initial attempts, then three in finals for top eight.",
              "Footwear can be shoes or barefoot; attire is T-shirt with shorts/track pants.",
              "Implements: 4 kg (men 11–25, 51–60, 60+), 3 kg (women same groups), 6 kg (men 16–50), 4 kg (women 16–50).",
              "Begin within 60 seconds of name call; keep shot against the neck and release above shoulder height.",
              "Stay inside the ring; exit from the back only after the shot lands.",
            ],
          },
          {
            title: "Shot Put – Fouls",
            items: [
              "Failing to pause in the circle or exceeding the 60-second window.",
              "Letting the shot drop below or away from the neck, or losing contact mid-throw.",
              "Touching the toe board top, iron ring, or ground outside the circle during the motion.",
              "Shot landing outside the sector or on a sector line counts as a foul.",
              "Leaving the circle before the shot lands or exiting from the front half.",
            ],
          },
          {
            title: "Shot Put – Ranking",
            items: [
              "Measurements count only after crossing the minimum mark.",
              "Best attempt secures position; next-best throws break ties.",
              "If still tied after tiebreakers, athletes take a sixth throw.",
            ],
          },
          {
            title: "Tournament Reminders",
            items: [
              "No external evidence or video will influence officiating decisions.",
              "Organisers and referees’ verdicts are final and binding.",
              "Event is exclusive to KVO members; female KVO athletes married outside KVO become ineligible.",
              "Each category requires at least five participants; otherwise the event is canceled.",
            ],
          },
        ],
      },
      {
        id: "track-terms",
        label: "Terms & Conditions",
        heading: "Terms & Conditions",
        paragraphs: [
          "Review these event-wide terms before locking your slot; they apply to both athletics and swimming entries.",
        ],
        lists: [
          {
            title: "1. Eligibility & Participation",
            items: [
              "Open to all participants; final age brackets will be announced per discipline.",
              "Each athlete may register for up to three athletics events and two swimming events.",
              "Entry fee is ₹100 per event per person and must be paid in full to confirm the slot.",
            ],
          },
          {
            title: "2. Registration & Fees",
            items: [
              "Registrations must be completed online before the published deadline.",
              "Fees are strictly non-refundable and non-transferable.",
              "Late or on-the-spot entries may be refused at the organiser’s discretion.",
            ],
          },
          {
            title: "3. Event Rules",
            items: [
              "All events follow the standard athletics regulations shared separately.",
              "Report at least 30 minutes prior to your event; missed calls count as walkover disqualifications.",
              "Any misconduct, indiscipline, or cheating results in immediate disqualification.",
            ],
          },
          {
            title: "4. Safety & Liability",
            items: [
              "Basic first aid will be available, but organisers are not liable for injuries or accidents.",
              "Participants are responsible for ensuring they are medically fit to compete.",
              "Personal belongings remain the sole responsibility of athletes; organisers are not liable for loss or damage.",
            ],
          },
          {
            title: "5. Code of Conduct",
            items: [
              "Maintain sportsmanship and discipline on and off the field.",
              "Consumption of alcohol, drugs, or banned substances is strictly prohibited.",
              "Organisers’ and officials’ decisions are final and binding.",
            ],
          },
          {
            title: "6. Rights & Media",
            items: [
              "Organisers may use event photos and videos for promotion without additional consent.",
              "Participants cannot claim rights over official media coverage.",
            ],
          },
          {
            title: "7. Cancellation / Postponement",
            items: [
              "Events may be rescheduled or canceled due to weather, government advisories, or other unavoidable situations.",
              "Any applicable refund policy for such scenarios will be communicated later.",
            ],
          },
        ],
        paragraphsAfter: [
          "8. Indemnity",
          "By registering, you declare that you are medically fit and understand the inherent risks of athletics and swimming competitions.",
          "You release and hold harmless organisers, sponsors, venue owners, volunteers, and partners from any claims arising from participation.",
          "You agree to indemnify the organisers against third-party claims caused by your acts or omissions, and confirm you have read and accepted these terms.",
        ],
      },
    ],
  },
  marathon: {
    title: "Kutchi Marathon Playbook",
    tag: "Marathon Brief",
    description:
      "Everything you need to know about eligibility, documentation, age limits, and race-day conduct for the Kutchi Marathon.",
    sections: [
      {
        id: "race-rules",
        label: "Rules & Regulations",
        heading: "Rules & Regulations",
        paragraphs: [
          "• Participation is open to the entire KVO Jain community worldwide.",
          "• Electronic timing mats capture results for 5 km, 10 km, and 21 km categories with chips issued to each runner.",
          "• Fees: Dream Run & 1 km Mother Carrying Baby – ₹200 | 5 km – ₹600 | 10 km – ₹700 | 21 km – ₹700 (Differently abled category is free).",
          "• Minimum ages: 12 yrs for 5 km, 15 yrs for 10 km, and 18 yrs for 21 km.",
          "• Dream Run participants can join the Fancy Dress Contest promoting a social cause; group prizes are collective and themes must be submitted 15 days prior.",
          "• The 1 km Mother Carrying Baby category celebrates bonding between parent and child.",
          "• Registrations close on 30 Nov 2025 at 11:59 PM or earlier if slots fill up.",
          "• Each participant may register for only one category.",
          "• 21 km runners must upload a 10 km timing certificate from a race held on or after 1 Jan 2024 (deadline 31 Dec 2025) else the entry shifts to 10 km.",
          "• Government ID proof is mandatory for age verification; age groups auto-select via date of birth.",
          "• Confirmation email and SMS will be sent after successful registration with further race-kit details on risers.in.",
          "• Race BIB and goodie bag must be collected in person at the designated centre within the announced window.",
          "• T-shirts are provided for 5 km, 10 km, and 21 km categories only; sizes are final once submitted.",
          "• Snacks and finisher medals (5/10/21 km) require showing the official BIB after the race.",
          "• Prizes go to the top three participants in every category; jury decisions are final and organisers may alter event logistics if needed.",
        ],
        listTitle: "Mandatory documents",
        listItems: [
          "Online SMS or printed confirmation email after registration",
          "Authority letter if collecting another runner’s BIB",
        ],
        paragraphsAfter: [
          "• BIBs are non-transferable; no refunds on cancellation and the BIB must be pinned at four corners on the front of the T-shirt.",
          "• Timing certificates release on 16 Feb 2026 and final results go live by 5:00 PM the next day on www.risers.in.",
          "• Event organisers reserve rights to modify date, venue, distance, or schedule at any time; all participants must comply.",
        ],
      },
    ],
  },
};

const INSTAGRAM_POSTS = [
  {
    id: "Registrations Open",
    media: "assets/insta1.webp",
    alt: "Athletes training at sunrise in Ladakh",
    caption:
      "Yes, registrations have officially begun! For all the KVO, tie the shoe laces and get ready",
    hashtags: ["#risers", "#riseasone", "#rise", "#marathon", "#participate", "#run", "#athletics", "#sports", "#announcements", "#winner", "#competition", "#explore", "#fun", "#kvo"],
    likes: 6,
    ago: "3 days ago",
    comments: 1,
    link: "https://www.instagram.com/p/DRRvZlejByq/?igsh=MXkwdTMwdDZlMGxtdw==",
  },
  {
    type: "reel",
    id: "Reel Launch",
    media: "assets/insta2.webp",
    alt: "Relay team celebrating finish line",
    caption:
      "Dont miss it! Participate with your friends and family now",
    hashtags: ["#marathon #running #athletics #navneet #risers #championship #athleisure #winner #rise #participate #reel #reels #explore #fyp"],
    likes: 48,
    comments: 8,
    ago: "1 day ago",
    location: "Mumbai, India",
    link: "https://www.instagram.com/reel/DRj_RKFE_Ae/?igsh=NTM2NnZ2azQ1aDFy",
    
  },
  {
    id: "salt-run",
    media: "assets/insta3.webp",
    alt: "Runner on white salt desert track",
    caption:
      "Run light. Run right. 🏃💪🏼✨",
    hashtags: ["#jalthal", "#riseasone", "#feeltheenergy", "#risers", "#rise", "#navneet", "#running", "#sports", "#athletics", "#athleisure", "#competition", "#championship", "#moment", "#participate", "#hero", "#winner", "#instagram", "#explore", "#fyp"],
    likes: 10,
    comments: 5,
    ago: "1 week ago",
    location: "India",
    link: "https://www.instagram.com/p/DQ9Hdrsjajd/?igsh=MTJjN3M2ZXN5dmttOA==",
  },
];

function initInfoModal() {
  const modal = document.getElementById("infoModal");
  if (!modal) return;

  const titleEl = document.getElementById("modalTitle");
  const closeBtn = document.getElementById("modalClose");
  const tagEl = document.getElementById("modalTag");
  const descEl = document.getElementById("modalDescription");
  const tabsEl = document.getElementById("modalTabs");
  const panesEl = document.getElementById("modalPanes");
  const scrollShell = document.getElementById("modalScrollShell");
  const closeInlineBtn = document.getElementById("modalCloseInline");

  const buildSections = (content) => {
    if (content.sections?.length) {
      return content.sections.map((section, index) => ({
        ...section,
        id: section.id || `section-${index}`,
        label: section.label || section.heading || `Section ${index + 1}`,
        heading: section.heading || section.label || `Section ${index + 1}`,
      }));
    }

    const fallback = [];
    if (content.description) {
      fallback.push({
        id: "overview",
        label: "Overview",
        heading: content.title || "Event Intel",
        paragraphs: [content.description],
      });
    }
    if (content.tips?.length) {
      fallback.push({
        id: "tips",
        label: "Pro Tips",
        heading: "Pro Tips",
        listItems: content.tips,
        listTitle: "Key Moves",
      });
    }
    if (content.facts?.length) {
      fallback.push({
        id: "facts",
        label: "Fast Facts",
        heading: "Fast Facts",
        listItems: content.facts,
        listTitle: "Quick Hits",
      });
    }
    return fallback;
  };

  const setActivePane = (targetId) => {
    if (!tabsEl || !panesEl) return;
    tabsEl.querySelectorAll(".modal-tab").forEach((tab) => {
      const isActive = tab.dataset.target === targetId;
      tab.classList.toggle("active", isActive);
      tab.setAttribute("aria-selected", isActive ? "true" : "false");
      tab.setAttribute("tabindex", isActive ? "0" : "-1");
    });
    panesEl.querySelectorAll(".modal-pane").forEach((pane) => {
      const isActive = pane.id === targetId;
      pane.classList.toggle("active", isActive);
    });
    scrollShell?.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderSections = (content) => {
    if (!tabsEl || !panesEl) return;
    const sections = buildSections(content);
    tabsEl.innerHTML = "";
    panesEl.innerHTML = "";

    sections.forEach((section, index) => {
      const targetId = `modal-pane-${section.id}`;
      const tab = document.createElement("button");
      tab.type = "button";
      tab.className = "modal-tab";
      tab.dataset.target = targetId;
      tab.setAttribute("role", "tab");
      tab.setAttribute("aria-controls", targetId);
      tab.textContent = section.label;
      if (index === 0) {
        tab.classList.add("active");
        tab.setAttribute("aria-selected", "true");
        tab.setAttribute("tabindex", "0");
      } else {
        tab.setAttribute("aria-selected", "false");
        tab.setAttribute("tabindex", "-1");
      }

      tab.addEventListener("click", () => setActivePane(targetId));
      tabsEl.appendChild(tab);

      const pane = document.createElement("section");
      pane.className = "modal-pane";
      pane.id = targetId;
      pane.setAttribute("role", "tabpanel");
      if (index === 0) {
        pane.classList.add("active");
      }

      if (section.kicker) {
        const eyebrow = document.createElement("p");
        eyebrow.className = "modal-eyebrow";
        eyebrow.textContent = section.kicker;
        pane.appendChild(eyebrow);
      }

      const heading = document.createElement("h4");
      heading.textContent = section.heading;
      pane.appendChild(heading);

      (section.paragraphs || []).forEach((text) => {
        const p = document.createElement("p");
        p.textContent = text;
        pane.appendChild(p);
      });

      const tables = section.tables?.length
        ? section.tables
        : section.table
        ? [section.table]
        : [];

      tables.forEach((tableDef) => {
        if (!tableDef?.rows?.length) return;
        const table = document.createElement("table");
        table.className = "modal-table";

        if (tableDef.headers?.length) {
          const thead = document.createElement("thead");
          const headerRow = document.createElement("tr");
          tableDef.headers.forEach((headerText) => {
            const th = document.createElement("th");
            th.textContent = headerText;
            headerRow.appendChild(th);
          });
          thead.appendChild(headerRow);
          table.appendChild(thead);
        }

        const tbody = document.createElement("tbody");
        tableDef.rows.forEach((rowDef) => {
          const rowEl = document.createElement("tr");

          const labelCell = document.createElement("th");
          labelCell.scope = "row";
          labelCell.textContent = rowDef.label || rowDef.header || "";
          rowEl.appendChild(labelCell);

          const detailCell = document.createElement("td");
          if (rowDef.items?.length) {
            const list = document.createElement("ul");
            list.className = "modal-table-list";
            rowDef.items.forEach((item) => {
              const li = document.createElement("li");
              li.textContent = item;
              list.appendChild(li);
            });
            detailCell.appendChild(list);
          } else if (rowDef.value) {
            detailCell.textContent = rowDef.value;
          }
          rowEl.appendChild(detailCell);
          tbody.appendChild(rowEl);
        });

        table.appendChild(tbody);
        pane.appendChild(table);
      });

      if (section.chips?.length) {
        const chipsWrapper = document.createElement("div");
        chipsWrapper.className = "modal-chip-row";
        section.chips.forEach((chipText) => {
          const chip = document.createElement("span");
          chip.className = "modal-chip";
          chip.textContent = chipText;
          chipsWrapper.appendChild(chip);
        });
        pane.appendChild(chipsWrapper);
      }

      const lists = section.lists?.length
        ? section.lists
        : section.listItems?.length
        ? [{ title: section.listTitle, items: section.listItems }]
        : [];

      lists.forEach((listBlock) => {
        if (!listBlock?.items?.length) return;
        if (listBlock.title) {
          const listTitle = document.createElement("p");
          listTitle.className = "modal-bullet-title";
          listTitle.textContent = listBlock.title;
          pane.appendChild(listTitle);
        }
        const list = document.createElement("ul");
        list.className = "modal-bullet-list";
        listBlock.items.forEach((item) => {
          const li = document.createElement("li");
          li.textContent = item;
          list.appendChild(li);
        });
        pane.appendChild(list);
      });

      (section.paragraphsAfter || []).forEach((text) => {
        const p = document.createElement("p");
        p.textContent = text;
        pane.appendChild(p);
      });

      panesEl.appendChild(pane);
    });

    scrollShell?.scrollTo({ top: 0 });
  };

  document.querySelectorAll(".read-more-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const key = btn.getAttribute("data-event");
      const content = INFO_CONTENT[key];
      if (!content) return;
      titleEl.textContent = content.title;
      if (tagEl) tagEl.textContent = content.tag || "Event Intel";
      if (descEl) descEl.textContent = content.description || "";
      renderSections(content);

      modal.classList.add("show");
      modal.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
      closeBtn?.focus();
    });
  });

  function close() {
    modal.classList.remove("show");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  closeBtn?.addEventListener("click", close);
  closeInlineBtn?.addEventListener("click", close);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) close();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("show")) {
      close();
    }
  });
}

// SCORES PAGE DATA + RENDER

const SCORE_DATA = [
  {
    team: "Maharashtra",
    code: "MH",
    gold: 9,
    silver: 6,
    bronze: 4,
    accent: "#ff9c5f",
    headline: "Relay squad +1 gold",
  },
  {
    team: "Delhi",
    code: "DL",
    gold: 7,
    silver: 5,
    bronze: 5,
    accent: "#ff6f91",
    headline: "Vault bronze clinched",
  },
  {
    team: "Gujarat",
    code: "GJ",
    gold: 6,
    silver: 7,
    bronze: 3,
    accent: "#ffa14f",
    headline: "High-jump silver sweep",
  },
  {
    team: "Rajasthan",
    code: "RJ",
    gold: 4,
    silver: 4,
    bronze: 7,
    accent: "#ffbd5a",
    headline: "Beach wrestle bronze",
  },
  {
    team: "Karnataka",
    code: "KA",
    gold: 3,
    silver: 3,
    bronze: 5,
    accent: "#f56f3a",
    headline: "Mixed medley bronze",
  },
  {
    team: "Tamil Nadu",
    code: "TN",
    gold: 2,
    silver: 4,
    bronze: 4,
    accent: "#ff8ab8",
    headline: "400m hurdles silver",
  },
  {
    team: "Punjab",
    code: "PB",
    gold: 1,
    silver: 3,
    bronze: 2,
    accent: "#ffcf43",
    headline: "Skeet bronze secured",
  },
];

const SCORE_META = {
  eventsDecided: 18,
};

function initScores() {
  const tbody = document.getElementById("scoreTableBody");
  const barGraph = document.getElementById("barGraph");
  if (!tbody || !barGraph) return;

  const rows = SCORE_DATA.map((s) => ({
    ...s,
    total: s.gold + s.silver + s.bronze,
  }))
    .sort((a, b) => b.total - a.total)
    .map((row, index) => ({ ...row, rank: index + 1 }));

  renderScoreTable(rows, tbody);
  renderBarGraph(rows, barGraph);
  renderPodium(rows);
  renderTicker(rows);
  updateScoreMetrics(rows);
  initPodiumRefresh(rows);
}

function renderScoreTable(rows, tbody) {
  tbody.innerHTML = "";
  rows.forEach((row) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${row.rank}</td>
      <td>${row.team}</td>
      <td>${row.gold}</td>
      <td>${row.silver}</td>
      <td>${row.bronze}</td>
      <td>${row.total}</td>
    `;
    tbody.appendChild(tr);
  });
}

function renderBarGraph(rows, barGraph) {
  const maxTotal = Math.max(...rows.map((r) => r.total));
  barGraph.innerHTML = "";
  rows.forEach((row) => {
    const group = document.createElement("div");
    group.className = "bar-group";

    const bar = document.createElement("div");
    bar.className = "bar";
    const heightPercent = (row.total / maxTotal) * 100;
    bar.style.height = `${35 + heightPercent}%`;
    bar.style.setProperty("--bar-color", row.accent || "var(--orange-main)");

    const value = document.createElement("span");
    value.className = "bar-value";
    value.textContent = row.total;

    const label = document.createElement("span");
    label.className = "bar-label";
    label.textContent = row.code || row.team.slice(0, 3).toUpperCase();

    bar.appendChild(value);
    group.appendChild(bar);
    group.appendChild(label);
    barGraph.appendChild(group);
  });
}

function renderPodium(rows) {
  const podium = document.getElementById("podiumTop3");
  const note = document.getElementById("podiumNote");
  if (!podium) return;

  const top3 = rows.slice(0, 3);
  podium.innerHTML = "";
  if (!top3.length) return;

  const slots = [
    { index: 1, label: "2nd", className: "podium-slot podium-second", medal: "silver" },
    { index: 0, label: "1st", className: "podium-slot podium-first", medal: "gold" },
    { index: 2, label: "3rd", className: "podium-slot podium-third", medal: "bronze" },
  ];

  slots.forEach((slot) => {
    const team = top3[slot.index];
    if (!team) return;
    const el = document.createElement("div");
    el.className = slot.className;
    el.innerHTML = `
      <div class="medal-icon ${slot.medal}">${slot.label}</div>
      <strong>${team.team}</strong>
      <span>${team.gold}G • ${team.silver}S • ${team.bronze}B</span>
      <p>${team.total} total</p>
      <small>${team.headline || "Locked in"}</small>
    `;
    podium.appendChild(el);
  });

  if (note && top3[1]) {
    const gap = top3[0].total - top3[1].total;
    note.textContent = gap > 0
      ? `${top3[0].team} lead ${top3[1].team} by ${gap} medal${gap === 1 ? "" : "s"}.`
      : `${top3[0].team} and ${top3[1].team} are tied — gold count breaks the tie.`;
  }
}

function renderTicker(rows) {
  const ticker = document.getElementById("medalTicker");
  if (!ticker) return;
  const highlights = rows.slice(0, 5);
  const markup = highlights
    .map(
      (team) => `
        <span>
          <strong>${team.team}</strong>
          ${team.headline || "Steady momentum"}
        </span>
      `
    )
    .join("");
  ticker.innerHTML = markup + markup; // repeat for seamless loop
}

function updateScoreMetrics(rows) {
  const totalMedals = rows.reduce((sum, row) => sum + row.total, 0);
  setMetricValue("metricTotalMedals", totalMedals);
  setMetricValue("metricStates", rows.length);
  setMetricValue("metricEvents", SCORE_META.eventsDecided);
}

function setMetricValue(id, value) {
  const el = document.getElementById(id);
  if (!el) return;
  el.dataset.count = value;
  if (!el.dataset.duration) {
    el.dataset.duration = "1600";
  }
  el.textContent = "0";
}

function initPodiumRefresh(rows) {
  const btn = document.getElementById("refreshPodium");
  if (!btn) return;
  btn.addEventListener("click", () => {
    renderPodium(rows);
    renderTicker(rows);
    btn.classList.add("pulse");
    setTimeout(() => btn.classList.remove("pulse"), 700);
  });
}

// GALLERY FOLDERS + FILTERS + FULLSCREEN IMAGE

const folderLibrary = {
  "athletic-event": [
    { type: "image", src: "assests/gallery/athletic event/1.JPG", label: "Athletic Event" },
    { type: "image", src: "assests/gallery/athletic event/2.JPG", label: "Athletic Event" },
    { type: "image", src: "assests/gallery/athletic event/3.JPG", label: "Athletic Event" },
    { type: "image", src: "assests/gallery/athletic event/4.JPG", label: "Athletic Event" },
    { type: "image", src: "assests/gallery/athletic event/5.JPG", label: "Athletic Event" },
    { type: "image", src: "assests/gallery/athletic event/6.JPG", label: "Athletic Event" },
    { type: "image", src: "assests/gallery/athletic event/7.JPG", label: "Athletic Event" },
    { type: "image", src: "assests/gallery/athletic event/8.JPG", label: "Athletic Event" },
    { type: "image", src: "assests/gallery/athletic event/9.JPG", label: "Athletic Event" },
    { type: "image", src: "assests/gallery/athletic event/10.JPG", label: "Athletic Event" },
    { type: "image", src: "assests/gallery/athletic event/11.JPG", label: "Athletic Event" },
    { type: "image", src: "assests/gallery/athletic event/12.JPG", label: "Athletic Event" },
    { type: "image", src: "assests/gallery/athletic event/13.JPG", label: "Athletic Event" },
    { type: "image", src: "assests/gallery/athletic event/14.JPG", label: "Athletic Event" },
    { type: "image", src: "assests/gallery/athletic event/15.JPG", label: "Athletic Event" },
  ],
  "kutchi-marathon": [
    { type: "image", src: "assests/gallery/marathon/1.CR3", label: "Kutchi Marathon" },
    { type: "image", src: "assests/gallery/marathon/2.CR3", label: "Kutchi Marathon" },
    { type: "image", src: "assests/gallery/marathon/3.CR3", label: "Kutchi Marathon" },
    { type: "image", src: "assests/gallery/marathon/4.CR3", label: "Kutchi Marathon" },
    { type: "image", src: "assests/gallery/marathon/5.CR3", label: "Kutchi Marathon" },
    { type: "image", src: "assests/gallery/marathon/6.CR3", label: "Kutchi Marathon" },
  ],
  "swimming-event":[
    { type: "image", src: "assests/gallery/swimming event/1.webp", label: "Swimming Event" },
    { type: "image", src: "assests/gallery/swimming event/2.webp", label: "Swimming Event" },
    { type: "image", src: "assests/gallery/swimming event/3.webp", label: "Swimming Event" },
    { type: "image", src: "assests/gallery/swimming event/4.webp", label: "Swimming Event" },
    { type: "image", src: "assests/gallery/swimming event/5.webp", label: "Swimming Event" },
    { type: "image", src: "assests/gallery/swimming event/6.webp", label: "Swimming Event" },
    { type: "image", src: "assests/gallery/swimming event/7.webp", label: "Swimming Event" },
    { type: "image", src: "assests/gallery/swimming event/8.webp", label: "Swimming Event" },
    { type: "image", src: "assests/gallery/swimming event/9.webp", label: "Swimming Event" },
    { type: "image", src: "assests/gallery/swimming event/10.webp", label: "Swimming Event" },
    { type: "image", src: "assests/gallery/swimming event/11.webp", label: "Swimming Event" },
    { type: "image", src: "assests/gallery/swimming event/12.webp", label: "Swimming Event" },
    { type: "image", src: "assests/gallery/swimming event/13.webp", label: "Swimming Event" },
    { type: "image", src: "assests/gallery/swimming event/14.webp", label: "Swimming Event" },
    { type: "image", src: "assests/gallery/swimming event/15.webp", label: "Swimming Event" },
    { type: "image", src: "assests/gallery/swimming event/16.webp", label: "Swimming Event" },
    { type: "image", src: "assests/gallery/swimming event/17.webp", label: "Swimming Event" },
    { type: "image", src: "assests/gallery/swimming event/18.webp", label: "Swimming Event" },
    { type: "image", src: "assests/gallery/swimming event/19.webp", label: "Swimming Event" },
    { type: "image", src: "assests/gallery/swimming event/20.webp", label: "Swimming Event" },
    { type: "image", src: "assests/gallery/swimming event/21.webp", label: "Swimming Event" },
    { type: "image", src: "assests/gallery/swimming event/22.webp", label: "Swimming Event" },
    { type: "image", src: "assests/gallery/swimming event/23.webp", label: "Swimming Event" },
    { type: "image", src: "assests/gallery/swimming event/24.webp", label: "Swimming Event" },
    { type: "image", src: "assests/gallery/swimming event/25.webp", label: "Swimming Event" },
    { type: "image", src: "assests/gallery/swimming event/26.webp", label: "Swimming Event" },
    { type: "image", src: "assests/gallery/swimming event/27.webp", label: "Swimming Event" },
    { type: "image", src: "assests/gallery/swimming event/28.webp", label: "Swimming Event" },
    { type: "image", src: "assests/gallery/swimming event/29.webp", label: "Swimming Event" },
    { type: "image", src: "assests/gallery/swimming event/30.webp", label: "Swimming Event" },
    { type: "image", src: "assests/gallery/swimming event/31.webp", label: "Swimming Event" },
    { type: "image", src: "assests/gallery/swimming event/32.webp", label: "Swimming Event" },
    { type: "image", src: "assests/gallery/swimming event/33.webp", label: "Swimming Event" },
    { type: "image", src: "assests/gallery/swimming event/34.webp", label: "Swimming Event" },
    { type: "image", src: "assests/gallery/swimming event/35.webp", label: "Swimming Event" },
    { type: "image", src: "assests/gallery/swimming event/36.webp", label: "Swimming Event" },
    { type: "image", src: "assests/gallery/swimming event/37.webp", label: "Swimming Event" },
    { type: "image", src: "assests/gallery/swimming event/38.webp", label: "Swimming Event" },
    { type: "image", src: "assests/gallery/swimming event/39.webp", label: "Swimming Event" },
    { type: "image", src: "assests/gallery/swimming event/40.webp", label: "Swimming Event" },
    { type: "image", src: "assests/gallery/swimming event/41.webp", label: "Swimming Event" },
    { type: "image", src: "assests/gallery/swimming event/42.webp", label: "Swimming Event" },
    { type: "image", src: "assests/gallery/swimming event/43.webp", label: "Swimming Event" },
    { type: "image", src: "assests/gallery/swimming event/44.webp", label: "Swimming Event" },
    { type: "image", src: "assests/gallery/swimming event/45.webp", label: "Swimming Event" },
    { type: "image", src: "assests/gallery/swimming event/46.webp", label: "Swimming Event" },
    { type: "image", src: "assests/gallery/swimming event/47.webp", label: "Swimming Event" },
    { type: "image", src: "assests/gallery/swimming event/48.webp", label: "Swimming Event" },
    { type: "image", src: "assests/gallery/swimming event/49.webp", label: "Swimming Event" },
    { type: "image", src: "assests/gallery/swimming event/50.webp", label: "Swimming Event" },
    { type: "image", src: "assests/gallery/swimming event/51.webp", label: "Swimming Event" },
    { type: "image", src: "assests/gallery/swimming event/52.webp", label: "Swimming Event" },
    { type: "image", src: "assests/gallery/swimming event/53.webp", label: "Swimming Event" },
    { type: "image", src: "assests/gallery/swimming event/54.webp", label: "Swimming Event" },
    { type: "image", src: "assests/gallery/swimming event/55.webp", label: "Swimming Event" },
    { type: "image", src: "assests/gallery/swimming event/56.webp", label: "Swimming Event" },
    { type: "image", src: "assests/gallery/swimming event/57.webp", label: "Swimming Event" },
    { type: "image", src: "assests/gallery/swimming event/58.webp", label: "Swimming Event" },
    { type: "image", src: "assests/gallery/swimming event/59.webp", label: "Swimming Event" },
    { type: "image", src: "assests/gallery/swimming event/60.webp", label: "Swimming Event" },
    { type: "image", src: "assests/gallery/swimming event/61.webp", label: "Swimming Event" },
    { type: "image", src: "assests/gallery/swimming event/62.webp", label: "Swimming Event" },
    { type: "image", src: "assests/gallery/swimming event/63.webp", label: "Swimming Event" },
    { type: "image", src: "assests/gallery/swimming event/64.webp", label: "Swimming Event" },
    { type: "image", src: "assests/gallery/swimming event/65.webp", label: "Swimming Event" },
    { type: "image", src: "assests/gallery/swimming event/66.webp", label: "Swimming Event" },
    { type: "image", src: "assests/gallery/swimming event/67.webp", label: "Swimming Event" },
    { type: "image", src: "assests/gallery/swimming event/68.webp", label: "Swimming Event" },
    { type: "image", src: "assests/gallery/swimming event/69.webp", label: "Swimming Event" },
  ],
  "Training": [
    { type: "video", src: "assests/training/1.webm", label: "Training Practice" },
    { type: "video", src: "assests/training/2.mp4", label: "Training Practice" },
    { type: "video", src: "assests/training/3.webm", label: "Training Practice" },
    { type: "video", src: "assests/training/4.webm", label: "Training Practice" },
    { type: "video", src: "assests/training/5.webm", label: "Training Practice" },
    { type: "video", src: "assests/training/6.mp4", label: "Training Practice" },
  ],
  "logo-reveal": [
    { type: "image", src: "assests/gallery/logo reveal/1.webp", label: "Logo Reveal" },
    { type: "image", src: "assests/gallery/logo reveal/2.webp", label: "Logo Reveal" },
    { type: "image", src: "assests/gallery/logo reveal/3.webp", label: "Logo Reveal" },
    { type: "image", src: "assests/gallery/logo reveal/4.webp", label: "Logo Reveal" },
    { type: "image", src: "assests/gallery/logo reveal/5.webp", label: "Logo Reveal" }, 
    { type: "image", src: "assests/gallery/logo reveal/6.webp", label: "Logo Reveal" },
    { type: "image", src: "assests/gallery/logo reveal/7.webp", label: "Logo Reveal" },
    { type: "image", src: "assests/gallery/logo reveal/8.webp", label: "Logo Reveal" },
    { type: "image", src: "assests/gallery/logo reveal/9.webp", label: "Logo Reveal" },
    { type: "image", src: "assests/gallery/logo reveal/10.webp", label: "Logo Reveal" },
    { type: "image", src: "assests/gallery/logo reveal/11.webp", label: "Logo Reveal" },
    { type: "image", src: "assests/gallery/logo reveal/12.webp", label: "Logo Reveal" },
    { type: "image", src: "assests/gallery/logo reveal/13.webp", label: "Logo Reveal" },
    { type: "image", src: "assests/gallery/logo reveal/14.webp", label: "Logo Reveal" },
    { type: "image", src: "assests/gallery/logo reveal/15.webp", label: "Logo Reveal" },
    { type: "image", src: "assests/gallery/logo reveal/16.webp", label: "Logo Reveal" },
    { type: "image", src: "assests/gallery/logo reveal/17.webp", label: "Logo Reveal" },
  ],
  "old-memories": [
    { type: "image", src: "assests/gallery/old memories/1.webp", label: "Old memories", text: "" },
    { type: "image", src: "assests/gallery/old memories/2.webp", label: "Old memories", text: "" },
    { type: "image", src: "assests/gallery/old memories/4.webp", label: "Old memories", text: "" },
    { type: "image", src: "assests/gallery/old memories/5.webp", label: "Old memories", text: "" },
    { type: "image", src: "assests/gallery/old memories/7.webp", label: "Old memories", text: "" },
    { type: "image", src: "assests/gallery/old memories/9.webp", label: "Old memories", text: "" },
    { type: "image", src: "assests/gallery/old memories/11.webp", label: "Old memories", text: "" },   
    { type: "image", src: "assests/gallery/old memories/13.webp", label: "Old memories", text: "" },
    { type: "image", src: "assests/gallery/old memories/14.webp", label: "Old memories", text: "" },
    { type: "image", src: "assests/gallery/old memories/15.webp", label: "Old memories", text: "" }, 
    { type: "image", src: "assests/gallery/old memories/16.webp", label: "Old memories", text: " "},
    { type: "image", src: "assests/gallery/old memories/18.webp", label: "Old memories", text: " "},
    { type: "image", src: "assests/gallery/old memories/19.webp", label: "Old memories", text: " "},
    { type: "image", src: "assests/gallery/old memories/21.webp", label: "Old memories", text: " "},
    { type: "image", src: "assests/gallery/old memories/22.webp", label: "Old memories", text: " "},
    { type: "image", src: "assests/gallery/old memories/24.webp", label: "Old memories", text: " "},
    { type: "image", src: "assests/gallery/old memories/25.webp", label: "Old memories", text: " "},

  ],
  
};

function initFolderModal() {
  const modal = document.querySelector(".folder-modal");
  if (!modal) return null;

  const backdrop = modal.querySelector(".folder-backdrop");
  const dialog = modal.querySelector(".folder-dialog");
  const closeBtn = modal.querySelector(".folder-close");
  const img = modal.querySelector(".folder-media-img");
  const vid = modal.querySelector(".folder-media-video");
  const chip = modal.querySelector(".folder-chip");
  const text = modal.querySelector(".folder-text");
  const counter = modal.querySelector(".folder-counter");
  const prev = modal.querySelector(".folder-prev");
  const next = modal.querySelector(".folder-next");

  let activeFolder = null;
  let index = 0;

  const resetMedia = () => {
    [img, vid].forEach((el) => {
      el.classList.remove("is-active");
      if (el.tagName === "VIDEO") {
        el.pause();
        el.removeAttribute("src");
        el.load();
      }
    });
  };

  const render = () => {
    if (!activeFolder || !folderLibrary[activeFolder]) return;
    const items = folderLibrary[activeFolder];
    const item = items[index];
    resetMedia();

    if (item.type === "video") {
      vid.src = item.src;
      vid.classList.add("is-active");
      vid.play().catch(() => {});
    } else {
      img.src = item.src;
      img.alt = item.text || "Event media";
      img.classList.add("is-active");
    }

    chip.textContent = item.label || "";
    text.textContent = item.text || "";
    counter.textContent = `${index + 1} / ${items.length}`;
  };

  const open = (folderId) => {
    if (!folderLibrary[folderId]) return;
    activeFolder = folderId;
    index = 0;
    render();
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  };

  const close = () => {
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    resetMedia();
  };

  const step = (delta) => {
    if (!activeFolder || !folderLibrary[activeFolder]) return;
    const items = folderLibrary[activeFolder];
    index = (index + delta + items.length) % items.length;
    render();
  };

  [closeBtn, backdrop].forEach((el) => el && el.addEventListener("click", close));
  prev?.addEventListener("click", () => step(-1));
  next?.addEventListener("click", () => step(1));
  document.addEventListener("keydown", (e) => {
    if (modal.getAttribute("aria-hidden") === "true") return;
    if (e.key === "Escape") close();
    if (e.key === "ArrowLeft") step(-1);
    if (e.key === "ArrowRight") step(1);
  });

  return open;
}

function initGallery() {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const grid = document.getElementById("galleryGrid");
  if (!grid || !filterButtons.length) return;

  const items = grid.querySelectorAll(".gallery-item");
  const openFolder = initFolderModal();

  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const filter = btn.getAttribute("data-filter");
      filterButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      items.forEach((item) => {
        const cat = item.getAttribute("data-category");
        item.style.display =
          filter === "all" || cat === filter ? "block" : "none";
      });
    });
  });

  // Fullscreen modal
  const imageModal = document.getElementById("imageModal");
  const imageClose = document.getElementById("imageModalClose");
  const modalImg = document.getElementById("modalImage");

  if (!imageModal) return;

  items.forEach((item) => {
    item.addEventListener("click", () => {
      const folderId = item.getAttribute("data-folder");
      if (folderId && openFolder) {
        openFolder(folderId);
        return;
      }
      const img = item.querySelector("img");
      if (!img) return;
      modalImg.src = img.src;
      imageModal.classList.add("show");
    });
  });

  function closeImageModal() {
    imageModal.classList.remove("show");
    modalImg.src = "";
  }

  imageClose.addEventListener("click", closeImageModal);
  imageModal.addEventListener("click", (e) => {
    if (e.target === imageModal) closeImageModal();
  });
}

function initGalleryShuffle() {
  const button = document.getElementById("shuffleGallery");
  const grid = document.getElementById("galleryGrid");
  if (!button || !grid) return;

  button.addEventListener("click", () => {
    const items = grid.querySelectorAll(".gallery-item");
    if (!items.length) return;
    const pick = items[Math.floor(Math.random() * items.length)];

    pick.classList.remove("flash");
    void pick.offsetWidth;
    pick.classList.add("flash");
    pick.scrollIntoView({ behavior: "smooth", block: "center" });
  });
}

// HERO COUNTERS & PROGRESS

function initHeroCounters() {
  const counters = Array.from(document.querySelectorAll("[data-count]"));
  if (!counters.length) return;

  // Derive active years from a configured start year so the hero shows years, not a year range.
  const heroYearsEl = document.querySelector(".hero .stat-number[data-start-year]");
  if (heroYearsEl) {
    const startYear = Number(heroYearsEl.dataset.startYear) || new Date().getFullYear();
    const currentYear = new Date().getFullYear();
    const yearsActive = Math.max(1, currentYear - startYear + 1);
    heroYearsEl.dataset.count = yearsActive;
  }

  const animateCount = (el, delay = 0) => {
    if (el.dataset.countAnimated === "true") return;
    el.dataset.countAnimated = "true";

    const target = Number(el.dataset.count) || 0;
    const duration = Number(el.dataset.duration) || 1400;
    const prefix = el.dataset.prefix || "";
    const suffix = el.dataset.suffix || "";
    const format = el.dataset.format || "number";

    const startAnimation = () => {
      const startTime = performance.now();

      function frame(now) {
        const progress = Math.min((now - startTime) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const value = Math.round(target * eased);
        el.textContent = `${prefix}${formatValue(value, format)}${suffix}`;
        if (progress < 1) requestAnimationFrame(frame);
      }

      requestAnimationFrame(frame);
    };

    if (delay > 0) {
      setTimeout(startAnimation, delay);
    } else {
      startAnimation();
    }
  };

  const heroCounters = Array.from(document.querySelectorAll(".hero .stat-number[data-count]"));
  const heroCounterSet = new Set(heroCounters);
  const otherCounters = counters.filter((el) => !heroCounterSet.has(el));

  const animateSequence = (list) => {
    list.forEach((el, idx) => animateCount(el, idx * 250));
  };

  const observeList = (list, callback) => {
    if (!list.length) return;
    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              callback();
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.35 }
      );

      observer.observe(list[0]);
    } else {
      callback();
    }
  };

  // Animate hero counters in sequence when the hero stats enter the viewport.
  observeList(heroCounters, () => animateSequence(heroCounters));

  // Animate all other counters individually on reveal.
  if (otherCounters.length) {
    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              animateCount(entry.target);
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.35 }
      );

      otherCounters.forEach((el) => observer.observe(el));
    } else {
      otherCounters.forEach((el) => animateCount(el));
    }
  }
}

function formatValue(value, format) {
  if (format === "compact") {
    if (value >= 1000) {
      const base = (value / 1000).toFixed(value % 1000 === 0 ? 0 : 1);
      return `${base}K`;
    }
    return value;
  }
  if (format === "comma") {
    return value.toLocaleString();
  }
  return value;
}

function initProgressRing() {
  const ring = document.querySelector("[data-progress-ring]");
  if (!ring) return;
  const value = Number(ring.getAttribute("data-progress")) || 0;
  const circle = ring.querySelector(".ring-fill");
  const valueLabel = ring.querySelector(".progress-value strong");
  if (!circle) return;
  const radius = circle.getAttribute("r");
  const circumference = 2 * Math.PI * radius;
  circle.style.strokeDasharray = `${circumference} ${circumference}`;
  circle.style.strokeDashoffset = circumference;
  if (valueLabel && !valueLabel.dataset.count) {
    valueLabel.textContent = `${value}%`;
  }

  requestAnimationFrame(() => {
    const offset = circumference - (value / 100) * circumference;
    circle.style.strokeDashoffset = offset;
  });
}

function initInstagramFeed() {
  const feed = document.getElementById("instagramFeed");
  if (!feed) return;

  feed.innerHTML = "";
  INSTAGRAM_POSTS.forEach((post) => {
    const card = document.createElement("article");
    card.className = "insta-card";
    card.setAttribute("data-post", post.id);
    const chipLabel =
      post.type === "reel"
        ? "Reel"
        : post.type === "carousel"
        ? "Carousel"
        : "Post";

    const hashtags = (post.hashtags || []).join(" ");

    card.innerHTML = `
      <header class="insta-card-header">
        <div class="insta-profile">
          <div class="insta-avatar">RI</div>
          <div class="insta-user">
            <strong>@risersmumbai</strong>
            <span>${post.location || "India"}</span>
          </div>
        </div>
        <span class="insta-meta">${post.ago}</span>
      </header>
      <div class="insta-media">
        <img src="${post.media}" alt="${post.alt}" loading="lazy" />
        <span class="insta-chip">${chipLabel}</span>
        ${
          post.isLive
            ? '<span class="insta-live-dot"><span class="dot"></span>Live Now</span>'
            : ""
        }
      </div>
      <div class="insta-body">
        <p class="insta-caption">${post.caption}</p>
        ${hashtags ? `<span class="insta-hashtags">${hashtags}</span>` : ""}
        <div class="insta-stats">
          <div class="insta-actions">
            <span>❤ ${formatValue(post.likes, "comma")}</span>
            <span>💬 ${formatValue(post.comments, "comma")}</span>
          </div>
          <a class="insta-link" href="${post.link}" target="_blank" rel="noopener noreferrer">
            View post →
          </a>
        </div>
      </div>
    `;

    feed.appendChild(card);
  });
}

// INIT ALL

function initExperienceCards() {
  const cards = document.querySelectorAll('.experience-card');
  if (!cards.length) return;

  const isTouch = window.matchMedia('(hover: none)').matches || window.matchMedia('(pointer: coarse)').matches;
  if (!isTouch) return;

  cards.forEach((card) => {
    card.addEventListener('click', () => {
      const already = card.classList.contains('flipped');
      cards.forEach((c) => c.classList.remove('flipped'));
      if (!already) card.classList.add('flipped');
    });
    card.addEventListener('keyup', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const already = card.classList.contains('flipped');
        cards.forEach((c) => c.classList.remove('flipped'));
        if (!already) card.classList.add('flipped');
      }
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initCountdowns();
  initInfoModal();
  initScores();
  initGallery();
  initGalleryShuffle();
  initHeroCounters();
  initProgressRing();
  initInstagramFeed();
  initContactForm();
  initNav();
  initCursor();
  initExperienceCards();
});

// CONTACT FORM (Formspree)
function initContactForm() {
  const form = document.getElementById("contactForm");
  const status = document.getElementById("contactStatus");
  const submitBtn = form ? form.querySelector('button[type="submit"]') : null;
  if (!form) return;

  const endpoint = form.getAttribute("action") || "https://formspree.io/f/mwpgdlrd";

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    formData.append("_replyto", formData.get("email") || "");
    formData.append("_subject", "Risers Contact Form Submission");

    if (status) {
      status.textContent = "Sending…";
      status.classList.remove("success", "error");
    }
    if (submitBtn) submitBtn.disabled = true;

    fetch(endpoint, {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: formData,
    })
      .then(async (response) => {
        if (response.ok) {
          if (status) {
            status.textContent = "Sent! We’ll reply within 24 hours.";
            status.classList.add("success");
          }
          form.reset();
        } else {
          let err = "";
          try {
            const data = await response.json();
            err = data.error || data.message || "";
          } catch (e) {
            err = response.statusText;
          }
          if (status) {
            status.textContent = err ? `Couldn’t send: ${err}` : "Couldn’t send right now. Please try again.";
            status.classList.add("error");
          }
        }
      })
      .catch(() => {
        if (status) {
          status.textContent = "Network error. Please try again.";
          status.classList.add("error");
        }
      })
      .finally(() => {
        if (submitBtn) submitBtn.disabled = false;
      });
  });
}

// NAVBAR (scroll shrink + mobile drawer)
function initNav() {
  const header = document.querySelector('.site-header');
  const toggle = document.querySelector('.mobile-nav-toggle');
  const menu = document.getElementById('mobileMenu');
  const closeBtn = document.querySelector('.mobile-close');
  if (!header) return;

  // Scroll shrink
  let lastY = window.scrollY;
  function onScroll() {
    const y = window.scrollY;
    if (y > 40) header.classList.add('scrolled'); else header.classList.remove('scrolled');
    lastY = y;
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Mobile drawer
  if (toggle && menu) {
    function openMenu() {
      menu.classList.add('active');
      toggle.setAttribute('aria-expanded','true');
      menu.setAttribute('aria-hidden','false');
      document.body.style.overflow = 'hidden';
      const firstLink = menu.querySelector('a');
      if (firstLink) firstLink.focus();
    }
    function closeMenu() {
      menu.classList.remove('active');
      toggle.setAttribute('aria-expanded','false');
      menu.setAttribute('aria-hidden','true');
      document.body.style.overflow = '';
      toggle.focus();
    }
    toggle.addEventListener('click', () => {
      menu.classList.contains('active') ? closeMenu() : openMenu();
    });
    if (closeBtn) closeBtn.addEventListener('click', closeMenu);
    menu.addEventListener('click', (e) => { if (e.target === menu) closeMenu(); });
    menu.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && menu.classList.contains('active')) closeMenu(); });
  }
}

// CUSTOM CURSOR
function initCursor() {
  const dot = document.querySelector('.cursor-dot');
  const ring = document.querySelector('.cursor-ring');
  const prefersTouch = window.matchMedia('(hover: none)').matches || window.matchMedia('(pointer: coarse)').matches;
  if (!dot || !ring || prefersTouch) return;

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let ringX = mouseX;
  let ringY = mouseY;

  const speed = 0.18; // easing for the ring trail

  function move() {
    const dx = mouseX - ringX;
    const dy = mouseY - ringY;
    ringX += dx * speed;
    ringY += dy * speed;
    ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
    requestAnimationFrame(move);
  }

  move();

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
  });

  document.addEventListener('mousedown', () => {
    ring.classList.add('active');
  });

  document.addEventListener('mouseup', () => {
    ring.classList.remove('active');
  });

  // Hide on leave for cleanliness
  document.addEventListener('mouseleave', () => {
    dot.style.opacity = '0';
    ring.style.opacity = '0';
  });

  document.addEventListener('mouseenter', () => {
    dot.style.opacity = '1';
    ring.style.opacity = '1';
  });
}

// MARATHON ROUTE CARD
document.addEventListener('DOMContentLoaded', function() {
  const routeButtons = document.querySelectorAll('.route-btn');
  const routeModal = document.getElementById('routeModal');
  const routeImage = document.getElementById('routeImage');
  const routeClose = document.getElementById('routeClose');
  
  if (!routeButtons.length || !routeModal || !routeImage || !routeClose) {
    console.log('Marathon route elements not found');
    return;
  }
  
  // Image paths
  const routeImages = {
    '1': 'assests/1km.png',
    '5': 'assests/5km.png',
    '10': 'assests/10km.png',
    '21': 'assests/21km.png'
  };
  

  
  // Button click handler
  routeButtons.forEach(button => {
    button.addEventListener('click', function() {
      const km = this.getAttribute('data-km');
      let imagePath = routeImages[km];
      
      console.log(`Button clicked: ${km}km`);
      
      // Disable all buttons
      routeButtons.forEach(btn => btn.classList.add('disabled'));
      
      // Set image
      routeImage.src = imagePath;
      routeImage.alt = `${km}km Marathon Route`;
      
      // Error handler - try fallback image
      routeImage.onerror = function() {
        console.log(`Primary image failed, trying fallback for ${km}km`);
        const fallback = testImages[km];
        if (fallback && routeImage.src.indexOf(fallback) === -1) {
          routeImage.src = fallback;
        } else {
          alert(`Images not found!\n\nAdd these files to 'assests' folder:\n- 1km.png\n- 5km.png\n- 10km.png\n- 21km.png`);
          closeModal();
        }
      };
      
      // Success handler
      routeImage.onload = function() {
        console.log('Image loaded successfully');
        setTimeout(() => {
          routeModal.classList.add('active');
        }, 50);
      };
    });
  });
  
  // Close modal function
  function closeModal() {
    routeModal.classList.remove('active');
    setTimeout(() => {
      routeButtons.forEach(btn => btn.classList.remove('disabled'));
      routeImage.src = '';
    }, 400);
  }
  
  // Close button click
  routeClose.addEventListener('click', closeModal);
  
  // Click outside to close
  routeModal.addEventListener('click', function(e) {
    if (e.target === routeModal) {
      closeModal();
    }
  });
  
  // ESC key to close
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && routeModal.classList.contains('active')) {
      closeModal();
    }
  });
  
  console.log('Marathon route card initialized ✓');
});
