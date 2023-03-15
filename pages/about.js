import Image from "next/image";
import Meta from "../Components/Meta";
import Hero from "../Components/Hero";
import styles from "../styles/About.module.scss";

const About = () => {
  return (
    <>
      <Meta />
      <main className="page-container">
        <Hero
          description="As a Christian owned company, a portion of our revenue will be partnered with the following ministries/organizations (Mt; 19: 21; Mt 28:19,20) to further God’s Kingdom.
          
          With each purchase  you will be joining with us to make this happen (Pr 22:9).  To see  the work of these ministries, scroll below."
          title="OUR PARTNERSHIPS"
          imageClassName="white-image"
        />

        <section className={styles.promise_container}>
          <div className={styles.promise_image_box}>
            <Image
              src="/assets/about/asifiwe1.webp"
              alt="Our Promise"
              height="650"
              width="500"
            />
            <Image
              src="/assets/about/asifiwe2.webp"
              alt="Quality Work"
              height="500"
              width="500"
            />
          </div>

          <div className={styles.promise_text_content}>
            <h2>ASIFIWE Childcare Ministries - Uganda</h2>
            <p>
            Asifiwe is a Christian child care ministry that exists to care for Africa’s orphaned, abandoned and most vulnerable children, young men and women. They desire to bring them out of poverty and hopelessness into the dignified life that is a result of the transforming work of the love of Jesus Christ. 

At Asifiwe, they believe that every child needs to belong to a family where they are loved and cared for on a personal basis. They do this by placing a child into a small family of eight children with a loving mother who cares for them like her own children. Every child receives home care, medical care, education, emotional support and spiritual discipleship. 
            </p>
          </div>
        </section>

        <section className={styles.quality_container}>
          <div className={styles.quality_image_box}>
            <Image
              src="/assets/about/quality-coffee.jpg"
              alt="Quality Work"
              height="500"
              width="800"
            />
          </div>

          <div className={styles.quality_text_content}>
            <h2>Quality means doing it right when no one is looking.</h2>
            <p>
              Quality is critical to satisfying our customers and retaining your
              loyalty so they continue to buy from us in the future. Quality
              products make an important contribution to long-term revenue and
              profitability. They also enable us to charge and maintain higher
              prices.
            </p>
          </div>
        </section>
        <br />
      </main>
    </>
  );
};
export default About;
