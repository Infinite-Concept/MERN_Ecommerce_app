import React from 'react'
import Footer from '../../common/footer/Footer'
import Header from '../../common/header/Header'
import Banner from '../../components/homeBanner/Banner'
import CompanyLogo from '../../components/company_logo/CompanyLogo'

const Home = () => {
  return (
    <div className="home">
      <Header />
      <main>
        <section>
          <Banner />
          <CompanyLogo />
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Home