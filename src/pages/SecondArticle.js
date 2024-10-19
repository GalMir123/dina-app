import { useEffect } from "react";
import SideBar from "../components/SideBar";
import SideBarSmall from "../components/SideBarSmall";

export default function SecondArticle() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "20vh",
      }}
    >
      <SideBar />
      <SideBarSmall />
      <p className="article-text">
        לפני כמה ימים, דיברתי עם מישהי על נושא הפחד בלידה, היא סיפרה לי שבהריון
        הקודם שלה היא הלכה למישהי שסיפרה לה שפחד עוצר את הלידה, ומרוב שהפחידה
        אותה היא לא רצתה לא ללכת לקורס הכנה ללידה ולא לקחת מלווה. אז עניתי לה
        שהרעיון בהכנה ללידה זה לא רק לדבר על הפחד וההשפעה שלו על הלידה, אלא באמת
        לקבל כלים איך להתמודד עם הפחד ומה לעשות כדי להיות ברוגע בזמן הלידה. אני
        חושבת שאחד היחודיות העיקרית של קורס kg היפנוברת'ינג שבקורס עצמו מתרגלים
        המון הרפיות לשחרור פחדים, נותנים המון כלים לעבודה תודעתית, איך לשנות את
        החשיבה לצורה חיובית ומקדמת.
      </p>
      <p className="article-text">
        אז בואו רגע נדבר על הפחד וההורמונים. ברגע שאנו פוחדים זה יכול להיות
        שאפילו יש חשש קל, הגוף מפעיל את מערכת הקיפאון-בריחה-לחימה, הגוף מפריש את
        הורמון האדרנלין שגורם לזרימת הדם להגיע לגפיים העליונות והתחתונות כדי
        לאפשר בריחה או לחימה. זרימת הדם לאיברים הפנימיים פוחתת. כל זאת כדי להגיב
        לסכנה שקיימת וכדי שהגוף יוכל להתגונן. בעבר הקדום זה היה מאוד הכרחי כדי
        לשרוד. כיום יש הרבה איומים וחששות שהם לאב דווקא נראים לעין והם בעיקר
        תחושתיים שמפעילים את אותו מנגנון בדיוק.
      </p>
      <p className="article-text">
        אבל איך כל זה קשור ללידה? בזמן הלידה אנחנו רוצים בדיוק את המנגנון ההפוך
        של הרוגע והשלווה, בו הגוף מפריש את הורמון האוקסיטוצין (או בשמו האחר
        הורמון האהבה) הורמון זה גורם לנו להתאהב ובמקרה של הלידה מתחיל את הגלים
        (הצירים) ומגביר אותם ללידה אפקטיבית ועוצמתית. מבחינה פיזיולוגית זרימת
        הדם תופרש לאיברים הפנימיים ובעיקר לרחם, כך שהשרירים יעבדו בצורה אפקטיבית
        ויעילה. כאשר הכול עובד בסינרגיה הגוף גם מפריש הורמונים אנדורפינים שאף
        משכחים את הכאב.
      </p>
      <p className="article-text">
        אז כמו שאמרנו, זה טוב ויפה לדעת את כל הדברים הללו, אבל זה קצת מעלה
        חששות, איך אני אהיה במצב של רגיעה? ופה נכנסים הכלים שאנו נותנים בקורס.
      </p>
      <p className="article-text">
        אתן לכם דוגמא: אם אני אומר לכם: "אל תחשבו על פיל ורוד", מה ישר תעשו?
        תחשבו על פיל וורוד. המוח לא 'שומע' את ה"אל" והוא 'מקשיב' להמשך המשפט, אז
        הוא יחשוב על הפיל הורוד. אותו הדבר עם הפחדים, אם ננסה לא לחשוב על הפחדים
        שלנו למעשה רק נחשוב עליהם.
      </p>
      <p className="article-text">
        אז מה עושים? פשוט מאמנים את עצמנו על מה כן לחשוב, על מה כן להתמקד, על
        הדברים החיוביים שכן רוצים שיקרו ויהיו. זה לא קורה בשניה, זה מצריך תרגול,
        אבל ממש אפשרי.
      </p>
      <p className="article-text">
        לדוגמא: איזה יום יפה היום, השמיים כחולים, השמש מאירה והציפורים מצייצות
        (אז נכון שבחדשות הכול קשה ומפחיד) אבל אם נסתכל החוצה ונתמקד בטוב פתאום
        נראה שקל לנו לנשום, והתחושה הרבה יותר נעימה. ולגבי הלידה, אנו נתמקד במה
        אנו כן רוצים: לידה אפקטיבית ונוחה, גלים רכים ועוצמתיים ועוד הרבה
        דוגמאות, כל אחת בהתאם לחששות שלה. בקורס אנו ממש עובדים אינדיבידואלית כל
        אחת והחששות שלה וממקדים לצורה חיובית. וכמובן מקבלים כלים רבים נוספים.
      </p>

      <p className="article-text">
        אני מזמינה את כולכם, להיות בקשיבות לחששות או משפטים שליליים שעולים לכם
        במחשבות ולהמיר אותם למשפט חיובי. תצאו החוצה הסתכלו על הדברים הטובים
        וציינו זאת לעצמכם, הודו עליהם.
      </p>
      <p className="article-text">
        אשמח שתכתבו לי על מה אתם מודים היום? מה ראיתם חיובי היום?
      </p>

      <style>
        {`
        .article-text {
            width: 80vw;
       text-align: right; 
        font-size: 2vw;
        }
      
          @media (max-width: 1250px) {
            .article-text {
              width: 80vw;
              font-size: 5vw; /* Adjusted smaller screen font size */
              text-align: right;
            }
          }
        `}
      </style>
    </div>
  );
}
