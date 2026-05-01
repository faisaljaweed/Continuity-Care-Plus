import React, { useEffect, useMemo, useRef, useState } from "react";

const IMG_PATH = "/public/network";
const ORBIT_SPEED = "64s";

type OrbitNode = {
  id: string;
  label: string;
  logo: string;
  size: number;
  ring: 1 | 2 | 3 | 4;
  angle: number;
  cardTitle: string;
  cardText: string;
};

const orbitNodes: OrbitNode[] = [
  // ---------------- RING 1 (PLUS +) ----------------
  {
    id: "r1-top",
    label: "NDIS",
    logo: `${IMG_PATH}/ndis.png`,
    size: 102,
    ring: 1,
    angle: -90,
    cardTitle: "NDIS / Funding",
    cardText:
      "We help you access funding through NDIS and other programs based on your needs. Our team guides you through the process so you can receive the right support without confusion.",
  },
  {
    id: "r1-right",
    label: "Community Organisations",
    logo: `${IMG_PATH}/cbo-care.png`,
    size: 102,
    ring: 1,
    angle: 0,
    cardTitle: "Community Organisations (CBO)",
    cardText:
      "We partner with local organisations to provide community-based support and services. This ensures you stay connected and receive help beyond just clinical care.",
  },
  {
    id: "r1-bottom",
    label: "GP Care",
    logo: `${IMG_PATH}/gp-care.png`,
    size: 102,
    ring: 1,
    angle: 90,
    cardTitle: "Healthcare Providers (GP, PHN)",
    cardText:
      "We collaborate with doctors and healthcare networks to ensure your medical needs are aligned with your care plan. This helps deliver better and more coordinated outcomes.",
  },
  {
    id: "r1-left",
    label: "PHN Western NSW",
    logo: `${IMG_PATH}/phn.png`,
    size: 102,
    ring: 1,
    angle: 180,
    cardTitle: "Healthcare Providers (GP, PHN)",
    cardText:
      "Healthcare partners help coordinate support, referrals, and community care pathways so your support remains consistent and easy to manage.",
  },

  // ---------------- RING 2 (MULTIPLY X) ----------------
  {
    id: "r2-top-right",
    label: "Aged Care Quality",
    logo: `${IMG_PATH}/aged-care-quality.png`,
    size: 82,
    ring: 2,
    angle: -45,
    cardTitle: "Quality & Compliance",
    cardText:
      "Quality partners help ensure your care is safe, reliable, compliant, and focused on better outcomes for your daily life.",
  },
  {
    id: "r2-bottom-right",
    label: "Support Provider",
    logo: `${IMG_PATH}/support-provider.png`,
    size: 82,
    ring: 2,
    angle: 45,
    cardTitle: "Support Providers",
    cardText:
      "Support providers deliver day-to-day assistance around your goals, independence, and lifestyle needs.",
  },
  {
    id: "r2-bottom-left",
    label: "Continuity Care",
    logo: `${IMG_PATH}/continuity-small.png`,
    size: 82,
    ring: 2,
    angle: 135,
    cardTitle: "Continuity Care",
    cardText:
      "Continuity Care brings your support network together so you can access help with clarity, confidence, and less stress.",
  },
  {
    id: "r2-top-left",
    label: "Community Care",
    logo: `${IMG_PATH}/community-care.png`,
    size: 82,
    ring: 2,
    angle: 225,
    cardTitle: "Community Services",
    cardText:
      "Community services help you stay connected, active, and supported beyond your home care plan.",
  },

  // ---------------- RING 3 (PLUS +) ----------------
  {
    id: "r3-top",
    label: "Care Partner",
    logo: `${IMG_PATH}/care-partner.png`,
    size: 66,
    ring: 3,
    angle: -90,
    cardTitle: "Care Partners",
    cardText:
      "Care partners help connect daily support with your personal goals, making your care journey more practical, comfortable, and connected.",
  },
  {
    id: "r3-right",
    label: "Home Care",
    logo: `${IMG_PATH}/home-care.png`,
    size: 66,
    ring: 3,
    angle: 0,
    cardTitle: "In-Home Support",
    cardText:
      "In-home support helps with practical daily tasks, companionship, and care routines in a comfortable environment.",
  },
  {
    id: "r3-bottom",
    label: "Nursing Care",
    logo: `${IMG_PATH}/nursing-care.png`,
    size: 66,
    ring: 3,
    angle: 90,
    cardTitle: "Nursing Care",
    cardText:
      "Nursing care connects clinical support with your broader care plan so health needs are managed smoothly.",
  },
  {
    id: "r3-left",
    label: "Disability Support",
    logo: `${IMG_PATH}/disability-support.png`,
    size: 66,
    ring: 3,
    angle: 180,
    cardTitle: "Disability Support",
    cardText:
      "Disability support services help you maintain independence, achieve your goals, and receive the right day-to-day assistance.",
  },

  // ---------------- RING 4 (MULTIPLY X) ----------------
  {
    id: "r4-top-right",
    label: "Therapy Care",
    logo: `${IMG_PATH}/therapy-care.png`,
    size: 50,
    ring: 4,
    angle: -45,
    cardTitle: "Therapy Services",
    cardText:
      "Therapy services help improve wellbeing, mobility, function, and independence as part of a coordinated care plan.",
  },
  {
    id: "r4-bottom-right",
    label: "Plan Management",
    logo: `${IMG_PATH}/plan-management.png`,
    size: 50,
    ring: 4,
    angle: 45,
    cardTitle: "Plan Management",
    cardText:
      "Plan management support helps organise your funding, invoices, and services so your care remains simple and stress-free.",
  },
  {
    id: "r4-bottom-left",
    label: "Transport Care",
    logo: `${IMG_PATH}/transport-care.png`,
    size: 50,
    ring: 4,
    angle: 135,
    cardTitle: "Transport Support",
    cardText:
      "Transport support helps you attend appointments, access the community, and stay connected to the services you need.",
  },
  {
    id: "r4-top-left",
    label: "Respite Care",
    logo: `${IMG_PATH}/respite-care.png`,
    size: 50,
    ring: 4,
    angle: 225,
    cardTitle: "Respite Care",
    cardText:
      "Respite care offers short-term support and relief for families while ensuring quality care continues smoothly.",
  },
];

const defaultCards = [
  {
    title: "NDIS / Funding",
    text: "We help you access funding through NDIS and other programs based on your needs. Our team guides you through the process so you can receive the right support without confusion.",
  },
  {
    title: "Healthcare Providers (GP, PHN)",
    text: "We collaborate with doctors and healthcare networks to ensure your medical needs are aligned with your care plan. This helps deliver better and more coordinated outcomes.",
  },
  {
    title: "Community Organisations (CBO)",
    text: "We partner with local organisations to provide community-based support and services. This ensures you stay connected and receive help beyond just clinical care.",
  },
  {
    title: "Continuity Care",
    text: "We act as the central point, connecting all services and support around you. Our role is to simplify your journey and ensure everything works together seamlessly.",
  },
];

function getRingRadius(ring: 1 | 2 | 3 | 4) {
  if (ring === 1) return 310;
  if (ring === 2) return 245;
  if (ring === 3) return 180;
  return 115;
}

function getNodePosition(ring: 1 | 2 | 3 | 4, angle: number) {
  const radius = getRingRadius(ring);
  const radian = (angle * Math.PI) / 180;

  return {
    x: Math.cos(radian) * radius,
    y: Math.sin(radian) * radius,
  };
}

export default function CareNetworkSection() {
  const [visible, setVisible] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  const activeNode = useMemo(
    () => orbitNodes.find((node) => node.id === activeId) || null,
    [activeId],
  );

  const cards = activeNode
    ? [
        {
          title: activeNode.cardTitle,
          text: activeNode.cardText,
        },
        ...defaultCards.filter((card) => card.title !== activeNode.cardTitle),
      ].slice(0, 4)
    : defaultCards;

  const ring1Nodes = orbitNodes.filter((node) => node.ring === 1);
  const ring2Nodes = orbitNodes.filter((node) => node.ring === 2);
  const ring3Nodes = orbitNodes.filter((node) => node.ring === 3);
  const ring4Nodes = orbitNodes.filter((node) => node.ring === 4);

  const renderNodes = (nodes: OrbitNode[]) =>
    nodes.map((node) => {
      const position = getNodePosition(node.ring, node.angle);

      return (
        <button
          key={node.id}
          type="button"
          className={`orbit-node ${activeId === node.id ? "active" : ""}`}
          style={
            {
              "--node-x": `${position.x}px`,
              "--node-y": `${position.y}px`,
              "--size": `${node.size}px`,
            } as React.CSSProperties
          }
          onMouseEnter={() => setActiveId(node.id)}
          onFocus={() => setActiveId(node.id)}
          aria-label={node.label}
        >
          <span className="orbit-node-inner">
            <img src={node.logo} alt={node.label} />
          </span>
        </button>
      );
    });

  return (
    <section
      ref={sectionRef}
      className={`network-section ${visible ? "visible" : ""}`}
    >
      <style>{`
        .network-section {
          --stage-scale: 1;
          width: 100%;
          background: #ffffff;
          padding: 74px 20px 90px;
          font-family: Arial, Helvetica, sans-serif;
          overflow: hidden;
        }

        .network-header {
          max-width: 900px;
          margin: 0 auto 18px;
          text-align: center;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.55s ease, transform 0.55s ease;
        }

        .network-section.visible .network-header {
          opacity: 1;
          transform: translateY(0);
        }

        .network-small-title {
          margin: 0 0 8px;
          color: #168545;
          font-size: 15px;
          font-weight: 800;
        }

        .network-title {
          margin: 0 0 14px;
          color: #25433a;
          font-size: 42px;
          font-weight: 800;
          line-height: 1.1;
        }

        .network-desc {
          max-width: 760px;
          margin: 0 auto;
          color: #111111;
          font-size: 14px;
          line-height: 1.6;
        }

        .network-orbit-wrap {
          position: relative;
          max-width: 920px;
          height: 640px;
          margin: 0 auto;
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s;
        }

        .network-section.visible .network-orbit-wrap {
          opacity: 1;
          transform: translateY(0);
        }

        .orbit-ring {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          border: 3px solid rgba(71, 99, 82, 0.22);
          border-radius: 50%;
          pointer-events: none;
        }

        .orbit-ring.ring-1 {
          width: 620px;
          height: 620px;
        }

        .orbit-ring.ring-2 {
          width: 490px;
          height: 490px;
        }

        .orbit-ring.ring-3 {
          width: 360px;
          height: 360px;
        }

        .orbit-ring.ring-4 {
          width: 230px;
          height: 230px;
          border-color: rgba(71, 99, 82, 0.14);
        }

        .center-logo {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          width: 168px;
          height: 168px;
          border-radius: 50%;
          background: #ffffff;
          box-shadow: 0 24px 70px rgba(0, 0, 0, 0.13);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 20;
        }

        .center-logo img {
          width: 122px;
          height: auto;
          display: block;
        }

        .orbit-stage {
          position: absolute;
          left: 50%;
          top: 50%;
          width: 0;
          height: 0;
          animation: orbitMove ${ORBIT_SPEED} linear infinite;
          transform-origin: center center;
        }

        .ring-1-stage { z-index: 15; }
        .ring-2-stage { z-index: 14; }
        .ring-3-stage { z-index: 13; }
        .ring-4-stage { z-index: 12; }

        .network-orbit-wrap:hover .orbit-stage {
          animation-play-state: paused;
        }

        .orbit-node {
          position: absolute;
          left: var(--node-x);
          top: var(--node-y);
          width: var(--size);
          height: var(--size);
          transform: translate(-50%, -50%);
          border: 0;
          outline: 0;
          padding: 0;
          border-radius: 50%;
          background: #ffffff;
          box-shadow: 0 12px 34px rgba(0, 0, 0, 0.16);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: box-shadow 0.28s ease, transform 0.28s ease;
        }

        .orbit-node::after {
          content: "";
          position: absolute;
          inset: -7px;
          border-radius: 50%;
          border: 1px solid rgba(0, 68, 45, 0.08);
          pointer-events: none;
        }

        .orbit-node:hover,
        .orbit-node.active {
          transform: translate(-50%, -50%) scale(1.08);
          box-shadow: 0 20px 48px rgba(0, 68, 45, 0.22);
        }

        .orbit-node-inner {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: orbitCounterMove ${ORBIT_SPEED} linear infinite;
        }

        .network-orbit-wrap:hover .orbit-node-inner {
          animation-play-state: paused;
        }

        .orbit-node img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          border-radius: 50%;
          display: block;
        }

        .network-cards {
          display: grid;
          grid-template-columns: repeat(2, minmax(280px, 1fr));
          gap: 20px;
          max-width: 720px;
          margin: -90px auto 0;
          position: relative;
          z-index: 30;
          opacity: 0;
          transform: translateY(26px);
          transition: opacity 0.55s ease 0.2s, transform 0.55s ease 0.2s;
        }

        .network-section.visible .network-cards {
          opacity: 1;
          transform: translateY(0);
        }

        .network-card {
          min-height: 160px;
          background: #cee0c2;
          border: 1px solid #9aba86;
          border-radius: 12px;
          padding: 30px 30px 26px;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        .network-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 14px 34px rgba(38, 77, 59, 0.14);
        }

        .network-card h3 {
          margin: 0 0 18px;
          color: #00442d;
          font-size: 18px;
          font-weight: 800;
          line-height: 1.2;
        }

        .network-card p {
          margin: 0;
          color: #111111;
          font-size: 13px;
          line-height: 1.6;
        }

        @keyframes orbitMove {
          from { transform: scale(var(--stage-scale)) rotate(0deg); }
          to { transform: scale(var(--stage-scale)) rotate(360deg); }
        }

        @keyframes orbitCounterMove {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }

        @media (max-width: 900px) {
          .network-section { --stage-scale: 0.82; }

          .network-orbit-wrap {
            height: 540px;
            max-width: 720px;
          }

          .orbit-ring.ring-1 {
            width: 520px;
            height: 520px;
          }

          .orbit-ring.ring-2 {
            width: 410px;
            height: 410px;
          }

          .orbit-ring.ring-3 {
            width: 300px;
            height: 300px;
          }

          .orbit-ring.ring-4 {
            width: 195px;
            height: 195px;
          }

          .center-logo {
            width: 135px;
            height: 135px;
          }

          .center-logo img {
            width: 96px;
          }

          .network-cards {
            margin-top: -58px;
          }
        }

        @media (max-width: 680px) {
          .network-section {
            --stage-scale: 0.58;
            padding: 55px 16px 70px;
          }

          .network-small-title { font-size: 14px; }
          .network-title { font-size: 30px; }
          .network-desc { font-size: 13px; }

          .network-orbit-wrap {
            height: 430px;
            max-width: 100%;
          }

          .orbit-ring.ring-1 {
            width: 370px;
            height: 370px;
          }

          .orbit-ring.ring-2 {
            width: 290px;
            height: 290px;
          }

          .orbit-ring.ring-3 {
            width: 215px;
            height: 215px;
          }

          .orbit-ring.ring-4 {
            width: 145px;
            height: 145px;
          }

          .center-logo {
            width: 105px;
            height: 105px;
          }

          .center-logo img {
            width: 76px;
          }

          .network-cards {
            grid-template-columns: 1fr;
            margin-top: -20px;
          }

          .network-card h3 { font-size: 17px; }
          .network-card p { font-size: 13px; }
        }
      `}</style>

      <div className="network-header">
        <p className="network-small-title">Our Care Ecosystem</p>
        <h2 className="network-title">A Network Built Around You</h2>
        <p className="network-desc">
          Start Aged care. We connect funding, healthcare providers, aged
          community services to deliver seamless and personalised care journey
          with us Self Managed and Continuity Care Managed.
        </p>
      </div>

      <div
        className="network-orbit-wrap"
        onMouseLeave={() => setActiveId(null)}
      >
        <div className="orbit-ring ring-1" />
        <div className="orbit-ring ring-2" />
        <div className="orbit-ring ring-3" />
        <div className="orbit-ring ring-4" />

        <div className="center-logo">
          <img
            src={`${IMG_PATH}/continuity-care-logo.png`}
            alt="Continuity Care"
          />
        </div>

        <div className="orbit-stage ring-1-stage">
          {renderNodes(ring1Nodes)}
        </div>
        <div className="orbit-stage ring-2-stage">
          {renderNodes(ring2Nodes)}
        </div>
        <div className="orbit-stage ring-3-stage">
          {renderNodes(ring3Nodes)}
        </div>
        <div className="orbit-stage ring-4-stage">
          {renderNodes(ring4Nodes)}
        </div>
      </div>

      <div className="network-cards">
        {cards.map((card) => (
          <article key={card.title} className="network-card">
            <h3>{card.title}</h3>
            <p>{card.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
