import type { NextPage } from 'next'
import Link from 'next/link'

const Home: NextPage = () => {

  return (
    <>
      {/* saved from url=(0060)https://tiny-lab-5786.animaapp.io/home?t=_319059fe&handoff=1 */}
      <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
      <style
        id="st_globalStyles"
        dangerouslySetInnerHTML={{
          __html:
            "\n/* SCROLLBAR */\n\n[dark-scroll]::-webkit-scrollbar {\n  width: 10px;\n  height: 10px;\n}\n\n[dark-scroll]::-webkit-scrollbar-track-piece {\n  background-color: #2b2b2b;\n  border: 1px solid #1d1d1d;\n}\n\n[dark-scroll]::-webkit-scrollbar-thumb {\n  height: 10px;\n  background-color: #4d4d4d;\n}\n[dark-scroll]::-webkit-scrollbar-thumb:hover {\n  background-color: #5a5a5a;\n}\n\n/* LOAD PROGRESS */\n\n.turbolinks-progress-bar {\n  height: 3px;\n  background-color: #ff6250;\n}\n\n/* GROUPING */\n\n[data-id].ui-selecting {\n  box-shadow: inset 0 0 0 1px #4285f4 !important;\n}\n[data-id].ui-selected {\n  box-shadow: inset 0 0 0 1px #4285f4 !important;\n}\n\n/* CURSOR */\n\nbody[mode='comments'] * {\n  cursor: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAzMCAzMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00LjkxNjQ4IDIzLjQxMDlDNS40OTE1MyAyMi45ODg3IDUuOTMxNzkgMjIuMzkzNSA2LjIzMjggMjEuNjQwN0M0Ljc5MDY5IDE5LjczODMgNCAxNy4zOTMzIDQgMTQuOTk3NUM0IDguOTM0MSA4LjkzMjgyIDQgMTUuMDAyMiA0QzIxLjA3MTcgNCAyNiA4LjkzOTE5IDI2IDE1LjAwMjVDMjYgMjEuMDY1OSAyMS4wNjcyIDI2IDE0Ljk5NzggMjZDMTIuOTg5NiAyNiAxMS4wMzUzIDI1LjQ1NTcgOS4zMjM2NyAyNC40MjMxQzguNDI5NjUgMjQuOTU3MiA3LjQxNDM0IDI1LjIyNjggNi4zMDAxOCAyNS4yMjY4QzUuOTU0MjYgMjUuMjI2OCA1LjU5OTM1IDI1LjIwMTQgNS4yNTM0MiAyNS4xNDU0QzQuOTAzIDI1LjA4OTUgNC42Mjg5NiAyNC44MDQ2IDQuNTUyNTggMjQuNDE4QzQuNDc2MjEgMjQuMDI2NCA0LjYxOTk3IDIzLjYyOTYgNC45MTY0OCAyMy40MTA5WiIgZmlsbD0iI0ZGNjI1MCIvPgo8L3N2Zz4K')\n      0 24,\n    auto !important;\n}\n\nbody[mode='code'] [data-id]:not(.hidden) {\n  cursor: default;\n}\n\n/* default node state */\n\nbody[mode='code'] [data-id]:not(.hidden), body[mode='comments'] [data-id]:not(.hidden) {\n  pointer-events: all;\n}\n\n/* is_image */\n\nbody[mode='code'] [data-id].is_image [data-id], body[mode='comments'] [data-id].is_image [data-id] {\n  pointer-events: none !important;\n}\n\n/* without a data-id or ignored */\n\n[data-id].ignore,body[mode='code'] *:not([data-id]) {\n  pointer-events: none !important;\n}\n/* disable transforms for ignored elements */\n\n\nbody[mode='code'] [data-id]:hover{\n  transform: none !important;\n}\n\n"
        }}
      />
      <meta name="viewport" content="width=1512, maximum-scale=1.0" />
      <link
        rel="shortcut icon"
        type="image/png"
        href="https://animaproject.s3.amazonaws.com/home/favicon.png"
      />
      <meta name="og:type" content="website" />
      <meta name="twitter:card" content="photo" />
      <style
        id="hotspots-styles"
        dangerouslySetInnerHTML={{
          __html:
            "\n    .hotspot {\n      position: absolute;\n      border: 1px solid #2a9fd8;\n      background: rgba(0, 173, 255, 0.54);\n      opacity: 0;\n      z-index: -1;\n    }\n  "
        }}
      />
      <style
        id="hide-styles"
        dangerouslySetInnerHTML={{
          __html: "\n    .hotspot {\n      display:none !important;\n    }\n  "
        }}
      />
      <style
        dangerouslySetInnerHTML={{
          __html:
            '\n@import url("https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css");\n\n@import url("https://fonts.googleapis.com/css?family=Roboto:400,700,500");\n\n/* The following line is used to measure usage of this code in production. For more info see our usage billing page */\n@import url("https://px.animaapp.com/60c225a49ceabbf06408697a.60c225a65f2850c1ddcaacd2.di6TQmr.hch.png");\n\n\n.screen textarea:focus,\n.screen input:focus {\n  outline: none;\n}\n\n.screen * {\n  -webkit-font-smoothing: antialiased;\n  box-sizing: border-box;\n}\n\n.screen div {\n  -webkit-text-size-adjust: none;\n}\n\n.component-wrapper a {\n  display: contents;\n  pointer-events: auto;\n  text-decoration: none;\n}\n\n.component-wrapper * {\n  -webkit-font-smoothing: antialiased;\n  box-sizing: border-box;\n  pointer-events: none;\n}\n\n.component-wrapper a *,\n.component-wrapper input,\n.component-wrapper video,\n.component-wrapper iframe {\n  pointer-events: auto;\n}\n\n.component-wrapper.not-ready,\n.component-wrapper.not-ready * {\n  visibility: hidden !important;\n}\n\n.screen a {\n  display: contents;\n  text-decoration: none;\n}\n\n.full-width-a {\n  width: 100%;\n}\n\n.full-height-a {\n  height: 100%;\n}\n\n.container-center-vertical {\n  align-items: center;\n  display: flex;\n  flex-direction: row;\n  height: 100%;\n  pointer-events: none;\n}\n\n.container-center-vertical > * {\n  flex-shrink: 0;\n  pointer-events: auto;\n}\n\n.container-center-horizontal {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  pointer-events: none;\n  width: 100%;\n}\n\n.container-center-horizontal > * {\n  flex-shrink: 0;\n  pointer-events: auto;\n}\n\n.auto-animated div {\n  --z-index: -1;\n  opacity: 0;\n  position: absolute;\n}\n\n.auto-animated input {\n  --z-index: -1;\n  opacity: 0;\n  position: absolute;\n}\n\n.auto-animated .container-center-vertical,\n.auto-animated .container-center-horizontal {\n  opacity: 1;\n}\n\n.overlay {\n  display: none;\n  height: 100%;\n  opacity: 0;\n  position: fixed;\n  top: 0;\n  width: 100%;\n}\n\n.overlay.animate-appear {\n  animation: reveal 0.3s ease-in-out 1 normal forwards;\n  display: block;\n  opacity: 0;\n}\n\n.overlay.animate-disappear {\n  animation: reveal 0.3s ease-in-out 1 reverse forwards;\n  display: block;\n  opacity: 1;\n}\n\n@keyframes reveal {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n.animate-nodelay {\n  animation-delay: 0s;\n}\n\n.align-self-flex-start {\n  align-self: flex-start;\n}\n\n.align-self-flex-end {\n  align-self: flex-end;\n}\n\n.align-self-flex-center {\n  align-self: flex-center;\n}\n\n.valign-text-middle {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.valign-text-bottom {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n}\n\ninput:focus {\n  outline: none;\n}\n\n.listeners-active,\n.listeners-active * {\n  pointer-events: auto;\n}\n\n.hidden,\n.hidden * {\n  pointer-events: none;\n  visibility: hidden;\n}\n\n.smart-layers-pointers,\n.smart-layers-pointers * {\n  pointer-events: auto;\n  visibility: visible;\n}\n\n.listeners-active-click,\n.listeners-active-click * {\n  cursor: pointer;\n}\n\n* {\n  box-sizing: border-box;\n}\n:root { \n  --appbackground: #15131b;\n  --appicons: #ccccff1a;\n  --appprimarycolor: #d08df8;\n  --appsecond-text-color: #a59bab;\n  --apptextcolor: #ffffff;\n  --ffffff---white: #ffffff;\n  --x-000000-black: #000000;\n \n  --font-size-l: 24px;\n  --font-size-m: 16px;\n  --font-size-s: 15px;\n  --font-size-xl: 48px;\n  --font-size-xxl: 72px;\n \n  --font-family-roboto: "Roboto", Helvetica;\n}\n.h3bold-24px {\n  font-family: var(--font-family-roboto);\n  font-size: var(--font-size-l);\n  font-style: normal;\n  font-weight: 700;\n  letter-spacing: 0px;\n}\n\n.textregular-16px {\n  font-family: var(--font-family-roboto);\n  font-size: var(--font-size-m);\n  font-style: normal;\n  font-weight: 400;\n  letter-spacing: 0px;\n}\n\n.textbold-16px {\n  font-family: var(--font-family-roboto);\n  font-size: var(--font-size-m);\n  font-style: normal;\n  font-weight: 700;\n  letter-spacing: 0px;\n}\n\n.roboto-bold-white-72px {\n  color: var(--apptextcolor);\n  font-family: var(--font-family-roboto);\n  font-size: var(--font-size-xxl);\n  font-style: normal;\n  font-weight: 700;\n}\n\n.roboto-normal-white-72px {\n  color: var(--apptextcolor);\n  font-family: var(--font-family-roboto);\n  font-size: var(--font-size-xxl);\n  font-style: normal;\n  font-weight: 400;\n}\n\n\n/* screen - home */\n\n.home {\n  background-color: var(--appbackground);\n  height: 2284px;\n  mix-blend-mode: normal;\n  overflow: hidden;\n  overflow-x: hidden;\n  position: relative;\n  width: 1512px;\n}\n\n.home .vector-xl4bh6 {\n  background-color: transparent;\n  height: 606px;\n  left: 602px;\n  mix-blend-mode: normal;\n  position: absolute;\n  top: 168px;\n  width: 824px;\n}\n\n.home .vector-efo9xP {\n  background-color: transparent;\n  height: 270px;\n  left: 1279px;\n  mix-blend-mode: normal;\n  position: absolute;\n  top: 131px;\n  width: 210px;\n}\n\n.home .vector-u6dkWh {\n  background-color: transparent;\n  height: 627px;\n  left: 900px;\n  mix-blend-mode: normal;\n  position: absolute;\n  top: 1606px;\n  width: 604px;\n}\n\n.home .vector-NQoAKi {\n  background-color: transparent;\n  height: 576px;\n  left: 20px;\n  mix-blend-mode: normal;\n  position: absolute;\n  top: 927px;\n  width: 557px;\n}\n\n.home .frame-3183563-xl4bh6 {\n  background-color: transparent;\n  height: 745px;\n  left: 181px;\n  mix-blend-mode: normal;\n  position: absolute;\n  top: 0px;\n  width: 1325px;\n}\n\n.home .x2-1-GKhlYi {\n  background-color: transparent;\n  height: 745px;\n  left: 403px;\n  mix-blend-mode: normal;\n  object-fit: cover;\n  position: absolute;\n  top: 0px;\n  width: 922px;\n}\n\n.home .left-text-GKhlYi {\n  align-items: flex-start;\n  background-color: transparent;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  justify-content: flex-start;\n  left: 0px;\n  mix-blend-mode: normal;\n  position: absolute;\n  top: 228px;\n}\n\n.home .x-Nnsh9L {\n  background-color: transparent;\n  letter-spacing: 0.00px;\n  line-height: normal;\n  margin-top: -1px;\n  mix-blend-mode: normal;\n  position: relative;\n  text-align: left;\n  width: auto;\n}\n\n.home .x-bx1iuq {\n  background-color: transparent;\n  color: var(--appsecond-text-color);\n  font-style: normal;\n  font-weight: 400;\n  height: 152px;\n  line-height: normal;\n  mix-blend-mode: normal;\n  position: relative;\n  text-align: left;\n  width: 418px;\n}\n\n.home .frame-1-Nnsh9L {\n  align-items: flex-start;\n  background-color: transparent;\n  display: flex;\n  gap: 16px;\n  justify-content: flex-start;\n  min-height: 50px;\n  min-width: 457px;\n  mix-blend-mode: normal;\n  position: relative;\n}\n\n.home .buttons-primary-normal-1xSxhw {\n  background-color: transparent;\n  height: 39px;\n  mix-blend-mode: normal;\n  position: relative;\n  width: 254px;\n}\n\n.home .bg-ezEwyA {\n  background-color: transparent;\n  height: 39px;\n  left: 0px;\n  mix-blend-mode: normal;\n  position: absolute;\n  top: 0px;\n  width: 254px;\n}\n\n.home .label-ezEwyA {\n  background-color: transparent;\n  color: var(--apptextcolor);\n  font-family: var(--font-family-roboto);\n  font-size: var(--font-size-s);\n  font-style: normal;\n  font-weight: 500;\n  height: 39px;\n  left: 0px;\n  letter-spacing: 0.00px;\n  line-height: normal;\n  mix-blend-mode: normal;\n  position: absolute;\n  text-align: center;\n  top: -1px;\n  width: 254px;\n}\n\n.home .text_label-1xSxhw {\n  background-color: transparent;\n  color: var(--appprimarycolor);\n  font-family: var(--font-family-roboto);\n  font-size: var(--font-size-s);\n  font-style: normal;\n  font-weight: 500;\n  height: 50px;\n  letter-spacing: 0.00px;\n  line-height: normal;\n  mix-blend-mode: normal;\n  position: relative;\n  text-align: center;\n  text-decoration: underline;\n  width: 187px;\n}\n\n.home .text_label-xl4bh6 {\n  background-color: transparent;\n  color: var(--apptextcolor);\n  font-style: normal;\n  font-weight: 400;\n  height: auto;\n  left: 1114px;\n  line-height: normal;\n  mix-blend-mode: normal;\n  position: absolute;\n  text-align: left;\n  top: 36px;\n  width: 93px;\n}\n\n.home .text_label-efo9xP {\n  background-color: transparent;\n  color: var(--apptextcolor);\n  font-style: normal;\n  font-weight: 400;\n  height: auto;\n  left: 997px;\n  line-height: normal;\n  mix-blend-mode: normal;\n  position: absolute;\n  text-align: left;\n  top: 36px;\n  width: 93px;\n}\n\n.home .frame-3183557-xl4bh6 {\n  -webkit-backdrop-filter: blur(84px) brightness(100%);\n  backdrop-filter: blur(84px) brightness(100%);\n  background-color: var(--appicons);\n  border-radius: 16px;\n  height: 1546px;\n  left: 181px;\n  mix-blend-mode: normal;\n  position: absolute;\n  top: 738px;\n  width: 1150px;\n}\n\n.home .frame-3183559-oQRvUM {\n  align-items: center;\n  background-color: transparent;\n  display: flex;\n  gap: 64px;\n  justify-content: center;\n  left: 0px;\n  mix-blend-mode: normal;\n  position: absolute;\n  top: 82px;\n  width: 1150px;\n}\n\n.home .frame-3183566-sLCC3t {\n  background-color: transparent;\n  height: 102px;\n  mix-blend-mode: normal;\n  position: relative;\n  width: 142px;\n}\n\n.home .text_label-ExZUpN {\n  background-color: transparent;\n  color: var(--apptextcolor);\n  font-style: normal;\n  font-weight: 400;\n  height: auto;\n  left: 0px;\n  line-height: normal;\n  mix-blend-mode: normal;\n  position: absolute;\n  text-align: left;\n  top: -1px;\n  width: 121px;\n}\n\n.home .x50-ExZUpN {\n  background-color: transparent;\n  height: auto;\n  left: 0px;\n  letter-spacing: 0.00px;\n  line-height: normal;\n  mix-blend-mode: normal;\n  position: absolute;\n  text-align: left;\n  top: 31px;\n  width: 142px;\n}\n\n.home .frame-3183565-sLCC3t {\n  background-color: transparent;\n  height: 102px;\n  mix-blend-mode: normal;\n  position: relative;\n  width: 180px;\n}\n\n.home .text_label-F7SFnI {\n  background-color: transparent;\n  color: var(--apptextcolor);\n  font-style: normal;\n  font-weight: 400;\n  height: auto;\n  left: 0px;\n  line-height: normal;\n  mix-blend-mode: normal;\n  position: absolute;\n  text-align: left;\n  top: -1px;\n  width: 180px;\n}\n\n.home .x-F7SFnI {\n  background-color: transparent;\n  height: auto;\n  left: 0px;\n  letter-spacing: 0.00px;\n  line-height: normal;\n  mix-blend-mode: normal;\n  position: absolute;\n  text-align: left;\n  top: 31px;\n  width: 142px;\n}\n\n.home .span0-KPwP09 {\n}\n\n.home .span1-KPwP09 {\n  color: var(--apptextcolor);\n  font-family: var(--font-family-roboto);\n  font-size: var(--font-size-xl);\n  font-style: normal;\n  font-weight: 700;\n}\n\n.home .frame-3183564-sLCC3t {\n  background-color: transparent;\n  height: 106px;\n  mix-blend-mode: normal;\n  position: relative;\n  width: 180px;\n}\n\n.home .text_label-x1VTyq {\n  background-color: transparent;\n  color: var(--apptextcolor);\n  font-style: normal;\n  font-weight: 400;\n  height: auto;\n  left: 0px;\n  line-height: normal;\n  mix-blend-mode: normal;\n  position: absolute;\n  text-align: left;\n  top: -1px;\n  width: 180px;\n}\n\n.home .x20-x1VTyq {\n  background-color: transparent;\n  height: auto;\n  left: 0px;\n  letter-spacing: 0.00px;\n  line-height: normal;\n  mix-blend-mode: normal;\n  position: absolute;\n  text-align: left;\n  top: 35px;\n  width: 167px;\n}\n\n.home .frame-3183560-oQRvUM {\n  align-items: flex-start;\n  background-color: transparent;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  justify-content: flex-start;\n  left: 118px;\n  mix-blend-mode: normal;\n  position: absolute;\n  top: 423px;\n}\n\n.home .text_label-FYIlh6 {\n  background-color: transparent;\n  color: var(--apptextcolor);\n  font-style: normal;\n  font-weight: 700;\n  height: 16px;\n  line-height: normal;\n  margin-top: -1px;\n  mix-blend-mode: normal;\n  position: relative;\n  text-align: left;\n  width: 96px;\n}\n\n.home .x-FYIlh6 {\n  background-color: transparent;\n  height: 173px;\n  letter-spacing: 0.00px;\n  line-height: normal;\n  mix-blend-mode: normal;\n  position: relative;\n  text-align: left;\n  width: 446px;\n}\n\n.home .x-xnbbb3 {\n  background-color: transparent;\n  color: var(--apptextcolor);\n  font-style: normal;\n  font-weight: 400;\n  height: 76px;\n  line-height: normal;\n  mix-blend-mode: normal;\n  position: relative;\n  text-align: left;\n  width: 446px;\n}\n\n.home .text_label-xnbbb3 {\n  background-color: transparent;\n  color: var(--appprimarycolor);\n  font-family: var(--font-family-roboto);\n  font-size: var(--font-size-s);\n  font-style: normal;\n  font-weight: 500;\n  height: 50px;\n  letter-spacing: 0.00px;\n  line-height: normal;\n  mix-blend-mode: normal;\n  position: relative;\n  text-align: left;\n  text-decoration: underline;\n  width: 283px;\n}\n\n.home .frame-oQRvUM {\n  background-color: transparent;\n  height: 428px;\n  left: 634px;\n  mix-blend-mode: normal;\n  position: absolute;\n  top: 362px;\n  width: 428px;\n}\n\n.home .frame-3183561-xl4bh6 {\n  align-items: flex-start;\n  background-color: transparent;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  justify-content: flex-start;\n  left: 298px;\n  mix-blend-mode: normal;\n  position: absolute;\n  top: 1644px;\n}\n\n.home .x-ygxYlc {\n  background-color: transparent;\n  height: 336px;\n  letter-spacing: 0.00px;\n  line-height: normal;\n  margin-top: -1px;\n  mix-blend-mode: normal;\n  position: relative;\n  text-align: left;\n  width: 1009px;\n}\n\n.home .buttons-primary-normal-ygxYlc {\n  background-color: transparent;\n  height: 39px;\n  mix-blend-mode: normal;\n  position: relative;\n  width: 254px;\n}\n\n.home .bg-wzKkUL {\n  background-color: transparent;\n  height: 39px;\n  left: 0px;\n  mix-blend-mode: normal;\n  position: absolute;\n  top: 0px;\n  width: 254px;\n}\n\n.home .label-wzKkUL {\n  background-color: transparent;\n  color: var(--apptextcolor);\n  font-family: var(--font-family-roboto);\n  font-size: var(--font-size-s);\n  font-style: normal;\n  font-weight: 500;\n  height: 39px;\n  left: 0px;\n  letter-spacing: 0.00px;\n  line-height: normal;\n  mix-blend-mode: normal;\n  position: absolute;\n  text-align: center;\n  top: -1px;\n  width: 254px;\n}\n\n.home .frame-3183558-xl4bh6 {\n  background-color: transparent;\n  border: 1px solid var(--apptextcolor);\n  border-image: linear-gradient(to bottom, rgb(146.00000649690628, 147.00000643730164, 248.0000004172325), rgb(208.0000028014183, 141.0000067949295, 248.0000004172325)) 1;\n  border-radius: 90px;\n  height: 43px;\n  left: 1229px;\n  overflow: hidden;\n  position: absolute;\n  top: 27px;\n  width: 184px;\n}\n\n.home .text_label-Hwf56u {\n  background-color: transparent;\n  color: var(--apptextcolor);\n  font-style: normal;\n  font-weight: 400;\n  height: 43px;\n  left: 5px;\n  line-height: normal;\n  mix-blend-mode: normal;\n  position: absolute;\n  text-align: center;\n  top: -1px;\n  width: 172px;\n}\n\n.home .frame-1-xl4bh6 {\n  align-items: center;\n  background-color: transparent;\n  display: flex;\n  gap: 16px;\n  justify-content: center;\n  left: 181px;\n  position: absolute;\n  top: 20px;\n}\n\n.home .vector-B29Bwu {\n  background-color: transparent;\n  height: 50px;\n  mix-blend-mode: normal;\n  position: relative;\n  width: 50px;\n}\n\n.home .radio-it-B29Bwu {\n  background-color: transparent;\n  color: var(--apptextcolor);\n  font-style: normal;\n  font-weight: 700;\n  height: 30px;\n  line-height: normal;\n  mix-blend-mode: normal;\n  position: relative;\n  text-align: left;\n  width: 292px;\n}\n'
        }}
      />
      <style
        id="action-links-styles"
        dangerouslySetInnerHTML={{
          __html:
            '\n@import url(\'https://fonts.googleapis.com/css2?family=Mulish&display=swap\');\n\n#anima-interface{\n  transition: all 0.5s ease-in-out;\n}\n\n#anima-watermark {\n  transition: all 0.5s ease-in-out;\n  display: none;\n}\n#anima-watermark-link{\n  position: fixed;\n  bottom:20px;\n  height:30px;\n  border-radius: 1000px;\n  background: #3B3B3B;\n  display:flex;\n  align-items:center;\n  justify-content:center;\n  cursor:pointer;\n  user-select:none;\n  transition: width 0.25s cubic-bezier(0.175, 0.885, 0.320, 1.275);\n  text-decoration:none;\n  color:#fff;\n  padding:8px 16px 8px 11px;\n  font-family:Mulish, sans-serif;\n  font-size:12px;\n}\n#anima-watermark-link .text {\n  margin-left: 6px;\n}\n\n.omniview-anima-action-links .link{\n  height: 30px;\n  width: 30px;\n  border-radius: 1000px;\n  background: #3B3B3B;\n  display:flex;\n  align-items:center;\n  justify-content:center;\n  cursor:pointer;\n  user-select:none;\n  transition: width 0.25s cubic-bezier(0.175, 0.885, 0.320, 1.275);\n  text-decoration:none;\n  color:#fff;\n}\n.omniview-anima-action-links #comment-link .text,.omniview-anima-action-links #code-link .text{\n  display:none;\n  font-size:12px;\n  margin-right:5px;\n}\n.omniview-anima-action-links #comment-link:hover,.omniview-anima-action-links #code-link:hover{\n  width:105px;\n}\n.omniview-anima-action-links #comment-link.pop-active,.omniview-anima-action-links #code-link.pop-active{\n  width:105px;\n  background: #FF6250;\n}\n.omniview-anima-action-links #comment-link.pop-active .text,.omniview-anima-action-links #code-link.pop-active .text{\n  display:block\n}\n.omniview-anima-action-links #comment-link:hover .text,.omniview-anima-action-links #code-link:hover .text{\n  display:block;\n}\n\n.link.navigation{\n  position:fixed;\n  left:50%;\n  transform:translateX(-50%);\n  width:auto;\n  height:32px;\n  color:#fff;\n  font-size:12px;\n  cursor:default;\n  padding:0 5px;\n}\n.link.navigation .icon{\n  margin:0 6px;\n  fill:none;\n  stroke:currentColor;\n  cursor:pointer;\n}\n.link.navigation .icon.disabled{\n  opacity:0.5;\n  cursor:default;\n}\n\n\n.link.navigation .home-icon{\n  margin-left:6px;\n  fill:currentColor;\n  stroke:currentColor;\n  cursor:pointer;\n}\n\n.omniview-anima-action-links .restart{\n  height: 30px;\n  padding:0 12px;\n  background: #3B3B3B;\n  border-radius: 1000px;\n  display:flex;\n  align-items:center;\n  justify-content:center;\n  cursor:pointer;\n  color:#f1f1f1;\n  font-size: 12px;\n}\n\n.omniview-anima-action-links{\n  display:flex;\n  align-items:center;\n  position:fixed;\n  bottom:20px;\n  right:20px;\n  font-family:Mulish, sans-serif;\n  transition: all 0.5s ease-in-out;\n  opacity:1;\n}\n\n.omniview-anima-action-links > * + *{\n   margin-right: 0;\n   margin-left: 10px;\n}\n\n.idle{\n  opacity:0;\n  pointer-events:none;\n}\n\n#popoverOpener {\n  position: absolute;\n  left: 50%;\n  margin-left: -10vw;\n  text-align: center;\n  top: 45vh;\n  width: 20vw;\n}\n\n\n.popover {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1060;\n  display: none;\n  font-family: "sans-serif";\n  font-size: 14px;\n  background-color: #fff;\n  border-radius: 10px;\n  box-shadow: 0 5px 10px rgba(0,0,0,.2);\n}\n\n.popover.top {\n  margin-top: -12px\n}\n\n.popover.right {\n  margin-left: 10px\n}\n\n.popover.bottom {\n  margin-top: 10px\n}\n\n.popover.left {\n  margin-left: -10px\n}\n\n.popover-title {\n  padding: 8px 14px;\n  margin: 0;\n  font-size: 14px;\n  background-color: #f7f7f7;\n  border-bottom: 1px solid #ebebeb;\n  border-radius: 5px 5px 0 0\n}\n\n.popover-content {\n  height: 100%;\n  width: 100%;\n  display:flex;\n  overflow:hidden;\n  font-family:Mulish, sans-serif;\n}\n\n\n\n.popover>.arrow,.popover>.arrow:after {\n  position: absolute;\n  display: block;\n  width: 0;\n  height: 0;\n  border-color: transparent;\n  border-style: solid\n}\n\n.popover>.arrow {\n  border-width: 11px\n}\n\n.popover>.arrow:after {\n  content: "";\n  border-width: 10px\n}\n\n.popover.top>.arrow {\n  bottom: -11px;\n  left: 50%;\n  margin-left: -11px;\n  border-top-color: #999;\n  border-top-color: rgba(0,0,0,.25);\n  border-bottom-width: 0\n}\n\n.popover.top>.arrow:after {\n  bottom: 1px;\n  margin-left: -10px;\n  content: " ";\n  border-top-color: #fff;\n  border-bottom-width: 0\n}\n\n.popover.right>.arrow {\n  top: 50%;\n  left: -11px;\n  margin-top: -11px;\n  border-right-color: #999;\n  border-right-color: rgba(0,0,0,.25);\n  border-left-width: 0\n}\n\n.popover.right>.arrow:after {\n  bottom: -10px;\n  left: 1px;\n  content: " ";\n  border-right-color: #fff;\n  border-left-width: 0\n}\n\n.popover.bottom>.arrow {\n  top: -11px;\n  left: 50%;\n  margin-left: -11px;\n  border-top-width: 0;\n  border-bottom-color: #999;\n  border-bottom-color: rgba(0,0,0,.25)\n}\n\n.popover.bottom>.arrow:after {\n  top: 1px;\n  margin-left: -10px;\n  content: " ";\n  border-top-width: 0;\n  border-bottom-color: #fff\n}\n\n.popover.left>.arrow {\n  top: 50%;\n  right: -11px;\n  margin-top: -11px;\n  border-right-width: 0;\n  border-left-color: #999;\n  border-left-color: rgba(0,0,0,.25)\n}\n\n.popover.left>.arrow:after {\n  right: 1px;\n  bottom: -10px;\n  content: " ";\n  border-right-width: 0;\n  border-left-color: #fff\n}\n\n\n\n#anima-comment-popover,#anima-code-popover{\n  background:#333333;\n  color:#fff;\n}\n\n#anima-comment-popover.top>.arrow,#anima-comment-popover.top>.arrow:after,#anima-code-popover.top>.arrow:after,#anima-code-popover.top>.arrow {\n  border-top-color:#333;  \n}\n\n#anima-comment-popover .btn,#anima-code-popover .btn {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  padding: 6px 20px;\n  background: #FF6250;\n  color:#fff;\n  border-radius: 100px;\n  width: max-content;\n  text-decoration:none;\n}\n\n@media screen and (max-width: 550px) {\n  #anima-watermark-link {\n    padding: 6px !important;\n  }\n  #anima-watermark-link .text {\n    display: none !important;\n  }\n}\n\n'
        }}
      />
      <input type="hidden" id="anPageName" name="page" defaultValue="home" />
      <div className="container-center-horizontal">
        <div className="home screen " data-id="74275:16590">
          <img
            className="vector-xl4bh6"
            data-id="74276:16638"
            src="./home_files/vector@1x.svg"
            anima-src="https://cdn.animaapp.com/projects/617e6a51b89752441010802c/releases/6280b6f385087b56731438ea/img/vector@1x.svg"
          />
          <img
            className="vector-efo9xP"
            data-id="74276:16636"
            src="./home_files/vector-1@2x.svg"
            anima-src="https://cdn.animaapp.com/projects/617e6a51b89752441010802c/releases/6280b6f385087b56731438ea/img/vector-1@2x.svg"
          />
          <img
            className="vector-u6dkWh"
            data-id="74277:16846"
            src="./home_files/vector-2@1x.svg"
            anima-src="https://cdn.animaapp.com/projects/617e6a51b89752441010802c/releases/6280b6f385087b56731438ea/img/vector-2@1x.svg"
          />
          <img
            className="vector-NQoAKi"
            data-id="74277:16848"
            src="./home_files/vector-3@1x.svg"
            anima-src="https://cdn.animaapp.com/projects/617e6a51b89752441010802c/releases/6280b6f385087b56731438ea/img/vector-3@1x.svg"
          />
          <div className="frame-3183563-xl4bh6" data-id="74281:16866">
            <img
              className="x2-1-GKhlYi"
              data-id="74276:16635"
              src="./home_files/2-1@1x.png"
              anima-src="https://cdn.animaapp.com/projects/617e6a51b89752441010802c/releases/62892cba942c0ccc76e53fe2/img/2-1@1x.png"
            />
            <div className="left-text-GKhlYi" data-id="74275:16598">
              <h1
                className="x-Nnsh9L roboto-normal-white-72px"
                data-id="74275:16597"
              >
                Исследуйте
                <br />
                Новые радиостанции.
              </h1>
              <p className="x-bx1iuq textregular-16px" data-id="74276:16675">
                Создание своей радиостанции довольно трудоёмкий процесс, необходимо
                подавать заявки на частоту вещания, пройти
                конкрус,&nbsp;&nbsp;предъявить заявки в Роскомнадзор. Наш сервис
                позволит&nbsp;&nbsp;вам создать свою радиостанцию за парку кликов и
                транслировать&nbsp;&nbsp;свои идеи аудитории.
              </p>
              <div className="frame-1-Nnsh9L" data-id="74275:16606">
                <div
                  className="buttons-primary-normal-1xSxhw"
                  data-id="74275:16602"
                >
                  <img
                    className="bg-ezEwyA"
                    data-id="I74275:16602;5:140"
                    src="./home_files/bg@2x.svg"
                    anima-src="https://cdn.animaapp.com/projects/617e6a51b89752441010802c/releases/62892cba942c0ccc76e53fe2/img/bg@2x.svg"
                  />
                  <Link href="/start_streaming">
                    <button>
                      <div
                        className="label-ezEwyA valign-text-middle"
                        data-id="I74275:16602;5:141"
                      >
                        Создать свою станцию
                      </div>
                    </button>
                  </Link>

                </div>
                <Link href="/choose">
                  <button>
                    <div
                      className="text_label-1xSxhw valign-text-middle"
                      data-id="74276:16677"
                    >
                      Послушать все станции 🠒
                    </div>
                  </button>
                </Link>

              </div>
            </div>
          </div>
          <Link href="/choose">
            <button>
              <div className="text_label-xl4bh6 textregular-16px" data-id="74276:16622">
                Все станции
              </div>
            </button>
          </Link>
          <Link href="/">
            <button>
              <div className="text_label-efo9xP textregular-16px" data-id="74276:16667">
                Главная
              </div>
            </button>
          </Link >

          <div className="frame-3183557-xl4bh6" data-id="74276:16625">
            <div className="frame-3183559-oQRvUM" data-id="74276:16672">
              <div className="frame-3183566-sLCC3t" data-id="74290:16874">
                <div
                  className="text_label-ExZUpN textregular-16px"
                  data-id="74276:16627"
                >
                  Станций
                </div>
                <div
                  className="x50-ExZUpN roboto-bold-white-72px"
                  data-id="74276:16630"
                >
                  50+
                </div>
              </div>
              <div className="frame-3183565-sLCC3t" data-id="74290:16873">
                <div
                  className="text_label-F7SFnI textregular-16px"
                  data-id="74276:16628"
                >
                  Время вещания
                </div>
                <div
                  className="x-F7SFnI roboto-bold-white-72px"
                  data-id="74276:16631"
                >
                  <span className="span0-KPwP09 roboto-bold-white-72px">∞</span>
                  <span className="span1-KPwP09">+</span>
                </div>
              </div>
              <div className="frame-3183564-sLCC3t" data-id="74290:16872">
                <div
                  className="text_label-x1VTyq textregular-16px"
                  data-id="74276:16629"
                >
                  Слушателей
                </div>
                <div
                  className="x20-x1VTyq roboto-bold-white-72px"
                  data-id="74276:16632"
                >
                  20к+
                </div>
              </div>
            </div>
            <div className="frame-3183560-oQRvUM" data-id="74276:16676">
              <div
                className="text_label-FYIlh6 textbold-16px"
                data-id="74276:16673"
              >
                Популярное
              </div>
              <div
                className="x-FYIlh6 roboto-normal-white-72px"
                data-id="74276:16680"
              >
                Горячее за эту неделю.
              </div>
              <p className="x-xnbbb3 textregular-16px" data-id="74275:16595">
                Некоторые&nbsp;&nbsp;радиостанции особенно популярны, на них люди
                рассказывают о пользе продуктов, как правильно делать зарядку,
                рассказывают новости&nbsp;&nbsp;за последние события.
              </p>
              <Link href="/choose">
                <button>
                  <div
                    className="text_label-xnbbb3 valign-text-middle"
                    data-id="74275:16605"
                  >
                    Послушать чужие станции 🠒
                  </div>
                </button>
              </Link>


            </div>
            <img
              className="frame-oQRvUM"
              data-id="74277:16849"
              src="./home_files/frame@2x.svg"
              anima-src="https://cdn.animaapp.com/projects/617e6a51b89752441010802c/releases/62892cba942c0ccc76e53fe2/img/frame@2x.svg"
            />
          </div>
          <div className="frame-3183561-xl4bh6" data-id="74276:16682">
            <div
              className="x-ygxYlc roboto-normal-white-72px"
              data-id="74276:16674"
            >
              Добавь сайт в закладки и включи уведомления, чтобы знать о новых
              радиостанциях
            </div>
            <div className="buttons-primary-normal-ygxYlc" data-id="74276:16683">
              <img
                className="bg-wzKkUL"
                data-id="I74276:16683;5:140"
                src="./home_files/bg-1@2x.svg"
                anima-src="https://cdn.animaapp.com/projects/617e6a51b89752441010802c/releases/62892cba942c0ccc76e53fe2/img/bg-1@2x.svg"
              />
              <button>
                <div
                  className="label-wzKkUL valign-text-middle"
                  data-id="I74276:16683;5:141"
                >
                  Добавь сайт в закладки
                </div>
              </button>

            </div>
          </div>
          <Link href="start_streaming">
            <button>
              <div className="frame-3183558-xl4bh6" data-id="74276:16670">
                <div
                  className="text_label-Hwf56u valign-text-middle textregular-16px"
                  data-id="74276:16671"
                >
                  Своя станция
                </div>
              </div>
            </button>
          </Link>
          <div className="frame-1-xl4bh6" data-id="74277:16811">
            <img
              className="vector-B29Bwu"
              data-id="74277:16810"
              src="./home_files/vector-4@2x.svg"
              anima-src="https://cdn.animaapp.com/projects/617e6a51b89752441010802c/releases/6280b6f385087b56731438ea/img/vector-4@2x.svg"
            />
            <div className="radio-it-B29Bwu h3bold-24px" data-id="74275:16601">
              RadioIT
            </div>
          </div>
        </div>
      </div>
      <div id="t_preload_links" />
      <div id="anima-interface" data-turbolinks-permanent="true" className="idle">
        {/**/}
        <div
          id="anima-comment-popover"
          className="popover top"
          role="tooltip"
          style={{ left: "-205px", top: "-220px" }}
        >
          <div className="arrow" style={{ marginLeft: 128 }} />
          <div className="popover-content" style={{ alignItems: "center" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
                padding: 20
              }}
            >
              <h3
                style={{
                  fontSize: 18,
                  marginBottom: 10,
                  fontWeight: 500,
                  lineHeight: 26,
                  fontFamily: "Roslindale"
                }}
              >
                Leave feedback and collaborate
              </h3>
              <p
                style={{
                  fontSize: 12,
                  marginBottom: 20,
                  fontWeight: 400,
                  lineHeight: 20
                }}
              >

              </p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
                href="https://projects.animaapp.com/p/undefined/s/home?mode=comments&utm_campaign=add-comment&utm_medium=add-comment&utm_source=animaapp.io"
              >
                Add comment
              </a>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                paddingRight: 20
              }}
            >
              <img src="./home_files/comment-illustration.svg" />
            </div>
          </div>
        </div>
        <div
          id="anima-code-popover"
          className="popover top"
          role="tooltip"
          style={{ left: "-205px", top: "-220px" }}
        >
          <div className="arrow" style={{ marginLeft: 168 }} />
          <div className="popover-content" style={{ alignItems: "center" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
                padding: 20
              }}
            >
              <h3
                style={{
                  fontSize: 18,
                  marginBottom: 10,
                  fontWeight: 500,
                  lineHeight: 26,
                  fontFamily: "Roslindale"
                }}
              >
                Get clean code you’ll love with Anima
              </h3>
              <p
                style={{
                  fontSize: 12,
                  marginBottom: 20,
                  fontWeight: 400,
                  lineHeight: 20
                }}
              >
                Login and easily export HTML, React or Vue of this prototype. Don’t
                have an account? Sign up for free!
              </p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
                href="https://projects.animaapp.com/p/undefined/s/home?mode=code&utm_campaign=get-code&utm_medium=get-code&utm_source=animaapp.io"
              >
                Get code
              </a>
            </div>
            <img src="./home_files/code-illustration.svg" />
          </div>
        </div>
        <div className="omniview-anima-action-links" id="actions-wrap">
          <div className="omniview-anima-action-links">
            <div
              id="page-nav"
              className="link navigation"
              style={{ display: "none" }}
            >
              <svg
                id="homepage-icon"
                className="home-icon"
                width={24}
                height={24}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.151 11a.25.25 0 01-.167-.436l4.349-3.913a.25.25 0 01.334 0l4.349 3.913a.25.25 0 01-.167.436H8.15zM16 12H9v4a1 1 0 001 1h5a1 1 0 001-1v-4z"
                  fill="#fff"
                />
              </svg>
              <svg
                className="icon"
                id="arrow-left"
                width={24}
                height={24}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 18l-6-6 6-6"
                  stroke="#fff"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span id="page-num" />
              <svg
                className="icon"
                id="arrow-right"
                width={24}
                height={24}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 6l6 6-6 6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <a
              className="link"
              id="comment-link"
              target="_blank"
              style={{ display: "none" }}
            >
              <span className="text">Comment</span>
              <svg
                width={20}
                height={20}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4.301 15.137a.551.551 0 01.199-.55c.314-.23.554-.554.718-.965A6.015 6.015 0 014 10 6.006 6.006 0   0110.001 4 6.006 6.006 0 0116 10.001 6.006 6.006 0 019.999 16a5.98 5.98 0 01-3.095-.86 3.165 3.165 0 01-1.65.438 3.6  3.6 0 01-.57-.044c-.191-.03-.34-.186-.383-.397z"
                  fill="#fff"
                />
              </svg>
            </a>
            <a
              className="link"
              id="code-link"
              target="_blank"
              style={{ display: "none" }}
            >
              <span className="text">Get Code</span>
              <svg
                width={20}
                height={20}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 15.667a1 1 0 01-.707-1.708l3.626-3.625-3.626-3.626a1 1 0 111.415-1.415l4.333 4.333a1 1 0 010 1.414l-4.333 4.333a.993.993 0 01-.707.294zM7.333 5a1 1 0 01.707 1.708l-3.626 3.625 3.627 3.626a1 1 0 11-1.415 1.415L2.293 11.04a1 1 0 010-1.415l4.333-4.333A.992.992 0 017.333 5z"
                  fill="#fff"
                />
              </svg>
            </a>
            <div className="restart" id="restart-btn" style={{ display: "none" }}>
              <svg
                style={{ marginRight: 6 }}
                width={12}
                height={12}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 11.817A5.017 5.017 0 01.994 6.811c0-.207.169-.375.375-.375s.375.168.375.375A4.265 4.265 0 006 11.067a4.265 4.265 0 004.256-4.256A4.265 4.265 0 006 2.555a.376.376 0 01-.375-.376c0-.206.169-.374.375-.374a5.017 5.017 0 015.006 5.006A5.017 5.017 0 016 11.817z"
                  fill="#fff"
                />
                <path
                  d="M6.75 4.237a.37.37 0 01-.263-.112l-1.65-1.65a.363.363 0 010-.525L6.487.3c.15-.15.375-.15.525 0 .15.15.15.375 0 .525L5.625 2.212 7.012 3.6c.15.15.15.375 0 .525-.056.075-.15.112-.262.112z"
                  fill="#fff"
                />
              </svg>
              Restart
            </div>
          </div>
        </div>
        {/**/}
      </div>

    </>
  )
}

export default Home
