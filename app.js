"use strict";

const list = document.querySelector("#release-list");
const search = document.querySelector("#search");
const component = document.querySelector("#component");
const more = document.querySelector("#load-more");
const count = document.querySelector("#result-count");
let releases = [];
let limit = 8;
let archiveReady = false;

function node(tag, text, className) {
  const element = document.createElement(tag);
  if (text) element.textContent = text;
  if (className) element.className = className;
  return element;
}

function date(value) {
  return new Date(value + "T12:00:00Z").toLocaleDateString("en-US", {
    month: "short", day: "numeric", year: "numeric", timeZone: "UTC"
  });
}

function render() {
  if (!archiveReady) return;
  const query = search.value.toLowerCase().trim();
  const filtered = releases.filter(release =>
    (component.value === "all" || release.component === component.value) &&
    [release.version, release.title, release.summary, release.component]
      .join(" ").toLowerCase().includes(query)
  );
  list.replaceChildren();
  filtered.slice(0, limit).forEach(release => {
    const article = node("article", null, "release-row");
    const meta = node("div");
    const time = node("time", date(release.date));
    time.dateTime = release.date;
    meta.append(node("strong", release.version, "release-version"), time,
      node("p", release.component, "release-component"));
    const body = node("div");
    body.append(node("h4", release.title), node("p", release.summary));
    if (release.validation) {
      body.append(node("p", release.validation, "release-validation"));
    }
    article.append(meta, body);
    list.append(article);
  });
  count.textContent = filtered.length
    ? `Showing ${Math.min(limit, filtered.length)} of ${filtered.length} releases`
    : "No releases match. Try another search.";
  more.hidden = limit >= filtered.length;
}

function resetArchive() {
  limit = 8;
  render();
}
search.addEventListener("input", resetArchive);
component.addEventListener("change", resetArchive);
more.addEventListener("click", () => { limit += 12; render(); });

fetch("releases.json?v=b01e872e0f0c")
  .then(response => {
    if (!response.ok) throw new Error("Release notes unavailable");
    return response.json();
  })
  .then(data => {
    releases = data;
    archiveReady = true;
    document.querySelector("#release-total").textContent = data.length;
    render();
  })
  .catch(() => {
    count.textContent = "Release archive could not load. ";
    const link = node("a", "Read the release notes →");
    link.href = "CHANGELOG.md";
    count.append(link);
    more.hidden = true;
  });

fetch("updates.json?v=687c2fd40ec7")
  .then(response => {
    if (!response.ok) throw new Error("Updates unavailable");
    return response.json();
  })
  .then(updates => {
    const target = document.querySelector("#updates-list");
    updates.forEach(update => {
      const article = node("article", null, "update");
      const meta = node("div", null, "update-meta");
      const time = node("time", date(update.date));
      time.dateTime = update.date;
      meta.append(node("span", update.tag), time);
      article.append(meta, node("h3", update.title), node("p", update.text));
      target.append(article);
    });
  })
  .catch(() => {
    const link = node("a", "Read development updates →");
    link.href = "UPDATES.md";
    document.querySelector("#updates-list").append(link);
  });
