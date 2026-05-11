const header = document.querySelector("[data-header]");
const nav = document.querySelector("[data-nav]");
const navToggle = document.querySelector("[data-nav-toggle]");
const tabsRoot = document.querySelector("[data-tabs]");
const approvalStatus = document.querySelector("[data-approval-status]");

if (nav && navToggle) {
  navToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

if (header) {
  const syncHeader = () => {
    header.classList.toggle("is-scrolled", window.scrollY > 8);
  };

  syncHeader();
  window.addEventListener("scroll", syncHeader, { passive: true });
}

if (tabsRoot) {
  const tabButtons = tabsRoot.querySelectorAll("[data-tab]");
  const panels = tabsRoot.querySelectorAll("[data-panel]");

  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const selectedTab = button.dataset.tab;

      tabButtons.forEach((item) => item.classList.toggle("is-active", item === button));
      panels.forEach((panel) => {
        panel.classList.toggle("is-active", panel.dataset.panel === selectedTab);
      });
    });
  });
}

document.querySelectorAll("[data-approval]").forEach((button) => {
  button.addEventListener("click", () => {
    if (!approvalStatus) {
      return;
    }

    const action = button.dataset.approval;
    approvalStatus.textContent = action === "approved"
      ? "Черновик помечен как одобренный: backend применит его только через защищённый API-вызов."
      : "Черновик открыт для редактирования: AI сохранит обновлённую версию без применения.";
  });
});
