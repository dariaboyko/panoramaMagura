import classes from "./css/Rooms.module.css";
import classNames from "classnames";
import ContentPageAnimation from "./ContentPageAnimation";
import ImageGallery from "react-image-gallery";
function UkrainianRoomsSmallHouse(props) {
  const images = [
    {
      original: require("../img/gallery/image10.jpg"),
    },
    {
      original: require("../img/gallery/image11.jpg"),
    },
    {
      original: require("../img/gallery/image15.jpg"),
    },
    {
      original: require("../img/gallery/image16.jpg"),
    },
  ];
  return (
    <div className={classes.smallHouseBackground}>
      <ContentPageAnimation>
        <div className={classes.contentWrapper}>
          <p
            className={classNames(
              classes.mainText,
              classes.firstFloorDescription
            )}
          >
            Також є котедж на дві кімнати, 6 місць. Кухня, індукційна плита,
            столова, кондиціонер, що працює і на опалення. Вбиральня одна,
            душова велика з теплою підлогою. Чудовий краєвид
          </p>
          <img
            className={classes.image13}
            src={require("../img/image13.jpg")}
            alt="вид з садиби"
          />
          <img
            className={classes.image8}
            src={require("../img/image12.jpg")}
            alt="вид з садиби"
          />
          <p className={classNames(classes.mainText, classes.roomPrices)}>
            Сдається вся садиба:<br></br>
            1800 ₴ за ніч <br></br>1500 ₴ 7 діб <br></br>1100 $ за місяць
            <br></br>Заїзд о 14:00, виїзд о 12:00, можуть бути виключення.
          </p>
          <img
            className={classes.image9}
            src={require("../img/image14.jpg")}
            alt="вид з садиби"
          />
        </div>
        <div className={classes.smallHouseBackgroundStairs}>
          <div className={classes.contentWrapper}>
            <p
              className={classNames(
                classes.mainText,
                classes.firstFloorDescription
              )}
            >
              На другому поверсі — 2 тримісні номери (двоспальне ліжко,
              односпальне ліжко, шафа для одягу, стіл)
            </p>
            <section className={classes.gallery}>
              <ImageGallery items={images} />
            </section>
          </div>
        </div>
      </ContentPageAnimation>
    </div>
  );
}
export default UkrainianRoomsSmallHouse;
