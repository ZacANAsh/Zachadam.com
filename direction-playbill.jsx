// Playbill v4 — Slate-blue brand palette.
// PAGE is dark slate with warm beige type; ALT sections (Work, About) flip to
// warm beige with charcoal type. Footer is charcoal.

const P = {
  // PAGE (dark slate)
  bg:        "#385860",
  bgInk:     "#e8d8d0",
  bgInkSub:  "rgba(232,216,208,0.62)",
  bgRule:    "rgba(232,216,208,0.22)",

  // ALT SECTIONS (warm beige)
  alt:       "#e8d8d0",
  altInk:    "#283038",
  altInkSub: "rgba(40,48,56,0.62)",
  altRule:   "rgba(40,48,56,0.18)",

  // HARD COLORS
  charcoal:  "#283038",
  light:     "#f8f8f8",

  // ACCENTS
  amber:     "#d88840",   // primary
  peach:     "#e09858",   // secondary
  olive:     "#586040",
  slate:     "#385860"
};

const F = {
  display: "'Archivo', 'Helvetica Neue', sans-serif",
  body:    "'Source Serif 4', Georgia, serif",
  mono:    "'JetBrains Mono', ui-monospace, monospace"
};

// ---------- NAV ----------
function PNav() {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const on = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", on); return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <nav style={{
      position:"sticky", top:0, zIndex:50,
      background: scrolled ? "rgba(56,88,96,0.92)" : "transparent",
      backdropFilter: scrolled ? "blur(10px)" : "none",
      WebkitBackdropFilter: scrolled ? "blur(10px)" : "none",
      borderBottom: scrolled ? `1px solid ${P.bgRule}` : "1px solid transparent",
      transition: "all 240ms ease"
    }}>
      <div style={{ maxWidth:1440, margin:"0 auto", padding:"20px 64px", display:"flex", alignItems:"center", justifyContent:"space-between" }}>
        <a href="#top" style={{ display:"flex", alignItems:"center", textDecoration:"none", opacity: scrolled ? 1 : 0, transition:"opacity 200ms" }}>
          <img src="assets/logo-zachadam.png" alt="Zach Adam"
               style={{ height:16, width:"auto", display:"block", filter:"invert(1) brightness(1.05)" }} />
        </a>
        <div style={{ display:"flex", gap:36, alignItems:"center" }}>
          {window.SITE.navItems.map((n,i) => (
            <a key={i} href={`#${n.toLowerCase()}`} style={{
              fontFamily:F.display, fontSize:12, letterSpacing:".22em", fontWeight:600,
              textTransform:"uppercase", color:P.bgInk, textDecoration:"none"
            }}>{n}</a>
          ))}
        </div>
      </div>
    </nav>
  );
}

// ---------- MASTHEAD (on slate bg) ----------
function PMasthead() {
  const S = window.SITE;
  return (
    <section id="top" style={{ borderBottom:`2px solid ${P.bgRule}`, padding:"24px 64px 64px" }}>
      <div style={{ height:3, background:P.bgInk, marginBottom:48 }}></div>

      {/* Logo — full-width, inverted to light on dark */}
      <img src="assets/logo-zachadam.png" alt="Zach Adam"
           style={{ width:"100%", height:"auto", display:"block", filter:"invert(1) brightness(1.02)" }} />

      {/* Roles row */}
      <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginTop:36,
        fontFamily:F.display, fontSize:18, fontWeight:600, letterSpacing:".12em",
        textTransform:"uppercase", color:P.bgInk }}>
        {S.tagline.map((t,i) => (
          <React.Fragment key={i}>
            <span>{t}</span>
            {i < S.tagline.length-1 && <span style={{ color:P.amber, fontSize:10 }}>●</span>}
          </React.Fragment>
        ))}
      </div>

      {/* Artist statement — editorial spread w/ photo */}
      <div style={{ marginTop:80, paddingTop:36, borderTop:`1px solid ${P.bgRule}` }}>
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"baseline", gap:24 }}>
          <div style={{ fontFamily:F.mono, fontSize:10, letterSpacing:".3em", color:P.amber, textTransform:"uppercase" }}>
            Artist Statement — An Excerpt
          </div>
          <div style={{ flex:1, height:1, background:P.bgInk, opacity:0.25 }}></div>
          <div style={{ fontFamily:F.body, fontStyle:"italic", fontSize:14, color:P.bgInkSub }}>
            by the author
          </div>
        </div>

        <blockquote style={{
          margin:"36px 0 0",
          fontFamily:F.body, fontStyle:"italic", fontWeight:300,
          fontSize:48, lineHeight:1.18, letterSpacing:"-0.015em",
          color:P.bgInk, maxWidth:1180, textWrap:"balance"
        }}>
          “{S.statement}”
        </blockquote>

        <div style={{ marginTop:64, display:"grid", gridTemplateColumns:"1.45fr 1fr", gap:56, alignItems:"start" }}>
          <figure style={{ margin:0 }}>
            <img
              src="assets/zach-shore.jpg"
              alt="Zach Adam on the coast"
              style={{
                width:"100%", aspectRatio:"3/2", objectFit:"cover",
                objectPosition:"center 40%", display:"block",
                border:`1px solid ${P.bgInk}`, boxShadow:`10px 10px 0 ${P.charcoal}`
              }}
            />
            <figcaption style={{ display:"flex", justifyContent:"space-between", marginTop:14,
              fontFamily:F.mono, fontSize:10, letterSpacing:".28em", color:P.bgInkSub, textTransform:"uppercase" }}>
              <span>Fig. I — On the Coast</span>
              <span>Photographed Abroad · MMXXIV</span>
            </figcaption>
          </figure>
          <div style={{ paddingTop:8 }}>
            <p style={{ fontFamily:F.body, fontSize:18, lineHeight:1.65, color:P.bgInkSub, margin:0, textWrap:"pretty" }}>
              {S.statementMore}
            </p>
            <div style={{ marginTop:36, paddingTop:20, borderTop:`1px solid ${P.bgRule}`,
              display:"flex", justifyContent:"space-between", alignItems:"baseline" }}>
              <span style={{ fontFamily:F.display, fontWeight:800, fontSize:15,
                letterSpacing:".22em", textTransform:"uppercase", color:P.bgInk }}>
                — Zach Adam
              </span>
              <span style={{ fontFamily:F.mono, fontSize:10, letterSpacing:".25em", color:P.bgInkSub }}>
                READ FULL STATEMENT ↓
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- SECTION HEADER (themable) ----------
function PSectionHeader({ n, eyebrow, title, sub, anchor, total, dark = false }) {
  const ink    = dark ? P.bgInk    : P.altInk;
  const inkSub = dark ? P.bgInkSub : P.altInkSub;
  const rule   = dark ? P.bgRule   : P.altRule;
  return (
    <div id={anchor} style={{ padding:"120px 64px 28px", borderBottom:`1px solid ${rule}` }}>
      <div style={{ display:"flex", alignItems:"baseline", gap:24, marginBottom:16 }}>
        <span style={{ fontFamily:F.display, fontSize:11, letterSpacing:".35em", color:P.amber, fontWeight:700, textTransform:"uppercase" }}>
          {eyebrow}
        </span>
        <span style={{ flex:1, height:1, background:ink, opacity:0.3 }}></span>
        <span style={{ fontFamily:F.mono, fontSize:10, letterSpacing:".25em", color:inkSub }}>
          {String(n).padStart(2,"0")} / {String(total).padStart(2,"0")}
        </span>
      </div>
      <h2 style={{ fontFamily:F.display, fontWeight:800, fontSize:112, lineHeight:0.9,
        letterSpacing:"-0.035em", margin:0, textWrap:"balance", color: ink }}>
        {title}
      </h2>
      {sub && (
        <p style={{ fontFamily:F.body, fontStyle:"italic", fontSize:20, lineHeight:1.5,
          color:inkSub, margin:"20px 0 0", maxWidth:720, textWrap:"pretty" }}>
          {sub}
        </p>
      )}
    </div>
  );
}

// ---------- WORK (alt section: beige) ----------
function PWork() {
  const S = window.SITE;
  return (
    <section style={{ background:P.alt, color:P.altInk, borderTop:`2px solid ${P.charcoal}`, borderBottom:`2px solid ${P.charcoal}` }}>
      <PSectionHeader
        n={1} total={4} eyebrow="The Work" anchor="work"
        title="The Musicals."
        sub="Two new musicals — both in active development. Open inquiries for licensing, development partnership, and producing."
      />
      <div style={{ padding:"32px 64px 96px" }}>
        {S.works.map((w, i) => {
          const isFeatured = i === 0;
          return (
            <div key={i} style={{
              display:"grid",
              gridTemplateColumns: isFeatured ? "1.05fr 1fr" : "1fr 1.05fr",
              gap:64, padding:"64px 0",
              borderTop: i === 0 ? "none" : `1px solid ${P.altRule}`,
              alignItems:"center"
            }}>
              {isFeatured && w.poster ? (
                <img src={w.poster} alt={w.title} style={{
                  width:"100%", aspectRatio:"1/1", objectFit:"cover", display:"block",
                  border:`1px solid ${P.charcoal}`, boxShadow:`16px 16px 0 ${P.charcoal}`
                }} />
              ) : null}

              <div style={{ order: isFeatured ? 2 : 1 }}>
                <div style={{ fontFamily:F.mono, fontSize:10, letterSpacing:".3em", color:P.amber, marginBottom:14 }}>
                  №&nbsp;{String(i+1).padStart(2,"0")}&nbsp;&nbsp;·&nbsp;&nbsp;{w.kicker.toUpperCase()}
                </div>
                <h3 style={{ fontFamily:F.display, fontWeight:800,
                  fontSize: isFeatured ? 96 : 80, lineHeight:0.9, letterSpacing:"-0.035em",
                  margin:"0 0 28px", textTransform:"uppercase", color:P.altInk }}>
                  {w.title}
                </h3>
                <p style={{ fontFamily:F.body, fontSize: isFeatured ? 20 : 18, lineHeight:1.6,
                  color:P.altInk, margin:0, textWrap:"pretty", maxWidth:560 }}>
                  {w.synopsis}
                </p>
                <div style={{ marginTop:36, paddingTop:24, borderTop:`1px solid ${P.altRule}` }}>
                  <div style={{ fontFamily:F.mono, fontSize:10, letterSpacing:".3em", color:P.altInkSub, marginBottom:14 }}>
                    CREDITS
                  </div>
                  <div style={{ display:"flex", flexDirection:"column", gap:6 }}>
                    {w.meta.map((m, mi) => (
                      <div key={mi} style={{ fontFamily:F.body, fontSize:16, lineHeight:1.4, color:P.altInk }}>{m}</div>
                    ))}
                  </div>
                </div>
                <div style={{ marginTop:32, display:"flex", gap:16, alignItems:"center", flexWrap:"wrap" }}>
                  {w.site ? (
                    <a href={`https://${w.site}`} target="_blank" rel="noreferrer" style={{
                      fontFamily:F.display, fontSize:13, letterSpacing:".22em", fontWeight:700,
                      textTransform:"uppercase", color:P.bgInk, background:P.charcoal,
                      padding:"14px 22px", textDecoration:"none"
                    }}>
                      Visit {w.site} →
                    </a>
                  ) : (
                    <a href={`mailto:${S.contactEmail}?subject=Inquiry%20about%20${encodeURIComponent(w.title)}`} style={{
                      fontFamily:F.display, fontSize:13, letterSpacing:".22em", fontWeight:700,
                      textTransform:"uppercase", color:P.altInk,
                      padding:"14px 22px", border:`1.5px solid ${P.charcoal}`, textDecoration:"none"
                    }}>
                      Inquire about {w.title}
                    </a>
                  )}
                </div>
              </div>

              {/* Voice! poster (right) — light card on beige section */}
              {!isFeatured && w.poster && (
                <div style={{
                  order:2, alignSelf:"stretch", aspectRatio:"1/1",
                  background:P.light, border:`1px solid ${P.charcoal}`,
                  boxShadow:`14px 14px 0 ${P.charcoal}`, padding:24,
                  display:"flex", alignItems:"center", justifyContent:"center"
                }}>
                  <img src={w.poster} alt={w.title} style={{ width:"100%", height:"100%", objectFit:"contain", display:"block" }} />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

// ---------- MUSIC (on slate bg) ----------
function PMusic() {
  const S = window.SITE;
  return (
    <section>
      <PSectionHeader
        dark
        n={2} total={4} eyebrow="The Songs" anchor="music"
        title="On Record."
        sub="Original songs as an artist, plus a catalog of writing and production for others. Music videos below."
      />
      <div style={{ padding:"40px 64px 96px" }}>

        {/* Two Spotify embeds */}
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:36, marginBottom:64 }}>
          {[
            { label: "▶ AS AN ARTIST",                  url: `https://open.spotify.com/embed/artist/${S.spotifyArtist}?utm_source=generator&theme=0`,    open: `https://open.spotify.com/artist/${S.spotifyArtist}`,    caption: "ZACH ADAM · ARTIST" },
            { label: "▶ WRITTEN & PRODUCED FOR OTHERS", url: `https://open.spotify.com/embed/playlist/${S.spotifyPlaylist}?utm_source=generator&theme=0`, open: `https://open.spotify.com/playlist/${S.spotifyPlaylist}`, caption: "SELECT CATALOG · BILLBOARD TOP 20 + MORE" }
          ].map((e, i) => (
            <div key={i}>
              <div style={{ fontFamily:F.mono, fontSize:10, letterSpacing:".3em", color:P.amber, marginBottom:14 }}>
                {e.label}
              </div>
              <div style={{ border:`1.5px solid ${P.bgInk}`, boxShadow:`10px 10px 0 ${P.charcoal}`, background:P.charcoal }}>
                <iframe src={e.url} width="100%" height="380" frameBorder="0"
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        loading="lazy" style={{ display:"block" }}></iframe>
              </div>
              <div style={{ display:"flex", justifyContent:"space-between", marginTop:12,
                fontFamily:F.mono, fontSize:10, letterSpacing:".25em", color:P.bgInkSub }}>
                <span>{e.caption}</span>
                <a href={e.open} target="_blank" rel="noreferrer" style={{ color:P.amber, textDecoration:"none" }}>
                  OPEN IN SPOTIFY ↗
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Music videos */}
        <div style={{ borderTop:`2px solid ${P.bgRule}`, paddingTop:36 }}>
          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"baseline", marginBottom:28 }}>
            <div style={{ fontFamily:F.mono, fontSize:10, letterSpacing:".3em", color:P.amber }}>MUSIC VIDEOS</div>
            <div style={{ fontFamily:F.mono, fontSize:10, letterSpacing:".3em", color:P.bgInkSub }}>WATCH ON YOUTUBE</div>
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:36 }}>
            {S.videos.map((v, i) => (
              <a key={i} href={v.url} target="_blank" rel="noreferrer" style={{ textDecoration:"none", color:"inherit", display:"block" }}>
                <div style={{
                  aspectRatio:"16/9", position:"relative", overflow:"hidden",
                  border:`1px solid ${P.bgInk}`, boxShadow:`8px 8px 0 ${P.charcoal}`, background:"#000"
                }}>
                  <img src={`https://i.ytimg.com/vi/${v.id}/maxresdefault.jpg`} alt={v.title}
                       style={{ width:"100%", height:"100%", objectFit:"cover", display:"block" }}
                       onError={(e) => { e.target.src = `https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`; }} />
                  <div style={{ position:"absolute", inset:0, background:"linear-gradient(180deg, transparent 50%, rgba(0,0,0,0.85))" }}></div>
                  <div style={{ position:"absolute", top:"50%", left:"50%", transform:"translate(-50%,-50%)",
                    width:72, height:72, borderRadius:36, background:"rgba(0,0,0,0.65)",
                    border:`2px solid ${P.bgInk}`, display:"flex", alignItems:"center", justifyContent:"center",
                    color:P.bgInk, fontSize:22 }}>▶</div>
                  <div style={{ position:"absolute", bottom:20, left:20, right:20, color:P.bgInk }}>
                    <div style={{ fontFamily:F.mono, fontSize:9, letterSpacing:".3em", color:P.peach, marginBottom:6 }}>
                      {v.kind.toUpperCase()}
                    </div>
                    <div style={{ fontFamily:F.display, fontWeight:800, fontSize:28, lineHeight:1,
                      letterSpacing:"-0.02em", textTransform:"uppercase" }}>
                      {v.title}
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- ABOUT (alt section: beige) ----------
function PAbout() {
  const S = window.SITE;
  return (
    <section style={{ background:P.alt, color:P.altInk, borderTop:`2px solid ${P.charcoal}`, borderBottom:`2px solid ${P.charcoal}` }}>
      <PSectionHeader n={3} total={4} eyebrow="The Author" anchor="about" title="About." sub={null} />
      <div style={{ padding:"48px 64px 96px", display:"grid", gridTemplateColumns:"300px 1fr 1fr", gap:56, alignItems:"start" }}>
        <div>
          <div style={{ aspectRatio:"3/4", backgroundImage:"url(assets/zach-portrait.png)",
            backgroundSize:"cover", backgroundPosition:"center 18%", filter:"sepia(28%) contrast(102%)",
            border:`1px solid ${P.charcoal}`, boxShadow:`10px 10px 0 ${P.charcoal}` }}></div>
          <div style={{ fontFamily:F.mono, fontSize:10, letterSpacing:".25em", color:P.altInkSub, marginTop:14, textAlign:"center" }}>
            ZACH ADAM
          </div>
        </div>
        <div>
          {S.bio.paragraphs.map((p, i) => (
            <p key={i} style={{
              fontFamily:F.body, fontSize: i===0 ? 22 : 17, lineHeight:1.6,
              color: i===0 ? P.altInk : P.altInkSub,
              margin: i===0 ? "0 0 20px" : "0 0 16px", textWrap:"pretty"
            }} dangerouslySetInnerHTML={{ __html: p }} />
          ))}
        </div>
        <div>
          <div style={{ fontFamily:F.mono, fontSize:10, letterSpacing:".3em", color:P.amber, paddingBottom:14, borderBottom:`2px solid ${P.charcoal}` }}>
            AT A GLANCE
          </div>
          {S.bio.facts.map((f, i) => (
            <div key={i} style={{ display:"flex", justifyContent:"space-between", alignItems:"baseline",
              padding:"16px 0", borderBottom:`1px dotted ${P.altRule}`, gap:16 }}>
              <span style={{ fontFamily:F.mono, fontSize:10, letterSpacing:".25em", color:P.altInkSub, whiteSpace:"nowrap" }}>
                {f[0].toUpperCase()}
              </span>
              <span style={{ fontFamily:F.display, fontWeight:700, fontSize:16, textAlign:"right", textWrap:"balance", color:P.altInk }}>
                {f[1]}
              </span>
            </div>
          ))}
          <div style={{ marginTop:28, display:"flex", flexDirection:"column", gap:12 }}>
            {S.projects.map((pr, i) => (
              <a key={i} href={`https://${pr.url}`} target="_blank" rel="noreferrer" style={{
                textDecoration:"none", color:P.altInk, padding:"14px 16px",
                border:`1.5px solid ${P.charcoal}`,
                display:"flex", justifyContent:"space-between", alignItems:"center", gap:12
              }}>
                <span>
                  <div style={{ fontFamily:F.display, fontWeight:800, fontSize:15, textTransform:"uppercase", letterSpacing:"-0.005em" }}>
                    {pr.label}
                  </div>
                  <div style={{ fontFamily:F.body, fontStyle:"italic", fontSize:13, color:P.altInkSub, marginTop:2 }}>
                    {pr.note}
                  </div>
                </span>
                <span style={{ fontFamily:F.mono, fontSize:9, letterSpacing:".22em", color:P.amber, whiteSpace:"nowrap" }}>↗</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- CONTACT (on slate bg) ----------
function PContact() {
  const S = window.SITE;
  return (
    <section>
      <PSectionHeader
        dark
        n={4} total={4} eyebrow="Get In Touch" anchor="contact"
        title="Contact."
        sub="For licensing, development partnership, press, or to say hello."
      />
      <div style={{ padding:"56px 64px 96px", display:"grid", gridTemplateColumns:"1.4fr 1fr", gap:64, alignItems:"center" }}>
        <div>
          <div style={{ fontFamily:F.mono, fontSize:10, letterSpacing:".3em", color:P.amber, marginBottom:18 }}>
            WRITE TO ME
          </div>
          <a
            href={`mailto:${S.contactEmail}?subject=${encodeURIComponent("Hello from zachadam.com")}`}
            style={{
              display:"inline-flex", alignItems:"center", gap:20,
              padding:"28px 36px", background:P.charcoal, color:P.bgInk,
              border:`2px solid ${P.charcoal}`, boxShadow:`14px 14px 0 ${P.amber}`,
              fontFamily:F.display, fontSize:28, letterSpacing:"-0.01em",
              fontWeight:800, textTransform:"uppercase", textDecoration:"none"
            }}
          >
            Send me an email
            <span style={{ fontFamily:F.display, fontSize:32, lineHeight:1 }}>→</span>
          </a>
          <p style={{ fontFamily:F.body, fontStyle:"italic", fontSize:17, color:P.bgInkSub, lineHeight:1.5, marginTop:24, maxWidth:520 }}>
            Opens your email client. I read everything; I'll write back as soon as I can.
          </p>
        </div>

        <div>
          <div style={{ fontFamily:F.mono, fontSize:10, letterSpacing:".3em", color:P.amber, paddingBottom:14, borderBottom:`2px solid ${P.bgInk}` }}>
            ELSEWHERE
          </div>
          <div style={{ marginTop:22, display:"flex", flexDirection:"column", gap:14 }}>
            {S.socials.map((s, i) => (
              <a key={i} href={s.url} target="_blank" rel="noreferrer" style={{
                display:"flex", justifyContent:"space-between", alignItems:"baseline",
                fontFamily:F.display, fontWeight:700, fontSize:20,
                color:P.bgInk, textDecoration:"none",
                paddingBottom:12, borderBottom:`1px dotted ${P.bgRule}`,
                textTransform:"uppercase"
              }}>
                <span>{s.label}</span>
                <span style={{ fontFamily:F.mono, fontSize:11, letterSpacing:".25em", color:P.amber }}>↗</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- FOOTER (charcoal) ----------
function PFooter() {
  return (
    <footer style={{ background:P.charcoal, color:P.bgInk, padding:"64px 64px 32px", borderTop:`4px solid ${P.amber}` }}>
      <img src="assets/logo-zachadam.png" alt="Zach Adam"
           style={{ width:"100%", height:"auto", display:"block", filter:"invert(1) brightness(1.02)" }} />
      <div style={{ display:"flex", justifyContent:"space-between", marginTop:48, fontFamily:F.mono, fontSize:10, letterSpacing:".3em", color:"rgba(232,216,208,0.6)" }}>
        <span>© MMXXVI · ZACHADAM.COM</span>
        <span>NASHVILLE · NEW YORK</span>
        <a href="#top" style={{ color:P.peach, textDecoration:"none" }}>BACK TO TOP ↑</a>
      </div>
    </footer>
  );
}

function DirectionPlaybill() {
  return (
    <div style={{ background:P.bg, color:P.bgInk, fontFamily:F.body, minHeight:"100vh" }}>
      <PNav />
      <div style={{ maxWidth:1440, margin:"0 auto", background:P.bg }}>
        <PMasthead />
        <PWork />
        <PMusic />
        <PAbout />
        <PContact />
        <PFooter />
      </div>
    </div>
  );
}

window.DirectionPlaybill = DirectionPlaybill;
