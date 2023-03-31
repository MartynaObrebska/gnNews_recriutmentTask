import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // we init with resources
    resources: {
      en: {
        translations: {
          key: "en",
          homePageTitle: "Find latest news from around the world!",
          homePageDescription: "Select country to see all its news. ",
          totalArticles: "Total articles: ",
          menuButton: "About",
          popUpTitle: "Ups and downs",
          popUpDescriptionPart1:
            "The hardest part for me was working with the UI library and Redux because I didn't have much experience with these tools before. However, I try to consider it more as a challenge not a problem, because thanks to this I can learn new things and develop myself even more. It gives me much more satisfaction when I manage to overcome some difficulty. That is why these same aspects were also the greatest pleasure for me. ",
          popUpDescriptionPart2:
            "The cooperation with the News API was interesting as well. I also had a lot of fun creating the design of the entire application based on the design of the gnStudio website.",
          popUpDescriptionPart3:
            "I know that after all there is still some things to improve, some code to optimize. I also didn't write the tests, becouse I didn't have enought time and I don't know it well enough. There is still so much to learn and I love it!",
          popUpDescriptionPart4:
            "To sum up, working on the project was very satisfying and developmental.",
        },
      },
      pl: {
        translations: {
          key: "pl",
          homePageTitle: "Sprawdź najnowsze wiadomości z całego świata!",
          homePageDescription:
            "Wybierz kraj, aby zobaczyć wszystkie wiadomości. ",
          totalArticles: "Liczba artykułów: ",
          menuButton: "Opis",
          popUpTitle: "Trudności i przyjemności",
          popUpDescriptionPart1:
            "Największą trudność sprawiła mi praca z biblioteką UI i Reduxem, ponieważ nie miałam wcześniej zbyt dużego doświadczenia z tymi narzędziami. Staram sie jednak traktować to bardziej jako wyzwania nie problem, ponieważ dzięki temu bardziej się rozwijam i uczę nowych rzeczy. Daje mi to zdecydowanie wiekszą satysfakcję, gdy uda mi się pokonać jakąś trudność. Dlatego właśnie te same aspekty były dla mnie również największą przyjemnością.",
          popUpDescriptionPart2:
            "Ciekawa była również współpraca z News API. Duuuużo frajdy sprawiło mi także projektowanie designu całej aplikacji w oparciu o design strony gnStudio.",
          popUpDescriptionPart3:
            "Wiem, że mimo wszystko jest jeszcze sporo rzeczy do poprawy, kodu do zoptymalizowania. Nie napisałam również testów, ponieważ zabrakło mi czasu oraz nie czuję się w tym zbyt biegła. Jest wciąż tyle do nauki i to jest w tym wszystkim najciekawsze!",
          popUpDescriptionPart4:
            "Podsumowując, praca nad projektem była ogólnie bardzo satysfakcjonująca i rozwijająca.",
        },
      },
    },
    fallbackLng: "en",
    debug: true,

    ns: ["translations"],
    defaultNS: "translations",

    keySeparator: false,

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
