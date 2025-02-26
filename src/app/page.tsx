import { GetServerSideProps } from "next";

import { Header } from "@/components/Header"
import { SubscribeButton } from "@/components/SubscribeButton";

import { stripe } from "@/services/stripe";

import styles from './home.module.scss'

interface HomeProps {
  product: {
    priceId: string;
    amount: number;
  }
}

export default async function Home() {
  const price = await stripe.prices.retrieve('price_1QhYtjLpEnrloBIlqRXeAhEu', {
    expand: ['product']
  });

  const product = {
    priceId: price.id,
    amount: price.unit_amount ? price.unit_amount / 100 : 0,
  };

  return (
    <>
      <Header />
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👏 Hey, welcome</span>
          <h1>News about the <span>React</span> world.</h1>
          <p>
            Get access to all the publications <br />
            <span>for {product.amount} month</span>
          </p>
          <SubscribeButton />
        </section>

        <img src="/images/welcome.svg" alt="Girl coding" />
      </main>
    </>
  )
}