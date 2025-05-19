export function createElement(tag, classNames = [], attributes = {}) {
  const el = document.createElement(tag);
  classNames.forEach((cls) => el.classList.add(cls));
  Object.entries(attributes).forEach(([key, value]) => {
    el.setAttribute(key, value);
  });
  return el;
}

export function clearElement(el) {
  while (el.firstChild) {
    el.removeChild(el.firstChild);
  }
}

export function appendChildren(parent, children) {
  children.forEach((child) => parent.appendChild(child));
}

export function createButton(text, onClick, classNames = []) {
  const btn = createElement("button", classNames);
  btn.textContent = text;
  btn.addEventListener("click", onClick);
  return btn;
}

export function selectElement(selector, parent = document) {
  const el = parent.querySelector(selector);
  if (!el) {
    console.warn(`Element not found: ${selector}`);
  }
  return el;
}

export function selectElements(selector, parent = document) {
  return Array.from(parent.querySelectorAll(selector));
}

export function addClasses(el, classNames = []) {
  if (!Array.isArray(classNames)) {
    throw new Error("addClasses expects an array of class names");
  }
  el.classList.add(...classNames);
}
