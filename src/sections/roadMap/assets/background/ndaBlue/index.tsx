import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import { WalletIcon } from "@/sections/roadMap/assets/background/ndaBlue/wallet";
import styles from "./styles.module.scss";

type MoneyBillVariant = 0 | 1 | 2;

type MoneyParticle = {
  id: number;
  left: number;
  top: number;
  drift: number;
  rotate: number;
  scale: number;
  delay: number;
  variant: MoneyBillVariant;
};

const MONEY_BILL_VARIANTS: MoneyBillVariant[] = [0, 1, 2];
const PARTICLE_LIFETIME_MS = 1200;
const MAX_PARTICLES = 28;
const PARTICLE_THROTTLE_MS = 72;
const WALLET_IDLE_DELAY_MS = 180;

const isReducedMotionEnabled = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export const NdaBlueBackground = () => {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const walletRef = useRef<HTMLDivElement | null>(null);
  const particleId = useRef(0);
  const lastParticleAt = useRef(0);
  const timeoutIds = useRef<number[]>([]);
  const idleTimeoutId = useRef<number | null>(null);
  const [isWalletActive, setIsWalletActive] = useState(false);
  const [particles, setParticles] = useState<MoneyParticle[]>([]);

  useEffect(() => {
    const root = rootRef.current;
    const wallet = walletRef.current;
    const card = root?.closest<HTMLElement>("[data-road-map-card]");

    if (!root || !wallet || !card) {
      return undefined;
    }

    const removeParticle = (id: number, timeoutId: number) => {
      setParticles((currentParticles) =>
        currentParticles.filter((particle) => particle.id !== id),
      );
      timeoutIds.current = timeoutIds.current.filter(
        (item) => item !== timeoutId,
      );
    };

    const spawnParticleFromWallet = () => {
      const rootRect = root.getBoundingClientRect();
      const walletRect = wallet.getBoundingClientRect();
      const id = particleId.current + 1;

      particleId.current = id;

      const particle: MoneyParticle = {
        id,
        left:
          walletRect.left -
          rootRect.left +
          walletRect.width * (0.46 + Math.random() * 0.16),
        top:
          walletRect.top -
          rootRect.top +
          walletRect.height * (0.54 + Math.random() * 0.18),
        drift: Math.round((Math.random() - 0.5) * 92),
        rotate: Math.round((Math.random() - 0.5) * 110),
        scale: Number((0.86 + Math.random() * 0.34).toFixed(2)),
        delay: Number((Math.random() * 0.08).toFixed(2)),
        variant: MONEY_BILL_VARIANTS[id % MONEY_BILL_VARIANTS.length],
      };

      setParticles((currentParticles) => [
        ...currentParticles.slice(-(MAX_PARTICLES - 1)),
        particle,
      ]);

      const timeoutId = window.setTimeout(
        () => removeParticle(id, timeoutId),
        PARTICLE_LIFETIME_MS,
      );

      timeoutIds.current.push(timeoutId);
    };

    const handlePointerMove = (event: PointerEvent) => {
      if (event.pointerType === "touch") {
        return;
      }

      setIsWalletActive(true);

      if (idleTimeoutId.current !== null) {
        window.clearTimeout(idleTimeoutId.current);
      }

      idleTimeoutId.current = window.setTimeout(() => {
        setIsWalletActive(false);
        idleTimeoutId.current = null;
      }, WALLET_IDLE_DELAY_MS);

      if (isReducedMotionEnabled()) {
        return;
      }

      const now = window.performance.now();

      if (now - lastParticleAt.current < PARTICLE_THROTTLE_MS) {
        return;
      }

      lastParticleAt.current = now;
      spawnParticleFromWallet();
    };

    const handlePointerLeave = () => {
      lastParticleAt.current = 0;
      setIsWalletActive(false);

      if (idleTimeoutId.current !== null) {
        window.clearTimeout(idleTimeoutId.current);
        idleTimeoutId.current = null;
      }
    };

    card.addEventListener("pointermove", handlePointerMove);
    card.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      card.removeEventListener("pointermove", handlePointerMove);
      card.removeEventListener("pointerleave", handlePointerLeave);

      if (idleTimeoutId.current !== null) {
        window.clearTimeout(idleTimeoutId.current);
      }

      timeoutIds.current.forEach((timeoutId) => window.clearTimeout(timeoutId));
    };
  }, []);

  return (
    <div className={styles.root} ref={rootRef} aria-hidden="true">
      <div
        className={`${styles.wallet} ${isWalletActive ? styles.walletActive : ""}`}
        ref={walletRef}
      >
        <WalletIcon className={styles.icon} />
      </div>

      {particles.length > 0 && (
        <div className={styles.moneyRain}>
          {particles.map(
            ({ id, left, top, drift, rotate, scale, delay, variant }) => (
              <span
                className={styles.moneyParticle}
                data-bill-variant={variant}
                key={id}
                style={
                  {
                    left,
                    top,
                    "--money-drift": `${drift}px`,
                    "--money-rotate": `${rotate}deg`,
                    "--money-scale": scale,
                    animationDelay: `${delay}s`,
                  } as CSSProperties
                }
              >
                <MoneyBillIcon />
              </span>
            ),
          )}
        </div>
      )}
    </div>
  );
};

const MoneyBillIcon = () => (
  <svg
    className={styles.moneyBill}
    viewBox="0 0 64 36"
    xmlns="http://www.w3.org/2000/svg"
    focusable="false"
  >
    <rect
      className={styles.billShadow}
      x="6"
      y="7"
      width="52"
      height="24"
      rx="5"
    />
    <rect
      className={styles.billBase}
      x="4"
      y="4"
      width="52"
      height="24"
      rx="5"
    />
    <path
      className={styles.billPattern}
      d="M10 11c3.2 0 5.8-2.4 5.8-5.4M10 21c3.2 0 5.8 2.4 5.8 5.4M50 11c-3.2 0-5.8-2.4-5.8-5.4M50 21c-3.2 0-5.8 2.4-5.8 5.4"
    />
    <rect
      className={styles.billLine}
      x="12"
      y="13"
      width="12"
      height="2.8"
      rx="1.4"
    />
    <rect
      className={styles.billLine}
      x="12"
      y="18"
      width="9"
      height="2.6"
      rx="1.3"
    />
    <circle className={styles.billSeal} cx="34" cy="16" r="7" />
    <path
      className={styles.billMark}
      d="M31 19.5h6M34 11.8v8.6M31.5 14.2c.7-1.2 2.4-1.8 4-1.1 1.7.8 1.8 2.8.1 3.4l-2.2.8c-1.8.7-1.6 2.8.2 3.4 1.5.5 3.1 0 3.9-1.1"
    />
  </svg>
);
