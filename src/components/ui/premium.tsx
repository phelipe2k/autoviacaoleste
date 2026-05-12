"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { publicPath } from "@/lib/site";
import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55 }}
      className={cn(
        align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl",
        className
      )}
    >
      <span className="text-gold text-xs sm:text-sm tracking-[0.24em] uppercase font-semibold">
        {eyebrow}
      </span>
      <h2 className="heading-lg text-white mt-4 mb-4">{title}</h2>
      {description && <p className="body-lg">{description}</p>}
    </motion.div>
  );
}

type PageHeroProps = {
  eyebrow: string;
  title: React.ReactNode;
  description: string;
  image: string;
  imageAlt: string;
  primaryCta?: { href: string; label: string };
  secondaryCta?: { href: string; label: string };
};

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  primaryCta,
  secondaryCta,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden pt-32 pb-16 sm:pb-20">
      <div className="absolute inset-0">
        <Image
          src={publicPath(image as `/${string}`)}
          alt={imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/96 via-dark/78 to-dark/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-dark/60 via-transparent to-dark" />
        <div className="absolute inset-0 route-texture opacity-35" />
      </div>

      <div className="relative section-padding">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          className="max-w-4xl"
        >
          <span className="text-gold text-xs sm:text-sm tracking-[0.24em] uppercase font-semibold">
            {eyebrow}
          </span>
          <h1 className="heading-xl text-white mt-5 mb-5 max-w-4xl">{title}</h1>
          <p className="body-lg max-w-2xl">{description}</p>
          {(primaryCta || secondaryCta) && (
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              {primaryCta && (
                <Link href={primaryCta.href} className="btn-primary inline-flex items-center justify-center gap-2">
                  {primaryCta.label}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              )}
              {secondaryCta && (
                <Link href={secondaryCta.href} className="btn-outline inline-flex items-center justify-center gap-2">
                  {secondaryCta.label}
                </Link>
              )}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}

type ImageCardProps = {
  href?: string;
  image: string;
  imageAlt: string;
  eyebrow?: string;
  title: string;
  description?: string;
  meta?: string;
  children?: React.ReactNode;
  className?: string;
};

export function ImageCard({
  href,
  image,
  imageAlt,
  eyebrow,
  title,
  description,
  meta,
  children,
  className,
}: ImageCardProps) {
  const inner = (
    <article
      className={cn(
        "group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-dark-lighter/80 shadow-premium transition-all duration-500 hover:-translate-y-1 hover:border-gold/45",
        className
      )}
    >
      <div className="relative h-64 overflow-hidden sm:h-72 lg:h-80">
        <Image
          src={publicPath(image as `/${string}`)}
          alt={imageAlt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark/88 via-dark/22 to-transparent" />
        {eyebrow && (
          <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-dark/55 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-gold-light backdrop-blur-md">
            {eyebrow}
          </span>
        )}
      </div>

      <div className="p-6 sm:p-7">
        {meta && <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan mb-2">{meta}</p>}
        <h3 className="text-2xl font-bold text-white leading-tight group-hover:text-gold-light transition-colors">
          {title}
        </h3>
        {description && <p className="mt-3 text-sm leading-relaxed text-ice/68">{description}</p>}
        {children}
      </div>
    </article>
  );

  if (href) {
    return (
      <Link href={href} className="block h-full">
        {inner}
      </Link>
    );
  }

  return inner;
}
