"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Script from "next/script";
import { WebsiteSettings, defaultWebsiteSettings, getWebsiteSettings } from "../../lib/api/settings";

export default function WebsiteIntegrations({ initialSettings }: { initialSettings?: WebsiteSettings }) {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith("/admin");
  const [settings, setSettings] = useState<WebsiteSettings>(initialSettings || defaultWebsiteSettings);

  useEffect(() => {
    // Refresh client-side settings once mounted to guarantee latest updates
    getWebsiteSettings().then((s) => {
      if (s) setSettings(s);
    });
  }, []);

  // NEVER execute tracking codes or custom scripts inside the admin panel
  if (isAdmin) {
    return null;
  }

  // Filter enabled custom scripts by placement
  const headScripts = (settings.customScripts || []).filter((s) => s.enabled && s.placement === "head");
  const bodyScripts = (settings.customScripts || []).filter((s) => s.enabled && s.placement === "body");
  const footerScripts = (settings.customScripts || []).filter((s) => s.enabled && s.placement === "footer");

  return (
    <>
      {/* ---------------- 1. GOOGLE INTEGRATIONS ---------------- */}
      {/* Google Tag Manager (Head) */}
      {settings.googleTagManagerEnabled && settings.googleTagManagerId && (
        <>
          <Script
            id="gtm-script"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${settings.googleTagManagerId.trim()}');`,
            }}
          />
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${settings.googleTagManagerId.trim()}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
        </>
      )}

      {/* Google Analytics 4 (GA4) */}
      {settings.googleAnalyticsEnabled && settings.googleAnalyticsId && (
        <>
          <Script
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${settings.googleAnalyticsId.trim()}`}
          />
          <Script
            id="ga4-init"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${settings.googleAnalyticsId.trim()}');
              `,
            }}
          />
        </>
      )}

      {/* Google Ads Conversion Tracking */}
      {settings.googleAdsEnabled && settings.googleAdsId && (
        <Script
          id="google-ads-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('config', '${settings.googleAdsId.trim()}');
            `,
          }}
        />
      )}

      {/* ---------------- 2. SOCIAL MEDIA & ADVERTISING PIXELS ---------------- */}
      {/* Facebook / Meta Pixel */}
      {settings.metaPixelEnabled && settings.metaPixelId && (
        <>
          <Script
            id="meta-pixel"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '${settings.metaPixelId.trim()}');
                fbq('track', 'PageView');
              `,
            }}
          />
          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: "none" }}
              alt=""
              src={`https://www.facebook.com/tr?id=${settings.metaPixelId.trim()}&ev=PageView&noscript=1`}
            />
          </noscript>
        </>
      )}

      {/* LinkedIn Insight Tag */}
      {settings.linkedinEnabled && settings.linkedinPartnerId && (
        <>
          <Script
            id="linkedin-insight"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                _linkedin_partner_id = "${settings.linkedinPartnerId.trim()}";
                window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
                window._linkedin_data_partner_ids.push(_linkedin_partner_id);
                (function(l) {
                if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
                window.lintrk.q=[]}
                var s = document.getElementsByTagName("script")[0];
                var b = document.createElement("script");
                b.type = "text/javascript";b.async = true;
                b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
                s.parentNode.insertBefore(b, s);})(window.lintrk);
              `,
            }}
          />
          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: "none" }}
              alt=""
              src={`https://px.ads.linkedin.com/collect/?pid=${settings.linkedinPartnerId.trim()}&fmt=gif`}
            />
          </noscript>
        </>
      )}

      {/* TikTok Pixel */}
      {settings.tiktokEnabled && settings.tiktokPixelId && (
        <Script
          id="tiktok-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function (w, d, t) {
                w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var i="https://analytics.tiktok.com/i18n/pixel/events.js";ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=i,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};var o=document.createElement("script");o.type="text/javascript",o.async=!0,o.src=i+"?sdkid="+e+"&lib="+t;var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(o,a)};
                ttq.load('${settings.tiktokPixelId.trim()}');
                ttq.page();
              }(window, document, 'ttq');
            `,
          }}
        />
      )}

      {/* Pinterest Tag */}
      {settings.pinterestEnabled && settings.pinterestTagId && (
        <>
          <Script
            id="pinterest-tag"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                !function(e){if(!window.pintrk){window.pintrk = function () {
                window.pintrk.queue.push(Array.prototype.slice.call(arguments))};var
                n=window.pintrk;n.queue=[],n.version="3.0";var
                t=document.createElement("script");t.async=!0,t.src=e;var
                r=document.getElementsByTagName("script")[0];
                r.parentNode.insertBefore(t,r)}}("https://s.pinimg.com/ct/core.js");
                pintrk('load', '${settings.pinterestTagId.trim()}');
                pintrk('page');
              `,
            }}
          />
          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: "none" }}
              alt=""
              src={`https://ct.pinterest.com/v3/?event=init&tid=${settings.pinterestTagId.trim()}&noscript=1`}
            />
          </noscript>
        </>
      )}

      {/* ---------------- 3. CUSTOM CODE MANAGER ---------------- */}
      {/* Header Scripts */}
      {headScripts.map((cs) => (
        <CustomCodeRenderer key={`head-${cs.id}`} script={cs} />
      ))}

      {/* Body Scripts */}
      {bodyScripts.map((cs) => (
        <CustomCodeRenderer key={`body-${cs.id}`} script={cs} />
      ))}

      {/* Footer Scripts */}
      {footerScripts.map((cs) => (
        <CustomCodeRenderer key={`footer-${cs.id}`} script={cs} />
      ))}
    </>
  );
}

/**
 * Safely renders custom HTML or script snippets into the page without breaking React DOM reconciliation.
 */
function CustomCodeRenderer({ script }: { script: { id: string; name: string; code: string } }) {
  useEffect(() => {
    if (!script.code || typeof window === "undefined") return;

    const containerId = `custom-script-${script.id}`;
    if (document.getElementById(containerId)) return; // Prevent duplicate script installation

    const container = document.createElement("div");
    container.id = containerId;
    container.setAttribute("data-integration", script.name);
    container.style.display = "none";

    // Insert container
    document.body.appendChild(container);

    // Parse and execute script tags properly
    const temp = document.createElement("div");
    temp.innerHTML = script.code;

    const scripts = temp.querySelectorAll("script");
    scripts.forEach((oldScript) => {
      const newScript = document.createElement("script");
      Array.from(oldScript.attributes).forEach((attr) => {
        newScript.setAttribute(attr.name, attr.value);
      });
      newScript.innerHTML = oldScript.innerHTML;
      container.appendChild(newScript);
      oldScript.remove();
    });

    // Append non-script HTML elements (e.g. meta tags, divs, styles)
    while (temp.firstChild) {
      container.appendChild(temp.firstChild);
    }

    return () => {
      const el = document.getElementById(containerId);
      if (el) el.remove();
    };
  }, [script.id, script.code, script.name]);

  return null;
}
