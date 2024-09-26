"use client";
import React from "react";
import { hasCookie, setCookie } from "cookies-next";
import Link from "next/link";

const CookieConsent = () => {
  const [showConsent, setShowConsent] = React.useState(true);

  React.useEffect(() => {
    setShowConsent(hasCookie("localConsent"));
  }, []);

  const acceptCookie = () => {
    setShowConsent(true);
    setCookie("localConsent", "true", {});
  };

  if (showConsent) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-slate-700 bg-opacity-70">
      <div className="flex flex-col items-end fixed bottom-0 left-0 right-0 px-8 py-8">
        <div className="flex flex-col items-center lg:w-1/4 px-4 py-8 rounded-xl bg-amber-400">
          <span className="text-dark text-base">
            Мы используем файлы cookie. Продолжая использовать сайт, вы
            соглашаетесь с этим.
          </span>
          <button
            className="bg-gray-800 py-2 px-8 mt-6 rounded text-white"
            onClick={() => acceptCookie()}
          >
            Принять
          </button>
          <Link href='/cookie' className="mt-2 text-blue-800">Соглашения о cookie</Link>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
