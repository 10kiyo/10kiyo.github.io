const THEME_STYLES = {
  emerald: {
    card: "hover:border-brand-500",
    icon: "bg-brand-50 text-brand-600 group-hover:bg-brand-600 group-hover:text-white",
    title: "group-hover:text-brand-700",
    cta: "text-brand-600",
  },
  sky: {
    card: "hover:border-sky-500",
    icon: "bg-sky-50 text-sky-600 group-hover:bg-sky-600 group-hover:text-white",
    title: "group-hover:text-sky-700",
    cta: "text-sky-600",
  },
  indigo: {
    card: "hover:border-indigo-500",
    icon: "bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white",
    title: "group-hover:text-indigo-700",
    cta: "text-indigo-600",
  },
};

function renderPortfolio() {
  // 1. Render Keahlian
  const skillsEl = document.getElementById("skills-list");
  if (skillsEl) {
    skillsEl.innerHTML = PORTFOLIO_DATA.skills
      .map(
        (skill) =>
          `<span class="px-3 py-1 rounded-lg bg-zinc-100 text-zinc-700 text-xs font-semibold">${skill}</span>`,
      )
      .join("");
  }

  // 2. Render Kartu Proyek
  const projectsEl = document.getElementById("projects-grid");
  if (projectsEl) {
    projectsEl.innerHTML = PORTFOLIO_DATA.projects
      .map((item) => {
        const t = THEME_STYLES[item.theme] || THEME_STYLES.emerald;
        return `
          <a href="${item.url}" target="_blank" rel="noopener" class="group bg-white p-6 rounded-2xl border border-zinc-200/90 ${t.card} shadow-sm hover:shadow-md transition-all flex flex-col justify-between print-break-inside">
            <div>
              <div class="flex items-center justify-between mb-4">
                <div class="w-11 h-11 rounded-xl ${t.icon} flex items-center justify-center transition-colors">
                  <i data-lucide="${item.icon}" class="w-5 h-5"></i>
                </div>
                <span class="text-xs font-semibold px-2.5 py-1 rounded-full bg-zinc-100 text-zinc-600">${item.badge}</span>
              </div>
              <h3 class="text-lg font-bold text-zinc-900 ${t.title} transition-colors">${item.title}</h3>
              <p class="text-sm text-zinc-600 mt-2 leading-relaxed">${item.description}</p>
            </div>
            <div class="mt-5 pt-4 border-t border-zinc-100 flex items-center justify-between text-xs font-bold ${t.cta}">
              <span>${item.cta}</span>
              <i data-lucide="arrow-up-right" class="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"></i>
            </div>
          </a>
        `;
      })
      .join("");
  }

  // 3. Render Kontak
  const contactsEl = document.getElementById("contacts-grid");
  if (contactsEl) {
    contactsEl.innerHTML = PORTFOLIO_DATA.contacts
      .map(
        (c) => `
          <a href="${c.url}" ${c.url.startsWith("http") ? 'target="_blank" rel="noopener"' : ""} class="no-print-url flex items-center gap-3 p-3.5 rounded-xl bg-white border border-zinc-200/90 ${c.hoverClass} transition group">
            <div class="w-9 h-9 rounded-lg bg-zinc-100 ${c.iconWrapClass} text-zinc-700 flex items-center justify-center shrink-0 transition">
              ${c.iconHtml}
            </div>
            <div class="overflow-hidden">
              <p class="text-xs font-bold text-zinc-900">${c.label}</p>
              <p class="text-[11px] text-zinc-500 truncate">${c.handle}</p>
            </div>
          </a>
        `,
      )
      .join("");
  }

  // Inisialisasi ikon Lucide setelah elemen dirender
  if (window.lucide) {
    lucide.createIcons();
  }
}

function initScrollReveal() {
  const els = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1 },
    );
    els.forEach((el) => io.observe(el));
  } else {
    els.forEach((el) => el.classList.add("in"));
  }
}

document.addEventListener("DOMContentLoaded", () => {
  renderPortfolio();
  initScrollReveal();
});
