import Image from "next/image";
import styles from "../styles/Why.module.scss";
import {FaRibbon} from 'react-icons/fa'
import {TbTruckDelivery} from 'react-icons/tb'
import {MdFavorite} from 'react-icons/md'

const Why = ({ index, imageURL, title, description, altText }) => {
  console.log(index)
  return (
    <>
      <div className={styles.container}>
        <div className={styles.image_box}>
          {/* <Image src={imageURL} alt={altText} height="72" width="72" /> */}
          {index == 0 && <FaRibbon size={90}/>}
          {index == 1 && <TbTruckDelivery size={90}/>}
          {index == 2 && <MdFavorite size={90}/>}
        </div>
        <div className={styles.text_content}>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </>
  );
};

// Why.defaultProps = {
//   imageURL: "/assets/data/coffee-bean-bag.png",
//   title: "NextJS Coffee Shop",
//   description: "We are coming soon !",
//   altText: "Why choose us ?",
// };

export default Why;
