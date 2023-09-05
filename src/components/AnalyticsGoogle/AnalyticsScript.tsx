import Script from 'next/script'

const id = process.env.NEXT_PUBLIC_ANALYTICS_ID;
export default function AnalyticsScript() {
    return (
        <>
            <Script src={`https://www.googletagmanager.com/gtag/${id}`} />
            <Script id="google-analytics">
                {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${id}');
    `}
            </Script>
        </>

    )
}
