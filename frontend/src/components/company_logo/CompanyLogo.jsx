import React from 'react'
import Logo1 from '../../assets/image/company_logo/logo1.svg'
import Logo2 from '../../assets/image/company_logo/logo2.svg'
import Logo3 from '../../assets/image/company_logo/logo3.svg'
import Logo4 from '../../assets/image/company_logo/logo4.svg'
import Logo5 from '../../assets/image/company_logo/logo5.svg'


const CompanyLogo = () => {
  return (
    <section>
        <div className="company_logo_container">
            <div className="company_logo">

                <div className="company_logo1">
                    <img src={Logo1} alt="company logo" />
                </div>

                <div className="company_logo1">
                    <img src={Logo2} alt="company logo" />
                </div>

                <div className="company_logo1">
                    <img src={Logo3} alt="company logo" />
                </div>

                <div className="company_logo1">
                    <img src={Logo4} alt="company logo" />
                </div>

                <div className="company_logo1">
                    <img src={Logo5} alt="company logo" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default CompanyLogo