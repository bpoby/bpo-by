# Migration Checklist

## Public pages
- [x] `/` — Главная (template: Главная)
- [x] `/o-kompanii` — О компании
- [x] `/uslugi` — Услуги
- [x] `/kontakty` — Контакты
- [x] `/klienty` — Клиенты
- [x] `/uslugi/inventarizaciya-tovarnyh-zapasov` — Инвентаризация ТМЦ
- [x] `/uslugi/inventarizaciya-osnovnyh-fondov-imushhestva` — Аренда торгового оборудования
- [x] `/uslugi/merchendajzing` — Мерчендайзинг
- [x] `/uslugi/predostavlenie-specialistov-po-inventarizacii` — Аутстаффинг
- [x] `/kontakty/belarus` — Беларусь
- [x] `/klienty/inventarizaciya-osnovnyh-fondov-imushhestva1` — Инвентаризация основных фондов, имущества
- [x] `/klienty/inventarizaciya-v-sfere-lizinga` — Аутстаффинг персонала
- [x] `/klienty/inventarizaciya-v-sfere-promyshlennosti` — Мерчендайзинг (клиентский кейс)
- [x] `/uslugi/inventarizaciya-tovarnyh-zapasov/ob-usluge` — Об услуге
- [x] `/kontakty/gruziya` — Грузия
- [x] `/uslugi/predostavlenie-specialistov-po-inventarizacii/ob-usluge1` — Об услуге
- [x] `/uslugi/inventarizaciya-osnovnyh-fondov-imushhestva/ob-usluge2` — Об услуге
- [x] `/uslugi/inventarizaciya-imushhestva` — Инвентаризация имущества
- [x] `/uslugi/inventarizaciya-imushhestva/ob-usluge5` — Об услуге
- [x] `/uslugi/merchendajzing/ob-usluge3` — Об услуге
- [x] `/kontakty/azerbajdzhan` — Азербайджан
- [x] `/uslugi/gotovye-resheniya` — Готовые решения
- [x] `/uslugi/gotovye-resheniya/ob-usluge4` — Об услуге
- [x] `/uslugi/inventarizaciya-tovarnyh-zapasov/stoimost` — Стоимость
- [x] `/uslugi/inventarizaciya-imushhestva/stoimost1` — Стоимость
- [x] `/uslugi/inventarizaciya-tovarnyh-zapasov/tipy-inventarizacii` — Типы инвентаризации
- [x] `/uslugi/merchendajzing/stoimost2` — Стоимость
- [x] `/klienty/inventarizacija-v-sfere` — Инвентаризация в сфере ритейла

## Shared components and behavior
- [ ] Responsive header and mobile layout visually verified after latest responsive fixes
- [x] Footer and contact links
- [x] Request-call and find-cost modals, validation and confirmation states
- [x] Order/consultation form and feedback form where present
- [x] Shared page layouts for home, service, client, city, contacts and content tabs
- [x] Home service cards render as a 3-column desktop grid with current tile icons
- [x] Current home partner-logo set uses local assets
- [x] SEO metadata, canonical URLs, OpenGraph, robots and sitemap (root description aligned to live page)
- [x] Reuse legacy CSS, fonts, images and favicon without PHP/MODX runtime files
- [x] Replace external legacy mail path with an isolated provider adapter
- [ ] Compare representative routes at desktop and mobile widths

## Additional public sitemap URLs preserved unchanged
- [ ] `/uslugi/inventarizaciya-tovarno-materialnyh-cennostej` — route scaffolded; live body content not fully migrated
- [ ] `/uslugi/provedenie-inventarizacii` — route scaffolded; live body content not fully migrated
- [ ] `/uslugi/autsorsing-personala` — route scaffolded; live body content not fully migrated
- [x] `/klienty/inventarizacija-v-sfere`

## Known parity gaps
- Live bpo.by has content newer than the available SQL snapshot; the homepage article is restored through its visible outsourcing sections, while lower copy and updated service details remain pending.
- The three added service routes resolve, but their current copy is abbreviated and must be transcribed from the live source before claiming 1:1 parity.
- Mobile and representative subpage screenshots still need a final comparison against the live site.
