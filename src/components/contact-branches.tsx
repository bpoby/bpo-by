const branches = [
  {
    id: "belarus",
    country: "Беларусь",
    phone: "+375336333838",
    email: "office@bpo.by",
    address: "Пр.Независимости, 16 каб.19",
    mapQuery: "Пр.Независимости, 16 каб.19, Минск, Беларусь",
  },
  {
    id: "gruziya",
    country: "Грузия",
    phone: "+995 595 049 110",
    email: "bpogeorgia@gmail.com",
    address: "Улица Ш. Химшиашвили 15Г, NA/18-14, Батуми, Грузия",
    mapQuery: "Улица Ш. Химшиашвили 15Г, Батуми, Грузия",
  },
  {
    id: "azerbajdzhan",
    country: "Азербайджан",
    phone: "+375 336 333 838",
    email: "office@bpo.by",
    address: "г. Баку",
    mapQuery: "г. Баку, Азербайджан",
  },
  {
    id: "ukraina",
    country: "Украина",
    phone: "+380 67 929 9995",
    email: "office@bpo.by",
    address: "г. Киев",
    mapQuery: "г. Киев, Украина",
  },
  {
    id: "kazahstan",
    country: "Казахстан",
    phone: "+375 336 333 838",
    email: "office@bpo.by",
    address: "г. Нур-Султан, Казахстан",
    mapQuery: "г. Нур-Султан, Казахстан",
  },
] as const;

export function ContactBranches() {
  return (
    <section className="contacts contacts-branches _bg-white _pt-32 _pb-32 _xs-pb-48 _sm-pb-56 _md-pb-64 _lg-pb-72">
      <div className="container">
        <div className="contacts-branches__tabsystem">
          {branches.map((branch, index) => (
            <input
              className="contacts-branches__radio"
              type="radio"
              name="contact-country"
              id={`branch-tab-${branch.id}`}
              aria-label={branch.country}
              aria-controls={`branch-panel-${branch.id}`}
              defaultChecked={index === 0}
              key={branch.id}
            />
          ))}

          <nav className="contacts-branches__nav _bg-light-gray" aria-label="Филиалы по странам">
            {branches.map((branch) => (
              <label className="contacts-branches__tab" htmlFor={`branch-tab-${branch.id}`} key={branch.id}>
                {branch.country}
              </label>
            ))}
          </nav>

          <div className="contacts-branches__panels">
            {branches.map((branch) => {
              const mapUrl = `https://maps.google.com/maps?q=${encodeURIComponent(branch.mapQuery)}&z=12&hl=ru&output=embed`;
              return (
                <section className="contacts-branches__panel" id={`branch-panel-${branch.id}`} key={branch.id} aria-label={branch.country}>
                  <div className="contacts-branches__details">
                    <div className="contacts-branches__row grid">
                      <div className="contacts-branches__pin col col_sm-3" aria-hidden="true"><span /></div>
                      <ul className="contacts-branches__data col col_sm-4 _nostyle">
                        <li>Тел/факс: {branch.phone}</li>
                        <li>E-mail: {branch.email}</li>
                      </ul>
                      <div className="contacts-branches__address col col_sm-5">{branch.address}</div>
                    </div>
                  </div>
                  <div className="contacts-branches__map bpo-square">
                    <iframe className="contacts-branches__map-frame bpo-square__content" title={`Карта филиала: ${branch.country}`} src={mapUrl} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
                  </div>
                </section>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
