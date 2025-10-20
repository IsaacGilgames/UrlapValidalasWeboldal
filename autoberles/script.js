document.addEventListener("DOMContentLoaded", function () {
    const imgs = document.querySelectorAll('.card-img-top');
    const imgOverlay = document.getElementById('imgOverlay');
    const overlayImg = document.getElementById('overlayImg');
    document.getElementById("secondRow").style.display = "none";
    localStorage.clear();


    imgs.forEach(imgEl => {
        imgEl.addEventListener('click', function (e) {
            e.stopPropagation(); 
            const src = imgEl.src || imgEl.getAttribute('src');
            overlayImg.src = src;
            imgOverlay.style.display = 'flex';
        });
    });

    imgOverlay.addEventListener('click', function () {
        imgOverlay.style.display = 'none';
        overlayImg.src = '';
    });


    function hideImgOverlay() {
        if (imgOverlay.style.display !== 'none') {
            imgOverlay.style.display = 'none';
            overlayImg.src = '';
        }
    }


    document.addEventListener('keydown', function () {
        hideImgOverlay();
    });


    window.addEventListener('wheel', function () {
        hideImgOverlay();
    }, { passive: true });

    window.addEventListener('scroll', function () {
        hideImgOverlay();
    }, { passive: true });

    document.addEventListener('touchmove', function () {
        hideImgOverlay();
    }, { passive: true });
});

function scrollToTop() {
    window.scrollTo({ top: 0 });
}
//overlayek
function torol() {
    document.getElementById("firstRow").style.display = "block";
    document.getElementById("secondRow").style.display = "none";
    selectedCarText.innerHTML = "";
    selectedCarExtra.innerHTML = "";
    localStorage.clear();
    document.getElementById("fullName").value = "";
    document.getElementById("motherName").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("address").value = "";
    document.getElementById("birthDate").value = "";
    document.getElementById("rentalEnd").value = "";
    document.getElementById("consent").checked = false;
    document.getElementById("jogsi").checked = false;

    document.getElementById("fullName").style.border = "1px solid #ced4da";
    document.getElementById("motherName").style.border = "1px solid #ced4da";
    document.getElementById("email").style.border = "1px solid #ced4da";
    document.getElementById("phone").style.border = "1px solid #ced4da";
    document.getElementById("address").style.border = "1px solid #ced4da";
    document.getElementById("birthDate").style.border = "1px solid #ced4da";
    document.getElementById("rentalStart").style.border = "1px solid #ced4da";
    document.getElementById("rentalEnd").style.border = "1px solid #ced4da";
    document.getElementById("consent").style.outline = "none";
    document.getElementById("jogsi").style.outline = "none";

    document.getElementById("rentalSummary").classList.add("text-muted");
    text = "<i class='fa-regular fa-clock me-1'></i>Válaszd ki a dátumokat a bérlés időtartamához.";
    document.getElementById("rentalSummary").innerHTML = text;

}
function bezar() {
    document.getElementById("overlay").style.display = "none";
    document.getElementById("firstRow").style.display = "block";
    document.getElementById("secondRow").style.display = "none";
    localStorage.clear();
    document.getElementById("fullName").value = "";
    document.getElementById("motherName").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("address").value = "";
    document.getElementById("birthDate").value = "";
    document.getElementById("rentalEnd").value = "";
    document.getElementById("consent").checked = false;
    document.getElementById("jogsi").checked = false;

    document.getElementById("fullName").style.border = "1px solid #ced4da";
    document.getElementById("motherName").style.border = "1px solid #ced4da";
    document.getElementById("email").style.border = "1px solid #ced4da";
    document.getElementById("phone").style.border = "1px solid #ced4da";
    document.getElementById("address").style.border = "1px solid #ced4da";
    document.getElementById("birthDate").style.border = "1px solid #ced4da";
    document.getElementById("rentalStart").style.border = "1px solid #ced4da";
    document.getElementById("rentalEnd").style.border = "1px solid #ced4da";
    document.getElementById("consent").style.outline = "none";
    document.getElementById("jogsi").style.outline = "none";

    document.getElementById("rentalSummary").classList.add("text-muted");
    text = "<i class='fa-regular fa-clock me-1'></i>Válaszd ki a dátumokat a bérlés időtartamához.";
    document.getElementById("rentalSummary").innerHTML = text;

}
function change_overlay(car, kep, ar) {
    localStorage.clear();
    document.getElementById("firstRow").style.display = "none";
    document.getElementById("secondRow").style.display = "block";
    let name = car;
    let image = kep;
    const div1 = document.createElement("div");
    const p1 = document.createElement("p");
    const img1 = document.createElement("img");
    img1.src = image;
    img1.width = 300;
    img1.style.borderRadius = "10px";
    localStorage.setItem("selectedCar", name);
    localStorage.setItem("carPrice", ar);
    p1.innerHTML = "A kiválasztott autó: <strong>" + name + "</srrong";
    const ki_text = document.getElementById("selectedCarText");
    const ki_kep = document.getElementById("selectedCarExtra");
    ki_kep.appendChild(img1);
    ki_text.appendChild(p1);
    if (localStorage.getItem("selectedCar") == "Mercedes Sprinter") {
        document.getElementById("d_gki").style.display = "block";
    }
    else {
        document.getElementById("d_gki").style.display = "none";
    }
    const ma = new Date();
    const isoDatum = ma.toISOString().slice(0, 10); // "YYYY-MM-DD"

    document.getElementById("rentalStart").value = isoDatum;
    document.getElementById("rentalStart").min = isoDatum;
    document.getElementById("rentalEnd").min = isoDatum;
    document.getElementById("birthDate").value = "0000-01-01";
    document.getElementById("birthDate").max = isoDatum;

    document.getElementById("fullName").value = "";
    document.getElementById("motherName").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("address").value = "";
    document.getElementById("birthDate").value = "";
    document.getElementById("rentalEnd").value = "";
    document.getElementById("consent").checked = false;
    document.getElementById("jogsi").checked = false;

    document.getElementById("fullName").style.border = "1px solid #ced4da";
    document.getElementById("motherName").style.border = "1px solid #ced4da";
    document.getElementById("email").style.border = "1px solid #ced4da";
    document.getElementById("phone").style.border = "1px solid #ced4da";
    document.getElementById("address").style.border = "1px solid #ced4da";
    document.getElementById("birthDate").style.border = "1px solid #ced4da";
    document.getElementById("rentalStart").style.border = "1px solid #ced4da";
    document.getElementById("rentalEnd").style.border = "1px solid #ced4da";
    document.getElementById("consent").style.outline = "none";
    document.getElementById("jogsi").style.outline = "none";

    document.getElementById("rentalSummary").classList.add("text-muted");
    text = "<i class='fa-regular fa-clock me-1'></i>Válaszd ki a dátumokat a bérlés időtartamához.";
    document.getElementById("rentalSummary").innerHTML = text;


}
//validalas

function hanyEves(szulEv, szulHonap, szulNap) {
    const input = document.getElementById("birthDate").value;
    const birthDate = new Date(input);
    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    const dayDiff = today.getDate() - birthDate.getDate();

    // Ha még nem volt szülinap idén, akkor -1
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
    }

    return age;
}
function nevValid() {
    let nev = document.getElementById("fullName").value;
    let nevok = false;
    let nagybet = false;
    let spec = false;
    let space = false;
    const magyarABC = "aábcdeéfghiíjklmnoóöőpqrstuúüűvwxyz ";
    const specialisKarakterek = "!@#$%^&*()_+-=[]{}|;:'\",.<>/?`~\\";
    const nagybetuk = magyarABC.toUpperCase().trim();
    if (nev.includes(" ")) {
        space = true;
    }
    if (nagybetuk.includes(nev.slice(0, nev.indexOf(" "))[0]) && nagybetuk.includes(nev.slice(nev.indexOf(" ") + 1, nev.lenght)[0])) {
        nagybet = true;
    }
    for (let i of nev) {
        if (specialisKarakterek.includes(i)) {
            spec = true;
        }
        if (nagybet && space && spec == false) {
            nevok = true;
        }
    }

    if (!nevok) {
        document.getElementById("fullName").style.border = "2px solid red";
    } else {
        document.getElementById("fullName").style.border = "2px solid green";
    }
    return nevok;
}
function anyadValid() {
    let anyad = document.getElementById("motherName").value;
    //anya neve
    const magyarABC = "aábcdeéfghiíjklmnoóöőpqrstuúüűvwxyz ";
    const specialisKarakterek = "!@#$%^&*()_+-=[]{}|;:'\",.<>/?`~\\";
    const nagybetuk = magyarABC.toUpperCase().trim();
    let anyja_nevok = false;
    let nagybet = false;
    let spec = false;
    let space = false;
    if (anyad.includes(" ")) {
        space = true;
    }
    if (nagybetuk.includes(anyad.slice(0, anyad.indexOf(" "))[0]) && nagybetuk.includes(anyad.slice(anyad.indexOf(" ") + 1, anyad.lenght)[0])) {
        nagybet = true;
    }
    for (let i of anyad) {
        if (specialisKarakterek.includes(i)) {
            spec = true;
        }
        if (nagybet && space && spec == false) {
            anyja_nevok = true;
        }
    }
    if (!anyja_nevok) {
        document.getElementById("motherName").style.border = "2px solid red";
    } else {
        document.getElementById("motherName").style.border = "2px solid green";
    }
    return anyja_nevok;
}
function emailValid() {
    let email = document.getElementById("email").value;
    let emailok = false;
    if (email.match(/^[A-Za-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
        emailok = true;
    }
    if (!emailok) {
        document.getElementById("email").style.border = "2px solid red";
    } else {
        document.getElementById("email").style.border = "2px solid green";
    }
    return emailok;
}
function phoneValid() {
    let phone = document.getElementById("phone").value;
    let telok = false;
    if (phone.match(/^[+][0-9]{1,3}[1-9][0-9][0-9]{3}[0-9]{4}$/) || phone.match(/^[+][0-9]{1,3} [1-9][0-9] [0-9]{3} [0-9]{4}$/)) {
        telok = true;
    }
    if (!telok) {
        document.getElementById("phone").style.border = "2px solid red";
    } else {
        document.getElementById("phone").style.border = "2px solid green";
    }
    return telok;
}
function cimValid() {
    let cim = document.getElementById("address").value;
    let cimok = true;
    let irsz = cim.slice(0, 4);
    if (!cim.match(/^[0-9]{4}\s{1}[A-Za-zÁÉÍÓÖŐÚÜŰáéíóöőúüű\s\-]*,\s{1}.+\s[0-9]{1,3}\.$/)) {
        cimok = false;
    }
    if (!cimok) {
        document.getElementById("address").style.border = "2px solid red";
    } else {
        document.getElementById("address").style.border = "2px solid green";
    }
    return cimok;
}
function korValid() {
    let korok = false;
    if (hanyEves() >= 18) {
        korok = true;
    }
    if (!korok) {
        document.getElementById("birthDate").style.border = "2px solid red";
    } else {
        document.getElementById("birthDate").style.border = "2px solid green";
    }
    return korok;
}

function Szamol() {
    let startDate = document.getElementById("rentalStart").value;
    let endDate = document.getElementById("rentalEnd").value;
    let kezdesok = false;
    let vegeok = false;
    const date = new Date();
    const isoDatum = date.toISOString().slice(0, 10);
    if (startDate != "" && endDate >= startDate && startDate >= isoDatum) {
        kezdesok = true;
    }
    if (endDate != "" && endDate >= startDate) {
        vegeok = true;
    }
    if (!kezdesok) {
        document.getElementById("rentalStart").style.border = "2px solid red";
    }
    else {
        document.getElementById("rentalStart").style.border = "2px solid green";
    }


    if (!vegeok) {
        document.getElementById("rentalSummary").classList.add("text-muted");
        document.getElementById("rentalEnd").style.border = "2px solid red";
        text = "<i class='fa-regular fa-clock me-1'></i>Válaszd ki a dátumokat a bérlés időtartamához.";
        document.getElementById("rentalSummary").innerHTML = text;
    }
    else {
        const startDate = new Date(document.getElementById("rentalStart").value);
        const endDate = new Date(document.getElementById("rentalEnd").value);
        let napok = endDate - startDate; // ezredmasodperc    tari
        napok = napok / (1000 * 60 * 60 * 24) + 1; //ezrenmasodpercet napokká
        let napiDij = localStorage.getItem("carPrice");
        let vegosszeg = napok * napiDij;
        let auto = localStorage.getItem("selectedCar");
        let text = "A " + auto + " bérlésének díja naponta <strong>" + parseInt(napiDij).toLocaleString("hu-HU") + " Ft</strong>, <strong>" + napok + " napra</strong> a teljes díj: <strong>" + vegosszeg.toLocaleString("hu-HU") + " Ft </strong>";
        document.getElementById("rentalSummary").classList.remove("text-muted");
        document.getElementById("rentalSummary").innerHTML = text;
        document.getElementById("rentalEnd").style.border = "2px solid green";

    }
    return kezdesok && vegeok;
}
function consentValid() {
    let consent = document.getElementById("consent").checked;
    let consentok = false;
    if (consent) {
        consentok = true;
    }
    if (!consentok) {
        document.getElementById("consent").style.outline = "2px solid red";
    }
    else {
        document.getElementById("consent").style.outline = "none";
    }
    return consentok;
}
function jogsiValid() {
    let jogsi = document.getElementById("jogsi").checked;
    let jogsiok = false;
    if (jogsi) {
        jogsiok = true;
    }
    if (!jogsiok) {
        document.getElementById("jogsi").style.outline = "2px solid red";
    }
    else {
        document.getElementById("jogsi").style.outline = "none";
    }
    return jogsiok;
}
function validateForm() {
    let nevok = nevValid();
    let anyja_nevok = anyadValid();
    let telok = phoneValid();
    let korok = korValid();
    let emailok = emailValid();
    let cimok = cimValid();
    let kezdesok = Szamol();
    let vegeok = Szamol();
    let consentok = consentValid();
    let jogsiok = jogsiValid();
    if (localStorage.getItem("selectedCar") == "Mercedes Sprinter") {
        if (nevok && anyja_nevok && telok && korok && emailok && cimok && consentok && jogsiok) {
            document.getElementById("overlay").style.display = "block";
        } else {
            if (!nevok) {
                document.getElementById("fullName").style.border = "2px solid red";
            }
            if (!anyja_nevok) {
                document.getElementById("motherName").style.border = "2px solid red";
            }
            if (!telok) {
                document.getElementById("phone").style.border = "2px solid red";
            }
            if (!korok) {
                document.getElementById("birthDate").style.border = "2px solid red";
            }
            if (!emailok) {
                document.getElementById("email").style.border = "2px solid red";
            }
            if (!cimok) {
                document.getElementById("address").style.border = "2px solid red";
            }
            if (!kezdesok) {
                document.getElementById("rentalStart").style.border = "2px solid red";
            }
            if (!vegeok) {
                document.getElementById("rentalEnd").style.border = "2px solid red";
            }
            if (!consentok) {
                document.getElementById("consent").style.outline = "2px solid red";
            }
            if (!jogsiok) {
                document.getElementById("jogsi").style.outline = "2px solid red";
            }
        }
    }
    else {
        if (nevok && anyja_nevok && telok && korok && emailok && cimok && consentok) {
            document.getElementById("overlay").style.display = "block";
        } else {
            if (!nevok) {
                document.getElementById("fullName").style.border = "2px solid red";
            }
            if (!anyja_nevok) {
                document.getElementById("motherName").style.border = "2px solid red";
            }
            if (!telok) {
                document.getElementById("phone").style.border = "2px solid red";
            }
            if (!korok) {
                document.getElementById("birthDate").style.border = "2px solid red";
            }
            if (!emailok) {
                document.getElementById("email").style.border = "2px solid red";
            }
            if (!cimok) {
                document.getElementById("address").style.border = "2px solid red";
            }
            if (!kezdesok) {
                document.getElementById("rentalStart").style.border = "2px solid red";
            }
            if (!vegeok) {
                document.getElementById("rentalEnd").style.border = "2px solid red";
            }
            if (!consentok) {
                document.getElementById("consent").style.outline = "2px solid red";
            }
        }
    }
    let nev = document.getElementById("fullName").value;
    let email = document.getElementById("email").value;
    let telefonszam = document.getElementById("phone").value;
    let lakcim = document.getElementById("address").value;
    let uzenet = `
      <h2>Tisztelt ${nev.slice(nev.indexOf(" ") + 1, nev.lenght)}!</h2>
      <p>Köszönjük, hogy autókölcsönző szolgáltatásunkat választotta. Foglalása sikeresen rögzítésre került rendszerünkben.</p>
      <p><strong>Az Ön által megadott adatok:</strong></p>
        <strong>Email-cím:</strong> ${email}<br>
        <strong>Telefonszám:</strong> ${telefonszam}<br>
        <strong>Lakcím:</strong> ${lakcim}<br>
      <p>Munkatársunk hamarosan felveszi Önnel a kapcsolatot a foglalás részleteinek egyeztetése céljából.</p>
      <p>Bízunk benne, hogy elégedett lesz szolgáltatásainkkal!</p>
      <p>Üdvözlettel,<br><strong>AutoRent Hungary</strong></p>
    `;
    document.getElementById("uzi").innerHTML = uzenet;
}
