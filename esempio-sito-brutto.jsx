import { useState } from "react";

export default function BadWebsite() {
  return (
    <div style={{ margin: 0, padding: 0, fontFamily: "Times New Roman, serif", background: "#fff" }}>
      
      {/* NAVBAR ORRIBILE */}
      <nav style={{ background: "linear-gradient(90deg, #1a1a8a, #4444cc)", padding: "8px 16px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap" }}>
        <div style={{ color: "#ffff00", fontSize: 28, fontWeight: "bold", fontFamily: "Comic Sans MS, cursive", textShadow: "2px 2px #000" }}>
          ★ SuperBusiness Pro ★
        </div>
        <div style={{ display: "flex", gap: 4, flexWrap: "wrap" }}>
          {["HOME", "CHI SIAMO", "SERVIZI", "PRODOTTI", "GALLERY", "BLOG", "PARTNER", "TESTIMONIALS", "FAQ", "CONTATTI", "LAVORA CON NOI"].map(item => (
            <span key={item} style={{ color: "#fff", fontSize: 10, padding: "4px 6px", textDecoration: "underline", cursor: "pointer", fontFamily: "Arial" }}>{item}</span>
          ))}
        </div>
      </nav>

      {/* BANNER CHE NON DICE NIENTE */}
      <div style={{ background: "linear-gradient(135deg, #000066, #000033)", padding: "60px 20px", textAlign: "center" }}>
        <div style={{ color: "#ffff00", fontSize: 14, textTransform: "uppercase", letterSpacing: 8, marginBottom: 12, fontFamily: "Arial" }}>★★★ BENVENUTI NEL NOSTRO SITO WEB ★★★</div>
        <h1 style={{ color: "#fff", fontSize: "clamp(24px, 5vw, 42px)", fontFamily: "Times New Roman, serif", fontWeight: "normal", lineHeight: 1.6, maxWidth: 800, margin: "0 auto" }}>
          Siamo un'azienda leader nel settore che offre soluzioni innovative e personalizzate per soddisfare ogni vostra esigenza con professionalità e competenza dal 1997
        </h1>
        <div style={{ marginTop: 30, display: "flex", gap: 8, justifyContent: "center", flexWrap: "wrap" }}>
          <button style={{ background: "#ff0000", color: "#fff", border: "3px solid #ffff00", padding: "12px 20px", fontSize: 11, fontWeight: "bold", cursor: "pointer", fontFamily: "Arial", textTransform: "uppercase", borderRadius: 0 }}>⚡ SCOPRI DI PIÙ ⚡</button>
          <button style={{ background: "#009900", color: "#fff", border: "3px solid #ffff00", padding: "12px 20px", fontSize: 11, fontWeight: "bold", cursor: "pointer", fontFamily: "Arial", textTransform: "uppercase", borderRadius: 0 }}>📞 CONTATTACI ORA 📞</button>
          <button style={{ background: "#ff6600", color: "#fff", border: "3px solid #ffff00", padding: "12px 20px", fontSize: 11, fontWeight: "bold", cursor: "pointer", fontFamily: "Arial", textTransform: "uppercase", borderRadius: 0 }}>📧 ISCRIVITI ALLA NEWSLETTER 📧</button>
        </div>
      </div>

      {/* BLOCCO ENORME DI TESTO */}
      <div style={{ padding: "40px 20px", maxWidth: 900, margin: "0 auto" }}>
        <h2 style={{ color: "#000066", fontSize: 28, fontFamily: "Times New Roman, serif", textAlign: "center", textDecoration: "underline", marginBottom: 20 }}>Chi Siamo</h2>
        <p style={{ fontSize: 13, lineHeight: 1.4, color: "#333", fontFamily: "Arial", textAlign: "justify" }}>
          La nostra azienda è stata fondata nel 1997 con l'obiettivo di fornire ai nostri clienti soluzioni di alta qualità nel campo dei servizi professionali. Nel corso degli anni abbiamo sviluppato competenze specifiche che ci hanno permesso di affermarci come punto di riferimento nel nostro settore. Il nostro team è composto da professionisti altamente qualificati con anni di esperienza alle spalle, che lavorano ogni giorno per garantire la massima soddisfazione dei nostri clienti. Crediamo fermamente che la qualità del servizio sia il fondamento di ogni relazione commerciale di successo, e per questo motivo investiamo costantemente nella formazione del nostro personale e nell'aggiornamento delle nostre procedure operative. La nostra missione è quella di superare le aspettative dei nostri clienti, offrendo soluzioni innovative e personalizzate che rispondano alle loro specifiche esigenze. Siamo convinti che ogni cliente sia unico e meriti un trattamento dedicato, per questo motivo il nostro approccio è sempre orientato all'ascolto e alla comprensione delle necessità individuali. Nel corso della nostra storia abbiamo servito migliaia di clienti, costruendo relazioni durature basate sulla fiducia e sulla trasparenza. Il nostro impegno verso l'eccellenza ci ha permesso di ottenere numerosi riconoscimenti e certificazioni che attestano la qualità del nostro lavoro. Continuiamo a crescere e ad innovare, sempre con lo sguardo rivolto al futuro e con la determinazione di rimanere all'avanguardia nel nostro campo. Grazie per aver visitato il nostro sito web, speriamo di potervi annoverare presto tra i nostri stimati clienti.
        </p>
      </div>

      {/* SERVIZI CONFUSI */}
      <div style={{ background: "#f0f0f0", padding: "40px 20px" }}>
        <h2 style={{ color: "#000066", fontSize: 28, fontFamily: "Times New Roman, serif", textAlign: "center", textDecoration: "underline", marginBottom: 30 }}>I Nostri Servizi</h2>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          {[
            "Consulenza strategica personalizzata per il vostro business",
            "Sviluppo di soluzioni innovative e all'avanguardia",
            "Supporto tecnico professionale 24/7",
            "Formazione e aggiornamento continuo del personale",
            "Gestione completa dei progetti dall'inizio alla fine",
            "Analisi approfondita dei dati e reportistica dettagliata",
            "Ottimizzazione dei processi aziendali per massimizzare l'efficienza",
            "Servizio clienti dedicato con personale qualificato"
          ].map((s, i) => (
            <div key={i} style={{ padding: "8px 0", borderBottom: "1px dashed #ccc", fontSize: 13, color: "#333", fontFamily: "Arial", display: "flex", gap: 8 }}>
              <span style={{ color: "#ff0000" }}>✓</span> {s}
            </div>
          ))}
        </div>
      </div>

      {/* COUNTER INUTILE CON NUMERI GONFIATI */}
      <div style={{ background: "#000066", padding: "40px 20px", display: "flex", justifyContent: "center", gap: 40, flexWrap: "wrap" }}>
        {[["1.000.000+", "VISITE AL SITO"], ["50.000+", "CLIENTI SODDISFATTI"], ["99.9%", "TASSO DI SODDISFAZIONE"], ["24/7", "ASSISTENZA"]].map(([n, l]) => (
          <div key={l} style={{ textAlign: "center" }}>
            <div style={{ color: "#ffff00", fontSize: 32, fontWeight: "bold", fontFamily: "Arial" }}>{n}</div>
            <div style={{ color: "#fff", fontSize: 10, fontFamily: "Arial", letterSpacing: 2, marginTop: 4 }}>{l}</div>
          </div>
        ))}
      </div>

      {/* CAROUSEL PLACEHOLDER - IMMAGINE STOCK */}
      <div style={{ padding: "40px 20px", textAlign: "center" }}>
        <h2 style={{ color: "#000066", fontSize: 28, fontFamily: "Times New Roman, serif", textDecoration: "underline", marginBottom: 20 }}>Gallery</h2>
        <div style={{ display: "flex", gap: 8, justifyContent: "center", flexWrap: "wrap" }}>
          {[1,2,3,4,5,6].map(i => (
            <div key={i} style={{ width: 140, height: 100, background: "#ddd", borderRadius: 0, border: "3px solid #000066", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, color: "#999", fontFamily: "Arial" }}>[Foto Stock {i}]</div>
          ))}
        </div>
        <div style={{ marginTop: 12, display: "flex", gap: 4, justifyContent: "center" }}>
          {[1,2,3,4,5,6].map(i => (
            <div key={i} style={{ width: 8, height: 8, borderRadius: "50%", background: i === 1 ? "#000066" : "#ccc" }} />
          ))}
        </div>
      </div>

      {/* POP-UP FINTO SOVRAPPOSTO */}
      <div style={{ position: "relative" }}>
        <div style={{ background: "#fff3cd", border: "2px solid #ff6600", padding: "16px 20px", margin: "0 20px 20px", borderRadius: 0, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
          <div>
            <div style={{ fontSize: 14, fontWeight: "bold", color: "#ff0000", fontFamily: "Arial" }}>🔥 OFFERTA LIMITATA!!! 🔥</div>
            <div style={{ fontSize: 12, color: "#333", fontFamily: "Arial" }}>Iscriviti alla nostra newsletter e ricevi uno SCONTO ESCLUSIVO del 10%!!!</div>
          </div>
          <div style={{ display: "flex", gap: 4 }}>
            <input placeholder="La tua email..." style={{ padding: "8px 12px", border: "1px solid #ccc", fontSize: 11, fontFamily: "Arial", width: 180 }} />
            <button style={{ background: "#ff0000", color: "#fff", border: "none", padding: "8px 16px", fontSize: 11, fontWeight: "bold", cursor: "pointer", fontFamily: "Arial" }}>ISCRIVITI ORA!!!</button>
          </div>
        </div>
      </div>

      {/* TESTIMONIALS FINTI */}
      <div style={{ background: "#f8f8f8", padding: "40px 20px" }}>
        <h2 style={{ color: "#000066", fontSize: 28, fontFamily: "Times New Roman, serif", textAlign: "center", textDecoration: "underline", marginBottom: 20 }}>Cosa Dicono di Noi</h2>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          {[
            { n: "Mario R.", t: "Ottimo servizio, molto professionali. Consigliato!" },
            { n: "Laura B.", t: "Azienda seria e affidabile. Molto soddisfatta." },
            { n: "Giuseppe M.", t: "Personale competente e disponibile. Bravi!" },
          ].map((r, i) => (
            <div key={i} style={{ padding: "16px 0", borderBottom: "1px dashed #ddd" }}>
              <div style={{ fontSize: 13, color: "#333", fontFamily: "Arial", fontStyle: "italic" }}>"{r.t}"</div>
              <div style={{ fontSize: 12, color: "#666", fontFamily: "Arial", marginTop: 4 }}>— {r.n} ★★★★★</div>
            </div>
          ))}
        </div>
      </div>

      {/* FOOTER CAOTICO */}
      <footer style={{ background: "#000033", padding: "40px 20px", color: "#fff", fontFamily: "Arial" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", display: "flex", flexWrap: "wrap", gap: 40, justifyContent: "space-between" }}>
          <div>
            <div style={{ color: "#ffff00", fontWeight: "bold", fontSize: 14, marginBottom: 12, fontFamily: "Comic Sans MS, cursive" }}>★ SuperBusiness Pro ★</div>
            <div style={{ fontSize: 11, color: "#aaa", lineHeight: 1.8 }}>
              Via Roma 123, 00100 Roma<br />
              P.IVA: 12345678901<br />
              Tel: +39 06 1234567<br />
              Fax: +39 06 7654321<br />
              Email: info@superbusinesspro.it<br />
              PEC: superbusinesspro@pec.it
            </div>
          </div>
          <div>
            <div style={{ fontWeight: "bold", fontSize: 12, marginBottom: 12, color: "#ffff00" }}>LINK UTILI</div>
            {["Home", "Chi Siamo", "Servizi", "Prodotti", "Blog", "FAQ", "Privacy Policy", "Cookie Policy", "Termini e Condizioni", "Sitemap", "Lavora con noi", "Area Riservata"].map(l => (
              <div key={l} style={{ fontSize: 10, color: "#aaa", padding: "3px 0", textDecoration: "underline", cursor: "pointer" }}>{l}</div>
            ))}
          </div>
          <div>
            <div style={{ fontWeight: "bold", fontSize: 12, marginBottom: 12, color: "#ffff00" }}>SEGUICI</div>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {["Facebook", "Instagram", "Twitter", "LinkedIn", "YouTube", "TikTok", "Pinterest"].map(s => (
                <span key={s} style={{ fontSize: 9, color: "#aaa", border: "1px solid #444", padding: "4px 8px" }}>{s}</span>
              ))}
            </div>
            <div style={{ marginTop: 16, fontSize: 10, color: "#aaa" }}>
              <div style={{ marginBottom: 4, fontWeight: "bold", color: "#ffff00" }}>NEWSLETTER</div>
              <input placeholder="Email..." style={{ padding: "6px", fontSize: 10, width: 140, background: "#111", border: "1px solid #444", color: "#fff" }} />
              <button style={{ padding: "6px 10px", fontSize: 10, background: "#ff0000", color: "#fff", border: "none", cursor: "pointer", marginLeft: 4 }}>OK</button>
            </div>
          </div>
        </div>
        <div style={{ textAlign: "center", marginTop: 30, paddingTop: 20, borderTop: "1px solid #222", fontSize: 9, color: "#555" }}>
          Copyright © 2024 SuperBusiness Pro S.r.l. — Tutti i diritti riservati — P.IVA 12345678901 — REA RM-1234567 — Cap. Soc. €10.000 i.v. — Sito realizzato da WebMaster Giovanni
        </div>
      </footer>
    </div>
  );
}
