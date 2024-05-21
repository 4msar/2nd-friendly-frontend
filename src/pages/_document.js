import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"></link>
      <link
        rel="stylesheet"
        type="text/css"
        charset="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css"
      />
      
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css"></link>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.4/tiny-slider.css">
</link>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.2/min/tiny-slider.js"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              const storedTheme = localStorage.getItem('theme');
              const getPreferredTheme = () => {
                  if (storedTheme) {
                      return storedTheme;
                  }
                  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'light';
              };
              const setTheme = function (theme) {
                  if (theme === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                      document.documentElement.setAttribute('data-bs-theme', 'dark');
                  } else {
                      document.documentElement.setAttribute('data-bs-theme', theme);
                  }
              };
              setTheme(getPreferredTheme());
              window.addEventListener('DOMContentLoaded', () => {
                  var el = document.querySelector('.theme-icon-active');
                  if (el != 'undefined' && el != null) {
                      const showActiveTheme = theme => {
                          const activeThemeIcon = document.querySelector('.theme-icon-active use');
                          const btnToActive = document.querySelector(\`[data-bs-theme-value="\${theme}"]\`);
                          const svgOfActiveBtn = btnToActive.querySelector('.mode-switch use').getAttribute('href');
                          document.querySelectorAll('[data-bs-theme-value]').forEach(element => {
                              element.classList.remove('active');
                          });
                          btnToActive.classList.add('active');
                          activeThemeIcon.setAttribute('href', svgOfActiveBtn);
                      };
                      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
                          if (storedTheme !== 'light' || storedTheme !== 'dark') {
                              setTheme(getPreferredTheme());
                          }
                      });
                      showActiveTheme(getPreferredTheme());
                      document.querySelectorAll('[data-bs-theme-value]').forEach(toggle => {
                          toggle.addEventListener('click', () => {
                              const theme = toggle.getAttribute('data-bs-theme-value');
                              localStorage.setItem('theme', theme);
                              setTheme(theme);
                              showActiveTheme(theme);
                          });
                      });
                  }
              });
            `,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
        <div class="back-top"><i class="bi bi-arrow-up-short position-absolute top-50 start-50 translate-middle"></i></div>
        
      </body>
    </Html>
  );
}
