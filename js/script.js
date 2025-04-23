"use strict";
document.addEventListener("DOMContentLoaded", function () {
    // Vælg DOM-elementer
    const anchor = document.querySelector(".anchor");
    const anchorTooltip = document.getElementById("anchor-tooltip");
    const audio = document.querySelector("audio");
  });

  anchor.addEventListener("mouseenter", () => {
    const rect = anchor.getBoundingClientRect();
    anchorTooltip.style.opacity = "1";
    anchorTooltip.style.left = `${rect.left + 60}px`;
    anchorTooltip.style.top = `${rect.top - 30}px`;
  
    if (audio.paused) {
      anchorTooltip.innerText = "Klik for at starte musikken";
    } else {
      anchorTooltip.innerText = "Klik for at stoppe musikken";
    }
  });
  anchor.addEventListener("mouseleave", () => {
    anchorTooltip.style.opacity = "0";
  });
  anchor.addEventListener("click", () => {
    audio.muted = false;
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  });
  const tooltip = document.getElementById("tooltip");
  fishInfo.forEach((fish) => {
    const fishElem = document.querySelectorAll("." + fish.className);
  
    fishElem.forEach((el) => {
      el.addEventListener("click", (e) => {
        tooltip.innerText = `${fish.art} — Alder: ${fish.alder}`;
        tooltip.style.top = `${e.pageY - 40}px`;
        tooltip.style.left = `${e.pageX + 20}px`;
        tooltip.style.opacity = "1";
        tooltip.style.fontSize = "1.15rem";
  
        // Hide tooltip after 3 seconds
        setTimeout(() => {
          tooltip.style.opacity = "0";
        }, 3000);
      });
    });
  });
  
  const fishInfo = [
    {
      className: "redfish",
      art: "Rød fisk",
      alder: "2 år",
      latin: "Sebastes marinus",
      længde: "Op til 1 meter",
      habitat: "Nordlige Atlanterhav"
    },
  ];
  const fishInfo2 = [
    {
      className: "redfish",
      art: "Rød Snapper",
      alder: "2 år",
      latinsknavn: "Lutjanus campechanus",
      længde: "Op til 100 cm",
      vægt: "Typisk 2–4 kg",
      levested: "Mexicanske Golf og det sydøstlige USA"
    }
    ];
