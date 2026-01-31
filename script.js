'use strict';


//Zadanie 1

console.log('Skrypt załadowany!');

/*zmienne i typy danych */
const firstName = 'Przemysław';              // String
const age = 21;                              // Number (zmień na swój wiek)
const isStudent = true;                      // Boolean
const favLangs = ['HTML', 'CSS', 'JavaScript']; // Array
const profile = {                            // Object
  imie: firstName,
  wiek: age,
  miasto: '—'
};
const nothingHere = null;                    // null
let notAssigned;                             // undefined

console.group('Zadanie 1 – typy danych (typeof)');
[
  ['firstName', firstName],
  ['age', age],
  ['isStudent', isStudent],
  ['favLangs', favLangs],
  ['profile', profile],
  ['nothingHere', nothingHere],
  ['notAssigned', notAssigned]
].forEach(([label, value]) => console.log(label, '=>', value, '| typeof:', typeof value));
console.log("Ciekawostka: typeof null === 'object' (znany bug w JS).");
console.groupEnd();

/* operatory */
console.group('Zadanie 1 – operatory');
const a = 12;
const b = 5;
// Arytmetyka
console.log('a + b =', a + b);
console.log('a - b =', a - b);
console.log('a * b =', a * b);
console.log('a / b =', a / b);
console.log('a % b =', a % b);
console.log('a ** b =', a ** b);

// Porównania == vs ===
console.log("'5' == 5  ->", '5' == 5, '(porównanie luźne, z koercją)'); 
console.log("'5' === 5 ->", '5' === 5, '(porównanie ścisłe, bez koercji)');

// Logiczne
const x = true;
const y = false;
console.log('x && y =', x && y);
console.log('x || y =', x || y);
console.log('!x =', !x);
console.groupEnd();


//zadanie 2

console.group('Zadanie 2 – warunki i pętle');

// 1) Funkcja parzysta/nieparzysta
function isEven(n) {
  return n % 2 === 0;
}
console.log('Czy 10 jest parzyste?', isEven(10) ? 'TAK' : 'NIE');

// 2) Kalkulator ocen 0–100
function gradeFromPoints(points) {
  if (typeof points !== 'number' || Number.isNaN(points)) return 'błędne dane';
  if (points < 0 || points > 100) return 'poza zakresem';
  if (points >= 90) return 'celujący';
  if (points >= 75) return 'bardzo dobry';
  if (points >= 60) return 'dobry';
  if (points >= 45) return 'dostateczny';
  if (points >= 30) return 'dopuszczający';
  return 'niedostateczny';
}
console.log('Ocena dla 82 pkt:', gradeFromPoints(82));

// 3) switch: dzień tygodnia 1–7
function dayName(dayNumber) {
  switch (dayNumber) {
    case 1: return 'poniedziałek';
    case 2: return 'wtorek';
    case 3: return 'środa';
    case 4: return 'czwartek';
    case 5: return 'piątek';
    case 6: return 'sobota';
    case 7: return 'niedziela';
    default: return 'niepoprawny numer dnia';
  }
}
console.log('Dzień 6:', dayName(6));

// 4)pełnoletność
const isAdult = (age >= 18) ? 'pełnoletni/a' : 'niepełnoletni/a';
console.log('Status:', isAdult);

// Pętle:
console.log('for 1..10:');
for (let i = 1; i <= 10; i++) console.log(i);

console.log('while 10..0:');
let c = 10;
while (c >= 0) {
  console.log(c);
  c--;
}

// for...of – po tablicy
console.log('for...of po favLangs:');
for (const lang of favLangs) console.log(lang);

// for...in – po obiekcie
console.log('for...in po profile:');
for (const key in profile) console.log(key, '=>', profile[key]);

// break/continue
console.log('break/continue przykład:');
for (let i = 0; i < 10; i++) {
  if (i === 2) continue;     // pomijamy 2
  if (i === 7) break;        // kończymy na 7
  console.log('i=', i);
}

// Tabliczka mnożenia 1–10
console.log('Tabliczka mnożenia 1–10:');
let out = '';
for (let r = 1; r <= 10; r++) {
  let row = '';
  for (let k = 1; k <= 10; k++) {
    row += String(r * k).padStart(4, ' ');
  }
  out += row + '\n';
}
console.log('\n' + out);

console.groupEnd();


//zadanie 3

console.group('Zadanie 3 – funkcje, scope, closure');

// A) Te same funkcjonalności 4 sposobami (np. dodawanie)
function addDecl(x, y) { return x + y; }

const addExpr = function (x, y) { return x + y; };

const addArrow = (x, y) => x + y; 

const addIIFE = (function () {
  return function (x, y) { return x + y; };
})(); // 

console.log('addDecl(2,3)=', addDecl(2, 3));
console.log('addExpr(2,3)=', addExpr(2, 3));
console.log('addArrow(2,3)=', addArrow(2, 3));
console.log('addIIFE(2,3)=', addIIFE(2, 3));

// B) Parametry domyślne
function greet(name = 'Anon') {
  return `Cześć, ${name}!`;
}
console.log(greet(), greet('Jan'));

// Rest (...args)
function sumAll(...args) {
  return args.reduce((acc, v) => acc + v, 0);
}
console.log('sumAll(1,2,3,4)=', sumAll(1, 2, 3, 4));

// Zwróć obiekt z wieloma wartościami
function minMax(arr) {
  return { min: Math.min(...arr), max: Math.max(...arr) };
}
console.log('minMax([3,9,1])=', minMax([3, 9, 1]));

// Callback
function doWithNumber(n, cb) {
  return cb(n);
}
console.log('doWithNumber(5, n=>n*n)=', doWithNumber(5, n => n * n));

//funkcja zwracająca funkcję
function makeMultiplier(m) {
  return function (n) { return n * m; };
}
const times3 = makeMultiplier(3);
console.log('times3(7)=', times3(7));

// C) 
console.log('var vs let w pętli (setTimeout):');
for (var i = 0; i < 3; i++) { 
  setTimeout(() => console.log('var i =', i), 0);
}
for (let j = 0; j < 3; j++) { 
  setTimeout(() => console.log('let j =', j), 0);
}

// Zasięg blokowy
{
  const blockOnly = 'jestem w bloku';
  console.log(blockOnly);
}


//licznik z zapamiętanym stanem
function createCounter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}

const counter = createCounter();
console.log('counter()=', counter());
console.log('counter()=', counter());

console.groupEnd();


//zadanie 4


(function initGalleryLightbox() {
  // Znajdź nagłówek "Moja galeria multimedialna" i kolejne sekcje
  const galleryTitle = Array.from(document.querySelectorAll('h1'))
    .find(h => h.textContent.trim().toLowerCase().includes('moja galeria multimedialna'));

  if (!galleryTitle) return;

  // Kontener to najbliższy body – w tym HTML sekcje są rodzeństwem nagłówka.
  const galleryRoot = document.body;

  // Wszystkie obrazki w sekcjach galerii
  const images = Array.from(galleryRoot.querySelectorAll('section img'));
  if (images.length === 0) return;

  // data-* do przechowywania opisów
  images.forEach((img, idx) => {
    if (!img.dataset.index) img.dataset.index = String(idx);
    if (!img.dataset.caption) img.dataset.caption = img.getAttribute('alt') || `Obraz ${idx + 1}`;
    img.style.cursor = 'zoom-in';
  });

  // Zmień tytuł galerii dynamicznie
  galleryTitle.textContent = 'Moja galeria multimedialna (interaktywna)';

  // Stwórz overlay lightbox
  const overlay = document.createElement('div');
  overlay.id = 'lightboxOverlay';
  overlay.setAttribute('aria-hidden', 'true');
  overlay.style.cssText = [
    'position:fixed',
    'inset:0',
    'display:none',
    'align-items:center',
    'justify-content:center',
    'background:rgba(0,0,0,0.72)',
    'backdrop-filter: blur(6px)',
    'z-index:9999',
    'padding:18px'
  ].join(';');

  overlay.innerHTML = `
    <div id="lightboxDialog" role="dialog" aria-modal="true"
         style="width:min(980px, 100%); max-height: 92vh; overflow:auto;
                background: rgba(15, 18, 35, 0.92);
                border: 1px solid rgba(255,255,255,0.16);
                border-radius: 16px;
                box-shadow: 0 20px 60px rgba(0,0,0,0.55);
                padding: 14px;">
      <div style="display:flex; gap:10px; align-items:center; justify-content:space-between;">
        <strong id="lightboxCaption" style="display:block; padding: 4px 6px;"></strong>
        <button type="button" id="lightboxClose"
                aria-label="Zamknij"
                style="border:1px solid rgba(255,255,255,0.18);
                       background: rgba(255,255,255,0.06);
                       color: rgba(233,236,255,0.92);
                       border-radius: 12px; padding: 8px 12px; cursor:pointer;">
          ✕
        </button>
      </div>

      <div style="margin-top: 10px; display:flex; align-items:center; justify-content:center;">
        <img id="lightboxImg" alt="" style="max-width:100%; height:auto; border-radius: 12px; border:1px solid rgba(255,255,255,0.12);" />
      </div>

      <div style="display:flex; gap:10px; justify-content:space-between; margin-top: 12px;">
        <button type="button" id="lightboxPrev"
                style="flex:1; border:1px solid rgba(255,255,255,0.18);
                       background: rgba(124,92,255,0.18);
                       color: rgba(233,236,255,0.92);
                       border-radius: 12px; padding: 10px 12px; cursor:pointer;">
          ◀ Poprzedni
        </button>
        <button type="button" id="lightboxNext"
                style="flex:1; border:1px solid rgba(255,255,255,0.18);
                       background: rgba(34,197,94,0.14);
                       color: rgba(233,236,255,0.92);
                       border-radius: 12px; padding: 10px 12px; cursor:pointer;">
          Następny ▶
        </button>
      </div>
    </div>
  `;
  document.body.appendChild(overlay);

  const ui = {
    overlay,
    dialog: overlay.querySelector('#lightboxDialog'),
    img: overlay.querySelector('#lightboxImg'),
    caption: overlay.querySelector('#lightboxCaption'),
    close: overlay.querySelector('#lightboxClose'),
    prev: overlay.querySelector('#lightboxPrev'),
    next: overlay.querySelector('#lightboxNext')
  };

  let currentIndex = 0;

  function openAt(index) {
    const safeIndex = (index + images.length) % images.length;
    currentIndex = safeIndex;

    const sourceImg = images[safeIndex];
    ui.img.src = sourceImg.src;
    ui.img.alt = sourceImg.alt || '';
    ui.caption.textContent = sourceImg.dataset.caption || sourceImg.alt || 'Obraz';
    ui.overlay.style.display = 'flex';
    ui.overlay.setAttribute('aria-hidden', 'false');

    // Focus na zamknięcie
    ui.close.focus();
  }

  function close() {
    ui.overlay.style.display = 'none';
    ui.overlay.setAttribute('aria-hidden', 'true');
  }

  function next() { openAt(currentIndex + 1); }
  function prev() { openAt(currentIndex - 1); }

  //jeden listener na body
  document.body.addEventListener('click', (e) => {
    const img = e.target.closest('section img');
    if (img && images.includes(img)) {
      // Dodaj/usuń klasy na hover – 
      img.classList.toggle('js-selected');
      openAt(Number(img.dataset.index));
      return;
    }
  });

  // Zamknięcie: przycisk X lub kliknięcie poza dialogiem
  ui.close.addEventListener('click', close);
  ui.overlay.addEventListener('click', (e) => {
    if (e.target === ui.overlay) close();
  });

  // Nawigacja: przyciski
  ui.next.addEventListener('click', next);
  ui.prev.addEventListener('click', prev);

  // Klawiatura
  document.addEventListener('keydown', (e) => {
    if (ui.overlay.getAttribute('aria-hidden') === 'true') return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowRight') next();
    if (e.key === 'ArrowLeft') prev();
  });

  // Hover: classList.add/remove + zmiana stylu inline
  images.forEach((img) => {
    img.addEventListener('mouseenter', () => {
      img.classList.add('js-hover');
      img.style.transform = 'translateY(-1px)';
      img.style.transition = 'transform 120ms ease';
    });
    img.addEventListener('mouseleave', () => {
      img.classList.remove('js-hover');
      img.style.transform = '';
    });
  });
})();


//zadanie 5

(function initFormValidation() {
  const form = document.querySelector('form[data-form="kontakt-v1"]');
  if (!form) return;

  // Jeśli brakuje pola wiadomości – dodaj dynamicznie
  let message = form.querySelector('#message');
  if (!message) {
    const fieldset = form.querySelector('fieldset') || form;
    const p = document.createElement('p');
    p.innerHTML = `
      <label for="message">Wiadomość:</label><br>
      <textarea id="message" name="message" required minlength="10" placeholder="Napisz min. 10 znaków"></textarea>
    `;
    fieldset.appendChild(p);
    message = p.querySelector('#message');
  }

  // Jeśli brakuje checkboxa zgody – dodaj
  let consent = form.querySelector('#consent');
  if (!consent) {
    const fieldsets = form.querySelectorAll('fieldset');
    const target = fieldsets[fieldsets.length - 1] || form;
    const p = document.createElement('p');
    p.innerHTML = `
      <input id="consent" name="consent" type="checkbox" required>
      <label for="consent">Wyrażam zgodę na przetwarzanie danych (wymagane)</label>
    `;
    target.appendChild(p);
    consent = p.querySelector('#consent');
  }

  // Jeśli nie ma przycisku submit – dodaj
  let submitBtn = form.querySelector('button[type="submit"], input[type="submit"]');
  if (!submitBtn) {
    const btn = document.createElement('button');
    btn.type = 'submit';
    btn.textContent = 'Wyślij';
    btn.style.cssText = 'width: min(220px, 100%); padding: 10px 12px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.16); background: rgba(124,92,255,0.22); color: rgba(233,236,255,0.92); cursor: pointer;';
    form.appendChild(btn);
    submitBtn = btn;
  }

  // Pomoc
  function ensureErrorNode(input) {
    const existing = input.parentElement?.querySelector?.('.js-error');
    if (existing) return existing;

    const small = document.createElement('div');
    small.className = 'js-error';
    small.style.cssText = 'margin-top:6px; font-size:0.92rem; color: rgba(239,68,68,0.95);';
    input.insertAdjacentElement('afterend', small);
    return small;
  }

  function setFieldState(input, ok, msg = '') {
    const err = ensureErrorNode(input);
    err.textContent = ok ? '' : msg;

    input.dataset.valid = ok ? '1' : '0';

    input.style.borderColor = ok ? 'rgba(34, 197, 94, 0.55)' : 'rgba(239, 68, 68, 0.65)';
  }

  // Reguły walidacji
  const fullName = form.querySelector('#fullName');
  const email = form.querySelector('#email');
  const phone = form.querySelector('#phone');
  const birthDate = form.querySelector('#birthDate');
  const pass1 = form.querySelector('#password');
  const pass2 = form.querySelector('#password2');

  function validateName() {
    if (!fullName) return true;
    const v = fullName.value.trim();
    // min 2 znaki, tylko litery + spacje + polskie znaki
    const ok = /^[A-Za-zĄĆĘŁŃÓŚŹŻąćęłńóśźż ]{2,}$/.test(v);
    setFieldState(fullName, ok, 'Podaj min. 2 znaki (tylko litery i spacje).');
    return ok;
  }

  function validateEmail() {
    if (!email) return true;
    const v = email.value.trim();
    const ok = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);
    setFieldState(email, ok, 'Podaj poprawny adres email.');
    return ok;
  }

  function validatePhone() {
    if (!phone) return true;
    const v = phone.value.trim();
    if (v === '') {
      // opcjonalny
      phone.style.borderColor = 'rgba(255,255,255,0.16)';
      ensureErrorNode(phone).textContent = '';
      return true;
    }
    // 9 cyfr (po usunięciu spacji/myślników)
    const digits = v.replace(/\D/g, '');
    const ok = /^\d{9}$/.test(digits);
    setFieldState(phone, ok, 'Telefon: jeśli podany, musi zawierać 9 cyfr.');
    return ok;
  }

  function validateMessage() {
    if (!message) return true;
    const v = message.value.trim();
    const ok = v.length >= 10;
    setFieldState(message, ok, 'Wiadomość: minimum 10 znaków.');
    return ok;
  }

  function validateBirthDate() {
    if (!birthDate) return true;
    const v = birthDate.value;
    const ok = Boolean(v);
    setFieldState(birthDate, ok, 'Wybierz datę urodzenia.');
    return ok;
  }

  function validatePasswords() {
    let ok = true;
    if (pass1) {
      const v = pass1.value;
      const ok1 = v.length >= 8;
      setFieldState(pass1, ok1, 'Hasło: minimum 8 znaków.');
      ok = ok && ok1;
    }
    if (pass2 && pass1) {
      const ok2 = pass2.value === pass1.value && pass2.value.length >= 8;
      setFieldState(pass2, ok2, 'Hasła muszą być identyczne.');
      ok = ok && ok2;
    }
    return ok;
  }

  function validateGender() {
    const radios = form.querySelectorAll('input[name="gender"]');
    if (radios.length === 0) return true;
    const ok = Array.from(radios).some(r => r.checked);
    // pokaż błąd pod ostatnim radiem
    const anchor = radios[radios.length - 1];
    const err = ensureErrorNode(anchor);
    err.textContent = ok ? '' : 'Wybierz płeć (wymagane).';
    return ok;
  }

  function validateConsent() {
    if (!consent) return true;
    const ok = consent.checked;
    // błąd pod checkboxem:
    const err = ensureErrorNode(consent);
    err.textContent = ok ? '' : 'Musisz wyrazić zgodę.';
    return ok;
  }

  function validateAll() {
    const results = [
      validateName(),
      validateEmail(),
      validatePhone(),
      validateBirthDate(),
      validatePasswords(),
      validateGender(),
      validateMessage(),
      validateConsent()
    ];
    return results.every(Boolean);
  }

  // Walidacja w czasie rzeczywistym
  const liveFields = [fullName, email, phone, birthDate, pass1, pass2, message, consent].filter(Boolean);

  liveFields.forEach((el) => {
    el.addEventListener('input', () => {
      switch (el) {
        case fullName: validateName(); break;
        case email: validateEmail(); break;
        case phone: validatePhone(); break;
        case birthDate: validateBirthDate(); break;
        case pass1:
        case pass2: validatePasswords(); break;
        case message: validateMessage(); break;
        case consent: validateConsent(); break;
        default: break;
      }
    });
    el.addEventListener('blur', () => {
      // powtórka na blur
      el.dispatchEvent(new Event('input', { bubbles: true }));
    });
  });

  // FormData API + "wysyłanie..."
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const ok = validateAll();
    if (!ok) {
      // focus na pierwsze niepoprawne pole
      const firstInvalid = liveFields.find(el => el.dataset.valid === '0') || form.querySelector('.js-error:not(:empty)')?.previousElementSibling;
      if (firstInvalid && typeof firstInvalid.focus === 'function') firstInvalid.focus();
      return;
    }

    // zbierz dane
    const fd = new FormData(form);
    const data = {};
    fd.forEach((value, key) => {
      // checkboxy interests mogą się powtarzać
      if (key in data) {
        data[key] = Array.isArray(data[key]) ? [...data[key], value] : [data[key], value];
      } else {
        data[key] = value;
      }
    });
    console.log('FormData -> obiekt:', data);

    // UX: blokada przycisku + tekst "Wysyłanie..."
    const oldText = submitBtn.textContent;
    submitBtn.disabled = true;
    submitBtn.textContent = 'Wysyłanie...';

    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.textContent = oldText;

      // komunikat sukcesu (prosty toast)
      showToast('✅ Formularz wysłany (symulacja).', 'success');

      form.reset();
      // wyczyść stany walidacji
      liveFields.forEach((el) => {
        delete el.dataset.valid;
        if (el.classList) el.classList.remove('is-valid', 'is-invalid');
        el.style.borderColor = '';
        const err = el.parentElement?.querySelector?.('.js-error');
        if (err) err.textContent = '';
      });
    }, 1500);
  });

  // Prosty toast
  function showToast(text, type = 'info') {
    let host = document.querySelector('#toastHost');
    if (!host) {
      host = document.createElement('div');
      host.id = 'toastHost';
      host.style.cssText = 'position:fixed; right:16px; bottom:16px; display:grid; gap:10px; z-index:10000;';
      document.body.appendChild(host);
    }
    const t = document.createElement('div');
    t.textContent = text;
    t.style.cssText = [
      'max-width: min(360px, 92vw)',
      'padding: 12px 14px',
      'border-radius: 14px',
      'border: 1px solid rgba(255,255,255,0.14)',
      'box-shadow: 0 14px 40px rgba(0,0,0,0.45)',
      'background: rgba(15,18,35,0.92)',
      'color: rgba(233,236,255,0.92)',
      'backdrop-filter: blur(8px)',
      'font-weight: 650'
    ].join(';');
    if (type === 'success') t.style.borderColor = 'rgba(34,197,94,0.35)';
    host.appendChild(t);

    setTimeout(() => {
      t.style.opacity = '0';
      t.style.transform = 'translateY(6px)';
      t.style.transition = 'all 220ms ease';
      setTimeout(() => t.remove(), 260);
    }, 3000);
  }
})();
