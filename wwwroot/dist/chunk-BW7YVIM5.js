// node_modules/.pnpm/@magnit-ce+code-tests@0.0.2/node_modules/@magnit-ce/code-tests/dist/code-tests.js
var code_tests_default = `:host
{
    /*** gray ***/
    --uchu-light-gray-raw: 95.57% 0.003 286.35;
    --uchu-light-gray: oklch(var(--uchu-light-gray-raw));

    --uchu-gray-raw: 84.68% 0.002 197.12;
    --uchu-gray: oklch(var(--uchu-gray-raw));

    --uchu-dark-gray-raw: 63.12% 0.004 219.55;
    --uchu-dark-gray: oklch(var(--uchu-dark-gray-raw));

    /*** red ***/
    --uchu-light-red-raw: 88.98% 0.052 3.28;
    --uchu-light-red: oklch(var(--uchu-light-red-raw));

    --uchu-dark-red-raw: 45.8% 0.177 17.7;
    --uchu-dark-red: oklch(var(--uchu-dark-red-raw));

    /*** purple ***/
    --uchu-light-purple-raw: 89.1% 0.046 305.24;
    --uchu-light-purple: oklch(var(--uchu-light-purple-raw));

    --uchu-dark-purple-raw: 39.46% 0.164 298.29;
    --uchu-dark-purple: oklch(var(--uchu-dark-purple-raw));

    /*** blue ***/
    --uchu-light-blue-raw: 89.66% 0.046 260.67;
    --uchu-light-blue: oklch(var(--uchu-light-blue-raw));

    --uchu-blue-raw: 62.39% 0.181 258.33;
    --uchu-blue: oklch(var(--uchu-blue-raw));

    --uchu-dark-blue-raw: 43.48% 0.17 260.2;
    --uchu-dark-blue: oklch(var(--uchu-dark-blue-raw));

    /*** green ***/
    --uchu-light-green-raw: 93.96% 0.05 148.74;
    --uchu-light-green: oklch(var(--uchu-light-green-raw));

    --uchu-green-raw: 79.33% 0.179 145.62;
    --uchu-green: oklch(var(--uchu-green-raw));

    --uchu-dark-green-raw: 58.83% 0.158 145.05;
    --uchu-dark-green: oklch(var(--uchu-dark-green-raw));

    /*** general ***/
    --uchu-yang-raw: 99.4% 0 0;
    --uchu-yang: oklch(var(--uchu-yang-raw));

    --uchu-yin-raw: 14.38% 0.007 256.88;
    --uchu-yin: oklch(var(--uchu-yin-raw));

    /*** code-tests vars ***/

    --spacer: calc(1em - 7px);
    --small-spacer: calc(var(--spacer) / 2);

    --color-success: var(--uchu-green);
    --color-fail: var(--uchu-red);
    --color-process: var(--uchu-blue);

    --text-surface: var(--uchu-yin);
    --text-result: var(--uchu-yang); /* --uchu-yang: #fdfdfd; */
    --text-collapse-icon: var(--uchu-dark-gray);  /* --uchu-dark-gray: #878a8b; */
    --text-hook-summary: var(--uchu-dark-purple);
    --text-success: var(--uchu-dark-green); /* --uchu-dark-green: #2e943a; */
    --text-fail: var(--uchu-dark-red); /* --uchu-dark-red: #a30d30; */
    --text-process: var(--uchu-dark-blue); /* --uchu-dark-blue: #0949ac; */
    --text-button: var(--uchu-yang); /* --uchu-dark-blue: #0949ac; */
    --text-placeholder: var(--uchu-dark-gray);

    --surface-0: var(--uchu-light-gray);
    --surface-test: var(--uchu-yang);
    --surface-test-summary: var(--uchu-gray);
    --surface-hook-summary: var(--uchu-light-purple);
    --surface-success: var(--uchu-light-green);
    --surface-fail: var(--uchu-light-red);
    --surface-process: var(--uchu-light-blue);
    --surface-button: var(--uchu-blue); /* --uchu-blue: #3984f2 */
    --surface-button-hover: var(--uchu-light-blue);
    --surface-button-active: var(--uchu-dark-blue);

    --border-test: solid 1px var(--uchu-dark-gray);
    --border-hook: solid 1px var(--uchu-dark-purple);
    --border-success: solid 1px var(--uchu-dark-green);
    --border-fail: solid 1px var(--uchu-dark-red);
    --border-process: solid 1px var(--uchu-dark-blue);
    --border-button: solid 1px var(--uchu-blue);

    --info-icon: url('data:image/svg+xml,%3Csvg%20viewBox%3D%220%200%2022.812714%2022.814663%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Asvg%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20style%3D%22fill%3Atransparent%3Bstroke%3Atransparent%3Bstroke-width%3A0.999999%3Bstroke-linejoin%3Around%3Bstroke-miterlimit%3A6.3%3Bstroke-dasharray%3Anone%3Bstroke-dashoffset%3A29.2913%3Bstroke-opacity%3A1%22%20d%3D%22M%2022.295505%2C11.407332%20A%2010.889144%2C10.889144%200%200%201%2011.406424%2C22.296479%2010.889144%2C10.889144%200%200%201%200.51720881%2C11.407332%2010.889144%2C10.889144%200%200%201%2011.406424%2C0.51818382%2010.889144%2C10.889144%200%200%201%2022.295505%2C11.407332%20Z%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22m%2013.945668%2C4.3053761%20c%200.150778%2C-0.96462%20-0.30687%2C-1.43709%20-1.36997%2C-1.43709%20-1.063%2C0%20-1.668452%2C0.47247%20-1.81923%2C1.43709%20-0.150779%2C0.96462%200.306971%2C1.43708%201.369971%2C1.43708%201.004%2C0%201.66845%2C-0.47246%201.819229%2C-1.43708%20z%20M%2011.693889%2C17.829726%2013.373994%2C7.0811161%20h%20-2.9333%20L%208.7605887%2C17.829726%20Z%22%20style%3D%22font-size%3A19.6861px%3Bfont-family%3APassageway%3B-inkscape-font-specification%3APassageway%3Bfill%3A%23a30d30%3Bstroke-width%3A2.5%3Bstroke-linejoin%3Around%3Bstroke-miterlimit%3A6.3%3Bstroke-dashoffset%3A29.2913%22%20aria-label%3D%22i%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E');

    --font-text: system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";

    /*** styles ***/

    color-scheme: light dark;
    display: grid;
    gap: var(--spacer);
    background-color: var(--surface-0);
    color: var(--text-surface); 
    padding: var(--small-spacer);
    font-family: var(--font-text);
}
@media (prefers-color-scheme: dark) 
{
    :host
    {
        --text-surface: var(--uchu-yang);
        --text-result: var(--uchu-yang);

        --surface-0: var(--uchu-yin);
        --surface-test: oklch(25.11% 0.006 258.36);
        --surface-test-summary: oklch(35.02% 0.005 236.66);
    }
}

#header
{
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
    gap: var(--spacer);
    border-bottom: solid 2px;
    padding: var(--spacer);
    margin-bottom: var(--spacer);
    user-select: none;
}

#title
{
    font-weight: bold;
    font-size: 16px;
}

.hook
{
    display: none;
}
:host(.has-before-hook) #before-all-details
,:host(.has-before-hook) #after-all-details
{
    display: initial;
}

#tests
{
    margin: 0;
    padding: 0;
    list-style: none;
    display: grid;
    grid-auto-rows: max-content;
    gap: var(--spacer);
}

summary
{
    display: grid;
    gap: var(--spacer);
    padding: var(--small-spacer) var(--spacer);
    align-items: center;
}
summary::before
{
    content: '';
    width: 16px;
    height: 16px;
    background: url("data:image/svg+xml,%3Csvg%20viewBox%3D'0%200%2020%2020'%20width%3D'14px'%20height%3D'14px'%20fill%3D'none'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%3E%3Cg%20stroke-width%3D'0'%3E%3C%2Fg%3E%3Cg%20stroke-linecap%3D'round'%20stroke-linejoin%3D'round'%3E%3C%2Fg%3E%3Cg%3E%3Cpath%20d%3D'M8.72798%2015.795L3.72798%207.795C3.10356%206.79593%203.82183%205.5%204.99998%205.5L15%205.5C16.1781%205.5%2016.8964%206.79593%2016.272%207.795L11.272%2015.795C10.6845%2016.735%209.31549%2016.735%208.72798%2015.795Z'%20fill%3D'%23878a8b'%3E%3C%2Fpath%3E%3C%2Fg%3E%3C%2Fsvg%3E");
    transform: rotate(-90deg);
    transition: transform ease-out 200ms;
}
[open] > summary::before
{
    transform: rotate(0);
    /* background: var(--surface-test-summary); */
}

#before-all-summary
,#after-all-summary
{
    background: var(--surface-hook-summary);
    color: var(--text-hook-summary);
    grid-template-columns: auto auto 1fr;
}

.result-icon
{
    --size: 24px;
    width: var(--size);
    height: var(--size);

    display: flex;
    align-items: center;
    justify-content: center;

    border: solid 1px currentColor;
    border-radius: 50%;
}
.result-icon::before
{
    content: '\u22EF';
}

.hook
{
    border: var(--border-hook);
}

.test
,#before-all-details
,#after-all-details
{
    border: var(--border-test);
    border-radius: 2px;
}

.test summary
{
    background: var(--surface-test-summary);
    grid-template-columns: auto auto 1fr auto;
}

.test.running .result-icon
,.hook.running .result-icon
{
    border: var(--border-process);
    background: var(--surface-process);
}
.test.success .result-icon
,.hook.success .result-icon
{
    border: var(--border-success);
    background: var(--surface-success)
    url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"><path fill="%232e943a" d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/></svg>');
    background-repeat: no-repeat;
    background-position: center;
}
.test.fail .result-icon
,.hook.fail .result-icon
{
    border: var(--border-fail);
    background: var(--surface-fail)
    var(--info-icon);
    background-repeat: no-repeat;
    background-position: center;
    transform: rotate(175deg);
}
.test:is(.success,.fail) .result-icon::before
,.hook:is(.success,.fail) .result-icon::before
{
    display: none;
}
.test:is(.running) .result-icon::before
,.hook:is(.running) .result-icon::before
{
    content: '';
    --size: 18px;
    --color: var(--text-process);
    --animation-timing-function: linear;
    --animation-duration: 2s;
    width: var(--size);
    height: var(--size);
    mask-image: radial-gradient(circle at 50% 50%, transparent calc(var(--size) / 3), black calc(var(--size) / 3));
    background-image: conic-gradient(transparent, transparent 135deg, var(--color));
    border-radius: 50%;
    animation: var(--animation-timing-function) var(--animation-duration) infinite spin;
    margin: 2px;
}

.description
{
    user-select: none;
}

.test .result
,.hook .result
{
    background: var(--surface-test);
    border: var(--border-test);
    border-radius: 2px;
    margin: var(--small-spacer);
}

.test .result:empty::before
,.results:empty::before
{
    content: "[Test has not been run]";
    font-style: italic;
    font-size: 11px;
    color: var(--text-placeholder);
}
.results:empty::before
{
    content: "[Tests have not been run]";
}
.before-result:empty
,.after-result:empty
{
    display: none;
}

.test .result
,.results
,.before-result
,.after-result
{
    padding: var(--small-spacer) var(--spacer);
}

pre
{
    margin: var(--small-spacer);
}

.run
{
    width: auto;
    min-width: auto;
    max-width: auto;
    appearance: none;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    padding: 3px 10px 3px 7px;
    font-size: 11px;
    gap: var(--small-spacer);
    border: var(--border-button);
    background: var(--surface-button);
    border-radius: 4px;
    text-shadow: 1px 1px rgb(0 0 0 / .2);
    color: var(--text-button);
}
.run:hover
{
    background: oklch(68.39% 0.181 258.33);
}
.run:active
{
    background: oklch(50.39% 0.181 258.33);
}
.run::before
{
    content: '';
    display: block;
    width: 16px;
    height: 16px;
    transform: rotate(-90deg);
    background: 
    url("data:image/svg+xml,%3Csvg%20viewBox%3D'0%200%2020%2020'%20width%3D'16px'%20height%3D'16px'%20fill%3D'none'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%3E%3Cg%20stroke-width%3D'0'%3E%3C%2Fg%3E%3Cg%20stroke-linecap%3D'round'%20stroke-linejoin%3D'round'%3E%3C%2Fg%3E%3Cg%3E%3Cpath%20d%3D'M8.72798%2015.795L3.72798%207.795C3.10356%206.79593%203.82183%205.5%204.99998%205.5L15%205.5C16.1781%205.5%2016.8964%206.79593%2016.272%207.795L11.272%2015.795C10.6845%2016.735%209.31549%2016.735%208.72798%2015.795Z'%20fill%3D'%23fdfdfd'%3E%3C%2Fpath%3E%3C%2Fg%3E%3C%2Fsvg%3E");
}



@keyframes spin
{
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}`;
var code_tests_default2 = '<slot name="header">\n    <header id="header">\n        <span id="title"><slot name="title"><span id="title-text">Tests</span></slot></span>\n        <slot name="play-button">\n            <button type="button" class="run" data-all>\n                <slot name="play-button-label">\n                    <span id="play-button-label" class="button-label label icon">Run Tests</span>\n                </slot>\n            </button>\n        </slot>\n        <slot name="details"></slot>\n    </header>\n</slot>\n<details id="before-all-details" class="hook">\n    <summary id="before-all-summary">\n        <span id="before-all-result-icon" class="result-icon"></span>\n        <span id="before-all-description" class="description">Results from Before All Hook</span>\n    </summary>\n    <div id="before-all-results" class="results"></div>\n</details>\n<ul id="tests"></ul>\n<details id="after-all-details" class="hook">\n    <summary id="after-all-summary">\n        <span id="after-all-result-icon" class="result-icon"></span>\n        <span id="after-all-description" class="description">Results from After All Hook</span>\n    </summary>\n    <div id="after-all-results" class="results"></div>\n</details>';
var TestPromise = class extends Promise {
  async toBeDefined(valueName) {
    const target = await this;
    if (target == void 0) {
      throw new Error(`${valueName != null ? valueName : "Value"} is undefined`);
    }
  }
  async toBe(value, exact = false) {
    const target = await this;
    const result = exact == true ? target === value : target == value;
    if (result == false) {
      throw new Error(`  Value is not equal.
  Expected: ${value}
  Result: ${target}`);
    }
  }
  async toContainText(value) {
    const target = await this;
  }
  async toHaveAttribute(value) {
    const target = await this;
    if (!(target instanceof HTMLElement)) {
      throw new Error("Unable to check for attribute on non-HTMLElement target");
    }
    if (target.getAttribute(value)) {
      throw new Error("Taret does not have attribute");
    }
  }
};
var BEFOREALL = Symbol("beforeAll");
var BEFOREEACH = Symbol("beforeEach");
var AFTERALL = Symbol("afterAll");
var AFTEREACH = Symbol("afterEach");
var CodeTests = class {
  static timeoutMS = 500;
  static #expectInterval;
  static #expectPromise;
  static expect(value) {
    const promise = new TestPromise(async (resolve, reject) => {
      if (value instanceof Promise) {
        const result = await value;
        resolve(result);
        return;
      }
      resolve(value);
    });
    return promise;
  }
  static expectSync(value) {
    const promise = new TestPromise(async (resolve, reject) => {
      if (value instanceof Promise) {
        const result = await value;
        resolve(result);
        return;
      }
      resolve(value);
    });
    return promise;
  }
  static expectBefore(value) {
    const promise = new TestPromise(async (resolve, reject) => {
      if (value instanceof Promise) {
        const result = await value;
        resolve(result);
        return;
      }
      resolve(value);
    });
    return promise;
  }
};
function expect(value) {
  return CodeTests.expect(value);
}
var DEFAULT_ELEMENT_SELECTOR = ":not(slot,defs,g,rect,path,circle,ellipse,line,polygon,text,tspan,use,svg image,svg title,desc,template,template *)";
function assignClassAndIdToPart(shadowRoot) {
  const identifiedElements = [...shadowRoot.querySelectorAll(`${DEFAULT_ELEMENT_SELECTOR}[id]`)];
  for (let i = 0; i < identifiedElements.length; i++) {
    identifiedElements[i].part.add(identifiedElements[i].id);
  }
  const classedElements = [...shadowRoot.querySelectorAll(`${DEFAULT_ELEMENT_SELECTOR}[class]`)];
  for (let i = 0; i < classedElements.length; i++) {
    classedElements[i].part.add(...classedElements[i].classList);
  }
}
var NOTESTDEFINED = Symbol("No Test Defined");
var COMPONENT_STYLESHEET = new CSSStyleSheet();
COMPONENT_STYLESHEET.replaceSync(code_tests_default);
var COMPONENT_TAG_NAME = "code-tests";
var CodeTestsElement = class extends HTMLElement {
  componentParts = /* @__PURE__ */ new Map();
  getElement(id) {
    if (this.componentParts.get(id) == null) {
      const part = this.findElement(id);
      if (part != null) {
        this.componentParts.set(id, part);
      }
    }
    return this.componentParts.get(id);
  }
  findElement(id) {
    return this.shadowRoot.getElementById(id);
  }
  #hooks = /* @__PURE__ */ new Map();
  #hookIds = {
    [BEFOREALL]: generateId(),
    [BEFOREEACH]: generateId(),
    [AFTEREACH]: generateId(),
    [AFTERALL]: generateId()
  };
  #continueRunningTests = true;
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = code_tests_default2;
    this.shadowRoot.adoptedStyleSheets.push(COMPONENT_STYLESHEET);
    this.#boundClickHandler = this.#onClick.bind(this);
  }
  connectedCallback() {
    this.addEventListener("click", this.#boundClickHandler);
    const testsPath = this.getAttribute("src") ?? this.getAttribute("test") ?? this.getAttribute("tests") ?? this.getAttribute("run") ?? this.getAttribute("path");
    if (testsPath == null) {
      return;
    }
    this.loadTests(testsPath);
    assignClassAndIdToPart(this.shadowRoot);
  }
  disconnectedCallback() {
    this.removeEventListener("click", this.#boundClickHandler);
  }
  #boundClickHandler;
  #onClick(event) {
    const runButton = event.composedPath().find((item) => item instanceof HTMLButtonElement && item.classList.contains("run"));
    if (runButton == null) {
      return;
    }
    const parentListItem = runButton.closest("li");
    if (parentListItem == null) {
      const isRunAll = runButton.hasAttribute("data-all");
      if (isRunAll == true) {
        this.runTests();
      }
      return;
    }
    const testId = parentListItem.dataset.testId;
    if (testId == null) {
      return;
    }
    const test = this.#tests.get(testId);
    if (test == null) {
      return;
    }
    this.#runTest(testId, test);
  }
  async loadTests(path) {
    this.classList.remove("has-before-hook");
    this.classList.remove("has-after-hook");
    try {
      const lastSlashIndexInCurrentPath = window.location.href.lastIndexOf("/");
      const currentPathHasExtension = window.location.href.substring(lastSlashIndexInCurrentPath).indexOf(".") != -1;
      const currentPath = currentPathHasExtension == true ? window.location.href.substring(0, lastSlashIndexInCurrentPath + 1) : window.location.href;
      const moduleDirectory = currentPath + path.substring(0, path.lastIndexOf("/") + 1);
      const modulePath = currentPath + path;
      let moduleContent = await (await fetch(modulePath)).text();
      moduleContent = moduleContent.replaceAll(/['"`](((\.\/)|(\.\.\/))+(.*))['"`]/g, `'${moduleDirectory}$1'`);
      const moduleFile = new File([moduleContent], path.substring(path.lastIndexOf("/")), { type: "text/javascript" });
      const moduleURL = URL.createObjectURL(moduleFile);
      const module = await import(moduleURL);
      const tests = module.tests ?? module.default;
      if (tests == void 0) {
        throw new Error(`Unable to find tests definition in file at path: ${path}`);
      }
      const beforeAll = tests[BEFOREALL];
      if (beforeAll != null) {
        const hookMap = this.#hooks.get(BEFOREALL);
        if (hookMap == null) {
          const map = /* @__PURE__ */ new Map();
          map.set(beforeAll, /* @__PURE__ */ new Set());
          this.#hooks.set(BEFOREALL, map);
        }
        this.classList.add("has-before-hook");
      }
      const beforeEach = tests[BEFOREEACH];
      if (beforeEach != null) {
        const hookMap = this.#hooks.get(BEFOREEACH);
        if (hookMap == null) {
          const map = /* @__PURE__ */ new Map();
          map.set(beforeEach, /* @__PURE__ */ new Set());
          this.#hooks.set(BEFOREEACH, map);
        }
      }
      const afterAll = tests[AFTERALL];
      if (afterAll != null) {
        const hookMap = this.#hooks.get(AFTERALL);
        if (hookMap == null) {
          const map = /* @__PURE__ */ new Map();
          map.set(afterAll, /* @__PURE__ */ new Set());
          this.#hooks.set(AFTERALL, map);
        }
        this.classList.add("has-after-hook");
      }
      const afterEach = tests[AFTEREACH];
      if (afterEach != null) {
        const hookMap = this.#hooks.get(AFTEREACH);
        if (hookMap == null) {
          const map = /* @__PURE__ */ new Map();
          map.set(afterEach, /* @__PURE__ */ new Set());
          this.#hooks.set(AFTEREACH, map);
        }
      }
      for (const [description, test] of Object.entries(tests)) {
        const id = this.#addTest(description, test);
        if (beforeAll != null) {
          const hookMap = this.#hooks.get(BEFOREALL);
          if (hookMap != null) {
            const testIds = hookMap.get(beforeAll);
            if (testIds != null) {
              testIds.add(id);
            }
          }
        }
        if (beforeEach != null) {
          const hookMap = this.#hooks.get(BEFOREEACH);
          if (hookMap != null) {
            const testIds = hookMap.get(beforeEach);
            if (testIds != null) {
              testIds.add(id);
            }
          }
        }
        if (afterAll != null) {
          const hookMap = this.#hooks.get(AFTERALL);
          if (hookMap != null) {
            const testIds = hookMap.get(afterAll);
            if (testIds != null) {
              testIds.add(id);
            }
          }
        }
        if (afterEach != null) {
          const hookMap = this.#hooks.get(AFTEREACH);
          if (hookMap != null) {
            const testIds = hookMap.get(afterEach);
            if (testIds != null) {
              testIds.add(id);
            }
          }
        }
      }
    } catch (error) {
      this.#addProcessError("An error occurred while loading the tasks:", error);
    }
  }
  async runTests() {
    this.#continueRunningTests = true;
    this.classList.add("running");
    this.toggleAttribute("success", false);
    this.#clearTestStatuses();
    const inOrder = this.hasAttribute("in-order");
    const beforeHooks = this.#hooks.get(BEFOREALL);
    if (beforeHooks != null) {
      let hookResult;
      try {
        const beforeAllHookElement = this.getElement(`before-all-details`);
        beforeAllHookElement.classList.add("running");
        beforeAllHookElement.part.add("running");
        for (const [hook, ids] of beforeHooks) {
          hookResult = await hook();
          this.#handleHookResult(hookResult, true, "before");
        }
        beforeAllHookElement.part.remove("running");
        beforeAllHookElement.classList.remove("running");
      } catch (error) {
        this.#handleHookResult(hookResult, false, "before", error);
        console.error(error);
        this.#continueRunningTests = false;
        return;
      }
    }
    if (inOrder == false) {
      const promises = [];
      for (const [id, test] of this.#tests) {
        promises.push(this.#runTest(id, test));
      }
      await Promise.all(promises);
    } else {
      for (const [id, test] of this.#tests) {
        if (this.#continueRunningTests == false) {
          break;
        }
        await this.#runTest(id, test);
      }
    }
    if (this.#continueRunningTests == false) {
      return;
    }
    const afterHooks = this.#hooks.get(AFTERALL);
    if (afterHooks != null) {
      let hookResult;
      try {
        const afterAllHookElement = this.getElement(`after-all-details`);
        afterAllHookElement.classList.add("running");
        afterAllHookElement.part.add("running");
        for (const [hook, ids] of afterHooks) {
          hookResult = await hook();
          this.#handleHookResult(hookResult, true, "after");
        }
        afterAllHookElement.part.remove("running");
        afterAllHookElement.classList.remove("running");
      } catch (error) {
        this.#handleHookResult(hookResult, false, "after", error);
        console.error(error);
        this.#continueRunningTests = false;
        return;
      }
    }
    const failedTests = this.shadowRoot.querySelectorAll('[success="false"]');
    this.setAttribute("success", failedTests.length == 0 ? "true" : "false");
    this.classList.remove("running");
    this.part.remove("running");
  }
  #clearTestStatuses() {
    for (const [testId, test] of this.#tests) {
      const testElement = this.getElement("tests").querySelector(`[data-test-id="${testId}"]`);
      if (testElement == null) {
        this.#addProcessError(`Unable to find test element for test: ${testId}`);
        return;
      }
      testElement.toggleAttribute("success", false);
      testElement.classList.remove("success", "fail");
      testElement.part.remove("success", "fail");
    }
    const beforeAllHookElement = this.getElement(`before-all-details`);
    beforeAllHookElement.toggleAttribute("success", false);
    beforeAllHookElement.classList.remove("success", "fail");
    beforeAllHookElement.part.remove("success", "fail");
    const afterAllHookElement = this.getElement(`after-all-details`);
    afterAllHookElement.toggleAttribute("success", false);
    afterAllHookElement.classList.remove("success", "fail");
    afterAllHookElement.part.remove("success", "fail");
  }
  async #runTest(testId, test) {
    const testElement = this.getElement("tests").querySelector(`[data-test-id="${testId}"]`);
    if (testElement == null) {
      this.#addProcessError(`Unable to find test element for test: ${testId}`);
      return;
    }
    testElement.toggleAttribute("success", false);
    testElement.classList.add("running");
    testElement.part.add("running");
    testElement.classList.remove("success", "fail");
    testElement.part.remove("success", "fail");
    const errorMessageElement = testElement.querySelector(".error-message");
    if (errorMessageElement != null) {
      errorMessageElement.textContent = "";
    }
    const detailsElement = testElement.querySelector("details");
    if (detailsElement != null) {
      detailsElement.open = false;
    }
    let beforeResult = NOTESTDEFINED;
    let testResult;
    let afterResult = NOTESTDEFINED;
    let testType;
    try {
      const beforeHooks = this.#hooks.get(BEFOREEACH);
      if (beforeHooks != null) {
        for (const [hook, ids] of beforeHooks) {
          if (ids.has(testId)) {
            beforeResult = await hook();
            break;
          }
        }
      }
      testResult = await test();
      const afterHooks = this.#hooks.get(AFTEREACH);
      if (afterHooks != null) {
        for (const [hook, ids] of afterHooks) {
          if (ids.has(testId)) {
            afterResult = await hook();
            break;
          }
        }
      }
      testType = "before";
      if (beforeResult != NOTESTDEFINED) {
        this.#handleTestResult(testElement, beforeResult, true, void 0, testType);
      }
      testType = void 0;
      this.#handleTestResult(testElement, testResult, true, void 0, testType);
      testType = "after";
      if (afterResult != NOTESTDEFINED) {
        this.#handleTestResult(testElement, afterResult, true, void 0, testType);
      }
    } catch (error) {
      this.#handleTestResult(testElement, testResult, false, error, testType);
      console.error(error);
      this.#continueRunningTests = false;
    } finally {
      testElement?.classList.remove("running");
      testElement?.part.remove("running");
    }
  }
  #handleTestResult(testElement, result, finishedTest, error, beforeOrAfter) {
    if (result instanceof HTMLElement) {
      this.#setTestResult(testElement, result, finishedTest, beforeOrAfter);
    } else if (result == void 0) {
      const trueMessage = beforeOrAfter == void 0 ? "Passed" : "Hook Ran Successfully";
      const defaultResult = this.#createDefaultResult(finishedTest == true ? `${trueMessage}` : `Failed${error != null ? `:
${error.message}` : ""}`, finishedTest, beforeOrAfter);
      this.#setTestResult(testElement, defaultResult, finishedTest, beforeOrAfter);
    } else if (typeof result == "string") {
      const defaultResult = this.#createDefaultResult(`${result}${error == null ? "" : `:
${error.message}`}`, finishedTest, beforeOrAfter);
      this.#setTestResult(testElement, defaultResult, finishedTest, beforeOrAfter);
    } else if (typeof result == "object") {
      const objectResult = result;
      if (objectResult.success != void 0 && objectResult.expected != void 0 && objectResult.value != void 0) {
        const trueMessage = beforeOrAfter == void 0 ? "Passed" : "Success";
        const falseMessage = beforeOrAfter == void 0 ? "Failed" : "Fail";
        const defaultResult = this.#createDefaultResult(
          `${objectResult.success == true ? `${trueMessage}:` : `${falseMessage}:`}
Expected:${objectResult.expected}
Result:${objectResult.value}`,
          objectResult.success,
          beforeOrAfter
        );
        this.#setTestResult(testElement, defaultResult, finishedTest, beforeOrAfter);
      }
    }
    const detailsElement = testElement.querySelector("details");
    if (detailsElement != null) {
      detailsElement.open = true;
    }
  }
  #handleHookResult(result, finishedTest, beforeOrAfter, error) {
    if (result instanceof HTMLElement) {
      this.#setHookResult(result, finishedTest, beforeOrAfter);
    } else {
      let defaultResult;
      if (result == void 0) {
        defaultResult = this.#createDefaultResult(finishedTest == true ? "Hook Ran Successfully" : `Failed${error != null ? `:
${error.message}` : ""}`, finishedTest);
        this.#setHookResult(defaultResult, finishedTest, beforeOrAfter);
      } else if (typeof result == "string") {
        defaultResult = this.#createDefaultResult(`${result}${error == null ? "" : `:
${error.message}`}`, finishedTest);
        this.#setHookResult(defaultResult, finishedTest, beforeOrAfter);
      } else if (typeof result == "object") {
        const objectResult = result;
        if (objectResult.success != void 0 && objectResult.expected != void 0 && objectResult.value != void 0) {
          defaultResult = this.#createDefaultResult(
            `${objectResult.success == true ? "Success:" : "Fail:"}
Expected:${objectResult.expected}
Result:${objectResult.value}`,
            objectResult.success
          );
          this.#setHookResult(defaultResult, finishedTest, beforeOrAfter);
        }
      }
    }
    const detailsElement = this.getElement(`${beforeOrAfter}-all-details`);
    if (detailsElement != null) {
      detailsElement.open = true;
    }
  }
  static create(properties) {
    const element = document.createElement("code-tests");
    console.log(properties);
    return element;
  }
  #tests = /* @__PURE__ */ new Map();
  #addTest(description, test) {
    const testId = generateId();
    this.#tests.set(testId, test);
    const testElement = this.#createTest(testId, description);
    this.getElement("tests").append(testElement);
    return testId;
  }
  #createTest(testId, description) {
    const testElement = document.createElement("li");
    testElement.dataset.testId = testId;
    testElement.classList.add("test");
    testElement.part.add("test");
    const detailsElement = document.createElement("details");
    detailsElement.classList.add("test-details");
    detailsElement.part.add("test-details");
    const summaryElement = document.createElement("summary");
    summaryElement.classList.add("test-summary");
    summaryElement.part.add("test-summary");
    const resultIcon = document.createElement("div");
    resultIcon.classList.add("result-icon");
    resultIcon.part.add("result-icon");
    summaryElement.append(resultIcon);
    const descriptionElement = document.createElement("span");
    descriptionElement.classList.add("description", "test-description");
    descriptionElement.textContent = description;
    summaryElement.append(descriptionElement);
    const runButton = document.createElement("button");
    runButton.classList.add("run", "test-run");
    runButton.part.add("run", "test-run");
    runButton.textContent = "Run Test";
    runButton.title = "Run Test";
    summaryElement.append(runButton);
    const beforeResultElement = document.createElement("div");
    beforeResultElement.classList.add("before-result", "test-before-result");
    beforeResultElement.part.add("before-result", "test-before-result");
    const resultElement = document.createElement("div");
    resultElement.classList.add("result", "test-result");
    resultElement.part.add("result", "test-result");
    const afterResultElement = document.createElement("div");
    afterResultElement.classList.add("after-result", "test-after-result");
    afterResultElement.part.add("after-result", "test-after-result");
    detailsElement.append(summaryElement);
    detailsElement.append(beforeResultElement);
    detailsElement.append(resultElement);
    detailsElement.append(afterResultElement);
    testElement.append(detailsElement);
    return testElement;
  }
  #setTestResult(testElement, valueElement, success, beforeOrAfter) {
    testElement.setAttribute("success", success == true ? "true" : "false");
    testElement.classList.toggle("success", success);
    testElement.part.toggle("success", success);
    testElement.classList.toggle("fail", !success);
    testElement.part.toggle("fail", !success);
    const resultElement = testElement.querySelector(`.${beforeOrAfter == void 0 ? "result" : beforeOrAfter == "before" ? "before-result" : "after-result"}`);
    if (resultElement == null) {
      this.#addProcessError(`Unable to find result element`);
      return;
    }
    resultElement.innerHTML = "";
    resultElement.appendChild(valueElement);
  }
  #createDefaultResult(message, success, beforeOrAfter) {
    const codeElement = document.createElement("code");
    codeElement.classList.add("code");
    codeElement.part.add("code");
    const preElement = document.createElement("pre");
    preElement.textContent = message;
    const className = success == true ? "success-message" : "error-message";
    preElement.classList.add("pre", className);
    preElement.part.add("pre", className);
    codeElement.appendChild(preElement);
    return codeElement;
  }
  #setHookResult(valueElement, success, beforeOrAfter) {
    const detailsElement = this.getElement(`${beforeOrAfter}-all-details`);
    const resultsElement = this.getElement(`${beforeOrAfter}-all-results`);
    detailsElement.setAttribute("success", success == true ? "true" : "false");
    detailsElement.classList.toggle("success", success);
    detailsElement.part.toggle("success", success);
    detailsElement.classList.toggle("fail", !success);
    detailsElement.part.toggle("fail", !success);
    resultsElement.innerHTML = "";
    resultsElement.appendChild(valueElement);
  }
  #addProcessError(message, error) {
    if (error instanceof Error) {
      message += `
${error.message}`;
      console.error(error);
    }
    const errorElement = document.createElement("li");
    errorElement.classList.add("error", "process-error");
    errorElement.part.add("error", "process-error");
    const codeElement = document.createElement("code");
    codeElement.classList.add("code", "process-error-code");
    codeElement.part.add("code", "process-error-code");
    const preElement = document.createElement("pre");
    preElement.classList.add("pre", "process-error-pre");
    preElement.part.add("pre", "process-error-pre");
    preElement.textContent = message;
    codeElement.append(preElement);
    errorElement.append(codeElement);
    this.getElement("tests").append(errorElement);
  }
  #updateListType(type) {
    if (type == "ordered") {
      const list = this.shadowRoot.querySelector("ul");
      if (list == null) {
        return;
      }
      const items = this.shadowRoot?.querySelectorAll("li");
      const newList = document.createElement("ol");
      if (items != null) {
        newList.append(...items);
      }
      newList.id = "tests";
      list.replaceWith(newList);
    } else {
      const list = this.shadowRoot.querySelector("ol");
      if (list == null) {
        return;
      }
      const items = this.shadowRoot?.querySelectorAll("li");
      const newList = document.createElement("ul");
      newList.id = "tests";
      if (items != null) {
        newList.append(...items);
      }
      list.replaceWith(newList);
    }
  }
  static observedAttributes = ["in-order"];
  attributeChangedCallback(attributeName, oldValue, newValue) {
    if (attributeName == "in-order") {
      if (newValue == void 0) {
        this.#updateListType("unordered");
      } else {
        this.#updateListType("ordered");
      }
    }
  }
};
function generateId() {
  const rnd = new Uint8Array(20);
  crypto.getRandomValues(rnd);
  const b64 = [].slice.apply(rnd).map(function(ch) {
    return String.fromCharCode(ch);
  }).join("");
  const secret = btoa(b64).replace(/\//g, "_").replace(/\+/g, "-").replace(/=/g, "");
  return secret;
}
if (customElements.get(COMPONENT_TAG_NAME) == null) {
  customElements.define(COMPONENT_TAG_NAME, CodeTestsElement);
}

export {
  expect,
  CodeTestsElement
};
