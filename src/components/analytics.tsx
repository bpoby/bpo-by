import Script from "next/script";

export function Analytics() {
  if (process.env.NEXT_PUBLIC_ENABLE_ANALYTICS !== "true") return null;

  return <>
    <Script src="https://www.googletagmanager.com/gtag/js?id=UA-126120699-1" strategy="afterInteractive" />
    <Script id="google-analytics" strategy="afterInteractive">{`
      window.dataLayer = window.dataLayer || [];
      function gtag(){window.dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'UA-126120699-1');
    `}</Script>
    <Script id="yandex-metrika" strategy="afterInteractive">{`
      (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
      m[i].l=1*new Date();for(var j=0;j<document.scripts.length;j++){if(document.scripts[j].src===r)return;}
      k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
      (window,document,'script','https://mc.yandex.ru/metrika/tag.js','ym');
      ym(50422981,'init',{clickmap:true,trackLinks:true,accurateTrackBounce:true});
    `}</Script>
    <noscript><div><img src="https://mc.yandex.ru/watch/50422981" style={{ position: "absolute", left: "-9999px" }} alt="" /></div></noscript>
  </>;
}
