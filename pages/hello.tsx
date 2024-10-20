"use client";
import React from "react";

const hello = () => {
  return (
    <div className="max-w-xl mx-auto">
      <div className="bg-background flex flex-col gap-1 @sm/appRoot:gap-2.5 p-2.5 pt-0 rounded-[26px]">
        <div className="">
          <div className="flex justify-between gap-2 items-center py-2 px-4 @sm/appRoot:pb-2 @sm/appRoot:pt-2 @sm/appRoot:px-8 pr-0 @sm/appRoot:pr-0">
            <div className="flex gap-2 text-subText">
              <span className="text-lg sm:text-base/[19px] font-proximaMedium sm:font-proximaBold cursor-pointer text-mainText">
                Swap
              </span>
              <span className="text-lg sm:text-base/[19px] font-proximaMedium sm:font-proximaBold cursor-pointer">
                Limit
              </span>
              <span className="text-lg sm:text-base/[19px] font-proximaMedium sm:font-proximaBold cursor-pointer hidden">
                DCA
              </span>
            </div>
            <div className="flex gap-2 items-center">
              <div className="spinner-grow" role="status"></div>
              <div className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 20 20"
                  fill="none"
                  className="text-mainText cursor-pointer hover:text-gray-103 w-[18px] min-w-[18px] sm:w-[16px] sm:min-w-[16px]"
                >
                  <path
                    d="M2.14126 4.73901L1.37204 4.74288C1.37417 5.16469 1.71558 5.50611 2.1374 5.50823L2.14126 4.73901ZM4.74822 5.52135C5.17306 5.52349 5.51918 5.18083 5.52131 4.756C5.52345 4.33116 5.18079 3.98504 4.75596 3.98291L4.74822 5.52135ZM2.89737 2.12432C2.89524 1.69949 2.54911 1.35683 2.12428 1.35896C1.69945 1.3611 1.35679 1.70722 1.35893 2.13205L2.89737 2.12432ZM1.61701 8.75377C1.6747 8.33284 1.38026 7.94491 0.959355 7.88722C0.538462 7.82953 0.150482 8.12392 0.0927894 8.54484L1.61701 8.75377ZM17.0382 2.96183C13.12 -0.956324 6.78842 -0.996006 2.89619 2.89623L3.98405 3.98409C7.26519 0.702941 12.6227 0.722008 15.9504 4.04969L17.0382 2.96183ZM2.96179 17.0382C6.87994 20.9564 13.2116 20.996 17.1038 17.1038L16.0159 16.0159C12.7348 19.2971 7.37733 19.2781 4.04965 15.9504L2.96179 17.0382ZM17.1038 17.1038C20.996 13.2116 20.9563 6.87998 17.0382 2.96183L15.9504 4.04969C19.2781 7.37736 19.297 12.7348 16.0159 16.0159L17.1038 17.1038ZM2.89619 2.89623L1.59734 4.19508L2.68519 5.28294L3.98405 3.98409L2.89619 2.89623ZM2.1374 5.50823L4.74822 5.52135L4.75596 3.98291L2.14513 3.96979L2.1374 5.50823ZM2.91049 4.73514L2.89737 2.12432L1.35893 2.13205L1.37204 4.74288L2.91049 4.73514ZM0.0927894 8.54484C-0.318935 11.5486 0.639888 14.7163 2.96179 17.0382L4.04965 15.9504C2.07982 13.9805 1.26831 11.2977 1.61701 8.75377L0.0927894 8.54484Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
              <div className="flex gap-[10px] items-center">
                <div className="rounded-xl bg-containers font-semibold flex justify-between items-center h-[40px] sm:h-[30px] px-4 sm:px-3 gap-2 cursor-pointer transition-all duration-200">
                  <div className="text-sm text-accent flex items-center gap-1">
                    <span className="leading-none">2%</span>
                  </div>
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 26 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    font-size="20"
                    className="text-accent cursor-pointer"
                  >
                    <ellipse
                      cx="13"
                      cy="13.5"
                      rx="3.81833"
                      ry="3.75"
                      stroke="currentColor"
                      stroke-width="2"
                    ></ellipse>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M15.247 1.1903C14.7791 1 14.1861 1 13 1C11.8139 1 11.2209 1 10.7531 1.1903C10.1294 1.44404 9.6338 1.93073 9.37544 2.54329C9.2575 2.82293 9.21134 3.14813 9.19328 3.62249C9.16674 4.3196 8.80273 4.96486 8.18757 5.31366C7.57244 5.66245 6.82143 5.64943 6.19345 5.32345C5.76613 5.10163 5.45628 4.97828 5.15073 4.93878C4.48137 4.85223 3.80443 5.03036 3.26882 5.434C2.86711 5.73673 2.57059 6.24112 1.97756 7.24991C1.38452 8.25871 1.088 8.7631 1.0219 9.25614C0.93379 9.9135 1.11517 10.5783 1.52617 11.1044C1.71375 11.3445 1.97739 11.5462 2.38657 11.7987C2.9881 12.17 3.37514 12.8024 3.3751 13.5C3.37506 14.1976 2.98804 14.8299 2.38656 15.201C1.97733 15.4536 1.71365 15.6555 1.52604 15.8956C1.11505 16.4216 0.933663 17.0864 1.02179 17.7437C1.08787 18.2367 1.38439 18.7413 1.97743 19.75C2.57048 20.7587 2.867 21.2632 3.2687 21.5659C3.80431 21.9695 4.48125 22.1476 5.1506 22.0611C5.45613 22.0216 5.76596 21.8983 6.19326 21.6765C6.82128 21.3505 7.57233 21.3375 8.18752 21.6863C8.8027 22.0351 9.16674 22.6804 9.19328 23.3776C9.21135 23.8519 9.2575 24.1771 9.37544 24.4568C9.6338 25.0693 10.1294 25.556 10.7531 25.8097C11.2209 26 11.8139 26 13 26C14.1861 26 14.7791 26 15.247 25.8097C15.8706 25.556 16.3662 25.0693 16.6245 24.4568C16.7425 24.1771 16.7887 23.8519 16.8068 23.3775C16.8332 22.6804 17.1972 22.0351 17.8124 21.6863C18.4275 21.3374 19.1786 21.3505 19.8067 21.6765C20.234 21.8983 20.5438 22.0215 20.8492 22.061C21.5186 22.1476 22.1956 21.9695 22.7311 21.5659C23.1328 21.2631 23.4294 20.7587 24.0224 19.7499C24.6155 18.7411 24.912 18.2367 24.9781 17.7437C25.0662 17.0864 24.8848 16.4215 24.4738 15.8955C24.2862 15.6554 24.0225 15.4535 23.6133 15.201C23.0119 14.8299 22.6249 14.1975 22.6249 13.4999C22.6249 12.8023 23.0119 12.1701 23.6133 11.799C24.0226 11.5464 24.2863 11.3446 24.474 11.1044C24.8849 10.5784 25.0663 9.91359 24.9782 9.25621C24.9122 8.76319 24.6156 8.25879 24.0225 7.25C23.4295 6.24121 23.133 5.73681 22.7313 5.43409C22.1957 5.03045 21.5187 4.85231 20.8493 4.93886C20.5439 4.97836 20.2341 5.1017 19.8067 5.3235C19.1787 5.64949 18.4276 5.66253 17.8125 5.3137C17.1972 4.96489 16.8332 4.31958 16.8068 3.62243C16.7887 3.1481 16.7425 2.82291 16.6245 2.54329C16.3662 1.93073 15.8706 1.44404 15.247 1.1903Z"
                      stroke="currentColor"
                      stroke-width="2"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2.5">
            <div className="flex flex-col items-center gap-1 @sm/appRoot:gap-2.5 relative">
              <div className="flex flex-col px-3.5 py-3 @sm/appRoot:px-8 sm/appRoot:py-5 bg-containers rounded-3xl w-full border-containers border-2 min-h-[110px]">
                <div className="text-sm font-semibold flex justify-between w-full items-center sm:pb-[7px]">
                  <span className="font-proximaMedium sm:font-proximaSemiBold text-lg sm:text-sm/none text-subText tracking-tight">
                    You sell
                  </span>
                  <div className="flex gap-2 items-center text-subText sm:text-sm/[17px]">
                    <span className="sm:font-proximaSemiBold">Balance: 0</span>
                    <span className="sm:font-proximaSemiBold text-accent hover:text-accent hover:opacity-90 cursor-pointer uppercase">
                      Max
                    </span>
                  </div>
                </div>
                <div className="flex items-center space-x-2 justify-between">
                  <div className="flex items-center p-2 -ml-2 sm:ml-0 sm:p-0 gap-1 rounded-lg cursor-pointer duration-200 ease-in-out hover:bg-background">
                    <div
                      className="relative flex justify-center items-center w-[18px] h-[18px] @md/appRoot:hidden mr-1 rounded-full pb-0.5"
                      style={{
                        minHeight: "18px",
                        minWidth: "18px",
                        maxHeight: "18px",
                        maxWidth: "18px",
                      }}
                    >
                      <img
                        src=""
                        alt=""
                        width="18"
                        height="18"
                        className="rounded-full"
                      />
                      <img
                        src=""
                        className="absolute @md/appRoot:bottom-[-2.5px] @md/appRoot:right-[-2.5px] z-2 bottom-[-1px] right-[-1px] w-2.5 h-2.5"
                        width="15"
                        height="15"
                      />
                    </div>
                    <div
                      className="relative justify-center items-center hidden w-[30px] h-[30px] @md/appRoot:block @md/appRoot:h-[30px] mr-1 rounded-full pb-0.5"
                      style={{
                        minHeight: "30px",
                        minWidth: "30px",
                        maxHeight: "30px",
                        maxWidth: "30px",
                      }}
                    >
                      <img
                        src=""
                        alt=""
                        width="30"
                        height="30"
                        className="rounded-full"
                      />
                      <img
                        src=""
                        className="absolute @md/appRoot:bottom-[-2.5px] @md/appRoot:right-[-2.5px] z-2 bottom-[-1px] right-[-1px]"
                        width="15"
                        height="15"
                      />
                    </div>
                    <span className="@md/appRoot:text-3xl @sm/appRoot:text-lg leading-none text-mainText font-proximaMedium tracking-tighter">
                      ADA
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="15"
                      viewBox="0 0 8 5"
                      fill="none"
                      className="text-mainText w-2.5 h-2.5 @md/appRoot:w-3 @md/appRoot:h-3"
                    >
                      <path
                        d="M7.6364 1.6364C7.98787 1.28493 7.98787 0.715076 7.6364 0.363602C7.28493 0.0121284 6.71508 0.0121278 6.3636 0.363601L7.6364 1.6364ZM3.3636 3.3636C3.01213 3.71508 3.01213 4.28493 3.3636 4.6364C3.71508 4.98787 4.28493 4.98787 4.6364 4.6364L3.3636 3.3636ZM1.6364 0.363601C1.28493 0.0121281 0.715075 0.0121281 0.363601 0.363601C0.0121281 0.715075 0.0121281 1.28493 0.363601 1.6364L1.6364 0.363601ZM3.35897 4.63176C3.71044 4.98324 4.28029 4.98324 4.63176 4.63176C4.98324 4.28029 4.98324 3.71044 4.63176 3.35897L3.35897 4.63176ZM7 1C6.3636 0.363601 6.36359 0.363608 6.36358 0.363623C6.36356 0.363639 6.36354 0.363661 6.36351 0.363692C6.36345 0.363752 6.36336 0.363843 6.36324 0.363964C6.363 0.364206 6.36263 0.364568 6.36215 0.365049C6.36119 0.366011 6.35976 0.367448 6.35785 0.369348C6.35405 0.37315 6.3484 0.378807 6.34097 0.386228C6.32613 0.40107 6.30423 0.42297 6.276 0.451201C6.21954 0.507662 6.13776 0.589444 6.03647 0.69073C5.8339 0.893301 5.55331 1.17389 5.24126 1.48594C4.61714 2.11006 3.86714 2.86006 3.3636 3.3636L4.6364 4.6364C5.13994 4.13286 5.88994 3.38286 6.51405 2.75874C6.82611 2.44668 7.1067 2.1661 7.30927 1.96353C7.41055 1.86224 7.49234 1.78046 7.5488 1.724C7.57703 1.69577 7.59893 1.67387 7.61377 1.65903C7.62119 1.65161 7.62685 1.64595 7.63065 1.64215C7.63255 1.64025 7.63399 1.63881 7.63495 1.63785C7.63543 1.63737 7.63579 1.637 7.63603 1.63676C7.63616 1.63664 7.63625 1.63655 7.63631 1.63649C7.63634 1.63646 7.63636 1.63644 7.63638 1.63642C7.63639 1.63641 7.6364 1.6364 7 1ZM0.363601 1.6364L3.35897 4.63176L4.63176 3.35897L1.6364 0.363601L0.363601 1.6364Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <input
                      type="text"
                      // inputmode="decimal"
                      className="px-0 border-none border-transparent focus-visible:border-transparent focus-visible:ring-0 focus-visible:ring-offset-0 text-right bg-transparent w-full sm:h-7.5 @md/appRoot:text-3xl text-lg text-mainText font-proximaMedium tracking-tighter"
                      placeholder="0"
                      value="0"
                    />
                  </div>
                </div>
                <div className="text-sm flex justify-between w-full sm:pt-[7px]">
                  <span className="text-base sm:text-sm/none text-subText font-proximaMedium">
                    Cardano
                  </span>
                  <span className="text-base sm:text-sm/none text-subText font-proximaMedium flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      stroke-linejoin="round"
                      className="sm:h-[14px]"
                    >
                      <path d="M4 12c0 -1.657 1.592 -3 3.556 -3c1.963 0 3.11 1.5 4.444 3c1.333 1.5 2.48 3 4.444 3s3.556 -1.343 3.556 -3"></path>
                    </svg>
                    $0.00
                  </span>
                </div>
              </div>
              <div className="flex justify-center items-center w-10 h-10 sm:w-[35px] sm:h-[35px] bg-containers rounded-full border-4 border-background absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-subText"
                >
                  <path d="M12 5l0 14"></path>
                  <path d="M18 13l-6 6"></path>
                  <path d="M6 13l6 6"></path>
                </svg>
              </div>
              <div className="flex flex-col px-3.5 py-3 @sm/appRoot:px-8 sm/appRoot:py-5 bg-background rounded-3xl w-full border-containers border-2 min-h-[110px]">
                <div className="text-sm font-semibold justify-between w-full flex sm:pb-[7px]">
                  <span className="text-lg sm:text-sm/none text-subText font-proximaMedium sm:font-proximaSemiBold tracking-tight">
                    You buy
                  </span>
                  <div className="flex gap-2 items-center text-subText sm:text-sm/[17px] sm:font-proximaSemiBold">
                    <span>Balance: 0</span>
                  </div>
                </div>
                <div className="flex items-center space-x-2 justify-between">
                  <div className="flex items-center p-2 -ml-2 sm:ml-0 sm:p-0 gap-1 rounded-lg cursor-pointer duration-200 ease-in-out hover:bg-background">
                    <div
                      className="relative flex justify-center items-center w-[18px] h-[18px] @md/appRoot:hidden mr-1 rounded-full pb-0.5"
                      style={{
                        minHeight: "18px",
                        minWidth: "18px",
                        maxHeight: "18px",
                        maxWidth: "18px",
                      }}
                    >
                      <img
                        src=""
                        className="rounded-full"
                        width="18"
                        height="18"
                        alt="95a427e384527065f2f8946f5e86320d0117839a5e98ea2c0b55fb0048554e54"
                        style={{
                          display: "block",
                          maxWidth: "18px",
                          maxHeight: "18px",
                        }}
                      />
                      <img
                        src=""
                        className="absolute @md/appRoot:bottom-[-2.5px] @md/appRoot:right-[-2.5px] z-2 bottom-[-1px] right-[-1px] w-2.5 h-2.5"
                        width="15"
                        height="15"
                      />
                    </div>
                    <div
                      className="relative justify-center items-center hidden w-[30px] h-[30px] @md/appRoot:block @md/appRoot:h-[30px] mr-1 rounded-full pb-0.5"
                      style={{
                        minHeight: "30px",
                        minWidth: "30px",
                        maxHeight: "30px",
                        maxWidth: "30px",
                      }}
                    >
                      <img
                        src="https://storage.googleapis.com/dexhunter-images/tokens/95a427e384527065f2f8946f5e86320d0117839a5e98ea2c0b55fb0048554e54.webp"
                        className="rounded-full"
                        width="30"
                        height="30"
                        alt="95a427e384527065f2f8946f5e86320d0117839a5e98ea2c0b55fb0048554e54"
                        style={{
                          display: "block",
                          maxWidth: "30px",
                          maxHeight: "30px",
                        }}
                      />
                      <img
                        src="https://storage.googleapis.com/dexhunter-images/public/verified.svg"
                        className="absolute @md/appRoot:bottom-[-2.5px] @md/appRoot:right-[-2.5px] z-2 bottom-[-1px] right-[-1px]"
                        width="15"
                        height="15"
                      />
                    </div>
                    <span className="@md/appRoot:text-3xl text-lg leading-none text-mainText font-proximaMedium tracking-tighter">
                      HUNT
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="15"
                      viewBox="0 0 8 5"
                      fill="none"
                      className="text-mainText w-2.5 h-2.5 @md/appRoot:w-3 @md/appRoot:h-3"
                    >
                      <path
                        d="M7.6364 1.6364C7.98787 1.28493 7.98787 0.715076 7.6364 0.363602C7.28493 0.0121284 6.71508 0.0121278 6.3636 0.363601L7.6364 1.6364ZM3.3636 3.3636C3.01213 3.71508 3.01213 4.28493 3.3636 4.6364C3.71508 4.98787 4.28493 4.98787 4.6364 4.6364L3.3636 3.3636ZM1.6364 0.363601C1.28493 0.0121281 0.715075 0.0121281 0.363601 0.363601C0.0121281 0.715075 0.0121281 1.28493 0.363601 1.6364L1.6364 0.363601ZM3.35897 4.63176C3.71044 4.98324 4.28029 4.98324 4.63176 4.63176C4.98324 4.28029 4.98324 3.71044 4.63176 3.35897L3.35897 4.63176ZM7 1C6.3636 0.363601 6.36359 0.363608 6.36358 0.363623C6.36356 0.363639 6.36354 0.363661 6.36351 0.363692C6.36345 0.363752 6.36336 0.363843 6.36324 0.363964C6.363 0.364206 6.36263 0.364568 6.36215 0.365049C6.36119 0.366011 6.35976 0.367448 6.35785 0.369348C6.35405 0.37315 6.3484 0.378807 6.34097 0.386228C6.32613 0.40107 6.30423 0.42297 6.276 0.451201C6.21954 0.507662 6.13776 0.589444 6.03647 0.69073C5.8339 0.893301 5.55331 1.17389 5.24126 1.48594C4.61714 2.11006 3.86714 2.86006 3.3636 3.3636L4.6364 4.6364C5.13994 4.13286 5.88994 3.38286 6.51405 2.75874C6.82611 2.44668 7.1067 2.1661 7.30927 1.96353C7.41055 1.86224 7.49234 1.78046 7.5488 1.724C7.57703 1.69577 7.59893 1.67387 7.61377 1.65903C7.62119 1.65161 7.62685 1.64595 7.63065 1.64215C7.63255 1.64025 7.63399 1.63881 7.63495 1.63785C7.63543 1.63737 7.63579 1.637 7.63603 1.63676C7.63616 1.63664 7.63625 1.63655 7.63631 1.63649C7.63634 1.63646 7.63636 1.63644 7.63638 1.63642C7.63639 1.63641 7.6364 1.6364 7 1ZM0.363601 1.6364L3.35897 4.63176L4.63176 3.35897L1.6364 0.363601L0.363601 1.6364Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                  <div className="">
                    <input
                      type="text"
                      // inputmode="decimal"
                      className="px-0 border-none border-transparent focus-visible:border-transparent focus-visible:ring-0 focus-visible:ring-offset-0 text-right bg-transparent w-full sm:h-7.5 @md/appRoot:text-3xl text-lg text-mainText font-proximaMedium tracking-tighter"
                      placeholder="0"
                      value="0"
                    />
                  </div>
                </div>
                <div className="text-sm flex justify-between w-full items-center sm:pt-[7px]">
                  <span className="text-base sm:text-sm/none text-subText font-proximaMedium">
                    HUNT
                  </span>
                  <div className="text-base sm:text-sm/none text-gray-103 font-proximaMedium flex items-center leading-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="sm:h-[14px]"
                    >
                      <path d="M4 12c0 -1.657 1.592 -3 3.556 -3c1.963 0 3.11 1.5 4.444 3c1.333 1.5 2.48 3 4.444 3s3.556 -1.343 3.556 -3"></path>
                    </svg>
                    $0.00
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full py-[2px] @md/appRoot:py-[2px] @md/appRoot:px-4 @sm/appRoot:px-5 justify-between items-center gap-2 h-[30px]">
          <div className="flex justify-between w-full">
            <div className="flex items-center text-sm gap-2 text-mainText font-proximaSemiBold w-full">
              <div className="flex items-center gap-2 hover:text-gray-400 transition-all duration-100">
                <div className="">
                  <span
                    style={{
                      display: "inherit",
                      position: "relative",
                      width: "20px",
                      height: "20px",
                    }}
                  >
                    {/* <span style="position: absolute; height: 20px; width: 20px; border: thick solid var(--accent); border-radius: 50%; opacity: 1; top: 0px; left: 0px; animation: 2.66667s cubic-bezier(0.165, 0.84, 0.44, 1) -1s infinite normal none running react-spinners-PuffLoader-puff-1, cubic-bezier(0.3, 0.61, 0.355, 1) normal none running react-spinners-PuffLoader-puff-2;"></span>
                    <span style="position: absolute; height: 20px; width: 20px; border: thick solid var(--accent); border-radius: 50%; opacity: 1; top: 0px; left: 0px; animation: 2.66667s cubic-bezier(0.165, 0.84, 0.44, 1) 0s infinite normal none running react-spinners-PuffLoader-puff-1, cubic-bezier(0.3, 0.61, 0.355, 1) normal none running react-spinners-PuffLoader-puff-2;"></span> */}
                  </span>
                </div>
                <div className="flex items-center gap-1 cursor-pointer  leading-none">
                  <span className="sm:text-mainText sm:font-proximaSemiBold sm:text-sm">
                    1 HUNT
                  </span>
                  <span className="text-subText sm:font-proximaSemiBold sm:text-sm">
                    =
                  </span>
                  <span className="sm:text-mainText sm:font-proximaSemiBold sm:text-sm">
                    <div
                      style={{
                        display: "inline-flex",
                        alignItems: "baseline",
                        gap: "3px",
                      }}
                    >
                      <span></span>
                      <span
                        style={{
                          display: "inline-flex",
                          alignItems: "baseline",
                        }}
                      >
                        0.2162825
                      </span>
                    </div>{" "}
                    ADA{" "}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center cursor-pointer gap-[6px]">
            <span className="text-accent text-sm font-proximaBold">
              DETAILS
            </span>
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 8 5"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-accent w-2 rotate-180"
            >
              <path
                d="M7.6364 1.6364C7.98787 1.28493 7.98787 0.715076 7.6364 0.363602C7.28493 0.0121284 6.71508 0.0121278 6.3636 0.363601L7.6364 1.6364ZM3.3636 3.3636C3.01213 3.71508 3.01213 4.28493 3.3636 4.6364C3.71508 4.98787 4.28493 4.98787 4.6364 4.6364L3.3636 3.3636ZM1.6364 0.363601C1.28493 0.0121281 0.715075 0.0121281 0.363601 0.363601C0.0121281 0.715075 0.0121281 1.28493 0.363601 1.6364L1.6364 0.363601ZM3.35897 4.63176C3.71044 4.98324 4.28029 4.98324 4.63176 4.63176C4.98324 4.28029 4.98324 3.71044 4.63176 3.35897L3.35897 4.63176ZM7 1C6.3636 0.363601 6.36359 0.363608 6.36358 0.363623C6.36356 0.363639 6.36354 0.363661 6.36351 0.363692C6.36345 0.363752 6.36336 0.363843 6.36324 0.363964C6.363 0.364206 6.36263 0.364568 6.36215 0.365049C6.36119 0.366011 6.35976 0.367448 6.35785 0.369348C6.35405 0.37315 6.3484 0.378807 6.34097 0.386228C6.32613 0.40107 6.30423 0.42297 6.276 0.451201C6.21954 0.507662 6.13776 0.589444 6.03647 0.69073C5.8339 0.893301 5.55331 1.17389 5.24126 1.48594C4.61714 2.11006 3.86714 2.86006 3.3636 3.3636L4.6364 4.6364C5.13994 4.13286 5.88994 3.38286 6.51405 2.75874C6.82611 2.44668 7.1067 2.1661 7.30927 1.96353C7.41055 1.86224 7.49234 1.78046 7.5488 1.724C7.57703 1.69577 7.59893 1.67387 7.61377 1.65903C7.62119 1.65161 7.62685 1.64595 7.63065 1.64215C7.63255 1.64025 7.63399 1.63881 7.63495 1.63785C7.63543 1.63737 7.63579 1.637 7.63603 1.63676C7.63616 1.63664 7.63625 1.63655 7.63631 1.63649C7.63634 1.63646 7.63636 1.63644 7.63638 1.63642C7.63639 1.63641 7.6364 1.6364 7 1ZM0.363601 1.6364L3.35897 4.63176L4.63176 3.35897L1.6364 0.363601L0.363601 1.6364Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </div>
        <button className="inline-flex items-center justify-center font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 px-4 py-2 w-full shadow h-12 @sm/appRoot:h-16 sm:h-[60px] rounded-3xl bg-accent hover:bg-accent hover:bg-opacity-90 transition-colors duration-200 ease-in-out text-buttonText font-proximaMedium sm:font-proximaSemiBold text-xl">
          Connect Wallet
        </button>
        <div className="text-mainText font-proximaMedium md:pr-[60px] lg:pr-[60px] gap-2 w-full justify-center flex cursor-pointer items-center">
          <span className="leading-none">Powered by</span>
          <div className="mr-3 sm:ml-0 flex items-center">
            {/* <img
              src=""
              className="h-[25px] w-[25px] mr-1"
              width="25"
              height="25"
              alt="swap"
            /> */}
            <span className="font-abcBold leading-none pt-[2px]">Swap</span>
            <span className="font-abcLight leading-none pt-[2px] ml-2">Clone</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default hello;
