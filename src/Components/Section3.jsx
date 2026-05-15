import { useState } from "react";

const shoeImages = {
  MEN: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1000&q=85",
  WOMEN: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=1000&q=85",
  "KID'S": "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=1000&q=85",
};

/* ── Section 1: Your Go-To Jeans ── */
function Section1() {
  return (
    <section className="flex w-full" style={{ minHeight: "220vh" }}>
      {/* Sticky Left */}
      <div
        className="sticky top-0 h-screen flex flex-col justify-center"
        style={{ width: "43%", paddingLeft: "6%", paddingRight: "4%" }}
      >
        <p
          className="text-xs font-semibold tracking-widest mb-5"
          style={{ color: "#7c4a00", letterSpacing: "0.18em" }}
        >
          EVERYDAY DENIM, ELEVATED
        </p>
        <h2
          className="font-black leading-none mb-10"
          style={{ fontSize: "clamp(2.6rem,5vw,4.2rem)", color: "#111" }}
        >
          Your Go-To Jeans
        </h2>
        <button
          className="text-white text-xs font-bold tracking-widest px-8 py-4 w-fit hover:opacity-90 transition-opacity"
          style={{ backgroundColor: "#F5A623", letterSpacing: "0.15em" }}
        >
          EXPLORE NOW
        </button>
      </div>

      {/* Scrolling Right Images */}
      <div
        className="flex flex-col gap-6 py-20"
        style={{ width: "57%", paddingRight: "3%" }}
      >
        <div className="rounded-2xl overflow-hidden" style={{ height: "90vh" }}>
          <img
            src="https://images.unsplash.com/photo-1542272604-787c3835535d?w=1000&q=85"
            alt="jeans"
            className="w-full h-full object-cover"
          />
        </div>
        <div
          className="rounded-2xl overflow-hidden"
          style={{ height: "90vh", background: "#111" }}
        >
          <img
            src="sect3.jpeg"
            alt="outfit"
            className="w-full h-full object-cover opacity-90"
          />
        </div>
      </div>
    </section>
  );
}

/* ── Section 2: Contrast Panel Tee ── */
function Section2() {
  return (
    <section className="flex w-full" style={{ minHeight: "160vh" }}>
      {/* Sticky Left */}
      <div
        className="sticky top-0 h-screen flex flex-col justify-center"
        style={{ width: "43%", paddingLeft: "6%", paddingRight: "4%" }}
      >
        <p
          className="text-xs font-semibold tracking-widest mb-5"
          style={{ color: "#888", letterSpacing: "0.18em" }}
        >
          EAST WEST
        </p>
        <h2
          className="font-black leading-tight mb-10"
          style={{ fontSize: "clamp(2.2rem,4vw,3.5rem)", color: "#111" }}
        >
          Contrast Panel Short Sleeve Tee Shirt
        </h2>
        <button
          className="text-white text-sm font-bold tracking-widest px-8 py-4 w-fit hover:opacity-90 transition-opacity"
          style={{ backgroundColor: "#F5A623", letterSpacing: "0.1em" }}
        >
          RS.999
        </button>
      </div>

      {/* Scrolling Right Image */}
      <div
        className="flex flex-col gap-6 py-20"
        style={{ width: "57%", paddingRight: "3%" }}
      >
        <div
          className="rounded-2xl overflow-hidden"
          style={{ height: "90vh", background: "#0a0a0a" }}
        >
          <img
            src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=1000&q=85"
            alt="tee shirt"
            className="w-full h-full object-cover object-top"
          />
        </div>
      </div>
    </section>
  );
}

/* ── Section 3: THE SOLE EDIT ── */
function Section3() {
  const [active, setActive] = useState("MEN");
  const [fading, setFading] = useState(false);

  const switchCategory = (cat) => {
    if (cat === active) return;
    setFading(true);
    setTimeout(() => {
      setActive(cat);
      setFading(false);
    }, 220);
  };

  return (
    <section className="flex w-full" style={{ minHeight: "160vh" }}>
      {/* Sticky Left */}
      <div
        className="sticky top-0 h-screen flex flex-col justify-center"
        style={{ width: "43%", paddingLeft: "6%", paddingRight: "4%" }}
      >
        <h2
          className="font-black uppercase leading-none mb-6"
          style={{ fontSize: "clamp(2.8rem,5.5vw,5rem)", color: "#111", letterSpacing: "-0.01em" }}
        >
          THE SOLE EDIT
        </h2>
        <p
          className="text-sm leading-relaxed mb-10"
          style={{ color: "#888", maxWidth: "300px" }}
        >
          Every step starts here handpicked shoes for every budget, style, and occasion.
        </p>

        {/* Category Tabs */}
        <div className="flex flex-col gap-5">
          {["MEN", "WOMEN", "KID'S"].map((cat) => {
            const isActive = cat === active;
            return (
              <button
                key={cat}
                onClick={() => switchCategory(cat)}
                className="text-left uppercase transition-all duration-300 hover:text-black"
                style={{
                  fontSize: isActive ? "clamp(1.8rem,3vw,2.6rem)" : "clamp(1.4rem,2.4vw,2rem)",
                  color: isActive ? "#111" : "#C8C8C8",
                  fontWeight: isActive ? 800 : 700,
                  letterSpacing: "0.05em",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: 0,
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* Scrolling Right Image */}
      <div
        className="flex flex-col py-20"
        style={{ width: "57%", paddingRight: "3%" }}
      >
        <div
          className="rounded-2xl overflow-hidden"
          style={{ height: "90vh", background: "#3d6b3d" }}
        >
          <img
            key={active}
            src={shoeImages[active]}
            alt={active}
            className="w-full h-full object-cover transition-opacity duration-300"
            style={{ opacity: fading ? 0 : 1 }}
          />
        </div>
      </div>
    </section>
  );
}

/* ── Main Export ── */
const SoleEditSection = () => {
  return (
    <>
      <Section1 />
      <Section2 />
      <Section3 />
    </>
  );
};

export default SoleEditSection;