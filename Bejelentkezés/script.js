//Animáció
const belepesGomb = document.querySelector("#belepes-gomb");
const regisztracioGomb = document.querySelector("#regisztracio-gomb");
const kontener = document.querySelector(".kontener");

regisztracioGomb.addEventListener("click", function() {
  kontener.classList.add("regisztracio-mod");
});

belepesGomb.addEventListener("click", function() {
  kontener.classList.remove("regisztracio-mod");
});

function jelszoFeltetelek() {
    const jelszoMezo = document.getElementById("jelszo");
    if (!document.getElementById("jelszo-feltetelek")) {
        const jelszoFeltetelek = document.createElement("div");
        jelszoFeltetelek.id = "jelszo-feltetelek";
        jelszoFeltetelek.style.display = "none";
        jelszoFeltetelek.innerHTML = `
            <div id="hossz" style="color: red;">Legalább 8 karakter</div>
            <div id="nagybetu" style="color: red;">Tartalmaz nagybetűt</div>
            <div id="szam" style="color: red;">Tartalmaz számot</div>
            <div id="specialis" style="color: red;">Tartalmaz speciális karaktert (!@#$%^&*()_+-=:)</div>
        `;
        jelszoMezo.parentNode.insertAdjacentElement("afterend", jelszoFeltetelek);
    }
}

function jelszoErosseg(jelszo) {
    const hosszElem = document.getElementById("hossz");
    const nagybetuElem = document.getElementById("nagybetu");
    const szamElem = document.getElementById("szam");
    const specialisElem = document.getElementById("specialis");

    if (!hosszElem) return false;

    //Legalább 8 karakter
    const hosszOk = jelszo.length >= 8;
    if (hosszElem) {
        hosszElem.style.color = hosszOk ? "green" : "red";
        hosszElem.style.textDecoration = hosszOk ? "line-through" : "none";
    }
    
    //Legalább 1 nagybetű
    const nagybetuOk = /[A-ZÁÉÍÓÖŐÚÜŰ]/.test(jelszo);
    if (nagybetuElem) {
        nagybetuElem.style.color = nagybetuOk ? "green" : "red";
        nagybetuElem.style.textDecoration = nagybetuOk ? "line-through" : "none";
    }
    
    //Legalább 1 szám
    const szamOk = /[0-9]/.test(jelszo);
    if (szamElem) {
        szamElem.style.color = szamOk ? "green" : "red";
        szamElem.style.textDecoration = szamOk ? "line-through" : "none";
    }
    
    //Legalább 1 speciális karakter
    const specialisOk = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(jelszo);
    if (specialisElem) {
        specialisElem.style.color = specialisOk ? "green" : "red";
        specialisElem.style.textDecoration = specialisOk ? "line-through" : "none";
    }

    return hosszOk && nagybetuOk && szamOk && specialisOk;
}
//Alap változók és függvények
const betu = "AÁBCDEÉFGHIÍJKLMNOÓÖŐPQRSTUÚÜŰVWXYZ";
const kisbetu = betu.toLowerCase();
const szemely = { vezNev: "", kerNev: "", kor: "", lakcim: "", telSzam: "", email: "", felhasznaloNev: "", jelszo: "" };

function showErrors(inputElem, messages) {
  removeErrors(inputElem);

  const container = document.createElement("div");
  container.className = "hiba-uzenet";

  messages.forEach(function(msg) {
    const line = document.createElement("div");
    line.innerText = msg;
    container.appendChild(line);
  });

  inputElem.parentNode.insertAdjacentElement("afterend", container);
}

function removeErrors(inputElem) {
  let nextElem = inputElem.parentNode.nextElementSibling;
  if (nextElem && nextElem.classList.contains("hiba-uzenet")) {
    nextElem.remove();
  }
}

function Validalas() {
  //Vezetéknév
  let veznev = document.getElementById("veznev").value.trim();
  let veznevOK = false;

  removeErrors(document.getElementById("veznev"));

  if (veznev.length > 0) {
    if (betu.includes(veznev[0])) {
      let jo = true;
      for (let i = 1; i < veznev.length; i++) {
        if (betu.includes(veznev[i]) || !kisbetu.includes(veznev[i])) {
          jo = false;
          break;
        }
      }
      veznevOK = jo;
    }
  }

  if (veznevOK) {
    szemely.vezNev = veznev;
  } else {
    let hibak = [];

    if (veznev.length == 0) {
      hibak.push("A mező kitöltése kötelező!");
    } else if (veznev.length > 0 && !betu.includes(veznev[0])) {
      hibak.push("A vezetéknévnek nagybetűvel kell kezdődnie!");
    } else if (veznev.length > 0) {
      for (let i = 1; i < veznev.length; i++) {
        if (betu.includes(veznev[i])) {
          hibak.push("A vezetéknév csak az első betűje lehet nagybetű!");
          break;
        }
        if (!kisbetu.includes(veznev[i])) {
          hibak.push("A vezetéknév csak betűkből állhat!");
          break;
        }
      }
    }

    if (hibak.length > 0) {
      showErrors(document.getElementById("veznev"), hibak);
    }
  }

  //Keresztnév 
  let kernev = document.getElementById("kernev").value.trim();
  let kernevOK = false;

  removeErrors(document.getElementById("kernev"));

  if (kernev.length > 0) {
    if (betu.includes(kernev[0])) {
      let jo = true;
      for (let i = 1; i < kernev.length; i++) {
        if (betu.includes(kernev[i]) || !kisbetu.includes(kernev[i])) {
          jo = false;
          break;
        }
      }
      kernevOK = jo;
    }
  }

  if (kernevOK) {
    szemely.kerNev = kernev;
  } else {
    let hibak = [];

    if (kernev.length == 0) {
      hibak.push("A mező kitöltése kötelező!");
    } else if (kernev.length > 0 && !betu.includes(kernev[0])) {
      hibak.push("A keresztnévnek nagybetűvel kell kezdődnie!");
    } else if (kernev.length > 0) {
      for (let i = 1; i < kernev.length; i++) {
        if (betu.includes(kernev[i])) {
          hibak.push("A keresztnév csak az első betűje lehet nagybetű!");
          break;
        }
        if (!kisbetu.includes(kernev[i])) {
          hibak.push("A keresztnév csak betűkből állhat!");
          break;
        }
      }
    }

    if (hibak.length > 0) {
      showErrors(document.getElementById("kernev"), hibak);
    }
  }

  //Születési dátum/Életkor 
  let szuldatum = document.getElementById("szuldatum").value.trim();
  let korOK = false;
  let datumHibak = [];

  removeErrors(document.getElementById("szuldatum"));

  if (szuldatum.length == 0) {
    datumHibak.push("A mező kitöltése kötelező!");
  } else {
    const datum = new Date(szuldatum);
    const ma = new Date();

    if (isNaN(datum.getTime())) {
      datumHibak.push("Rendes születési dátumot adj meg!");
    } else {
      const kor =
        ma.getFullYear() -
        datum.getFullYear() -
        (ma < new Date(ma.getFullYear(), datum.getMonth(), datum.getDate()) ? 1 : 0);

      if (kor < 0 || kor > 120) {
        datumHibak.push("Rendes születési dátumot adj meg!");
      } else {
        szemely.kor = kor;
        korOK = true;
      }
    }
  }

  if (!korOK && datumHibak.length > 0) {
    showErrors(document.getElementById("szuldatum"), datumHibak);
  }

  //Lakcím 
  let lakcim = document.getElementById("lakcim").value.trim();
  let lakcimOk = false;

  removeErrors(document.getElementById("lakcim"));

  const lakcimMinta = /^\d{4} [A-ZÁÉÍÓÖŐÚÜŰ][a-záéíóöőúüű]+(?: [A-ZÁÉÍÓÖŐÚÜŰ][a-záéíóöőúüű]*)*(?:, [A-Za-zÁÉÍÓÖŐÚÜŰáéíóöőúüű0-9. ]+ \d+\.?)?$/;

  let lakcimhibak = [];
  if (lakcim.length == 0) {
    lakcimhibak.push("A mező kitöltése kötelező!");
  } else if (!lakcimMinta.test(lakcim)) {
    lakcimhibak.push("A lakcím formátuma nem megfelelő! Példa: 9700 Szombathely, Király utca 10.");
  } else {
    lakcimOk = true;
    szemely.lakcim = lakcim;
  }

  if (!lakcimOk && lakcimhibak.length > 0) {
    showErrors(document.getElementById("lakcim"), lakcimhibak);
  }

  //Telefonszám
  let tel = document.getElementById("tel").value.trim();
  removeErrors(document.getElementById("tel"));
  let telOK = false;
  let telHibak = [];
    
  const telMinta = /^\+36 [0-9]{2} [0-9]{3} [0-9]{4}$/;
    
  if (tel.length == 0) {
      telHibak.push("A mező kitöltése kötelező!");
  } else if (!telMinta.test(tel)) {
      telHibak.push("A telefonszám formátuma nem megfelelő! Példa: +36 20 123 4567");
  } else {
      telOK = true;
      szemely.telSzam = tel;
  }
    
  if (!telOK && telHibak.length > 0) {
      showErrors(document.getElementById("tel"), telHibak);
  }

  //Email
  let email = document.getElementById("email").value.trim();
  removeErrors(document.getElementById("email"));
  let emailOK = false;
  let emailHibak = [];
    
  const emailMinta = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
  if (email.length == 0) {
      emailHibak.push("A mező kitöltése kötelező!");
  } else if (!emailMinta.test(email)) {
      emailHibak.push("Az email formátuma nem megfelelő!");
  } else {
      emailOK = true;
      szemely.email = email;
  }
    
  if (!emailOK && emailHibak.length > 0) {
      showErrors(document.getElementById("email"), emailHibak);
  }

  //Felhasználónév
  let felhasznalonev = document.getElementById("felhasznalonev").value.trim();
  removeErrors(document.getElementById("felhasznalonev"));
  let felhasznalonevOK = false;
  let felhasznalonevHibak = [];
    
  if (felhasznalonev.length == 0) {
    felhasznalonevHibak.push("A mező kitöltése kötelező!");
  } else {
    felhasznalonevOK = true;
    szemely.felhasznaloNev = felhasznalonev;
  }
    
  if (!felhasznalonevOK && felhasznalonevHibak.length > 0) {
   showErrors(document.getElementById("felhasznalonev"), felhasznalonevHibak);
  }

  //Jelszó
  let jelszo = document.getElementById("jelszo").value;
  removeErrors(document.getElementById("jelszo"));
  let jelszoOK = false;
  let jelszoHibak = [];
    
  if (jelszo.length == 0) {
    jelszoHibak.push("A mező kitöltése kötelező!");
  } else if (!jelszoErosseg(jelszo)) {
    jelszoHibak.push("A jelszó nem felel meg a feltételeknek!");
  } else {
    jelszoOK = true;
     szemely.jelszo = jelszo;
  }
    
  if (!jelszoOK && jelszoHibak.length > 0) {
     showErrors(document.getElementById("jelszo"), jelszoHibak);
  }

  //Megerősítés
  let jelszomegegyszer = document.getElementById("jelszomegegyszer").value;
  let jelszoElso = document.getElementById("jelszo").value;
  removeErrors(document.getElementById("jelszomegegyszer"));
  let jelszomegegyszerOK = false;
  let jelszomegegyszerHibak = [];
    
  if (jelszomegegyszer.length == 0) {
      jelszomegegyszerHibak.push("A mező kitöltése kötelező!");
  } else if (jelszomegegyszer !== jelszoElso) {
      jelszomegegyszerHibak.push("A jelszavak nem egyeznek!");
  } else {
      jelszomegegyszerOK = true;
  }
    
  if (!jelszomegegyszerOK && jelszomegegyszerHibak.length > 0) {
      showErrors(document.getElementById("jelszomegegyszer"), jelszomegegyszerHibak);
  }
}

function Belepes(){
  let fnev_be = document.getElementById("fnev_be");
  let jelszo_be = document.getElementById("jelszo_be");

  if(fnev_be.value == szemely.felhasznaloNev && jelszo_be.value == szemely.jelszo){
    window.location.href = "main.html?felhasznalo=" + encodeURIComponent(szemely.felhasznaloNev);
  } else {
    alert("Nincs ilyen felhasználónév és jelszó páros!");
    fnev_be.value = "";
    jelszo_be.value = "";
  }
}

document.getElementById("lakcim").addEventListener("focus", function() {
  if (this.value.trim() === "") {
    this.placeholder = "1234 Település, Utca név 10.";
  }
});

document.getElementById("lakcim").addEventListener("blur", function() {
  if (this.value.trim() === "") {
    this.placeholder = "";
  }
});

//Regisztráció
document.getElementById("kesz").addEventListener("click", function() {
    Validalas();
    
    const hibaUzenetek = document.querySelectorAll(".hiba-uzenet");
    const kotelezoMezok = ["veznev", "kernev", "szuldatum", "lakcim", "tel", "email", "felhasznalonev", "jelszo", "jelszomegegyszer"];
    let mindenKitoltve = true;
    
    for (let mezoId of kotelezoMezok) {
        const mezo = document.getElementById(mezoId);
        if (mezo.value.trim() === "") {
            mindenKitoltve = false;
            break;
        }
    }
    
    if (hibaUzenetek.length === 0 && mindenKitoltve) {
        alert("Sikeres regisztráció!");

        for (let mezoId of kotelezoMezok) {
            const mezo = document.getElementById(mezoId);
            mezo.value = "";
            removeErrors(mezo);
        }

        const feltetelekDiv = document.getElementById("jelszo-feltetelek");
        if (feltetelekDiv) {
            feltetelekDiv.style.display = "none";
            feltetelekDiv.querySelectorAll("div").forEach(div => {
                div.style.color = "red";
                div.style.textDecoration = "none";
            });
        }
        
        kontener.classList.remove("regisztracio-mod");
    } else {
        alert("Kérjük, ellenőrizze, hogy mindent helyesen írt be!");
    }
});

document.addEventListener("DOMContentLoaded", function() {
   jelszoFeltetelek();

  document.getElementById("veznev").addEventListener("input", Validalas);
  document.getElementById("kernev").addEventListener("input", Validalas);
  document.getElementById("szuldatum").addEventListener("input", Validalas);
  document.getElementById("lakcim").addEventListener("input", Validalas);
  document.getElementById("tel").addEventListener("input", Validalas);
  document.getElementById("email").addEventListener("input", Validalas);
  document.getElementById("felhasznalonev").addEventListener("input", Validalas);
  document.getElementById("jelszo").addEventListener("input", Validalas);
  document.getElementById("jelszomegegyszer").addEventListener("input", Validalas);

 document.getElementById("jelszo").addEventListener("focus", function() {
    const feltetelekDiv = document.getElementById("jelszo-feltetelek");
    if (feltetelekDiv) {
        feltetelekDiv.style.display = "block";
    }
    jelszoErosseg(this.value);
  });
    
  document.getElementById("jelszo").addEventListener("blur", function() {
    if (jelszoErosseg(this.value)) {
        const feltetelekDiv = document.getElementById("jelszo-feltetelek");
        if (feltetelekDiv) {
            feltetelekDiv.style.display = "none";
        }
    }
  });
});