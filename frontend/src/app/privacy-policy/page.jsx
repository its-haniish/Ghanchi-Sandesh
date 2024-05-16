"use client"
import FooterMenu from '@/components/FooterMenu'
import Navbar from '@/components/Navbar'
import React from 'react'

const Page = () => {
    return (
        <>
            <Navbar />
            <main className='w-screen h-fit flex flex-col justify-start items-center px-2 mb-14 mt-[50px]'>
                <h1 className='text-2xl font-Nunito font-semibold underline' >Privacy Policy</h1>

                <p className='w-[90%] text-wrap mt-2 text-justify'>
                    This privacy policy applies to the &ldquo;Ghanchi Sandesh&rdquo; app (&apos;hereby referred to as &quot;Application&quot;&apos;) for mobile devices that was created by &ldquo;Jayesh Ghanchi & Hanish Kumar&rdquo; (&apos;hereby referred to as &quot;Service Provider&quot;&apos;) as a Free service. This service is intended for use &quot;AS IS&quot;.
                </p>

                <h2 className='text-xl font-Nunito font-semibold mt-2'>Information Collection and Use</h2>
                <p className='w-[90%] text-wrap mt-2 text-justify'>
                    The Application collects information when you download and use it. This information may include information such as
                    <br />
                    <strong>Your device&apos;s Internet Protocol address (e.g. IP address)</strong> <br />
                    The pages of the Application that you visit, the time and date of your visit, the time spent on those pages
                    The time spent on the Application.
                    The operating system you use on your mobile device.
                    <br />
                    <i>
                        The Application collects your device&apos;s location, which helps the Service Provider determine your approximate geographical location and make use of in below ways:</i>
                    <br />
                    <strong>Geolocation Services:</strong> <br />
                    The Service Provider utilizes location data to provide features such as personalized content, relevant recommendations, and location-based services. <br />
                    <strong>Analytics and Improvements:</strong> <br />
                    Aggregated and anonymized location data helps the Service Provider to analyse user behaviour, identify trends, and improve the overall performance and functionality of the Application. <br />
                    <strong>Third-Party Services: </strong> <br />
                    Periodically, the Service Provider may transmit anonymized location data to external services. These services assist them in enhancing the Application and optimizing their offerings.
                    <br />
                    <i>The Service Provider may use the information you provided to contact you from time to time to provide you with important information, required notices and marketing promotions.</i> <br />

                </p>


                <h2 className='text-xl font-Nunito font-semibold mt-2'>Third Party Access</h2>
                <p className='w-[90%] text-wrap mt-2 text-justify'>
                    Only aggregated, anonymized data is periodically transmitted to external services to aid the Service Provider in improving the Application and their service. The Service Provider may share your information with third parties in the ways that are described in this privacy statement.
                    <br />
                    Please note that the Application utilizes third-party services that have their own Privacy Policy about handling data. Below are the links to the Privacy Policy of the third-party service providers used by the Application:
                    <br />
                    <strong>Google Play Services</strong>
                    <br />
                    <i>The Service Provider may disclose User Provided and Automatically Collected Information:</i>
                    <br />
                    as required by law, such as to comply with a subpoena, or similar legal process;
                    when they believe in good faith that disclosure is necessary to protect their rights, protect your safety or the safety of others, investigate fraud, or respond to a government request;
                    with their trusted services providers who work on their behalf, do not have an independent use of the information we disclose to them, and have agreed to adhere to the rules set forth in this privacy statement.
                </p>

                <h2 className='text-xl font-Nunito font-semibold mt-2'>Opt-Out Rights</h2>
                <p className='w-[90%] text-wrap mt-2 text-justify'>You can stop all collection of information by the Application easily by uninstalling it. You may use the standard uninstall processes as may be available as part of your mobile device or via the mobile application marketplace or network.</p>


                <h2 className='text-xl font-Nunito font-semibold mt-2'>Data Retention Policy</h2>
                <p className='w-[90%] text-wrap mt-2 text-justify'>The Service Provider will retain User Provided data for as long as you use the Application and for a reasonable time thereafter. If you&apos;d like them to delete User Provided Data that you have provided via the Application, please contact them at shreeghanchisandesh@gmail.com and they will respond in a reasonable time.
                    <br />
                    The Application does not address anyone under the age of 13. The Service Provider does not knowingly collect personally identifiable information from children under 13 years of age. In the case the Service Provider discover that a child under 13 has provided personal information, the Service Provider will immediately delete this from their servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact the Service Provider (shreeghanchisandesh@gmail.com) so that they will be able to take the necessary actions.</p>

                <h2 className='text-xl font-Nunito font-semibold mt-2'>Security</h2>
                <p className='w-[90%] text-wrap mt-2 text-justify'>The Service Provider is concerned about safeguarding the confidentiality of your information. The Service Provider provides physical, electronic, and procedural safeguards to protect information the Service Provider processes and maintains.</p>

                <h2 className='text-xl font-Nunito font-semibold mt-2'>Changes</h2>
                <p className='w-[90%] text-wrap mt-2 text-justify'>This Privacy Policy may be updated from time to time for any reason. The Service Provider will notify you of any changes to the Privacy Policy by updating this page with the new Privacy Policy. You are advised to consult this Privacy Policy regularly for any changes, as continued use is deemed approval of all changes.</p>

                <p className='text-xl font-Nunito font-semibold mt-2 text-center'>•This privacy policy is effective as of 2024-05-10.</p>

                <h2 className='text-xl font-Nunito font-semibold mt-2'>Contact Us</h2>
                <p className='w-[90%] text-wrap mt-2 text-justify'>If you have any questions regarding privacy while using the Application, or have questions about the practices, please contact the Service Provider via email at <a className='cursor-pointer text-blue-600 font-normal underline' href="mailto:shreeghanchisandesh@gmail.com">shreeghanchisandesh@gmail.com</a>.</p>

            </main>
            <FooterMenu />
        </>
    )
}

export default Page