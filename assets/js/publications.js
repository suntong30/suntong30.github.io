(function () {
  "use strict";

  function initPublicationBrowser() {
    var browser = document.querySelector("[data-publication-browser]");
    if (!browser) {
      return;
    }

    var results = browser.querySelector("#publication-results");
    var searchInput = browser.querySelector("#publication-search");
    var status = browser.querySelector("#publication-results-status");
    var tabs = Array.prototype.slice.call(
      browser.querySelectorAll("[data-publication-view]")
    );
    var cards = Array.prototype.slice.call(
      browser.querySelectorAll("[data-publication-card]")
    );

    if (!results || !searchInput || !tabs.length || !cards.length) {
      return;
    }

    var publications = cards.map(function (card, index) {
      var titleElement = card.querySelector(".publication-title");
      var title = titleElement ? titleElement.textContent : "";

      if (titleElement) {
        var numberElement = document.createElement("span");

        numberElement.className = "publication-number";
        numberElement.textContent = cards.length - index + ".";
        card.insertBefore(numberElement, card.firstChild);
      }

      return {
        card: card,
        title: title.replace(/^\s*\[[^\]]+\]\s*/, "").trim().toLowerCase(),
        year: card.getAttribute("data-year") || "Other",
        type: card.getAttribute("data-type") || "other"
      };
    });
    var currentView = "year";

    function createGroup(title, items) {
      var section = document.createElement("section");
      var heading = document.createElement("h2");
      var list = document.createElement("div");

      section.className = "publication-group";
      heading.className = "publication-group__heading";
      heading.textContent = title;
      list.className = "publication-list";

      items.forEach(function (publication) {
        list.appendChild(publication.card);
      });

      section.appendChild(heading);
      section.appendChild(list);
      return section;
    }

    function groupPublications(items) {
      if (currentView === "venue") {
        return [
          {
            title: "Conference",
            items: items.filter(function (publication) {
              return publication.type === "conference";
            })
          },
          {
            title: "Journal",
            items: items.filter(function (publication) {
              return publication.type === "journal";
            })
          }
        ];
      }

      var groups = [];
      items.forEach(function (publication) {
        var group = groups.filter(function (candidate) {
          return candidate.title === publication.year;
        })[0];

        if (!group) {
          group = { title: publication.year, items: [] };
          groups.push(group);
        }
        group.items.push(publication);
      });
      return groups;
    }

    function renderPublications() {
      var query = searchInput.value.trim().toLowerCase();
      var visiblePublications = publications.filter(function (publication) {
        return !query || publication.title.indexOf(query) !== -1;
      });
      var groups = groupPublications(visiblePublications);

      results.setAttribute("aria-busy", "true");
      results.innerHTML = "";

      groups.forEach(function (group) {
        if (group.items.length) {
          results.appendChild(createGroup(group.title, group.items));
        }
      });

      if (!visiblePublications.length) {
        var emptyState = document.createElement("div");
        var emptyTitle = document.createElement("strong");
        var emptyHint = document.createElement("span");

        emptyState.className = "publication-empty";
        emptyTitle.textContent = "No publications found.";
        emptyHint.textContent = "Try another title keyword.";
        emptyState.appendChild(emptyTitle);
        emptyState.appendChild(emptyHint);
        results.appendChild(emptyState);
      }

      results.removeAttribute("aria-busy");
      status.textContent =
        visiblePublications.length +
        (visiblePublications.length === 1 ? " publication" : " publications") +
        " shown";
    }

    function setView(view) {
      currentView = view === "venue" ? "venue" : "year";

      tabs.forEach(function (tab) {
        var isActive =
          tab.getAttribute("data-publication-view") === currentView;
        tab.classList.toggle("is-active", isActive);
        tab.setAttribute("aria-selected", isActive ? "true" : "false");
        tab.setAttribute("tabindex", isActive ? "0" : "-1");
        if (isActive) {
          results.setAttribute("aria-labelledby", tab.id);
        }
      });

      renderPublications();
    }

    tabs.forEach(function (tab, index) {
      tab.addEventListener("click", function () {
        setView(tab.getAttribute("data-publication-view"));
      });

      tab.addEventListener("keydown", function (event) {
        if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") {
          return;
        }

        event.preventDefault();
        var direction = event.key === "ArrowRight" ? 1 : -1;
        var nextIndex = (index + direction + tabs.length) % tabs.length;
        tabs[nextIndex].focus();
        setView(tabs[nextIndex].getAttribute("data-publication-view"));
      });
    });

    searchInput.addEventListener("input", renderPublications);
    setView("year");
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initPublicationBrowser);
  } else {
    initPublicationBrowser();
  }
})();
