"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { LeadModal } from "@/components/lead-modal";

const navigation = [
  ["Главная", "/"],
  ["О компании", "/o-kompanii"],
  ["Услуги", "/uslugi"],
  ["Клиенты", "/klienty"],
  ["Контакты", "/kontakty"],
] as const;

export function Header() {
  const [modal, setModal] = useState<"request-call" | "find-cost" | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setHasScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav id="site-mobile-menu" className={`mobile-nav _md-none${mobileMenuOpen ? " mobile-nav_visible" : ""}`} aria-label="Мобильное меню" aria-hidden={!mobileMenuOpen}>
        <div className="mobile-nav__container container _pt-72">
          <div className="mobile-nav__menu menu">
            {navigation.map(([label, href]) => (
              <Link
                className="menu__item _block _px-16 _py-12"
                href={href}
                key={href}
                onClick={() => setMobileMenuOpen(false)}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
      <header className="header _bg-white">
        <div className="container grid _flex-main-between _flex-cross-center _flex-items-center _py-20">
          <Link className="header__logo logo col _flex _flex-cross-center _flex-items-center _text-blue" href="/" aria-label="BPO.BY — главная">
            <img className="logo__image _img-fluid _xs-mr-16" src="/assets/images/logo.png" alt="BPO.BY" />
            <span className="logo__text _none _xs-block">аутсорсинг<br />процессов<br />бизнеса</span>
          </Link>
          <nav className="header__main-menu menu menu_main col _none _md-flex _flex-cross-center _flex-items-center _mr-auto _h5" aria-label="Основное меню">
            {navigation.map(([label, href]) => <Link className="menu__item _block _p-12" href={href} key={href}>{label}</Link>)}
          </nav>
          <div className="col _flex">
            <button className="btn btn_transparent _none _lg-flex" onClick={() => setModal("request-call")}>Заказать звонок</button>
            <button className="btn _flex _mr-64 _md-mr-0" onClick={() => setModal("find-cost")}>Узнать стоимость</button>
          </div>
        </div>
      </header>
      <button
        className={`site-mobile-menu-trigger btn-mobile-nav-trigger btn btn_clean${mobileMenuOpen ? " btn-mobile-nav-trigger_active" : ""}`}
        type="button"
        aria-label={mobileMenuOpen ? "Закрыть меню" : "Открыть меню"}
        aria-controls="site-mobile-menu"
        aria-expanded={mobileMenuOpen}
        onClick={() => setMobileMenuOpen((open) => !open)}
      >
        <span className="inner" />
      </button>
      <button
        className={`mobile-nav-cover _md-none${hasScrolled ? " mobile-nav-cover_scrolled" : ""}${mobileMenuOpen ? " mobile-nav-cover_mobile-nav-visible" : ""}`}
        type="button"
        aria-hidden="true"
        tabIndex={-1}
      />
      {modal && <LeadModal type={modal} onClose={() => setModal(null)} />}
    </>
  );
}
