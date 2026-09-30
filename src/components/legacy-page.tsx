import Link from "next/link";
import { clientPages, contactPage, LegacyPage, multiTv, pages, servicePages } from "@/data/pages";
import { LeadForm } from "@/components/lead-form";
import { ContactBranches } from "@/components/contact-branches";
import { PhraseSlider } from "@/components/phrase-slider";
import { ServiceCarousel } from "@/components/service-carousel";

const currentHomeServices = [
  ["/uslugi/inventarizaciya-tovarnyh-zapasov", "Инвентаризация ТМЦ", "/assets/images/services/pear.png"],
  ["/uslugi/inventarizaciya-imushhestva", "Независимая инвентаризация имущества", "/assets/images/services/dock.png"],
  ["/uslugi/predostavlenie-specialistov-po-inventarizacii", "Аутстаффинг", "/assets/images/services/p2p.png"],
  ["/uslugi/autsorsing-personala", "Аутсорсинг персонала", "/assets/images/services/1930371.png"],
  ["/uslugi/provedenie-inventarizacii", "Проведение инвентаризации", "/assets/images/services/unnamed.jpg"],
  ["/uslugi/inventarizaciya-tovarno-materialnyh-cennostej", "Инвентаризация товарно-материальных ценностей", "/assets/images/services/downtime-management.png"],
  ["/uslugi/merchendajzing", "Мерчендайзинг", "/assets/images/services/basket.png"],
  ["/uslugi/gotovye-resheniya", "Готовые решения", "/assets/images/services/check.png"],
] as const;

const currentClientLogos = [
  ["assets/images/clients/client-b.png", "Брусничка"],
  ["assets/images/clients/client-e.png", "Евроопт"],
  ["assets/images/clients/client-m.png", "Mothercare"],
  ["assets/images/clients/client-mtb.png", "МТБанк"],
  ["assets/images/clients/client-r.png", "Renaissance Hotels"],
  ["assets/images/colins2.jpg", "Colin’s"],
  ["assets/images/de-facto.jpg", "DeFacto"],
  ["assets/images/kisspng-logo-koton-brand-graphic-design-5b06e8ea153426.5811107315271794980869.png", "Koton"],
  ["assets/images/waikiki2.jpg", "LC Waikiki"],
  ["assets/images/tvoe.jpg", "ТВОЕ"],
  ["assets/images/bershka.jpg", "Bershka"],
  ["assets/images/buslik.jpg", "Буслик"],
  ["assets/images/calliope.jpg", "Calliope"],
  ["assets/images/detmir.png", "Детский мир"],
  ["assets/images/funtastik.png", "Funtastik"],
  ["assets/images/gljeans.jpg", "Gloria Jeans"],
  ["assets/images/loverepub.jpg", "Love Republic"],
  ["assets/images/masdutti.jpg", "Massimo Dutti"],
  ["assets/images/miniso.png", "Miniso"],
  ["assets/images/mohito.png", "Mohito"],
  ["assets/images/oysho.jpg", "Oysho"],
  ["assets/images/pullandbear_logo.jpg", "Pull&Bear"],
  ["assets/images/sinsay.jpg", "Sinsay"],
  ["assets/images/stradiva.jpg", "Stradivarius"],
  ["assets/images/zara.jpg", "Zara"],
  ["assets/images/terranova.jpg", "Terranova"],
  ["assets/images/zarahome.png", "Zara Home"],
  ["assets/images/zara.jpg", "Zara"],
  ["assets/images/belmarket.jpeg", "Белмаркет"],
  ["assets/images/mothercare.png", "Mothercare"],
] as const;

export function LegacyPageView({ page }: { page: LegacyPage }) {
  if (page.kind === "home") return <HomePage page={page} />;
  if (page.kind === "service-index") return <ListingPage title={page.longTitle || page.title} breadcrumbTitle={page.title} items={servicePages} />;
  if (page.kind === "services") return <ServicePage page={page} />;
  if (page.kind === "clients") return <ClientsPage />;
  if (page.path.startsWith("/klienty/")) return <ClientCasePage page={page} />;
  if (page.path === "/kontakty") return <ContactsPage page={page} />;
  if (page.kind === "city") return <CityPage page={page} />;
  return <ContentPage page={page} />;
}

function HomePage({ page }: { page: LegacyPage }) {
  const phrases = multiTv(page, "phrases");
  const advantages = multiTv(page, "main_advantages");
  const steps = multiTv(page, "order_of_work");
  return <>
    <section className="jumbotron jumbotron_texture _bg-white _py-56 _xs-py-64 _sm-py-72 _md-py-96">
      <div className="container grid">
        <div className="col col_sm-7 col_md-7 col_lg-5 col_lg-offset-1">
          <h1 className="_mb-32">{page.longTitle}</h1>
          <div className="_text-dark-transparent">{page.description}</div>
          <footer className="_mt-32"><Link className="btn btn_clean btn_light-blue btn_icon-right" href="/o-kompanii"><span className="btn__text">Подробнее о компании</span></Link></footer>
        </div>
        <div className="col col_sm-5 col_md-5 col_lg-4 col_lg-offset-1 _none _sm-block">
          <div className="jumbotron__bpo-square bpo-square"><div className="bpo-square__content swiper-container"><PhraseSlider phrases={phrases.map((item, index) => index === 0 ? "8 лет успешной работы" : item.heading)} /></div></div>
        </div>
      </div>
    </section>
    <section className="services-provided services-provided_slider _pt-24 _xs-pt-32 _sm-pt-48 _md-pt-56 _lg-pt-96 _pb-48 _xs-pb-56 _sm-pb-64 _md-pb-72 _lg-pb-96 _lg-pb-128">
      <div className="container"><h2 className="services-provided__headig _text-center _mb-24 _xs-mb-32 _sm-mb-48 _md-mb-56">Оказываемые услуги</h2><ServiceCarousel>
        {currentHomeServices.map(([path, title, icon], index) => {
          return <Link className="swiper-slide services-provided__preview preview preview_service _flex _flex-column _pt-32 _xs-pt-48 _sm-pt-64 _md-pt-72 _lg-pt-96 _px-16 _xs-px-24 _sm-px-32 _md-px-44 _pb-16 _xs-pb-24 _sm-pb-32 _sm-pb-44 _bg-white" href={path} key={path} title={title}>
          <div className="preview__content _flex _flex-column _flex-main-between"><h2 className="preview__heading _text-blue _mb-auto"><span className="underline">{title}</span></h2><div className="preview__number _font-medium _h2">0{index + 1}</div></div>
          <img className="preview__cover _img-fluid" src={icon} alt="" />
        </Link>;
        })}
      </ServiceCarousel></div>
    </section>
    <section className="main-advantages _py-24 _xs-py-32 _sm-py-48 _md-py-64 _lg-py-72 _bg-white">
      <div className="container"><h2 className="main-advantages__heading _mb-24 _xs-mb-32 _sm-mb-48 _md-mb-56 _text-center">Основные преимущества</h2>
        <ul className="main-advantages__list list grid grid_no-gutters">{advantages.map((item, index) => <Advantage text={item.heading} key={`${item.heading}-${index}`} />)}</ul>
        <div className="main-advantages__clients clients grid grid_no-gutters _compensate-mx-16 _xs-compensate-mx-24 _sm-compensate-mx-32 _mt-32 _xs-mt-48 _sm-mt-56d _md-mt-72 _lg-mt-96">
          {currentClientLogos.map(([image, name], index) => <div className="col col_6 col_xs-4 col_lg-2 _flex _flex-main-center _flex-cross-center _flex-items-center _px-16 _xs-px-24 _sm-px-32 _py-24" key={`${image}-${index}`}><img className="_img-fluid" src={assetPath(image)} alt={name} /></div>)}
          <Link className="col col_6 col_xs-4 col_lg-2 btn btn_clean btn_light-blue btn_icon-right _flex _flex-main-center _flex-cross-center _flex-items-center" href="/klienty"><span className="btn__text">Все клиенты</span></Link>
        </div>
      </div>
    </section>
    <section className="order-of-work _pt-24 _xs-pt-32 _sm-pt-48 _md-pt-56"><div className="container grid"><div className="col col_lg-10 _mx-auto"><h2 className="order-of-work__heading _text-center _mb-24 _xs-mb-32 _sm-mb-48 _md-mb-56">Порядок работ</h2>
      <ul className="order-of-work__list list _bg-white">{steps.map((item, index) => <li className="list__item item grid grid_no-gutters _flex _flex-cross-center _flex-items-center _py-16 _xs-py-24 _sm-py-32 _md-py-40" key={`${item.heading}-${index}`}><div className="item__number col _h2 _font-medium _pl-16 _xs-pl-24 _sm-pl-32 _md-pl-44">0{index + 1}</div><div className="col col_auto col_md-offset-1 _px-16">{item.heading}</div></li>)}</ul>
    </div></div></section>
    <section className="_bg-light-blue _pt-32 _xs-pt-48 _sm-pt-64 _md-pt-96 _lg-pt-128 _pb-48 _xs-pb-56 _sm-pb-72 _md-pb-96"><div className="container grid"><div className="col col_sm-8 col_md-6 col_lg-4 _mx-auto _text-white"><LeadForm formId="order" title="Заказ инвентаризации" buttonText="Получить бесплатную консультацию" /></div></div></section>
    <section className="about-service home-about-service _py-48"><div className="container grid"><article className="col col_lg-8 col_lg-offset-2 _text-dark">
      <p>Компания ООО «ЛИА-юнион» предлагает аутсорсинг персонала. Накопленные знания, достижения и опыт помогут оптимизировать ваши бизнес-процессы, решить поставленные задачи. Мы помогаем избавить компании от проблем с поиском необходимых специалистов. Услуги аутсорсинга персонала предоставляются на основании договора.</p>
      <h2>Почему выгоден аутсорсинг</h2>
      <p>Аренда работников подразумевает привлечение в компанию персонала, с которым не подписано трудовое соглашение. Сотрудников можно направить на выполнение сезонных работ, срочных проектов, для участия в мероприятиях и промоакциях.</p>
      <p>Подобная организация рабочего процесса выгоднее традиционной формы сотрудничества с персоналом:</p>
      <ul><li>Нет нужды искать новых сотрудников и проводить с ними собеседование.</li><li>Уменьшается себестоимость продукции.</li><li>Трудовые ресурсы используются при минимальных расходах.</li></ul>
      <p>Кадровый аутсорсинг в Беларуси подходит фирмам, которым не нужен большой штат на постоянной основе: обязательные платежи, начисление и выплату зарплаты, а также налоги контролирует наша аутсорсинговая компания ООО «ЛИА-юнион».</p>
      <h3>Когда необходима услуга аутсорсинга</h3>
      <p>Аренда сотрудников помогает снизить риск нехватки рабочей силы и повысить производительность с минимальными затратами. Аутсорсинг полезен, когда нужно сократить издержки, освободить штатных специалистов для других задач или быстро усилить команду при открытии нового отделения.</p>
    </article></div></section>
  </>;
}

function Advantage({ text }: { text: string }) {
  return <li className="list__item item col col_sm-6 col_lg-4 _flex _flex-cross-start _flex-items-start _px-16 _xs-px-24 _sm-px-32 _md-px-48 _lg-px-56 _py-24 _xs-py-32 _sm-py-48"><div className="item__bpo-square bpo-square _mt-8"><hr className="bpo-square__content" /></div><div className="item__text _ml-24">{text}</div></li>;
}

function ListingPage({ title, breadcrumbTitle, items }: { title: string; breadcrumbTitle: string; items: LegacyPage[] }) {
  const orderedItems = currentHomeServices.reduce<{ item: LegacyPage; title: string; icon: string }[]>((ordered, [path, title, icon]) => {
    const item = items.find((entry) => entry.path === path);
    if (item) ordered.push({ item, title, icon: item.tvs.icon || icon });
    return ordered;
  }, []);
  return <><PageHeading title={title} breadcrumbTitle={breadcrumbTitle} variant="page-heading_catalog" /><section className="services-provided services-index _pt-24 _pb-64"><div className="container grid">{orderedItems.map((entry, index) => {
    return <Link className="col col_sm-6 col_lg-6 services-provided__preview preview preview_service _flex _flex-column _pt-96 _px-32 _pb-32 _bg-white" href={entry.item.path} key={entry.item.path}>
      <div className="preview__content _flex _flex-column _flex-main-between"><h2 className="preview__heading _text-blue _mb-auto"><span className="underline">{entry.title}</span></h2><span className="preview__number _font-medium _h2">0{index + 1}</span></div>
      <img className="preview__cover _img-fluid" src={assetPath(entry.icon)} alt="" />
    </Link>;
  })}</div></section><Consultation title="Заказать инвентаризацию" buttonText="Получить бесплатную консультацию" /></>;
}

function ServicePage({ page }: { page: LegacyPage }) {
  const children = childPages(page);
  const steps = multiTv(page, "order_of_work");
  return <><PageHeading title={page.title} />
    <section className="about-service _py-48"><div className="container grid"><article className="col col_lg-8 col_lg-offset-2">
      {page.content ? <LegacyHtml value={page.content} /> : <p>{page.tvs.desc || page.description}</p>}
      {steps.length > 0 && <ul className="order-of-work__list list _bg-white _mt-32">{steps.map((item, index) => <li className="list__item item grid grid_no-gutters _flex _flex-cross-center _flex-items-center _py-16 _xs-py-24" key={`${item.heading}-${index}`}><span className="item__number col _h2 _font-medium _pl-16">0{index + 1}</span><span className="col col_auto _px-16">{item.heading}</span></li>)}</ul>}
      {children.length > 0 && <nav className="service-tabs _mt-32" aria-label="Подробнее об услуге">{children.map((child) => <Link className="btn btn_clean btn_light-blue _mr-16 _mb-16" href={child.path} key={child.path}>{child.title}</Link>)}</nav>}
    </article></div></section><Consultation title="Заказать инвентаризацию" buttonText="Получить бесплатную консультацию" />
  </>;
}

function ClientsPage() {
  const categoryOrder = [
    "/klienty/inventarizacija-v-sfere",
    "/klienty/inventarizaciya-v-sfere-lizinga",
    "/klienty/inventarizaciya-osnovnyh-fondov-imushhestva1",
    "/klienty/inventarizaciya-v-sfere-promyshlennosti",
  ];
  const categories = categoryOrder.map((path) => clientPages.find((client) => client.path === path)).filter((client): client is LegacyPage => Boolean(client));
  return <>
    <section className="jumbotron jumbotron_simple jumbotron_texture clients-page-heading _bg-white _pt-32 _pb-32 _xs-pb-48 _sm-pb-56 _md-pb-64 _lg-pb-72">
      <div className="container grid"><div className="col col_lg-10 _mx-auto">
        <nav className="breadcrumbs _flex _flex-wrap _flex-cross-center _flex-items-center _mb-32 _xs-mb-48 _sm-mb-56 _md-mb-64 _lg-mb-72" aria-label="Хлебные крошки">
          <Link className="breadcrumbs__item _text-gray" href="/">Главная</Link>
          <span className="breadcrumbs__separator _text-gray _mx-20" aria-hidden="true">/</span>
          <span className="breadcrumbs__item _text-gray" aria-current="page">Клиенты</span>
        </nav>
        <div className="grid"><h1 className="col col_xs-8 col_sm-6 col_md-5 col_lg-4 col_xl-3 _font-light _mb-0">{pages.find((page) => page.path === "/klienty")?.longTitle}</h1></div>
      </div></div>
    </section>
    <section className="services-provided container grid _pt-24 _xs-pt-32 _sm-pt-48 _md-pt-56 _pb-48 _xs-pb-56 _sm-pb-64 _md-pb-72 _lg-pb-96 _lg-pb-128">
      {categories.map((client, index) => <Link className="services-provided__preview preview preview_clients-category col col_md-6 _half-grid-gutters-y _flex _flex-column _pt-32 _xs-pt-48 _sm-pt-64 _md-pt-72 _lg-pt-96 _px-16 _xs-px-24 _sm-px-32 _md-px-44 _pb-16 _xs-pb-24 _sm-pb-32 _sm-pb-44 _bg-dark" href={client.path} key={client.path} title={client.title}>
        <div className="preview__content _flex _flex-column _flex-main-between">
          <h2 className="preview__heading _xs-font-medium _text-white _mb-auto"><span className="underline">{client.title}</span></h2>
          <div className="preview__number _font-medium _h2">0{index + 1}</div>
        </div>
        <hr className="preview__cover _cover" style={{ backgroundImage: `url('${assetPath(client.tvs.cover)}')` }} />
      </Link>)}
    </section>
  </>;
}

function ClientCasePage({ page }: { page: LegacyPage }) {
  const logos = multiTv(page, "logotypes_wrapper_multi_tv");
  const title = page.title.replace(/\s+/g, " ").trim();

  return <>
    <section className="jumbotron jumbotron_texture page-heading client-case-heading _bg-white _py-56 _xs-py-64 _sm-py-72 _md-py-96">
      <div className="container grid"><div className="col col_lg-10 col_lg-offset-1">
        <nav className="breadcrumbs legacy-breadcrumbs" aria-label="Хлебные крошки">
          <Link href="/">Главная</Link><span aria-hidden="true">/</span>
          <Link href="/klienty">Клиенты</Link><span aria-hidden="true">/</span>
          <span aria-current="page">{page.title}</span>
        </nav>
        <h1 className="_mb-32">{title}</h1>
      </div></div>
    </section>
    {logos.length > 0 && <section className="client-case-logos _pb-24 _xs-pb-32 _sm-pb-48 _md-pb-56 _lg-pb-64">
      <div className="container grid"><div className="col col_lg-10 col_lg-offset-1">
        <div className="client-case-logos__grid">
          {logos.map((logo, index) => <div className="client-case-logos__tile" key={`${logo.photo}-${index}`}>
            <img src={assetPath(logo.photo)} alt={logo.name && !/^\d+$/.test(logo.name) && logo.name !== "Описание к логотипу" ? logo.name : ""} />
          </div>)}
        </div>
      </div></div>
    </section>}
    <ClientOrderForm />
  </>;
}

function ClientOrderForm() {
  return <section className="client-case-order _bg-light-blue _pt-32 _xs-pt-48 _sm-pt-64 _md-pt-72 _pb-48 _xs-pb-56 _sm-pb-64 _md-pb-72 _lg-pb-96">
    <div className="container grid"><div className="col col_sm-8 col_md-6 col_lg-4 _mx-auto _text-white">
      <LeadForm formId="order" title="Заказать инвентаризацию" buttonText="Получить бесплатную консультацию" />
    </div></div>
  </section>;
}

function CityPage({ page }: { page: LegacyPage }) {
  const branches = multiTv(page, "branches");
  return <><PageHeading title={page.title} /><section className="contacts contact-page _bg-light-gray _py-48"><div className="container grid">
    <div className="col col_md-6 contact-page__details">
      <h2 className="_mb-24">{page.title === "Контакты" ? "Контакты" : page.title}</h2>
      {branches.length ? branches.map((branch, index) => <address className="_mb-24" key={`${branch.name}-${index}`}><strong>{branch.name}</strong>{branch.address && <p>{branch.address}</p>}{branch.tel && <p><a href={`tel:${branch.tel.replace(/[^+\d]/g, "")}`}>{branch.tel}</a></p>}{branch.email && <p><a href={`mailto:${branch.email}`}>{branch.email}</a></p>}</address>) : <ContactDetails />}
      {page.path === "/kontakty" && <nav className="contact-page__countries" aria-label="Контактные данные по странам">{pages.filter((item) => item.path.startsWith("/kontakty/")).map((item) => <Link href={item.path} key={item.path}>{item.title}</Link>)}</nav>}
    </div>
    <div className="col col_md-6 contact-page__form"><LeadForm formId="feedbackForm" title="Сообщение с сайта" buttonText="Отправить сообщение" /></div>
  </div></section></>;
}

function ContactsPage({ page }: { page: LegacyPage }) {
  return <>
    <section className="jumbotron jumbotron_simple contacts-heading _bg-white _pt-32 _pb-32 _xs-pb-48 _sm-pb-56 _md-pb-64 _lg-pb-72">
      <div className="container grid"><div className="col col_lg-10 _mx-auto">
        <nav className="breadcrumbs legacy-breadcrumbs" aria-label="Хлебные крошки">
          <Link href="/">Главная</Link><span aria-hidden="true">/</span><span aria-current="page">Контакты</span>
        </nav>
        <div className="contacts-heading__title grid _flex-main-between _flex-cross-center _flex-items-center">
          <h1 className="col col_9 col_sm-6 col_md-5 col_lg-4 _mb-0">{page.longTitle}</h1>
          <div className="col col_3 col_sm-2"><img className="_img-fluid" src={assetPath(page.tvs.icon)} alt="" /></div>
        </div>
      </div></div>
    </section>
    <ContactBranches />
    <section className="contacts-order _bg-light-blue _pt-32 _xs-pt-48 _sm-pt-64 _md-pt-96 _lg-pt-128 _pb-48 _xs-pb-56 _md-pb-96 _lg-pb-112">
      <div className="container grid"><div className="col col_sm-8 col_md-6 col_lg-4 _mx-auto _text-white">
        <LeadForm formId="order" title="" buttonText="Получить бесплатную консультацию" />
      </div></div>
    </section>
  </>;
}

function ContactDetails() {
  const phone = contactPage?.tvs.tel ?? "";
  const secondPhone = contactPage?.tvs.tel2 ?? "";
  const email = contactPage?.tvs.email ?? "";
  const description = (contactPage?.tvs.desc ?? "").replace(/\\r\\n|\\r|\\n/g, "\n").trim();
  return <><p className="contact-page__intro">{description}</p>{[phone, secondPhone].filter(Boolean).map((value) => <p key={value}><a href={`tel:${value.replace(/[^+\d]/g, "")}`}>{value}</a></p>)}{email && <p><a href={`mailto:${email}`}>{email}</a></p>}</>;
}

function ContentPage({ page }: { page: LegacyPage }) {
  const isCompanyPage = page.path === "/o-kompanii";
  const children = childPages(page);
  const team = multiTv(page, "team");
  const companyTeam: Record<string, string>[] = isCompanyPage ? [
    ...team.map((person) => ({
      photo: person.photo,
      name: person.name,
      post: person.name === "Антон Беленский" ? "Основатель" : person.name === "Ольга Матусевич" ? "Директор" : person.post,
    })),
    { photo: "assets/images/photo_2024-04-10-20.23.42.jpeg", name: "Дарья", post: "" },
  ] : team;
  const values = multiTv(page, "our_values");
  const logos = multiTv(page, "logotypes_wrapper_multi_tv");
  return <><PageHeading title={isCompanyPage ? page.longTitle || page.title : page.title} breadcrumbTitle={page.title} variant={isCompanyPage ? "page-heading_company" : ""} />
    {isCompanyPage && <nav className="company-tabs" aria-label="Разделы о компании"><div className="container grid"><div className="col col_lg-10 col_lg-offset-1"><a href="#about-company" aria-current="page">О компании</a><a href="#about-team">Команда</a></div></div></nav>}
    <section className={`about-service content-page _py-48${isCompanyPage ? " company-page" : ""}`}><div className="container grid"><article id={isCompanyPage ? "about-company" : undefined} className={`col ${isCompanyPage ? "col_lg-10 col_lg-offset-1" : "col_lg-8 col_lg-offset-2"} ${isCompanyPage ? "_text-dark" : "_text-dark-transparent"}`}>
    {page.content ? <LegacyHtml value={page.content} /> : page.description && <p>{page.description}</p>}
    {page.tvs.desc && !page.content && <p>{page.tvs.desc}</p>}
    {values.length > 0 && <section className={`company-values _mt-48${isCompanyPage ? "" : " company-values_plain"}`}><h2 className="_mb-32">Наши ценности =)</h2><ul className="company-values__list list grid">{values.map((item, index) => <li className="col col_sm-6 company-values__item" key={`${item.heading}-${index}`}><span>0{index + 1}</span><p>{item.heading}</p></li>)}</ul></section>}
    {companyTeam.length > 0 && <section id={isCompanyPage ? "about-team" : undefined} className="company-team _mt-48"><h2 className="_mb-24">Команда</h2><div className="grid">{companyTeam.map((person, index) => <div className="col col_sm-6 col_lg-4 company-team__person _mb-32" key={`${person.name}-${index}`}><img className="_img-fluid" src={assetPath(person.photo)} alt={person.name} /><h3 className="_mt-16">{person.name}</h3>{person.post && <p>{person.post}</p>}</div>)}</div></section>}
    {logos.length > 0 && <section className="_mt-48"><h2 className="_mb-24">Клиент</h2><div className="grid">{logos.map((logo, index) => <div className="col col_6 col_xs-4 col_lg-3 _py-16" key={`${logo.photo}-${index}`}><img className="_img-fluid" src={assetPath(logo.photo)} alt={logo.name || ""} /></div>)}</div></section>}
    {!isCompanyPage && children.length > 0 && <nav className="service-tabs _mt-32" aria-label="Разделы">{children.map((child) => <Link className="btn btn_clean btn_light-blue _mr-16 _mb-16" href={child.path} key={child.path}>{child.title}</Link>)}</nav>}
  </article></div></section><Consultation title="Заказать консультацию специалистов" /></>;
}

function LegacyHtml({ value }: { value: string }) {
  return <div className="legacy-richtext" dangerouslySetInnerHTML={{ __html: value }} />;
}

function PageHeading({ title, breadcrumbTitle = title, variant = "" }: { title: string; breadcrumbTitle?: string; variant?: string }) {
  return <section className={`jumbotron jumbotron_texture page-heading ${variant} _bg-white _py-56 _xs-py-64 _sm-py-72 _md-py-96`}><div className="container grid"><div className="col col_lg-10 col_lg-offset-1"><nav className="breadcrumbs legacy-breadcrumbs" aria-label="Хлебные крошки"><Link href="/">Главная</Link><span aria-hidden="true">/</span><span aria-current="page">{breadcrumbTitle}</span></nav><h1 className="_mb-32">{title}</h1></div></div></section>;
}

function Consultation({ title = "Заказ консультации", buttonText = "Заказать консультацию" }: { title?: string; buttonText?: string }) {
  return <section className="_bg-light-blue _py-48"><div className="container grid"><div className="col col_sm-8 col_md-6 col_lg-4 _mx-auto _text-white"><LeadForm formId="advice" title={title} buttonText={buttonText} /></div></div></section>;
}

function childPages(parent: LegacyPage) {
  return pages.filter((item) => item.path.startsWith(`${parent.path === "/" ? "" : parent.path}/`) && item.path !== parent.path && item.path.slice(parent.path.length + 1).indexOf("/") === -1);
}

function assetPath(value?: string) {
  if (!value) return "";
  return value.startsWith("/") ? value : `/${value}`;
}
