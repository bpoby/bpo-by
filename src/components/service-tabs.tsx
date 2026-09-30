"use client";

import { useState } from "react";

export type ServiceTab = { id: string; label: string; html: string };

function withWorkingRequestLink(html: string) {
  return html
    .replace(/class="col col_sm-7([^"]*)"/, 'class="col col_sm-7$1 legacy-richtext"')
    .replace(/<button([^>]*data-src="#modal-request-call"[^>]*)>([\s\S]*?)<\/button>/gi, '<a$1 href="#service-order">$2</a>')
    .replace(/\sdata-fancybox=""/gi, "")
    .replace(/\sdata-src="#modal-request-call"/gi, "")
    .replace(/src="images\/services\//g, 'src="/assets/images/services/');
}

export function ServiceTabs({ tabs, introHtml }: { tabs: ServiceTab[]; introHtml: string }) {
  const [active, setActive] = useState(tabs[0]?.id ?? "");

  return (
    <section className="about-service service-page-tabs _bg-white">
      <div className="container ui-tabs">
        <nav className="nav-bar grid _bg-light-gray" aria-label="Информация об услуге">
          <div className="col col_lg-10 _mx-auto">
            <div className="nav-bar__menu menu service-tabs__menu">
              {tabs.map((tab) => (
                <button
                  className={`ui-tabs__tab menu__item _text-nowrap _block _py-24 _mx-24 _bg-transparent${active === tab.id ? " ui-tabs__tab_active menu__item_active" : ""}`}
                  key={tab.id}
                  type="button"
                  aria-selected={active === tab.id}
                  onClick={() => setActive(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </nav>
        {introHtml.trim() && <div className="service-intro" dangerouslySetInnerHTML={{ __html: withWorkingRequestLink(introHtml) }} />}
        <div className="ui-tabs__wrapper service-tabs__panels">
          {tabs.map((tab) => (
            <div
              className={`ui-tabs__tabpanel about-service__tabpanel tabpanel grid${active === tab.id ? " ui-tabs__tabpanel_active" : ""}`}
              data-ui-tabs-tabpanel={tab.id}
              hidden={active !== tab.id}
              key={tab.id}
              role="tabpanel"
              dangerouslySetInnerHTML={{ __html: withWorkingRequestLink(tab.html.replace(/^<div[^>]*>|<\/div>$/g, "")) }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
