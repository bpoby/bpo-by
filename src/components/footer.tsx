import Link from "next/link";
import { contactPage } from "@/data/pages";

const mainNavigation = [["Главная", "/"], ["О компании", "/o-kompanii"], ["Услуги", "/uslugi"], ["Клиенты", "/klienty"], ["Контакты", "/kontakty"]] as const;
const phone = contactPage?.tvs.tel ?? "";
const secondPhone = contactPage?.tvs.tel2 ?? "";
const email = contactPage?.tvs.email ?? "";

export function Footer() {
  return (
    <footer className="footer _bg-white">
      <div className="container grid _flex-main-between _flex-cross-center _flex-items-center _py-20">
        <Link className="logo col _flex _flex-cross-center _flex-items-center _text-blue" href="/">
          <img className="logo__image _img-fluid _mr-16" src="/assets/images/logo.png" alt="BPO.BY" />
          <span className="logo__text _none _xs-block">аутсорсинг<br />процессов<br />бизнеса</span>
        </Link>
        <nav className="footer__main-menu menu menu_main col _none _md-flex _flex-cross-center _flex-items-center _mr-auto _h5" aria-label="Нижнее меню">
          {mainNavigation.map(([label, href]) => <Link className="menu__item _block _p-12" href={href} key={href}>{label}</Link>)}
        </nav>
        <div className="footer__contacts-container contacts-container col _flex _flex-cross-center _flex-items-center _h5">
          <img className="contacts-container__icon _img-fluid _none _xs-block" src="/assets/images/icon-phone-call.png" alt="" />
          <div className="_flex _flex-column _sm-flex-row _md-flex-column _lg-flex-row">
            {phone && <a className="contacts-container__tel _block _xs-mx-16 _text-right" href={`tel:${phone.replace(/[^+\d]/g, "")}`}>{phone}</a>}
            {secondPhone && <a className="contacts-container__tel _block _xs-mx-16 _text-right" href={`tel:${secondPhone.replace(/[^+\d]/g, "")}`}>{secondPhone}</a>}
            {email && <a className="contacts-container__email _block _xs-mx-16 _text-right" href={`mailto:${email}`}>{email}</a>}
          </div>
        </div>
      </div>
    </footer>
  );
}
