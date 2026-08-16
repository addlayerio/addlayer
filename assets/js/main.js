(function () {
  "use strict";

  var BOOKING_URL =
    "https://outlook.office365.com/owa/calendar/AddLayer@NETORGFT15142014.onmicrosoft.com/bookings/";

  function svg(inner) {
    return (
      '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' +
      'stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
      inner +
      "</svg>"
    );
  }

  var icons = {
    code: svg('<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>'),
    layers: svg(
      '<path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/>' +
        '<path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/>'
    ),
    cloud: svg('<path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/>'),
    users: svg(
      '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>' +
        '<path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>'
    ),
    refreshCw: svg(
      '<path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/>' +
        '<path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5"/>'
    ),
    building: svg(
      '<rect width="16" height="20" x="4" y="2" rx="2" ry="2"/><path d="M9 22v-4h6v4"/>' +
        '<path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/>' +
        '<path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/>'
    ),
    brain: svg(
      '<path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"/>' +
        '<path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"/>' +
        '<path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"/><path d="M17.599 6.5a3 3 0 0 0 .399-1.375"/>' +
        '<path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"/><path d="M3.477 10.896a4 4 0 0 1 .585-.396"/>' +
        '<path d="M19.938 10.5a4 4 0 0 1 .585.396"/><path d="M6 18a4 4 0 0 1-1.967-.516"/><path d="M19.967 17.484A4 4 0 0 1 18 18"/>'
    ),
    microscope: svg(
      '<path d="M6 18h8"/><path d="M3 22h18"/><path d="M14 22a7 7 0 1 0 0-14h-1"/>' +
        '<path d="M9 14h2"/><path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z"/><path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3"/>'
    ),
    database: svg(
      '<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/>'
    ),
    shield: svg(
      '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>'
    ),
    monitor: svg(
      '<rect width="20" height="14" x="2" y="3" rx="2"/><line x1="8" x2="16" y1="21" y2="21"/><line x1="12" x2="12" y1="17" y2="21"/>'
    ),
    zap: svg(
      '<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/>'
    ),
    target: svg('<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>'),
    lightbulb: svg(
      '<path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/>' +
        '<path d="M9 18h6"/><path d="M10 22h4"/>'
    ),
    award: svg(
      '<path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"/><circle cx="12" cy="8" r="6"/>'
    )
  };

  var services = [
    { icon: "code", title: "Software Development", description: "Custom web and mobile applications with the latest technologies and best practices.", features: ["Full-Stack Development", "REST APIs", "Mobile Applications"] },
    { icon: "layers", title: "Systems Architecture", description: "We design scalable and robust architectures that grow with your business.", features: ["Microservices", "Cloud Architecture", "DevOps"] },
    { icon: "cloud", title: "Cloud Solutions", description: "From migration to optimization, we ensure seamless and scalable cloud integration for your business.", features: ["Cloud Migration", "AWS & Azure", "Infrastructure Optimization"] },
    { icon: "users", title: "Consulting", description: "Build the right platform to outpace competition and scale confidently.", features: ["Digital Strategy", "Technology Assessment", "Business Growth"] },
    { icon: "refreshCw", title: "Tech Refresh", description: "Build the right platform to outpace competition and scale confidently.", features: ["Legacy Modernization", "Technology Upgrade", "System Migration"] },
    { icon: "building", title: "Tech Hub", description: "We not only craft bespoke applications for clients but also pioneer the development of innovative solutions.", features: ["Innovation Lab", "Custom Solutions", "R&D Services"] },
    { icon: "brain", title: "Artificial Intelligence", description: "Leverage AI to transform your business processes and unlock new opportunities for growth.", features: ["AI Strategy & Consulting", "Natural Language Processing", "Computer Vision"] },
    { icon: "microscope", title: "Machine Learning", description: "Implement intelligent systems that learn and adapt to improve your business outcomes.", features: ["Predictive Analytics", "Data Science", "Model Development & Deployment"] },
    { icon: "database", title: "Data Management", description: "Complete solutions for handling, analyzing and visualizing enterprise data.", features: ["Big Data", "Analytics", "Business Intelligence"] },
    { icon: "shield", title: "Cybersecurity", description: "We protect your IT infrastructure with cutting-edge security solutions.", features: ["Security Audits", "Penetration Testing", "Compliance"] },
    { icon: "monitor", title: "IT Consulting", description: "Strategic advisory to optimize your technological infrastructure.", features: ["Digital Transformation", "IT Strategy", "Process Optimization"] },
    { icon: "zap", title: "Automation", description: "We automate processes to increase efficiency and reduce operational costs.", features: ["RPA", "CI/CD", "Infrastructure as Code"] }
  ];

  var values = [
    { icon: "target", title: "Results-Focused", description: "Every project has clear objectives and defined success metrics." },
    { icon: "lightbulb", title: "Constant Innovation", description: "We adopt the latest technologies to keep you at the forefront." },
    { icon: "users", title: "Collaborative Work", description: "We work side by side with you at every stage of the project." },
    { icon: "award", title: "Quality Guaranteed", description: "Enterprise-grade quality standards in every line of code." }
  ];

  function renderServices() {
    var grid = document.getElementById("services-grid");
    if (!grid) return;
    grid.innerHTML = services
      .map(function (s) {
        var features = s.features
          .map(function (f) {
            return "<li>• " + f + "</li>";
          })
          .join("");
        return (
          '<div class="service-card">' +
          '<div class="service-icon">' + icons[s.icon] + "</div>" +
          "<h3>" + s.title + "</h3>" +
          "<p>" + s.description + "</p>" +
          '<ul class="service-features">' + features + "</ul>" +
          "</div>"
        );
      })
      .join("");
  }

  function renderValues() {
    var grid = document.getElementById("values-grid");
    if (!grid) return;
    grid.innerHTML = values
      .map(function (v) {
        return (
          '<div class="value-item">' +
          '<div class="value-head">' +
          '<div class="value-icon">' + icons[v.icon] + "</div>" +
          "<h4>" + v.title + "</h4>" +
          "</div>" +
          "<p>" + v.description + "</p>" +
          "</div>"
        );
      })
      .join("");
  }

  function initMobileMenu() {
    var toggle = document.getElementById("menu-toggle");
    var panel = document.getElementById("nav-mobile");
    if (!toggle || !panel) return;

    var iconMenu = toggle.querySelector(".icon-menu");
    var iconX = toggle.querySelector(".icon-x");

    toggle.addEventListener("click", function () {
      var isOpen = panel.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(isOpen));
      iconMenu.hidden = isOpen;
      iconX.hidden = !isOpen;
    });
  }

  function initScrollButtons() {
    document.querySelectorAll("[data-scroll]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var target = document.getElementById(btn.getAttribute("data-scroll"));
        if (target) target.scrollIntoView({ behavior: "smooth" });
      });
    });
  }

  function initExternalButtons() {
    document.querySelectorAll('[data-external="booking"]').forEach(function (btn) {
      btn.addEventListener("click", function () {
        window.open(BOOKING_URL, "_blank");
      });
    });
  }

  function initContactForm() {
    var form = document.getElementById("contact-form");
    if (!form) return;

    form.addEventListener("submit", function (e) {
      e.preventDefault();

      var name = form.name.value;
      var email = form.email.value;
      var company = form.company.value;
      var message = form.message.value;

      var subject = "New Consultation Request from " + name;
      var body =
        "Name: " + name + "\n" +
        "Email: " + email + "\n" +
        "Company: " + company + "\n\n" +
        "Message:\n" + message;

      window.location.href =
        "mailto:contact@addlayer.io?subject=" +
        encodeURIComponent(subject) +
        "&body=" +
        encodeURIComponent(body);
    });
  }

  renderServices();
  renderValues();
  initMobileMenu();
  initScrollButtons();
  initExternalButtons();
  initContactForm();
})();
